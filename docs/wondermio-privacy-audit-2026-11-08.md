# Öğrenimo / Wondermio gizlilik kaynak denetimi

İnceleme: **8 Kasım 2026**, Europe/Istanbul. Bu belge gözlenen kaynak ve paket kanıtını kaydeder; gerçek cihaz ağ kaydı veya mağaza panelinde kaydedilmiş beyan değildir. Mağazada doldurulacak tablolar: [mağaza kontrol listesi](wondermio-store-privacy-checklist-tr.md).

## Kapsam ve koruma

- Web: `F:/Projeler/lumi-apps-website`; başlangıç HEAD `f26839d750c0f947e67caea6e9906b6f554f53f2`. İstekteki eski `C:/Users/erolo/lumi-apps-website` yolu yok.
- Uygulama: `F:/Projeler/ogrenimo`; HEAD `11d77f0`, son derleme kodu `d6e0327`. Başlangıçta uygulama çalışma ağacı temizdi.
- Uygulama kaynakları, IPA/AAB, ürün kimlikleri, haklar, abonelikler ve fiyatlar değiştirilmedi. Yeni mobil derleme veya mağaza gönderimi yapılmadı.
- Webde başlangıçta 10 değiştirilmiş takipli dosya vardı: Wondermio marka düzeltmeleri ve daha önce hazırlanmış yasal metinler. Başlangıç kopyaları ve patch `artifacts/privacy-2026-11-08/` içinde korundu; bu görevden önceki çalışma ayrıca Git'e kaydedilir. Önceden var olan `erseroloLumiAppsWebsite` dosyası dışarıda bırakılır.
- `/wandermio/` eski teknik URL'si korunur; görünen İngilizce marka **Wondermio**, Türkçe marka **Öğrenimo**.

## Derleme ve SDK kanıtı

| Bileşen | Doğrulanan değer | Kanıt |
|---|---|---|
| iOS | 1.0.0 (7), `com.lumisoft.ogrenimo` | Mevcut IPA `Info.plist` ve `EXConstants.bundle/app.config` |
| Android | 1.0.0, versionCode 12, aynı paket | Mevcut AAB `base/assets/app.config`, önceki derleme raporu ve mevcut birleşik manifest |
| React Native reklam sarmalayıcısı | `react-native-google-mobile-ads` 17.2.0 | Kurulu paket; iOS ve Android autolink açık |
| Google Mobile Ads | Android 25.4.0; iOS paket bağımlılığı 13.6.0 | Android çözülmüş release dependency XML; kurulu reklam paketinin `sdkVersions` kaydı. iOS sürümü bu bağımlılık pinidir; ayrı Podfile.lock bu çalışma kopyasında yok |
| RevenueCat | `react-native-purchases` 11.0.1, PurchasesHybridCommon 20.4.0; iOS RevenueCat 5.101.0 pini | Kurulu paket, podspec, `plugins/withRevenueCatPods.js`; IPA'da RevenueCat ve PurchasesHybridCommon gizlilik paketleri |
| Play Billing | 9.1.0 | Android release dependency XML |
| Doğrudan satın alma geri dönüşü | `expo-iap` 6.3.x kaynakta mevcut; RevenueCat derlemesinde sağlayıcısı çalıştırılmıyor | `src/premium/purchases.ts`, `src/config/store.ts` |
| Android QR | ML Kit barcode-scanning 17.3.0; play-services-mlkit-barcode-scanning 18.3.1; ML Kit common 18.11.0 | Android çözülmüş bağımlılık XML |

Dosya bütünlüğü (mevcut derleme raporundaki değerlerle eşleşti):

- `F:/DevCache/ogrenimo-ios-b7/ogrenimo-1.0.0-7.ipa`: SHA-256 `0ece7391e86006201c7cd8dde242817858a64f6ec2e6cbb21d5e3735743c971d`.
- `F:/DevCache/ogrenimo-aab/ogrenimo-1.0.0-vc12-internal.aab`: SHA-256 `846619afa14aea30810e7498c9aa79f73dbd4e19e81e11f70b033aa6defb6914`.

