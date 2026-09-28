# Lumisoft Studio polish doğrulaması

29 Eylül 2026. Mevcut homepage düzeni, hero başlığı, section sırası, navigation, footer ve ürün sayfası omurgası korundu. Yeni framework veya runtime bağımlılığı eklenmedi.

## Ürün sunumu

- Hero: farklı 9/10/12 saniyelik döngülerde yalnızca 7px cihaz hareketi. Giriş animasyonu ayrı sarmalayıcıya taşındı; mevcut pointer tilt artık aynı transform animasyonu tarafından baskılanmıyor. 1280–1440 laptop kompozisyonu daraltılıp yukarı dengelendi.
- Homepage projeleri: görünürlükle açılan düşük yoğunluklu ürün ışığı, tek seferlik cihaz yerleşimi. Neon cyan, Jelly pembe, Roto gerçek oyunun mor/altın tonları. Normal scroll korunuyor.
- LumiBaby: 14 saniyede 5px sakin hareket. Sekiz mevcut feature, rutin ekranı/ses ekranı/bakımı paylaşma gruplarına taşındı. Feature dizileri ve detector açıklamaları önceki commit ile birebir aynı; tüm safety notları görünür tutuldu.
- Header ve footer mimarisi aynı. CTA okları, basma derinliği, nav underline ve mobil menü açılışında küçük geçişler. Mobil menünün İngilizce kalan alt satırı TR için çevrildi.
- Reduced-motion tüm dekoratif motion'ı durdurur; mobilde sürekli floating kullanılmaz. Ekran dışındaki hero/app floating durur; gizli sekmede CSS motion durur.

## Copy ve kök nedenler

Üç oyun aynı “Every move, a possibility.” ve “Easy to begin. Find your rhythm. Discover a new way to play.” metnini paylaşıyordu. Bu ortak başlık/açıklama ve download başlıkları ürün bazında ayrıldı:

- Neon: “Find the angle. Break through.” Nişan, geometrik blok dizilimi, bombalar ve çarpanlar. Mevcut 6 saniyelik video değiştirilmedi.
- Jelly: “That match has company.” Eşleşme, zincir, çarpan tozu, ÇALKALA ve Candy Island. Orta bölümde video sağda, feature anlatımı solda.
- Roto: “Plan for the turn.” Üç parça sonrası bütün tahtanın dönüşü; geometrik iki sütunlu feature grubu.
- Studio homepage: “From the arcade to bedtime.” Soyut agency sloganları yerine ürün adları ve doğrudan destek iletişimi.
- About: “puzzle projects in active development” yerine mevcut production kataloğuyla tutarlı dört yayındaki ürün adı.
- Homepage title: “Lumisoft Studio | Games & Apps for iOS & Android”. TR title markalı; product title suffix tutarlı. Canonical adresleri aynı.

Dokuz belirgin template ifade grubu EN/TR karşılıklarıyla temizlendi: hero thrill/rhythm, games possibility, Built/Shaped with care, Purpose in every product, Care in every detail, Every move a possibility, Easy/Find/Discover, Roto Find your rhythm, Keep exploring. Ayrıca ürün feature açıklamaları kısaltıldı. Bu sayı değişen tüm string sayısı veya nesnel bir AI tespit puanı değildir.

Tarama yapılan 12 EN/TR pazarlama sayfasında eski çoğul marka, gereksiz em dash veya tek başına dekoratif tire bulunmadı. Em dash için olmayan bir temizlik adedi raporlanmadı. Neon EN/TR browser title içindeki iki tireli ayırıcı iki noktayla değiştirildi; gerçek compound kelimeler ve hukuki metinler korundu.

## Gerçek gameplay

| Ürün | Kayıt | Süre | Boyut |
|---|---|---:|---:|
| Jelly | Gerçek şeker swap: skor 300→600. ÇALKALA 5→4; yeni zincir ile 1200 | 6,5 sn | 272.248 B |
| Roto | Üç gerçek sürükle-bırak, skor 1→4→8, saat yönünde board dönüşü ve yeni set | 6,5 sn | 77.245 B |

