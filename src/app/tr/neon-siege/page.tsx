import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.erolozcitak.neonsiege";
const APP_STORE_URL =
  "https://apps.apple.com/tr/app/neon-siege-brick-breaker/id6774618872";

export const metadata: Metadata = {
  title: "Neon Siege - Neon arcade brick breaker",
  description:
    "Şekiller, yetenekler, güçlendiriciler, bombalar, çarpanlar, yükseltmeler ve yoğun seviyeler içeren hızlı tempolu neon brick breaker.",
  alternates: {
    canonical: "/tr/neon-siege",
    languages: { "tr-TR": "/tr/neon-siege", "en-US": "/neon-siege" },
  },
  openGraph: {
    title: "Neon Siege | Neon arcade brick breaker",
    description: "Yetenekler, güçlendiriciler, bombalar, çarpanlar ve bölüm ilerlemesiyle hızlı neon brick-breaker aksiyonu.",
    url: "/tr/neon-siege",
    locale: "tr_TR",
    images: [{ url: "/images/neon-siege-app-icon.png", width: 1024, height: 1024, alt: "Neon Siege" }],
  },
};

const features = [
  {
    title: "Neon Blok Şekilleri",
    text: "Parlayan formasyonlar geometrik dalgalar halinde gelir ve her seviyeyi taze tutar.",
  },
  {
    title: "Yetenekler ve Güçlendiriciler",
    text: "Her turun gidişatını değiştiren güçler ve yükseltmeler aç.",
  },
  {
    title: "Bombalar ve Çarpanlar",
    text: "Patlayıcı temizlikleri zincirle ve skorunun katlanmasını izle.",
  },
  {
    title: "Seviye İlerlemesi",
    text: "Kuşatmanın derinlerine indikçe zorluk artan yoğun seviyeler.",
  },
  {
    title: "Kısa Arcade Oturumları",
    text: "Basit nişan al ve fırlat kontrolleri, odaklı bir oyuna hızlıca başlamayı kolaylaştırır.",
  },
  {
    title: "Performans Modu",
    text: "Android performans seçeneği, yoğun oynanış sahnelerinde görsel yükü azaltır.",
  },
];

const faqs = [
  {
    q: "Neon Siege ücretsiz mi?",
    a: "Evet. Neon Siege ücretsiz indirilir ve oynanır. Ödüllü reklamlar her zaman isteğe bağlıdır; Zorunlu Reklamları Kaldır satın alımı seviyeler arasındaki zorunlu reklamları kaldırır.",
  },
  {
    q: "Performans Modu ne yapar?",
    a: "Performans Modu, yoğun sahnelerde daha akıcı oynanışı desteklemek için Android cihazlardaki görsel yükü azaltır.",
  },
  {
    q: "Satın alımlar nasıl çalışır?",
    a: "Tüm satın alımlar Google Play veya App Store üzerinden, mağazanın kendi koşulları ve iade kuralları kapsamında yönetilir.",
  },
];

export default function NeonSiegeTRPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16">
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
                <Image
                  src="/images/web/neon-siege-icon.webp"
                  alt="Neon Siege"
                  width={112}
                  height={112}
                  className="relative h-28 w-28 rounded-[28px] border border-cyan-300/35 object-cover shadow-[0_0_44px_rgba(34,211,238,0.38)]"
                  priority
                />
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

        <section className="px-4 pb-20 pt-4">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow mb-2 text-cyan-400">Oynanış</p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Hızlı eller için tasarlandı
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#091629]/80 p-6 transition-colors duration-300 hover:border-cyan-300/40"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(34,211,238,0.45), transparent)",
                    }}
                  />
                  <h3 className="mb-2 text-base font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-cyan-400/10 px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-2 text-cyan-400">SSS</p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Sık sorulan sorular
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="card-glass group p-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      className="text-cyan-400 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <RelatedProducts currentSlug="neon-siege" lang="tr" />
      </main>
      <Footer lang="tr" />
    </>
  );
}