İki paketin gömülü ayarlarında `purchaseSystem: revenuecat`, `storeTestAds: true`, platformların gerçek reklam uygunluk anahtarları `false`. Bu nedenle iOS build 7 ve Android vc12 **test reklamı** ister. Düz production yapılandırmasında test anahtarı yoktur; uygunluk anahtarları kapalıyken reklam birimi seçilmez. Gerçek kimliklerin yapılandırmada yazılı olması canlı reklamın etkin olduğu anlamına gelmez.

## Gerçek veri akışları

| Veri / işlem | Cihazda kalan | Dışarıya giden / alıcı | Amaç ve sınır |
|---|---|---|---|
| Çocuk profili | İsteğe bağlı takma ad, yaş bandı, sınıf, dil, avatar, tercihler | Geliştirici veya SDK'lara otomatik profil aktarımı bulunmadı | Yerel öğrenme kişiselleştirmesi; hesap ve tam doğum tarihi gerekmiyor |
| Etkinlik / ilerleme | Sonuçlar, beceri ölçümleri, öğrenme ilerlemesi | Geliştirici sunucusuna ya da RevenueCat/AdMob'a gönderilmiyor | Veli raporu ve devam etme |
| Reklam sıklığı | `ads.*`: cihaz genelinde sayaç, kısa tamamlanma kimlikleri, gösterim zamanları | Uygulamanın sayacı gönderilmiyor; Google kendi reklam etkileşimlerini işleyebilir | Çocuk kimliği içermez; sıfırlamada korunur |
| Yedek / rapor | Önce cihazda dosya | Yetişkin paylaşım menüsünde hedef seçerse o hedefe | Kullanıcı başlatır; dış kopyalar uygulama silme düğmesiyle silinmez |
| Kamera / QR | Görüntü işleme cihazda | Görüntü ve çözülen kod doğrulama sunucusuna gönderilmiyor | `teacherVerification` mevcut uygulamada her zaman unavailable; QR hak vermez |
| Android ML Kit | QR içeriği cihazda | Google'a SDK kullanım ve tanılama ölçümleri; kurulum kapsamlı tanımlayıcılar | Reklamlardan bağımsız; Premium bunu kapatmıyor |
| RevenueCat | Son onaylanan haklar ve çevrimdışı önbellek | SDK anonim müşteri kimliği, ürün/işlem/makbuz veya satın alma belirteci, tarihler, hak/abonelik durumu; bağlantı ve teknik bağlam | Doğrulama, geri yükleme, yenileme/iade eşitleme ve satın alma istatistikleri; kart veya çocuk profili değil |
| StoreKit / Play Billing | Sonuç/hak kaydı | İşlemi mağaza ve RevenueCat yönetir | Mağaza kart/ödeme hesabını işler; geliştiriciye kart ve parola verilmez |
| AdMob | Yerel sayaç ayrı | Reklam hizmeti Google'a bağlanır; sağlayıcı dokümanları IP, yaklaşık konum, uygulama/cihaz kapsamlı kimlik, etkileşim, reklam verisi, tanılama kategorilerini açıklar | Testte de ağ bağlantısı var; sahadaki tek tek paketler bu görevde kaydedilmedi |
| Destek | Uygulama içi otomatik destek yüklemesi yok | Yetişkin e-posta gönderirse adres ve yazışma Lumisoft Studio'ya | Talebi cevaplama; e-posta ile iletilen veri mobil uygulamanın otomatik analizi değildir |

Kaynaklar: `src/storage/{types,sqliteDatabase,backup,backupIO}.ts`, `src/teacher/verification.ts`, `src/premium/{revenueCatProvider,storeSync,purchases}.ts`, `src/ads/{adService,adPolicy,googleAds.native}.ts` ve `src/config/{ads,store,legal}.ts`.

