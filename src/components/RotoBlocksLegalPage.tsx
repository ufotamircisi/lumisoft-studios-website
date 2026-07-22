import { Fragment } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

type Lang = "en" | "tr";
type PageKind = "privacy" | "terms" | "support";

type Section = {
  title: string;
  paragraphs: string[];
};

const privacySections: Record<Lang, Section[]> = {
  en: [
    {
      title: "Overview",
      paragraphs: [
        "Roto Blocks is a casual puzzle game developed by Lumisoft Studio. This Privacy Policy explains how information is handled in the current version of the game.",
      ],
    },
    {
      title: "No Advertising or Purchases",
      paragraphs: [
        "The current version of Roto Blocks does not contain ads, use Google AdMob, offer in-app purchases, use billing, or provide subscriptions, coins, diamonds, or a marketplace.",
      ],
    },
    {
      title: "No Account or Sensitive Permissions",
      paragraphs: [
        "Roto Blocks does not use user accounts and does not access your location, camera, microphone, or contacts.",
      ],
    },
    {
      title: "Local Game Data",
      paragraphs: [
        "Game progress, settings, best scores, and similar gameplay data may be stored locally on your device. Removing the app or clearing its data may remove this information.",
      ],
    },
    {
      title: "Support Requests",
      paragraphs: [
        "If you contact Lumisoft Studio for support, your email address and message content are used only to respond to your support request.",
      ],
    },
    {
      title: "Changes to This Policy",
      paragraphs: [
        "This policy may be updated if Roto Blocks features or legal requirements change. The revised policy and update date will be published on this page.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "For privacy questions about Roto Blocks, contact Lumisoft Studio at support@lumisoftstudios.com.",
      ],
    },
  ],
  tr: [
    {
      title: "Genel Bakış",
      paragraphs: [
        "Roto Blocks, Lumisoft Studio tarafından geliştirilen gündelik bir bulmaca oyunudur. Bu Gizlilik Politikası, oyunun mevcut sürümünde bilgilerin nasıl işlendiğini açıklar.",
      ],
    },
    {
      title: "Reklam veya Satın Alma Yoktur",
      paragraphs: [
        "Roto Blocks'un bu sürümünde reklam ve Google AdMob kullanılmaz; uygulama içi satın alma, faturalandırma, abonelik, coin, elmas veya market özelliği bulunmaz.",
      ],
    },
    {
      title: "Hesap veya Hassas İzin Yoktur",
      paragraphs: [
        "Roto Blocks kullanıcı hesabı kullanmaz; konumunuza, kameranıza, mikrofonunuza veya kişilerinize erişmez.",
      ],
    },
    {
      title: "Yerel Oyun Verileri",
      paragraphs: [
        "Oyun ilerlemesi, ayarlar, en iyi skorlar ve benzeri oyun verileri cihazınızda yerel olarak saklanabilir. Uygulamanın kaldırılması veya verilerinin temizlenmesi bu bilgileri silebilir.",
      ],
    },
    {
      title: "Destek Talepleri",
      paragraphs: [
        "Destek için Lumisoft Studio'ya e-posta gönderirseniz e-posta adresiniz ve mesaj içeriğiniz yalnızca destek talebinize yanıt vermek için kullanılır.",
      ],
    },
    {
      title: "Bu Politikadaki Değişiklikler",
      paragraphs: [
        "Roto Blocks'un özellikleri veya yasal gereklilikler değişirse bu politika güncellenebilir. Güncel politika ve güncelleme tarihi bu sayfada yayımlanır.",
      ],
    },
    {
      title: "İletişim",
      paragraphs: [
        "Roto Blocks ile ilgili gizlilik soruları için Lumisoft Studio'ya support@lumisoftstudios.com adresinden ulaşabilirsiniz.",
      ],
    },
  ],
};

