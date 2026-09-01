import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Gizlilik Politikası",
  description:
    "LumiBaby kamera, mikrofon, bebek izleme, ses kayıtları, bildirimler ve abonelikler için Gizlilik Politikası.",
};

const sections = [
  {
    title: "Bebek Bilgileri ve Kişiselleştirme",
    paragraphs: [
      "Uygulamayı kişiselleştirmek için bebeğin adı ve doğum tarihi gibi bilgileri ekleyebilirsiniz. LumiBaby ayrıca kişiselleştirilmiş kartlar ve uyku desteği sunmak için uyku oturumlarını, uyanmaları, ağlama ve algılama geçmişini, rutinleri, hatırlatıcıları, raporları ve izleme tercihlerini kullanabilir.",
      "Bu bilgiler bir ebeveyn veya bakım veren tarafından girilir ve yönetilir. LumiBaby, bir çocuğun bağımsız olarak kullanması için tasarlanmamıştır.",
    ],
  },
  {
    title: "Kamera İzni ve Görüntülü Bebek Monitörü",
    paragraphs: [
      "LumiBaby, cihazları eşleştirmek için QR kod taradığınızda veya Görüntülü Bebek Monitörünü başlattığınızda kamera erişimi isteyebilir. İzin yalnızca kameraya ihtiyaç duyan bir özellik kullanıldığında istenir ve cihaz ayarlarından kaldırılabilir.",
      "Etkin bir Görüntülü Bebek Monitörü oturumu sırasında canlı görüntü eşleştirilmiş cihazlar arasında aktarılabilir. Bu özellik canlı görüntü sunar ve video kayıt özelliği olarak sunulmaz. LumiBaby canlı görüntüyü Lumisoft Studio sunucularında video arşivi olarak saklamaz.",
    ],
  },
  {
    title: "Mikrofon İzni ve Ses",
    paragraphs: [
      "LumiBaby; Sesli Bebek Monitörü, Görüntülü Bebek Monitöründeki ses, ağlama algılama, Basılı Tutarak Konuş üzerinden sesli iletişim, Anne Sesi kaydı ve Anne Ön Sesi kaydı için mikrofon erişimi isteyebilir. İzin, mikrofona ihtiyaç duyan bir özelliği kullandığınızda istenir ve cihaz ayarlarından kaldırılabilir.",
      "Etkin bir izleme veya Basılı Tutarak Konuş oturumu sırasında canlı ses eşleştirilmiş cihazlar arasında aktarılabilir. Ağlama algılama, desteklenen izleme özelliği etkin olarak dinlerken ağlamayı belirlemeye çalışmak için mikrofon girişini analiz eder.",
    ],
  },
  {
    title: "Anne Sesi ve Anne Ön Sesi Kayıtları",
    paragraphs: [
      "Anne Sesi veya Anne Ön Sesi kaydı yalnızca kaydı Uygulama içinde açıkça başlattığınızda yapılır. Mevcut LumiBaby kaynakları bu kayıtların cihazınızda yerel olarak saklandığını belirtir.",
      "Anne Sesi ve Anne Ön Sesi kayıtları, siz açıkça paylaşmayı veya dışa aktarmayı seçmediğiniz sürece cihazda kalır.",
    ],
  },
  {
    title: "Canlı İzleme ve Cihaz Eşleştirme",
    paragraphs: [
      "Etkin bir izleme oturumu sırasında eşleştirdiğiniz cihazlar arasında ses veya görüntü aktarılabilir. İlgili kamera veya mikrofon izinlerini vermeniz ve Uygulamayı desteklenen etkin izleme durumunda tutmanız gerekir.",
      "İzleme özelliğinin kullanılabilirliği internet bağlantısına, cihaz ayarlarına, izinlere, pil kısıtlamalarına ve ilgili LumiBaby ekranının etkin olup olmadığına bağlı olabilir. LumiBaby, Uygulama kapalıyken sürekli arka plan kamera izlemesi veya görüntülü izleme sözü vermez.",
    ],
  },
  {
    title: "Ağlama Algılama ve Otomatik Sakinleştirme",
    paragraphs: [
      "Ağlama algılamayı etkinleştirirseniz LumiBaby bebeğinizin ağlamasını belirlemeye çalışabilir. Ağlama algılandığında Uygulama, seçtiğiniz Anne Sesi, Anne Ön Sesi ve ardından seçilen ses, ninni, beyaz gürültü veya kolik ya da sakinleştirici ses seçeneğini otomatik olarak başlatabilir.",
      "Bebek sessizleştikten sonra seçilen ses yaklaşık bir dakikaya kadar devam edebilir. Ardından çalma durur ve etkin izleme yeniden dinleme durumuna döner. Yeni bir ağlama algılanırsa döngü yeniden başlayabilir. Mesafe, arka plan gürültüsü, mikrofon kalitesi, cihaz konumu ve bağlantı algılamayı etkileyebilir. Bu nedenle her ağlama algılanmayabilir.",
    ],
  },
  {
    title: "Ebeveyn Bildirimleri",
    paragraphs: [
      "LumiBaby, eşleştirilmiş ebeveyn cihazına ağlama algılama ve ilgili izleme olayları hakkında bildirim gönderebilir. Bir uyarının ulaşması cihaz bildirim izinlerine, internet bağlantısına, telefon ayarlarına ve pil kısıtlamalarına bağlı olabilir. Bildirimler farkındalığı destekler ancak doğrudan gözetimin yerini almaz.",
    ],
  },
  {
    title: "Yerel Saklama, Saklama Süresi ve Silme",
    paragraphs: [
      "LumiBaby; bebek profili bilgilerini, Anne Sesi ve Anne Ön Sesi kayıtlarını, tercihleri, içerik ayarlarını, rutinleri ve uyku ya da rapor verilerini cihazınızda yerel olarak saklar. Canlı görüntü, LumiBaby sunucularında video arşivi olarak tutulmaz. Bir uyarı veya izleme özelliği sunmak için gerektiğinde izleme olayı bilgileri eşleştirilmiş cihaza gönderilebilir.",
      "Yerel bilgileri Uygulamada sunulan kontrollerle silebilirsiniz. Uygulamayı kaldırmak da işletim sisteminizin yedekleme ve geri yükleme davranışına bağlı olarak yerel verileri kaldırabilir. Lumisoft Studio kontrolündeki bilgilere ilişkin silme talebi için aşağıdaki adresten bize ulaşabilirsiniz.",
    ],
  },
  {
    title: "Satın Almalar ve Abonelikler",
    paragraphs: [
      "LumiBaby Premium haftalık ve yıllık abonelik seçenekleriyle sunulur. iOS satın almalarını App Store üzerinden Apple, Android satın almalarını Google Play üzerinden Google işler. Lumisoft Studio kredi kartı bilgilerinizi doğrudan toplamaz veya saklamaz.",
      "RevenueCat, satın alma durumunu ve Premium erişim hakkını yönetmek için kullanılabilir. Bu amaçla ilgili mağazanın sağladığı satın alma ve abonelik durumunu işler. Apple, Google ve RevenueCat bilgileri kendi gizlilik politikaları kapsamında işler.",
    ],
  },
  {
    title: "Reklamcılık",
    paragraphs: [
      "Ücretsiz kullanıcılar üçüncü taraf reklam hizmetlerinin sunduğu reklamları görebilir. Bu hizmetler cihaz ayarlarınıza, onay tercihlerinize ve kullanılan hizmete bağlı olarak reklam sunmak veya ölçmek için cihaz tanımlayıcılarını, reklam verilerini ve uygulama kullanım verilerini işleyebilir. Premium aboneler LumiBaby'de reklam görmez.",
    ],
  },
  {
    title: "Çocukların Gizliliği ve Güvenlik",
    paragraphs: [
      "LumiBaby ebeveynler ve bakım verenler için tasarlanmıştır. Bebek profili, uyku ve izleme olayı bilgileri Uygulamayı kullanan yetişkin tarafından sağlanır ve yönetilir. 13 yaşın altındaki çocuklardan doğrudan kişisel bilgi topladığımızı bilerek hareket etmeyiz.",
      "LumiBaby bir bebek izleme ve uyku desteği aracıdır. Tıbbi cihaz, acil durum izleme hizmeti veya uygun yetişkin gözetiminin yerine geçen bir sistem değildir. Görüntülü izleme, sesli izleme, ağlama algılama ve bildirimler bebeğin güvenliğini garanti etmez.",
    ],
  },
  {
    title: "Bu Politikadaki Değişiklikler",
    paragraphs: [
      "Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli bir değişiklik yaparsak Uygulama üzerinden bildirim sunar veya bu sayfanın üst kısmındaki tarihi güncelleriz.",
    ],
  },
];

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Gizlilik Politikası"
        subtitle="Lumisoft Studio tarafından LumiBaby"
        lastUpdated="2 Eylül 2026"
        lastUpdatedLabel="Son güncelleme:"
        backHref="/tr/lumibaby"
        backLinkText="← LumiBaby'ye Geri Dön"
        appIcon="/images/web/lumibaby-icon.webp"
      >
        <section>
          <p className="text-slate-200 leading-relaxed">
            LumiBaby (&ldquo;Uygulama&rdquo;), Lumisoft Studio tarafından
            geliştirilmiştir. Bu Gizlilik Politikası, Uygulamanın bebek izleme,
            uyku desteği, kişiselleştirme, bildirim ve abonelik özelliklerini
            kullandığınızda bilgileri ve cihaz izinlerini nasıl kullandığını
            açıklar.
          </p>
        </section>

        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
              {section.title}
            </h2>
            <div className="text-slate-200 leading-relaxed space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-violet-500/15">
            İletişim
          </h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            LumiBaby ile ilgili gizlilik soruları veya silme talepleri için bize
            ulaşın:
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
