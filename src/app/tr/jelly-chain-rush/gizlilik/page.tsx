import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Gizlilik Politikası",
  description:
    "Lumisoft Studio'nun App Store ve Google Play'de yayında olan Jelly Chain Rush: Match 3 oyunu için gizlilik politikası.",
  alternates: {
    canonical: "/tr/jelly-chain-rush/gizlilik",
    languages: { "tr-TR": "/tr/jelly-chain-rush/gizlilik", "en-US": "/jelly-chain-rush/privacy" },
  },
};

const sections = [
  [
    "Genel",
    "Jelly Chain Rush: Match 3 (\"Uygulama\"), Lumisoft Studio tarafından geliştirilen ve App Store ile Google Play'de yayında olan bir mobil bulmaca oyunudur.",
  ],
  [
    "Yerel Oyun İlerlemesi",
    "Oyun ilerlemesi, ayarlar ve benzeri oynanış verileri cihazınızda yerel olarak saklanabilir. Oynamak için hesap veya oturum açma gerekmez.",
  ],
  [
    "Reklamlar",
    "Uygulama, reklam göstermek için Google AdMob kullanabilir. Reklam biçimleri ödüllü reklamları, geçiş reklamlarını ve banner reklamları içerebilir. Ödüllü reklamlar isteğe bağlıdır.",
  ],
  [
    "Satın Almalar",
    "Uygulama, Google Play Billing veya Apple'ın Uygulama İçi Satın Alma sistemi üzerinden işlenen uygulama içi satın almalar sunabilir. Lumisoft Studio ödeme kartı bilgilerinizi toplamaz veya saklamaz.",
  ],
  [
    "Hassas Veriler",
    "Uygulama, sağlık, finansal, resmi kimlik veya benzeri hassas kişisel verileri bilerek toplamaz.",
  ],
  [
    "Çocuklar ve Aileler",
    "Jelly Chain Rush bir eğlence oyunudur. Cihazınızda ve mağaza hesabınızda bulunan yaş derecelendirmesi, mağaza listesi, ebeveyn denetimleri ve aile ayarlarına uygun şekilde kullanılmalıdır.",
  ],
  [
    "İletişim",
    "Jelly Chain Rush gizlilik soruları için support@lumisoftstudios.com adresinden bize ulaşabilirsiniz.",
  ],
  [
    "Değişiklikler",
    "Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. En güncel sürüm bu sayfada yayınlanacaktır.",
  ],
];

export default function JellyChainRushGizlilikPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Gizlilik Politikası"
        subtitle="Lumisoft Studio tarafından Jelly Chain Rush"
        lastUpdated="5 Ağustos 2026"
        lastUpdatedLabel="Son güncelleme:"
        backHref="/tr/jelly-chain-rush"
        backLinkText="← Jelly Chain Rush'a dön"
      >
        {sections.map(([title, body]) => (
          <section key={title}>
            <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
              {title}
            </h2>
            <p className="text-slate-200 leading-relaxed">{body}</p>
          </section>
        ))}
        <a
          href="mailto:support@lumisoftstudios.com"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors"
        >
          support@lumisoftstudios.com
        </a>
      </LegalPageLayout>
      <Footer lang="tr" />
    </>
  );
}
