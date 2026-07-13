import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";

type JellyChainRushPageProps = {
  lang?: "en" | "tr";
};

const copy = {
  en: {
    eyebrow: "Candy puzzle adventure",
    title: "Jelly Chain Rush",
    subtitle: "A colorful candy puzzle adventure",
    status: "In development",
    description:
      "Jelly Chain Rush is a cheerful mobile puzzle game where players connect matching candies, trigger satisfying chain reactions, unlock new levels, and rebuild a sweet candy island step by step.",
    support: "Support",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    featuresTitle: "Sweet, snappy puzzle play",
    features: [
      "Match colorful candies",
      "Trigger chain reactions",
      "Unlock levels",
      "Build your Candy Island",
      "Use SHAKE wisely",
      "Play in short, fun sessions",
    ],
    gameplayTitle: "Gameplay",
    gameplay:
      "Connect matching candies on a 7x7 board, create combos, collect rewards, and progress through a candy road full of levels.",
    islandTitle: "Candy Island",
    island:
      "As you progress, you restore and upgrade a sweet island filled with candy buildings.",
    statusTitle: "Release status",
    statusText:
      "Jelly Chain Rush is currently in development. Store links will be added when the game is ready.",
    legalTitle: "Legal & Support",
    homeHref: "/",
    productHref: "/jelly-chain-rush",
    privacyHref: "/jelly-chain-rush/privacy",
    termsHref: "/jelly-chain-rush/terms",
    contactHref: "/contact",
  },
  tr: {
    eyebrow: "Şeker bulmaca macerası",
    title: "Jelly Chain Rush",
    subtitle: "Renkli bir şeker bulmaca macerası",
    status: "Geliştirme aşamasında",
    description:
      "Jelly Chain Rush, oyuncuların aynı şekerleri eşleştirip zincirleme patlamalar yaptığı, yeni bölümler açtığı ve tatlı bir şeker adasını adım adım yenilediği eğlenceli bir mobil bulmaca oyunudur.",
    support: "Destek",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    featuresTitle: "Tatlı ve hızlı bulmaca akışı",
    features: [
      "Renkli şekerleri eşleştir",
      "Zincirleme patlamalar oluştur",
      "Yeni bölümler aç",
      "Şeker Adanı geliştir",
      "ÇALKALA hakkını akıllıca kullan",
      "Kısa ve eğlenceli oturumlarda oyna",
    ],
    gameplayTitle: "Oynanış",
    gameplay:
      "7x7 tahtada aynı şekerleri eşleştir, kombolar oluştur, ödüller topla ve bölümlerle dolu şeker yolunda ilerle.",
    islandTitle: "Şeker Adası",
    island:
      "İlerledikçe şeker yapılarıyla dolu tatlı bir adayı yeniler ve geliştirirsin.",
    statusTitle: "Yayın durumu",
    statusText:
      "Jelly Chain Rush şu anda geliştirme aşamasında. Oyun hazır olduğunda mağaza bağlantıları eklenecek.",
    legalTitle: "Yasal Bilgiler ve Destek",
    homeHref: "/tr",
    productHref: "/tr/jelly-chain-rush",
    privacyHref: "/tr/jelly-chain-rush/gizlilik",
    termsHref: "/tr/jelly-chain-rush/kullanim-kosullari",
    contactHref: "/tr/contact",
  },
};

const candies = [
  "bg-pink-300",
  "bg-amber-200",
  "bg-sky-300",
  "bg-emerald-300",
  "bg-fuchsia-300",
  "bg-orange-300",
  "bg-lime-300",
  "bg-rose-300",
  "bg-cyan-300",
];

