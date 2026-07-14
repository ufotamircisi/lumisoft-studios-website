import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import StoreBadges from "@/components/StoreBadges";
import Reveal from "@/components/Reveal";
import HeroGlow from "@/components/HeroGlow";
import { games, apps } from "@/lib/products";

type HomePageProps = {
  lang?: "en" | "tr";
};

const copy = {
  en: {
    heroEyebrow: "Independent mobile software studio",
    heroTitleA: "Games people enjoy.",
    heroTitleB: "Apps people rely on.",
    heroText:
      "Lumisoft Studios develops focused mobile products for iOS and Android—from arcade games to practical tools for families.",
    ctaGames: "Explore our games",
    ctaApps: "See our apps",
    gamesEyebrow: "Games",
    gamesTitle: "Distinct games with clear mechanics",
    gamesText:
      "Arcade challenges and puzzle systems designed to be easy to understand and rewarding to revisit.",
    appsEyebrow: "Apps",
    appsTitle: "Practical support for daily life",
    appsText: "Focused tools for real routines, designed to stay clear when the moment is busy.",
    appFeatured: "Featured app",
    valuesEyebrow: "The studio",
    valuesTitle: "How we work",
    values: [
      {
        title: "Clear product thinking",
        text: "Each product starts with a specific need, a defined audience, and an experience that stays focused.",
      },
      {
        title: "Responsible by design",
        text: "Privacy, accessibility, and honest communication are product requirements, not footnotes.",
      },
      {
        title: "Reliable delivery",
        text: "We engineer for stable performance across modern iOS and Android devices and support what we ship.",
      },
    ],
    aboutLink: "More about the studio",
    contactTitle: "Say hello",
    contactText:
      "Questions, ideas, or partnership proposals? We read every message.",
    aboutHref: "/about",
  },
  tr: {
    heroEyebrow: "Bağımsız mobil yazılım stüdyosu",
    heroTitleA: "Keyifle oynanan oyunlar.",
    heroTitleB: "Güvenilen uygulamalar.",
    heroText:
      "Lumisoft Studios, arcade oyunlarından ailelere yönelik pratik araçlara kadar iOS ve Android için odaklı mobil ürünler geliştirir.",
    ctaGames: "Oyunları keşfet",
    ctaApps: "Uygulamalara bak",
    gamesEyebrow: "Oyunlar",
    gamesTitle: "Net mekaniklere sahip özgün oyunlar",
    gamesText:
      "Kolay anlaşılan ve yeniden oynamaya değer arcade mücadeleleri ile bulmaca sistemleri.",
    appsEyebrow: "Uygulamalar",
    appsTitle: "Günlük yaşam için pratik destek",
    appsText: "Gerçek rutinlere odaklanan, yoğun anlarda bile anlaşılır kalan araçlar.",
    appFeatured: "Öne çıkan uygulama",
    valuesEyebrow: "Stüdyo",
    valuesTitle: "Nasıl çalışıyoruz",
    values: [
      {
        title: "Net ürün yaklaşımı",
        text: "Her ürün belirli bir ihtiyaç, tanımlı bir kullanıcı ve odağını koruyan bir deneyimle başlar.",
      },
      {
        title: "Sorumlu tasarım",
        text: "Gizlilik, erişilebilirlik ve açık iletişim bizim için dipnot değil, ürün gereksinimidir.",
      },
      {
        title: "Güvenilir teslimat",
        text: "Modern iOS ve Android cihazlarda kararlı performans hedefler, yayınladığımız ürünleri destekleriz.",
      },
    ],
    aboutLink: "Stüdyo hakkında daha fazlası",
    contactTitle: "Merhaba deyin",
    contactText:
      "Sorular, fikirler veya iş birliği önerileri? Her mesajı okuyoruz.",
    aboutHref: "/tr/about",
  },
};

