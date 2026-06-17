# syntax=docker/dockerfile:1

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm ci

FROM deps AS builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# # Keep dev dependencies because `vite preview` is used as the runtime server.
# COPY --from=deps /app/node_modules ./node_modules
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/package.json ./package.json

FROM nginx:stable-alpine as production-stage
COPY --from=builder /app/dist /usr/share/nginx/html
 
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

