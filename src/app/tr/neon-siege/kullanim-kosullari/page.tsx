import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Neon Siege Kullanım Koşulları",
  description: "Lumisoft Studio tarafından geliştirilen Neon Siege için kullanım koşulları.",
};

export default function NeonSiegeKullanimKosullariPage() {
  return (
    <>
      <Header />
      <LegalPageLayout title="Kullanım Koşulları" subtitle="Neon Siege by Lumisoft Studio" lastUpdated="28 Mayıs 2026" lastUpdatedLabel="Son güncelleme:" backHref="/tr/neon-siege" backLabel="Neon Siege" backLinkText="← Neon Siege'e dön">
        {[
          ["Eğlence Oyunu", "Neon Siege bir eğlence oyunudur ve kumar uygulaması değildir."],
          ["Sanal Öğeler", "Sanal elmaslar, öğeler ve güçlendirmelerin gerçek dünyada parasal değeri yoktur."],
          ["Satın Alımlar", "Satın alımlar kullanıma sunulduğunda Google Play veya App Store tarafından işlenir."],
          ["Reklamlar", "Ödüllü reklamlar isteğe bağlıdır. Zorunlu reklamlar seviyeler arasında görünebilir."],
          ["Zorunlu Reklamları Kaldırma", "Bu satın alım seviyeler arasındaki zorunlu reklamları kaldırır; isteğe bağlı ödüllü reklamları kaldırmaz."],
          ["Platform Kuralları", "Google Play, App Store ve cihaz platformunuzun kurallarına uymalısınız."],
          ["Kesintisiz Hizmet Garantisi Yoktur", "Uygulamanın kesintisiz veya hatasız çalışacağını garanti etmiyoruz."],
          ["İletişim", "Sorularınız için support@lumisoftstudios.com adresinden bize ulaşabilirsiniz."],
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