const termsSections: Record<Lang, Section[]> = {
  en: [
    { title: "Acceptance", paragraphs: ["By downloading, accessing, or using Roto Blocks, you agree to these Terms of Use. If you do not agree, do not use the game."] },
    { title: "About Roto Blocks", paragraphs: ["Roto Blocks is a free casual puzzle game developed by Lumisoft Studio."] },
    { title: "License", paragraphs: ["Lumisoft Studio grants you a limited, revocable, nonexclusive, nontransferable license to use Roto Blocks for personal and noncommercial purposes, subject to these terms."] },
    { title: "Current Version", paragraphs: ["The current version of Roto Blocks does not include ads or purchases. Ads or a Remove Ads option may be added in a future version, and these terms may be updated at that time."] },
    { title: "User Conduct", paragraphs: ["You must not misuse, reverse engineer, automate, cheat, bypass security measures, distribute modified copies of, or interfere with Roto Blocks except where applicable law expressly permits otherwise."] },
    { title: "Intellectual Property", paragraphs: ["Roto Blocks and its code, gameplay content, visuals, audio, names, logos, and brand elements are owned by Lumisoft Studio or used by Lumisoft Studio under license. These terms do not transfer ownership to you."] },
    { title: "Availability", paragraphs: ["Lumisoft Studio may update, change, suspend, or discontinue parts of Roto Blocks. Internet access, compatible hardware, operating system support, and third party services may be required for some functions."] },
    { title: "Disclaimer", paragraphs: ["Roto Blocks is provided as is and as available to the extent permitted by law. Lumisoft Studio does not guarantee uninterrupted operation, perfect compatibility, or preservation of locally stored game data."] },
    { title: "Limitation of Liability", paragraphs: ["To the extent permitted by law, Lumisoft Studio is not liable for indirect, incidental, or consequential loss arising from use of the game, including loss of local progress or device incompatibility. Nothing in these terms excludes liability that cannot legally be excluded."] },
    { title: "Changes to These Terms", paragraphs: ["These terms may be updated when Roto Blocks, its services, or legal requirements change. The revised terms and update date will be published on this page. Continued use after an update means you accept the revised terms where permitted by law."] },
    { title: "Contact", paragraphs: ["For questions about these terms, contact Lumisoft Studio at support@lumisoftstudios.com."] },
  ],
  tr: [
    { title: "Kabul", paragraphs: ["Roto Blocks'u indirerek, erişerek veya kullanarak bu Kullanım Koşullarını kabul etmiş olursunuz. Kabul etmiyorsanız oyunu kullanmayın."] },
    { title: "Roto Blocks Hakkında", paragraphs: ["Roto Blocks, Lumisoft Studio tarafından geliştirilen ücretsiz bir gündelik bulmaca oyunudur."] },
    { title: "Kullanım Lisansı", paragraphs: ["Lumisoft Studio, bu koşullara bağlı olarak Roto Blocks'u kişisel ve ticari olmayan amaçlarla kullanmanız için sınırlı, geri alınabilir, münhasır olmayan ve devredilemez bir lisans verir."] },
    { title: "Mevcut Sürüm", paragraphs: ["Roto Blocks'un bu sürümünde reklam veya satın alma yoktur. İleride reklam ya da Reklamları Kaldır seçeneği eklenirse bu koşullar güncellenebilir."] },
    { title: "Kullanıcı Davranışı", paragraphs: ["Geçerli yasaların açıkça izin verdiği durumlar dışında Roto Blocks'u kötüye kullanmak, tersine mühendislik uygulamak, otomasyon kullanmak, hile yapmak, güvenlik önlemlerini aşmak, değiştirilmiş kopyaları dağıtmak veya uygulamanın normal çalışmasına müdahale etmek yasaktır."] },
    { title: "Fikri Mülkiyet", paragraphs: ["Roto Blocks ile oyunun kodu, oyun içeriği, görselleri, sesleri, adları, logoları ve marka öğeleri Lumisoft Studio'ya aittir veya Lumisoft Studio tarafından lisans kapsamında kullanılır. Bu koşullar size mülkiyet devretmez."] },
    { title: "Erişilebilirlik", paragraphs: ["Lumisoft Studio, Roto Blocks'un bazı bölümlerini güncelleyebilir, değiştirebilir, askıya alabilir veya sonlandırabilir. Bazı işlevler için internet erişimi, uyumlu donanım, işletim sistemi desteği ve üçüncü taraf hizmetler gerekebilir."] },
    { title: "Sorumluluk Reddi", paragraphs: ["Roto Blocks yasaların izin verdiği ölçüde olduğu gibi ve mevcut haliyle sunulur. Lumisoft Studio kesintisiz çalışma, kusursuz uyumluluk veya yerel olarak saklanan oyun verilerinin korunmasını garanti etmez."] },
    { title: "Sorumluluğun Sınırlandırılması", paragraphs: ["Yasaların izin verdiği ölçüde Lumisoft Studio, yerel ilerlemenin kaybı veya cihaz uyumsuzluğu dahil oyunun kullanımından doğan dolaylı, arızi ya da sonuç niteliğindeki kayıplardan sorumlu değildir. Bu koşullar yasal olarak hariç tutulamayacak sorumlulukları hariç tutmaz."] },
    { title: "Bu Koşullardaki Değişiklikler", paragraphs: ["Roto Blocks, hizmetleri veya yasal gereklilikler değiştiğinde bu koşullar güncellenebilir. Güncel koşullar ve güncelleme tarihi bu sayfada yayımlanır. Güncellemeden sonra kullanıma devam etmeniz, yasaların izin verdiği yerlerde güncel koşulları kabul ettiğiniz anlamına gelir."] },
    { title: "İletişim", paragraphs: ["Bu koşullarla ilgili sorular için Lumisoft Studio'ya support@lumisoftstudios.com adresinden ulaşabilirsiniz."] },
  ],
};

