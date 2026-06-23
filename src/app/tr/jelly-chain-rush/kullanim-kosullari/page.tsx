import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Kullanım Koşulları",
  description:
    "Lumisoft Studio tarafından geliştirilen Jelly Chain Rush için kullanım koşulları yer tutucu sayfası.",
};

const sections = [
  [
    "Genel",
    "Bu Kullanım Koşulları, Lumisoft Studio tarafından geliştirilmekte olan Jelly Chain Rush için sade bir yayın öncesi yer tutucu metindir.",
  ],
  [
    "Yayın Öncesi Bilgiler",
    "Web sitesindeki açıklamalar, özellik adları ve yayın takvimi oyun geliştirilirken değişebilir.",
  ],
  [
    "Mağaza Yayını Henüz Yok",
    "Jelly Chain Rush şu anda geliştirme aşamasında. Oyun hazır olduğunda mağaza bağlantıları eklenecek.",
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
