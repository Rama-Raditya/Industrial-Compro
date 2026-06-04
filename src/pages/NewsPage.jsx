import { useState } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { NoiseTexture, SectionLabel, PageHero } from "../shared";

const allNews = [
  { id: 1, cat: "Korporat", date: "12 Nov 2024", title: "Nusantara Industrial Raih Penghargaan Best ESG Practice 2024", excerpt: "Komitmen kami terhadap lingkungan dan tata kelola perusahaan kembali mendapatkan pengakuan internasional dari lembaga rating ESG terkemuka MSCI.", read: "4 mnt", featured: true },
  { id: 2, cat: "Operasi", date: "5 Nov 2024", title: "Ekspansi Fasilitas Manufaktur di Kawasan Industri Karawang", excerpt: "Investasi Rp 2,4 triliun untuk perluasan kapasitas produksi Plant Karawang II guna memenuhi permintaan komponen industri yang terus meningkat.", read: "3 mnt", featured: true },
  { id: 3, cat: "Keberlanjutan", date: "28 Okt 2024", title: "Program Reklamasi Tambang Berhasil Pulihkan 800 Hektare Lahan", excerpt: "Upaya rehabilitasi lingkungan pasca tambang kami menjadi model terbaik dan benchmark untuk industri pertambangan nasional.", read: "5 mnt", featured: false },
  { id: 4, cat: "Teknologi", date: "20 Okt 2024", title: "Implementasi AI Quality Control Kurangi Defect Rate hingga 73%", excerpt: "Sistem machine vision berbasis AI yang diimplementasikan di lini produksi Plant Karawang I berhasil menurunkan defect rate secara drastis.", read: "6 mnt", featured: false },
  { id: 5, cat: "SDM", date: "14 Okt 2024", title: "Nusantara Industrial Masuk Top 10 Best Place to Work 2024", excerpt: "Survei nasional Great Place to Work kembali menempatkan kami di jajaran perusahaan dengan budaya kerja terbaik di Indonesia.", read: "3 mnt", featured: false },
  { id: 6, cat: "Korporat", date: "7 Okt 2024", title: "Pendapatan Q3 2024 Tumbuh 18% YoY, Lampaui Target", excerpt: "Pertumbuhan kinerja keuangan kuartal ketiga didorong oleh peningkatan volume produksi dan kontrak baru senilai Rp 890 miliar.", read: "4 mnt", featured: false },
  { id: 7, cat: "Keberlanjutan", date: "1 Okt 2024", title: "Peluncuran Program Beasiswa Teknik untuk 200 Mahasiswa", excerpt: "Sebagai bagian dari komitmen CSR, kami meluncurkan program beasiswa penuh bagi mahasiswa teknik berprestasi dari keluarga kurang mampu.", read: "3 mnt", featured: false },
  { id: 8, cat: "Operasi", date: "24 Sep 2024", title: "Joint Venture dengan Mitra Vietnam Resmi Beroperasi", excerpt: "Fasilitas manufaktur bersama di Hanoi mulai berproduksi, menandai langkah nyata ekspansi regional Nusantara Industrial ke Asia Tenggara.", read: "5 mnt", featured: false },
];

const catColors = {
  Korporat: "text-amber-400 border-amber-900/60 bg-amber-950/30",
  Operasi: "text-orange-400 border-orange-900/60 bg-orange-950/30",
  Keberlanjutan: "text-emerald-400 border-emerald-900/60 bg-emerald-950/30",
  Teknologi: "text-blue-400 border-blue-900/60 bg-blue-950/30",
  SDM: "text-purple-400 border-purple-900/60 bg-purple-950/30",
};

export default function NewsPage() {
  const [filter, setFilter] = useState("Semua");
  const cats = ["Semua", "Korporat", "Operasi", "Keberlanjutan", "Teknologi", "SDM"];
  const filtered = filter === "Semua" ? allNews : allNews.filter(n => n.cat === filter);
  const featured = filtered.filter(n => n.featured).slice(0, 2);
  const rest = filtered.filter(n => !n.featured);

  return (
    <>
      <PageHero label="Berita & Insight" title="Kisah di Balik" titleAccent="Industri Kami" subtitle="Ikuti perjalanan Nusantara Industrial — dari terobosan teknologi, pencapaian keberlanjutan, hingga kontribusi kami bagi komunitas dan bangsa." breadcrumb="Berita" />
      <section className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
        <NoiseTexture />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex gap-2 flex-wrap mb-12">
            {cats.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 text-xs font-bold tracking-wide border transition-all duration-200 ${filter === c ? "bg-amber-500 border-amber-500 text-zinc-950" : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Featured */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800/40 mb-px">
              {featured.map((n, i) => (
                <div key={n.id} className="group bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-800/40 hover:border-zinc-700/60 p-8 transition-all duration-400 cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 border ${catColors[n.cat] || "text-zinc-400 border-zinc-800"}`}>{n.cat}</span>
                    <span className="text-zinc-700 text-xs font-bold tracking-widest uppercase">Unggulan</span>
                  </div>
                  <h3 className="text-white font-black text-lg leading-snug mb-3 group-hover:text-amber-100 transition-colors">{n.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-6">{n.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-600 text-xs">{n.date}</span>
                      <span className="flex items-center gap-1 text-zinc-700 text-xs"><Clock className="w-3 h-3" />{n.read} baca</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-600 group-hover:text-amber-500 text-xs font-bold transition-colors">
                      Baca <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/30">
            {rest.map((n) => (
              <div key={n.id} className="group bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-800/40 hover:border-zinc-700/60 p-6 transition-all duration-400 cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 border ${catColors[n.cat] || "text-zinc-400 border-zinc-800"}`}>{n.cat}</span>
                </div>
                <h4 className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-amber-100 transition-colors">{n.title}</h4>
                <p className="text-zinc-600 text-xs leading-relaxed mb-5">{n.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60">
                  <span className="text-zinc-700 text-xs">{n.date}</span>
                  <div className="flex items-center gap-1 text-zinc-700 group-hover:text-amber-500 text-xs font-bold transition-colors">
                    Baca <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
