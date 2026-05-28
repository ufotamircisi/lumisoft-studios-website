import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Neon Siege Destek",
  description: "Neon Siege destek sayfası.",
};

const sections = [
  ["Satın alma desteği", "Sipariş platformunuzu, satın alma tarihini ve kısa bir sorun açıklamasını ekleyin. Kart bilgisi göndermeyin."],
  ["Reklam desteği", "Sorunun ödüllü reklam, geçiş reklamı veya banner reklam sırasında mı olduğunu ve reklamdan sonra ne yaşandığını belirtin."],
  ["Oynanış desteği", "Seviye, oyun modu ve ne olmasını beklediğiniz bilgisini ekleyin."],
  ["Satın alımları geri yükleme", "Uygulamada mevcut olduğunda satın alımları geri yükleme seçeneğini kullanın. Çalışmazsa cihaz ve mağaza platformunuzla bize yazın."],
];

export default function NeonSiegeDestekPage() {
  return (
    <>
      <Header />
      <LegalPageLayout title="Neon Siege Destek" subtitle="Destek için support@lumisoftstudios.com adresinden bize ulaşın." lastUpdated="Mayıs 2026" lastUpdatedLabel="Son güncelleme:" backHref="/tr/neon-siege" backLabel="Neon Siege" backLinkText="← Neon Siege'e dön">
        <section className="text-slate-200 leading-relaxed space-y-4">
          <p>Lütfen uygulama adını, cihaz modelini, işletim sistemi sürümünü ve sorunun kısa açıklamasını ekleyin.</p>
          <a href="mailto:support@lumisoftstudios.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors">
            support@lumisoftstudios.com
          </a>
        </section>

        {sections.map(([title, body]) => (
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
