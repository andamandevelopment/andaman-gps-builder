# syntax=docker/dockerfile:1

FROM oven/bun:1-alpine AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

# Vite replaces import.meta.env.VITE_* values at build time.
ARG VITE_API_URL
ARG VITE_BETTER_AUTH_URL
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_BETTER_AUTH_URL=${VITE_BETTER_AUTH_URL}

RUN bun run build

FROM oven/bun:1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3058

RUN apk add --no-cache curl

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY --from=builder --chown=bun:bun /app/dist ./dist

COPY --chown=bun:bun <<'EOF' /app/server.mjs
import { stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import serverModule from "./dist/server/server.js";

const ssrHandler = serverModule.default ?? serverModule;
const publicDir = join(import.meta.dir, "dist", "client");
const port = Number(process.env.PORT ?? 3058);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function getStaticFile(pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return undefined;
  }

  const relativePath = normalize(decodedPath).replace(/^([/\\])+/, "");
  if (!relativePath || relativePath.startsWith("..")) {
    return undefined;
  }

  const filePath = join(publicDir, relativePath);
  try {
    const fileStat = await stat(filePath);
    return fileStat.isFile() ? filePath : undefined;
  } catch {
    return undefined;
  }
}

Bun.serve({
  hostname: "0.0.0.0",
  port,
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "GET" || request.method === "HEAD") {
      const filePath = await getStaticFile(url.pathname);
      if (filePath) {
        return new Response(request.method === "HEAD" ? null : Bun.file(filePath), {
          headers: {
            "cache-control": url.pathname.startsWith("/assets/")
              ? "public, max-age=31536000, immutable"
              : "public, max-age=0, must-revalidate",
            "content-type": mimeTypes[extname(filePath)] ?? "application/octet-stream",
          },
        });
      }
    }

    return ssrHandler.fetch(request, process.env, {
      passThroughOnException() {},
      waitUntil() {},
    });
  },
});

console.log(`SSR server listening on port ${port}`);
EOF

USER bun

EXPOSE 3058
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -fsS "http://127.0.0.1:${PORT}/" >/dev/null || exit 1

CMD ["bun", "server.mjs"]
