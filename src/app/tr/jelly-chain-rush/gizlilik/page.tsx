import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Gizlilik Politikası",
  description:
    "Lumisoft Studio tarafından geliştirilen Jelly Chain Rush için gizlilik politikası yer tutucu sayfası.",
};

const sections = [
  [
    "Genel",
    "Jelly Chain Rush, Lumisoft Studio tarafından geliştirilen bir mobil bulmaca oyunudur. Bu sayfa, yayın öncesi web sitesi için hazırlanmış sade bir gizlilik politikası yer tutucusudur.",
  ],
  [
    "Mevcut Durum",
    "Oyun henüz herkese açık olarak yayınlanmamıştır. Gerekirse tam politika ayrıntıları mağaza yayını öncesinde netleştirilecektir.",
  ],
  [
    "Oyun Verileri",
    "Yayınlanan oyun; oynanış ilerlemesi, ayarlar, bölüm ilerlemesi ve benzer bulmaca oyunu verilerini cihazınızda veya uygulamanın kullandığı platform hizmetlerinde saklayabilir.",
  ],
  [
    "Hesaplar",
    "Bu web sitesinde Jelly Chain Rush için herkese açık bir hesap sistemi bulunmamaktadır.",
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