## Reklam gösterimi ile veri bağlantısı aynı olay değil

- Ortak sayaç her **5 tamamlanmış etkinlikte** bir fırsat biriktirir; en fazla bir fırsat tutulur. Ekran açmak veya yarıda çıkmak tamamlanma sayılmaz.
- Gösterim: sonuçtan ayrılma gibi doğal arada; sonuç kutlaması en az 3 saniye; açılıştan sonra 120 saniye; en az 5 dakika ara; son 24 saatte en fazla 3 reklam.
- 2–4 yaşta ve ilk oturumda **gösterim yok**. Premium, deneme, Reklam Kaldır, QA veya inceleme erişimi yeni reklam isteğini engeller.
- Önemli ayrım: `countCompletion` fırsat oluştuğunda 2–4 yaş dışındaki ücretsiz profilde arka planda `prepare()` çağırabilir. İlk oturum ve gösterim zaman sınırları `decideAdBreak` içindedir; dolayısıyla **ilk oturumda reklam gösterilmez** ifadesi, ilk oturumda SDK'nın asla başlatılmayacağı iddiası değildir. Ön yükleme politikada açıklandı.
- Banner, rewarded, app-open entegrasyonu kullanılmıyor. Reklam yüklenemediğinde gezinme bekletilmiyor.
- Reklamsız hak, daha önce gönderilmiş verileri silmez; RevenueCat ve QR teknik telemetrisi sürer. Daha önce başlatılmış SDK için genel bir "kapat ve bütün telemetriyi bitir" kanıtı yoktur.

## Çocuk ayarları, ATT ve manifest

Adaptör reklam SDK'sı başlatılmadan önce `tagForChildDirectedTreatment: true`, `tagForUnderAgeOfConsent: true`, G içerik sınırı ve `ageRestrictedTreatment: CHILD` verir; istek ayrıca `requestNonPersonalizedAdsOnly: true` kullanır. Android sarmalayıcısında yeni yaş alanının `child` / `CHILD` eşleşme sorunu mevcut yorum ve native kaynakla doğrulandı; eski COPPA/TFUA bayrakları ayrı uygulanıyor. Bu görevde koda müdahale edilmedi. Google iki eski bayrak birlikteyse çocuk etiketinin öncelikli olduğunu açıklıyor. [Google iOS hedefleme](https://developers.google.com/admob/ios/targeting).

Android uygulama ve release manifestlerinde AD_ID, AdServices reklam/attribution/topics izinleri yok; konum ve mikrofon engelli. Kamera yetişkinin isteğe bağlı QR aracı için mevcut. iOS IPA'da `GADApplicationIdentifier`, `GADDelayAppMeasurementInit=true` ve kamera açıklaması var; `NSUserTrackingUsageDescription` ve `SKAdNetworkItems` yok. Uygulama ATT çağrısı yapmıyor. Bu, bütün olası tanımlayıcıların veya Apple tanımındaki bütün takip yollarının yokluğunu kanıtlamaz.

IPA'daki **GoogleMobileAdsResources.bundle/PrivacyInfo.xcprivacy**:

| Veri | Linked | Tracking | Genel SDK amaçları |
|---|---|---|---|
| Coarse Location | true | false | ThirdPartyAdvertising, DeveloperAdvertising, Analytics |
| Product Interaction | true | false | Aynı |
| Advertising Data | true | false | Aynı |
| Device ID | true | **true** | Aynı |
| Performance Data | false | false | Aynı |
| Other Diagnostic Data | false | false | Aynı |
| Crash Data | false | false | Analytics |

RevenueCat manifesti PurchaseHistory, Linked=false, Tracking=false, AppFunctionality kaydeder. Ancak RevenueCat'in mağaza beyan rehberi dashboard istatistikleri için **Analytics** de ister; yalnız manifesti kopyalamak eksik olur. PurchasesHybridCommon veri toplama dizisi boş; bu, RevenueCat ana hizmeti veri toplamıyor anlamına gelmez.

