import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin,
  Video,
  Truck,
  Cpu,
  Bell,
  History,
  LineChart,
  Smartphone,
  Globe2,
  Users,
  ShieldCheck,
  Wrench,
  Award,
  Headphones,
  Building2,
  Zap,
  ChevronDown,
  Phone,
  Mail,
  MapPinned,
  ArrowRight,
  CheckCircle2,
  Facebook,
  Music2,
  MessageCircle,
  Apple,
  Play,
} from "lucide-react";

import logoAsset from "@/assets/andaman-gps-logo.png.asset.json";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import featureTracking from "@/assets/feature-tracking.jpg";
import featureMdvr from "@/assets/feature-mdvr.jpg";
import featureFleet from "@/assets/feature-fleet.jpg";
import mobileApp from "@/assets/mobile-app.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andaman GPS | ระบบติดตามรถ GPS และบริหารจัดการยานพาหนะครบวงจร" },
      {
        name: "description",
        content:
          "Andaman GPS ผู้เชี่ยวชาญด้าน GPS Tracking, MDVR และ Fleet Management ติดตามรถแบบเรียลไทม์ พร้อมทีมติดตั้งทั่วประเทศ",
      },
      { property: "og:title", content: "Andaman GPS | ระบบติดตามรถ GPS ครบวงจร" },
      {
        property: "og:description",
        content:
          "โซลูชัน GPS Tracking, MDVR และ Fleet Management สำหรับองค์กรและธุรกิจขนส่ง",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Andaman GPS",
          legalName: "บริษัท อันดามัน แทร็คกิ้ง จำกัด",
          url: "/",
          telephone: "+66866885686",
          email: "andamangps1@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressRegion: "ภูเก็ต",
            addressCountry: "TH",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "หน้าแรก", href: "#home" },
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "บริการ", href: "#services" },
  { label: "ฟีเจอร์", href: "#features" },
  { label: "แอปพลิเคชัน", href: "#app" },
  { label: "ลูกค้าของเรา", href: "#customers" },
  { label: "บทความ", href: "#blog" },
  { label: "ติดต่อเรา", href: "#contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Customers />
        <About />
        <Services />
        <Features />
        <MobileAppSection />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src={logoAsset.url} alt="Andaman GPS" className="h-10 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:opacity-95 transition"
          >
            ขอใบเสนอราคา <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-foreground py-2 font-medium"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-cta px-5 py-3 text-sm font-semibold text-white"
            >
              ขอใบเสนอราคา
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero text-white pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-white/90">
            <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
            ผู้นำด้าน GPS Tracking และ Fleet Management
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
            โซลูชัน <span className="text-brand-orange-soft">GPS Tracking</span> <br />
            และระบบบริหารจัดการ
            <br />
            ยานพาหนะครบวงจร
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
            ติดตามรถแบบเรียลไทม์ วิเคราะห์ข้อมูลการเดินทาง เพิ่มประสิทธิภาพ
            ลดต้นทุน และยกระดับความปลอดภัยให้ธุรกิจของคุณ
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-glass hover:bg-brand-orange/90 transition"
            >
              ขอใบเสนอราคา <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              ทดลองใช้งานระบบ
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { t: "10+ ปี", d: "ประสบการณ์" },
              { t: "ทั่วประเทศ", d: "ทีมติดตั้ง" },
              { t: "ผ่านมาตรฐาน", d: "กรมขนส่งทางบก" },
            ].map((s) => (
              <div key={s.d} className="border-l-2 border-brand-orange pl-4">
                <div className="text-lg font-bold">{s.t}</div>
                <div className="text-xs text-white/70 mt-1">{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative animate-float">
            <img
              src={heroDashboard}
              alt="Andaman GPS Fleet Dashboard"
              width={1280}
              height={960}
              className="rounded-3xl shadow-glass border border-white/10"
            />
          </div>
          <div className="absolute -left-4 lg:-left-10 top-10 glass rounded-2xl p-4 shadow-glass w-52 text-white animate-float" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <MapPin className="h-4 w-4 text-brand-orange" /> Live Tracking
            </div>
            <div className="mt-2 text-2xl font-bold">128 คัน</div>
            <div className="text-xs text-white/60">กำลังเดินทาง</div>
          </div>
          <div className="absolute -right-2 lg:-right-6 bottom-12 glass rounded-2xl p-4 shadow-glass w-56 text-white animate-float" style={{ animationDelay: "2s" }}>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Bell className="h-4 w-4 text-brand-orange" /> แจ้งเตือนล่าสุด
            </div>
            <div className="mt-2 text-sm font-semibold">ออกนอก Geofence</div>
            <div className="text-xs text-white/60 mt-1">รถ 70-1234 • 2 นาทีที่แล้ว</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Customers Logo Marquee ---------- */
function Customers() {
  const names = [
    "Thai Logistics", "Phuket Transport", "Andaman Express", "BKK Cargo",
    "South Trade", "Siam Fleet", "Royal Movers", "PTT Logistics",
    "CP Express", "TipCo", "Lotus Group", "Singha Co.",
  ];
  return (
    <section id="customers" className="py-16 bg-surface border-y border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="text-center text-sm text-muted-foreground font-medium">
          ได้รับความไว้วางใจจากองค์กรชั้นนำทั่วประเทศ
        </p>
        <div className="mt-8 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-14 animate-marquee w-max">
            {[...names, ...names].map((n, i) => (
              <div
                key={i}
                className="text-2xl font-bold text-muted-foreground/70 whitespace-nowrap tracking-tight"
                style={{ fontFamily: "Kanit, sans-serif" }}
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  const stats = [
    { v: "10+", l: "ปี ประสบการณ์" },
    { v: "10,000+", l: "คันที่ติดตั้ง" },
    { v: "1,000+", l: "ลูกค้าองค์กร" },
    { v: "ทั่วไทย", l: "ทีมบริการ" },
  ];
  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            เกี่ยวกับเรา
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
            กว่า 10 ปี แห่งความเชี่ยวชาญด้าน <span className="text-gradient-brand">GPS Tracking</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            บริษัท อันดามัน แทร็คกิ้ง จำกัด ก่อตั้งเมื่อปี 2557 ให้บริการด้านระบบติดตามยานพาหนะ
            เทคโนโลยี IoT และโซลูชันบริหารจัดการขนส่งครบวงจร
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            ให้บริการลูกค้าทั่วประเทศ ครอบคลุมรถยนต์ส่วนบุคคล รถขนส่ง รถบรรทุก รถโดยสาร
            และเครื่องจักรเฉพาะทาง
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["ผ่านมาตรฐานกรมการขนส่ง", "ทีมงานมืออาชีพ", "บริการ 24/7"].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" /> {b}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`rounded-3xl p-8 shadow-card border border-border ${
                i % 2 === 0 ? "bg-gradient-brand text-white" : "bg-white"
              }`}
            >
              <div className={`text-4xl md:text-5xl font-extrabold ${i % 2 === 0 ? "text-white" : "text-gradient-brand"}`}>
                {s.v}
              </div>
              <div className={`mt-2 text-sm ${i % 2 === 0 ? "text-white/80" : "text-muted-foreground"}`}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    {
      icon: MapPin,
      title: "GPS Tracking",
      items: ["ติดตามตำแหน่งแบบเรียลไทม์", "ประวัติการเดินทางย้อนหลัง", "แจ้งเตือนอัจฉริยะ", "Geofence"],
    },
    {
      icon: Video,
      title: "MDVR & AI Camera",
      items: ["ดูภาพสดออนไลน์", "ดาวน์โหลดย้อนหลัง", "AI วิเคราะห์พฤติกรรมขับขี่", "หลักฐานเมื่อเกิดอุบัติเหตุ"],
    },
    {
      icon: Truck,
      title: "Fleet Management",
      items: ["จัดการรถหลายคัน", "วิเคราะห์ต้นทุน", "จัดการผู้ขับขี่", "รายงานอัตโนมัติ"],
    },
    {
      icon: Cpu,
      title: "IoT Sensors",
      items: ["เซ็นเซอร์น้ำมัน", "เซ็นเซอร์อุณหภูมิ", "ปุ่ม SOS", "OBD / CAN Bus"],
    },
  ];
  return (
    <section id="services" className="py-28 lg:py-36 bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">บริการของเรา</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
            โซลูชันครบวงจรสำหรับธุรกิจขนส่ง
          </h2>
          <p className="mt-4 text-muted-foreground">
            ครอบคลุมตั้งแต่อุปกรณ์ ระบบ และทีมงาน ติดตั้ง — รองรับธุรกิจทุกขนาด
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl bg-white p-8 border border-border shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-glass hover:border-accent/40"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center text-white group-hover:bg-gradient-cta transition">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition"
              >
                เรียนรู้เพิ่มเติม <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const features = [
    {
      icon: MapPin,
      title: "ติดตามตำแหน่งแบบ Real-time",
      desc: "เห็นตำแหน่งและสถานะรถทุกคันบนแผนที่ตามเวลาจริง พร้อมข้อมูลความเร็ว เส้นทาง และสถานะเครื่องยนต์",
      image: featureTracking,
    },
    {
      icon: Video,
      title: "MDVR + AI วิเคราะห์พฤติกรรมขับขี่",
      desc: "กล้องบันทึกภาพและ AI ตรวจจับพฤติกรรมเสี่ยง พร้อมหลักฐานชัดเจนเมื่อเกิดอุบัติเหตุ",
      image: featureMdvr,
    },
    {
      icon: LineChart,
      title: "รายงานและวิเคราะห์อัตโนมัติ",
      desc: "สรุปข้อมูลการใช้งานยานพาหนะ ต้นทุน และประสิทธิภาพคนขับ ส่งอัตโนมัติทุกวัน",
      image: featureFleet,
    },
  ];
  const bullets = [
    { icon: History, t: "ดูย้อนหลังได้ 365 วัน" },
    { icon: Bell, t: "แจ้งเตือนผ่าน LINE & Mobile App" },
    { icon: Users, t: "รองรับหลายสาขา หลายผู้ใช้งาน" },
    { icon: Globe2, t: "ใช้งานได้ทั้ง Web และ Mobile" },
  ];

  return (
    <section id="features" className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">ฟีเจอร์เด่น</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
            ทุกอย่างที่คุณต้องการ <br className="hidden md:block" />ในแพลตฟอร์มเดียว
          </h2>
        </div>

        <div className="mt-16 space-y-24">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="h-14 w-14 rounded-2xl bg-gradient-cta grid place-items-center text-white shadow-card">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">{f.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{f.desc}</p>
                <ul className="mt-6 space-y-3">
                  {["ใช้งานง่าย", "เชื่อมต่อ API ได้", "ปลอดภัยระดับองค์กร"].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-accent" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-3xl overflow-hidden border border-border shadow-glass bg-gradient-brand p-2">
                  <img
                    src={f.image}
                    alt={f.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="rounded-2xl w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bullets.map((b) => (
            <div
              key={b.t}
              className="rounded-2xl border border-border p-6 bg-surface flex items-start gap-4"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                <b.icon className="h-5 w-5" />
              </div>
              <p className="font-semibold leading-snug">{b.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Mobile App ---------- */
function MobileAppSection() {
  return (
    <section id="app" className="py-28 lg:py-36 bg-gradient-brand text-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-sm font-semibold text-brand-orange-soft uppercase tracking-widest">
            Mobile Application
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
            ติดตามรถได้ทุกที่ ทุกเวลา
          </h2>
          <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-lg">
            แอปพลิเคชันบนมือถือสำหรับเจ้าของรถและผู้บริหาร Fleet ใช้งานได้ทั้ง iOS, Android และ Web
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-md">
            {[
              { i: MapPin, t: "Live Tracking" },
              { i: History, t: "Trip History" },
              { i: Bell, t: "Notification" },
            ].map((x) => (
              <div key={x.t} className="glass rounded-2xl p-4">
                <x.i className="h-5 w-5 text-brand-orange-soft" />
                <div className="mt-2 text-sm font-semibold">{x.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-black/40 glass px-5 py-3 hover:bg-black/60 transition">
              <Apple className="h-7 w-7" />
              <div>
                <div className="text-[10px] text-white/70">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-black/40 glass px-5 py-3 hover:bg-black/60 transition">
              <Play className="h-7 w-7" />
              <div>
                <div className="text-[10px] text-white/70">GET IT ON</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={mobileApp}
            alt="Andaman GPS Mobile App"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative z-10 rounded-3xl shadow-glass animate-float"
          />
          <div className="absolute -inset-10 bg-brand-orange/20 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Choose ---------- */
function WhyUs() {
  const items = [
    { i: Award, t: "ประสบการณ์ 10+ ปี", d: "เชี่ยวชาญในธุรกิจ GPS Tracking และ Fleet Management" },
    { i: Wrench, t: "ทีมติดตั้งมืออาชีพ", d: "ทีมวิศวกรพร้อมติดตั้งและดูแลทั่วประเทศ" },
    { i: ShieldCheck, t: "ผ่านมาตรฐานกรมขนส่ง", d: "อุปกรณ์ทั้งหมดได้รับการรับรองมาตรฐาน" },
    { i: Headphones, t: "บริการหลังการขายรวดเร็ว", d: "Support ทีมงาน 24/7 ตอบเร็วทันเหตุการณ์" },
    { i: Building2, t: "รองรับธุรกิจทุกขนาด", d: "ตั้งแต่ SME ถึงองค์กรขนาดใหญ่ระดับประเทศ" },
    { i: Zap, t: "พัฒนาระบบต่อเนื่อง", d: "อัปเดตฟีเจอร์ใหม่อย่างต่อเนื่องเพื่อลูกค้า" },
  ];
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            ทำไมต้องเลือกเรา
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
            ทำไมองค์กรชั้นนำ <br />ถึงเลือก Andaman GPS
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((x) => (
            <div
              key={x.t}
              className="rounded-3xl p-8 border border-border bg-white shadow-card hover:border-accent/40 hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 grid place-items-center text-accent">
                <x.i className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{x.t}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const reviews = [
    {
      name: "คุณสมชาย ใจดี",
      role: "ผู้จัดการฝ่ายขนส่ง, Thai Logistics",
      text: "ใช้ระบบมา 5 ปี ทีมงานบริการดีมาก ระบบเสถียร ช่วยลดต้นทุนน้ำมันได้กว่า 18%",
    },
    {
      name: "คุณวรพจน์ ทองดี",
      role: "เจ้าของกิจการ, Phuket Transport",
      text: "MDVR ของ Andaman GPS ช่วยเป็นหลักฐานในเคสอุบัติเหตุได้อย่างชัดเจน คุ้มค่ามาก",
    },
    {
      name: "คุณกานต์ ศรีสุข",
      role: "ผู้บริหาร, BKK Cargo",
      text: "Dashboard ใช้งานง่าย ทีมงานสามารถดูได้ทุกคนพร้อมกัน รายงานครบ จัดการ Fleet ได้สะดวก",
    },
  ];
  return (
    <section className="py-28 lg:py-36 bg-surface">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            เสียงจากลูกค้า
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
            ลูกค้าของเราพูดถึงเราอย่างไร
          </h2>
        </div>
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl bg-white p-8 border border-border shadow-card flex flex-col"
            >
              <div className="text-5xl text-accent leading-none font-display">"</div>
              <p className="mt-2 text-foreground leading-relaxed flex-1">{r.text}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "GPS ติดตามรถแบบเรียลไทม์หรือไม่?",
      a: "ใช่ ระบบของเราติดตามรถแบบเรียลไทม์ อัปเดตตำแหน่งทุกๆ 10–30 วินาที พร้อมแสดงผลบนแผนที่ทันที",
    },
    {
      q: "รองรับรถประเภทใดบ้าง?",
      a: "รองรับรถยนต์ส่วนบุคคล รถบรรทุก รถขนส่ง รถโดยสาร และเครื่องจักรเฉพาะทางทุกประเภท",
    },
    {
      q: "สามารถดูย้อนหลังได้กี่วัน?",
      a: "ระบบเก็บข้อมูลย้อนหลังได้สูงสุด 365 วัน สามารถ Export เป็นรายงานได้",
    },
    {
      q: "มีบริการติดตั้งนอกสถานที่หรือไม่?",
      a: "มีครับ ทีมงานติดตั้งของเราให้บริการทั่วประเทศ พร้อมตรวจเช็คและรับประกันการติดตั้ง",
    },
    {
      q: "รองรับการแจ้งเตือนผ่าน LINE หรือไม่?",
      a: "รองรับครับ ระบบส่งแจ้งเตือนผ่าน LINE Notify, Mobile App และอีเมลได้พร้อมกัน",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="blog" className="py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            คำถามที่พบบ่อย
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">FAQ</h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="rounded-2xl border border-border bg-white shadow-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-semibold text-lg">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    open === i ? "rotate-180 text-accent" : "text-muted-foreground"
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-gradient-cta p-12 lg:p-20 text-white shadow-glass">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              พร้อมยกระดับการบริหารจัดการ <br />
              ยานพาหนะของคุณแล้วหรือยัง?
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              ปรึกษาผู้เชี่ยวชาญและรับใบเสนอราคาฟรี
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary hover:bg-white/90 transition"
            >
              ติดต่อเรา <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:0866885686"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-bold text-white hover:bg-white/15 transition"
            >
              ขอใบเสนอราคา
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer id="contact" className="bg-navy-deep text-white pt-20 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-4 gap-12">
        <div>
          <div className="bg-white inline-block rounded-xl px-3 py-2">
            <img src={logoAsset.url} alt="Andaman GPS" className="h-10 w-auto" />
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            บริษัท อันดามัน แทร็คกิ้ง จำกัด ผู้ให้บริการระบบติดตามยานพาหนะและ
            Fleet Management ครบวงจรทั่วประเทศ
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><a href="#about" className="hover:text-accent">เกี่ยวกับเรา</a></li>
            <li><a href="#services" className="hover:text-accent">บริการ</a></li>
            <li><a href="#blog" className="hover:text-accent">บทความ</a></li>
            <li><a href="#contact" className="hover:text-accent">ติดต่อเรา</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>GPS Tracking</li>
            <li>MDVR & AI Camera</li>
            <li>Fleet Management</li>
            <li>IoT Sensors</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPinned className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>สำนักงานใหญ่ จังหวัดภูเก็ต</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:0866885686" className="hover:text-accent">086-688-5686</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <div className="flex flex-col">
                <a href="mailto:andamangps1@gmail.com" className="hover:text-accent break-all">
                  andamangps1@gmail.com
                </a>
                <a href="mailto:suttipong@andaman-tracking.com" className="hover:text-accent break-all">
                  suttipong@andaman-tracking.com
                </a>
              </div>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/share/1G62oGtWTJ/"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-accent transition"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@andaman.gps.track"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-accent transition"
              aria-label="TikTok"
            >
              <Music2 className="h-4 w-4" />
            </a>
            <a
              href="https://line.me/R/ti/p/@andamangps"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-accent transition"
              aria-label="LINE"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 pt-6">
        <p className="mx-auto max-w-[1440px] px-6 lg:px-10 text-center text-xs text-white/50">
          © 2026 Andaman GPS — บริษัท อันดามัน แทร็คกิ้ง จำกัด. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
