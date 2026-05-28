import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Neon Siege Gizlilik Politikası",
  description: "Lumisoft Studio tarafından geliştirilen Neon Siege için gizlilik politikası.",
};

export default function NeonSiegeGizlilikPage() {
  return (
    <>
      <Header />
      <LegalPageLayout title="Gizlilik Politikası" subtitle="Neon Siege by Lumisoft Studio" lastUpdated="28 Mayıs 2026" lastUpdatedLabel="Son güncelleme:" backHref="/tr/neon-siege" backLabel="Neon Siege" backLinkText="← Neon Siege'e dön">
        {[
          ["Genel", "Neon Siege, Lumisoft Studio tarafından geliştirilen bir eğlence oyunudur. Play Console ve mağaza kullanımı için İngilizce gizlilik politikası /neon-siege/privacy-policy adresindedir."],
          ["Yerel Oyun İlerlemesi", "Oyun ilerlemesi, ayarlar, skorlar, başarımlar ve benzer oynanış verileri cihazınızda yerel olarak saklanabilir."],
          ["Hesap", "Neon Siege kullanımı için hesap girişi gerekmez."],
          ["Reklamlar", "Uygulama Google AdMob kullanabilir. Reklam türleri ödüllü reklam, geçiş reklamı ve banner reklam içerebilir. Ödüllü reklamlar isteğe bağlıdır."],
          ["Satın Alımlar", "Uygulama Google Play Billing veya App Store satın alımlarını kullanabilir. RevenueCat satın alımları ve hakları yönetmek için kullanılabilir."],
          ["Hassas Veriler", "Uygulama sağlık, finansal, resmi kimlik veya diğer hassas kişisel verileri bilinçli olarak toplamaz."],
          ["İletişim", "Gizlilik soruları için support@lumisoftstudios.com adresinden bize ulaşabilirsiniz."],
        ].map(([title, body]) => (
          <section key={title}>
            <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">{title}</h2>
            <p className="text-slate-200 leading-relaxed">{body}</p>
          </section>
        ))}
      </LegalPageLayout>
      <Footer lang="tr" />
    </>
  );
}
