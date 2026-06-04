import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Users, TrendingUp, Heart, Zap } from "lucide-react";
import { NoiseTexture, SectionLabel, PageHero } from "../shared";

// ─── CULTURE ─────────────────────────────────────────────────────────────────
const Culture = () => {
  const perks = [
    { icon: TrendingUp, title: "Pertumbuhan Karir", desc: "Program pengembangan kompetensi terstruktur, mentoring dari pemimpin industri, dan jalur promosi yang jelas dan transparan." },
    { icon: Heart, title: "Kesehatan & Wellbeing", desc: "Asuransi kesehatan premium untuk keluarga, program kesehatan jiwa, dan subsidi olahraga untuk mendukung gaya hidup sehat." },
    { icon: Users, title: "Tim yang Solid", desc: "Budaya kolaborasi yang kuat lintas divisi. Kami percaya prestasi terbaik lahir dari tim yang saling mendukung dan menghargai." },
    { icon: Zap, title: "Inovasi Didorong", desc: "Program Innovation Fund dengan anggaran Rp 5M per proposal. Setiap ide brilian dari karyawan mana pun layak didengar dan didanai." },
  ];
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Budaya Kerja" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
              Bukan Sekadar Pekerjaan,<br /><span className="text-amber-500">Ini Karir Bermakna</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Di Nusantara Industrial, Anda bergabung dengan tim yang membangun fondasi industri bangsa. Setiap hari adalah kesempatan untuk belajar, berkontribusi, dan tumbuh bersama perusahaan yang terus berkembang.
            </p>
            <div className="flex gap-8">
              {[{ n: "3.200+", l: "Karyawan Aktif" }, { n: "87%", l: "Retensi Karyawan" }, { n: "4,2/5", l: "Employee Rating" }].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-amber-500">{s.n}</div>
                  <div className="text-zinc-500 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800/40">
            {perks.map((p, i) => (
              <div key={i} className="group bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-800/40 hover:border-zinc-700/60 p-6 transition-all duration-400">
                <div className="w-10 h-10 flex items-center justify-center border border-zinc-700 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 mb-4 transition-all">
                  <p.icon className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{p.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── JOB LISTINGS ─────────────────────────────────────────────────────────────
const JobListings = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [openJob, setOpenJob] = useState(null);

  const categories = ["Semua", "Teknik", "Operasi", "Keuangan", "SDM", "IT", "K3"];
  const jobs = [
    { id: 1, title: "Senior CNC Programmer", dept: "Teknik", type: "Full-time", location: "Karawang, Jawa Barat", level: "Senior", posted: "2 hari lalu", cat: "Teknik", desc: "Kami mencari Senior CNC Programmer berpengalaman untuk memimpin tim programming mesin CNC multi-axis di Plant Karawang I. Kandidat ideal memiliki pengalaman minimal 5 tahun di industri manufaktur presisi.", reqs: ["D3/S1 Teknik Mesin atau setara", "Pengalaman ≥5 tahun CNC programming", "Mahir Fanuc/Siemens control system", "Familiar dengan CAD/CAM software", "Bersedia shift kerja"] },
    { id: 2, title: "Mine Planning Engineer", dept: "Pertambangan", type: "Full-time", location: "Kutai Kertanegara, Kaltim", level: "Mid-level", posted: "5 hari lalu", cat: "Teknik", desc: "Bergabunglah sebagai Mine Planning Engineer untuk merencanakan dan mengoptimalkan operasi tambang terbuka di site Kutai. Anda akan bekerja dengan software Vulcan/Minescape dan berkolaborasi dengan tim geologi dan operasi.", reqs: ["S1 Teknik Pertambangan", "Pengalaman ≥3 tahun mine planning", "Mahir Vulcan/Surpac/Minescape", "Memiliki KP (Kepala Teknik Tambang) atau sedang proses", "Bersedia ditempatkan di site (roaster 4:2)"] },
    { id: 3, title: "HSE Supervisor", dept: "K3", type: "Full-time", location: "Morowali, Sulawesi Tengah", level: "Mid-level", posted: "1 minggu lalu", cat: "K3", desc: "Kami membuka posisi HSE Supervisor untuk memimpin implementasi program K3 di site tambang Morowali. Kandidat akan bertanggung jawab atas audit K3, investigasi insiden, dan program pelatihan keselamatan.", reqs: ["S1 K3 / Teknik Lingkungan", "Sertifikat AK3 Umum (wajib)", "Pengalaman ≥4 tahun di industri tambang/migas", "Memahami SMK3 dan ISO 45001", "Bersedia ditempatkan di site"] },
    { id: 4, title: "Financial Controller", dept: "Keuangan", type: "Full-time", location: "Jakarta Selatan", level: "Senior", posted: "1 minggu lalu", cat: "Keuangan", desc: "Posisi Financial Controller untuk mengawasi pelaporan keuangan konsolidasi grup, koordinasi audit eksternal, dan implementasi kebijakan akuntansi berstandar PSAK/IFRS.", reqs: ["S1/S2 Akuntansi/Keuangan", "CPA/CA charterholder (diutamakan)", "Pengalaman ≥7 tahun, minimal 3 tahun manajerial", "Mahir SAP & sistem ERP", "Memahami PSAK/IFRS"] },
    { id: 5, title: "IT Systems Analyst", dept: "IT", type: "Full-time", location: "Karawang, Jawa Barat", level: "Mid-level", posted: "3 hari lalu", cat: "IT", desc: "IT Systems Analyst untuk mendukung implementasi dan pemeliharaan Manufacturing Execution System (MES) dan integrasi IoT di lini produksi plant Karawang.", reqs: ["S1 Teknik Informatika / Sistem Informasi", "Pengalaman ≥3 tahun sistem ERP/MES", "Pemahaman IoT dan OT security", "Familiar dengan SQL & data analytics", "Pengalaman Siemens MES / SAP PP diutamakan"] },
    { id: 6, title: "Recruitment Specialist", dept: "SDM", type: "Full-time", location: "Surabaya, Jawa Timur", level: "Mid-level", posted: "4 hari lalu", cat: "SDM", desc: "Recruitment Specialist untuk mengelola end-to-end proses rekrutmen posisi teknikal dan manajerial, membangun talent pipeline, dan mengembangkan employer branding perusahaan.", reqs: ["S1 Psikologi / Manajemen SDM", "Pengalaman ≥3 tahun rekrutmen industri", "Mahir assessment tools (psikotes, structured interview)", "Berpengalaman dengan ATS platform", "Kemampuan komunikasi lintas fungsi yang kuat"] },
  ];

  const filtered = jobs.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || j.dept.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "Semua" || j.cat === filter;
    return matchSearch && matchFilter;
  });

  return (
    <section className="relative py-20 lg:py-28 bg-zinc-900/20 border-t border-zinc-800/60 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Lowongan Terbuka" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-10">Temukan Posisi<br /><span className="text-zinc-500 font-light">Yang Tepat Untuk Anda</span></h2>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text" placeholder="Cari posisi atau departemen..." value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 text-white placeholder-zinc-600 text-sm pl-11 pr-4 py-3 outline-none transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 text-xs font-bold tracking-wide border transition-all duration-200 ${filter === c ? "bg-amber-500 border-amber-500 text-zinc-950" : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="text-zinc-600 text-xs mb-6">{filtered.length} posisi ditemukan</div>

        {/* Job Cards */}
        <div className="space-y-px bg-zinc-800/30">
          {filtered.map((job) => (
            <div key={job.id} className="bg-zinc-900/20 border border-zinc-800/40 hover:border-zinc-700/60 transition-all duration-300">
              <div className="p-6 cursor-pointer" onClick={() => setOpenJob(openJob === job.id ? null : job.id)}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <span className="text-amber-500 text-[10px] font-bold border border-amber-900/60 bg-amber-950/30 px-2 py-0.5">{job.dept}</span>
                      <span className="text-zinc-600 text-[10px] border border-zinc-800 px-2 py-0.5">{job.type}</span>
                      <span className="text-zinc-600 text-[10px] border border-zinc-800 px-2 py-0.5">{job.level}</span>
                    </div>
                    <h4 className="text-white font-black text-base mb-1">{job.title}</h4>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs"><MapPin className="w-3 h-3" />{job.location}</div>
                      <div className="flex items-center gap-1.5 text-zinc-600 text-xs"><Clock className="w-3 h-3" />{job.posted}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button className="group flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs px-5 py-2.5 transition-all">
                      Lamar <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    {openJob === job.id ? <ChevronUp className="w-5 h-5 text-zinc-500" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
                  </div>
                </div>
              </div>
              {/* Expandable Detail */}
              <div className={`overflow-hidden transition-all duration-400 ${openJob === job.id ? "max-h-96" : "max-h-0"}`}>
                <div className="px-6 pb-6 border-t border-zinc-800/60 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <div className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-3">Deskripsi Singkat</div>
                      <p className="text-zinc-400 text-xs leading-relaxed">{job.desc}</p>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-3">Kualifikasi Utama</div>
                      <ul className="space-y-2">
                        {job.reqs.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-zinc-400 text-xs">
                            <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-zinc-600">
            <Briefcase className="w-10 h-10 mx-auto mb-4 opacity-30" />
            <p className="text-sm">Tidak ada posisi yang cocok. Coba kata kunci lain.</p>
          </div>
        )}
      </div>
    </section>
  );
};

// ─── CAREER PAGE ─────────────────────────────────────────────────────────────
export default function CareerPage() {
  return (
    <>
      <PageHero
        label="Karir"
        title="Bergabung & Bangun"
        titleAccent="Masa Depan Bersama"
        subtitle="Kami tidak hanya mencari karyawan — kami mencari pembangun. Orang-orang yang ingin karirnya berkontribusi nyata bagi industri dan bangsa."
        breadcrumb="Karir"
      />
      <Culture />
      <JobListings />
    </>
  );
}
