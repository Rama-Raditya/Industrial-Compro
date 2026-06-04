import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Play, ChevronDown, CheckCircle, Factory, Mountain, Shield, Leaf, TrendingUp, Globe, Users, Award } from "lucide-react";
import { Navbar, Footer, CTABand, NoiseTexture, GridPattern, SectionLabel, useInView, useCounter } from "./components";
import { STATS, CERTIFICATIONS, OPERATIONS } from "./data";

// ─── HERO ────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section className="relative min-h-screen bg-zinc-950 flex items-center overflow-hidden">
      <NoiseTexture />
      <GridPattern />
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-[0.07] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(251,191,36,0.3) 0px, rgba(251,191,36,0.3) 1px, transparent 1px, transparent 40px)` }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      {/* Abstract industrial SVG bg */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.06] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 600 800" className="w-full h-full" fill="none">
          <rect x="50" y="300" width="60" height="500" fill="#fbbf24" /><rect x="140" y="220" width="80" height="580" fill="#fbbf24" />
          <rect x="250" y="150" width="70" height="650" fill="#fbbf24" /><rect x="350" y="260" width="90" height="540" fill="#fbbf24" />
          <rect x="460" y="100" width="60" height="700" fill="#fbbf24" /><circle cx="300" cy="120" r="80" stroke="#fbbf24" strokeWidth="4" />
          <line x1="0" y1="750" x2="600" y2="750" stroke="#fbbf24" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "100ms" }}>
            <div className="w-10 h-px bg-amber-500" />
            <span className="text-amber-500 text-xs font-bold tracking-[0.4em] uppercase">Est. 1998 · Indonesia</span>
          </div>
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
            <span className="text-white block">MEMBANGUN</span>
            <span className="text-white block">FONDASI</span>
            <span className="block"><span className="text-amber-500">INDUSTRI</span><span className="text-white"> BANGSA</span></span>
          </h1>
          <p className={`text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "350ms" }}>
            Dari inti bumi ke garis depan manufaktur — kami menggerakkan roda industri nasional dengan presisi, keselamatan, dan komitmen terhadap masa depan berkelanjutan.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "500ms" }}>
            <a href="/operasi" className="group flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-8 py-4 transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]">
              Jelajahi Operasi Kami <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="/tentang" className="group flex items-center justify-center gap-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm px-8 py-4 transition-all duration-300 backdrop-blur-sm bg-zinc-900/20 hover:bg-zinc-800/30">
              Tentang Perusahaan <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className={`mt-16 flex flex-wrap items-center gap-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "650ms" }}>
            <span className="text-zinc-600 text-xs font-medium tracking-widest uppercase">Tersertifikasi</span>
            <div className="w-px h-4 bg-zinc-800" />
            {CERTIFICATIONS.slice(0, 4).map((c, i) => (
              <span key={i} className="text-zinc-500 text-xs font-bold tracking-wider border border-zinc-800 px-2 py-1">{c.code.split(":")[0]}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-8 bottom-24 hidden lg:flex flex-col items-center gap-3 opacity-40 cursor-pointer hover:opacity-80 transition-opacity group">
        <div className="w-14 h-14 rounded-full border-2 border-amber-500/60 flex items-center justify-center group-hover:border-amber-400 transition-colors">
          <Play className="w-5 h-5 text-amber-500 fill-amber-500 ml-0.5" />
        </div>
        <span className="text-zinc-500 text-xs font-medium tracking-widest uppercase rotate-90 origin-center translate-y-8">Video Profil</span>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-zinc-600 animate-bounce" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </section>
  );
};

// ─── STATS ───────────────────────────────────────────────────────────────────
const StatItem = ({ number, suffix, label, desc, icon: Icon, inView, delay }) => {
  const count = useCounter(number, 2200, inView);
  return (
    <div className="group relative border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/60 p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_60px_rgba(251,191,36,0.05)]" style={{ transitionDelay: `${delay}ms` }}>
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
      <Icon className="w-7 h-7 text-amber-500/50 group-hover:text-amber-500 transition-colors duration-300 mb-4" />
      <div className="mb-2">
        <span className="text-5xl lg:text-6xl font-black text-white tabular-nums">{count.toLocaleString()}</span>
        <span className="text-3xl font-black text-amber-500">{suffix}</span>
      </div>
      <div className="text-white font-bold text-sm tracking-wide mb-1">{label}</div>
      <div className="text-zinc-500 text-xs leading-relaxed">{desc}</div>
    </div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView();
  const icons = [TrendingUp, Mountain, Globe, Users];
  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Pencapaian" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">Angka Yang Berbicara<br /><span className="text-zinc-500 font-light">Tentang Dedikasi Kami</span></h2>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">Setiap angka adalah cerminan kerja keras, inovasi, dan kepercayaan yang dibangun selama lebih dari dua dekade.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/50">
          {STATS.map((s, i) => <StatItem key={i} {...s} number={parseInt(s.number)} icon={icons[i]} inView={inView} delay={i * 80} />)}
        </div>
      </div>
    </section>
  );
};

// ─── OPERATIONS PREVIEW ──────────────────────────────────────────────────────
const OperationsPreview = () => {
  const [ref, inView] = useInView();
  const opIcons = { factory: Factory, mountain: Mountain };
  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Lini Bisnis" />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">Dua Pilar Kekuatan<br /><span className="text-zinc-500 font-light">Industri Kami</span></h2>
          <a href="/operasi" className="group flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors">
            Lihat Semua Operasi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-800/30">
          {OPERATIONS.slice(0, 2).map((op, i) => {
            const Icon = opIcons[op.icon] || Factory;
            return (
              <a key={i} href="/operasi" className="group relative overflow-hidden border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 cursor-pointer transition-all duration-500 hover:border-zinc-700 p-8 lg:p-12 block" style={{ minHeight: "420px" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 flex items-center justify-center border border-zinc-700 group-hover:border-amber-500/50 bg-zinc-800/50 group-hover:bg-amber-500/10 transition-all duration-500">
                    <Icon className="w-7 h-7 text-zinc-500 group-hover:text-amber-400 transition-colors duration-500" />
                  </div>
                  <span className="text-zinc-700 text-xs font-bold tracking-[0.3em] uppercase">{op.subtitle}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                  {op.title.split(" ").map((w, j, arr) => <span key={j} className={j === arr.length - 1 ? "text-amber-500" : ""}>{w} </span>)}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors">{op.description}</p>
                <div className="space-y-2 mb-8">
                  {op.features.slice(0, 3).map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-amber-500 transition-colors flex-shrink-0" />
                      <span className="text-zinc-400 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-zinc-600 group-hover:text-amber-400 transition-colors text-xs font-bold uppercase tracking-wider">
                  <span>Pelajari Lebih Lanjut</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── WHY US ───────────────────────────────────────────────────────────────────
const WhyUs = () => {
  const items = [
    { icon: Shield, title: "Rekam Jejak Terbukti", desc: "25+ tahun pengalaman dengan portofolio proyek nasional yang tidak tertandingi di sektor industri berat." },
    { icon: TrendingUp, title: "Integrasi Vertikal Penuh", desc: "Dari ekstraksi bahan baku hingga produk jadi — kontrol penuh atas kualitas dan efisiensi biaya." },
    { icon: Leaf, title: "Komitmen ESG Nyata", desc: "Bukan sekadar laporan, kami membuktikan komitmen lingkungan dan sosial dengan tindakan nyata." },
    { icon: Users, title: "SDM Kelas Dunia", desc: "8.500+ profesional terlatih dengan dukungan program pengembangan berkelanjutan." },
    { icon: Globe, title: "Jaringan Ekspor ASEAN", desc: "Produk manufaktur NIG telah diekspor ke 8 negara ASEAN dengan standar kualitas internasional." },
    { icon: Award, title: "Multi-Sertifikasi ISO", desc: "ISO 9001, 14001, 45001 — bukti standar operasional yang ketat di setiap lini bisnis." },
  ];
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-zinc-900/30">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel text="Keunggulan Kami" />
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">Mengapa Memilih<br /><span className="text-amber-500">Nusantara Industrial?</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/40">
          {items.map((item, i) => (
            <div key={i} className={`group bg-zinc-950/50 hover:bg-zinc-900/80 p-8 transition-all duration-400 border border-transparent hover:border-zinc-700/50 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transition: `all 0.5s ease ${i * 80}ms` }}>
              <item.icon className="w-8 h-8 text-amber-500/60 group-hover:text-amber-500 mb-5 transition-colors" />
              <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── NEWS TEASER ─────────────────────────────────────────────────────────────