export default function JellyChainRushPage({
  lang = "en",
}: JellyChainRushPageProps) {
  const t = copy[lang];

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative overflow-hidden px-4 py-24 sm:py-32">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(244,114,182,0.22), rgba(251,191,36,0.12) 42%, transparent 78%)",
            }}
          />
          <div
            className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #080b1a)",
            }}
          />

          <div className="relative max-w-5xl mx-auto grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
            <div className="text-center lg:text-left">
              <p className="text-pink-200 text-sm font-bold uppercase tracking-widest mb-4">
                {t.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
                {t.title}
              </h1>
              <p className="text-amber-200 text-lg font-semibold mb-5">
                {t.subtitle}
              </p>
              <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-7">
                {t.description}
              </p>
              <div className="mb-8">
                <span className="inline-flex items-center rounded-full border border-pink-200/35 bg-pink-300/10 px-4 py-2 text-sm font-semibold text-pink-100">
                  {t.status}
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link
                  href={t.contactHref}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-pink-200/40 text-pink-100 hover:text-white hover:border-pink-200/70 text-sm font-semibold transition-colors"
                >
                  {t.support}
                </Link>
                <Link
                  href={t.privacyHref}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
                >
                  {t.privacy}
                </Link>
                <Link
                  href={t.termsHref}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
                >
                  {t.terms}
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 rounded-[36px] blur-3xl scale-105 bg-pink-300/20" />
              <div className="relative rounded-[32px] border border-white/12 bg-[#10172f]/90 p-5 shadow-[0_22px_70px_rgba(244,114,182,0.18)]">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-pink-200">
                      Jelly Chain
                    </p>
                    <p className="text-sm text-slate-300">7x7</p>
                  </div>
                  <span className="rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-xs font-bold text-amber-100">
                    SHAKE
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 49 }).map((_, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-xl border border-white/20 shadow-inner ${
                        candies[index % candies.length]
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-emerald-200/20 bg-emerald-300/10 px-4 py-3">
                  <p className="text-sm font-semibold text-emerald-100">
                    Candy Island
                  </p>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    <div className="h-10 rounded-xl bg-pink-300/70" />
                    <div className="h-10 rounded-xl bg-amber-200/70" />
                    <div className="h-10 rounded-xl bg-sky-300/70" />
                    <div className="h-10 rounded-xl bg-emerald-300/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              {t.featuresTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.features.map((feature, index) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-pink-200/15 bg-[#10172f]/80 p-5 shadow-[0_0_24px_rgba(244,114,182,0.06)]"
                >
                  <div
                    className={`h-10 w-10 rounded-xl border border-white/20 ${
                      candies[index % candies.length]
                    } mb-4`}
                  />
                  <h3 className="text-base font-bold text-white">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 border-t border-pink-200/10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-200/20 bg-[#11182f]/90 p-7 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {t.gameplayTitle}
              </h2>
              <p className="text-slate-200 leading-relaxed">{t.gameplay}</p>
            </article>
            <article className="rounded-2xl border border-emerald-200/20 bg-[#11182f]/90 p-7 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {t.islandTitle}
              </h2>
              <p className="text-slate-200 leading-relaxed">{t.island}</p>
            </article>
          </div>
        </section>

        <section className="py-14 px-4 border-t border-pink-200/10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-pink-200/25 bg-pink-300/[0.07] p-7 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.statusTitle}
            </h2>
            <p className="text-slate-200 leading-relaxed">{t.statusText}</p>
          </div>
        </section>

        <section className="py-10 px-4 border-t border-violet-500/10">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-slate-400 mb-5 text-sm font-medium uppercase tracking-wider">
              {t.legalTitle}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                href={t.contactHref}
                className="text-sm font-medium text-pink-200 hover:text-pink-100 transition-colors"
              >
                {t.support}
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link
                href={t.privacyHref}
                className="text-sm font-medium text-pink-200 hover:text-pink-100 transition-colors"
              >
                {t.privacy}
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link
                href={t.termsHref}
                className="text-sm font-medium text-pink-200 hover:text-pink-100 transition-colors"
              >
                {t.terms}
              </Link>
            </div>
          </div>
        </section>
        <RelatedProducts currentSlug="jelly-chain-rush" lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
