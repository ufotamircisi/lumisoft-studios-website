import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { allProducts } from "@/lib/products";

type SupportPageProps = {
  lang?: "en" | "tr";
};

const supportHrefs: Record<string, { en: string; tr: string }> = {
  lumibaby: { en: "/lumibaby/support", tr: "/tr/lumibaby/destek" },
  "neon-siege": { en: "/neon-siege/support", tr: "/tr/neon-siege/destek" },
  "jelly-chain-rush": { en: "/contact", tr: "/tr/contact" },
  "roto-blocks": { en: "/roto-blocks/support", tr: "/tr/roto-blocks/destek" },
};

const copy = {
  en: {
    eyebrow: "Support",
    title: "How can we help?",
    intro:
      "Pick a product below for product-specific help, or email us directly. We read and answer every message.",
    productHelp: "Get help",
    emailTitle: "Email the studio",
    emailText:
      "For anything else: account questions, purchases, privacy requests, press, or partnerships.",
    faqTitle: "Common questions",
    faqs: [
      {
        q: "How do I manage or cancel a subscription?",
        a: "Subscriptions and purchases are handled by the App Store or Google Play. Open your store account settings, find the product, and manage it there. Refunds also go through the stores.",
      },
      {
        q: "How do I remove ads in your games?",
        a: "Games that show ads offer a one time Remove Ads purchase inside the game. Rewarded ads always stay optional.",
      },
      {
        q: "How do you handle my data?",
        a: "Each product has its own privacy policy linked from its page. As a rule we collect the minimum needed and keep personal data on your device.",
      },
      {
        q: "I found a bug. Where do I report it?",
        a: "Email us with the product name, your device model, and what happened. Screenshots help a lot.",
      },
    ],
    responseNote: "We usually reply within a few business days.",
  },
  tr: {
    eyebrow: "Destek",
    title: "Size nasıl yardımcı olabiliriz?",
    intro:
      "Ürüne özel yardım için aşağıdan bir ürün seçin veya doğrudan e-posta gönderin. Her mesajı okuyor ve yanıtlıyoruz.",
    productHelp: "Yardım al",
    emailTitle: "Stüdyoya e-posta gönderin",
    emailText:
      "Diğer her şey için: hesap soruları, satın almalar, gizlilik talepleri, basın veya iş birlikleri.",
    faqTitle: "Sık sorulan sorular",
    faqs: [
      {
        q: "Aboneliğimi nasıl yönetir veya iptal ederim?",
        a: "Abonelikler ve satın almalar App Store veya Google Play tarafından yönetilir. Mağaza hesap ayarlarınızı açın, ürünü bulun ve oradan yönetin. İadeler de mağazalar üzerinden yapılır.",
      },
      {
        q: "Oyunlarınızdaki reklamları nasıl kaldırırım?",
        a: "Reklam gösteren oyunlar, oyun içinde tek seferlik Reklamları Kaldır satın alması sunar. Ödüllü reklamlar her zaman isteğe bağlıdır.",
      },
      {
        q: "Verilerimi nasıl işliyorsunuz?",
        a: "Her ürünün kendi sayfasından bağlantı verilen ayrı bir gizlilik politikası vardır. Kural olarak gereken en az veriyi toplar ve kişisel verileri cihazınızda tutarız.",
      },
      {
        q: "Bir hata buldum. Nereye bildirebilirim?",
        a: "Ürün adı, cihaz modeliniz ve yaşananları içeren bir e-posta gönderin. Ekran görüntüleri çok yardımcı olur.",
      },
    ],
    responseNote: "Genellikle birkaç iş günü içinde yanıtlıyoruz.",
  },
};

export default function SupportPage({ lang = "en" }: SupportPageProps) {
  const t = copy[lang];
  const supportable = allProducts.filter((p) => supportHrefs[p.slug]);

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:py-24">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,40,217,0.24), transparent 75%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="hero-enter hero-enter-1 eyebrow mb-4 text-violet-400">
              {t.eyebrow}
            </p>
            <h1 className="hero-enter hero-enter-2 mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.title}
            </h1>
            <p className="hero-enter hero-enter-3 text-lg leading-relaxed text-slate-300">
              {t.intro}
            </p>
          </div>
        </section>

        {/* Product support cards */}
        <section className="px-4 pb-8">
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {supportable.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 90}>
                <Link
                  href={supportHrefs[p.slug][lang]}
                  className="group block h-full"
                >
                  <div className="card-glass card-lift flex h-full items-center gap-4 p-6">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border text-xl"
                      style={{
                        borderColor: `color-mix(in srgb, ${p.accent} 30%, transparent)`,
                        background: p.accentSoft,
                      }}
                      aria-hidden="true"
                    >
                      {p.iconImage ? (
                        <Image
                          src={p.iconImage}
                          alt=""
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-xl object-cover"
                        />
                      ) : (
                        p.glyph ?? "✦"
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-base font-bold text-white">
                        {p.name}
                      </h2>
                      <p className="truncate text-sm text-slate-400">
                        {p.tagline[lang]}
                      </p>
                    </div>
                    <span
                      className="text-sm font-semibold transition-transform duration-300 group-hover:translate-x-0.5"
                      style={{ color: p.accent }}
                    >
                      {t.productHelp} →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t.faqTitle}
              </h2>
            </Reveal>
            <div className="space-y-4">
              {t.faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 60}>
                  <details className="card-glass group p-0">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <span
                        className="text-violet-400 transition-transform duration-300 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Email CTA */}
        <section className="border-t border-white/[0.06] px-4 py-16 sm:py-20">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t.emailTitle}
              </h2>
              <p className="mb-8 leading-relaxed text-slate-300">
                {t.emailText}
              </p>
              <a
                href="mailto:support@lumisoftstudios.com"
                className="btn-primary"
              >
                support@lumisoftstudios.com
              </a>
              <p className="mt-5 text-sm text-slate-500">{t.responseNote}</p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
