import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ArrowRight, ChevronDown, CheckCircle,
  Factory, Mountain, Truck, Zap, Leaf, Shield, Users, Award,
  MapPin, Phone, Mail, Linkedin, Twitter, Youtube,
} from "lucide-react";
import { NAV_LINKS, COMPANY } from "./data";

// ─── HOOKS ────────────────────────────────────────────────────────────────────
export const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
};

export const useCounter = (target, duration = 2200, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

export const useScrolled = (threshold = 40) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, [threshold]);
  return scrolled;
};

// ─── ICON MAP ────────────────────────────────────────────────────────────────
export const IconMap = { factory: Factory, mountain: Mountain, truck: Truck, zap: Zap, leaf: Leaf, shield: Shield, users: Users, award: Award };

// ─── NOISE TEXTURE ────────────────────────────────────────────────────────────
export const NoiseTexture = ({ opacity = "opacity-[0.03]" }) => (
  <svg className={`absolute inset-0 w-full h-full ${opacity} pointer-events-none`} xmlns="http://www.w3.org/2000/svg">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

// ─── GRID PATTERN ─────────────────────────────────────────────────────────────
export const GridPattern = ({ color = "rgba(251,191,36,0.4)", size = 60, opacity = "opacity-[0.05]" }) => (
  <div
    className={`absolute inset-0 ${opacity} pointer-events-none`}
    style={{
      backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
    }}
  />
);

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
export const SectionLabel = ({ text, color = "amber" }) => {
  const colors = { amber: "bg-amber-500 text-amber-500", emerald: "bg-emerald-500 text-emerald-500", blue: "bg-blue-400 text-blue-400" };
  const [bg, tx] = (colors[color] || colors.amber).split(" ");
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-8 h-px ${bg}`} />
      <span className={`${tx} text-xs font-bold tracking-[0.4em] uppercase`}>{text}</span>
    </div>
  );
};

// ─── PAGE HERO ────────────────────────────────────────────────────────────────
export const PageHero = ({ label, title, titleAccent, subtitle, breadcrumb }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  return (
    <section className="relative min-h-[50vh] bg-zinc-950 flex items-end overflow-hidden pt-20">
      <NoiseTexture />
      <GridPattern />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      {/* Diagonal stripes right side */}
      <div className="absolute top-0 right-0 w-2/5 h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(251,191,36,0.2) 0px, rgba(251,191,36,0.2) 1px, transparent 1px, transparent 40px)` }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        {breadcrumb && (
          <div className={`flex items-center gap-2 mb-6 transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="text-zinc-600 text-xs">Home</span>
            <ChevronDown className="w-3 h-3 text-zinc-700 -rotate-90" />
            <span className="text-amber-500 text-xs font-medium">{breadcrumb}</span>
          </div>
        )}
        <SectionLabel text={label} />
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-4 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {title}<br /><span className="text-amber-500">{titleAccent}</span>
        </h1>
        {subtitle && (
          <p className={`text-zinc-400 text-sm max-w-xl leading-relaxed transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </section>
  );
};

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
export const Navbar = ({ currentPath = "/" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(40);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/60 shadow-2xl shadow-black/40" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 bg-amber-500 rotate-45 rounded-sm group-hover:rotate-[55deg] transition-transform duration-300" />
              <div className="absolute inset-[5px] bg-zinc-950 rotate-45 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-amber-500 font-black text-sm">N</span>
            </div>
            <div>
              <div className="text-white font-black text-xl tracking-tight leading-none">{COMPANY.name}</div>
              <div className="text-amber-500 text-[9px] font-bold tracking-[0.3em] uppercase leading-none">{COMPANY.tagline}</div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => {
              const active = currentPath === link.path;
              return (
                <a key={i} href={link.path} className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 group ${active ? "text-amber-400" : "text-zinc-400 hover:text-white"}`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-amber-500 transition-transform duration-300 origin-left ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex">
            <a href="/kontak" className="group overflow-hidden bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-6 py-2.5 transition-all duration-300 flex items-center gap-2">
              Hubungi Kami <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <button className="lg:hidden text-zinc-400 hover:text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/60 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link, i) => (
            <a key={i} href={link.path} className={`block px-4 py-3 text-sm font-medium transition-all ${currentPath === link.path ? "text-amber-400 bg-amber-500/5" : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"}`}>
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a href="/kontak" className="block w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-6 py-3 text-center transition-all">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export const Footer = () => (
  <footer className="bg-zinc-950 border-t border-zinc-800/60">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2">
          <a href="/" className="flex items-center gap-3 mb-5 group w-fit">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-amber-500 rotate-45 rounded-sm" />
              <div className="absolute inset-[5px] bg-zinc-950 rotate-45 rounded-sm" />
              <span className="absolute inset-0 flex items-center justify-center text-amber-500 font-black text-sm">N</span>
            </div>
            <div>
              <div className="text-white font-black text-lg leading-none">NUSANTARA</div>
              <div className="text-amber-500 text-[8px] font-bold tracking-[0.3em] uppercase">INDUSTRIAL GROUP</div>
            </div>
          </a>
          <p className="text-zinc-600 text-xs leading-relaxed max-w-[220px] mb-6">
            Membangun Indonesia dengan presisi, keselamatan, dan keberlanjutan sejak 1998.
          </p>
          <div className="flex items-center gap-2">
            {[Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 border border-zinc-800 hover:border-amber-500/50 flex items-center justify-center text-zinc-600 hover:text-amber-500 transition-all duration-200">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Perusahaan", links: [{ l: "Tentang Kami", h: "/tentang" }, { l: "Visi & Misi", h: "/tentang#visi" }, { l: "Kepemimpinan", h: "/tentang#leadership" }, { l: "Sejarah", h: "/tentang#sejarah" }] },
          { title: "Operasi", links: [{ l: "Manufaktur", h: "/operasi" }, { l: "Pertambangan", h: "/operasi" }, { l: "Logistik", h: "/operasi" }, { l: "Energi", h: "/operasi" }] },
          { title: "Lainnya", links: [{ l: "Keberlanjutan", h: "/keberlanjutan" }, { l: "Karir", h: "/karir" }, { l: "Investor", h: "#" }, { l: "Kontak", h: "/kontak" }] },
        ].map((col, i) => (
          <div key={i}>
            <h5 className="text-white font-bold text-xs tracking-widest uppercase mb-4">{col.title}</h5>
            <ul className="space-y-2.5">
              {col.links.map((link, j) => (
                <li key={j}><a href={link.h} className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">{link.l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-t border-b border-zinc-800/60 mb-8">
        {[
          { Icon: MapPin, text: "Jl. Industri Raya No. 88, Jakarta Selatan 12xxx" },
          { Icon: Phone, text: "+62 21 5555-8888" },
          { Icon: Mail, text: "info@nusantara-industrial.co.id" },
        ].map(({ Icon, text }, i) => (
          <div key={i} className="flex items-center gap-3">
            <Icon className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span className="text-zinc-600 text-xs">{text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-700 text-xs">© 2024 Nusantara Industrial Group. All rights reserved.</p>
        <div className="flex gap-4">
          {["Kebijakan Privasi", "Syarat & Ketentuan", "Cookie Policy"].map((l, i) => (
            <a key={i} href="#" className="text-zinc-700 hover:text-zinc-500 text-xs transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// ─── CTA BAND ────────────────────────────────────────────────────────────────
export const CTABand = ({ title = "Mari Bangun Indonesia Bersama Kami", subtitle = "Siap Berkolaborasi?" }) => (
  <section className="relative py-16 lg:py-20 bg-amber-500 overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 32px)` }} />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
      <div>
        <div className="text-zinc-950/50 text-xs font-bold tracking-[0.4em] uppercase mb-3">{subtitle}</div>
        <h2 className="text-3xl lg:text-4xl font-black text-zinc-950 leading-tight">{title}</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
        <a href="/kontak" className="group flex items-center justify-center gap-3 bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm px-8 py-4 transition-all duration-300">
          Hubungi Tim Kami <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#" className="flex items-center justify-center gap-2 border-2 border-zinc-950/30 hover:border-zinc-950 text-zinc-950 font-semibold text-sm px-8 py-4 transition-all duration-300">
          Unduh Company Profile
        </a>
      </div>
    </div>
  </section>
);
