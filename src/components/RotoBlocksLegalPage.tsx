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
        "Roto Blocks is a casual puzzle game developed by Lumisoft Studio. This policy explains how information may be handled when you use the game.",
        "Lumisoft Studio does not sell personal data.",
      ],
    },
    {
      title: "Information We Do Not Collect Directly",
      paragraphs: [
        "Roto Blocks does not use an account system and does not ask you to provide your name, email address, phone number, or profile information to play.",
      ],
    },
    {
      title: "Local Game Data",
      paragraphs: [
        "Game progress, settings, scores, level progress, and similar gameplay data may be stored locally on your device. Removing the app or clearing its data may remove this information.",
      ],
    },
    {
      title: "Advertising",
      paragraphs: [
        "Roto Blocks is designed as a free ad supported game. Google AdMob may be used to display ads. The Google Mobile Ads SDK may collect and share information such as IP address, user interactions, diagnostic information, and device identifiers for advertising, measurement, security, and fraud prevention purposes.",
        "Advertising availability and content are controlled in part by third party providers and may vary by device, location, consent choices, and network availability.",
      ],
    },
    {
      title: "Rewarded Ads",
      paragraphs: [
        "Rewarded ads are optional. If you choose to watch one, advertising services may process information needed to load the ad, confirm completion, prevent fraud, and provide the related in game reward.",
      ],
    },
    {
      title: "Remove Ads",
      paragraphs: [
        "A one time Remove Ads purchase may be offered in the future. If introduced, purchase processing will be handled by the applicable app store. This option is planned and should not be understood as an active store product until it becomes available in the game.",
      ],
    },
    {
      title: "Consent and Privacy Choices",
      paragraphs: [
        "Roto Blocks supports advertising consent and privacy options where required. You may be able to review or change applicable choices from the game. You can also reset or limit the Android advertising identifier through your device settings, subject to the controls available on your Android version.",
      ],
    },
    {
      title: "Support Requests",
      paragraphs: [
        "If you email Lumisoft Studio for support, your email address and the content of your message may be used only to review and respond to your request and to maintain reasonable support records.",
      ],
    },
    {
      title: "Children",
      paragraphs: [
        "Roto Blocks is a general audience casual puzzle game and is not designed specifically for children. Parents and guardians should supervise device use and review the advertising and privacy settings available on the device.",
      ],
    },
    {
      title: "Third Party Services",
      paragraphs: [
        "Third party services, including Google AdMob and the applicable app store, operate under their own terms and privacy policies. Their data practices are governed by those documents.",
      ],
    },
    {
      title: "Data Security",
      paragraphs: [
        "Lumisoft Studio uses reasonable measures appropriate to the limited information it handles. No storage or transmission method can be guaranteed to be completely secure.",
      ],
    },
    {
      title: "Changes to This Policy",
      paragraphs: [
        "This policy may be updated as Roto Blocks, advertising services, or legal requirements change. The revised policy and update date will be published on this page.",
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
        "Roto Blocks, Lumisoft Studio tarafından geliştirilen gündelik bir bulmaca oyunudur. Bu politika, oyunu kullandığınızda bilgilerin nasıl işlenebileceğini açıklar.",
        "Lumisoft Studio kişisel verileri satmaz.",
      ],
    },
    {
      title: "Doğrudan Toplamadığımız Bilgiler",
      paragraphs: [
        "Roto Blocks bir hesap sistemi kullanmaz ve oynamak için ad, e posta adresi, telefon numarası veya profil bilgisi vermenizi istemez.",
      ],
    },
    {
      title: "Yerel Oyun Verileri",
      paragraphs: [
        "Oyun ilerlemesi, ayarlar, skorlar, bölüm ilerlemesi ve benzeri oyun verileri cihazınızda yerel olarak saklanabilir. Uygulamanın kaldırılması veya verilerinin temizlenmesi bu bilgileri silebilir.",
      ],
    },
    {
      title: "Reklamlar",
      paragraphs: [
        "Roto Blocks ücretsiz ve reklam destekli bir oyun olarak tasarlanmıştır. Reklam göstermek için Google AdMob kullanılabilir. Google Mobile Ads SDK reklam, ölçüm, güvenlik ve sahtekârlığı önleme amaçlarıyla IP adresi, kullanıcı etkileşimleri, tanılama bilgileri ve cihaz tanımlayıcıları gibi bilgileri toplayabilir ve paylaşabilir.",
        "Reklamların erişilebilirliği ve içeriği kısmen üçüncü taraf sağlayıcılar tarafından yönetilir ve cihaza, konuma, onay seçimlerine ve ağ erişimine göre değişebilir.",
      ],
    },
    {
      title: "Ödüllü Reklamlar",
      paragraphs: [
        "Ödüllü reklamlar isteğe bağlıdır. Bir ödüllü reklam izlemeyi seçerseniz reklam hizmetleri reklamı yüklemek, tamamlandığını doğrulamak, sahtekârlığı önlemek ve ilgili oyun içi ödülü vermek için gerekli bilgileri işleyebilir.",
      ],
    },
    {
      title: "Reklamları Kaldır",
      paragraphs: [
        "Tek seferlik Reklamları Kaldır satın alımı ileride sunulabilir. Sunulması halinde satın alma işlemi ilgili uygulama mağazası tarafından yürütülür. Bu seçenek planlanmaktadır ve oyunda kullanıma sunulana kadar aktif bir mağaza ürünü olarak anlaşılmamalıdır.",
      ],
    },
    {
      title: "Onay ve Gizlilik Seçenekleri",
      paragraphs: [
        "Roto Blocks gerekli olduğu yerlerde reklam onayı ve gizlilik seçeneklerini destekler. İlgili seçimleri oyun içinden inceleyebilir veya değiştirebilirsiniz. Android sürümünüzde sunulan kontrollere bağlı olarak Android reklam tanımlayıcısını cihaz ayarlarından sıfırlayabilir veya sınırlandırabilirsiniz.",
      ],
    },
    {
      title: "Destek Talepleri",
      paragraphs: [
        "Destek için Lumisoft Studio'ya e posta gönderirseniz e posta adresiniz ve mesajınızın içeriği yalnızca talebinizi incelemek, yanıtlamak ve makul destek kayıtlarını tutmak için kullanılabilir.",
      ],
    },
    {
      title: "Çocuklar",
      paragraphs: [
        "Roto Blocks genel kitleye yönelik gündelik bir bulmaca oyunudur ve özellikle çocuklar için tasarlanmamıştır. Ebeveynler ve vasiler cihaz kullanımını gözetmeli, cihazda sunulan reklam ve gizlilik ayarlarını incelemelidir.",
      ],
    },
    {
      title: "Üçüncü Taraf Hizmetler",
      paragraphs: [
        "Google AdMob ve ilgili uygulama mağazası dahil üçüncü taraf hizmetler kendi koşulları ve gizlilik politikaları kapsamında çalışır. Bu hizmetlerin veri uygulamaları kendi belgelerine tabidir.",
      ],
    },
    {
      title: "Veri Güvenliği",
      paragraphs: [
        "Lumisoft Studio, işlediği sınırlı bilgilere uygun makul önlemler kullanır. Hiçbir saklama veya aktarım yönteminin tamamen güvenli olduğu garanti edilemez.",
      ],
    },
    {
      title: "Bu Politikadaki Değişiklikler",
      paragraphs: [
        "Roto Blocks, reklam hizmetleri veya yasal gereklilikler değiştikçe bu politika güncellenebilir. Güncel politika ve güncelleme tarihi bu sayfada yayımlanır.",
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
    { title: "About Roto Blocks", paragraphs: ["Roto Blocks is a free ad supported casual puzzle game developed by Lumisoft Studio."] },
    { title: "License", paragraphs: ["Lumisoft Studio grants you a limited, revocable, nonexclusive, nontransferable license to use Roto Blocks for personal and noncommercial purposes, subject to these terms."] },
    { title: "Ads", paragraphs: ["Roto Blocks may display ads provided by third party advertising services. Ad availability, content, and timing may vary. You must not manipulate ad delivery, impressions, clicks, or reporting."] },
    { title: "Rewarded Ads", paragraphs: ["Rewarded ads are optional. An in game reward is provided only when the advertising service successfully confirms completion. A reward is not guaranteed if an ad is unavailable, interrupted, closed early, or cannot be verified."] },
    { title: "Remove Ads", paragraphs: ["A one time Remove Ads purchase may be offered in the future. If it becomes available and is active, banner ads and forced full screen ads may be removed. The behavior of optional rewarded ads may be determined separately by the game design. This option is not an active store product unless it is shown as available in the game."] },
    { title: "User Conduct", paragraphs: ["You must not misuse Roto Blocks. Cheating, reverse engineering, unauthorized automation, manipulating advertising systems, bypassing security measures, distributing modified copies, or interfering with normal operation is prohibited except where applicable law expressly permits otherwise."] },
    { title: "Intellectual Property", paragraphs: ["Roto Blocks and its code, gameplay content, visuals, audio, names, logos, and brand elements are owned by Lumisoft Studio or used by Lumisoft Studio under license. These terms do not transfer ownership to you."] },
    { title: "Availability", paragraphs: ["Lumisoft Studio may update, change, suspend, or discontinue parts of Roto Blocks. Internet access, compatible hardware, operating system support, and third party services may be required for some functions."] },
    { title: "Disclaimer", paragraphs: ["Roto Blocks is provided as is and as available to the extent permitted by law. Lumisoft Studio does not guarantee uninterrupted operation, perfect compatibility, continuous ad availability, or preservation of locally stored game data."] },
    { title: "Limitation of Liability", paragraphs: ["To the extent permitted by law, Lumisoft Studio is not liable for indirect, incidental, or consequential loss arising from use of the game, including loss of local progress, device incompatibility, internet interruption, or disruption caused by advertising or platform services. Nothing in these terms excludes liability that cannot legally be excluded."] },
    { title: "Changes to These Terms", paragraphs: ["These terms may be updated when Roto Blocks, its services, or legal requirements change. The revised terms and update date will be published on this page. Continued use after an update means you accept the revised terms where permitted by law."] },
    { title: "Contact", paragraphs: ["For questions about these terms, contact Lumisoft Studio at support@lumisoftstudios.com."] },
  ],
  tr: [
    { title: "Kabul", paragraphs: ["Roto Blocks'u indirerek, erişerek veya kullanarak bu Kullanım Koşullarını kabul etmiş olursunuz. Kabul etmiyorsanız oyunu kullanmayın."] },
    { title: "Roto Blocks Hakkında", paragraphs: ["Roto Blocks, Lumisoft Studio tarafından geliştirilen ücretsiz ve reklam destekli gündelik bir bulmaca oyunudur."] },
    { title: "Kullanım Lisansı", paragraphs: ["Lumisoft Studio, bu koşullara bağlı olarak Roto Blocks'u kişisel ve ticari olmayan amaçlarla kullanmanız için sınırlı, geri alınabilir, münhasır olmayan ve devredilemez bir lisans verir."] },
    { title: "Reklamlar", paragraphs: ["Roto Blocks üçüncü taraf reklam hizmetleri tarafından sağlanan reklamları gösterebilir. Reklam erişilebilirliği, içeriği ve zamanlaması değişebilir. Reklam sunumunu, gösterimlerini, tıklamalarını veya raporlamasını manipüle edemezsiniz."] },
    { title: "Ödüllü Reklamlar", paragraphs: ["Ödüllü reklamlar isteğe bağlıdır. Oyun içi ödül yalnızca reklam hizmeti tamamlanmayı başarıyla doğruladığında verilir. Reklam erişilebilir değilse, kesilirse, erken kapatılırsa veya doğrulanamazsa ödül garanti edilmez."] },
    { title: "Reklamları Kaldır", paragraphs: ["Tek seferlik Reklamları Kaldır satın alımı ileride sunulabilir. Kullanıma sunulur ve etkinleşirse banner reklamlar ve zorunlu tam ekran reklamlar kaldırılabilir. İsteğe bağlı ödüllü reklamların davranışı oyun tasarımına göre ayrıca belirlenebilir. Bu seçenek oyunda kullanılabilir olarak gösterilmedikçe aktif bir mağaza ürünü değildir."] },
    { title: "Kullanıcı Davranışı", paragraphs: ["Roto Blocks'u kötüye kullanamazsınız. Geçerli yasaların açıkça izin verdiği durumlar dışında hile, tersine mühendislik, yetkisiz otomasyon, reklam sistemlerini manipüle etme, güvenlik önlemlerini aşma, değiştirilmiş kopyaları dağıtma veya normal çalışmaya müdahale etme yasaktır."] },
    { title: "Fikri Mülkiyet", paragraphs: ["Roto Blocks ile oyunun kodu, oyun içeriği, görselleri, sesleri, adları, logoları ve marka öğeleri Lumisoft Studio'ya aittir veya Lumisoft Studio tarafından lisans kapsamında kullanılır. Bu koşullar size mülkiyet devretmez."] },
    { title: "Erişilebilirlik", paragraphs: ["Lumisoft Studio, Roto Blocks'un bazı bölümlerini güncelleyebilir, değiştirebilir, askıya alabilir veya sonlandırabilir. Bazı işlevler için internet erişimi, uyumlu donanım, işletim sistemi desteği ve üçüncü taraf hizmetler gerekebilir."] },
    { title: "Sorumluluk Reddi", paragraphs: ["Roto Blocks yasaların izin verdiği ölçüde olduğu gibi ve mevcut haliyle sunulur. Lumisoft Studio kesintisiz çalışma, kusursuz uyumluluk, sürekli reklam erişimi veya yerel olarak saklanan oyun verilerinin korunmasını garanti etmez."] },
    { title: "Sorumluluğun Sınırlandırılması", paragraphs: ["Yasaların izin verdiği ölçüde Lumisoft Studio, yerel ilerlemenin kaybı, cihaz uyumsuzluğu, internet kesintisi veya reklam ve platform hizmetlerinden kaynaklanan aksaklıklar dahil oyunun kullanımından doğan dolaylı, arızi veya sonuç niteliğindeki kayıplardan sorumlu değildir. Bu koşullar yasal olarak hariç tutulamayacak sorumlulukları hariç tutmaz."] },
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
    date: "July 12, 2026",
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
    date: "12 Temmuz 2026",
    back: "Roto Blocks sayfasına dön",
    supportIntro: "Roto Blocks ile ilgili destek için Lumisoft Studio'ya support@lumisoftstudios.com adresinden ulaşabilirsiniz.",
    include: "Lütfen şunları ekleyin",
    details: ["Uygulama adı", "Platform", "Cihaz modeli", "Android sürümü", "Sorunun kısa açıklaması"],
    email: "Destek için e posta gönder",
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
      <main className="flex-1 pt-16">
        <LegalPageLayout
          title={t[kind]}
          subtitle={t.subtitle}
          lastUpdated={kind === "support" ? undefined : t.date}
          lastUpdatedLabel={t.updated}
          backHref={base}
          backLinkText={`← ${t.back}`}
          appIcon="/images/roto-blocks-icon.png"
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
      </main>
      <Footer lang={lang} />
    </>
  );
}
