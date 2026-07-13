import Image from "next/image";
import Link from "next/link";
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
    heroEyebrow: "Independent game & app studio",
    heroTitleA: "Small studio.",
    heroTitleB: "Serious craft.",
    heroText:
      "Lumisoft Studios builds mobile games and apps with care. Fast, polished, and respectful of your time and privacy.",
    ctaGames: "Explore our games",
    ctaApps: "See our apps",
    gamesEyebrow: "Games",
    gamesTitle: "Built to be played, not just downloaded",
    gamesText:
      "Arcade action, calm puzzles, and worlds in the making. Every game ships when it feels right.",
    appsEyebrow: "Apps",
    appsTitle: "Tools for real life",
    appsText: "Calm, focused apps designed around everyday moments.",
    appFeatured: "Featured app",
    valuesEyebrow: "The studio",
    valuesTitle: "How we work",
    values: [
      {
        title: "Craft first",
        text: "We ship small and polish hard. Every screen, sound, and animation earns its place.",
      },
      {
        title: "Privacy by default",
        text: "We collect as little as possible. Your data belongs to you, not to us.",
      },
      {
        title: "Performance matters",
        text: "Smooth on modest phones, not just flagships. Battery and bandwidth are respected.",
      },
    ],
    aboutLink: "More about the studio",
    contactTitle: "Say hello",
    contactText:
      "Questions, ideas, or partnership proposals? We read every message.",
    aboutHref: "/about",
  },
  tr: {
    heroEyebrow: "Bağımsız oyun ve uygulama stüdyosu",
    heroTitleA: "Küçük stüdyo.",
    heroTitleB: "Ciddi işçilik.",
    heroText:
      "Lumisoft Studios mobil oyunları ve uygulamaları özenle geliştirir. Hızlı, cilalı ve zamanınıza olduğu kadar gizliliğinize de saygılı.",
    ctaGames: "Oyunları keşfet",
    ctaApps: "Uygulamalara bak",
    gamesEyebrow: "Oyunlar",
    gamesTitle: "Sadece indirilmek için değil, oynanmak için",
    gamesText:
      "Arcade aksiyon, sakin bulmacalar ve yapım aşamasındaki dünyalar. Her oyun hazır hissettirdiğinde yayınlanır.",
    appsEyebrow: "Uygulamalar",
    appsTitle: "Gerçek hayat için araçlar",
    appsText: "Günlük anlar etrafında tasarlanmış sakin ve odaklı uygulamalar.",
    appFeatured: "Öne çıkan uygulama",
    valuesEyebrow: "Stüdyo",
    valuesTitle: "Nasıl çalışıyoruz",
    values: [
      {
        title: "Önce işçilik",
        text: "Küçük yayınlar yapar, çok cilalarız. Her ekran, ses ve animasyon yerini hak eder.",
      },
      {
        title: "Varsayılan olarak gizlilik",
        text: "Mümkün olduğunca az veri toplarız. Verileriniz bize değil, size aittir.",
      },
      {
        title: "Performans önemlidir",
        text: "Sadece amiral gemilerinde değil, mütevazı telefonlarda da akıcı. Pil ve veri kullanımına saygılıyız.",
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
      <main className="flex-1 pt-16">
        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <div className="bg-grid absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 85% 65% at 50% 0%, rgba(109,40,217,0.3), rgba(79,70,229,0.1) 50%, transparent 78%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            aria-hidden="true"
            style={{
              background: "linear-gradient(to bottom, transparent, #080b1a)",
            }}
          />
          <HeroGlow />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="hero-enter hero-enter-1 mb-10 flex justify-center">
              <div className="animate-float relative">
                <div
                  className="absolute inset-0 scale-125 rounded-full blur-3xl"
                  aria-hidden="true"
                  style={{ background: "rgba(139,92,246,0.28)" }}
                />
                <Image
                  src="/images/brand/lumisoft-logo-mark.png"
                  alt="Lumisoft Studios"
                  width={248}
                  height={288}
                  className="relative h-44 w-auto object-contain drop-shadow-[0_0_36px_rgba(129,140,248,0.45)] sm:h-52"
                  priority
                />
              </div>
            </div>

            <p className="hero-enter hero-enter-2 eyebrow mb-5 text-violet-400">
              {t.heroEyebrow}
            </p>

            <h1 className="hero-enter hero-enter-3 mb-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              <span className="text-white">{t.heroTitleA}</span>{" "}
              <span className="text-gradient whitespace-nowrap">
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

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
