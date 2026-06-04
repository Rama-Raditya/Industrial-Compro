import { useState } from "react";
import { ArrowRight, MapPin, Clock, ChevronRight, Search, Briefcase, Users, TrendingUp, Award } from "lucide-react";
import { Navbar, Footer, CTABand, PageHero, NoiseTexture, SectionLabel, useInView } from "./components";
import { JOBS } from "./data";

// ─── WHY JOIN ─────────────────────────────────────────────────────────────────
const WhyJoin = () => {
  const perks = [
    { icon: TrendingUp, title: "Karir Berkembang", desc: "Program talent management dan fast-track untuk high performer dengan jenjang karir yang jelas dan terstruktur." },
    { icon: Award, title: "Kompensasi Kompetitif", desc: "Paket remunerasi di atas rata-rata industri, bonus kinerja, BPJS, asuransi tambahan, dan program pensiun." },
    { icon: Users, title: "Lingkungan Inklusif", desc: "Budaya kerja yang menghargai keberagaman, kolaborasi lintas divisi, dan ide-ide segar dari semua level." },
    { icon: Briefcase, title: "Pengembangan SDM", desc: "Training 40+ jam per tahun, program beasiswa S2, dan akses ke platform e-learning kelas dunia." },
  ];
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="relative py-20 lg:py-24 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel text="Bergabung Bersama Kami" />
          <h2 className="text-3xl lg:text-4xl font-black text-white">Mengapa Berkarir di<br /><span className="text-amber-500">Nusantara Industrial?</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/40">
          {perks.map((p, i) => (
            <div key={i} className={`group bg-zinc-900/30 hover:bg-zinc-900/70 border border-zinc-800/60 hover:border-amber-500/20 p-8 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:border-amber-500/40 transition-colors">
                <p.icon className="w-5 h-5 text-amber-500" />
              </div>
              <h4 className="text-white font-black text-sm mb-2">{p.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── JOB LISTINGS ─────────────────────────────────────────────────────────────
const JobListings = () => {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("Semua");
  const [filterLevel, setFilterLevel] = useState("Semua");

  const depts = ["Semua", ...Array.from(new Set(JOBS.map((j) => j.dept)))];
  const levels = ["Semua", "Junior", "Mid-level", "Senior", "Supervisor"];

  const filtered = JOBS.filter((j) => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || j.dept.toLowerCase().includes(search.toLowerCase());
    const matchDept = filterDept === "Semua" || j.dept === filterDept;
    const matchLevel = filterLevel === "Semua" || j.level === filterLevel;
    return matchSearch && matchDept && matchLevel;
  });

  const levelColor = {
    Junior: "bg-blue-500/10 text-blue-400 border-blue-800/60",
    "Mid-level": "bg-amber-500/10 text-amber-500 border-amber-800/60",
    Senior: "bg-emerald-500/10 text-emerald-500 border-emerald-800/60",
    Supervisor: "bg-violet-500/10 text-violet-400 border-violet-800/60",
  };

  return (
    <section className="relative py-20 lg:py-24 bg-zinc-900/20 overflow-hidden border-t border-zinc-800/60">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
          <div>
            <SectionLabel text="Lowongan Kerja" />
            <h2 className="text-3xl font-black text-white">Posisi Terbuka<br /><span className="text-zinc-500 font-light">Bergabunglah Sekarang</span></h2>
          </div>
          <div className="text-zinc-500 text-sm">
            Menampilkan <span className="text-amber-500 font-bold">{filtered.length}</span> dari {JOBS.length} posisi
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="text"
              placeholder="Cari posisi atau departemen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 text-white text-sm pl-11 pr-4 py-3 outline-none transition-colors placeholder:text-zinc-600"
            />
          </div>
          {/* Dept filter */}
          <select
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
            className="bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-400 text-sm px-4 py-3 outline-none transition-colors cursor-pointer min-w-[160px]"
          >
            {depts.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          {/* Level filter */}
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-400 text-sm px-4 py-3 outline-none transition-colors cursor-pointer min-w-[140px]"
          >
            {levels.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        {/* Job Cards */}
        <div className="space-y-px bg-zinc-800/30">
          {filtered.length === 0 ? (
            <div className="bg-zinc-950/50 border border-zinc-800/60 p-16 text-center">
              <div className="text-zinc-700 text-sm">Tidak ada posisi yang sesuai dengan filter Anda.</div>
            </div>
          ) : (
            filtered.map((job) => (
              <div key={job.id} className="group bg-zinc-950/50 hover:bg-zinc-900/60 border border-zinc-800/40 hover:border-zinc-700/60 p-6 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 border ${levelColor[job.level] || "bg-zinc-800 text-zinc-400 border-zinc-700"} tracking-wider uppercase`}>
                        {job.level}
                      </span>
                      <span className="text-zinc-700 text-[10px]">·</span>
                      <span className="text-zinc-500 text-xs">{job.dept}</span>
                      {job.type === "Contract" && <span className="text-[10px] font-bold px-2 py-0.5 border border-orange-800/60 bg-orange-500/10 text-orange-400 uppercase tracking-wider">Kontrak</span>}
                    </div>
                    <h4 className="text-white font-black text-base group-hover:text-amber-100 transition-colors mb-2">{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <MapPin className="w-3.5 h-3.5" />{job.loc}
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <Clock className="w-3.5 h-3.5" />Deadline: {job.deadline}
                      </div>
                    </div>
                  </div>
                  <button className="group/btn flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-500 text-amber-500 hover:text-zinc-950 font-bold text-xs px-5 py-3 transition-all duration-300 flex-shrink-0">
                    Lamar Sekarang <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

// ─── INTERNSHIP BANNER ────────────────────────────────────────────────────────
const InternshipBanner = () => (
  <section className="relative py-16 bg-zinc-950 overflow-hidden border-t border-zinc-800/60">
    <NoiseTexture />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border border-dashed border-zinc-700/60 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">Program Magang</div>
          <h3 className="text-2xl font-black text-white mb-2">NIG Internship Program 2025</h3>
          <p className="text-zinc-500 text-sm max-w-lg">Terbuka untuk mahasiswa S1/D4 semester 6-8 di bidang teknik, bisnis, dan lingkungan. Durasi 3-6 bulan dengan allowance kompetitif dan potensi rekrutmen langsung.</p>
        </div>
        <button className="group flex items-center gap-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-zinc-950 font-bold text-sm px-8 py-4 transition-all duration-300 flex-shrink-0">
          Daftar Magang <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
);

// ─── KARIR PAGE ───────────────────────────────────────────────────────────────
export default function KarirPage() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar currentPath="/karir" />
      <PageHero
        label="Karir"
        title="Tumbuh Bersama"
        titleAccent="NIG"
        subtitle="Bergabunglah dengan 8.500+ profesional berdedikasi yang bersama-sama membangun industri nasional yang kuat, aman, dan berkelanjutan."
        breadcrumb="Karir"
      />
      <WhyJoin />
      <JobListings />
      <InternshipBanner />
      <CTABand title="Tidak Menemukan Posisi yang Cocok?" subtitle="Kirim CV Spontan" />
      <Footer />
    </div>
  );
}
