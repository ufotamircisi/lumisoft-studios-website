import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Kullanım Koşulları",
  description:
    "Lumisoft Studio'nun yayın öncesi Jelly Chain Rush ürün sayfası için kullanım koşulları.",
  alternates: {
    canonical: "/tr/jelly-chain-rush/kullanim-kosullari",
    languages: { "tr-TR": "/tr/jelly-chain-rush/kullanim-kosullari", "en-US": "/jelly-chain-rush/terms" },
  },
};

const sections = [
  [
    "Ürün Durumu",
    "Jelly Chain Rush, Lumisoft Studio tarafından geliştirilmekte olan bir mobil bulmaca oyunudur. Bu web sitesi üzerinden herkese açık indirme, satın alma veya oyun lisansı sunulmaz.",
  ],
  [
    "Ürün Bilgileri",
    "Ürün sayfası oyunun mevcut yönünü açıklar. Özellikler ve yayın takvimi geliştirme sırasında değişebilir; herhangi bir yayın tarihi taahhüt edilmez.",
  ],
  [
    "Mağaza Erişimi Yok",
    "Oyun herkese açık hale gelirse Lumisoft Studio resmi mağaza bağlantılarını ürün sayfasında yayınlayacaktır.",
  ],
  [
    "Fikri Mülkiyet",
    "Jelly Chain Rush, ilgili görseller, adlar ve oyun içeriği Lumisoft Studio'ya veya lisans verenlerine aittir.",
  ],
  [
    "İletişim",
    "Bu koşullar hakkındaki sorularınız için support@lumisoftstudios.com adresinden bize ulaşabilirsiniz.",
  ],
];

export default function JellyChainRushKullanimKosullariPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Kullanım Koşulları"
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
