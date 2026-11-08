# Öğrenimo / Wondermio — gizlilik yayını sonuç raporu

**8 Kasım 2026, Europe/Istanbul.** Türkçe ve İngilizce gizlilik metinleri güncellendi ve mevcut Cloudflare Pages akışıyla canlıya alındı. Mağaza formları hazırlanmıştır; App Store Connect / Play Console'da yayımlanmadı.

## Canlı adresler

- [Türkçe gizlilik politikası](https://www.lumisoftstudios.com/tr/ogrenimo/gizlilik/)
- [English privacy policy](https://www.lumisoftstudios.com/wandermio/privacy/)
- Eski www içermeyen iki adres de **HTTP 200** döndürüyor ve yeni metni gösteriyor. `/wandermio/` yolu değiştirilmedi.

## Değiştirilen dosyalar

Bu görevin uygulaması:

| Dosya | Değişiklik |
|---|---|
| `src/lib/wondermioPrivacy.ts` | Birbiriyle eşleşen TR/EN gizlilik politikaları; 11 bölüm |
| `src/lib/newProductLegal.ts` | Yeni politika kaynağı; koşullardaki veri toplamama ve yalnız Android reklamı ifadelerinin düzeltilmesi; destek gizlilik metni |
| `src/components/NewProductLegalPage.tsx` | 8 Kasım 2026 tarihi; Apple, Google, RevenueCat ve ML Kit bağlantıları; yerelleştirilmiş bağlantı etiketleri |
| `src/components/WandermioPage.tsx` | “iOS'ta reklam SDK'sı yok” iddiasının düzeltilmesi |
| `src/lib/newProductMetadata.ts` | Gizlilik sayfasına özgü TR/EN SEO açıklaması; canonical/hreflang yolları korunuyor |
| `scripts/verify-wondermio-privacy.cjs` | İki dilde yayın sözleşmesi ve bağlantı regresyon denetimi |
| `package.json` | `verify:privacy`; Cloudflare doğrulama zincirine yeni kontrol |
| `docs/wondermio-privacy-audit-2026-11-08.md` | Kaynak, kurulu SDK, imzalı IPA/AAB, saklama/silme kanıtı ve sınırlar |
| `docs/wondermio-store-privacy-checklist-tr.md` | Apple/Google alan bazında seçim tabloları ve manuel adımlar |
| Bu dosya | Test, Git ve canlı yayın kaydı |

Görevden **önce** var olan 10 dosyalık çalışma ayrıca `a4421c2` ile korundu: `scripts/verify-new-products.cjs`, `scripts/verify-public-contract.cjs`, `src/components/{AboutPage,FeaturedProducts,NewProductLegalPage,StudioLegalPages,WandermioPage}.tsx`, `src/lib/{newProductLegal,newProductMetadata,products}.ts`. Bunlar Wondermio marka ve daha önceki yasal metin düzeltmeleriydi; yeni hazırlanmış gibi gösterilmedi. `erseroloLumiAppsWebsite` eski kullanıcı dosyası commit'e dahil edilmedi.

## AdMob nedeniyle eklenenler

- AdMob iOS ve Android'de var. İmzalı iOS **1.0.0 (7)** ve Android **vc12** paketleri yalnız **Google test reklamları** kullanıyor; gerçek reklam anahtarları kapalı.
- Test reklamının ağ/veri bağlantısı olduğu, ön yükleme ile gösterimin farklı olduğu açıklandı.
- Çocuğa yönelik ve kişiselleştirilmemiş istek, G içerik sınırı, AD_ID engeli ve iOS ATT istememe yapılandırması; IP, yaklaşık konum, reklam/etkileşim, tanılama ve diğer uygulama/cihaz kapsamlı kimlikler ayrıldı.
- Her beş tamamlanmış etkinlikte fırsat; en az beş dakika ara ve son 24 saatte en fazla üç gösterim. 2–4 yaş, ilk oturum ve ilk iki dakika gösterim istisnaları; öğrenme sırasında / ödüllü reklam bulunmaması açıklandı.
- “IDFA yok → bütün tanımlayıcılar yok” veya “test reklamı → veri yok” sonucu çıkarılmadı.

## RevenueCat nedeniyle eklenenler

- Anonim SDK müşteri kimliği, ürün/işlem, makbuz/satın alma belirteci, tarih ve hak durumu; doğrulama, eşitleme, geri yükleme ve satın alma istatistikleri.
- Açılışta ve uygulamaya dönüşte de bağlantı; eski doğrudan satın almaların eşitlenebilmesi.
- Çocuk profili/ilerlemesi ve kart bilgilerinin bu akıştan ayrılması; kapalı reklam/ilişkilendirme ve isteğe bağlı tanılama seçenekleri.
- Premium ve kalıcı Reklamları Kaldır'ın yeni reklam isteğini önlediği; RevenueCat veya Android QR teknik işlemesini durdurmadığı.
- Yerel sıfırlamanın satın alma ve reklam sınırlarını koruduğu; sunucu kayıtlarının ayrıca talep edilmesi gerektiği.

## Apple ve Google için sonuç

[Mağaza kontrol tablosu](wondermio-store-privacy-checklist-tr.md) ekranda seçilecek alanları içerir.

- **Apple:** Data Not Collected uygun değil. Purchase History → App Functionality + Analytics. Anonim RC kimliğiyle ilişkilendirme/takip cevapları panel entegrasyonlarına bağlı koşullarıyla yazıldı. Google için Coarse Location, Device ID, Product Interaction, Advertising Data, Crash/Performance/Other Diagnostic Data ayrı ayrı listelendi.
- **Kesinleştirilmeyen Apple alanı:** Google Device ID manifestinde Tracking=true var; ATT istemeyen çocuk yapılandırması bunun gerçek davranışını tek başına kanıtlamıyor. Gerçek cihaz/sağlayıcı ve hesap entegrasyon kontrolü olmadan otomatik Yes/No verilmedi.
- **Google Play:** RevenueCat satın alma geçmişi; AdMob yaklaşık konum, etkileşim, tanılama ve kimlik kategorileri; Android ML Kit'in reklamdan bağımsız teknik ölçümleri dahil edildi. Collected/Shared, hizmet sağlayıcı istisnası, amaç, zorunluluk ve silme yolu ayrı açıklandı. Yalnız internal test kanalı muafiyeti gerçek panel durumuna bağlıdır.
- **Kids:** 4+ derecesi Kids Category kanıtı değil. App Store Connect giriş istedi; kaydedilmiş kategori ve gerçek mağaza başlığı okunamadı. Yerel taslak “Wondermio: Kids Learning Games”; öneri “Wondermio: Learning Games”. Ad ve marka değiştirilmedi. Apple 5.1.4 nedeniyle kategoriden çıkmanın tek başına çocuk reklam uygunluğunu sağlamadığı belirtildi.

## Doğrulama

- Lint, TypeScript, `build:cloudflare`, eski public sözleşmesi ve yeni gizlilik testi **PASS**.
- 65 HTML yerel link/başlık/main/dil denetiminden geçti; 46 eski public yol, 53 korunan dosya ve indirme yönlendirmeleri doğrulandı.
- İki dilde 390/1440 piksel görünüm; paragraf/başlık sığması, mobil menü ve TR↔EN geçişleri **PASS**. Görseller yerelde incelendi.
- Canlıda **64 normal sayfa HTTP 200**, olmayan örnek yol **404**; `app-ads.txt`, sitemap ve robots **200**.
- İki canlı politika güncel tarih, doğru canonical, RevenueCat ve yeni iOS açıklamasını içeriyor. Cloudflare'ın mevcut e-posta maskelemesi çözüldükten sonra iki sayfanın main HTML içeriği yerel üretimle **birebir eşleşiyor**. Tarayıcıda e-posta gerçek `mailto:` bağlantısına çözülüyor; maskeleme hatası yok.
- Canlı mobil TR→EN gizlilik geçişi doğru; menü kapanıyor. Canlı TR mobil ve EN masaüstü görünümünde taşma yok.
- HTTP doğrulama: **8 Kasım 2026 22:35:41 Türkiye saati** (`2026-11-08T19:35:41.945Z`). Yerel kanıt: `artifacts/privacy-2026-11-08/live-verification.json`.

## Git ve deployment

- `a4421c2`: görevden önceki ilgili Wondermio çalışmasını koruyan commit.
- **`f00e449388bcdbf6bdf3225a5bd69bccdf988269`**: bu görevin politika, web ve mağaza raporu güncellemesi; `origin/main`'e push başarılı.
- Mevcut GitHub → Cloudflare Pages entegrasyonu kullanıldı; alan adı veya barındırma yapılandırması değiştirilmedi.
- Cloudflare Pages deployment: **`c4ad6a05-b94b-4424-b9db-1a9688fd859a`**, sonuç **success / Deployed successfully**.
- [Doğrulanmış dağıtım önizlemesi](https://c4ad6a05.lumisoft-studios-website.pages.dev) ve yukarıdaki özel alan adı kontrol edildi.
- Bu sonuç belgesi ayrı bir dokümantasyon commit'iyle kaydedilir; web uygulaması içeriğini değiştirmez.

## Hesap sahibinde kalanlar

Apple/Google'da kaydedilmiş mevcut cevapları kontrol tablosuyla karşılaştırıp yalnız doğrulanmış seçimleri kaydetmek; Device ID takip akışını, Kids üyeliğini/geçmişini, gerçek App Store adını ve RevenueCat/AdMob panel entegrasyonlarını doğrulamak gerekiyor. Tam yasal veri sorumlusu kimliği ve adres/telefon, aktarım güvenceleri, saklama/silme operasyonu ve çocuk rızası dayanakları kaynak kodundan doğrulanamadı. Bunlar için raporda uygulanacak adımlar var.

Uygulama içindeki bazı eski gizlilik özetleri ve ticari metindeki eski fiyat eşitliği şartı ayrıca işaretlendi. Kullanıcının **uygulama koduna ve ticari şartlara dokunmama** talimatı korundu. Yeni IPA/AAB üretilmedi; mevcut dosyalar, abonelikler, ürün kimlikleri ve uygulama markaları değiştirilmedi.