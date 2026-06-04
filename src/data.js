// ─── COMPANY DATA ────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "NUSANTARA",
  tagline: "INDUSTRIAL GROUP",
  established: "1998",
  taglineShort: "Membangun Fondasi Industri Bangsa",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Tentang Kami", path: "/tentang" },
  { label: "Operasi", path: "/operasi" },
  { label: "Keberlanjutan", path: "/keberlanjutan" },
  { label: "Karir", path: "/karir" },
  { label: "Kontak", path: "/kontak" },
];

export const STATS = [
  { number: 25, suffix: "+", label: "Tahun Pengalaman", desc: "Beroperasi sejak 1998 dengan rekam jejak terbukti." },
  { number: 50, suffix: "M+", label: "Ton Produksi", desc: "Kapasitas produksi kumulatif material dan produk." },
  { number: 12, suffix: "+", label: "Lokasi Operasi", desc: "Tersebar di seluruh kepulauan Indonesia." },
  { number: 8500, suffix: "+", label: "Karyawan Aktif", desc: "SDM profesional dan berpengalaman." },
];

export const CERTIFICATIONS = [
  { code: "ISO 9001:2015", desc: "Sistem Manajemen Mutu" },
  { code: "ISO 14001:2015", desc: "Sistem Manajemen Lingkungan" },
  { code: "ISO 45001:2018", desc: "Kesehatan & Keselamatan Kerja" },
  { code: "OHSAS 18001", desc: "Occupational Health & Safety" },
];

export const LEADERSHIP = [
  { name: "Ir. XXXX, M.Sc.", title: "Presiden Direktur & CEO", since: "2005", desc: "25+ tahun pengalaman di sektor industri berat dan pertambangan nasional. Alumnus ITB dan University of Melbourne." },
  { name: "Dr. XXXX", title: "Direktur Operasional", since: "2010", desc: "Spesialis optimasi proses manufaktur dengan keahlian lean manufacturing dan Six Sigma Black Belt." },
  { name: "XXXX, MBA", title: "Direktur Keuangan & Strategi", since: "2012", desc: "Mantan konsultan McKinsey dengan keahlian M&A, corporate finance, dan transformasi digital industri." },
  { name: "Dr. XXXXX", title: "Direktur ESG & Keberlanjutan", since: "2018", desc: "Pelopor program dekarbonisasi industri berat Indonesia, peraih penghargaan KLHK 2022." },
];

export const TIMELINE = [
  { year: "1998", title: "Pendirian Perusahaan", desc: "NIG didirikan di Surabaya dengan modal awal dan 120 karyawan, fokus pada manufaktur komponen mesin." },
  { year: "2003", title: "Ekspansi Pertambangan", desc: "Memperoleh konsesi tambang nikel pertama di Sulawesi Tenggara seluas 3.200 hektare." },
  { year: "2008", title: "Sertifikasi ISO Pertama", desc: "Meraih ISO 9001 dan mulai mengekspor produk manufaktur ke pasar ASEAN." },
  { year: "2012", title: "IPO & Go Public", desc: "Terdaftar di Bursa Efek Indonesia (BEI) dengan kode saham NIGI, menghimpun dana Rp 2,4 triliun." },
  { year: "2016", title: "Fasilitas Smelter", desc: "Pembangunan smelter nikel berkapasitas 500.000 ton/tahun di Morowali, Sulawesi Tengah." },
  { year: "2020", title: "Transformasi Digital", desc: "Implementasi penuh Industry 4.0: IoT, AI predictive maintenance, dan digital twin di semua pabrik." },
  { year: "2024", title: "Target Net-Zero 2045", desc: "Deklarasi komitmen net-zero dengan investasi Rp 8 triliun untuk transisi energi terbarukan." },
];

