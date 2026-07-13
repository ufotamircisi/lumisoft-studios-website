import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Gizlilik Politikası",
  description:
    "Lumisoft Studio tarafından LumiBaby için Gizlilik Politikası. Verilerinizi nasıl işlediğimizi öğrenin.",
};

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Gizlilik Politikası"
        subtitle="Lumisoft Studio tarafından LumiBaby"
        lastUpdated="16 Mayıs 2026"
        lastUpdatedLabel="Son güncelleme:"
        backHref="/tr/lumibaby"
        backLinkText="← LumiBaby'ye Geri Dön"
        appIcon="/images/lumibaby-icon.png"
      >
        <section>
          <p className="text-slate-200 leading-relaxed">
            LumiBaby (&ldquo;Uygulama&rdquo;), Lumisoft Studio tarafından
            geliştirilmiştir. Gizliliğiniz bizim için önemlidir. Bu politika,
            Uygulamanın hangi bilgileri toplayabileceğini veya
            kullanabileceğini ve bunları nasıl işlediğimizi açıklar.
          </p>
        </section>

        {/* Bebek Profili */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Bebek Profil Bilgileri
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Uygulama içinde bir bebek profili oluşturabilirsiniz (örneğin bir
            isim veya doğum tarihi). Bu bilgiler cihazınızda yerel olarak
            saklanır ve sunucularımıza iletilmez.
          </p>
        </section>

        {/* Mikrofon */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Mikrofon İzni: Ağlama Algılama
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Uygulama, ağlama algılama özelliğini etkinleştirmek için
            cihazınızın mikrofonuna erişim isteyebilir. Mikrofon verileri
            cihazınızda yerel olarak işlenir ve sunucularımıza iletilmez.
            Mikrofon iznini istediğiniz zaman cihaz ayarlarınızdan iptal
            edebilirsiniz.
          </p>
        </section>

        {/* Ebeveyn Sesi */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Ebeveyn Sesi &amp; Ses Kayıtları
          </h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            Uygulama içinde kendi sesinizi kaydederek bebeğiniz için
            kişiselleştirilmiş ses oluşturabilirsiniz. Bu kayıtlar cihazınızda
            yerel olarak saklanır.
          </p>
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.05] p-4">
            <p className="text-violet-200 text-sm leading-relaxed">
              <strong className="text-violet-100">Önemli:</strong> Ebeveyn sesi
              ve ses kayıtlarının, siz açıkça paylaşmadığınız veya dışa
              aktarmadığınız sürece kullanıcının cihazında kalması
              amaçlanmaktadır.
            </p>
          </div>
        </section>

        {/* Yerel Depolama */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Yerel Depolama
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Uygulama, kişiselleştirilmiş bir deneyim sunmak için tercihleri,
            içerik ayarlarını ve diğer verileri cihazınızda yerel olarak
            saklar. Bu veriler cihazınızda kalır ve sunucularımıza gönderilmez.
          </p>
        </section>

        {/* Satın Almalar */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Satın Almalar &amp; Abonelikler
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Abonelikler ve uygulama içi satın almalar, RevenueCat&apos;in ödeme
            platformu kullanılarak Apple (App Store) veya Google (Google Play)
            tarafından işlenir. Lumisoft Studio ödeme bilgilerinizi toplamaz
            veya saklamaz. Ödeme verilerini nasıl işlediklerine dair ayrıntılar
            için lütfen Apple ve Google&apos;ın gizlilik politikalarına bakın.
          </p>
        </section>

        {/* Reklamcılık */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Reklamcılık
          </h2>
          <p className="text-slate-200 leading-relaxed">
            LumiBaby&apos;nin ücretsiz kullanıcıları, üçüncü taraf reklam
            ağları tarafından sunulan reklamlar görebilir. Bu ağlar, ilgili
            reklamlar sunmak için kişisel olmayan tanımlayıcı bilgileri
            kullanabilir. Premium aboneler reklam görmez.
          </p>
        </section>

        {/* Çocukların Gizliliği */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Çocukların Gizliliği
          </h2>
          <p className="text-slate-200 leading-relaxed">
            LumiBaby, ebeveynler ve bakıcılar tarafından kullanılmak üzere
            tasarlanmıştır. Uygulama, 13 yaşın altındaki çocuklardan bilerek
            kişisel bilgi toplamaz. Bir çocuğun kişisel bilgi verdiğine
            inanıyorsanız, lütfen{" "}
            <a
              href="mailto:support@lumisoftstudios.com"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              support@lumisoftstudios.com
            </a>{" "}
            adresinden bize ulaşın.
          </p>
        </section>

        {/* Değişiklikler */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            Bu Politikadaki Değişiklikler
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli
            değişiklikler yaparsak, Uygulama aracılığıyla veya bu politikanın
            üst kısmındaki tarihi güncelleyerek sizi bilgilendireceğiz.
          </p>
        </section>

        {/* İletişim */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            İletişim
          </h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            Bu Gizlilik Politikası hakkındaki sorularınız için bize ulaşın:
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
