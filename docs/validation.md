# Lumisoft Studio — yeniden tasarım teslim raporu

## Sonuç
Ana sayfa, oyun vitrinleri, LumiBaby sunumu, stüdyo sayfası, header, mobil menü ve footer yeniden tasarlandı. Koyu mürekkep zemin, açık lavanta uygulama bölümü, büyük tipografi ve gerçek ürün ekranları ortak görsel dili oluşturuyor. Hukuki sayfalarda yalnızca kabuk ve metadata iyileştirildi.

## Gerçek görseller ve hareket
- NeonSiegePrototype/www yerelde çalıştırıldı. Menü bildirimi olmadan oynanış ekranı ve gerçek oyun etkileşimlerinden 6 saniyelik sessiz video alındı.
- JellyChainRush-v5-rebuild/dist yerelde çalıştırıldı. Bölüm haritası ve öğretici kapatıldıktan sonraki oynanış ekranı alındı. Depodaki oyun arka planı kullanıldı.
- RotatingBlockPuzzlePhaser/docs/screenshots içinden klasik oyun ve macera ekranları kullanıldı.
- LumiBaby/storeeee/source-screenshots içinden uyku rutini ve sesler ekranları kullanıldı.
- Orijinal ürün ikonlarına dokunulmadı. Mevcut 53 korunan dosyanın SHA-256 değerleri değişmedi.
- Yeni 9 WebP ve 1 MP4 dosyasının toplamı 563,630 bayt (yaklaşık 550 KiB). Video 84,490 bayt.
- Hero derinliği yalnızca uygun fareli ekranlarda; reduced-motion durumunda devre dışı. Video yalnızca görünür masaüstü bölümünde otomatik oynar, ekran dışında durur. Mobil/reduced-motion varsayılanı poster; kullanıcı düğmeyle oynatabilir.
- Yeni runtime bağımlılığı eklenmedi. Ekran ölçüleri ayrıldı; görseller tembel yükleniyor ve boyutları önceden ayrılıyor.

## Korunan adresler
46 public sayfanın tamamı `public-contract.json` içinde listelenir. Sitemap üzerinden her biri ayrıca HTTP ile kontrol edildi: 46/46 HTTP 200. Bilinmeyen adres HTTP 404.

Dört indirme adresi:
- /neon-siege/download
- /lumibaby/download
- /jellychainrush/download
- /rotoblocks/download

App Store kimlikleri sırasıyla 6774618872, 6762529949, 6790545058, 6797314822. Google Play paketleri sırasıyla com.erolozcitak.neonsiege, com.lumisoft.lumibaby, com.lumisoft.jellychainrush, com.lumisoft.rotoblocks. Mevcut URL metinleri ve ülke yolları korundu; LumiBaby ana ürün ve indirme sayfasındaki mevcut farklı App Store URL biçimleri değiştirilmedi.

- iPhone, Android, masaüstü modundaki iPad, masaüstü ve Instagram kullanıcı aracıyla 20 gerçek tarayıcı yönlendirme senaryosu kontrol edildi. Harici mağaza istekleri QA sırasında yakalanarak hedef URL doğrulandı; mağazada işlem yapılmadı.
- Neon masaüstünde ürün sayfasına gider; diğer üç indirme adresi mağaza seçim sayfasında kalır. Mevcut davranış korundu.
- Jelly ve Roto Instagram senaryosunda otomatik yönlenmez; mevcut görünür mağaza seçim davranışı korundu.
- JavaScript kapalıyken her indirme sayfasında iki gerçek mağaza bağlantısı mevcut.
- Tüm Privacy / Terms / Support / Contact adresleri, footer bağlantıları, canonical, sitemap ve robots doğrulandı. 12 eski hukuki/destek sayfasına metinlerini değiştirmeyen layout dosyalarıyla canonical ve EN/TR alternates eklendi.

