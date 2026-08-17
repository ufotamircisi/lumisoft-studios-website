import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import { STORE_URLS } from "@/lib/products";
import ProductArtwork from "@/components/ProductArtwork";

type RotoBlocksPageProps = {
  lang?: "en" | "tr";
};

const copy = {
  en: {
    eyebrow: "Puzzle Game",
    subtitle: "A calm rotating block puzzle from Lumisoft Studio",
    description:
      "Roto Blocks is a relaxing puzzle game built around a simple twist. Place three block pieces, clear full rows and columns, then watch the board rotate clockwise. Every rotation can open a new path, create a combo, or save a difficult board.",
    status: "Live",
    downloadTitle: "Get Roto Blocks",
    downloadButton: "Download Roto Blocks",
    appStoreButton: "Download on the App Store",
    googlePlayButton: "Get it on Google Play",
    support: "Support",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    featuresTitle: "A familiar puzzle with a fresh turn",
    features: [
      {
        title: "Rotating Board",
        text: "After every three placed pieces, the entire board rotates clockwise and creates fresh puzzle opportunities.",
        icon: "↻",
      },
      {
        title: "Classic Puzzle Flow",
        text: "Play an endless score focused mode with clean rules and satisfying clears.",
        icon: "▦",
      },
      {
        title: "Adventure Goals",
        text: "Complete handcrafted levels by clearing goal icons through rows and columns.",
        icon: "◎",
      },
      {
        title: "Calm Visuals",
        text: "Enjoy glossy blocks, smooth motion, soft effects and a relaxed atmosphere.",
        icon: "✦",
      },
      {
        title: "Ad Supported",
        text: "Roto Blocks is designed as a free ad supported game.",
        icon: "◇",
      },
    ],
    releaseTitle: "Roto Blocks is out now",
    releaseText:
      "Roto Blocks is live. Place three pieces, clear lines, and adapt as the board rotates every 3 moves. Download it free on the App Store or Google Play.",
    legalTitle: "Legal and Support",
    downloadHref: "/rotoblocks/download",
    productHref: "/roto-blocks",
    privacyHref: "/roto-blocks/privacy",
    termsHref: "/roto-blocks/terms",
    supportHref: "/roto-blocks/support",
  },
  tr: {
    eyebrow: "Bulmaca Oyunu",
    subtitle:
      "Lumisoft Studio tarafından geliştirilen sakin ve dönen tahta mekanikli blok bulmaca",
    description:
      "Roto Blocks basit ama farklı bir fikir üzerine kurulu rahatlatıcı bir bulmaca oyunudur. Üç blok parçasını yerleştir, dolu satır ve sütunları temizle, ardından tahtanın saat yönünde dönmesini izle. Her dönüş yeni bir yol, yeni bir kombo veya sıkışan tahtayı kurtaracak yeni bir fırsat oluşturabilir.",
    status: "Yayında",
    downloadTitle: "Roto Blocks'u indir",
    downloadButton: "Roto Blocks indir",
    appStoreButton: "App Store'dan indir",
    googlePlayButton: "Google Play'den indir",
    support: "Destek",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    featuresTitle: "Tanıdık bulmacaya yeni bir dönüş",
    features: [
      {
        title: "Dönen Tahta",
        text: "Yerleştirilen her üç parçadan sonra tüm tahta saat yönünde döner ve yeni bulmaca fırsatları oluşturur.",
        icon: "↻",
      },
      {
        title: "Klasik Bulmaca Akışı",
        text: "Temiz kurallara ve tatmin edici temizleme anlarına sahip sonsuz skor modunda oyna.",
        icon: "▦",
      },
      {
        title: "Macera Hedefleri",
        text: "Satır ve sütun temizleyerek görev ikonlarını topla ve hazırlanmış bölümleri tamamla.",
        icon: "◎",
      },
      {
        title: "Sakin Görseller",
        text: "Parlak bloklar, yumuşak hareketler, sade efektler ve rahat bir atmosfer yaşa.",
        icon: "✦",
      },
      {
        title: "Reklam Destekli",
        text: "Roto Blocks ücretsiz ve reklam destekli bir oyun olarak tasarlanmıştır.",
        icon: "◇",
      },
    ],
    releaseTitle: "Roto Blocks yayında",
    releaseText:
      "Roto Blocks yayında. Üç parçayı yerleştir, satırları temizle ve her 3 hamlede dönen tahtaya uyum sağla. App Store ve Google Play üzerinden ücretsiz indirebilirsin.",
    legalTitle: "Yasal Bilgiler ve Destek",
    downloadHref: "/rotoblocks/download",
    productHref: "/tr/roto-blocks",
    privacyHref: "/tr/roto-blocks/gizlilik",
    termsHref: "/tr/roto-blocks/kullanim-kosullari",
    supportHref: "/tr/roto-blocks/destek",
  },
};

