import { CheckCircle, ArrowRight, Leaf, Shield, Users, Award, TrendingDown, Droplets, Wind, Recycle } from "lucide-react";
import { Navbar, Footer, CTABand, PageHero, NoiseTexture, SectionLabel, useInView, useCounter, IconMap } from "./components";
import { ESG_PILLARS, CERTIFICATIONS } from "./data";

// ─── ESG SCORE CARD ───────────────────────────────────────────────────────────
const ESGScoreBar = ({ label, value, max = 100, color = "amber" }) => {
  const [ref, inView] = useInView();
  const colorMap = { amber: "bg-amber-500", emerald: "bg-emerald-500", blue: "bg-blue-400" };
  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-zinc-400 text-xs font-medium">{label}</span>
        <span className={`text-xs font-black ${colorMap[color].replace("bg", "text")}`}>{value}/{max}</span>
      </div>
      <div className="h-1.5 bg-zinc-800 relative overflow-hidden">
        <div className={`absolute left-0 top-0 bottom-0 ${colorMap[color]} transition-all duration-1500 ease-out`} style={{ width: inView ? `${(value / max) * 100}%` : "0%" }} />
      </div>
    </div>
  );
};

// ─── HERO COMMITMENT ──────────────────────────────────────────────────────────
const CommitmentSection = () => {
  const [ref, inView] = useInView();
  const reductionCount = useCounter(40, 2000, inView);
  const treeCount = useCounter(1, 1500, inView);
  const yearCount = useCounter(8, 1800, inView);
  const villageCount = useCounter(50, 2000, inView);

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-emerald-950/15 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <SectionLabel text="Komitmen ESG" color="emerald" />
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
              Industri Kuat,<br /><span className="text-emerald-500">Bumi Terjaga</span>
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
              <p>Kami percaya bahwa pertumbuhan industri yang sejati hanya bisa dicapai berdampingan dengan pelestarian lingkungan dan kesejahteraan masyarakat. Bukan sekadar kewajiban regulasi, ESG adalah DNA dari cara kami berbisnis.</p>
              <p>Sejak 2019, NIG telah mengimplementasikan Roadmap ESG 2045 — peta jalan komprehensif yang mencakup target emisi, biodiversitas, keselamatan kerja, dan pemberdayaan komunitas yang terukur dan transparan.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <div><span className="text-white font-bold text-xs">{c.code}</span><span className="text-zinc-600 text-xs ml-2">— {c.desc}</span></div>
                </div>
              ))}
            </div>
            <a href="#" className="mt-8 group inline-flex items-center gap-3 border border-emerald-700/60 hover:border-emerald-500 text-emerald-500 font-bold text-xs px-6 py-3 transition-all uppercase tracking-wider">
              Unduh Laporan Keberlanjutan 2024 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          {/* Big numbers */}
          <div className="grid grid-cols-2 gap-px bg-zinc-800/60">
            {[
              { count: `-${reductionCount}%`, label: "Pengurangan Emisi", sub: "sejak 2019", color: "emerald" },
              { count: `${treeCount}M`, label: "Pohon Ditanam", sub: "program reforestasi", color: "emerald" },
              { count: `${yearCount} Thn`, label: "Zero Fatality", sub: "rekam jejak keselamatan", color: "amber" },
              { count: `${villageCount}+`, label: "Desa Binaan", sub: "program CSR aktif", color: "blue" },
            ].map(({ count, label, sub, color }, i) => {
              const colorText = { amber: "text-amber-500", emerald: "text-emerald-500", blue: "text-blue-400" };
              return (
                <div key={i} className="bg-zinc-950/80 p-8 border border-zinc-800/40">
                  <div className={`text-4xl font-black mb-2 ${colorText[color]}`}>{count}</div>
                  <div className="text-white font-bold text-sm mb-1">{label}</div>
                  <div className="text-zinc-600 text-xs">{sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── ESG PILLARS ──────────────────────────────────────────────────────────────
const PillarsSection = () => {
  const [ref, inView] = useInView();
  const iconComponents = { leaf: Leaf, shield: Shield, users: Users, award: Award };
  const colorMap = {
    emerald: { border: "border-emerald-800/60", bg: "bg-emerald-950/40", text: "text-emerald-500", badge: "bg-emerald-500/10 text-emerald-500", metric: "text-emerald-400" },
    amber: { border: "border-amber-800/60", bg: "bg-amber-950/40", text: "text-amber-500", badge: "bg-amber-500/10 text-amber-500", metric: "text-amber-400" },
    blue: { border: "border-blue-800/60", bg: "bg-blue-950/40", text: "text-blue-400", badge: "bg-blue-500/10 text-blue-400", metric: "text-blue-400" },
    violet: { border: "border-violet-800/60", bg: "bg-violet-950/40", text: "text-violet-400", badge: "bg-violet-500/10 text-violet-400", metric: "text-violet-400" },
  };

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-zinc-900/20 overflow-hidden border-t border-zinc-800/60">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel text="4 Pilar ESG" color="emerald" />
          <h2 className="text-3xl lg:text-4xl font-black text-white">Komitmen Kami yang<br /><span className="text-emerald-500">Terukur & Transparan</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/40">
          {ESG_PILLARS.map((p, i) => {
            const Icon = iconComponents[p.icon] || Leaf;
            const c = colorMap[p.color] || colorMap.emerald;
            return (
              <div key={i} className={`group ${c.bg} border ${c.border} hover:brightness-110 p-8 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`w-10 h-10 flex items-center justify-center border ${c.border} mb-5`}>
                  <Icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <div className={`text-2xl font-black ${c.metric} mb-1`}>{p.metric}</div>
                <div className="text-zinc-500 text-xs mb-4">{p.metricLabel}</div>
                <h4 className="text-white font-black text-base mb-4">{p.title}</h4>
                <ul className="space-y-2.5">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${c.text.replace("text", "bg")}`} />
                      <span className="text-zinc-500 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── ESG SCORES ───────────────────────────────────────────────────────────────
const ESGScores = () => (
  <section className="relative py-20 lg:py-24 bg-zinc-950 overflow-hidden border-t border-zinc-800/60">
    <NoiseTexture />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionLabel text="Skor Penilaian" color="emerald" />
          <h2 className="text-3xl font-black text-white mb-8">Rating & Skor ESG<br /><span className="text-zinc-500 font-light">Penilaian Eksternal</span></h2>
          <div className="space-y-0">
            <ESGScoreBar label="Environmental Score (MSCI)" value={78} color="emerald" />
            <ESGScoreBar label="Social Score (Sustainalytics)" value={82} color="emerald" />
            <ESGScoreBar label="Governance Score (OJK GCG)" value={91} color="emerald" />
            <ESGScoreBar label="Carbon Reduction Progress" value={40} color="amber" />
            <ESGScoreBar label="Renewable Energy Adoption" value={28} color="blue" />
          </div>
        </div>
        <div>
          <div className="text-amber-500 text-xs font-bold tracking-[0.4em] uppercase mb-6">Target & Roadmap</div>
          <div className="space-y-4">
            {[
              { year: "2025", target: "50% pengurangan emisi karbon dari baseline 2019", done: false },
              { year: "2026", target: "100% fasilitas produksi bersertifikat ISO 14001", done: false },
              { year: "2028", target: "40% kebutuhan energi dari sumber terbarukan", done: false },
              { year: "2030", target: "Zero waste to landfill di semua pabrik", done: false },
              { year: "2035", target: "Carbon neutral untuk Scope 1 & Scope 2 emisi", done: false },
              { year: "2045", target: "Net-Zero Carbon — seluruh value chain", done: false },
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 bg-emerald-500/10 border border-emerald-800/60 text-emerald-500 font-black text-xs px-3 py-2 min-w-[52px] text-center">{r.year}</div>
                <div className="flex-1 py-2 border-b border-zinc-800/60 group-last:border-0">
                  <p className="text-zinc-400 text-sm leading-relaxed">{r.target}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── KEBERLANJUTAN PAGE ────────────────────────────────────────────────────────
export default function KeberlanjutanPage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar currentPath="/keberlanjutan" />
      <PageHero
        label="ESG & Keberlanjutan"
        title="Industri Kuat,"
        titleAccent="Bumi Terjaga"
        subtitle="Komitmen nyata terhadap lingkungan, keselamatan manusia, dan keberlanjutan komunitas bukan sekadar janji — ini adalah cara kami beroperasi setiap hari."
        breadcrumb="Keberlanjutan"
      />
      <CommitmentSection />
      <PillarsSection />
      <ESGScores />
      <CTABand title="Bersama Membangun Industri Hijau" subtitle="Ingin Berkolaborasi ESG?" />
      <Footer />
    </div>
  );
}
