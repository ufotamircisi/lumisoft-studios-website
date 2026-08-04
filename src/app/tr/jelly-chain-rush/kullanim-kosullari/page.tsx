import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Jelly Chain Rush Kullanım Koşulları",
  description:
    "Lumisoft Studio'nun App Store ve Google Play'de yayında olan Jelly Chain Rush: Match 3 oyunu için kullanım koşulları.",
  alternates: {
    canonical: "/tr/jelly-chain-rush/kullanim-kosullari",
    languages: { "tr-TR": "/tr/jelly-chain-rush/kullanim-kosullari", "en-US": "/jelly-chain-rush/terms" },
  },
};

const sections = [
  [
    "Eğlence Oyunu",
    "Jelly Chain Rush: Match 3, Lumisoft Studio tarafından sunulan ve App Store ile Google Play'de yayında olan bir eğlence oyunudur. Uygulamayı indirerek veya kullanarak bu Kullanım Koşullarını kabul etmiş olursunuz.",
  ],
  [
    "Sanal Öğeler",
    "Sanal güçlendiriciler, öğeler ve benzeri oyun içi içeriklerin gerçek dünyada parasal değeri yoktur ve Uygulama dışında nakde veya gerçek dünya mal/hizmetlerine dönüştürülemez.",
  ],
  [
    "Satın Almalar",
    "Sunulduğunda, uygulama içi satın almalar Google Play veya App Store üzerinden işlenir. İade ve faturalandırma konuları ilgili mağazanın kurallarına tabidir.",
  ],
  [
    "Reklamlar",
    "Uygulama ödüllü, geçiş veya banner reklamlar gösterebilir. Ödüllü reklamlar isteğe bağlıdır.",
  ],
  [
    "Platform Kuralları",
    "Uygulamayı kullanırken Google Play, App Store ve cihaz platformunuzun kural, koşul ve politikalarına uymanız gerekir.",
  ],
  [
    "Fikri Mülkiyet",
    "Jelly Chain Rush, ilgili görseller, adlar ve oyun içeriği Lumisoft Studio'ya veya lisans verenlerine aittir.",
  ],
  [
    "Hizmetin Kullanılabilirliği",
    "Kesintisiz, hatasız veya sürekli kullanılabilir bir hizmet garanti etmiyoruz. Özellikler zaman içinde değişebilir.",
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
