import { useState } from "react";
import { ArrowRight, CheckCircle, Factory, Mountain, Truck, Zap, ChevronRight } from "lucide-react";
import { Navbar, Footer, CTABand, PageHero, NoiseTexture, SectionLabel, useInView } from "./components";
import { OPERATIONS } from "./data";

const IconMap = { factory: Factory, mountain: Mountain, truck: Truck, zap: Zap };
const colorMap = {
  amber: { border: "border-amber-500/30", bg: "bg-amber-500/10", text: "text-amber-500", badge: "bg-amber-500 text-zinc-950", glow: "hover:shadow-[0_0_60px_rgba(251,191,36,0.08)]" },
  orange: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-500", badge: "bg-orange-500 text-white", glow: "hover:shadow-[0_0_60px_rgba(249,115,22,0.08)]" },
  blue: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", badge: "bg-blue-500 text-white", glow: "hover:shadow-[0_0_60px_rgba(59,130,246,0.08)]" },
  green: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-500", badge: "bg-emerald-500 text-white", glow: "hover:shadow-[0_0_60px_rgba(16,185,129,0.08)]" },
};

// ─── OPERATION DETAIL CARD ────────────────────────────────────────────────────
const OperationCard = ({ op, index }) => {
  const [ref, inView] = useInView();
  const Icon = IconMap[op.icon] || Factory;
  const c = colorMap[op.color] || colorMap.amber;
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} id={op.id} className={`relative py-16 lg:py-24 overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${index > 0 ? "border-t border-zinc-800/60" : ""}`}>
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${!isEven ? "lg:flex-row-reverse" : ""}`}>
          {/* Info Side */}
          <div className={!isEven ? "lg:order-2" : ""}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 flex items-center justify-center border ${c.border} ${c.bg}`}>
                <Icon className={`w-5 h-5 ${c.text}`} />
              </div>
              <div>
                <div className={`text-[10px] font-bold tracking-[0.35em] uppercase ${c.text}`}>{op.subtitle}</div>
                <div className="text-zinc-600 text-xs">Division #{String(index + 1).padStart(2, "0")}</div>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">{op.title}</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">{op.longDesc}</p>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-px bg-zinc-800/60 mb-8">
              {op.stats.map((s, i) => (
                <div key={i} className="bg-zinc-950/80 px-4 py-5 text-center">
                  <div className={`text-xl font-black ${c.text}`}>{s.v}</div>
                  <div className="text-zinc-600 text-[10px] font-medium mt-1 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>

            <a href="/kontak" className={`group inline-flex items-center gap-3 font-bold text-sm px-8 py-4 transition-all duration-300 ${c.badge}`}>
              Pelajari & Hubungi Kami <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          {/* Features Side */}
          <div className={!isEven ? "lg:order-1" : ""}>
            <div className={`border ${c.border} bg-zinc-900/20 p-8 lg:p-10`}>
              <div className={`text-xs font-bold tracking-[0.3em] uppercase ${c.text} mb-6`}>Kapabilitas Utama</div>
              <div className="space-y-4">
                {op.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className={`w-6 h-6 flex items-center justify-center border ${c.border} ${c.bg} flex-shrink-0 mt-0.5`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${c.text.replace("text", "bg")}`} />
                    </div>
                    <span className="text-zinc-300 text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              {/* Abstract visual placeholder */}
              <div className={`mt-8 h-32 border border-dashed ${c.border} flex items-center justify-center opacity-40`}>
                <div className="text-center">
                  <Icon className={`w-10 h-10 ${c.text} mx-auto mb-2 opacity-50`} />
                  <div className={`text-xs ${c.text} font-medium tracking-wider`}>[ Foto Fasilitas {op.title} ]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── TECH SECTION ─────────────────────────────────────────────────────────────
const TechSection = () => {
  const techs = [
    { label: "Industry 4.0 & IoT", desc: "Sensor pintar & monitoring realtime di seluruh lini produksi." },
    { label: "AI Predictive Maintenance", desc: "Sistem prediksi kerusakan mesin sebelum terjadi downtime." },
    { label: "Digital Twin", desc: "Simulasi virtual seluruh proses operasional untuk optimasi." },
    { label: "ERP Terintegrasi", desc: "Satu platform untuk kendali operasional dari hulu ke hilir." },
    { label: "Drone & Remote Sensing", desc: "Pemetaan dan monitoring tambang dari udara secara realtime." },
    { label: "Robotic Automation", desc: "Lengan robot presisi untuk proses manufaktur berulang dan berbahaya." },
  ];
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="relative py-20 lg:py-24 bg-zinc-900/30 overflow-hidden border-t border-zinc-800/60">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel text="Teknologi" />
          <h2 className="text-3xl lg:text-4xl font-black text-white">Didukung Teknologi<br /><span className="text-amber-500">Industri Terdepan</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/40">
          {techs.map((t, i) => (
            <div key={i} className={`group bg-zinc-950/50 hover:bg-zinc-900/70 p-8 border border-transparent hover:border-zinc-700/50 transition-all duration-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transition: `all 0.5s ease ${i * 70}ms` }}>
              <div className="w-8 h-1 bg-amber-500 mb-5 group-hover:w-full transition-all duration-500" />
              <h4 className="text-white font-bold text-sm mb-2">{t.label}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── OPERATIONS PAGE ─────────────────────────────────────────────────────────
export default function OperasiPage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar currentPath="/operasi" />
      <PageHero
        label="Lini Operasi"
        title="Empat Divisi"
        titleAccent="Satu Visi"
        subtitle="Dari manufaktur presisi hingga pertambangan berkelanjutan — setiap divisi beroperasi dengan standar kelas dunia dan terintegrasi dalam satu ekosistem industri."
        breadcrumb="Operasi"
      />

      {/* Quick Nav */}
      <div className="sticky top-16 z-40 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {OPERATIONS.map((op, i) => (
              <a key={i} href={`#${op.id}`} className="flex-shrink-0 px-6 py-4 text-zinc-500 hover:text-white text-xs font-bold tracking-wider uppercase transition-colors border-b-2 border-transparent hover:border-amber-500 whitespace-nowrap">
                {op.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-zinc-950">
        {OPERATIONS.map((op, i) => (
          <OperationCard key={op.id} op={op} index={i} />
        ))}
      </div>

      <TechSection />
      <CTABand title="Diskusikan Kebutuhan Proyek Anda" subtitle="Ada Proyek Industri?" />
      <Footer />
    </div>
  );
}