const labels = {
  en: {
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    support: "Roto Blocks Support",
    subtitle: "Roto Blocks by Lumisoft Studio",
    updated: "Last updated",
    date: "July 23, 2026",
    back: "Back to Roto Blocks",
    supportIntro: "For help with Roto Blocks, contact Lumisoft Studio at support@lumisoftstudios.com.",
    include: "Please include",
    details: ["App name", "Platform", "Device model", "Android version", "A short description of the issue"],
    email: "Email Support",
  },
  tr: {
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    support: "Roto Blocks Destek",
    subtitle: "Lumisoft Studio tarafından geliştirilen Roto Blocks",
    updated: "Son güncelleme",
    date: "23 Temmuz 2026",
    back: "Roto Blocks sayfasına dön",
    supportIntro: "Roto Blocks ile ilgili destek için Lumisoft Studio'ya support@lumisoftstudios.com adresinden ulaşabilirsiniz.",
    include: "Lütfen şunları ekleyin",
    details: ["Uygulama adı", "Platform", "Cihaz modeli", "Android sürümü", "Sorunun kısa açıklaması"],
    email: "Destek için e-posta gönder",
  },
};

export default function RotoBlocksLegalPage({ lang = "en", kind }: { lang?: Lang; kind: PageKind }) {
  const t = labels[lang];
  const base = lang === "tr" ? "/tr/roto-blocks" : "/roto-blocks";
  const hrefs = lang === "tr"
    ? { privacy: `${base}/gizlilik`, terms: `${base}/kullanim-kosullari`, support: `${base}/destek` }
    : { privacy: `${base}/privacy`, terms: `${base}/terms`, support: `${base}/support` };
  const sections = kind === "privacy" ? privacySections[lang] : termsSections[lang];

  return (
    <>
      <Header />
      <div className="flex-1 pt-16">
        <LegalPageLayout
          title={t[kind]}
          subtitle={t.subtitle}
          lastUpdated={kind === "support" ? undefined : t.date}
          lastUpdatedLabel={t.updated}
          backHref={base}
          backLinkText={`← ${t.back}`}
          appIcon="/images/web/roto-blocks-icon.webp"
        >
          {kind === "support" ? (
            <>
              <section className="rounded-2xl border border-cyan-200/20 bg-cyan-300/[0.06] p-6 sm:p-8">
                <p className="text-lg leading-relaxed text-slate-200">{t.supportIntro}</p>
                <a href="mailto:support@lumisoftstudios.com" className="mt-6 inline-flex min-h-11 items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-200/50 hover:text-white">
                  {t.email}
                </a>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-cyan-200/15">{t.include}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {t.details.map((detail) => (
                    <li key={detail} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200">{detail}</li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-cyan-200/15">{section.title}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-slate-200 leading-relaxed">
                      {paragraph.split("support@lumisoftstudios.com").map((part, index, parts) => (
                        <Fragment key={`${part}-${index}`}>
                          {part}
                          {index < parts.length - 1 && (
                            <a href="mailto:support@lumisoftstudios.com" className="text-cyan-300 transition-colors hover:text-cyan-200">support@lumisoftstudios.com</a>
                          )}
                        </Fragment>
                      ))}
                    </p>
                  ))}
                </div>
              </section>
            ))
          )}

          <nav aria-label={lang === "tr" ? "Roto Blocks yasal bağlantıları" : "Roto Blocks legal links"} className="flex flex-wrap gap-3 border-t border-cyan-200/10 pt-8">
            {(["privacy", "terms", "support"] as PageKind[]).filter((item) => item !== kind).map((item) => (
              <Link key={item} href={hrefs[item]} className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:border-cyan-200/30 hover:text-cyan-100">
                {t[item]}
              </Link>
            ))}
          </nav>
        </LegalPageLayout>
      </div>
      <Footer lang={lang} />
    </>
  );
}
