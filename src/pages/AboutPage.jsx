import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Users, Target, Eye, Heart, Shield } from "lucide-react";
import { NoiseTexture, GridPattern, SectionLabel, PageHero, useInView, useCounter } from "../shared";

// ─── VISION MISSION ───────────────────────────────────────────────────────────
const VisionMission = () => (
  <section id="visi" className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
    <NoiseTexture />
    <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.04]" style={{
      backgroundImage: `repeating-linear-gradient(-45deg, rgba(251,191,36,0.5) 0px, rgba(251,191,36,0.5) 1px, transparent 1px, transparent 30px)`
    }} />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {[
          { icon: Eye, label: "Visi", color: "amber", title: "Menjadi pemimpin industri manufaktur dan pertambangan terpercaya di Asia Tenggara pada 2030.", points: ["Ekspansi ke 5 negara ASEAN", "Top 3 perusahaan industri nasional", "Benchmark ESG industri regional", "Zero carbon operation 2045"] },
          { icon: Target, label: "Misi", color: "orange", title: "Menghadirkan solusi industri yang presisi, aman, dan berkelanjutan demi kemakmuran bangsa.", points: ["Operasi berstandar internasional", "Inovasi teknologi berkelanjutan", "Pemberdayaan sumber daya lokal", "Transparansi tata kelola korporat"] },
        ].map((item, i) => (
          <div key={i} className="group relative border border-zinc-800 bg-zinc-900/20 p-8 lg:p-12 hover:border-zinc-700 transition-all duration-500">
            <div className={`absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${i === 0 ? "bg-amber-500" : "bg-orange-500"}`} />
            <div className={`w-14 h-14 flex items-center justify-center border mb-8 ${i === 0 ? "border-amber-900 bg-amber-950/40" : "border-orange-900 bg-orange-950/40"}`}>
              <item.icon className={`w-6 h-6 ${i === 0 ? "text-amber-500" : "text-orange-500"}`} />
            </div>
            <div className={`text-xs font-bold tracking-[0.35em] uppercase mb-3 ${i === 0 ? "text-amber-500" : "text-orange-500"}`}>{item.label}</div>
            <p className="text-white font-bold text-lg leading-snug mb-8">{item.title}</p>
            <div className="space-y-3">
              {item.points.map((p, j) => (
                <div key={j} className="flex items-center gap-3">
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${i === 0 ? "text-amber-500/60" : "text-orange-500/60"}`} />
                  <span className="text-zinc-400 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── COMPANY HISTORY ─────────────────────────────────────────────────────────
const History = () => {
  const milestones = [
    { year: "1998", title: "Pendirian Perusahaan", desc: "Nusantara Industrial Group didirikan di Surabaya oleh Ir. Hendra Wijaya sebagai perusahaan manufaktur komponen industri dengan 45 karyawan pertama." },
    { year: "2003", title: "Ekspansi Pertambangan", desc: "Memperoleh konsesi tambang batu bara pertama di Kalimantan Timur seluas 2.400 hektare, menandai diversifikasi bisnis ke sektor pertambangan." },
    { year: "2008", title: "Sertifikasi ISO Pertama", desc: "Meraih sertifikasi ISO 9001 untuk divisi manufaktur, menjadi salah satu perusahaan industri menengah pertama di Indonesia yang tersertifikasi." },
    { year: "2012", title: "IPO & Go Public", desc: "Melantai di Bursa Efek Indonesia (BEI) dengan kode saham NTIG, berhasil menghimpun dana segar Rp 1,2 triliun untuk ekspansi nasional." },
    { year: "2016", title: "Industri 4.0 Transformation", desc: "Meluncurkan program transformasi digital Manufacturing Execution System (MES) dan mengintegrasikan IoT di seluruh lini produksi." },
    { year: "2019", title: "Komitmen Net-Zero", desc: "Mendeklarasikan roadmap dekarbonisasi menuju net-zero emission 2045, menjadi pelopor komitmen iklim di sektor industri berat Indonesia." },
    { year: "2022", title: "Ekspansi Regional", desc: "Pembukaan joint venture dengan mitra strategis di Malaysia dan Vietnam, memperkuat posisi sebagai pemain regional Asia Tenggara." },
    { year: "2024", title: "25 Tahun Keunggulan", desc: "Merayakan 25 tahun operasi dengan 3.200+ karyawan, 12 lokasi operasi, dan kapasitas produksi yang meningkat 800% dari tahun pertama." },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-zinc-900/20 border-y border-zinc-800/60 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Perjalanan Kami" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-16">25 Tahun<br /><span className="text-zinc-500 font-light">Menempa Keunggulan</span></h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"} pl-12 md:pl-0`}>
                  <div className="group border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-zinc-700 p-6 transition-all duration-400">
                    <div className="text-amber-500 font-black text-2xl mb-2">{m.year}</div>
                    <div className="text-white font-bold text-sm mb-2">{m.title}</div>
                    <div className="text-zinc-500 text-xs leading-relaxed">{m.desc}</div>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-amber-500 md:-translate-x-1/2 -translate-x-1.5 rounded-full ring-4 ring-zinc-950" />
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── VALUES ───────────────────────────────────────────────────────────────────
const Values = () => {
  const vals = [
    { icon: Award, title: "Keunggulan", desc: "Kami mengejar standar tertinggi dalam setiap aspek operasi — dari toleransi mesin hingga laporan keberlanjutan." },
    { icon: Shield, title: "Keselamatan", desc: "Safety bukan prioritas nomor satu, safety adalah kondisi mutlak. Tidak ada pekerjaan yang lebih penting dari keselamatan jiwa." },
    { icon: Heart, title: "Integritas", desc: "Setiap keputusan bisnis kami dilandaskan pada kejujuran, transparansi, dan tanggung jawab terhadap semua pemangku kepentingan." },
    { icon: Users, title: "Kebersamaan", desc: "Kami percaya kolaborasi manusia adalah mesin pertumbuhan terkuat. Setiap karyawan adalah bagian dari satu tim besar." },
  ];
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Nilai-Nilai Kami" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-14">Fondasi Yang<br /><span className="text-zinc-500 font-light">Menggerakkan Kami</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800/40">
          {vals.map((v, i) => (
            <div key={i} className="group bg-zinc-900/20 hover:bg-zinc-900/60 p-8 border border-zinc-800/40 hover:border-zinc-700/60 transition-all duration-400">
              <div className="w-12 h-12 flex items-center justify-center border border-zinc-700 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 mb-6 transition-all">
                <v.icon className="w-5 h-5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
              </div>
              <h4 className="text-white font-black text-base mb-3">{v.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── LEADERSHIP ───────────────────────────────────────────────────────────────
const Leadership = () => {
  const [active, setActive] = useState(0);
  const team = [
    { name: "Ir. Hendra Wijaya", role: "Founder & CEO", since: "1998", bio: "Insinyur lulusan ITB 1994 dengan spesialisasi Teknik Mesin. Mendirikan Nusantara Industrial Group dari nol dan memimpinnya menjadi konglomerat industri terkemuka nasional. Penerima penghargaan Ernst & Young Entrepreneur of the Year 2018.", initials: "HW", color: "from-amber-700 to-amber-900" },
    { name: "Dr. Siti Rahayu, M.M.", role: "President Director", since: "2010", bio: "Doktor manajemen bisnis dari Universitas Indonesia dengan pengalaman 20 tahun di industri manufaktur. Memimpin transformasi digital perusahaan dan ekspansi regional ke Malaysia dan Vietnam.", initials: "SR", color: "from-zinc-600 to-zinc-800" },
    { name: "Ir. Bambang Santoso", role: "Dir. of Operations", since: "2005", bio: "Ahli teknik pertambangan dengan 25+ tahun pengalaman di sektor extractive industry. Arsitek utama program Zero Accident dan sistem manajemen K3 terintegrasi perusahaan.", initials: "BS", color: "from-orange-700 to-orange-900" },
    { name: "Eng. Dewi Kartika", role: "Chief Technology Officer", since: "2016", bio: "Pionir implementasi Industri 4.0 di sektor manufaktur Indonesia. Lulusan Delft University of Technology dengan portofolio 12 paten teknologi proses manufaktur presisi.", initials: "DK", color: "from-blue-700 to-blue-900" },
    { name: "Drs. Agus Pramono", role: "Chief Financial Officer", since: "2012", bio: "CFA charterholder dengan rekam jejak mengelola portofolio aset Rp 8 triliun. Arsitek strategi IPO 2012 dan sukses menghimpun dana ekspansi lebih dari Rp 3,5 triliun.", initials: "AP", color: "from-zinc-700 to-zinc-900" },
  ];
  return (
    <section id="tim" className="relative py-20 lg:py-28 bg-zinc-900/20 border-t border-zinc-800/60 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Tim Kepemimpinan" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-14">Dipimpin Oleh<br /><span className="text-zinc-500 font-light">Para Ahli Terbaik</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Sidebar list */}
          <div className="lg:col-span-2 space-y-px bg-zinc-800/30">
            {team.map((p, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`w-full text-left p-5 flex items-center gap-4 transition-all duration-300 ${active === i ? "bg-zinc-900 border-l-2 border-amber-500" : "bg-zinc-900/20 hover:bg-zinc-900/60 border-l-2 border-transparent"}`}>
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center bg-gradient-to-br ${p.color} flex-shrink-0`}>
                  <span className="text-white font-black text-xs">{p.initials}</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{p.name}</div>
                  <div className="text-zinc-500 text-xs">{p.role}</div>
                </div>
              </button>
            ))}
          </div>
          {/* Detail Panel */}
          <div className="lg:col-span-3 border border-zinc-800 bg-zinc-900/30 p-8 lg:p-10">
            <div className="flex items-start gap-6 mb-8">
              <div className={`w-20 h-20 rounded-sm flex items-center justify-center bg-gradient-to-br ${team[active].color} flex-shrink-0`}>
                <span className="text-white font-black text-xl">{team[active].initials}</span>
              </div>
              <div>
                <h3 className="text-white font-black text-xl mb-1">{team[active].name}</h3>
                <div className="text-amber-500 font-bold text-sm mb-1">{team[active].role}</div>
                <div className="text-zinc-600 text-xs">Bergabung sejak {team[active].since}</div>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">{team[active].bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Tentang Kami"
        title="Dua Dekade Membangun"
        titleAccent="Industri Bangsa"
        subtitle="Dari sebuah bengkel manufaktur kecil di Surabaya pada 1998, kami telah berkembang menjadi salah satu konglomerat industri terkemuka di Indonesia dengan lebih dari 3.200 karyawan di 12 lokasi operasi."
        breadcrumb="Tentang Kami"
      />
      <VisionMission />
      <History />
      <Values />
      <Leadership />
    </>
  );
}