Google manifesti SDK'nın genel deklarasyonudur: Device ID tracking=true kaydını sırf ATT sorulmuyor diye yok saymak da, uygulamanın mutlaka takip yaptığının kanıtı saymak da doğru değildir. Bu dosya değiştirilmedi. Son App Privacy cevabı için çocuk ayarlı istekler, IDFA dışı kimlikler, Google/RevenueCat hesap entegrasyonları ve gerçek cihaz trafiği birlikte incelenmelidir.

Google'ın şu anki iOS/Android açıklama sayfaları **13.12.0 / 25.5.0** için günceldir; kurulu sürümler daha eskidir. Sayfaları sürüme özel kesin trafik kanıtı gibi kullanmadık. [iOS veri açıklaması](https://developers.google.com/admob/ios/privacy/data-disclosure), [Android veri açıklaması](https://developers.google.com/admob/android/privacy/play-data-disclosure).

## RevenueCat yapılandırması

- SDK kullanıcı kimliği verilmeden yapılandırılıyor; anonim kimliği SDK oluşturur. `logIn`, müşteri adı/e-posta özelliği veya reklam ilişkilendirmesi çağrısı bulunmadı.
- `automaticDeviceIdentifierCollectionEnabled: false`, `diagnosticsEnabled: false`, `shouldShowInAppMessagesAutomatically: false`.
- Açılış/öne dönüşte müşteri hakları sorgulanıyor; yalnız ücretli kullanıcılar için veya yalnız düğmeye basınca bağlantı iddiası yanlış olur.
- Eski doğrudan satın almalar bir defa eşitlenebilir. Aylık/yıllık Premium ile tek seferlik Reklam Kaldır ayrı haklar; geri yükleme mağaza hesabıyla, profil ilerlemesiyle değil.
- RevenueCat panelindeki Integrations/Webhooks/Experiments ve saklama sözleşmeleri bu oturumda okunamadı; kaynakta çağrı olmaması panel entegrasyonlarının yokluğunu kanıtlamaz. Bunun mağaza tablolarındaki etkisi koşullu işaretlendi.

## Silmenin sınırı ve hukuki açıklar

`survivesWipe()` yalnız şema sürümünü ve `premium.*` / `ads.*` meta kayıtlarını korur. Yerel sıfırlama profil/sonuç/beceri ve diğer ayarları siler; satın alma hakları ve reklam sınırları kalır. RevenueCat SDK müşteri kimliğinin ayrı saklaması ve sunucu kaydı da uygulama düğmesiyle silinmez. Uygulamayı kaldırma, cihaz/bulut yedekleri ve sunucu silme üç ayrı işlemdir.

Web politikası KVKK/GDPR haklarını, COPPA ebeveyn başvurusunu, iletişim yolunu, uluslararası teknik işlemeyi ve rıza ile yetişkin kapısı farkını açıklar. Tam uyum sertifikası verilmez. Şu kanıtlar hesap sahibi / hukuk sorumlusu tarafından tamamlanmalıdır:

