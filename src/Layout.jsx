import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { NAV_LINKS, COMPANY } from "./shared";

// ─── LOGO ─────────────────────────────────────────────────────────────────────
export const Logo = ({ size = "md" }) => {
  const s = size === "sm" ? { box: "w-7 h-7", text: "text-sm", tag: "text-[7px]" }
    : { box: "w-9 h-9", text: "text-xl", tag: "text-[9px]" };
  return (
    <Link to="/" className="flex items-center gap-3 group cursor-pointer">
      <div className={`relative ${s.box} flex-shrink-0`}>
        <div className="absolute inset-0 bg-amber-500 rotate-45 rounded-sm group-hover:rotate-[55deg] transition-transform duration-300" />
        <div className="absolute inset-[5px] bg-zinc-950 rotate-45 rounded-sm" />
        <span className="absolute inset-0 flex items-center justify-center text-amber-500 font-black text-sm">N</span>
      </div>
      <div>
        <div className={`text-white font-black ${s.text} tracking-tight leading-none`}>{COMPANY.name}</div>
        <div className={`text-amber-500 ${s.tag} font-bold tracking-[0.3em] uppercase leading-none`}>{COMPANY.tagline}</div>
      </div>
    </Link>
  );
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/60 shadow-2xl shadow-black/40" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => {
              const active = location.pathname === link.path;
              return (
                <Link key={i} to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 group ${active ? "text-amber-400" : "text-zinc-400 hover:text-white"}`}>
                  {link.label}
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-amber-500 transition-transform duration-300 origin-left ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              );
            })}
          </div>
          <div className="hidden lg:flex">
            <Link to="/kontak">
              <button className="group flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-6 py-2.5 transition-all duration-300">
                Hubungi Kami <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          <button className="lg:hidden text-zinc-400 hover:text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/60 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link, i) => (
            <Link key={i} to={link.path}
              className={`block px-4 py-3 text-sm font-medium transition-all ${location.pathname === link.path ? "text-amber-400 bg-zinc-800/50" : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"}`}>
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link to="/kontak">
              <button className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-6 py-3 transition-all">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export const Footer = () => {
  const footerCols = [
    { title: "Perusahaan", links: [{ l: "Tentang Kami", p: "/tentang-kami" }, { l: "Visi & Misi", p: "/tentang-kami#visi" }, { l: "Kepemimpinan", p: "/tentang-kami#tim" }] },
    { title: "Operasi", links: [{ l: "Manufaktur Presisi", p: "/operasi" }, { l: "Pertambangan", p: "/operasi" }, { l: "Keberlanjutan", p: "/keberlanjutan" }] },
    { title: "Lainnya", links: [{ l: "Karir", p: "/karir" }, { l: "Berita", p: "/berita" }, { l: "Kontak", p: "/kontak" }] },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <Logo />
            <p className="text-zinc-600 text-xs leading-relaxed mt-4 max-w-[220px]">
              Membangun Indonesia dengan presisi, keselamatan, dan komitmen terhadap keberlanjutan sejak 1998.
            </p>
            <div className="flex gap-3 mt-6">
              {["ISO 9001", "ISO 14001", "ISO 45001"].map((c, i) => (
                <span key={i} className="text-zinc-700 text-[9px] font-bold tracking-wider border border-zinc-800 px-2 py-1">{c}</span>
              ))}
            </div>
          </div>
          {footerCols.map((col, i) => (
            <div key={i}>
              <h5 className="text-white font-bold text-xs tracking-widest uppercase mb-4">{col.title}</h5>
              <ul className="space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.p} className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                      {link.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-zinc-800/60 gap-4">
          <p className="text-zinc-700 text-xs">© 2024 Nusantara Industrial Group. Hak Cipta Dilindungi.</p>
          <div className="flex gap-5">
            {["Kebijakan Privasi", "Syarat & Ketentuan"].map((l, i) => (
              <a key={i} href="#" className="text-zinc-700 hover:text-zinc-500 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
