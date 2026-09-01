import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "LumiBaby Kullanım Koşulları",
  description:
    "LumiBaby bebek izleme, uyku desteği ve Premium abonelikleri için Kullanım Koşulları.",
};

const sections = [
  {
    title: "Bebek İzleme ve Uyku Desteği",
    paragraphs: [
      "LumiBaby; Görüntülü Bebek Monitörü, Sesli Bebek Monitörü, QR ile cihaz eşleştirme, Basılı Tutarak Konuş, ağlama algılama, otomatik sakinleştirme, Anne Sesi ve Anne Ön Sesi kayıtları, sakinleştirici sesler, rutinler, raporlar ve bildirimler gibi bebek izleme ve uyku desteği özellikleri sunabilir.",
      "Seçtiğiniz özellikler için gereken kamera, mikrofon ve bildirim izinlerini vermeniz gerekir. Canlı ses veya görüntü yalnızca desteklenen etkin izleme koşullarında kullanılabilir ve eşleştirilmiş cihazlara, internet bağlantısına, işletim sistemi kısıtlamalarına, izinlere ve pil ayarlarına bağlı olabilir.",
    ],
  },
  {
    title: "Güvenlik ve Tıbbi Sorumluluk Reddi",
    paragraphs: [
      "LumiBaby bir bebek izleme ve uyku desteği aracı olarak tasarlanmıştır. Tıbbi cihaz, acil durum izleme hizmeti, profesyonel tıbbi tavsiye, teşhis veya tedavi ya da uygun yetişkin gözetiminin yerine geçen bir sistem değildir.",
      "Görüntülü izleme, sesli izleme, ağlama algılama, otomatik sakinleştirme ve bildirimler gecikebilir, kesilebilir veya hatalı olabilir. Her ağlamanın veya olayın algılanacağını, her uyarının ulaşacağını ya da bebeğin güvenliğini garanti etmez. Acil sağlık veya güvenlik endişelerinde uygun bir sağlık uzmanına veya acil yardım hizmetine başvurun.",
    ],
  },
  {
    title: "Sorumluluklarınız",
    paragraphs: [
      "LumiBaby'yi hukuka uygun ve güvenli şekilde kullanmak, doğrudan yetişkin gözetimini sürdürmek, eşleştirilmiş cihazları ve QR eşleştirme bilgilerini korumak ve izleme oturumlarına yetkisiz erişimi önlemek sizin sorumluluğunuzdadır.",
      "Yalnızca hukuken yetkili olduğunuz ve gereken onayları aldığınız yerlerde izleme veya kayıt yapabilirsiniz. LumiBaby'yi başka bir kişiyi izinsiz izlemek, özel hayatı ihlal etmek, birini rahatsız etmek ya da Uygulamaya veya hizmetlerine müdahale etmek için kullanamazsınız. Uygulamayı kullanmak için en az 18 yaşında olmanız veya ebeveyn ya da yasal vasinizin iznine sahip olmanız gerekir.",
    ],
  },
  {
    title: "LumiBaby Premium",
    paragraphs: [
      "LumiBaby isteğe bağlı haftalık ve yıllık Premium abonelikler sunar. Size sunulan özellikler, güncel fiyat, faturalandırma dönemi ve varsa tanıtım teklifi satın alma işleminden önce Uygulamada gösterilir.",
      "iOS aboneliklerini App Store üzerinden Apple, Android aboneliklerini Google Play üzerinden Google işler. LumiBaby kredi kartınızdan doğrudan ücret çekmez. RevenueCat, satın alma durumunu ve Premium erişim hakkını yönetmek için kullanılabilir.",
    ],
  },
  {
    title: "Otomatik Yenileme ve İptal",
    paragraphs: [
      "Abonelikler, ilgili App Store veya Google Play koşullarına göre iptal edilmediği sürece otomatik olarak yenilenir. Mağaza hesabınız, ilgili mağazanın belirttiği süre içinde yenileme için ücretlendirilebilir.",
      "Aboneliğinizi Apple hesabınızdan veya Google Play hesabınızdan yönetebilir ya da iptal edebilirsiniz. İptal normalde mevcut ücretli dönemin sonunda geçerli olur. İade uygunluğu ve faturalandırma itirazları ilgili mağazanın kurallarına göre ele alınır.",
    ],
  },
  {
    title: "Ücretsiz Denemeler ve Tanıtım Teklifleri",
    paragraphs: [
      "İlgili uygulama mağazası tarafından sunulduğunda uygun kullanıcılar için ücretsiz deneme bulunabilir. Denemenin sunulması, süresi, uygunluk şartları, ücretli aboneliğe dönüşmesi ve iptal zamanı App Store veya Google Play'de gösterilen teklif koşullarına tabidir. Her kullanıcıya ücretsiz deneme sözü verilmez.",
    ],
  },
  {
    title: "Satın Almaları Geri Yükleme",
    paragraphs: [
      "Desteklenen Apple veya Google satın almaları, LumiBaby'nin geri yükleme akışı ve ilgili mağaza mekanizmaları kullanılarak geri yüklenebilir veya yenilenebilir. İlk satın almayla ilişkili mağaza hesabını kullanmanız gerekir. Geri yükleme, mağazanın etkin satın alma veya erişim hakkını doğrulamasına bağlı olabilir.",
    ],
  },
  {
    title: "Ücretsiz Katman ve Reklamlar",
    paragraphs: [
      "LumiBaby üçüncü taraf reklamlarla desteklenen ücretsiz bir katman sunabilir. Premium, Uygulamada açıklandığı şekilde reklamları kaldırabilir ve ek içeriklerin veya özelliklerin kilidini açabilir. Ücretsiz ve Premium özellikler zaman içinde değişebilir.",
    ],
  },
  {
    title: "Kullanılabilirlik ve Değişiklikler",
    paragraphs: [
      "Makul ölçüde gerekli olduğunda bir özelliğin bakımını yapabilir, özelliği güncelleyebilir, değiştirebilir, askıya alabilir veya sonlandırabiliriz. İzleme ve bildirimler ağ kesintılarından, cihaz ayarlarından, işletim sistemi davranışından, üçüncü taraf hizmetlerden ve kontrolümüz dışındaki diğer koşullardan etkilenebilir.",
      "LumiBaby, Uygulama kapalıyken sürekli arka plan kamera izlemesi veya görüntülü izleme sözü vermez. Bebeği gözlemlemek veya korumak için Uygulamaya tek araç olarak güvenmemelisiniz.",
    ],
  },
  {
    title: "Fikri Mülkiyet",
    paragraphs: [
      "LumiBaby, yazılımı, tasarımı, markası ve ninni, ses ve hikaye gibi sunduğu içerikler Lumisoft Studio'ya veya lisans verenlerine aittir ve ilgili hukukla korunur. Bu hüküm, Uygulamada oluşturduğunuz kayıtların veya bilgilerin mülkiyetini devretmez. Hukukun izin verdiği durumlar dışında korunan Uygulama içeriğini kopyalayamaz, dağıtamaz, tersine mühendislik yapamaz veya bunlardan türev eser oluşturamazsınız.",
    ],
  },
  {
    title: "Sorumluluk Sınırlaması",
    paragraphs: [
      "Hukukun izin verdiği azami ölçüde LumiBaby mevcut haliyle sunulur ve her özelliğin kesintisiz ya da hatasız olacağı garanti edilmez. Lumisoft Studio, Uygulamanın kullanımından veya kullanılamamasından doğan dolaylı, tesadüfi, özel ya da sonuç olarak ortaya çıkan zararlardan sorumlu değildir. Bu Koşullardaki hiçbir hüküm, hukuken hariç tutulamayacak hakları veya sorumlulukları ortadan kaldırmaz.",
    ],
  },
  {
    title: "Bu Koşullardaki Değişiklikler",
    paragraphs: [
      "Bu Koşulları zaman zaman güncelleyebiliriz. Güncel sürümü bu sayfada yayınlar ve yukarıdaki tarihi değiştiririz. Bir değişiklik LumiBaby kullanımınızı önemli ölçüde etkilerse Uygulama içinde de bildirim sunabiliriz.",
    ],
  },
];

export default function KullanimKosullariPage() {
  return (
    <>
      <Header />
      <LegalPageLayout
        title="Kullanım Koşulları"
        subtitle="Lumisoft Studio tarafından LumiBaby"
        lastUpdated="2 Eylül 2026"
        lastUpdatedLabel="Son güncelleme:"
        backHref="/tr/lumibaby"
        backLinkText="← LumiBaby'ye Geri Dön"
        appIcon="/images/web/lumibaby-icon.webp"
      >
        <section>
          <p className="text-slate-200 leading-relaxed">
            Bu Kullanım Koşulları, Lumisoft Studio (&ldquo;biz&rdquo;,
            &ldquo;bize&rdquo; veya &ldquo;bizim&rdquo;) tarafından
            geliştirilen LumiBaby&apos;nin (&ldquo;Uygulama&rdquo;)
            kullanımını düzenler. Uygulamayı indirerek veya kullanarak bu
            Koşulları kabul etmiş olursunuz. Kabul etmiyorsanız Uygulamayı
            kullanmayın.
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
