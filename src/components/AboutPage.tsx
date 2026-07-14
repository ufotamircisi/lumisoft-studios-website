import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type AboutPageProps = {
  lang?: "en" | "tr";
};

const copy = {
  en: {
    eyebrow: "About Lumisoft Studios",
    title: "Independent and product-focused",
    intro:
      "Lumisoft Studios develops mobile games and apps for iOS and Android, covering product design, engineering, release, and ongoing support.",
    storyTitle: "The story",
    story:
      "Our catalog began with LumiBaby, a practical sleep-support app for parents and caregivers. It now includes released arcade games and puzzle projects in active development.",
    missionTitle: "Mission",
    mission:
      "Create mobile products with a clear purpose, understandable interactions, and reliable day-to-day performance.",
    visionTitle: "Vision",
    vision:
      "Build a focused catalog of games and apps that can be explained clearly, supported responsibly, and improved over time.",
    pillarsTitle: "What we hold ourselves to",
    pillars: [
      {
        title: "Technology",
        text: "Choose technology to fit the product, keep dependencies deliberate, and treat iOS and Android behavior as first-class concerns.",
      },
      {
        title: "Quality",
        text: "Review interaction, copy, accessibility, performance, and platform behavior as part of every release.",
      },
      {
        title: "Honesty",
        text: "Describe products as they work today, separate released features from development plans, and keep pricing and ads understandable.",
      },
      {
        title: "Privacy",
        text: "Document data practices product by product and explain permissions, advertising, and store services in plain language.",
      },
    ],
    ctaTitle: "Want to know more?",
    ctaText: "We welcome product questions, publishing conversations, and partnership inquiries.",
    ctaButton: "Contact the studio",
    supportHref: "/support",
    supportLabel: "Visit support",
  },
  tr: {
    eyebrow: "Lumisoft Studios Hakkında",
    title: "Bağımsız ve ürün odaklı",
    intro:
      "Lumisoft Studios; ürün tasarımı, mühendislik, yayın ve sürekli desteği kapsayarak iOS ve Android için mobil oyunlar ve uygulamalar geliştirir.",
    storyTitle: "Hikaye",
    story:
      "Ürün kataloğumuz, ebeveynler ve bakım verenler için pratik bir uyku destek uygulaması olan LumiBaby ile başladı. Bugün yayındaki arcade oyunlarını ve aktif olarak geliştirilen bulmaca projelerini de içeriyor.",
    missionTitle: "Misyon",
    mission:
      "Net bir amacı, anlaşılır etkileşimleri ve günlük kullanımda güvenilir performansı olan mobil ürünler geliştirmek.",
    visionTitle: "Vizyon",
    vision:
      "Açıkça anlatılabilen, sorumlu biçimde desteklenen ve zaman içinde geliştirilen odaklı bir oyun ve uygulama kataloğu oluşturmak.",
    pillarsTitle: "Kendimizi bağlı tuttuğumuz standartlar",
    pillars: [
      {
        title: "Teknoloji",
        text: "Teknolojiyi ürüne göre seçer, bağımlılıkları bilinçli tutar ve iOS ile Android davranışlarını temel ürün gereksinimi olarak ele alırız.",
      },
      {
        title: "Kalite",
        text: "Her yayında etkileşim, metin, erişilebilirlik, performans ve platform davranışını birlikte değerlendiririz.",
      },
      {
        title: "Dürüstlük",
        text: "Ürünleri bugünkü işleyişleriyle anlatır, yayındaki özellikleri geliştirme planlarından ayırır; fiyatlandırma ve reklamları anlaşılır tutarız.",
      },
      {
        title: "Gizlilik",
        text: "Veri uygulamalarını ürün bazında belgeler; izinleri, reklamları ve mağaza hizmetlerini sade bir dille açıklarız.",
      },
    ],
    ctaTitle: "Daha fazlasını merak mı ediyorsunuz?",
    ctaText:
      "Ürün sorularına, yayıncılık görüşmelerine ve iş birliği taleplerine açığız.",
    ctaButton: "Stüdyoyla iletişime geç",
    supportHref: "/tr/support",
    supportLabel: "Destek sayfası",
  },
};

export default function AboutPage({ lang = "en" }: AboutPageProps) {
  const t = copy[lang];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:py-28">
          <div className="bg-grid absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,40,217,0.26), transparent 75%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="hero-enter hero-enter-1 mb-8 flex justify-center">
              <BrandLogo
                size={130}
                priority
                alt="Lumisoft Studios"
                className="drop-shadow-[0_0_28px_rgba(129,140,248,0.4)]"
              />
            </div>
            <p className="hero-enter hero-enter-2 eyebrow mb-4 text-violet-400">
              {t.eyebrow}
            </p>
            <h1 className="hero-enter hero-enter-3 mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="hero-enter hero-enter-4 mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
              {t.intro}
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="px-4 pb-8">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="card-glass p-7 sm:p-9">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
                  {t.storyTitle}
                </h2>
                <p className="leading-relaxed text-slate-300">{t.story}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 py-8">
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="card-glass h-full p-7">
                <h2 className="mb-3 text-lg font-bold text-white">
                  {t.missionTitle}
                </h2>
                <p className="text-sm leading-relaxed text-slate-300">
                  {t.mission}
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="card-glass h-full p-7">
                <h2 className="mb-3 text-lg font-bold text-white">
                  {t.visionTitle}
                </h2>
                <p className="text-sm leading-relaxed text-slate-300">
                  {t.vision}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Standards */}
        <section className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t.pillarsTitle}
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {t.pillars.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 90}>
                  <div className="card-glass h-full p-7">
                    <h3 className="mb-2.5 text-base font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/[0.06] px-4 py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t.ctaTitle}
              </h2>
              <p className="mb-8 leading-relaxed text-slate-300">{t.ctaText}</p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:support@lumisoftstudios.com"
                  className="btn-primary w-full sm:w-auto"
                >
                  {t.ctaButton}
                </a>
                <Link href={t.supportHref} className="btn-secondary w-full sm:w-auto">
                  {t.supportLabel}
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
