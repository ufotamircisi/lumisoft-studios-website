import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Destek",
  description:
    "LumiBaby ile ilgili yardım alın. support@lumisoftstudios.com adresinden bize ulaşın.",
};

export default function DestekPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="LumiBaby Desteği"
        subtitle="Yardım etmek için buradayız. İstediğiniz zaman ulaşın."
        lastUpdated="Mayıs 2026"
        lastUpdatedLabel="Son güncelleme:"
        backHref="/tr/lumibaby"
        backLinkText="← LumiBaby'ye Geri Dön"
        appIcon="/images/lumibaby-icon.png"
      >
        {/* İletişim */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            İletişim
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-4">
            <p>
              LumiBaby ile ilgili sorularınız, sorunlarınız veya geri
              bildirimleriniz için lütfen bize e-posta gönderin:
            </p>
            <div>
              <a
                href="mailto:support@lumisoftstudios.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors"
              >
                support@lumisoftstudios.com
              </a>
            </div>
            <p>
              Genellikle 1&ndash;2 iş günü içinde yanıt veriyoruz. Bize
              ulaşırken lütfen cihaz türünüzü ve sorunu kısaca açıklayın;
              böylece size mümkün olan en kısa sürede yardımcı olabiliriz.
            </p>
          </div>
        </section>

        {/* Sık Sorulan Sorular */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-white font-medium mb-1">
                Aboneliğimi nasıl iptal ederim?
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                Abonelikler, App Store (iPhone/iPad) veya Google Play (Android)
                hesap ayarlarınızdan iptal edilebilir. Hesap menünüzde
                &ldquo;Abonelikler&rdquo; bölümünü arayın.
              </p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                LumiBaby mikrofonuma erişiyor mu?
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                LumiBaby, yalnızca ağlama algılama özelliği için mikrofon
                erişimi ister. Bu izni istediğiniz zaman cihaz ayarlarınızdan
                etkinleştirebilir veya devre dışı bırakabilirsiniz.
              </p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Ebeveyn sesi kayıtları çevrimiçi mi saklanıyor?
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                Ebeveyn sesi kayıtları cihazınızda yerel olarak saklanır. Siz
                açıkça paylaşmayı veya dışa aktarmayı seçmediğiniz sürece
                hiçbir sunucuya yüklenmezler.
              </p>
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Uygulama neden reklam gösteriyor?
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                Ücretsiz kullanıcılar reklam görebilir. Premium aboneliğe
                yükseltme tüm reklamları kaldırır ve tam içerik kitaplığının
                kilidini açar.
              </p>
            </div>
          </div>
        </section>

        {/* Tıbbi Uyarı */}
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.05] p-5">
          <p className="text-amber-300 text-sm font-semibold mb-2">
            ⚠ Tıbbi Uyarı
          </p>
          <p className="text-slate-200 text-sm leading-relaxed">
            LumiBaby bir tıbbi cihaz değildir ve herhangi bir tıbbi durumu
            teşhis etmek, tedavi etmek veya önlemek amacıyla tasarlanmamıştır.
            Bebeğinizin sağlığına ilişkin acil tıbbi endişeleriniz için lütfen
            derhal nitelikli bir sağlık uzmanına veya acil servise başvurun.
          </p>
        </div>
      </LegalPageLayout>
      <Footer lang="tr" />
    </>
  );
}
