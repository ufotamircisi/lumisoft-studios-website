import Link from "next/link";
import Image from "next/image";
import { allProducts } from "@/lib/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type AboutPageProps = {
  lang?: "en" | "tr";
};

const copy = {
  en: {
    eyebrow: "About Lumisoft Studio",
    title: "Independent and product-focused",
    intro:
      "We make Neon Siege, Jelly Chain Rush, Roto Blocks, and LumiBaby. An independent studio working on both sides of your home screen: games and everyday apps.",
    storyTitle: "The story",
    story:
      "Our catalog began with LumiBaby, a sleep support app for parents and caregivers. Neon Siege, Jelly Chain Rush, and Roto Blocks joined it. All four are now available for iOS and Android.",
    missionTitle: "The work",
    mission:
      "A brick breaker, a candy island, a rotating board, a bedtime routine. Each product starts with something you can do on your phone.",
    visionTitle: "After release",
    vision:
      "Release is part of the job. We also handle product updates, store listings, and the questions that reach our support inbox.",
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
    eyebrow: "Lumisoft Studio Hakkında",
    title: "Bağımsız ve ürün odaklı",
    intro:
      "Neon Siege, Jelly Chain Rush, Roto Blocks ve LumiBaby’yi biz geliştiriyoruz. Telefonunuzdaki oyunların da günlük uygulamaların da arkasında bağımsız bir stüdyo var.",
    storyTitle: "Hikaye",
    story:
      "LumiBaby ile başladık: ebeveynler ve bakım verenler için bir uyku destek uygulaması. Ardından Neon Siege, Jelly Chain Rush ve Roto Blocks geldi. Dört ürünümüz de iOS ve Android’de yayında.",
    missionTitle: "Ne yapıyoruz?",
    mission:
      "Blok kırmak, şeker adası kurmak, tahtayı döndürmek, uyku rutini oluşturmak. Her ürün telefonda yapabileceğiniz somut bir şeyle başlıyor.",
    visionTitle: "Yayından sonra",
    vision:
      "Yayın işin bir parçası. Ürün güncellemeleri, mağaza sayfaları ve destek adresimize gelen sorularla da biz ilgileniyoruz.",
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
      <main id="main-content" className="product-main about-page">
        {/* Hero */}
        <section className="about-hero studio-width"><p className="studio-kicker">{t.eyebrow}</p><h1>{lang === "tr" ? "Fikirden ilk dokunuşa." : "From an idea to the first tap."}</h1><div className="about-intro"><p>{t.intro}</p><div className="about-product-icons">{allProducts.map(p=><Link key={p.slug} href={p.href![lang]}><Image src={p.iconImage!} alt={p.name} width={64} height={64} /></Link>)}</div></div></section>

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
