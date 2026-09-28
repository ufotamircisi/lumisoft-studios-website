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
  links?: { label: string; href: string }[];
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
      title: "Google AdMob Advertising",
      paragraphs: [
        "Roto Blocks uses Google AdMob through the Google Mobile Ads SDK. Interstitial ads appear at natural gameplay transitions. Rewarded ads are shown only when you choose to watch an ad to continue in Adventure Mode.",
        "The game does not show banner, app open, or native ads. It does not offer in-app purchases, subscriptions, or paid virtual currency.",
      ],
    },
    {
      title: "Information Processed by the Advertising SDK",
      paragraphs: [
        "Depending on the platform, available identifiers, your consent where applicable, and Google policies, the Google Mobile Ads SDK may collect or process device identifiers, advertising identifiers, IP addresses, diagnostics such as crash and performance information, usage data, and ad interaction data such as impressions, taps, and video views.",
        "IP addresses may be used to estimate an approximate location. The game does not request location permission or access precise device location.",
      ],
    },
    {
      title: "How Advertising Data Is Used",
      paragraphs: [
        "Google may process this information for third-party advertising, analytics and ad measurement, diagnostics, fraud prevention, security, and compliance with applicable requirements. Advertising-related information may be shared with Google and its advertising service partners as described in Google policies.",
        "Device identifiers are used for third-party advertising and analytics and are treated as data linked to the user, including through a device identifier, even though Roto Blocks has no account or login system. They are not used for tracking in the iOS app.",
      ],
    },
    {
      title: "iOS and App Tracking Transparency",
      paragraphs: [
        "The iOS app does not use App Tracking Transparency and does not ask permission to track users. Device ID data is used for Third-Party Advertising and Analytics, is linked to the user, and is not used for tracking as defined by Apple.",
        "Not requesting tracking permission does not mean that no data is processed. The Google Mobile Ads SDK may still process the information described above, subject to platform restrictions and applicable consent.",
      ],
    },
    {
      title: "Google Policies and Privacy Choices",
      paragraphs: [
        "Google handles advertising data under its own policies, including its retention practices and available privacy controls. Processing depends on your platform, applicable user consent, and Google policies. You can review the privacy and advertising controls available on your device and in Google services.",
        "For details about how Google uses information from apps that use its services, see the following resources:",
      ],
      links: [
        { label: "Google Privacy Policy", href: "https://policies.google.com/privacy?hl=en" },
        { label: "How Google uses information from sites or apps that use its services", href: "https://policies.google.com/technologies/partner-sites?hl=en" },
      ],
    },
    {
      title: "No Account or Sensitive Permissions",
      paragraphs: [
        "Roto Blocks does not require an account or login and does not access your camera, microphone, or contacts. It does not request location permission.",
      ],
    },
    {
      title: "Local Game Data",
      paragraphs: [
        "Game progress, settings, best scores, and similar gameplay data may be stored locally on your device. Removing the app or clearing its data may remove this information. This does not necessarily delete information already processed by Google.",
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
      title: "Google AdMob Reklamları",
      paragraphs: [
        "Roto Blocks, Google Mobile Ads SDK aracılığıyla Google AdMob kullanır. Geçiş reklamları (interstitial) oyunun doğal geçiş noktalarında gösterilir. Ödüllü reklamlar yalnızca Macera Modunda (Adventure Mode) devam etmek için reklam izlemeyi seçtiğinizde gösterilir.",
        "Oyunda banner, uygulama açılış (app open) veya yerel (native) reklamlar gösterilmez. Uygulama içi satın alma, abonelik veya ücretli sanal para bulunmaz.",
      ],
    },
    {
      title: "Reklam SDK’sının İşlediği Bilgiler",
      paragraphs: [
        "Platforma, kullanılabilir tanımlayıcılara, gerekli olduğu durumlarda verdiğiniz onaya ve Google politikalarına bağlı olarak Google Mobile Ads SDK; cihaz tanımlayıcılarını, reklam tanımlayıcılarını, IP adreslerini, çökme ve performans bilgileri gibi tanılama verilerini, kullanım verilerini ve reklam gösterimleri, dokunmalar ile video izlemeleri gibi reklam etkileşim verilerini toplayabilir veya işleyebilir.",
        "IP adresleri yaklaşık konumu tahmin etmek için kullanılabilir. Oyun konum izni istemez ve cihazın kesin konumuna erişmez.",
      ],
    },
    {
      title: "Reklam Verilerinin Kullanımı",
      paragraphs: [
        "Google bu bilgileri üçüncü taraf reklamları, analiz ve reklam ölçümü, tanılama, dolandırıcılığın önlenmesi, güvenlik ve geçerli gerekliliklere uyum amacıyla işleyebilir. Reklamlarla ilgili bilgiler, Google politikalarında açıklandığı şekilde Google ve reklam hizmeti ortaklarıyla paylaşılabilir.",
        "Cihaz tanımlayıcıları üçüncü taraf reklamları ve analiz için kullanılır. Roto Blocks’ta hesap veya giriş sistemi bulunmasa da bu veriler, cihaz tanımlayıcısı üzerinden ilişkilendirme dahil, kullanıcıyla bağlantılı veriler olarak ele alınır. iOS uygulamasında takip amacıyla kullanılmaz.",
      ],
    },
    {
      title: "iOS ve Uygulama Takibi Şeffaflığı",
      paragraphs: [
        "iOS uygulaması App Tracking Transparency kullanmaz ve kullanıcıları takip etmek için izin istemez. Cihaz Kimliği (Device ID) verileri üçüncü taraf reklamları (Third-Party Advertising) ve analiz (Analytics) için kullanılır, kullanıcıyla bağlantılıdır ve Apple’ın tanımladığı anlamda takip amacıyla kullanılmaz.",
        "Takip izni istenmemesi, hiçbir verinin işlenmediği anlamına gelmez. Google Mobile Ads SDK, platform kısıtlamalarına ve geçerli onay koşullarına bağlı olarak yukarıda açıklanan bilgileri işlemeye devam edebilir.",
      ],
    },
    {
      title: "Google Politikaları ve Gizlilik Tercihleri",
      paragraphs: [
        "Google, reklam verilerini saklama uygulamaları ve kullanılabilir gizlilik kontrolleri dahil kendi politikaları kapsamında işler. Veri işleme; platformunuza, geçerli kullanıcı onayına ve Google politikalarına bağlıdır. Cihazınızda ve Google hizmetlerinde sunulan gizlilik ve reklam kontrollerini inceleyebilirsiniz.",
        "Google’ın hizmetlerini kullanan uygulamalardan gelen bilgileri nasıl kullandığı hakkında ayrıntılar için şu kaynaklara bakabilirsiniz:",
      ],
      links: [
        { label: "Google Gizlilik Politikası", href: "https://policies.google.com/privacy?hl=tr" },
        { label: "Google’ın hizmetlerini kullanan sitelerden veya uygulamalardan gelen bilgileri kullanımı", href: "https://policies.google.com/technologies/partner-sites?hl=tr" },
      ],
    },
    {
      title: "Hesap veya Hassas İzin Yoktur",
      paragraphs: [
        "Roto Blocks hesap oluşturmayı veya giriş yapmayı gerektirmez; kameranıza, mikrofonunuza veya kişilerinize erişmez. Konum izni istemez.",
      ],
    },
    {
      title: "Yerel Oyun Verileri",
      paragraphs: [
        "Oyun ilerlemesi, ayarlar, en iyi skorlar ve benzeri oyun verileri cihazınızda yerel olarak saklanabilir. Uygulamanın kaldırılması veya verilerinin temizlenmesi bu bilgileri silebilir. Bu işlem, Google tarafından daha önce işlenmiş bilgileri mutlaka silmez.",
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
    { title: "Current Version", paragraphs: ["Roto Blocks uses Google AdMob interstitial ads at natural gameplay transitions and rewarded ads only when you choose to watch an ad to continue in Adventure Mode. There are no banner, app open, or native ads, in-app purchases, subscriptions, or paid virtual currency. The Google Mobile Ads SDK may process device identifiers and other advertising-related data as explained in the Privacy Policy."] },
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
    { title: "Mevcut Sürüm", paragraphs: ["Roto Blocks, oyunun doğal geçiş noktalarında Google AdMob geçiş reklamları ve yalnızca Macera Modunda (Adventure Mode) devam etmek için reklam izlemeyi seçtiğinizde ödüllü reklamlar kullanır. Banner, uygulama açılış (app open) veya yerel (native) reklamlar, uygulama içi satın alma, abonelik ya da ücretli sanal para bulunmaz. Google Mobile Ads SDK, Gizlilik Politikasında açıklandığı şekilde cihaz tanımlayıcılarını ve reklamlarla ilgili diğer verileri işleyebilir."] },
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
    date: "September 29, 2026",
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
    date: "29 Eylül 2026",
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
                  {section.links?.map((link) => (
                    <p key={link.href}>
                      <a href={link.href} className="text-cyan-300 underline underline-offset-4 transition-colors hover:text-cyan-200">{link.label}</a>
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
