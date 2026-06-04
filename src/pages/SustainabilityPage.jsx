import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Users, Sun, Droplets, TreePine, CheckCircle, Award } from "lucide-react";
import { NoiseTexture, SectionLabel, PageHero, useInView, useCounter } from "../shared";

// ─── ESG OVERVIEW ─────────────────────────────────────────────────────────────
const ESGOverview = () => {
  const [ref, inView] = useInView(0.2);
  const pillars = [
    { icon: Leaf, label: "E — Lingkungan", color: "emerald", title: "Alam Adalah Aset", desc: "Kami beroperasi dengan prinsip bahwa alam bukan hanya sumber daya, tetapi aset jangka panjang yang harus dirawat. Setiap keputusan operasional mempertimbangkan dampak ekologis jangka panjang.", metrics: [{ v: "-40%", l: "Emisi CO₂ sejak 2019" }, { v: "800 Ha", l: "Lahan reklamasi" }, { v: "0 L", l: "Discharge ke sungai" }] },
    { icon: Shield, label: "S — Sosial", color: "amber", title: "Manusia di Pusat", desc: "3.200+ karyawan adalah aset utama kami. Program kesejahteraan, pengembangan kompetensi, dan keselamatan kerja dirancang untuk memastikan setiap orang pulang ke rumah dengan selamat.", metrics: [{ v: "8 Thn", l: "Zero fatality record" }, { v: "50+", l: "Desa binaan" }, { v: "Rp 42M", l: "Anggaran CSR 2024" }] },
    { icon: Award, label: "G — Tata Kelola", color: "blue", title: "Transparansi Mutlak", desc: "Tata kelola yang baik adalah fondasi kepercayaan. Kami berkomitmen pada pelaporan transparan, audit independen, dan sistem whistleblowing yang terlindungi.", metrics: [{ v: "AAA", l: "Rating GCG" }, { v: "4x", l: "Audit independen/tahun" }, { v: "100%", l: "Kepatuhan regulasi" }] },
  ];
  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-emerald-950/20 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="ESG Framework" color="emerald" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Tiga Pilar<br /><span className="text-emerald-500">Keberlanjutan</span></h2>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mb-14">Pendekatan ESG kami bukan sekadar kepatuhan regulasi — ini adalah cara kami mendefinisikan ulang makna industri yang bertanggung jawab.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-800/40">
          {pillars.map((p, i) => {
            const colorMap = { emerald: { text: "text-emerald-500", border: "border-emerald-900", bg: "bg-emerald-950/40", accent: "border-emerald-500" }, amber: { text: "text-amber-500", border: "border-amber-900", bg: "bg-amber-950/40", accent: "border-amber-500" }, blue: { text: "text-blue-400", border: "border-blue-900", bg: "bg-blue-950/40", accent: "border-blue-400" } };
            const c = colorMap[p.color];
            return (
              <div key={i} className="group bg-zinc-900/20 hover:bg-zinc-900/50 border border-zinc-800/40 hover:border-zinc-700/60 p-8 lg:p-10 transition-all duration-500">
                <div className={`w-12 h-12 flex items-center justify-center border ${c.border} ${c.bg} mb-6`}>
                  <p.icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <div className={`text-[10px] font-black tracking-[0.35em] uppercase ${c.text} mb-2`}>{p.label}</div>
                <h3 className="text-white font-black text-xl mb-4">{p.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-8">{p.desc}</p>
                <div className={`border-t ${c.border}/50 pt-6 grid grid-cols-3 gap-4`}>
                  {p.metrics.map((m, j) => (
                    <div key={j} className="text-center">
                      <div className={`text-xl font-black ${c.text} mb-0.5`}>{m.v}</div>
                      <div className="text-zinc-600 text-[10px] leading-tight">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── ENVIRONMENT PROGRAM ─────────────────────────────────────────────────────
const EnvironmentPrograms = () => {
  const programs = [
    { icon: Sun, title: "Energi Terbarukan", desc: "Instalasi 12 MW panel surya di seluruh fasilitas manufaktur. Target 60% energi terbarukan pada 2027.", progress: 38, target: 60 },
    { icon: Droplets, title: "Water Stewardship", desc: "Sistem daur ulang air limbah dengan kapasitas 1.800 m³/hari. Zero discharge ke badan air alami sejak 2021.", progress: 100, target: 100 },
    { icon: TreePine, title: "Reklamasi & Revegetasi", desc: "Program rehabilitasi lahan pasca tambang dengan penanaman 200.000 pohon native species per tahun.", progress: 67, target: 100 },
    { icon: Leaf, title: "Carbon Offset", desc: "Kemitraan dengan 8 program penyerapan karbon bersertifikasi Gold Standard untuk kompensasi emisi sisa.", progress: 45, target: 100 },
  ];
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-900/20 border-t border-zinc-800/60 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Program Lingkungan" color="emerald" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-14">Aksi Nyata<br /><span className="text-zinc-500 font-light">Untuk Bumi</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="group border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-zinc-700 p-8 transition-all duration-400">
              <div className="w-12 h-12 flex items-center justify-center border border-emerald-900 bg-emerald-950/40 mb-6">
                <p.icon className="w-5 h-5 text-emerald-500" />
              </div>
              <h4 className="text-white font-black text-base mb-3">{p.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed mb-6">{p.desc}</p>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider">Progress</span>
                  <span className="text-emerald-400 font-black text-sm">{p.progress}%</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${p.progress}%` }} />
                </div>
                <div className="text-zinc-700 text-[10px] mt-1">Target: {p.target}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
const Certifications = () => {
  const certs = [
    { code: "ISO 9001:2015", name: "Sistem Manajemen Mutu", body: "BSI Group", year: "2008", scope: "Divisi Manufaktur" },
    { code: "ISO 14001:2015", name: "Manajemen Lingkungan", body: "SGS Indonesia", year: "2014", scope: "Seluruh Operasi" },
    { code: "ISO 45001:2018", name: "Keselamatan & Kesehatan Kerja", body: "Bureau Veritas", year: "2019", scope: "Seluruh Operasi" },
    { code: "OHSAS 18001", name: "Occupational Health & Safety", body: "Lloyd's Register", year: "2011", scope: "Divisi Pertambangan" },
    { code: "ISO 50001:2018", name: "Manajemen Energi", body: "TÜV Rheinland", year: "2021", scope: "Plant Karawang I & II" },
    { code: "PROPER Emas", name: "Kinerja Pengelolaan Lingkungan", body: "KLHK Indonesia", year: "2023", scope: "Seluruh Operasi" },
  ];
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 border-t border-zinc-800/60 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Sertifikasi & Penghargaan" color="emerald" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-14">Diakui Secara<br /><span className="text-zinc-500 font-light">Internasional</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/40">
          {certs.map((c, i) => (
            <div key={i} className="group bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-800/40 hover:border-emerald-900/60 p-6 transition-all duration-400">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-emerald-400 font-black text-base">{c.code}</div>
                  <div className="text-white font-bold text-sm">{c.name}</div>
                </div>
              </div>
              <div className="space-y-1.5 pl-9">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-600 text-xs">Lembaga</span>
                  <span className="text-zinc-400 text-xs font-medium">{c.body}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-600 text-xs">Sejak</span>
                  <span className="text-zinc-400 text-xs font-medium">{c.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-600 text-xs">Cakupan</span>
                  <span className="text-zinc-400 text-xs font-medium">{c.scope}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SUSTAINABILITY PAGE ──────────────────────────────────────────────────────
export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        label="ESG & Keberlanjutan"
        title="Industri Kuat,"
        titleAccent="Bumi Terjaga"
        subtitle="Keberlanjutan bukan kompromi antara profit dan lingkungan — ini adalah cara kami mendefinisikan ulang makna industri yang bertanggung jawab untuk generasi yang akan datang."
        breadcrumb="Keberlanjutan"
      />
      <ESGOverview />
      <EnvironmentPrograms />
      <Certifications />
    </>
  );
}
