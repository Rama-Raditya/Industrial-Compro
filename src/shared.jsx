// ─── SHARED DATA & UTILITIES ─────────────────────────────────────────────────

export const COMPANY = {
  name: "NUSANTARA",
  tagline: "INDUSTRIAL GROUP",
  est: "1998",
  taglineShort: "Membangun Fondasi Industri Bangsa",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Tentang Kami", path: "/tentang-kami" },
  { label: "Operasi", path: "/operasi" },
  { label: "Keberlanjutan", path: "/keberlanjutan" },
  { label: "Karir", path: "/karir" },
  { label: "Kontak", path: "/kontak" },
];

// ─── NOISE TEXTURE ────────────────────────────────────────────────────────────
export const NoiseTexture = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

// ─── GRID PATTERN ─────────────────────────────────────────────────────────────
export const GridPattern = ({ size = 60, opacity = 0.06, color = "rgba(251,191,36,0.4)" }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity,
      backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
    }}
  />
);

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
export const SectionLabel = ({ label, color = "amber" }) => {
  const colors = {
    amber: "text-amber-500 bg-amber-500",
    emerald: "text-emerald-500 bg-emerald-500",
    blue: "text-blue-400 bg-blue-400",
    orange: "text-orange-500 bg-orange-500",
  };
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-8 h-px ${colors[color].split(" ")[1]}`} />
      <span className={`${colors[color].split(" ")[0]} text-xs font-bold tracking-[0.4em] uppercase`}>{label}</span>
    </div>
  );
};

// ─── PAGE HERO ────────────────────────────────────────────────────────────────
export const PageHero = ({ label, title, titleAccent, subtitle, breadcrumb }) => (
  <section className="relative pt-36 pb-20 bg-zinc-950 overflow-hidden">
    <NoiseTexture />
    <GridPattern />
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950" />
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{
      backgroundImage: `repeating-linear-gradient(45deg, rgba(251,191,36,0.15) 0px, rgba(251,191,36,0.15) 1px, transparent 1px, transparent 40px)`
    }} />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {breadcrumb && (
        <div className="flex items-center gap-2 text-zinc-600 text-xs mb-8">
          <span>Home</span>
          <span>/</span>
          <span className="text-amber-500">{breadcrumb}</span>
        </div>
      )}
      <SectionLabel label={label} />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
        {title}{" "}
        {titleAccent && <span className="text-amber-500">{titleAccent}</span>}
      </h1>
      {subtitle && (
        <p className="text-zinc-400 text-base leading-relaxed max-w-2xl">{subtitle}</p>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </div>
  </section>
);

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
export const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

// ─── INTERSECTION OBSERVER HOOK ───────────────────────────────────────────────
export const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

// needs react imports
import { useState, useEffect, useRef } from "react";