1. **Yasal veri sorumlusu kimliği, posta adresi ve gerekli telefon/temsilci bilgileri:** kaynakta doğrulanmış tek yayıncı adı Lumisoft Studio, e-posta `support@lumisoftstudios.com`. Marka adı her durumda yasal kişi kimliğinin yerine geçmez. Bilgi uydurulmadı; çocuk gizliliği bildirimindeki operatör bilgileri tamamlanmalı.
2. **İşlem bazında hukuki dayanak ve rıza:** çocuk etiketi veya yetişkin çarpma sorusu doğrulanabilir ebeveyn rızası değildir. Uygulama başında RevenueCat bağlantısı ve reklam ön yüklemesi var; gerekli rızanın öncesinde işleme olup olmadığı değerlendirilmelidir. UMP kütüphanesi native bağımlılıklarda olsa da uygulamada aktif UMP form akışı bulunmadı; varmış gibi yazılmadı.
3. **Uluslararası aktarım:** sağlayıcı sözleşmesi, veri işleyen rolleri, gerekli KVKK m.9 / GDPR aktarım güvenceleri ve alt işleyenler hesap düzeyinde doğrulanmalı. Belirli SCC/standart sözleşme imzalanmış gibi ifade kullanılmadı.
4. **Saklama ve silme operasyonu:** destek posta kutusuna erişim, müşteri kaydını bulma/silme ve sağlayıcı kısıtları doğrulanmalı. Gizlilik metni toplu ve kesin bir silme süresi uydurmuyor.
5. **Ticari metin kapsam dışı bulgu:** daha önceki kullanım koşulları Reklam Kaldır fiyatının bir aylık Premium'la eşit olması şartını içeriyor; son kaynak bu eşitliği satış engeli olarak uygulamıyor. Kullanıcının ticari şartları/fiyatları değiştirmeme talimatı nedeniyle bu cümle değiştirilmedi; hesap sahibi ayrı ticari metin incelemesinde değerlendirmeli.
6. Uygulama içindeki bazı eski `i18n` özetleri iOS reklamının kapalı olduğunu söylüyor; son `src/legal/documents.ts` daha yeni. Uygulama koduna dokunmama sınırı gereği düzeltilmedi. Sonraki yetkili uygulama güncellemesinde eşleştirilmeli.

Hukuki kaynaklar: [FTC COPPA kuralı ve güncellemeleri](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa), [GDPR metni](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng), [KVKK — aydınlatma yükümlülüğü](https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-). COPPA'nın 2025 değişiklikleri dikkate alınmalı; eski FAQ tek başına güncel kural sayılmamalı.

## Web doğrulaması

- `npm.cmd run lint`: PASS, hata/uyarı yok.
- `node node_modules/typescript/bin/tsc --noEmit`: PASS.
- `npm.cmd run build:cloudflare`: PASS; 67 statik çıktı; 65 HTML'de bağlantı, anchor, başlık, main ve dil denetimi.
- Jelly Chain Rush 25, Roto Blocks 17 indirme senaryosu: PASS.
- 16 yeni ürün/yasal sayfa metaveri testi: PASS.
- Yeni gizlilik sözleşmesi testi: iki mevcut yol, karşılıklı canonical/hreflang, güncelleme tarihi, hizmet bağlantıları, build/SDK açıklamaları ve silme sınırları PASS.
- `npm.cmd run verify:contracts`: PASS; 46 eski public yol, 53 korunan dosya, Neon/LumiBaby yönlendirmeleri ve mağaza bağlantıları.
- Playwright: Türkçe ve İngilizce gizlilik sayfaları 390 ve 1440 piksel genişlikte; yatay taşma yok; paragraf ve başlıklar sığıyor, 11 eşleşen bölüm, doğru canonical ve dil. Ekran görüntüleri yerelde incelendi.
- Mobil menüden TR→EN, masaüstünden EN→TR geçişi doğru karşılık sayfaya ulaşıyor; menü kapanıyor; pageerror yok. Footer ve ürün gizlilik/koşullar/destek yolları çalışıyor.
- Play Console bağlantısı herkese açık Google Play business sayfasına yönlendi; kimliği doğrulanmış panel oturumu yoktu.
- App Store Connect okuma girişimi `authResult=FAILED` ile giriş sayfasına yönlendi. Kids durumu, kayıtlı gizlilik etiketi ve canlı mağaza adı doğrulanamadı.
- Uygulama lint/test/build'i çalıştırılmadı: uygulama salt okunur denetlendi, web testleri çalıştırıldı. Cihaz reklam/ödeme testleri yapılmış gibi raporlanmadı.

Canlı yayın kimliği ve son HTTP sonuçları [yayın raporuna](wondermio-privacy-release-2026-11-08.md) kaydedilir.