export default function RotoBlocksPage({ lang = "en" }: RotoBlocksPageProps) {
  const t = copy[lang];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16">
        <section className="relative overflow-hidden px-4 py-20 sm:py-28">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(34,211,238,0.2),rgba(99,102,241,0.14)_45%,transparent_80%)]" />
          <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-b from-transparent to-[#080b1a]" />

          <div className="relative max-w-5xl mx-auto grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Image
                  src="/images/web/roto-blocks-icon.webp"
                  alt="Roto Blocks"
                  width={96}
                  height={96}
                  priority
                  className="rounded-[24px] shadow-[0_16px_45px_rgba(34,211,238,0.28)]"
                />
              </div>
              <p className="text-cyan-200 text-sm font-bold uppercase tracking-widest mb-4">
                {t.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
                Roto Blocks
              </h1>
              <p className="text-indigo-200 text-lg font-semibold mb-5">
                {t.subtitle}
              </p>
              <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-7">
                {t.description}
              </p>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-cyan-300"
                    aria-hidden="true"
                  />
                  {t.status}
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start mb-6">
                <Link
                  href={t.downloadHref}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-200/60 bg-cyan-400/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-200 hover:bg-cyan-400/25"
                >
                  {t.downloadButton}
                </Link>
                <a
                  href={STORE_URLS.rotoBlocks.appStore}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/30 hover:bg-white/[0.07]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.appStoreButton}
                </a>
                <a
                  href={STORE_URLS.rotoBlocks.googlePlay}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-indigo-200/35 bg-indigo-400/10 px-6 py-3 text-sm font-semibold text-indigo-100 transition-colors hover:border-indigo-200/70 hover:bg-indigo-400/15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.googlePlayButton}
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link href={t.supportHref} className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-200/40 px-6 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-200/70 hover:text-white">
                  {t.support}
                </Link>
                <Link href={t.privacyHref} className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white">
                  {t.privacy}
                </Link>
                <Link href={t.termsHref} className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white">
                  {t.terms}
                </Link>
              </div>
            </div>

            <ProductArtwork
              src="/images/web/roto-blocks-icon.webp"
              name="Roto Blocks"
              alt={lang === "tr" ? "Roto Blocks resmi uygulama ikonu" : "Roto Blocks official app icon"}
              label={lang === "tr" ? "Resmi ürün görseli" : "Official product artwork"}
              accent="rgba(34, 211, 238, 0.26)"
              priority
            />
          </div>
        </section>

        <section className="px-4 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">{t.featuresTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.features.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-cyan-200/15 bg-[#0d1430]/80 p-6 shadow-[0_18px_50px_rgba(2,132,199,0.05)] transition-colors hover:border-cyan-200/30">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/10 text-xl font-bold text-cyan-100" aria-hidden="true">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-cyan-200/10 px-4 py-14">
          <div className="max-w-3xl mx-auto rounded-2xl border border-indigo-300/20 bg-indigo-400/[0.07] p-7 text-center sm:p-9">
            <h2 className="text-2xl font-bold text-white mb-4">{t.releaseTitle}</h2>
            <p className="text-slate-200 leading-relaxed">{t.releaseText}</p>
            <Link
              href={t.downloadHref}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/60 bg-cyan-400/15 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-200 hover:bg-cyan-400/25"
            >
              {t.downloadTitle}
            </Link>
          </div>
        </section>

        <section className="border-t border-cyan-200/10 px-4 py-10">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-slate-400 mb-5 text-sm font-medium uppercase tracking-wider">{t.legalTitle}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                [t.supportHref, t.support],
                [t.privacyHref, t.privacy],
                [t.termsHref, t.terms],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:border-cyan-200/30 hover:text-cyan-100">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <RelatedProducts currentSlug="roto-blocks" lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
