import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Kullanım Koşulları",
  description:
    "Lumisoft Studio tarafından LumiBaby için Kullanım Koşulları.",
};

export default function KullanimKosullariPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Kullanım Koşulları"
        subtitle="Lumisoft Studio tarafından LumiBaby"
        lastUpdated="16 Mayıs 2026"
        lastUpdatedLabel="Son güncelleme:"
        backHref="/tr/lumibaby"
        backLinkText="← LumiBaby'ye Geri Dön"
        appIcon="/images/lumibaby-icon.png"
      >
        <section>
          <p className="text-slate-200 leading-relaxed">
            Bu Kullanım Koşulları, Lumisoft Studio (&ldquo;biz&rdquo;,
            &ldquo;bize&rdquo; veya &ldquo;bizim&rdquo;) tarafından
            geliştirilen LumiBaby&apos;nin (&ldquo;Uygulama&rdquo;)
            kullanımını düzenler. Uygulamayı indirerek veya kullanarak bu
            Koşulları kabul etmiş olursunuz.
          </p>
        </section>

        {/* Tıbbi Tavsiye Değil */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Tıbbi Tavsiye Değil
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-3">
            <p>
              LumiBaby bir tıbbi cihaz değildir ve tıbbi tavsiye sunmaz.
              Uygulama yalnızca eğlence ve bilgilendirme amaçlıdır. Profesyonel
              tıbbi tavsiye, teşhis veya tedavinin yerini tutmaz.
            </p>
            <p>
              Bebeğinizin sağlığı konusunda her zaman nitelikli bir sağlık
              uzmanına danışın. Acil tıbbi endişeler için derhal bir sağlık
              uzmanına veya acil servise başvurun.
            </p>
          </div>
        </section>

        {/* Kullanıcı Sorumluluğu */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Kullanıcı Sorumluluğu
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-3">
            <p>Şunlardan sorumlusunuz:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                Uygulamanın evinizde uygun ve güvenli şekilde kullanıldığından
                emin olmak.
              </li>
              <li>Hesabınızı ve cihazınızı güvende tutmak.</li>
              <li>
                Hesabınızı yetkisiz kullanıcılarla paylaşmamak.
              </li>
            </ul>
            <p>
              Uygulamayı kullanmak için en az 18 yaşında olmanız veya ebeveyn
              onayına sahip olmanız gerekmektedir.
            </p>
          </div>
        </section>

        {/* Premium Abonelik */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Premium Abonelik
          </h2>
          <div className="text-slate-200 leading-relaxed space-y-4">
            <p>
              LumiBaby, ek içeriklerin kilidini açan ve reklamcılığı kaldıran
              isteğe bağlı bir premium abonelik sunar. Abonelik fiyatlandırması
              ve özellikleri Uygulama içinde görüntülenir.
            </p>
            <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.05] p-4 space-y-3">
              <p className="text-violet-200 text-sm leading-relaxed">
                Abonelik otomatik olarak yenilenir. İstediğiniz zaman App Store
                veya Google Play hesap ayarlarınızdan iptal edebilirsiniz.
              </p>
              <p className="text-violet-200 text-sm leading-relaxed">
                Subscription automatically renews unless canceled. You can
                cancel anytime in your App Store or Google Play account
                settings.
              </p>
            </div>
            <p>
              Abone olarak, iptal edene kadar ödeme yönteminizden tekrarlayan
              ücretlendirmeyi yetkilendirirsiniz.
            </p>
          </div>
        </section>

        {/* İptal */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            İptal
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Aboneliğinizi istediğiniz zaman App Store (iPhone/iPad) veya Google
            Play (Android) hesap ayarlarınızdan iptal edebilirsiniz. İptal,
            mevcut fatura döneminin sonunda geçerli olur. İadeler
            Apple&apos;ın ve Google&apos;ın ilgili iade politikalarına tabidir.
          </p>
        </section>

        {/* Ücretsiz Katman */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Ücretsiz Katman &amp; Reklamcılık
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Ücretsiz bir katman mevcuttur. Ücretsiz kullanıcılar Uygulama
            içinde üçüncü taraf reklamlar görebilir. Premium&apos;a yükseltme
            tüm reklamları kaldırır.
          </p>
        </section>

        {/* Fikri Mülkiyet */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Fikri Mülkiyet
          </h2>
          <p className="text-slate-200 leading-relaxed">
            LumiBaby içindeki tüm içerikler &mdash; ninniler, sesler, hikayeler
            ve Uygulamanın kendisi dahil olmak üzere &mdash; Lumisoft
            Studio&apos;nun veya lisans verenlerinin mülkiyetindedir ve geçerli
            fikri mülkiyet yasalarıyla korunmaktadır. Uygulamadaki içerikleri
            çoğaltamaz, dağıtamaz veya türev eserler oluşturamazsınız.
          </p>
        </section>

        {/* Sorumluluk Sınırlaması */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Sorumluluk Sınırlaması
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Yasanın izin verdiği azami ölçüde, Lumisoft Studio, Uygulamayı
            kullanımınızdan kaynaklanan dolaylı, tesadüfi, özel veya sonuç
            olarak ortaya çıkan zararlardan sorumlu tutulamaz. Uygulama,
            herhangi bir garanti verilmeksizin &ldquo;olduğu gibi&rdquo;
            sunulmaktadır.
          </p>
        </section>

        {/* Değişiklikler */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Bu Koşullardaki Değişiklikler
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Bu Koşulları zaman zaman güncelleyebiliriz. Değişikliklerden sonra
            Uygulamayı kullanmaya devam etmek, güncellenmiş Koşulları kabul
            etmek anlamına gelir.
          </p>
        </section>

        {/* İletişim */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            İletişim
          </h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            Bu Koşullar hakkındaki sorularınız için bize ulaşın:
          </p>
          <a
            href="mailto:support@lumisoftstudios.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:text-violet-200 text-sm transition-colors"
          >
            support@lumisoftstudios.com
          </a>
        </section>
      </LegalPageLayout>
      <Footer lang="tr" />
    </>
  );
}
