import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Gizlilik Politikası",
  description:
    "Lumisoft Studio'nun yayın öncesi Jelly Chain Rush ürün sayfası için gizlilik bilgileri.",
  alternates: {
    canonical: "/tr/jelly-chain-rush/gizlilik",
    languages: { "tr-TR": "/tr/jelly-chain-rush/gizlilik", "en-US": "/jelly-chain-rush/privacy" },
  },
};

const sections = [
  [
    "Genel",
    "Jelly Chain Rush, Lumisoft Studio tarafından geliştirilmekte olan bir mobil bulmaca oyunudur. Oyun şu anda herkese açık uygulama mağazalarında dağıtılmamaktadır.",
  ],
  [
    "Bu Ürün Sayfası",
    "Bu statik ürün sayfasında hesap sistemi, form, oynanış hizmeti, reklam veya izleme çerezi bulunmaz. Sayfa, oynanış ya da hesap verisi toplamaz.",
  ],
  [
    "Herkese Açık Kullanım",
    "Oyun henüz herkese açık olmadığı için açıklanacak bir üretim uygulaması veri işleme süreci yoktur. Oyunun veri uygulamaları ek bilgi gerektirirse bu politika yayın öncesinde güncellenecektir.",
  ],
  [
    "Hesaplar",
    "Bu web sitesi üzerinden Jelly Chain Rush hesabı veya oturum açma özelliği sunulmaz.",
  ],
  [
    "İletişim",
    "Jelly Chain Rush gizlilik soruları için support@lumisoftstudios.com adresinden bize ulaşabilirsiniz.",
  ],
];

export default function JellyChainRushGizlilikPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Gizlilik Politikası"
        subtitle="Lumisoft Studio tarafından Jelly Chain Rush"
        lastUpdated="23 Haziran 2026"
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
