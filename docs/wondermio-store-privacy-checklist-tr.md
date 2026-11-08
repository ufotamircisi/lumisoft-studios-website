# Öğrenimo / Wondermio — mağaza gizlilik kontrol tablosu

**8 Kasım 2026.** Hedef: iOS **1.0.0 (7)** ve Android **versionCode 12** kaynak/paket davranışı. [Kanıt ve sınırlar](wondermio-privacy-audit-2026-11-08.md). Bu dosya uygulanabilir hazırlıktır; App Store Connect veya Play Console'da seçim yapılmış / yayımlanmış değildir.

Gizlilik bağlantıları:

- Türkçe: https://www.lumisoftstudios.com/tr/ogrenimo/gizlilik/
- İngilizce ve mevcut mağaza varsayılanı: https://www.lumisoftstudios.com/wandermio/privacy/
- Eski `https://lumisoftstudios.com/wandermio/privacy/` yolu da korunur.

## 1. Apple App Privacy: ekranda yapılacaklar

App Store Connect → My Apps → Wondermio → App Privacy. Doğru uygulama kimliği: `6828461134`, bundle `com.lumisoft.ogrenimo`.

1. Privacy Policy URL alanına mevcut İngilizce URL'yi girin / koruyun; Türkçe yerelleştirmeye Türkçe URL'yi ekleyin. Privacy Choices URL istenirse aynı politika ebeveyn hakları ve silme yolunu içerir.
2. Data Collection sorusunda **Yes, we collect data from this app**. **Data Not Collected uygun değil**: RevenueCat işlem yapıyor; test reklamları da sıfır veri anlamına gelmez.
3. Aşağıdaki veri türlerini ekleyin. Google satırları SDK deklarasyonu ve kullanımına dayanır; davranış doğrulaması gerektiren hücreleri kesinleştirmeden son Publish işlemini yapmayın.

| Apple kategori / veri türü | Toplanıyor mu? | Amaç seçimi | Linked to user? | Used for tracking? |
|---|---|---|---|---|
| Purchases → Purchase History | **Evet**, RevenueCat | **App Functionality + Analytics** | **Hayır**, yalnız anonim RC kimliği ve tanınabilir kimlikle ilişkilendirme yoksa; panel entegrasyonlarını kontrol edin | **Hayır**, RC satın alma verisi reklam takibine aktarılmıyorsa; panel entegrasyonlarını kontrol edin |
| Location → Coarse Location | Google reklam hizmetinin işlediği kategori olarak **Evet**; IP'den türetme | Third-Party Advertising + Analytics | **Evet**: IPA Google manifesti Linked=true; anonimleştirme kanıtı yok | Manifest false; mevcut çocuk yapılandırmasında takip kullanımı tespit edilmedi. Hesap/ağ kontrolüyle teyit edin |
| Identifiers → Device ID | **Evet**: IDFA dışında uygulama/geliştirici kapsamlı kimlikler de bu sınıfta | Third-Party Advertising + Analytics | **Evet**: IPA manifesti Linked=true | **DOĞRULAMA GEREKLİ**. Google manifesti true, uygulama ATT istemiyor ve çocuk etiketi kullanıyor. Otomatik Yes veya No seçmeyin |
| Usage Data → Product Interaction | **Evet**: SDK uygulama/reklam etkileşimi; çocuğun yerel öğrenme sonuçları değil | Third-Party Advertising + Analytics | **Evet**: IPA manifesti Linked=true | Manifest false; hesap/ağ kontrolüyle teyit edin |
| Usage Data → Advertising Data | **Evet**: reklam gösterim ve etkileşim kaydı | Third-Party Advertising + Analytics | **Evet**: IPA manifesti Linked=true | Manifest false; hesap/ağ kontrolüyle teyit edin |
| Diagnostics → Crash Data | Google SDK deklarasyonunda **Evet**; ayrı Crashlytics yok | **Analytics** (IPA manifesti bu satır için yalnız bunu bildiriyor) | **Hayır**: IPA manifesti Linked=false; gerçek akış farklıysa düzeltin | Manifest false; mevcut yapılandırmada reklam takibi amacı tespit edilmedi |
| Diagnostics → Performance Data | Google SDK deklarasyonunda **Evet** | Third-Party Advertising + Analytics | **Hayır**: IPA manifesti Linked=false; gerçek akışı teyit edin | Manifest false; mevcut yapılandırmada reklam takibi amacı tespit edilmedi |
| Diagnostics → Other Diagnostic Data | Google SDK deklarasyonunda **Evet** | Third-Party Advertising + Analytics | **Hayır**: IPA manifesti Linked=false; gerçek akışı teyit edin | Manifest false; mevcut yapılandırmada reklam takibi amacı tespit edilmedi |

