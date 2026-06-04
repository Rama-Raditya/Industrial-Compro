import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OperationsPage from "./pages/OperationsPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import CareerPage from "./pages/CareerPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div
        className="bg-zinc-950 min-h-screen"
        style={{ fontFamily: "'Barlow', 'DM Sans', sans-serif" }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
          * { box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          ::selection { background: rgba(251,191,36,0.25); color: white; }
          ::-webkit-scrollbar { width: 4px; }
          ::-webkit-scrollbar-track { background: #09090b; }
          ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 2px; }
          ::-webkit-scrollbar-thumb:hover { background: #f59e0b; }
        `}</style>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/operasi" element={<OperationsPage />} />
            <Route path="/keberlanjutan" element={<SustainabilityPage />} />
            <Route path="/karir" element={<CareerPage />} />
            <Route path="/berita" element={<NewsPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            {/* 404 fallback */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
                <div>
                  <div className="text-amber-500 font-black text-8xl mb-4">404</div>
                  <div className="text-white font-black text-2xl mb-3">Halaman Tidak Ditemukan</div>
                  <div className="text-zinc-500 text-sm mb-8">Halaman yang Anda cari tidak tersedia atau telah dipindahkan.</div>
                  <a href="/" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm px-8 py-3 transition-all">
                    Kembali ke Beranda
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
