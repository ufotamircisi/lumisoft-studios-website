import type { LegalKind, NewProduct, ProductLocale } from "./newProductMetadata";

type Section = { title: string; paragraphs: string[] };
type LegalDocument = { lead: string; sections: Section[] };
const section = (title: string, ...paragraphs: string[]): Section => ({ title, paragraphs });

export const newProductLegal: Record<NewProduct, Record<LegalKind, Record<ProductLocale, LegalDocument>>> = {
  midchain: {
    privacy: {
      en: { lead: "This policy describes how MIDCHAIN, an ocean survival game developed by Lumisoft Studio, handles information. It covers the current development build, including its Google AdMob integration.", sections: [
        section("Your game stays on your device", "No account or sign-in is required. Progress, generations, unlocked species, records, unfinished lives, settings and rewarded-continue state are stored locally. This game data is not sent to Lumisoft Studio. Clearing app data or uninstalling can erase it; we cannot restore a local save.", "The game itself has no analytics or crash-reporting service. The advertising services described below process their own technical information."),
        section("Optional rewarded advertising", "MIDCHAIN integrates Google Mobile Ads (AdMob) for optional rewarded ads. An ad is requested when you choose a rewarded continuation after a death. There are no banner, interstitial or app-open ads. Development and Android closed-test builds use test ads; a future production release may use live rewarded ads.", "Google may process IP addresses and approximate location inferred from them, device or app identifiers, app and ad interactions, diagnostics, crash and performance information for advertising, measurement and fraud prevention. Test advertising does not mean the SDK makes no network requests. Google’s own privacy policy explains its processing: https://policies.google.com/privacy"),
        section("Consent and device controls", "Google’s User Messaging Platform checks consent requirements and presents a form where required. This check and SDK initialization can contact Google before you choose to watch an ad. Where available, change your choices in Settings > Legal > Ad Privacy Options. If consent requirements are not met, the game remains playable without rewarded ads.", "The current iOS integration does not request App Tracking Transparency permission or access IDFA, and requests non-personalized ads. This does not prevent the technical processing described above. On Android, you can manage or delete your advertising ID in device settings."),
        section("Permissions and purchases", "Internet access supports ads and consent; vibration supports gameplay. The game does not request camera, microphone, contacts or precise-location access. There are currently no in-app purchases, subscriptions or user accounts."),
        section("Children and families", "MIDCHAIN is a survival game with predator and prey encounters. Parents should consider the game content and the age rating of any eventual store release. If a child sends personal information to our support address, a parent or guardian can contact us to request its removal. We do not ask children to submit information through the game."),
        section("Support, retention and your choices", "If you email us, we receive your email address and the information you choose to include. We use it to answer your request and keep it only as needed for support or applicable obligations. Please do not send passwords or unnecessary personal information.", "You can request access, correction or deletion of support correspondence at support@lumisoftstudios.com. Rights depend on applicable law. We cannot directly retrieve or delete Google-held advertising data; use Google’s privacy controls and the consent options described above."),
        section("Policy updates", "We will update this page when the app’s data practices change. The date above identifies this version. For privacy questions, contact support@lumisoftstudios.com."),
      ]},
      tr: { lead: "Bu politika, Lumisoft Studio tarafından geliştirilen okyanus hayatta kalma oyunu MIDCHAIN’in verileri nasıl işlediğini açıklar. Google AdMob entegrasyonu dahil mevcut geliştirme sürümünü kapsar.", sections: [
        section("Oyun verilerin cihazında kalır", "Hesap açman veya giriş yapman gerekmez. İlerleme, nesiller, açılan türler, rekorlar, yarım kalan yaşamlar, ayarlar ve reklamla devam durumu cihazda saklanır. Bu oyun verileri Lumisoft Studio’ya gönderilmez. Uygulama verilerini temizlemek veya uygulamayı kaldırmak kayıtları silebilir; yerel kaydını geri getiremeyiz.", "Oyunun kendi analiz veya hata raporlama servisi yoktur. Aşağıdaki reklam servisleri kendi teknik verilerini işler."),
        section("İsteğe bağlı ödüllü reklamlar", "MIDCHAIN, isteğe bağlı ödüllü reklamlar için Google Mobile Ads (AdMob) kullanır. Reklam, bir ölümden sonra reklamla devam etmeyi seçtiğinde istenir. Banner, geçiş veya açılış reklamı yoktur. Geliştirme ve Android kapalı test sürümlerinde test reklamları kullanılır; ilerideki production sürümü canlı ödüllü reklam kullanabilir.", "Google; IP adresi ve bundan çıkarılan yaklaşık konum, cihaz veya uygulama tanımlayıcıları, uygulama ve reklam etkileşimleri, teşhis, çökme ve performans bilgilerini reklam, ölçüm ve sahtekârlığı önleme amacıyla işleyebilir. Test reklamları, SDK’nın ağ isteği yapmadığı anlamına gelmez. Google’ın veri işlemesi kendi gizlilik politikasında açıklanır: https://policies.google.com/privacy"),
        section("Rıza ve cihaz seçenekleri", "Google User Messaging Platform, rıza gereksinimini kontrol eder ve gerektiğinde form gösterir. Bu kontrol ve SDK’nın başlatılması, reklam izlemeyi seçmeden önce Google’a bağlantı kurabilir. Sunulduğu bölgelerde Ayarlar > Yasal > Reklam Gizlilik Seçenekleri üzerinden tercihini değiştirebilirsin. Rıza gereksinimleri karşılanmadığında oyun ödüllü reklam olmadan oynanabilir.", "Mevcut iOS entegrasyonu App Tracking Transparency izni istemez, IDFA’ya erişmez ve kişiselleştirilmemiş reklam ister. Bu durum yukarıda açıklanan teknik veri işlemeyi ortadan kaldırmaz. Android reklam kimliğini cihaz ayarlarından yönetebilir veya silebilirsin."),
        section("İzinler ve satın alma", "İnternet erişimi reklamlar ve rıza, titreşim ise oynanış için kullanılır. Kamera, mikrofon, kişiler veya hassas konum erişimi istenmez. Mevcut sürümde uygulama içi satın alma, abonelik veya kullanıcı hesabı yoktur."),
        section("Çocuklar ve aileler", "MIDCHAIN, avcı ve av karşılaşmaları içeren bir hayatta kalma oyunudur. Veliler oyun içeriğini ve ileride yayınlanacak mağaza sürümünün yaş derecelendirmesini dikkate almalıdır. Bir çocuk destek adresimize kişisel bilgi gönderirse velisi bilgilerin silinmesini isteyebilir. Oyun içinde çocuklardan bilgi göndermelerini istemeyiz."),
        section("Destek, saklama ve haklar", "Bize e-posta gönderdiğinde adresini ve paylaşmayı seçtiğin bilgileri alırız. Bunları talebini yanıtlamak için kullanır, yalnız destek veya geçerli yükümlülükler için gerektiği sürece tutarız. Şifre veya gereksiz kişisel bilgi gönderme.", "Destek yazışmalarına erişim, düzeltme veya silme taleplerini support@lumisoftstudios.com adresine iletebilirsin. Hakların geçerli mevzuata bağlıdır. Google’ın tuttuğu reklam verilerine doğrudan erişemeyiz veya bunları silemeyiz; Google’ın gizlilik araçlarını ve yukarıdaki rıza seçeneklerini kullanabilirsin."),
        section("Politika güncellemeleri", "Uygulamanın veri davranışı değiştiğinde bu sayfayı güncelleyeceğiz. Yukarıdaki tarih bu sürümü belirtir. Gizlilik soruları için support@lumisoftstudios.com adresine yazabilirsin."),
      ]},
    },
    terms: {
      en: { lead: "These terms apply to your use of MIDCHAIN by Lumisoft Studio, including development and test versions.", sections: [
        section("Using the game", "You may play MIDCHAIN on your devices for personal, non-commercial use. Any applicable app-store terms also apply. Use the game lawfully; do not abuse its systems, generate artificial ad traffic or distribute unauthorized copies."),
        section("Availability and progress", "MIDCHAIN is in development. Features, balance and supported devices may change, and uninterrupted or error-free availability is not guaranteed. Scores and virtual progress have no monetary value. Saves are local and can be lost when you clear app data, uninstall or change devices."),
        section("Advertising and third-party services", "Optional rewarded ads are provided through Google AdMob. Availability depends on connectivity, consent and ad supply. A continuation reward is granted after the advertising service confirms the reward, not simply when an ad closes. Do not click or view ads to create artificial traffic. Google and platform services have their own terms and privacy practices."),
        section("Intellectual property", "The MIDCHAIN name, code, artwork, audio and game design belong to Lumisoft Studio or their respective licensors. Third-party components retain their own licenses. These terms do not transfer ownership of that content."),
        section("Responsibility and updates", "The game is provided as available. To the extent permitted by law, Lumisoft Studio is not responsible for indirect losses arising from use or unavailability. Nothing here removes consumer rights or liabilities that cannot lawfully be excluded. We may update these terms when the game changes; the current version is published here."),
        section("Contact", "For questions about these terms, contact support@lumisoftstudios.com."),
      ]},
      tr: { lead: "Bu koşullar, geliştirme ve test sürümleri dahil Lumisoft Studio’nun MIDCHAIN oyununu kullanımın için geçerlidir.", sections: [
        section("Oyunun kullanımı", "MIDCHAIN’i kendi cihazlarında kişisel ve ticari olmayan amaçlarla oynayabilirsin. İlgili uygulama mağazasının koşulları da geçerlidir. Oyunu yasalara uygun kullan; sistemlerini kötüye kullanma, yapay reklam trafiği oluşturma veya izinsiz kopyalarını dağıtma."),
        section("Kullanılabilirlik ve ilerleme", "MIDCHAIN geliştirilmektedir. Özellikler, denge ve desteklenen cihazlar değişebilir; kesintisiz veya hatasız çalışma garanti edilmez. Skorların ve sanal ilerlemenin parasal değeri yoktur. Kayıtlar yereldir; uygulama verilerini temizleme, kaldırma veya cihaz değiştirme sırasında kaybolabilir."),
        section("Reklamlar ve üçüncü taraf hizmetler", "İsteğe bağlı ödüllü reklamlar Google AdMob ile sunulur. Kullanılabilirlik bağlantıya, rızaya ve reklam bulunmasına bağlıdır. Devam ödülü, yalnız reklam kapandığında değil, reklam servisi ödülü doğruladığında verilir. Yapay trafik oluşturmak için reklam izleme veya tıklama yapma. Google ve platform hizmetlerinin kendi koşulları ve gizlilik uygulamaları vardır."),
        section("Fikri mülkiyet", "MIDCHAIN adı, kodu, görselleri, sesleri ve oyun tasarımı Lumisoft Studio’ya veya ilgili lisans sahiplerine aittir. Üçüncü taraf bileşenler kendi lisanslarına tabidir. Bu koşullar içeriğin mülkiyetini devretmez."),
        section("Sorumluluk ve güncellemeler", "Oyun mevcut haliyle sunulur. Yasaların izin verdiği ölçüde Lumisoft Studio, kullanımdan veya kullanılamamadan doğan dolaylı kayıplardan sorumlu değildir. Bu koşullar, hukuken kaldırılamayan tüketici haklarını veya sorumlulukları ortadan kaldırmaz. Oyun değiştiğinde koşulları güncelleyebiliriz; güncel sürüm burada yayınlanır."),
        section("İletişim", "Koşullarla ilgili sorular için support@lumisoftstudios.com adresine yazabilirsin."),
      ]},
    },
    support: {
      en: { lead: "Help with MIDCHAIN for iOS and Android. The game is in development; there is no public store download yet.", sections: [
        section("Contact the studio", "Email support@lumisoftstudios.com with your device model, operating system, game version and a short description of the problem. A screenshot can help, but remove any personal information first."),
        section("Progress and saved lives", "Progress stays on your device. Do not uninstall or clear app data as a troubleshooting step if you want to preserve it. An unfinished life can be resumed from the main menu. We cannot recover a deleted local save."),
        section("Rewarded ads and privacy", "Rewarded continuations are optional. An unavailable ad may indicate connectivity, consent or ad-supply limits; the rest of the game remains playable. Ad Privacy Options appear under Settings > Legal where required. Test builds can show test ads."),
        section("Performance", "Try GRAPHICS: FAST in Settings if play feels slow. The main menu is portrait and gameplay is landscape. Include your device model when reporting display or performance issues."),
      ]},
      tr: { lead: "iOS ve Android için MIDCHAIN desteği. Oyun geliştiriliyor; henüz herkese açık mağaza indirmesi yok.", sections: [
        section("Stüdyoya ulaş", "Cihaz modeli, işletim sistemi, oyun sürümü ve sorunun kısa açıklamasıyla support@lumisoftstudios.com adresine yazabilirsin. Ekran görüntüsü ekliyorsan önce kişisel bilgileri kaldır."),
        section("İlerleme ve kayıtlı yaşamlar", "İlerleme cihazında kalır. Kayıtlarını korumak istiyorsan sorun giderme amacıyla uygulamayı kaldırma veya verilerini temizleme. Yarım kalan yaşama ana menüden devam edebilirsin. Silinen yerel kaydı geri getiremeyiz."),
        section("Ödüllü reklamlar ve gizlilik", "Reklamla devam etmek isteğe bağlıdır. Reklamın kullanılamaması bağlantı, rıza veya reklam bulunmasıyla ilgili olabilir; oyunun geri kalanı oynanabilir. Gereken bölgelerde Ayarlar > Yasal altında Reklam Gizlilik Seçenekleri görünür. Test sürümleri test reklamları gösterebilir."),
        section("Performans", "Oyun yavaşsa Ayarlar’dan GRAFİK: HIZLI seçeneğini dene. Ana menü dikey, oynanış yataydır. Görüntü veya performans sorunu bildirirken cihaz modelini ekle."),
      ]},
    },
  },
  wandermio: {
  "privacy": {
    "en": {
      "lead": "Wondermio, called Öğrenimo in Turkish, is a learning app for children ages 2–12 by Lumisoft Studio. This policy is for parents and guardians and describes the current pre-release app and its purchase and advertising arrangements.",
      "sections": [
        {
          "title": "Profiles and learning progress",
          "paragraphs": [
            "No account or exact birth date is required. Optional nicknames, age group or grade, language, learning preferences, activity results, skill summaries and mascot preferences are stored in a database on the device. Lumisoft Studio does not receive that database. There is no child-to-child chat or social feed."
          ]
        },
        {
          "title": "Parents, sharing and deletion",
          "paragraphs": [
            "Parent and teacher tools, settings, purchases and legal information are behind a parental gate. A parental gate does not replace parental consent where the law requires it.",
            "Adults can export a backup or report using the device share menu and choose its destination. Exported files may contain local profile or progress information. Protect those files and review the destination’s privacy practices. The app’s local deletion controls do not delete previously exported copies. Uninstalling can erase local progress, which we cannot recover from a server."
          ]
        },
        {
          "title": "Teacher tools and the camera",
          "paragraphs": [
            "Adults can create and print selected story and puzzle worksheets on the device; child profile information is not added. Extra story worksheets follow Premium story access. Homework creation, assignment and code sharing are no longer available. Optional teacher QR scanning requests camera access only when an adult opens that feature and chooses to allow it. Images are processed for the QR code; the app does not take or save photos, record video or audio, or upload camera images. Microphone and precise-location access are not requested.",
            "The Android QR scanner uses Google ML Kit. Google describes processing device and app information, a per-installation identifier, performance and error information, and API usage events for diagnostics and usage analytics. This technical processing also applies when ads are off. QR images are processed on the device; the app does not send the image or decoded code to a verification server. Google’s privacy policy applies.",
            "The teacher verification service is not active in the current pre-release version. A QR code cannot grant a verified teacher entitlement by itself. No teacher identity or child progress is sent to a verification server in this version."
          ]
        },
        {
          "title": "Advertising on Android",
          "paragraphs": [
            "The Android app includes Google Mobile Ads (AdMob) and uses internet access for advertising and store services. Live ads are currently disabled while children’s advertising requirements and placement behavior are checked. Development builds can use labelled Google test ads. A test ad is still a network service; it does not mean no data is sent.",
            "If advertising is enabled in a later reviewed Android release, requests must be child-directed, under the age of consent, restricted to G-rated content and non-personalized. The Android advertising-ID and Privacy Sandbox advertising permissions are blocked. Google’s SDK may process IP-derived approximate location, app/ad interactions, diagnostics and device or app identifiers for advertising, measurement and fraud prevention. Google describes its processing at https://policies.google.com/privacy. Child profile and learning-progress records are not supplied to the ad network.",
            "There are no rewarded ads that unlock learning content. Family Premium, an eligible trial and a valid Remove Ads purchase prevent ad requests. Live ads will not be enabled until the applicable child-safety and legal-consent requirements are satisfied. Required GDPR or other legal notices are separate from Apple tracking permission and will not be skipped."
          ]
        },
        {
          "title": "iPhone and iPad: no tracking advertising",
          "paragraphs": [
            "Ads are disabled on iPhone and iPad, and the iOS app does not link the Google Mobile Ads SDK. The app does not request App Tracking Transparency permission, access IDFA, use personalized or cross-app behavioral ads, create device fingerprints or use replacement identifiers for tracking. A provider that requires tracking will not be used.",
            "Any future iOS advertising must meet Apple Kids Category requirements, including appropriate human review of creatives, and have its SDK and data transfers checked before activation. The current source and SDK manifests have been inspected; final signed-build and device data-flow checks are still required before store privacy answers are finalized. The iOS app has no separate analytics or crash-reporting SDK. Android advertising and QR SDK diagnostics are described above."
          ]
        },
        {
          "title": "Premium and store purchases",
          "paragraphs": [
            "Family Premium has monthly and yearly subscription plans. Where offered by the store to an eligible account, a 7-day trial becomes a paid subscription unless cancelled in time. The store shows the local price, renewal period and charge after the trial before confirmation. Subscriptions renew until cancelled.",
            "Remove Ads is a separate, permanent, non-consumable purchase that removes ads and does not unlock Premium content. It is not offered for sale on a platform while that platform has no ads. Store products are being prepared and are not yet on public sale. No payment is taken by this website.",
            "Apple or Google processes payment details under its own terms. The app reads the store’s purchase confirmation and keeps entitlement information locally for purchase verification, restoration and offline access. Card details are not sent to Lumisoft Studio. Deleting the app does not cancel a subscription."
          ]
        },
        {
          "title": "Support correspondence and your rights",
          "paragraphs": [
            "If you contact support@lumisoftstudios.com, we receive your email address and the information you choose to send. We use it to handle the request and keep it only as needed for support and applicable obligations. Avoid children’s full names, photos, passwords and backup files unless specifically needed for an agreed support case.",
            "Parents or guardians can request access, correction or deletion of support correspondence. Local profile data can be managed in the app. We cannot directly access Google-held advertising data; use Google’s privacy controls or contact us for guidance. Applicable rights depend on your location. Contact us if you believe a child sent us personal information."
          ]
        },
        {
          "title": "Changes and contact",
          "paragraphs": [
            "This page is updated when the app’s data practices change. Store privacy disclosures must match the actual released build. For questions, contact support@lumisoftstudios.com."
          ]
        }
      ]
    },
    "tr": {
      "lead": "Öğrenimo, İngilizce adıyla Wondermio, Lumisoft Studio’nun 2–12 yaş için geliştirdiği öğrenme uygulamasıdır. Bu politika veliler ve yasal temsilciler için hazırlanmıştır; mevcut yayın öncesi sürümü, satın alma ve reklam düzenini açıklar.",
      "sections": [
        {
          "title": "Profiller ve öğrenme ilerlemesi",
          "paragraphs": [
            "Hesap veya tam doğum tarihi gerekmez. İsteğe bağlı takma ad, yaş grubu veya sınıf, dil, öğrenme tercihleri, etkinlik sonuçları, beceri özetleri ve maskot tercihleri cihazdaki veritabanında saklanır. Bu veritabanı Lumisoft Studio’ya gönderilmez. Çocuklar arası sohbet veya sosyal akış yoktur."
          ]
        },
        {
          "title": "Yetişkin alanı, paylaşım ve silme",
          "paragraphs": [
            "Veli ve öğretmen araçları, ayarlar, satın alma ve yasal bilgiler yetişkin kontrolünün arkasındadır. Bu kontrol, kanunun gerektirdiği veli rızasının yerine geçmez.",
            "Yetişkinler cihazın paylaşım menüsünden yedek veya rapor dışa aktarabilir ve hedefini seçebilir. Dosyalar yerel profil veya ilerleme bilgisi içerebilir. Bunları koruyun ve seçtiğiniz hedefin gizlilik uygulamalarını inceleyin. Uygulamadaki silme kontrolleri daha önce dışa aktarılan kopyaları silmez. Uygulamayı kaldırmak yerel ilerlemeyi silebilir; bir sunucudan geri getiremeyiz."
          ]
        },
        {
          "title": "Öğretmen araçları ve kamera",
          "paragraphs": [
            "Yetişkinler cihazda seçili hikâye ve bulmaca çalışma kâğıtları oluşturup yazdırabilir; çocuk profil bilgisi eklenmez. Ek hikâye çalışma kâğıtları Premium hikâye erişimine bağlıdır. Ödev oluşturma, atama ve kod paylaşımı kaldırılmıştır. İsteğe bağlı öğretmen QR taraması, yalnız yetişkin bu özelliği açıp izin vermeyi seçtiğinde kamera izni ister. Görüntü QR kodu için işlenir; fotoğraf çekilmez veya saklanmaz, video veya ses kaydedilmez, kamera görüntüsü yüklenmez. Mikrofon ve hassas konum izni istenmez.",
            "Android QR tarayıcısı Google ML Kit kullanır. Google, cihaz ve uygulama bilgileri, kurulum tanımlayıcısı, performans ve hata bilgileri ile API kullanım olaylarını teknik tanılama ve kullanım analizi için işlediğini açıklar. Bu teknik veri işlemesi reklamlar kapalıyken de geçerlidir. QR görüntüleri cihazda işlenir; uygulama görüntüyü veya okunan kodu bir doğrulama sunucusuna göndermez. Google’ın gizlilik politikası uygulanır.",
            "Mevcut yayın öncesi sürümde öğretmen doğrulama hizmeti etkin değildir. QR kodu tek başına doğrulanmış öğretmen hakkı sağlamaz. Bu sürümde doğrulama sunucusuna öğretmen kimliği veya çocuk ilerlemesi gönderilmez."
          ]
        },
        {
          "title": "Android reklamları",
          "paragraphs": [
            "Android uygulaması Google Mobile Ads (AdMob) içerir; reklam ve mağaza hizmetleri için internet erişimi vardır. Çocuklara yönelik reklam kuralları ve yerleşim davranışı doğrulanana kadar canlı reklamlar kapalıdır. Geliştirme sürümleri Google’ın işaretli test reklamlarını kullanabilir. Test reklamı da bir ağ hizmetidir; veri gönderilmediği anlamına gelmez.",
            "İleride incelenmiş bir Android sürümünde reklam etkinleştirilirse istekler çocuklara yönelik, rıza yaşının altında, G içerik derecesiyle ve kişiselleştirilmeden yapılmalıdır. Android reklam kimliği ve Privacy Sandbox reklam izinleri engellidir. Google SDK’sı IP’den çıkarılan yaklaşık konum, uygulama/reklam etkileşimleri, teşhis ve cihaz veya uygulama kimliklerini reklam, ölçüm ve sahtekârlığı önleme amacıyla işleyebilir. Google veri işlemesini https://policies.google.com/privacy adresinde açıklar. Çocuk profili ve öğrenme ilerlemesi reklam ağına verilmez.",
            "Öğrenme içeriğini açan ödüllü reklam yoktur. Aile Premium, uygun deneme ve geçerli Reklam Kaldır hakkı reklam isteğini engeller. Çocuk güvenliği ve yasal rıza gereksinimleri karşılanmadan canlı reklam açılmaz. GDPR ve diğer gerekli yasal bildirimler Apple takip izninden ayrıdır ve atlanmaz."
          ]
        },
        {
          "title": "iPhone ve iPad: takip reklamı yok",
          "paragraphs": [
            "iPhone ve iPad’de reklamlar kapalıdır; Google Mobile Ads SDK’sı iOS uygulamasına bağlanmaz. Uygulama App Tracking Transparency izni istemez, IDFA’ya erişmez, kişiselleştirilmiş veya uygulamalar arası davranışsal reklam kullanmaz; cihaz parmak izi veya takip amaçlı alternatif kimlik oluşturmaz. Takip gerektiren sağlayıcı kullanılmaz.",
            "Gelecekte iOS reklamı düşünülürse kreatiflerin uygun insan incelemesi dahil Apple Kids Category koşulları sağlanmalı, SDK ve veri aktarımı etkinleştirme öncesi denetlenmelidir. Kaynak ve SDK manifestleri incelendi; mağaza gizlilik cevapları kesinleştirilmeden önce son imzalı derleme ve gerçek cihaz veri akışı kontrolü gereklidir. iOS uygulamasında bağımsız analiz veya çökme raporlama SDK’sı yoktur. Android reklam ve QR bileşenlerinin teknik veri işlemesi yukarıda açıklanır."
          ]
        },
        {
          "title": "Premium ve mağaza satın almaları",
          "paragraphs": [
            "Aile Premium aylık ve yıllık abonelik planlarına sahiptir. Mağaza uygun hesaba sunarsa 7 günlük deneme, zamanında iptal edilmezse ücretli aboneliğe dönüşür. Yerel fiyat, yenileme dönemi ve deneme sonrası ücret onaydan önce mağazada gösterilir. Abonelik iptal edilene kadar yenilenir.",
            "Reklam Kaldır ayrı, kalıcı ve tüketilmeyen bir satın almadır; reklamları kaldırır, Premium içerik açmaz. Reklam olmayan platformda satışa sunulmaz. Mağaza ürünleri hazırlanıyor; henüz herkese açık satış yoktur. Bu web sitesinden ödeme alınmaz.",
            "Ödeme bilgilerini Apple veya Google kendi koşullarıyla işler. Uygulama mağazanın satın alma teyidini okur; doğrulama, geri yükleme ve çevrimdışı erişim için hak bilgisini yerel saklar. Kart bilgileri Lumisoft Studio’ya gönderilmez. Uygulamayı silmek aboneliği iptal etmez."
          ]
        },
        {
          "title": "Destek yazışmaları ve haklarınız",
          "paragraphs": [
            "support@lumisoftstudios.com adresine yazdığınızda e-posta adresinizi ve paylaşmayı seçtiğiniz bilgileri alırız. Bunları talebi yanıtlamak için kullanır, destek ve geçerli yükümlülükler için gerektiği sürece tutarız. Üzerinde anlaşılan destek talebi gerektirmedikçe çocukların tam adını, fotoğrafını, parola veya yedek dosyalarını göndermeyin.",
            "Veliler destek yazışmalarına erişim, düzeltme veya silme talep edebilir. Yerel profilleri uygulamadan yönetebilirsiniz. Google’ın tuttuğu reklam verilerine doğrudan erişemeyiz; Google’ın gizlilik araçlarını kullanabilir veya yönlendirme için bize yazabilirsiniz. Haklar bulunduğunuz yere göre değişir. Bir çocuğun bize kişisel bilgi gönderdiğini düşünüyorsanız iletişime geçin."
          ]
        },
        {
          "title": "Değişiklikler ve iletişim",
          "paragraphs": [
            "Veri davranışı değiştiğinde bu sayfa güncellenir. Mağaza gizlilik beyanları gerçek yayınlanan derlemeyle eşleşmelidir. Sorular için support@lumisoftstudios.com adresine yazabilirsiniz."
          ]
        }
      ]
    }
  },
  "terms": {
    "tr": {
      "lead": "Öğrenimo (İngilizce adı Wondermio) için kullanım, abonelik ve satın alma koşulları. Uygulama henüz herkese açık mağaza satışına sunulmamıştır. Satın alma yalnız mağaza uygun ürün ve fiyatı sunduğunda yapılabilir.",
      "sections": [
        {
          "title": "Kapsam",
          "paragraphs": [
            "Bu koşullar Öğrenimo uygulamasının kullanımını düzenler. Uygulamayı indiren ve kullanan veli ya da yasal temsilci bu koşulları kabul etmiş sayılır. Uygulama çocukların bir yetişkinin gözetiminde kullanması için tasarlanmıştır.",
            "Uygulama App Store’dan indirildiyse Apple’ın Standart Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesi (EULA) de geçerlidir; bu koşullar onu tamamlar."
          ]
        },
        {
          "title": "Kullanım hakkı",
          "paragraphs": [
            "Lumisoft Studio, uygulamayı kişisel, ailevi ve sınıf içi eğitim amacıyla kullanmanız için devredilemez ve münhasır olmayan bir kullanım hakkı verir. Uygulamanın içeriği, karakterleri, çizimleri ve seslerinin bütün hakları Lumisoft Studio tarafından saklıdır; izinsiz kopyalanamaz ya da satılamaz."
          ]
        },
        {
          "title": "Eğitim içeriği",
          "paragraphs": [
            "İçerikler MEB öğretim programları ve ilgili ülke programları esas alınarak hazırlanır. Program eşleştirmesinin tamamlanmamış bölümleri uygulamada ve belgelerde açıkça belirtilir. Uygulama okulun ve öğretmenin yerine geçmez; veli raporları tanı ya da sınav sonucu değildir."
          ]
        },
        {
          "title": "Ücretsiz sürüm ve Aile Premium",
          "paragraphs": [
            "Uygulama ücretsiz indirilir. Ücretsiz sürümde bütün harf dünyaları, her konunun ilk oyunları, seçili hikâyeler ve bir çocuk profili bulunur. Android’deki ücretsiz sürümde oyun sonlarında çocuklara uygun reklamlar gösterilebilir.",
            "Aile Premium aylık ya da yıllık ücretli bir aboneliktir; bütün içerikleri açar ve sürdüğü sürece reklamları kapatır. Reklam Kaldır tek seferlik bir satın almadır; reklamları kalıcı olarak kapatır, Premium içerikleri açmaz. Koşulları ayrı “Abonelik ve Satın Alma Koşulları” metnindedir.",
            "Temel öğrenme kazanımları ücretsiz tamamlanabilir. Premium bittiğinde ek içerikler gizlenir; çocuk profilleri ve ilerleme silinmez. Öğretmen QR erişimi, hizmet etkinleştirildiğinde yalnızca reklamları kaldırır ve Premium ek kütüphaneyi açmaz."
          ]
        },
        {
          "title": "Uygun kullanım",
          "paragraphs": [
            "Uygulamanın güvenlik önlemlerini, yetişkin kontrolünü ya da satın alma doğrulamasını aşmaya çalışmak, uygulamayı değiştirerek dağıtmak yasaktır."
          ]
        },
        {
          "title": "Sorumluluk",
          "paragraphs": [
            "Uygulamayı özenle hazırlar ve güncelleriz; yine de hatasız ya da kesintisiz çalışacağını garanti edemeyiz. Kayıtlar yalnızca cihazda tutulduğu için cihaz kaybında veriler kaybolabilir; Ebeveyn Paneli’ndeki yedekleme özelliğini kullanmanızı öneririz. Yürürlükteki tüketici mevzuatından doğan haklarınız saklıdır."
          ]
        },
        {
          "title": "Değişiklikler ve iletişim",
          "paragraphs": [
            "Bu koşullar değişirse yeni metin uygulamada ve mağaza sayfasındaki bağlantıda yayımlanır.",
            "Sorularınız ve talepleriniz için uygulamanın Google Play ya da App Store sayfasındaki geliştirici iletişim adresine yazabilirsiniz."
          ]
        },
        {
          "title": "Ürünler",
          "paragraphs": [
            "Aile Premium aylık ve yıllık olmak üzere iki otomatik yenilenen abonelik olarak sunulur. Premium; bütün oyunları, bütün hikâyeleri, birden fazla çocuk profilini ve ayrıntılı gelişim raporlarını açar ve sürdüğü sürece (deneme dahil) reklamları kapatır.",
            "Reklam Kaldır tek seferlik, yenilenmeyen bir satın almadır. Ücretsiz sürümdeki reklamları kalıcı olarak kapatır; Premium içerikleri açmaz ve ücretsiz sürümün kapsamını değiştirmez. İki platformda aynı ürün modeli hedeflenir. Reklamlar etkinleşene ve mağazadaki tek seferlik fiyat ilgili ülkedeki aylık Premium fiyatıyla eşleşene kadar satış sunulmaz.",
            "Güncel fiyat, para birimi ve abonelik dönemi satın almadan önce mağazanın gösterdiği şekilde ekranda yer alır. Fiyatlara yürürlükteki vergiler dahildir ve ülkeden ülkeye değişebilir.",
            "Satın alma ekranına Ebeveyn Paneli ya da Öğretmen Paneli > Premium ve Reklam Kaldır yolundan, yetişkin kontrolünden sonra ulaşılır. İki panel aynı satın alma ve hak kaydını kullanır."
          ]
        },
        {
          "title": "Ücretsiz deneme",
          "paragraphs": [
            "Mağaza size sunuyorsa ilk aboneliğinizde ücretsiz deneme başlatabilirsiniz. Deneme hakkı mağaza hesabı başına bir kez verilir ve uygunluğa mağaza karar verir; daha önce deneme kullandıysanız ekranda deneme gösterilmez.",
            "Deneme süresince abonelik ücreti alınmaz. Deneme bitmeden iptal etmezseniz abonelik, ekranda gösterilen fiyattan ve dönemle otomatik olarak başlar.",
            "Ödeme yönteminizi doğrulamak için mağaza ya da bankanız geçici bir ön provizyon gösterebilir; bu tutar abonelik ücreti değildir.",
            "Deneme sırasında başka bir plan satın alırsanız denemenin kalan süresi sona erer."
          ]
        },
        {
          "title": "Ödeme ve yenileme",
          "paragraphs": [
            "Ücret, onayınızla birlikte (deneme varsa deneme bitince) Google Play ya da Apple hesabınıza yansıtılır. Reklam Kaldır için ücret bir kez alınır.",
            "App Store: Abonelik, dönem bitiminden en az 24 saat önce otomatik yenileme kapatılmazsa aynı süre ve fiyatla yenilenir; yenileme ücreti dönem bitmeden önceki 24 saat içinde alınır.",
            "Google Play: Abonelik, iptal edilene kadar her dönem sonunda yenilenir. Deneme ya da dönem bitmeden istediğiniz zaman iptal edebilirsiniz.",
            "Fiyat değişikliklerinde mağaza sizi kendi kurallarına göre önceden bilgilendirir."
          ]
        },
        {
          "title": "İptal ve yönetim",
          "paragraphs": [
            "Aboneliği uygulamadaki Premium ve Reklam Kaldır > Aboneliği Yönet düğmesiyle ya da doğrudan Google Play (Ödemeler ve abonelikler) veya iPhone/iPad Ayarlar > Apple hesabınız > Abonelikler bölümünden iptal edebilirsiniz.",
            "İptal ettiğinizde Premium, ödenmiş dönemin sonuna kadar açık kalır. Sonra uygulama ücretsiz sürümle devam eder; çocuk profilleri, ilerleme kayıtları ve oluşturulmuş bütün profiller korunur.",
            "Premium sona erdiğinde Android’deki ücretsiz sürümde reklamlar yeniden gösterilebilir. Reklam Kaldır satın aldıysanız reklamlar kapalı kalır.",
            "Uygulamayı silmek aboneliği iptal etmez."
          ]
        },
        {
          "title": "İade ve iptal edilen satın almalar",
          "paragraphs": [
            "İade talepleri mağazanın kendi kurallarıyla değerlendirilir: Google Play için Google Play iade politikası, App Store için Apple’ın iade süreci geçerlidir.",
            "Mağaza bir aboneliği iade eder ya da iptal ederse Premium mağazanın bildirdiği tarihte kapanır. Reklam Kaldır iade edilir ya da mağazaca iptal edilirse, uygulama mağazaya yeniden ulaştığında reklamlar geri gelebilir."
          ]
        },
        {
          "title": "Satın alımları geri yükleme",
          "paragraphs": [
            "Uygulamayı yeniden kurduğunuzda ya da yeni bir cihaza geçtiğinizde, aynı mağaza hesabıyla Premium ve Reklam Kaldır > Satın Alımları Geri Yükle düğmesini kullanabilirsiniz. Aile Premium ve Reklam Kaldır mağaza hesabınıza bağlıdır; uygulama bunun için hesap açtırmaz ve cihaz kimliği toplamaz.",
            "Çocuk profilleri ve ilerleme kayıtları cihazdadır; bunları taşımak için yedekleme özelliğini kullanın."
          ]
        },
        {
          "title": "İnternet olmadan",
          "paragraphs": [
            "Öğrenmek için internet gerekmez. Satın aldığınız haklar mağazanın cihazdaki son onayına göre çevrimdışı da geçerli kalır ve mağazaya yeniden ulaşıldığında güncellenir."
          ]
        },
        {
          "title": "İletişim",
          "paragraphs": [
            "support@lumisoftstudios.com"
          ]
        }
      ]
    },
    "en": {
      "lead": "Terms of use, subscriptions and purchases for Wondermio (Öğrenimo in Turkish). The app is not yet on public sale. Purchases are available only when the store offers the relevant product and price.",
      "sections": [
        {
          "title": "Scope",
          "paragraphs": [
            "These terms cover the use of Wondermio. A parent or legal guardian who downloads and uses the app accepts them. The app is designed to be used by children with an adult's supervision.",
            "If you downloaded the app from the App Store, Apple's Standard Licensed Application End User License Agreement (EULA) also applies; these terms add to it."
          ]
        },
        {
          "title": "Licence",
          "paragraphs": [
            "Lumisoft Studio gives you a non-transferable, non-exclusive right to use the app for personal, family and classroom learning. The app's content, characters, illustrations and sounds belong to Lumisoft Studio and may not be copied or sold without permission."
          ]
        },
        {
          "title": "Learning content",
          "paragraphs": [
            "Content is written against the Turkish national curriculum and the curricula of the other countries the app supports. Where a curriculum is only partly covered, the app and its documents say so. The app does not replace school or a teacher, and parent reports are not a diagnosis or a test result."
          ]
        },
        {
          "title": "Free version and Family Premium",
          "paragraphs": [
            "The app is free to download. The free version includes every letter world, the first games of every topic, selected stories and one child profile. On Android, the free version may show child-safe ads at the end of a game.",
            "Family Premium is a paid monthly or yearly subscription; it opens all content and turns ads off while it lasts. Remove Ads is a one-time purchase; it turns ads off for good and does not open Premium content. Their terms are in the separate Subscription & Purchase Terms.",
            "Core learning outcomes can be completed for free. When Premium ends, extras are hidden and child profiles and progress are retained. Once verification is available, teacher QR access removes ads without opening the Premium extra library."
          ]
        },
        {
          "title": "Acceptable use",
          "paragraphs": [
            "Do not try to get around the app's safety features, the adult check or purchase verification, or distribute modified copies of the app."
          ]
        },
        {
          "title": "Liability",
          "paragraphs": [
            "We build and update the app with care, but we cannot promise it will always work without errors or interruptions. Records are kept only on the device and may be lost with it, so we recommend the backup feature in the Parent Panel. Your rights under consumer law are not affected."
          ]
        },
        {
          "title": "Changes and contact",
          "paragraphs": [
            "If these terms change, the new text is published in the app and at the link on the store page.",
            "For questions and requests, write to the developer contact address on the app's Google Play or App Store page."
          ]
        },
        {
          "title": "Products",
          "paragraphs": [
            "Family Premium is offered as two auto-renewable subscriptions, monthly and yearly. Premium opens every game, every story, more child profiles and detailed progress reports, and turns ads off while it lasts (trial included).",
            "Remove Ads is a one-time purchase that never renews. It turns ads in the free version off for good; it does not open Premium content or change what the free version includes. The same product model is planned for both platforms. Remove Ads is offered only when ads are enabled and its store price matches one month of Premium in the same country.",
            "The current price, currency and subscription period are shown on screen before you buy, exactly as the store provides them. Prices include applicable taxes and may vary by country.",
            "The purchase screen is reached from Parent Panel or Teacher Panel > Premium & Remove Ads, after the adult check. Both panels use the same purchases and the same record of what you own."
          ]
        },
        {
          "title": "Free trial",
          "paragraphs": [
            "If the store offers it to you, your first subscription can start with a free trial. A trial is given once per store account and the store decides who is eligible; if you have used a trial before, none is shown.",
            "You are not charged for the subscription during the trial. Unless you cancel before the trial ends, the subscription starts automatically at the price and period shown on screen.",
            "Your store or bank may show a temporary authorization to verify your payment method; it is not a subscription charge.",
            "If you buy a different plan during a trial, the rest of the trial ends."
          ]
        },
        {
          "title": "Payment and renewal",
          "paragraphs": [
            "Payment is charged to your Google Play or Apple account when you confirm (or when the trial ends, if there is one). Remove Ads is charged once.",
            "App Store: the subscription renews for the same period and price unless auto-renew is turned off at least 24 hours before the end of the current period; your account is charged for renewal within the 24 hours before the period ends.",
            "Google Play: the subscription renews at the end of each period until you cancel. You can cancel at any time before the trial or the period ends.",
            "If a price changes, the store tells you in advance under its own rules."
          ]
        },
        {
          "title": "Cancelling and managing",
          "paragraphs": [
            "Cancel with Premium & Remove Ads > Manage subscription in the app, or directly in Google Play (Payments and subscriptions) or on iPhone/iPad in Settings > your Apple Account > Subscriptions.",
            "After you cancel, Premium stays on until the end of the period you paid for. The app then continues as the free version; child profiles, progress and every profile you created are kept.",
            "When Premium ends, ads may be shown again in the free version on Android. If you bought Remove Ads, ads stay off.",
            "Deleting the app does not cancel the subscription."
          ]
        },
        {
          "title": "Refunds and cancelled purchases",
          "paragraphs": [
            "Refund requests are handled by the store under its own rules: Google Play's refund policy for Google Play, Apple's refund process for the App Store.",
            "When the store refunds or revokes a subscription, Premium ends on the date the store reports. If Remove Ads is refunded or revoked by the store, ads may return once the app reaches the store again."
          ]
        },
        {
          "title": "Restoring purchases",
          "paragraphs": [
            "After reinstalling the app or moving to a new device, use Premium & Remove Ads > Restore Purchases with the same store account. Family Premium and Remove Ads belong to your store account; the app does not ask you to create an account for this and collects no device ID.",
            "Child profiles and progress live on the device; use the backup feature to move them."
          ]
        },
        {
          "title": "Without the internet",
          "paragraphs": [
            "Learning never needs the internet. What you bought keeps working offline according to the store's last confirmation on the device and is updated when the store can be reached again."
          ]
        },
        {
          "title": "Contact",
          "paragraphs": [
            "support@lumisoftstudios.com"
          ]
        }
      ]
    }
  },
  "support": {
    "en": {
      "lead": "Help for parents and teachers using Wondermio, called Öğrenimo in Turkish. Store testing is being prepared; there is no public release yet.",
      "sections": [
        {
          "title": "Contact us",
          "paragraphs": [
            "Email support@lumisoftstudios.com with your device model, operating system, app version, language and a short description. Remove children’s names and personal information from screenshots. Never send passwords or store verification codes."
          ]
        },
        {
          "title": "Progress and teacher tools",
          "paragraphs": [
            "Profiles and learning progress stay on the device. Use the adult area’s backup tools before reinstalling or changing devices. We cannot restore a deleted local database. Selected worksheets are available without Premium; extra story worksheets follow Premium access. Homework and lesson-plan tools are no longer available. Teacher QR verification is not active; scanning a code does not grant verified access."
          ]
        },
        {
          "title": "Camera and sound",
          "paragraphs": [
            "Teacher QR scanning is optional and behind the parental gate. If you deny camera access, other learning activities remain available. No photos, video or audio are saved. For sound issues, check the device volume and app settings; some narration uses device speech."
          ]
        },
        {
          "title": "Premium, trials and restoration",
          "paragraphs": [
            "Monthly and yearly Premium products are being prepared. A 7-day trial is offered only to store-eligible accounts. Use Restore Purchases with the same store account. Manage or cancel in your Apple or Google subscription settings. Deleting the app does not cancel a subscription. Refunds are handled by the store."
          ]
        },
        {
          "title": "Advertising and privacy",
          "paragraphs": [
            "Live ads remain off. iPhone and iPad do not request ATT permission or use IDFA. Android’s ad integration is child-directed and non-personalized; it will not be enabled before compliance checks. Remove Ads is not sold where no ads are present. Use the local deletion controls for app data and email us for support-correspondence requests."
          ]
        }
      ]
    },
    "tr": {
      "lead": "Veliler ve öğretmenler için Öğrenimo desteği. İngilizce adımız Wondermio. Mağaza testleri hazırlanıyor; henüz herkese açık yayın yoktur.",
      "sections": [
        {
          "title": "Bize ulaşın",
          "paragraphs": [
            "Cihaz modeli, işletim sistemi, uygulama sürümü, dil ve sorunun kısa açıklamasıyla support@lumisoftstudios.com adresine yazın. Ekran görüntülerinden çocuk adlarını ve kişisel bilgileri kaldırın. Parola veya mağaza doğrulama kodu göndermeyin."
          ]
        },
        {
          "title": "İlerleme ve öğretmen araçları",
          "paragraphs": [
            "Profiller ve öğrenme ilerlemesi cihazda kalır. Yeniden kurulum veya cihaz değişikliği öncesi yetişkin alanından yedek alın. Silinmiş yerel veritabanını geri getiremeyiz. Seçili çalışma kâğıtları Premium gerektirmez; ek hikâye çalışma kâğıtları Premium erişimine bağlıdır. Ödev ve ders planı araçları kaldırılmıştır. Öğretmen QR doğrulama hizmeti etkin değildir; kod okutmak doğrulanmış erişim sağlamaz."
          ]
        },
        {
          "title": "Kamera ve ses",
          "paragraphs": [
            "Öğretmen QR taraması isteğe bağlıdır ve yetişkin kontrolünün arkasındadır. Kamera iznini reddetmek diğer öğrenme etkinliklerini engellemez. Fotoğraf, video veya ses kaydedilmez. Ses sorunu için cihaz sesini ve uygulama ayarlarını kontrol edin; bazı anlatımlar cihazın konuşma hizmetini kullanır."
          ]
        },
        {
          "title": "Premium, deneme ve geri yükleme",
          "paragraphs": [
            "Aylık ve yıllık Premium ürünleri hazırlanıyor. 7 günlük denemeyi yalnız mağazanın uygun gördüğü hesaplar kullanabilir. Aynı mağaza hesabıyla Satın Alımları Geri Yükle seçeneğini kullanın. Aboneliği Apple veya Google abonelik ayarlarından yönetin veya iptal edin. Uygulamayı silmek aboneliği iptal etmez. İadeyi mağaza değerlendirir."
          ]
        },
        {
          "title": "Reklamlar ve gizlilik",
          "paragraphs": [
            "Canlı reklamlar kapalıdır. iPhone ve iPad ATT izni istemez, IDFA kullanmaz. Android reklam entegrasyonu çocuklara yönelik ve kişiselleştirilmemiştir; uygunluk kontrolleri bitmeden açılmaz. Reklam olmayan platformda Reklam Kaldır satılmaz. Uygulama verilerini yerel silme kontrolleriyle yönetin; destek yazışmaları için bize yazın."
          ]
        }
      ]
    }
  }
}
};