## Kök neden ve ek düzeltme
Yerel statik tarayıcı testinde Next.js 16.2.6 Windows export hatası bulundu: segment yollarında ters eğik çizgi kalırken istemci noktayla ayrılmış dosya adları istiyordu. Bu nedenle ön yükleme istekleri 404 veriyordu. `scripts/normalize-export.cjs` çıktıdaki orijinal dosyaları silmeden doğru isimli kopyaları ekliyor; tekrar çalıştırmada değişiklik yapmıyor. Paket/build akışına bağlandı. Next.js config, hosting veya üretim yayın ayarları değiştirilmedi.
Kaynak: kurulu `node_modules/next/dist/esm/export/index.js` ve `shared/lib/segment-cache/segment-value-encoding.js`; [Next.js kaynak kodu](https://github.com/vercel/next.js/blob/canary/packages/next/src/export/index.ts).

## Doğrulamalar
- `npm run build:cloudflare`: BAŞARILI. TypeScript ve 51 statik çıktı üretimi tamamlandı. 49 HTML dosyası link/anchor/heading/main/language kontrolünden geçti.
- Mevcut Jelly Chain Rush regresyonu: 25 cihaz senaryosu başarılı.
- Mevcut Roto Blocks regresyonu: 17 cihaz senaryosu başarılı.
- `npm run verify:contracts`: BAŞARILI. 46 route, 53 korunan dosya, 8 Neon/LumiBaby cihaz senaryosu, 16 ürün mağaza CTA kontrolü, 404 ve SEO çıktıları.
- `npm run lint`: BAŞARILI; hata ve uyarı yok.
- `git diff --check`: BAŞARILI. Git yalnızca çalışma kopyasındaki LF/CRLF dönüşüm bilgilendirmelerini verdi.
- Playwright: 1920×1080, 1366×900, 768×1024, 393×852, 390×844 ve ek 320×740 ana sayfa EN/TR kontrolü. Ürünler, stüdyo, destek ve örnek legal sayfalar masaüstü/mobil ekran görüntüleriyle incelendi.
- Mobil menü: açılma, focus containment, Escape, odağı düğmeye geri verme, anchor sonrası kapanma, dil değişimi ve masaüstü navigasyon geçişi başarılı.
- Video: görünmeden src yüklenmiyor; görünürken oynuyor; düğme ile duruyor; ekran dışında duruyor; reduced-motion durumunda src yüklenmeden poster gösteriliyor.
- Son üretim tarayıcı oturumları: console error 0, page/hydration error 0, yatay overflow yok. Windows düzeltmesi sonrası ürün/navigasyon RSC isteklerinde 404 yok.

## Yerel performans gözlemi
Chromium, localhost, ağ/CPU yavaşlatması yok; Lighthouse veya gerçek cihaz puanı değildir.

| Görünüm | LCP | CLS | Başlangıç JS | Başlangıç görselleri |
|---|---:|---:|---:|---:|
| Masaüstü | 216 ms | 0 | 573,910 B | 207,036 B |
| Mobil | 372 ms | 0 | 546,602 B | 180,544 B |

Bir başlangıç long-task kaydedildi. Fiziksel düşük seviye Android/Safari performans testi yapılmadı; bu ölçümler gerçek cihaz ve CDN koşullarının yerine geçmez.

## Çıktılar ve kapsam
- Statik web build: `out/`.
- Son ana sayfa görüntüleri: `artifacts/final-home-desktop.png`, `artifacts/final-home-mobile.png`.
- Diğer viewport ve ürün görselleri: `artifacts/` (git dışında).
- Medya kaynak envanteri: `docs/media-sources.json`.
- Orijinal görsel yedekleri: `asset_backups/website-reimagination/` (git dışında).
- Ürün repolarında kaynak kod değişikliği yapılmadı. Yeni görüntü/video üretimi yalnızca web çalışma alanına yazıldı.
- APK oluşturulmadı. Commit, push ve production deploy yapılmadı.
- Sonraki manuel aşama: tasarımın kullanıcı tarafından yerel önizlemede incelenmesi ve istenirse gerçek cihaz QA / ayrı yetkilendirilmiş yayın.

## Değişen dosyalar
- `.gitignore`
- `docs/media-sources.json`
- `docs/public-contract.json`
- `docs/redesign.md`
- `docs/validation.md`
- `eslint.config.mjs`
- `package.json`
- `public/media/baby-routine.webp`
- `public/media/baby-sounds.webp`
- `public/media/jelly-game.webp`
- `public/media/jelly-map.webp`
- `public/media/jelly-world.webp`
- `public/media/neon-game.webp`
- `public/media/neon-preview.mp4`
- `public/media/neon-world.webp`
- `public/media/roto-adventure.webp`
- `public/media/roto-game.webp`
- `scripts/normalize-export.cjs`
- `scripts/serve-out.js`
- `scripts/verify-public-contract.cjs`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/lumibaby/page.tsx`
- `src/app/lumibaby/privacy/layout.tsx`
- `src/app/lumibaby/support/layout.tsx`
- `src/app/lumibaby/terms/layout.tsx`
- `src/app/neon-siege/page.tsx`
- `src/app/neon-siege/privacy-policy/layout.tsx`
- `src/app/neon-siege/support/layout.tsx`
- `src/app/neon-siege/terms-of-use/layout.tsx`
- `src/app/tr/lumibaby/destek/layout.tsx`
- `src/app/tr/lumibaby/gizlilik/layout.tsx`
- `src/app/tr/lumibaby/kullanim-kosullari/layout.tsx`
- `src/app/tr/lumibaby/page.tsx`
- `src/app/tr/neon-siege/destek/layout.tsx`
- `src/app/tr/neon-siege/gizlilik/layout.tsx`
- `src/app/tr/neon-siege/kullanim-kosullari/layout.tsx`
- `src/app/tr/neon-siege/page.tsx`
- `src/components/AboutPage.tsx`
- `src/components/Footer.tsx`
- `src/components/GameShowcase.tsx`
- `src/components/GameplayPreview.tsx`
- `src/components/Header.tsx`
- `src/components/HomePage.tsx`
- `src/components/JellyChainRushPage.tsx`
- `src/components/LegalPageLayout.tsx`
- `src/components/ProductHero.tsx`
- `src/components/RelatedProducts.tsx`
- `src/components/RotoBlocksPage.tsx`
- `src/components/ScreenComposition.tsx`
- `src/components/SupportPage.tsx`
