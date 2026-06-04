import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { NoiseTexture, SectionLabel, PageHero } from "../shared";

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
const ContactForm = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const subjects = ["Kemitraan Bisnis", "Permintaan Penawaran", "Informasi Produk/Layanan", "Investor Relations", "Media & Pers", "Karir", "Lainnya"];

  if (submitted) return (
    <div className="border border-emerald-900/60 bg-emerald-950/20 p-10 text-center">
      <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
      <h3 className="text-white font-black text-xl mb-2">Pesan Terkirim!</h3>
      <p className="text-zinc-400 text-sm">Tim kami akan menghubungi Anda dalam 1×24 jam hari kerja. Terima kasih telah menghubungi Nusantara Industrial Group.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { key: "name", label: "Nama Lengkap", placeholder: "Nama Anda", required: true },
          { key: "company", label: "Perusahaan", placeholder: "Nama perusahaan (opsional)", required: false },
        ].map(f => (
          <div key={f.key}>
            <label className="block text-zinc-500 text-xs font-bold tracking-wider uppercase mb-2">{f.label} {f.required && <span className="text-amber-500">*</span>}</label>
            <input type="text" placeholder={f.placeholder} required={f.required} value={form[f.key]}
              onChange={e => setForm({ ...form, [f.key]: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/60 text-white placeholder-zinc-600 text-sm px-4 py-3 outline-none transition-colors" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-zinc-500 text-xs font-bold tracking-wider uppercase mb-2">Email <span className="text-amber-500">*</span></label>
          <input type="email" placeholder="email@perusahaan.com" required value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/60 text-white placeholder-zinc-600 text-sm px-4 py-3 outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-zinc-500 text-xs font-bold tracking-wider uppercase mb-2">Nomor Telepon</label>
          <input type="tel" placeholder="+62 8xx-xxxx-xxxx" value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/60 text-white placeholder-zinc-600 text-sm px-4 py-3 outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-zinc-500 text-xs font-bold tracking-wider uppercase mb-2">Subjek <span className="text-amber-500">*</span></label>
        <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/60 text-white text-sm px-4 py-3 outline-none transition-colors appearance-none">
          <option value="" className="bg-zinc-900 text-zinc-500">Pilih subjek...</option>
          {subjects.map(s => <option key={s} value={s} className="bg-zinc-900">{s}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-zinc-500 text-xs font-bold tracking-wider uppercase mb-2">Pesan <span className="text-amber-500">*</span></label>
        <textarea placeholder="Ceritakan kebutuhan atau pertanyaan Anda secara detail..." required rows={5} value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/60 text-white placeholder-zinc-600 text-sm px-4 py-3 outline-none transition-colors resize-none" />
      </div>
      <button type="submit" disabled={loading}
        className="w-full group flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 disabled:bg-amber-700 text-zinc-950 font-bold text-sm py-4 transition-all duration-300">
        {loading ? (
          <><div className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />Mengirim...</>
        ) : (
          <><Send className="w-4 h-4" />Kirim Pesan<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
        )}
      </button>
    </form>
  );
};

// ─── OFFICES ─────────────────────────────────────────────────────────────────
const Offices = () => {
  const offices = [
    { type: "Kantor Pusat", name: "Jakarta Head Office", address: "Jl. Xxxxxx", phone: "+62 Xxxxxx", email: "info@nusantaragroup.com", hours: "Senin–Jumat, 08.00–17.00 WIB" },
    { type: "Kantor Regional", name: "Surabaya Regional Office", address: "Jl. Xxxxxx", phone: "+62 Xxxxxx", email: "info@nusantaragroup.com", hours: "Senin–Jumat, 08.00–17.00 WIB" },
    { type: "Plant Manufaktur", name: "Plant Xxxxxx", address: "Kawasan Industri Xxxxxx", phone: "+62 Xxxxxx", email: "info@nusantaragroup.com", hours: "24 jam operasional" },
  ];
  return (
    <div className="space-y-4">
      {offices.map((o, i) => (
        <div key={i} className="border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 p-6 transition-all duration-300 group">
          <div className="text-amber-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-3">{o.type}</div>
          <h4 className="text-white font-black text-base mb-4">{o.name}</h4>
          <div className="space-y-2.5">
            {[
              { icon: MapPin, val: o.address },
              { icon: Phone, val: o.phone },
              { icon: Mail, val: o.email },
              { icon: Clock, val: o.hours },
            ].map((item, j) => (
              <div key={j} className="flex items-start gap-3">
                <item.icon className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-xs">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Kontak"
        title="Kami Siap"
        titleAccent="Mendengar Anda"
        subtitle="Apakah Anda seorang calon mitra bisnis, investor, atau calon karyawan — kami terbuka untuk setiap percakapan yang bermakna."
        breadcrumb="Kontak"
      />
      <section className="relative py-20 lg:py-28 bg-zinc-950 overflow-hidden">
        <NoiseTexture />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionLabel label="Kirim Pesan" />
              <h2 className="text-2xl font-black text-white mb-8">Hubungi Tim Kami</h2>
              <ContactForm />
            </div>
            {/* Offices */}
            <div className="lg:col-span-2">
              <SectionLabel label="Lokasi Kantor" />
              <h2 className="text-2xl font-black text-white mb-8">Temukan Kami</h2>
              <Offices />
            </div>
          </div>

          {/* Quick Contact Channels */}
          <div className="mt-20 border-t border-zinc-800/60 pt-14">
            <div className="text-center mb-10">
              <div className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-3">Saluran Langsung</div>
              <h3 className="text-white font-black text-2xl">Butuh Respons Cepat?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-800/40">
              {[
                { icon: Phone, channel: "WhatsApp Business", contact: "Xxxxxx", desc: "Respons cepat dalam 2 jam kerja", color: "emerald" },
                { icon: Mail, channel: "Email Korporat", contact: "corp@nusantara-ig.co.id", desc: "Untuk inquiry bisnis & kemitraan", color: "amber" },
                { icon: MapPin, channel: "Kunjungan Langsung", contact: "Jakarta Head Office", desc: "Buka Senin–Jumat, 08.00–17.00", color: "blue" },
              ].map((c, i) => {
                const colMap = { emerald: "text-emerald-400 border-emerald-900 bg-emerald-950/40", amber: "text-amber-400 border-amber-900 bg-amber-950/40", blue: "text-blue-400 border-blue-900 bg-blue-950/40" };
                return (
                  <div key={i} className="bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-800/40 p-8 text-center group transition-all">
                    <div className={`w-12 h-12 flex items-center justify-center border mx-auto mb-5 ${colMap[c.color]}`}>
                      <c.icon className={`w-5 h-5 ${colMap[c.color].split(" ")[0]}`} />
                    </div>
                    <div className="text-zinc-500 text-xs mb-2">{c.channel}</div>
                    <div className={`font-black text-sm mb-2 ${colMap[c.color].split(" ")[0]}`}>{c.contact}</div>
                    <div className="text-zinc-600 text-xs">{c.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
