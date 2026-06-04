import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ChevronRight, Shield, Leaf, Award, Mountain, Factory,
  Users, Globe, TrendingUp, CheckCircle, Play, ChevronDown, Zap
} from "lucide-react";
import { NoiseTexture, GridPattern, SectionLabel, useCounter, useInView } from "../shared";

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  return (
    <section className="relative min-h-screen bg-zinc-950 flex items-center overflow-hidden">
      <NoiseTexture />
      <GridPattern />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.07] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, rgba(251,191,36,0.2) 0px, rgba(251,191,36,0.2) 1px, transparent 1px, transparent 40px)`
      }} />
      {/* SVG industrial silhouette */}
      <div className="absolute right-0 bottom-0 w-[55%] h-full opacity-[0.06] pointer-events-none select-none flex items-end">
        <svg viewBox="0 0 700 500" className="w-full" fill="none">
          <rect x="30" y="220" width="55" height="280" fill="#fbbf24" /><rect x="100" y="160" width="70" height="340" fill="#fbbf24" />
          <rect x="185" y="100" width="80" height="400" fill="#fbbf24" /><rect x="280" y="200" width="65" height="300" fill="#fbbf24" />
          <rect x="360" y="80" width="90" height="420" fill="#fbbf24" /><rect x="465" y="140" width="70" height="360" fill="#fbbf24" />
          <rect x="550" y="190" width="55" height="310" fill="#fbbf24" /><rect x="620" y="60" width="80" height="440" fill="#fbbf24" />
          <circle cx="225" cy="90" r="30" stroke="#f59e0b" strokeWidth="4" /><circle cx="405" cy="68" r="22" stroke="#f59e0b" strokeWidth="3" />
          <line x1="0" y1="498" x2="700" y2="498" stroke="#fbbf24" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "100ms" }}>
            <div className="w-10 h-px bg-amber-500" />
            <span className="text-amber-500 text-xs font-bold tracking-[0.4em] uppercase">Est. 1998 · Indonesia</span>
          </div>
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tight mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
            <span className="text-white block">MEMBANGUN</span>
            <span className="text-white block">FONDASI</span>
            <span className="block"><span className="text-amber-500">INDUSTRI</span><span className="text-white"> BANGSA</span></span>
          </h1>
          <p className={`text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "350ms" }}>
            Dari inti bumi ke garis depan manufaktur — kami menggerakkan roda industri nasional dengan presisi, keselamatan, dan komitmen terhadap masa depan berkelanjutan.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "500ms" }}>
            <Link to="/operasi">
              <button className="group flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-8 py-4 transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] w-full sm:w-auto">
                Jelajahi Operasi Kami <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </Link>
            <Link to="/tentang-kami">
              <button className="group flex items-center justify-center gap-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm px-8 py-4 transition-all duration-300 backdrop-blur-sm bg-zinc-900/20 hover:bg-zinc-800/30 w-full sm:w-auto">
                Tentang Perusahaan <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
          <div className={`mt-16 flex flex-wrap items-center gap-4 sm:gap-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "650ms" }}>
            <span className="text-zinc-600 text-xs font-medium tracking-widest uppercase">Tersertifikasi</span>
            <div className="w-px h-4 bg-zinc-800" />
            {["ISO 9001", "ISO 14001", "ISO 45001", "OHSAS 18001"].map((cert, i) => (
              <span key={i} className="text-zinc-500 text-xs font-bold tracking-wider border border-zinc-800 px-2 py-1">{cert}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-zinc-600 animate-bounce" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </section>
  );
};

// ─── STATS ────────────────────────────────────────────────────────────────────
const StatItem = ({ number, suffix, label, description, icon: Icon, inView }) => {
  const count = useCounter(number, 2200, inView);
  return (
    <div className="group relative border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_60px_rgba(251,191,36,0.05)]">
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
      <div className="flex items-start justify-between mb-4">
        <Icon className="w-7 h-7 text-amber-500/60 group-hover:text-amber-500 transition-colors duration-300" />
        <div className="w-6 h-px bg-zinc-700 group-hover:bg-amber-500/40 transition-colors duration-300 mt-3" />
      </div>
      <div className="mb-3">
        <span className="text-5xl lg:text-6xl font-black text-white tabular-nums">{count}</span>
        <span className="text-3xl font-black text-amber-500">{suffix}</span>
      </div>
      <div className="text-white font-bold text-sm tracking-wide mb-1">{label}</div>
      <div className="text-zinc-500 text-xs leading-relaxed">{description}</div>
    </div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView(0.2);
  const stats = [
    { number: 25, suffix: "+", label: "Tahun Pengalaman", description: "Beroperasi sejak 1998 dengan rekam jejak yang terbukti di sektor industri nasional.", icon: TrendingUp },
    { number: 50, suffix: "M+", label: "Ton Produksi", description: "Kapasitas produksi kumulatif material tambang dan produk manufaktur berkualitas tinggi.", icon: Mountain },
    { number: 12, suffix: "+", label: "Lokasi Operasi", description: "Tersebar di seluruh kepulauan Indonesia, menjangkau potensi sumber daya nasional.", icon: Globe },
    { number: 0, suffix: "", label: "Zero Accident", description: "Komitmen penuh terhadap Keselamatan & Kesehatan Kerja (K3) di semua lini operasional.", icon: Shield },
  ];
  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Pencapaian" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
            Angka Yang Berbicara<br /><span className="text-zinc-500 font-light">Tentang Dedikasi Kami</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">Setiap angka adalah cerminan dari kerja keras, inovasi, dan kepercayaan yang telah dibangun selama lebih dari dua dekade.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/50">
          {stats.map((s, i) => <StatItem key={i} {...s} inView={inView} />)}
        </div>
      </div>
    </section>
  );
};

// ─── OPERATIONS PREVIEW ───────────────────────────────────────────────────────
const OperationsPreview = () => {
  const ops = [
    { title: "Manufaktur Presisi", icon: Factory, desc: "Fasilitas manufaktur kelas dunia dengan teknologi CNC terkini, menghasilkan komponen presisi tinggi untuk sektor energi dan infrastruktur.", features: ["Kapasitas 500.000 unit/tahun", "Toleransi ±0.001mm", "Industri 4.0 Automation"] },
    { title: "Pertambangan Berkelanjutan", icon: Mountain, desc: "Operasi tambang terpadu dengan standar lingkungan tertinggi, mengelola sumber daya mineral secara bertanggung jawab untuk generasi mendatang.", features: ["Konsesi 15.000+ hektare", "Recovery rate >92%", "Zero discharge program"] },
  ];
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800/60 to-transparent hidden lg:block" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Lini Bisnis" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">Dua Pilar Kekuatan<br /><span className="text-zinc-500 font-light">Industri Kami</span></h2>
          <Link to="/operasi"><button className="group flex items-center gap-2 border border-zinc-700 hover:border-amber-500/50 text-zinc-400 hover:text-amber-400 text-xs font-bold px-5 py-2.5 tracking-wider uppercase transition-all">Lihat Semua Operasi <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></button></Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-800/30">
          {ops.map((op, i) => (
            <div key={i} className="group relative border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 p-8 lg:p-12 transition-all duration-500 hover:border-zinc-700" style={{ minHeight: "420px" }}>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-14 h-14 flex items-center justify-center border border-zinc-700 group-hover:border-amber-500/50 bg-zinc-800/50 group-hover:bg-amber-500/10 mb-8 transition-all duration-300">
                <op.icon className="w-6 h-6 text-zinc-500 group-hover:text-amber-400 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{op.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors">{op.desc}</p>
              <div className="space-y-2.5 mb-8">
                {op.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-amber-500 transition-colors duration-300 flex-shrink-0" />
                    <span className="text-zinc-400 text-xs">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/operasi" className="flex items-center gap-2 text-zinc-600 group-hover:text-amber-400 text-xs font-bold tracking-wider uppercase transition-colors">
                Pelajari Lebih Lanjut <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ESG STRIP ────────────────────────────────────────────────────────────────
const ESGStrip = () => (
  <section className="relative py-16 bg-zinc-900/40 border-y border-zinc-800/60 overflow-hidden">
    <NoiseTexture />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-zinc-800/60">
        {[
          { icon: Leaf, label: "Lingkungan", title: "Emisi -40%", desc: "Pengurangan emisi karbon sejak 2019 dengan roadmap net-zero 2045.", color: "text-emerald-500", bg: "border-emerald-900 bg-emerald-950/40" },
          { icon: Shield, label: "Keselamatan", title: "8 Tahun Zero Fatality", desc: "Sistem K3 terintegrasi dengan LTI Rate di bawah rata-rata industri.", color: "text-amber-500", bg: "border-amber-900 bg-amber-950/40" },
          { icon: Users, label: "Sosial", title: "50+ Desa Binaan", desc: "Program CSR aktif yang menyentuh komunitas di sekitar area operasi.", color: "text-blue-400", bg: "border-blue-900 bg-blue-950/40" },
        ].map((item, i) => (
          <div key={i} className="lg:px-10 first:pl-0 last:pr-0 flex items-start gap-5">
            <div className={`w-12 h-12 flex items-center justify-center border flex-shrink-0 ${item.bg}`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <div>
              <div className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase mb-1">{item.label}</div>
              <div className={`text-xl font-black ${item.color} mb-1`}>{item.title}</div>
              <div className="text-zinc-500 text-xs leading-relaxed">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/keberlanjutan">
          <button className="group flex items-center gap-2 mx-auto border border-zinc-700 hover:border-emerald-700 text-zinc-400 hover:text-emerald-400 text-xs font-bold px-6 py-3 tracking-wider uppercase transition-all">
            Laporan Keberlanjutan Lengkap <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  </section>
);

// ─── NEWS PREVIEW ─────────────────────────────────────────────────────────────
const NewsPreview = () => {
  const news = [
    { cat: "Korporat", date: "12 Nov 2024", title: "Nusantara Industrial Raih Penghargaan Best ESG Practice 2024", excerpt: "Komitmen kami terhadap lingkungan dan tata kelola perusahaan kembali mendapatkan pengakuan internasional." },
    { cat: "Operasi", date: "5 Nov 2024", title: "Ekspansi Fasilitas Manufaktur di Kawasan Industri Karawang", excerpt: "Investasi Rp 2,4 triliun untuk perluasan kapasitas produksi guna memenuhi permintaan yang terus meningkat." },
    { cat: "Keberlanjutan", date: "28 Okt 2024", title: "Program Reklamasi Tambang Berhasil Pulihkan 800 Hektare Lahan", excerpt: "Upaya rehabilitasi lingkungan pasca tambang kami menjadi model terbaik untuk industri pertambangan nasional." },
  ];
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <SectionLabel label="Berita & Insight" />
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">Terkini dari<br /><span className="text-zinc-500 font-light">Nusantara Industrial</span></h2>
          </div>
          <Link to="/berita"><button className="hidden sm:flex group items-center gap-2 border border-zinc-700 hover:border-amber-500/50 text-zinc-400 hover:text-amber-400 text-xs font-bold px-5 py-2.5 tracking-wider uppercase transition-all">
            Semua Berita <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/40">
          {news.map((n, i) => (
            <div key={i} className="group bg-zinc-900/20 hover:bg-zinc-900/60 p-8 transition-all duration-400 border border-zinc-800/40 hover:border-zinc-700/60 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-amber-500 text-[10px] font-bold tracking-widest uppercase border border-amber-500/30 px-2 py-0.5">{n.cat}</span>
                <span className="text-zinc-700 text-xs">{n.date}</span>
              </div>
              <h4 className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-amber-100 transition-colors">{n.title}</h4>
              <p className="text-zinc-600 text-xs leading-relaxed mb-6">{n.excerpt}</p>
              <div className="flex items-center gap-2 text-zinc-700 group-hover:text-amber-500 text-xs font-bold tracking-wider uppercase transition-colors">
                Baca Selengkapnya <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CTA BAND ─────────────────────────────────────────────────────────────────
const CTABand = () => (
  <section className="relative py-16 lg:py-20 bg-amber-500 overflow-hidden">
    <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 32px)` }} />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-zinc-950/50 text-xs font-bold tracking-[0.4em] uppercase mb-3">Siap Berkolaborasi?</div>
          <h2 className="text-3xl lg:text-4xl font-black text-zinc-950 leading-tight">Mari Bangun Indonesia<br />Bersama Kami</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/kontak"><button className="group flex items-center justify-center gap-3 bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm px-8 py-4 transition-all duration-300">Hubungi Tim Kami <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></button></Link>
          <button className="flex items-center justify-center gap-2 border-2 border-zinc-950/30 hover:border-zinc-950 text-zinc-950 font-semibold text-sm px-8 py-4 transition-all duration-300">Unduh Brosur</button>
        </div>
      </div>
    </div>
  </section>
);

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <OperationsPreview />
      <ESGStrip />
      <NewsPreview />
      <CTABand />
    </>
  );
}
