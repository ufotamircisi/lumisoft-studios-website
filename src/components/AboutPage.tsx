import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type AboutPageProps = {
  lang?: "en" | "tr";
};

const copy = {
  en: {
    eyebrow: "About Lumisoft Studios",
    title: "A small studio with high standards",
    intro:
      "Lumisoft Studios is an independent studio building mobile games and apps. We stay small on purpose. It keeps us fast, honest, and close to the products we ship.",
    storyTitle: "The story",
    story:
      "Lumisoft started with a simple belief: small teams can ship software that feels better than what large ones produce, because every detail passes through hands that care. We began with LumiBaby, an app built for tired parents, and grew into games that respect the player as much as the app respects the family.",
    missionTitle: "Mission",
    mission:
      "Build games and apps that people keep on their phones because they genuinely like using them.",
    visionTitle: "Vision",
    vision:
      "A catalog of products, each one small in scope and high in quality, that together stand for reliable, honest mobile software.",
    pillarsTitle: "What we hold ourselves to",
    pillars: [
      {
        title: "Technology",
        text: "Modern, lean stacks. Native performance targets on both iOS and Android. Nothing shipped that we would not run on our own phones.",
      },
      {
        title: "Quality",
        text: "Every release is played, tapped, and tested on real devices, including older Android phones. Polish is part of the definition of done.",
      },
      {
        title: "Honesty",
        text: "Clear pricing, optional ads where they exist, and no dark patterns. What a product says it does is what it does.",
      },
      {
        title: "Privacy",
        text: "We collect the minimum needed to run our products. Recordings and personal data stay on your device unless you choose otherwise.",
      },
    ],
    ctaTitle: "Want to know more?",
    ctaText: "We answer questions about our products, our roadmap, and partnerships.",
    ctaButton: "Contact the studio",
    supportHref: "/support",
    supportLabel: "Visit support",
  },
  tr: {
    eyebrow: "Lumisoft Studios Hakkında",
    title: "Yüksek standartlara sahip küçük bir stüdyo",
    intro:
      "Lumisoft Studios, mobil oyunlar ve uygulamalar geliştiren bağımsız bir stüdyodur. Bilerek küçük kalıyoruz. Bu bizi hızlı, dürüst ve ürettiğimiz ürünlere yakın tutuyor.",
    storyTitle: "Hikaye",
    story:
      "Lumisoft basit bir inançla başladı: Küçük ekipler, her ayrıntı özen gösteren ellerden geçtiği için büyük ekiplerden daha iyi hissettiren yazılımlar üretebilir. Yorgun ebeveynler için geliştirilen LumiBaby ile başladık; uygulamanın aileye gösterdiği saygıyı oyuncuya gösteren oyunlarla büyüdük.",
    missionTitle: "Misyon",
    mission:
      "İnsanların gerçekten kullanmaktan keyif aldığı için telefonlarında tuttuğu oyunlar ve uygulamalar geliştirmek.",
    visionTitle: "Vizyon",
    vision:
      "Her biri kapsamı küçük, kalitesi yüksek ürünlerden oluşan; birlikte güvenilir ve dürüst mobil yazılımı temsil eden bir katalog.",
    pillarsTitle: "Kendimizi bağlı tuttuğumuz standartlar",
    pillars: [
      {
        title: "Teknoloji",
        text: "Modern ve yalın teknolojiler. Hem iOS hem Android'de yerel performans hedefleri. Kendi telefonumuzda çalıştırmayacağımız hiçbir şeyi yayınlamayız.",
      },
      {
        title: "Kalite",
        text: "Her sürüm gerçek cihazlarda, eski Android telefonlar dahil, oynanır ve test edilir. Cila, 'tamamlandı' tanımının bir parçasıdır.",
      },
      {
        title: "Dürüstlük",
        text: "Net fiyatlandırma, varsa isteğe bağlı reklamlar ve karanlık desen yok. Bir ürün ne söylüyorsa onu yapar.",
      },
      {
        title: "Gizlilik",
        text: "Ürünlerimizi çalıştırmak için gereken en az veriyi toplarız. Kayıtlar ve kişisel veriler siz aksini seçmedikçe cihazınızda kalır.",
      },
    ],
    ctaTitle: "Daha fazlasını merak mı ediyorsunuz?",
    ctaText:
      "Ürünlerimiz, yol haritamız ve iş birlikleri hakkındaki soruları yanıtlıyoruz.",
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
      <main className="flex-1 pt-16">
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
              <Image
                src="/images/brand/lumisoft-logo-mark.png"
                alt="Lumisoft Studios"
                width={165}
                height={192}
                className="h-32 w-auto object-contain drop-shadow-[0_0_28px_rgba(129,140,248,0.4)]"
                priority
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
