import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, Mountain, Zap, Settings, Layers, Truck, CheckCircle } from "lucide-react";
import { NoiseTexture, GridPattern, SectionLabel, PageHero } from "../shared";

// ─── DIVISION TABS ────────────────────────────────────────────────────────────
const DivisionDetail = () => {
  const [active, setActive] = useState(0);
  const divisions = [
    {
      id: "manufaktur",
      icon: Factory,
      label: "Manufaktur Presisi",
      tagline: "Presisi di Setiap Milimeter",
      desc: "Fasilitas manufaktur komponen industri berat kami beroperasi dengan standar presisi tertinggi menggunakan teknologi CNC multi-axis dan sistem quality control terotomasi. Kami melayani sektor energi, infrastruktur, migas, dan industri pengolahan mineral.",
      specs: [
        { label: "Kapasitas Produksi", value: "500.000 unit/tahun" },
        { label: "Toleransi Presisi", value: "±0.001 mm" },
        { label: "Luas Fasilitas", value: "85.000 m²" },
        { label: "Mesin CNC Aktif", value: "340+ unit" },
        { label: "Karyawan Divisi", value: "1.800+ orang" },
        { label: "Klien Aktif", value: "120+ perusahaan" },
      ],
      capabilities: [
        "CNC Turning & Milling 5-axis",
        "Heat Treatment & Surface Hardening",
        "Precision Casting & Forging",
        "Hydraulic & Pneumatic Components",
        "Structural Fabrication & Welding",
        "Non-Destructive Testing (NDT)",
        "Coating & Corrosion Protection",
        "Assembly & Integration Services",
      ],
      clients: ["Pertamina", "PLN", "Freeport", "VALE Indonesia", "Adaro Energy"],
      color: "amber",
    },
    {
      id: "pertambangan",
      icon: Mountain,
      label: "Pertambangan Berkelanjutan",
      tagline: "Menggali Kekayaan, Menjaga Bumi",
      desc: "Divisi pertambangan kami mengelola konsesi mineral di Kalimantan, Sulawesi, dan Maluku dengan menerapkan praktik penambangan bertanggung jawab yang melampaui standar regulasi. Setiap ton material yang dihasilkan menyertakan komitmen terhadap lingkungan dan komunitas lokal.",
      specs: [
        { label: "Total Konsesi", value: "15.400 hektare" },
        { label: "Produksi Tahunan", value: "4,2 juta ton" },
        { label: "Recovery Rate", value: ">92%" },
        { label: "Lokasi Tambang", value: "7 site aktif" },
        { label: "Karyawan Divisi", value: "1.200+ orang" },
        { label: "Kontrak Penjualan", value: "Hingga 2032" },
      ],
      capabilities: [
        "Open Pit & Underground Mining",
        "Mineral Processing & Beneficiation",
        "Geotechnical Engineering & Safety",
        "Environmental Monitoring System",
        "Mine Rehabilitation & Revegetation",
        "Community Development Program",
        "Logistics & Supply Chain Management",
        "Mine Planning & Feasibility Study",
      ],
      clients: ["Krakatau Steel", "ANTAM", "Vale", "Glencore", "BHP"],
      color: "orange",
    },
  ];

  const d = divisions[active];

  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Switcher */}
        <div className="flex gap-px mb-14 bg-zinc-800/40 w-fit">
          {divisions.map((div, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-6 py-4 text-sm font-bold tracking-wide transition-all duration-300 ${active === i ? "bg-amber-500 text-zinc-950" : "bg-zinc-900/40 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/60"}`}>
              <div.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{div.label}</span>
              <span className="sm:hidden">{i === 0 ? "Manufaktur" : "Tambang"}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 flex items-center justify-center border ${active === 0 ? "border-amber-900 bg-amber-950/40" : "border-orange-900 bg-orange-950/40"}`}>
                <d.icon className={`w-6 h-6 ${active === 0 ? "text-amber-500" : "text-orange-500"}`} />
              </div>
              <div>
                <div className={`text-xs font-bold tracking-[0.35em] uppercase mb-0.5 ${active === 0 ? "text-amber-500" : "text-orange-500"}`}>{d.label}</div>
                <div className="text-white font-black text-xl">{d.tagline}</div>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-10">{d.desc}</p>

            {/* Capabilities */}
            <div className="mb-10">
              <div className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-5">Kapabilitas Teknis</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {d.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${active === 0 ? "text-amber-500/70" : "text-orange-500/70"}`} />
                    <span className="text-zinc-400 text-xs">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clients */}
            <div>
              <div className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-4">Klien & Mitra Strategis</div>
              <div className="flex flex-wrap gap-2">
                {d.clients.map((c, i) => (
                  <span key={i} className="text-zinc-400 text-xs font-bold border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 transition-colors">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Specs */}
          <div className="lg:col-span-2">
            <div className="border border-zinc-800 bg-zinc-900/30">
              <div className={`px-6 py-4 border-b border-zinc-800 text-xs font-bold tracking-widest uppercase ${active === 0 ? "text-amber-500" : "text-orange-500"}`}>
                Spesifikasi Operasional
              </div>
              <div className="divide-y divide-zinc-800/60">
                {d.specs.map((s, i) => (
                  <div key={i} className="px-6 py-4 flex items-center justify-between group hover:bg-zinc-800/20 transition-colors">
                    <span className="text-zinc-500 text-xs">{s.label}</span>
                    <span className={`text-sm font-black ${active === 0 ? "text-amber-400" : "text-orange-400"}`}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/kontak">
              <button className={`w-full mt-4 group flex items-center justify-center gap-3 font-bold text-sm py-4 transition-all duration-300 ${active === 0 ? "bg-amber-500 hover:bg-amber-400 text-zinc-950" : "bg-orange-600 hover:bg-orange-500 text-white"}`}>
                Diskusikan Kebutuhan Anda <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FACILITIES ───────────────────────────────────────────────────────────────
const Facilities = () => {
  const sites = [
    { name: "Plant Karawang I", type: "Manufaktur", location: "Karawang, Jawa Barat", size: "45.000 m²", est: "2002", status: "Beroperasi" },
    { name: "Plant Karawang II", type: "Manufaktur", location: "Karawang, Jawa Barat", size: "40.000 m²", est: "2018", status: "Beroperasi" },
    { name: "Plant Cikarang", type: "Manufaktur", location: "Bekasi, Jawa Barat", size: "22.000 m²", est: "2010", status: "Beroperasi" },
    { name: "Tambang Kutai", type: "Pertambangan", location: "Kutai Kertanegara, Kaltim", size: "4.200 Ha", est: "2003", status: "Beroperasi" },
    { name: "Tambang Berau", type: "Pertambangan", location: "Berau, Kaltim", size: "3.800 Ha", est: "2008", status: "Beroperasi" },
    { name: "Tambang Morowali", type: "Pertambangan", location: "Morowali, Sulawesi Tengah", size: "5.600 Ha", est: "2014", status: "Beroperasi" },
    { name: "Plant Gresik", type: "Manufaktur", location: "Gresik, Jawa Timur", size: "18.000 m²", est: "2020", status: "Beroperasi" },
    { name: "Site Maluku Utara", type: "Pertambangan", location: "Halmahera, Maluku Utara", size: "1.800 Ha", est: "2022", status: "Ekspansi" },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-zinc-900/20 border-t border-zinc-800/60 overflow-hidden">
      <NoiseTexture />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="Jaringan Fasilitas" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-14">12 Lokasi Operasi<br /><span className="text-zinc-500 font-light">Di Seluruh Indonesia</span></h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left text-zinc-600 text-xs font-bold tracking-widest uppercase pb-4">Nama Fasilitas</th>
                <th className="text-left text-zinc-600 text-xs font-bold tracking-widest uppercase pb-4">Tipe</th>
                <th className="text-left text-zinc-600 text-xs font-bold tracking-widest uppercase pb-4">Lokasi</th>
                <th className="text-left text-zinc-600 text-xs font-bold tracking-widest uppercase pb-4">Luas</th>
                <th className="text-left text-zinc-600 text-xs font-bold tracking-widest uppercase pb-4">Berdiri</th>
                <th className="text-left text-zinc-600 text-xs font-bold tracking-widest uppercase pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {sites.map((s, i) => (
                <tr key={i} className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="py-4 pr-4 text-white font-bold text-sm">{s.name}</td>
                  <td className="py-4 pr-4">
                    <span className={`text-[10px] font-bold px-2 py-1 border ${s.type === "Manufaktur" ? "text-amber-400 border-amber-900/60 bg-amber-950/30" : "text-orange-400 border-orange-900/60 bg-orange-950/30"}`}>{s.type}</span>
                  </td>
                  <td className="py-4 pr-4 text-zinc-400 text-sm">{s.location}</td>
                  <td className="py-4 pr-4 text-zinc-400 text-sm">{s.size}</td>
                  <td className="py-4 pr-4 text-zinc-500 text-sm">{s.est}</td>
                  <td className="py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 border ${s.status === "Beroperasi" ? "text-emerald-400 border-emerald-900/60 bg-emerald-950/30" : "text-blue-400 border-blue-900/60 bg-blue-950/30"}`}>{s.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// ─── OPERATIONS PAGE ──────────────────────────────────────────────────────────
export default function OperationsPage() {
  return (
    <>
      <PageHero
        label="Operasi"
        title="Dua Divisi, Satu"
        titleAccent="Misi Industri"
        subtitle="Manufaktur presisi dan pertambangan berkelanjutan bekerja dalam satu ekosistem terintegrasi — dari penambangan bahan baku hingga komponen akhir yang siap pakai."
        breadcrumb="Operasi"
      />
      <DivisionDetail />
      <Facilities />
    </>
  );
}
