import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Neon Siege Gizlilik Politikası",
  description: "Lumisoft Studio tarafından geliştirilen Neon Siege için gizlilik politikası.",
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Genel",
    body: (
      <>
        Neon Siege, Lumisoft Studio tarafından geliştirilen bir eğlence oyunudur.
        Play Console ve mağaza kullanımı için İngilizce gizlilik politikası{" "}
        /neon-siege/privacy-policy adresindedir.
      </>
    ),
  },
  {
    title: "Yerel Oyun İlerlemesi",
    body:
      "Oyun ilerlemesi, ayarlar, skorlar, başarımlar, sanal oyun içi bakiyeler ve benzer oynanış verileri cihazınızda yerel olarak saklanabilir.",
  },
  {
    title: "Hesap",
    body:
      "Neon Siege kullanımı için hesap oluşturmanız veya giriş yapmanız gerekmez.",
  },
  {
    title: "Reklamlar",
    body:
      "Uygulama Google AdMob kullanabilir. Reklam türleri banner reklam, geçiş reklamı ve ödüllü reklam içerebilir. Ödüllü reklamlar isteğe bağlıdır.",
  },
  {
    title: "Satın Alımlar",
    body:
      "Uygulama Google Play Billing veya App Store satın alımlarını kullanabilir. Satın alma işlemleri ilgili uygulama mağazası tarafından işlenir. Lumisoft Studio, tam ödeme kartı bilgilerinizi görmez veya saklamaz. RevenueCat, satın alımları ve satın alma haklarını yönetmek için kullanılabilir.",
  },
  {
    title: "Remove Forced Ads",
    body:
      "Remove Forced Ads satın alımı, bölümler arasındaki zorunlu reklamları kaldırmak için kullanılabilir. Ödüllü reklamlar isteğe bağlı olarak kalır.",
  },
  {
    title: "Hassas Veriler",
    body:
      "Uygulama sağlık, resmi kimlik, devlet bilgileri veya benzeri hassas kişisel verileri bilinçli olarak toplamaz. Uygulama bir finans uygulaması değildir.",
  },
  {
    title: "İletişim",
    body: (
      <>
        Gizlilik soruları veya destek talepleri için{" "}
        <a
          href="mailto:support@lumisoftstudios.com"
          className="text-violet-400 hover:text-violet-300"
        >
          support@lumisoftstudios.com
        </a>{" "}
        adresinden bize ulaşabilirsiniz.
      </>
    ),
  },
];

export default function NeonSiegeGizlilikPage() {
  return (
    <>
      <Header />
      <LegalPageLayout title="Gizlilik Politikası" subtitle="Neon Siege by Lumisoft Studio" lastUpdated="28 Mayıs 2026" lastUpdatedLabel="Son güncelleme:" backHref="/tr/neon-siege" backLabel="Neon Siege" backLinkText="← Neon Siege'e dön">
        {sections.map(({ title, body }) => (
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