const NEWS = [
  { cat: "Operasional", date: "15 Nov 2024", title: "NIG Rampungkan Fase II Ekspansi Smelter Morowali, Kapasitas Naik 40%", desc: "Penyelesaian fase kedua ekspansi smelter nikel menjadikan NIG sebagai produsen nikel terbesar ketiga di Indonesia." },
  { cat: "Keberlanjutan", date: "8 Nov 2024", title: "Program Reforestasi 1 Juta Pohon NIG Capai Target 2 Tahun Lebih Cepat", desc: "Komitmen lingkungan NIG terbukti nyata dengan keberhasilan program penanaman pohon yang melampaui target awal." },
  { cat: "Penghargaan", date: "1 Nov 2024", title: "NIG Raih Top ESG Award 2024 dari Majalah Investor Indonesia", desc: "Pengakuan atas konsistensi praktik bisnis berkelanjutan dan transparansi laporan ESG kelas dunia." },
];

const NewsSection = () => (
  <section className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
    <NoiseTexture />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
        <div>
          <SectionLabel text="Berita Terbaru" />
          <h2 className="text-3xl lg:text-4xl font-black text-white">Update & Pengumuman</h2>
        </div>
        <a href="#" className="group flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors">
          Semua Berita <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/40">
        {NEWS.map((n, i) => (
          <article key={i} className="group bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700/60 p-8 transition-all duration-400 cursor-pointer">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-amber-500/10 text-amber-500 text-[10px] font-bold px-2 py-1 tracking-wider uppercase">{n.cat}</span>
              <span className="text-zinc-600 text-xs">{n.date}</span>
            </div>
            <h4 className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-amber-100 transition-colors">{n.title}</h4>
            <p className="text-zinc-500 text-xs leading-relaxed mb-6">{n.desc}</p>
            <div className="flex items-center gap-2 text-zinc-600 group-hover:text-amber-400 transition-colors text-xs font-semibold">
              Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar currentPath="/" />
      <Hero />
      <StatsSection />
      <OperationsPreview />
      <WhyUs />
      <NewsSection />
      <CTABand />
      <Footer />
    </div>
  );
}
