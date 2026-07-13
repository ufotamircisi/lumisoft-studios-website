import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";

type RotoBlocksPageProps = {
  lang?: "en" | "tr";
};

const copy = {
  en: {
    eyebrow: "Puzzle Game",
    subtitle: "A calm rotating block puzzle from Lumisoft Studio",
    description:
      "Roto Blocks is a relaxing puzzle game built around a simple twist. Place three block pieces, clear full rows and columns, then watch the board rotate clockwise. Every rotation can open a new path, create a combo, or save a difficult board.",
    status: "Coming Soon",
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
      {
        title: "Remove Ads Option",
        text: "A one time Remove Ads option is planned to remove banner and forced full screen ads.",
        icon: "✓",
      },
    ],
    boardLabel: "Board rotation preview",
    moveLabel: "Three moves",
    rotateLabel: "Rotate",
    releaseTitle: "Thoughtful puzzle play is on the way",
    releaseText:
      "Roto Blocks is being prepared for release. Official store links will appear here when they are available.",
    legalTitle: "Legal and Support",
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
    status: "Yakında",
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
      {
        title: "Reklamları Kaldır Seçeneği",
        text: "Tek seferlik Reklamları Kaldır seçeneği ile banner ve zorunlu tam ekran reklamların kaldırılması planlanmaktadır.",
        icon: "✓",
      },
    ],
    boardLabel: "Tahta dönüşü ön izlemesi",
    moveLabel: "Üç hamle",
    rotateLabel: "Dönüş",
    releaseTitle: "Özenli bir bulmaca deneyimi yakında",
    releaseText:
      "Roto Blocks yayın için hazırlanıyor. Resmi mağaza bağlantıları hazır olduğunda burada yer alacak.",
    legalTitle: "Yasal Bilgiler ve Destek",
    productHref: "/tr/roto-blocks",
    privacyHref: "/tr/roto-blocks/gizlilik",
    termsHref: "/tr/roto-blocks/kullanim-kosullari",
    supportHref: "/tr/roto-blocks/destek",
  },
};

const blocks = [
  "bg-cyan-300", "bg-cyan-300", "bg-transparent", "bg-violet-400", "bg-violet-400", "bg-transparent", "bg-amber-300", "bg-amber-300",
  "bg-transparent", "bg-cyan-300", "bg-transparent", "bg-violet-400", "bg-transparent", "bg-transparent", "bg-amber-300", "bg-transparent",
  "bg-rose-400", "bg-cyan-300", "bg-cyan-300", "bg-transparent", "bg-emerald-300", "bg-emerald-300", "bg-amber-300", "bg-transparent",
  "bg-rose-400", "bg-transparent", "bg-indigo-400", "bg-indigo-400", "bg-emerald-300", "bg-transparent", "bg-transparent", "bg-fuchsia-400",
  "bg-rose-400", "bg-transparent", "bg-indigo-400", "bg-transparent", "bg-emerald-300", "bg-emerald-300", "bg-fuchsia-400", "bg-fuchsia-400",
  "bg-transparent", "bg-sky-300", "bg-indigo-400", "bg-transparent", "bg-transparent", "bg-lime-300", "bg-lime-300", "bg-fuchsia-400",
  "bg-orange-300", "bg-sky-300", "bg-sky-300", "bg-sky-300", "bg-transparent", "bg-lime-300", "bg-transparent", "bg-transparent",
  "bg-orange-300", "bg-orange-300", "bg-transparent", "bg-transparent", "bg-pink-400", "bg-pink-400", "bg-pink-400", "bg-transparent",
];

export default function RotoBlocksPage({ lang = "en" }: RotoBlocksPageProps) {
  const t = copy[lang];

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
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
              <span className="inline-flex items-center rounded-full border border-cyan-200/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 mb-8">
                {t.status}
              </span>
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

            <div className="relative mx-auto w-full max-w-sm" aria-label={t.boardLabel}>
              <div className="absolute inset-5 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="relative rounded-[32px] border border-cyan-200/20 bg-[#0b1228]/95 p-5 shadow-[0_24px_70px_rgba(8,145,178,0.18)] sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">Roto Blocks</p>
                    <p className="mt-1 text-sm text-slate-400">8 × 8</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-indigo-300/25 bg-indigo-400/10 px-3 py-1.5">
                    <span className="text-xs font-semibold text-indigo-100">{t.moveLabel}</span>
                    <span className="text-lg leading-none text-cyan-200" aria-hidden="true">↻</span>
                  </div>
                </div>
                <div className="grid grid-cols-8 gap-1.5 rounded-2xl border border-white/8 bg-[#070c1b] p-3 sm:gap-2">
                  {blocks.map((color, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-[7px] border ${color === "bg-transparent" ? "border-white/[0.05]" : `border-white/20 ${color} shadow-[inset_0_2px_4px_rgba(255,255,255,0.38)]`}`}
                    />
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-center gap-3 text-sm font-semibold text-slate-300">
                  <span>1</span><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /><span>2</span><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /><span>3</span><span className="text-cyan-200">↻ {t.rotateLabel}</span>
                </div>
              </div>
            </div>
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