export default function HomePage({ lang = "en" }: HomePageProps) {
  const t = copy[lang];
  const lumibaby = apps[0];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16">
        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <div className="bg-grid absolute inset-0" aria-hidden="true" />
          {/* layered lighting */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 85% 65% at 50% 0%, rgba(109,40,217,0.3), rgba(79,70,229,0.1) 50%, transparent 78%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 40% 45% at 18% 25%, rgba(99,102,241,0.14), transparent 70%), radial-gradient(ellipse 40% 45% at 82% 30%, rgba(168,85,247,0.1), transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            aria-hidden="true"
            style={{
              background: "linear-gradient(to bottom, transparent, #080b1a)",
            }}
          />
          {/* soft floating particles */}
          <div className="particles" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
          <HeroGlow />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="hero-enter hero-enter-1 mb-10 flex justify-center">
              <div className="animate-float relative">
                <div
                  className="absolute inset-0 scale-150 rounded-full blur-3xl"
                  aria-hidden="true"
                  style={{ background: "rgba(139,92,246,0.22)" }}
                />
                <BrandLogo
                  size={200}
                  priority
                  alt="Lumisoft Studios"
                  className="relative drop-shadow-[0_0_40px_rgba(129,140,248,0.4)] sm:scale-110"
                />
              </div>
            </div>

            <p className="hero-enter hero-enter-2 eyebrow mb-5 text-violet-400">
              {t.heroEyebrow}
            </p>

            <h1 className="hero-enter hero-enter-3 mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-7xl sm:leading-[1.05]">
              <span className="block text-white">{t.heroTitleA}</span>
              <span className="text-gradient mt-2 block sm:mt-1">
                {t.heroTitleB}
              </span>
            </h1>

            <p className="hero-enter hero-enter-4 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              {t.heroText}
            </p>

            <div className="hero-enter hero-enter-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#games" className="btn-primary w-full sm:w-auto">
                {t.ctaGames}
              </a>
              <a href="#apps" className="btn-secondary w-full sm:w-auto">
                {t.ctaApps}
              </a>
            </div>
          </div>
        </section>

        {/* ── Games ───────────────────────────────────────────── */}
        <section
          id="games"
          aria-labelledby="games-heading"
          className="scroll-mt-20 px-4 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mb-10 max-w-2xl">
                <p className="eyebrow mb-3 text-cyan-400">{t.gamesEyebrow}</p>
                <h2
                  id="games-heading"
                  className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  {t.gamesTitle}
                </h2>
                <p className="leading-relaxed text-slate-400">{t.gamesText}</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {games.map((game, i) => (
                <Reveal key={game.slug} delay={(i % 2) * 90}>
                  <ProductCard product={game} lang={lang} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Apps ────────────────────────────────────────────── */}
        <section
          id="apps"
          aria-labelledby="apps-heading"
          className="scroll-mt-20 border-t border-white/[0.06] px-4 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mb-10 max-w-2xl">
                <p className="eyebrow mb-3 text-violet-400">{t.appsEyebrow}</p>
                <h2
                  id="apps-heading"
                  className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  {t.appsTitle}
                </h2>
                <p className="leading-relaxed text-slate-400">{t.appsText}</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="card-glass overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 90% at 15% 10%, rgba(109,40,217,0.18), transparent 70%)",
                  }}
                />
                <div className="relative flex flex-col gap-8 p-7 sm:p-10 md:flex-row md:items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src={lumibaby.iconImage!}
                      alt="LumiBaby"
                      width={112}
                      height={112}
                      className="h-24 w-24 rounded-[24px] shadow-[0_8px_40px_rgba(109,40,217,0.45)] sm:h-28 sm:w-28"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="eyebrow mb-2 text-violet-400">
                      {t.appFeatured}
                    </p>
                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                      {lumibaby.name}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-violet-300">
                      {lumibaby.tagline[lang]}
                    </p>
                    <p className="mb-6 max-w-xl leading-relaxed text-slate-300">
                      {lumibaby.description[lang]}
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <StoreBadges lang={lang} align="start" />
                      <Link
                        href={lumibaby.href![lang]}
                        className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
                      >
                        {lang === "tr" ? "Detayları gör →" : "See details →"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Studio values ───────────────────────────────────── */}
        <section
          aria-labelledby="values-heading"
          className="border-t border-white/[0.06] px-4 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mb-10 max-w-2xl">
                <p className="eyebrow mb-3 text-indigo-400">
                  {t.valuesEyebrow}
                </p>
                <h2
                  id="values-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  {t.valuesTitle}
                </h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {t.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="card-glass h-full p-6 sm:p-7">
                    <h3 className="mb-2.5 text-base font-bold text-white">
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {v.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <div className="mt-8">
                <Link
                  href={t.aboutHref}
                  className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300"
                >
                  {t.aboutLink} →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Contact ─────────────────────────────────────────── */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="relative overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:py-28"
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 70% 90% at 50% 100%, rgba(109,40,217,0.16), transparent 70%)",
            }}
          />
          <Reveal>
            <div className="relative mx-auto max-w-xl text-center">
              <h2
                id="contact-heading"
                className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {t.contactTitle}
              </h2>
              <p className="mb-8 leading-relaxed text-slate-300">
                {t.contactText}
              </p>
              <a
                href="mailto:support@lumisoftstudios.com"
                className="btn-primary"
              >
                support@lumisoftstudios.com
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