export const OPERATIONS = [
  {
    id: "manufaktur",
    title: "Manufaktur Presisi",
    subtitle: "Precision Manufacturing Division",
    icon: "factory",
    description: "Fasilitas manufaktur kelas dunia dengan teknologi CNC terkini, menghasilkan komponen presisi tinggi untuk sektor energi, infrastruktur, dan industri berat nasional.",
    longDesc: "Divisi Manufaktur NIG mengoperasikan 6 pabrik produksi yang tersebar di Jawa, Kalimantan, dan Sulawesi. Dengan investasi berkelanjutan pada teknologi terkini, kami mampu menghasilkan komponen mesin presisi, struktur baja, dan produk rekayasa yang memenuhi standar internasional paling ketat.",
    features: ["Kapasitas produksi 500.000 unit/tahun", "Toleransi presisi hingga ±0.001mm", "Lini produksi otomasi Industri 4.0", "Quality Control bersertifikat ISO 9001", "Fasilitas heat treatment & surface finishing", "R&D Lab dengan 80+ insinyur"],
    stats: [{ v: "6", l: "Pabrik Aktif" }, { v: "500K", l: "Unit/Tahun" }, { v: "±0.001mm", l: "Presisi" }],
    color: "amber",
  },
  {
    id: "pertambangan",
    title: "Pertambangan Berkelanjutan",
    subtitle: "Sustainable Mining Division",
    icon: "mountain",
    description: "Operasi tambang terpadu dengan standar lingkungan tertinggi, mengelola sumber daya mineral secara bertanggung jawab untuk generasi mendatang.",
    longDesc: "Divisi Pertambangan NIG mengelola konsesi tambang nikel, bauksit, dan batubara di 8 lokasi strategis. Setiap operasi dirancang dengan prinsip zero-harm terhadap lingkungan dan komunitas lokal, didukung teknologi tambang modern dan program reklamasi komprehensif.",
    features: ["Konsesi tambang 15.000+ hektare", "Recovery rate mineral >92%", "Program reklamasi & revegetasi aktif", "Zero discharge ke badan air alami", "Keterlibatan komunitas lokal 100%", "Fleet alat berat 200+ unit"],
    stats: [{ v: "15K+", l: "Hektare Konsesi" }, { v: "92%+", l: "Recovery Rate" }, { v: "8", l: "Lokasi Tambang" }],
    color: "orange",
  },
  {
    id: "logistik",
    title: "Logistik & Infrastruktur",
    subtitle: "Logistics & Infrastructure Division",
    icon: "truck",
    description: "Jaringan logistik terintegrasi dari mulut tambang hingga pelabuhan ekspor, memastikan rantai pasok yang efisien dan andal.",
    longDesc: "Divisi Logistik NIG mengoperasikan pelabuhan khusus, jaringan conveyor belt sepanjang 45 km, armada truk besar, dan fasilitas penyimpanan terpadu. Integrasi vertikal ini memungkinkan kontrol penuh atas rantai nilai dan efisiensi biaya yang kompetitif.",
    features: ["2 pelabuhan khusus bongkar-muat", "Jaringan conveyor 45 km", "Armada 300+ kendaraan", "Kapasitas storage 2 juta ton", "Sistem tracking realtime", "ISO 28000 Supply Chain Security"],
    stats: [{ v: "2", l: "Pelabuhan Khusus" }, { v: "45km", l: "Conveyor Belt" }, { v: "2M Ton", l: "Kapasitas Storage" }],
    color: "blue",
  },
  {
    id: "energi",
    title: "Energi & Utilitas",
    subtitle: "Energy & Utilities Division",
    icon: "zap",
    description: "Pembangkit listrik mandiri berbasis energi terbarukan untuk mendukung seluruh operasi industri secara berkelanjutan.",
    longDesc: "NIG berinvestasi besar dalam kemandirian energi melalui pembangkit PLTU, PLTMH, dan panel surya di seluruh kawasan industri. Target 40% energi terbarukan pada 2028 sejalan dengan komitmen net-zero perusahaan.",
    features: ["Kapasitas pembangkit 240 MW", "PLTMH di 3 lokasi", "Panel surya 50 MW terpasang", "Target 40% energi hijau 2028", "Zero energy waste program", "Smart grid monitoring 24/7"],
    stats: [{ v: "240MW", l: "Kapasitas Total" }, { v: "50MW", l: "Solar Terpasang" }, { v: "40%", l: "Target EBT 2028" }],
    color: "green",
  },
];

export const ESG_PILLARS = [
  { icon: "leaf", color: "emerald", title: "Lingkungan", metric: "-40%", metricLabel: "emisi sejak 2019", items: ["Program reforestasi 1 juta pohon", "Zero liquid discharge di semua pabrik", "Pengelolaan limbah B3 bersertifikat", "Water recycling rate 78%"] },
  { icon: "shield", color: "amber", title: "Keselamatan Kerja", metric: "8 Thn", metricLabel: "zero fatality", items: ["LTI Rate 0.12 (di bawah standar industri)", "Pelatihan K3 wajib 40 jam/tahun", "Safety patrol harian di semua site", "Sistem pelaporan insiden digital"] },
  { icon: "users", color: "blue", title: "Komunitas & Sosial", metric: "50+", metricLabel: "desa binaan", items: ["Beasiswa pendidikan 500 pelajar/tahun", "Pelatihan vokasi 2.000 warga lokal", "UMKM binaan NIG: 300+ mitra", "Klinik gratis di 12 lokasi operasi"] },
  { icon: "award", color: "violet", title: "Tata Kelola", metric: "A+", metricLabel: "rating GCG", items: ["Rating GCG OJK: A+", "Laporan terintegrasi (GRI Standards)", "Whistleblowing system aktif", "Dewan Komisaris independen 60%"] },
];

export const JOBS = [
  { id: 1, title: "Senior Geologist", dept: "Pertambangan", loc: "Morowali, Sulawesi Tengah", type: "Full Time", level: "Senior", deadline: "30 Jun 2025" },
  { id: 2, title: "Process Engineer - Smelter", dept: "Manufaktur", loc: "Cilegon, Banten", type: "Full Time", level: "Mid-level", deadline: "15 Jul 2025" },
  { id: 3, title: "HSE Supervisor", dept: "K3 & Lingkungan", loc: "Balikpapan, Kaltim", type: "Full Time", level: "Supervisor", deadline: "20 Jul 2025" },
  { id: 4, title: "IT Business Analyst", dept: "Digital & IT", loc: "Jakarta Selatan", type: "Full Time", level: "Mid-level", deadline: "31 Jul 2025" },
  { id: 5, title: "Mechanical Maintenance Technician", dept: "Manufaktur", loc: "Gresik, Jawa Timur", type: "Full Time", level: "Junior", deadline: "10 Aug 2025" },
  { id: 6, title: "Financial Controller", dept: "Keuangan", loc: "Jakarta Pusat", type: "Full Time", level: "Senior", deadline: "25 Jul 2025" },
  { id: 7, title: "Environmental Specialist", dept: "K3 & Lingkungan", loc: "Kendari, Sulawesi", type: "Contract", level: "Mid-level", deadline: "5 Aug 2025" },
  { id: 8, title: "Supply Chain Analyst", dept: "Logistik", loc: "Surabaya, Jawa Timur", type: "Full Time", level: "Junior", deadline: "15 Aug 2025" },
];
