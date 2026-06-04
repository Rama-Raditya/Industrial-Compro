import { CheckCircle, Target, Eye, Heart, ChevronRight } from "lucide-react";
import { Navbar, Footer, CTABand, PageHero, NoiseTexture, GridPattern, SectionLabel, useInView, useCounter } from "./components";
import { CERTIFICATIONS, LEADERSHIP, TIMELINE, STATS } from "./data";

// ─── VISION MISSION ───────────────────────────────────────────────────────────
const VisionMission = () => {
  const [ref, inView] = useInView();
  return (
    <section id="visi" ref={ref} className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <GridPattern opacity="opacity-[0.03]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-800/40">
          {/* Visi */}
          <div className={`group bg-zinc-900/30 hover:bg-zinc-900/60 border border-zinc-800/60 hover:border-amber-500/20 p-10 transition-all duration-500 col-span-1 lg:col-span-1 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "0ms" }}>
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6">
              <Eye className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Visi</div>
            <h3 className="text-white font-black text-xl leading-tight mb-4">Menjadi Konglomerat Industri Terdiversifikasi Terkemuka di Asia Tenggara pada 2035</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Mencapai posisi 5 besar perusahaan industri berat di ASEAN dengan standar ESG kelas dunia dan inovasi teknologi berkelanjutan.</p>
          </div>
          {/* Misi */}
          <div className={`bg-zinc-900/20 border border-zinc-800/60 p-10 col-span-1 lg:col-span-2 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "150ms" }}>
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6">
              <Target className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Misi</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Mengoperasikan bisnis manufaktur dan pertambangan dengan standar keselamatan, kualitas, dan efisiensi kelas dunia.",
                "Menciptakan nilai jangka panjang bagi pemegang saham, karyawan, dan seluruh pemangku kepentingan.",
                "Mendorong pertumbuhan ekonomi daerah melalui penciptaan lapangan kerja dan pengembangan komunitas lokal.",
                "Memimpin transisi industri menuju praktik bisnis berkelanjutan dan rendah karbon di Indonesia.",
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-zinc-400 text-sm leading-relaxed">{m}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Nilai */}
          {[
            { icon: "⚙️", title: "Presisi", desc: "Kami tidak berkompromi dengan kualitas. Setiap proses dirancang untuk mencapai standar tertinggi." },
            { icon: "🛡️", title: "Keselamatan", desc: "Tidak ada target produksi yang lebih berharga dari keselamatan setiap manusia dalam operasi kami." },
            { icon: "🌿", title: "Keberlanjutan", desc: "Setiap keputusan bisnis mempertimbangkan dampaknya terhadap lingkungan dan generasi mendatang." },
            { icon: "🤝", title: "Integritas", desc: "Kepercayaan dibangun melalui transparansi, kejujuran, dan konsistensi antara ucapan dan tindakan." },
          ].map((v, i) => (
            <div key={i} className={`group bg-zinc-900/20 hover:bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700 p-8 transition-all duration-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${(i + 2) * 80}ms` }}>
              <div className="text-2xl mb-4">{v.icon}</div>
              <h4 className="text-white font-black text-base mb-2">{v.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── COMPANY SNAPSHOT ─────────────────────────────────────────────────────────
const CompanySnapshot = () => {
  const [ref, inView] = useInView();
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-900/20 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionLabel text="Tentang Kami" />
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
              Lebih dari Dua Dekade<br /><span className="text-amber-500">Menggerakkan Industri</span>
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
              <p>PT Nusantara Industrial Group Tbk. (NIG) adalah konglomerat industri terintegrasi yang didirikan pada tahun 1998 di Surabaya, Jawa Timur. Berawal dari sebuah bengkel manufaktur komponen mesin kecil, NIG tumbuh menjadi salah satu pemain industri berat terkemuka di Indonesia.</p>
              <p>Dengan kehadiran di sektor manufaktur presisi, pertambangan mineral, logistik industri, dan energi, NIG mengoperasikan lebih dari 20 fasilitas produksi yang tersebar di 12 provinsi di seluruh Indonesia.</p>
              <p>Terdaftar di Bursa Efek Indonesia (BEI) sejak 2012 dengan kode saham NIGI, perusahaan terus tumbuh dengan konsisten rata-rata 18% per tahun selama satu dekade terakhir, didukung oleh tim manajemen berpengalaman dan lebih dari 8.500 karyawan profesional.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <div>
                    <span className="text-white font-bold text-xs">{c.code}</span>
                    <span className="text-zinc-600 text-xs ml-2">— {c.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Stats */}
          <div ref={ref} className="grid grid-cols-2 gap-px bg-zinc-800/60">
            {STATS.map((s, i) => {
              const count = useCounter(parseInt(s.number), 2000, inView);
              return (
                <div key={i} className="bg-zinc-950/80 p-8 border border-zinc-800/40">
                  <div className="text-4xl font-black text-white mb-1">
                    {count.toLocaleString()}<span className="text-amber-500">{s.suffix}</span>
                  </div>
                  <div className="text-zinc-400 text-sm font-bold mb-1">{s.label}</div>
                  <div className="text-zinc-600 text-xs leading-relaxed">{s.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── TIMELINE ────────────────────────────────────────────────────────────────
const TimelineSection = () => {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="sejarah" ref={ref} className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Perjalanan Kami" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-16">Sejarah & Tonggak<br /><span className="text-zinc-500 font-light">Pencapaian Penting</span></h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-zinc-800" />
          <div className="space-y-0">
            {TIMELINE.map((t, i) => (
              <div key={i} className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transition: `all 0.6s ease ${i * 100}ms` }}>
                {/* Year marker */}
                <div className={`absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-zinc-950 z-10 mt-2`} />
                {/* Content */}
                <div className={`pl-16 lg:pl-0 ${i % 2 === 0 ? "lg:pr-16 lg:text-right lg:col-start-1" : "lg:pl-16 lg:col-start-2"}`}>
                  <div className="inline-block bg-amber-500 text-zinc-950 font-black text-sm px-3 py-1 mb-3">{t.year}</div>
                  <h4 className="text-white font-black text-lg mb-2">{t.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
                {/* Empty col for zigzag */}
                {i % 2 === 0 && <div className="hidden lg:block lg:col-start-2" />}
                {i % 2 !== 0 && <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── LEADERSHIP ───────────────────────────────────────────────────────────────
const LeadershipSection = () => {
  const [ref, inView] = useInView();
  return (
    <section id="leadership" ref={ref} className="relative py-20 lg:py-28 bg-zinc-900/20 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel text="Kepemimpinan" />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">Tim Pemimpin<br /><span className="text-zinc-500 font-light">Yang Berpengalaman</span></h2>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">Dipimpin oleh para profesional berdedikasi dengan pengalaman gabungan lebih dari 80 tahun di industri berat.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/40">
          {LEADERSHIP.map((l, i) => (
            <div key={i} className={`group bg-zinc-900/30 hover:bg-zinc-900/70 border border-zinc-800/60 hover:border-zinc-700 p-8 transition-all duration-500 cursor-pointer ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              {/* Avatar placeholder */}
              <div className="relative w-20 h-20 mb-6">
                <div className="w-full h-full bg-zinc-800 border border-zinc-700 group-hover:border-amber-500/30 transition-colors flex items-center justify-center">
                  <span className="text-3xl font-black text-zinc-600 group-hover:text-amber-500/50 transition-colors">
                    {l.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-1.5 bg-amber-500 group-hover:w-full transition-all duration-500" />
              </div>
              <div className="text-amber-500 text-xs font-bold tracking-wider mb-1">Sejak {l.since}</div>
              <h4 className="text-white font-black text-base leading-tight mb-1">{l.name}</h4>
              <div className="text-zinc-500 text-xs font-semibold mb-4 tracking-wide">{l.title}</div>
              <p className="text-zinc-600 text-xs leading-relaxed group-hover:text-zinc-500 transition-colors">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
export default function TentangPage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar currentPath="/tentang" />
      <PageHero
        label="Tentang Kami"
        title="Warisan Industri"
        titleAccent="Nusantara"
        subtitle="Lebih dari dua dekade membangun kepercayaan, menciptakan nilai, dan menggerakkan roda industri nasional."
        breadcrumb="Tentang Kami"
      />
      <CompanySnapshot />
      <VisionMission />
      <TimelineSection />
      <LeadershipSection />
      <CTABand title="Bergabunglah Bersama Kami" subtitle="Ingin Menjadi Bagian?" />
      <Footer />
    </div>
  );
}