İkisi de H.264, 390×844, 24 FPS, sessiz, faststart. Toplam 349.493 B (341,3 KiB). Kaynak oyun kodu değiştirilmedi; gerçek pointer etkileşimleri kaydedildi. Medya kaynakları media-sources.json içinde. Mevcut medya asset_backups/wow-polish altında yedeklendi. İkonlar ve mevcut ekranlar değiştirilmedi.

Ortak video bileşeni: preload none, poster, viewport loading, en az %35 görünürlükte oynatma, ekran dışında/gizli sekmede pause. Aynı anda tek video. Mobil, reduced-motion ve save-data varsayılanı poster. Kullanıcı düğmeyle oynatabilir. Yükleme hatasında açıklamalı fallback.

## Yerel doğrulamalar

- npm run lint: PASS.
- npm run build:cloudflare: PASS, 51 statik çıktı, 49 HTML link/anchor/heading/main/language kontrolü.
- npm run verify:contracts: PASS, 46 public route, 53 immutable dosya, 8 Neon/LumiBaby cihaz senaryosu, 16 ürün mağaza CTA.
- Build içindeki Jelly regression: 25 senaryo; Roto regression: 17 senaryo PASS.
- git diff --check: PASS (yalnızca standart LF/CRLF bilgilendirmeleri).
- Playwright 12 sayfa × 10 genişlik: 320/375/390/430/768/1024/1280/1366/1440/1920. 120 kontrolde yatay overflow ve taşan heading yok. Homepage 10 genişlikte, ürünler 320/768/1440 ekran görüntüleri alındı; mobil/desktop hero ve feature kompozisyonları görsel incelendi.
- 46 sitemap route HTTP 200. Kırık görsel, runtime/hydration error ve yerel sayfa taramasında başarısız network isteği yok.
- Mobil menü açılışı, Escape, focus return, anchor kapanışı ve EN→TR geçişi PASS.
- Dört download route × iPhone/Android/iPad desktop/Desktop/Instagram: 20/20 gerçek tarayıcı kontrolü PASS. Harici mağaza navigation istekleri yakalanarak destination karşılaştırıldı; mağazada işlem yapılmadı. Neon desktop ürün sayfasına döner, diğerleri fallback'te kalır; Jelly/Roto Instagram otomatik yönlenmez.
- Üç videoda başlangıç src yok, görünürken currentTime ilerliyor, manuel pause ve viewport dışında pause PASS. Mobil ve reduced-motion testlerinde src yok/paused PASS.
- LumiBaby feature dizileri ve detector/safety block önceki commit ile aynı; tüm korunan legal/download/ikon hash'leri aynı.

## Performans örneklemesi

Chromium 1366×768, CPU/network throttling yok. Eski production ve yerel yeni build aynı tarayıcı koşullarında örneklendi; CDN/local farkından hız kazanımı iddiası çıkarılamaz.

| Ölçüm | Eski production | Yerel polish |
|---|---:|---:|
| LCP | 388 ms | 244 ms |
| CLS | 0 | 0 |
| Başlangıç decoded JS | 599.125 B | 600.794 B |
| Başlangıç video isteği | 0 | 0 |
| Median / p95 scroll frame | 16,7 / 16,8 ms | 16,7 / 16,8 ms |
| 180 frame içinde >34ms | 0 | 0 |
| JS heap önce/sonra | 5,42 / 5,56 MB | 5,15 / 5,29 MB |

Bir başlangıç long task: eski 53 ms, yeni 68 ms. Yeni JS farkı 1.669 B. Bu fiziksel düşük seviye Android/Safari testi veya Lighthouse puanı değildir.

## Yayın

Mevcut main → Cloudflare Pages entegrasyonu kullanılır; domain/config değişikliği yok. Yerel doğrulama tamamlandıktan sonra commit ve push yapılır; deployment check ve production smoke doğrulaması ayrıca release raporuna kaydedilir. APK üretilmez.
