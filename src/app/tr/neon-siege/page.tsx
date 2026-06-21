import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.erolozcitak.neonsiege";
const APP_STORE_URL =
  "https://apps.apple.com/tr/app/neon-siege-brick-breaker/id6774618872";

export const metadata: Metadata = {
  title: "Neon Siege - Neon arcade brick breaker",
  description:
    "Şekiller, yetenekler, güçlendiriciler, bombalar, çarpanlar, yükseltmeler ve yoğun seviyeler içeren hızlı tempolu neon brick breaker.",
};

const features = [
  "Neon Blok Şekilleri",
  "Yetenekler ve Güçlendiriciler",
  "Bombalar ve Çarpanlar",
  "Seviye İlerlemesi",
  "Çevrimdışı Arcade Oynanış",
  "Performans Modu",
];

const notes = [
  "Neon Siege bir oyundur, kumar uygulaması değildir.",
  "Oyun içi elmaslar yalnızca oynanışta kullanılan sanal öğelerdir.",
  "Ödüllü reklamlar isteğe bağlıdır.",
  "Zorunlu Reklamları Kaldır satın alımı seviyeler arasındaki zorunlu reklamları kaldırır; ödüllü reklamlar isteğe bağlı kalır.",
  "Satın alımlar Google Play / App Store üzerinden yönetilir.",
];

export default function NeonSiegeTRPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative overflow-hidden px-4 py-24 sm:py-32">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 48% 0%, rgba(34,211,238,0.24), rgba(244,63,94,0.12) 42%, transparent 78%)",
            }}
          />
          <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #080b1a)" }} />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-7">
              <div className="relative">
                <div className="absolute inset-0 rounded-[28px] blur-2xl scale-125 bg-cyan-400/25" />
                <div className="relative h-28 w-28 rounded-[28px] border border-cyan-300/35 bg-[#071324] shadow-[0_0_44px_rgba(34,211,238,0.38)] flex items-center justify-center">
                  <span className="text-5xl select-none">⚡</span>
                </div>
              </div>
            </div>

            <p className="text-cyan-300 text-sm font-bold uppercase tracking-widest mb-4">
              Neon arcade brick breaker
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-3">
              Neon Siege
            </h1>
            <p className="text-fuchsia-300 text-lg font-semibold mb-5">
              Hızlı tempolu neon brick breaker
            </p>
            <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Neon Siege; parlak blok şekilleri, geometrik dalgalar, güçlü
              yetenekler, güçlendiriciler, bombalar, çarpanlar, yükseltmeler ve
              yoğun seviye ilerlemesi üzerine kurulu hızlı bir neon brick
              breaker oyunudur.
              <br />
              <br />
              Atışını nişanla, neon formasyonları kır, güçleri aç, ödülleri
              topla ve kuşatmadan sağ çık.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href={GOOGLE_PLAY_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-cyan-300/35 bg-cyan-400/10 text-cyan-100 text-sm font-semibold transition-colors hover:border-cyan-200/70 hover:bg-cyan-400/15"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </a>
              <a
                href={APP_STORE_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 bg-white/[0.03] text-slate-200 text-sm font-semibold transition-colors hover:border-white/30 hover:bg-white/[0.07]"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/tr/neon-siege/destek" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-cyan-300/40 text-cyan-200 hover:text-white hover:border-cyan-300/70 text-sm font-semibold transition-colors">
                Destek
              </Link>
              <Link href="/tr/neon-siege/gizlilik" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/tr/neon-siege/kullanim-kosullari" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-cyan-400/15 bg-[#091629]/80 p-5 shadow-[0_0_24px_rgba(34,211,238,0.06)]">
                <div className="h-10 w-10 rounded-xl bg-fuchsia-500/15 border border-fuchsia-300/20 flex items-center justify-center text-cyan-200 mb-4">
                  ✦
                </div>
                <h2 className="text-base font-bold text-white">{feature}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 px-4 border-t border-cyan-400/10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-cyan-400/20 bg-[#0b1228]/90 p-7 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-5">
              Oyun ve satın alma notları
            </h2>
            <ul className="space-y-3">
              {notes.map((note) => (
                <li key={note} className="flex gap-3 text-slate-200 leading-relaxed">
                  <span className="text-cyan-300 mt-0.5">›</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer lang="tr" />
    </>
  );
}