RevenueCat Purchase History seçimleri resmi rehberde iki amaçla istenir; manifestte yalnız App Functionality yazması Analytics'i atlamak için gerekçe değildir. Anonim müşteri kimliği için Linked=No ancak kimliği başka kayıtlarla belirleyemiyorsanız geçerlidir. [RevenueCat Apple rehberi](https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy).

Google'ın genel manifesti DeveloperAdvertising amacı da listeliyor. Uygulamada geliştiricinin pazarlama kampanyası veya kendi reklam hedeflemesi saptanmadı; bu amacı sırf genel manifestte var diye seçmeyin. Kullanıyorsanız ayrıca ekleyin. Kaynaktaki ayrı Analytics SDK'sının yokluğu Google reklam ölçümünü ortadan kaldırmaz. [Google iOS veri açıklaması](https://developers.google.com/admob/ios/privacy/data-disclosure).

### Eklenmeyecek / koşullu alanlar

| Alan | Mevcut kanıta göre işlem |
|---|---|
| Contact Info → Name / Email / Phone | Uygulama bu müşteri özelliklerini göndermiyor; RC için eklemeyin. Yalnız uygulama dışında, yetişkinin başlattığı destek e-postası ayrı değerlendirilir; uygulama içi form eklenirse yeniden inceleyin |
| Identifiers → User ID | Özel uygulama hesabı veya özel appUserID yok; RC rehberine göre yalnız anonim kimlik için ayrıca eklenmez. Panel entegrasyonları ilişkilendirirse yeniden değerlendirin |
| Financial Info → Payment Info / Credit Info | Kart ve banka verisini geliştirici/RC almıyor; Purchase History ile karıştırmayın |
| Precise Location | İzin/uygulama çağrısı bulunmadı; IP'den Coarse Location ile karıştırmayın |
| User Content → Photos / Videos / Audio | Yerel QR kamera izni tek başına bu verilerin toplanması değildir; görüntü yüklenmiyor. Destek talebi veya başka özellik değişirse yeniden inceleyin |
| Çocuk takma adı, yaş/sınıf ve öğrenme sonuçları | Cihazdan otomatik gönderilmiyor; yalnız yerel işleme Apple'ın cihaz dışı toplama beyanıyla aynı değildir |
| ML Kit | Bu uygulamada Android QR bileşeni; iOS için Android telemetri kategorilerini eklemeyin |

Apple'ın Linked kavramı yalnız gerçek adla eşleştirme değildir; cihazla bağlantı da önemlidir. ATT yokluğu veya IDFA'nın sıfır olması tek başına No Tracking kanıtı değildir. [Apple App Privacy tanımları](https://developer.apple.com/app-store/app-privacy-details/).

### Tracking cevabını kesinleştirmek için

- Son IPA/Xcode privacy report'taki Google Device ID satırını yukarıdakiyle karşılaştırın; SDK manifestini silmeyin veya değiştirmeyin.
- iPhone'da açılış, öne dönüş, ücretsiz öğrenme / ilk 5 tamamlanma ve reklam ön yükleme, test reklamı, satın alma, geri yükleme, Premium ve Reklam Kaldır akışlarını inceleyin. IDFA, IDFV/diğer uygulama kimlikleri ve SDK uç noktaları ayrı kaydedilmeli. TLS nedeniyle görülemeyen payload'lar için sağlayıcı teyidi gerekir.
- AdMob mediation/adapter ve bağlı ölçüm ayarlarını, RevenueCat Integrations/Webhooks/Experiments sayfalarını okuyun. Kaynaktaki `automaticDeviceIdentifierCollectionEnabled=false` panelde satın alma olaylarının başka platformlara gönderilmediğini kanıtlamaz.
- Apple'ın tanımındaki çapraz şirket verisiyle reklam hedefleme/ölçüm bağlantısı yoksa ilgili takip cevapları **No** olabilir. Varsa mevcut ATT istemeyen çocuk uygulamasında yalnız formu Yes yaparak çözülmüş saymayın; ayrı uygulama incelemesi gerekir. Bu görev mobil kodu değiştirmedi.
- Son Nutrition Label önizlemesinde Purchase History ve doğrulanan Google kategorilerini kontrol edin; “No data collected” kalmamalı. Tracking alanı bu kontrol tamamlanana kadar **kesinleştirilmedi**.

## 2. Google Play Data Safety

Play Console → `com.lumisoft.ogrenimo` → Policy and programs / App content → Data safety. Mevcut kaydedilmiş cevaplar bu oturumda okunamadı; aşağıdaki kontrol kaynak ve paketle karşılaştırma içindir. Uygulamadaki eski `docs/store/DATA_SAFETY.md` dosyasında "yalnız reklam", "iletişim adresi yok", "iOS SDK yok" gibi geçmiş ifadeler bulunuyor; son kaynak için esas alınmamalı.

| Genel soru | Hazırlanacak cevap |
|---|---|
| Gerekli veri türlerinden herhangi biri toplanıyor / paylaşılıyor mu? | **Evet**: RevenueCat; reklamlarda AdMob; QR'da ML Kit |
| Aktarım şifreli mi? | **Evet**, bu hizmetlerin HTTPS/TLS bağlantıları için. Panelde ek entegrasyon varsa onu da doğrulayın |
| Silme talebi yolu var mı? | Politika `support@lumisoftstudios.com` iletişimini ve yerel silme sınırlarını içeriyor. **Evet** cevabını kaydetmeden önce destek posta kutusunu ve RC müşteri silme yetkinizi doğrulayın |
| Hesap oluşturuluyor mu? | Uygulama hesabı **yok**. Yerel profil ve anonim RC kimliğini kullanıcı tarafından açılan hesapla karıştırmayın. Hesap oluşturma/silme anketi varsa “uygulamada hesap oluşturulmaz” yolunu kullanın |
| Bağımsız güvenlik değerlendirmesi var mı? | Kanıt bulunmadı; sertifika / MASVS denetimi yapılmış gibi işaretlemeyin |

| Veri türü | Collected | Shared | Geçici mi? / zorunluluk | Amaç ve kaynak |
|---|---|---|---|---|
| Financial info → Purchase history | **Evet** | RC yalnız hizmet sağlayıcıysa **Hayır**; hizmet sağlayıcı olmayan panel entegrasyonu varsa yeniden değerlendirin | **Ephemeral: No; Required**, RC rehberi | **App functionality + Analytics**; anonim müşteri, işlem/makbuz/ürün ve hak durumu |
| Location → Approximate location | **Evet**, AdMob | **Evet**, AdMob | Yalnız geçici varsaymayın; reklam etkin ücretsiz akışta kapatma seçeneği yok. Premium tek başına Optional gerekçesi değildir | Advertising or marketing, Analytics, Fraud prevention/security/compliance; IP'den tahmin |
| App activity → App interactions | **Evet**, AdMob; ML Kit API kullanım olayları ayrıca | AdMob için **Evet**; ML Kit'in tek başına işlediği akış için üçüncü taraf paylaşımı bildirilmez | Reklam akışı zorunlu; QR özelliği kullanıcı tercihine bağlı. Birleşik kategori beyanında tüm akışlar kapsanmalı | Reklam, analiz, güvenlik; QR için Analytics / App functionality |
| App info and performance → Crash logs | AdMob SDK çökme kayıtları için **Evet** | AdMob için **Evet** | Yalnız geçici işleme iddiası doğrulanmadı; reklam akışında zorunlu | Analytics ve gereken güvenlik amaçları; ayrı Crashlytics bulunmuyor |
| App info and performance → Diagnostics | **Evet**, AdMob + ML Kit | AdMob için **Evet**; yalnız ML Kit verisi için paylaşım yok | Kalıcı saklama olmadığı kanıtlanmadı; Optional değerlendirmesi özelliğe göre | SDK performansı, hata, API olayları; Analytics / App functionality; AdMob reklam/güvenlik amaçları |
| Device or other IDs | **Evet**, AdMob uygulama kümesi / diğer izinli kimlikler + ML Kit kurulum kimlikleri | AdMob için **Evet**; yalnız ML Kit akışında paylaşım yok | Reklam akışında zorunlu; QR isteğe bağlı özellik | Reklam, analiz ve güvenlik; **AAID gönderiliyor iddiası yok**: izin kaldırılmış |
| Personal info → Name / Email; child progress | Otomatik uygulama akışında **Hayır** | **Hayır** | Yerel profiller ve uygulama dışı gönüllü destek e-postası ayrı | Özel RC müşteri alanı ve hesap yok |
| Payment info, precise location, contacts, audio, photos/video | Mevcut cihaz dışı uygulama akışında **Hayır** | **Hayır** | Kamera görüntüsü cihazda; mağaza ödeme bilgisi ayrı | Kamera izni = fotoğraf toplama değildir |

RevenueCat'in sabit cevapları: satın alma geçmişi toplanır, geçici değildir, kapatılamaz, işlevsellik ve analiz amacı vardır. Hizmet sağlayıcı istisnası yalnız o ilişki için uygulanır. [RevenueCat Play rehberi](https://www.revenuecat.com/docs/platform-resources/google-platform-resources/google-plays-data-safety).

AdMob'un IP/etkileşim/tanılama/kimlik verileri Google tarafından otomatik işlenebilen kategorilerdir. Form kurulu sürüm, gerçek test/canlı akışı ve tüm aktif sürümlerle eşleşmeli; yalnız SDK kapasitesinden ek kişisel veri kategorileri türetilmemeli. [Google Android veri açıklaması](https://developers.google.com/admob/android/privacy/play-data-disclosure).

ML Kit QR içeriğini sunucuya göndermez, teknik API ölçümlerini gönderir; resmi rehber bunlar için HTTPS ve üçüncü taraflara aktarım olmadığını belirtir. AdMob'la aynı kategorinin paylaşım cevabı, AdMob nedeniyle yine Yes olabilir. [ML Kit Play açıklaması](https://developers.google.com/ml-kit/android-data-disclosure).

**Test kanalı ayrımı:** yalnız Internal testing aktifse Data Safety bölümüne muafiyet olabilir; Closed/Open/Production kapsamı farklıdır. vc12 dosya adında “internal” yazması Play'deki gerçek kanalı kanıtlamaz. Paketin hangi kanalda aktif olduğunu panelde kontrol edin; test reklamı olması otomatik muafiyet değildir. [Play Data Safety kapsamı](https://support.google.com/googleplay/android-developer/answer/10787469).

**Families / reklam beyanı:** Hedef yaş gruplarını gerçek 2–12 yaş içeriğine göre doğrulayın; yetişkin gözetimini “yalnız yetişkin hedef kitle” saymayın. İçerdiği reklamlara ilişkin anketi, kullanılan SDK sürümlerinin Families listesi, gerçek reklamın 5 saniyede kapatılabilmesi ve ebeveyn alanı yerleşimleriyle birlikte değerlendirin. Bu görevde Families uyumu otomatik “Evet” işaretlenmedi. [Families kuralları](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en).

## 3. Kids Category ve mağaza adı

**Kaydedilmiş Kids Category durumu: DOĞRULANAMADI.** App Store Connect uygulama bilgisi okuma denemesi giriş ekranına (`authResult=FAILED`) yönlendi. Yerel belgelerde eski “Evet, 6–8” planı ve daha yeni “Hayır olmalı” önerisi var; ikisi de panel kanıtı değildir. **4+ yaş derecesi Kids Category üyeliğini göstermez.**

- Panelde App Information → Category ve Age Ratings / Made for Kids alanlarını, önceki sürümlerin Kids durumunu kontrol edin. Bir kez Kids beklentisi oluşmuşsa kategoriden çıkmak eski yükümlülükleri otomatik kaldırmaz.
- Apple 1.3 üçüncü taraf reklam/analizi sınırlar; sınırlı bağlamsal reklam istisnasının belge ve kreatif insan incelemesi şartları vardır. **5.1.4 çocuklara öncelikli yönelik uygulamaları da kapsar**. Yalnız Kids seçimini kapatmak AdMob için otomatik uygunluk sağlamaz. Mevcut uygulama 2–12 yaşa yöneliktir; metin değişikliğiyle bu gerçeği gizlemeyin.
- Yerel taslak uzun ad **Wondermio: Kids Learning Games**. Gerçek kayıtlı App Store adı okunamadı. 2.3.8 ve 5.1.4 uyarınca Kids kategorisi dışında çocuklara yönelik metadata riski var. Olası alternatif **Wondermio: Learning Games** (24 karakter); bu yalnız ad önerisidir, reklam/çocuk uygunluk sorununu çözmez.
- **Öğrenimo / Wondermio markaları, mağaza adı, paket kimliği ve uygulama içi görseller değiştirilmedi.** Ad değişikliği için hesap sahibi kararı gerekir.

Bu değerlendirme [Apple App Review Guidelines 1.3, 2.3.8 ve 5.1.4](https://developer.apple.com/app-store/review/guidelines/) üzerinden yapılmıştır. Genel bir “AdMob her Kids uygulamasında kesin serbesttir/yasaktır” garantisi verilmez; mevcut veri aktarımı istisna şartlarıyla ayrıca değerlendirilir.

## 4. Hesap sahibinin kalan işlemleri

1. Apple ve Play panellerindeki **mevcut** cevapları bu tablolarla karşılaştırın; gönderilecek/aktif sürümleri ve test kanallarını kaydedin. Bu görev bu panellerde değişiklik yapmadı.
2. App Privacy'de Purchase History ekleyin; Google kategorilerini inceleyin. **Device ID tracking cevabını** cihaz/sağlayıcı ve panel kontrolüyle kesinleştirin; tahmini No Tracking yayımlamayın.
3. RevenueCat Integrations/Webhooks/Experiments ve müşteri silme işlemini, AdMob mediation/ölçüm ayarlarını kontrol edin. Bağlantılı yeni alıcı varsa politikayı ve beyanı da güncelleyin.
4. Kids/Made for Kids üyeliğini ve geçmişini doğrulayın; Apple çocuk kuralları, reklam uygunluğu ve metadata kararını alın. İsim otomatik değiştirilmedi.
5. Yasal veri sorumlusunun tam kimliği, posta adresi/telefon ve gereken temsilci bilgileri; KVKK/GDPR aktarım düzenlemeleri, saklama ve COPPA rıza/istisna dayanaklarını tamamlayın. Bunlar kaynak kodundan uydurulamaz.
6. Gizlilik URL'lerini kaydedip önizlemeyi kontrol edin; yalnız doğrulanan cevapları Publish edin. Bu web yayını uygulamayı veya mağaza beyanını kendiliğinden güncellemez.
7. Gerçek reklam uygunluk anahtarlarını bu görev kapsamında açmayın. Yeni IPA/AAB üretilmedi; mevcut satın almalar ve ürünler korundu.