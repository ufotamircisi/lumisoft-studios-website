import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import StoreBadges from "@/components/StoreBadges";

export const metadata: Metadata = {
  title: "LumiBaby – Bebek Uyku Desteği",
  description:
    "LumiBaby, ağlama algılama, ninniler, uyku takibi, beyaz gürültü ve uyku hikayeleriyle ebeveynlere bebek uykusunu desteklemelerine yardımcı olur.",
};

interface Feature {
  icon: string;
  title: string;
  desc?: string;
  bullets?: string[];
  note?: string;
}

const gridFeatures: Feature[] = [
  {
    icon: "😴",
    title: "Uyku Takibi",
    bullets: [
      "Ebeveynler bebek uyku sürelerini takip edebilir.",
      "Uyku süresi, şekerleme, gece uykusu ve rutinleri takip etmeye yardımcı olur.",
    ],
    note: "Destekleyici bir takip aracı — tıbbi bir uyku tanı sistemi değil.",
  },
  {
    icon: "🤔",
    title: "Bebeğim Neden Ağlıyor?",
    desc: "LumiBaby rehberli bir ağlama yardımcısı içerir. Ebeveynler, açlık, uyku hali, gaz, bez veya genel rahatsızlık gibi yaygın nedenleri düşünmek için basit soruları yanıtlayabilir.",
    note: "Yalnızca bilgilendirme amaçlıdır. Tıbbi tavsiyenin yerini almaz.",
  },
  {
    icon: "🎙️",
    title: "Ebeveyn Sesi Kaydı",
    bullets: [
      "Ebeveynler kendi sakinleştirici seslerini kaydedebilir.",
      "Ebeveyn sesi tanıdık, sakinleştirici bir ses olarak kullanılabilir.",
      "Algılama oynatımı için ebeveyn sesi seçilebilir.",
    ],
    note: "Ses kayıtlarının, siz açıkça paylaşmadığınız veya dışa aktarmadığınız sürece cihazınızda kalması amaçlanmaktadır.",
  },
  {
    icon: "📊",
    title: "Ayrıntılı Uyku Raporları",
    desc: "LumiBaby uyku özetleri ve basit içgörüler sunabilir. Raporlar uyku süresi, ağlama sayısı, uyku kalitesi ve rutin gözlemlerini içerebilir.",
    note: "Raporlar bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz.",
  },
  {
    icon: "🔔",
    title: "Ebeveyn Bağlantısı ve Uyarılar",
    bullets: [
      "Ebeveynler, uygulama aracılığıyla başka bir ebeveyn veya bakıcı cihazını bağlayabilir.",
      "Ağlama veya sakinleşme gibi önemli bebek anları algılandığında, LumiBaby bağlı telefonlara uyarı gönderebilir.",
      "Bağlı telefonda akıllı saat bildirimleri etkinse, cihaz ve bildirim ayarlarına bağlı olarak uyarılar akıllı saatte de görünebilir.",
      "Her iki ebeveynin de bilgi sahibi olmasına yardımcı olur — özellikle uyku rutinleri, gece bakımı veya bir ebeveynin başka bir odada olduğu durumlarda.",
    ],
    note: "Uyarı iletimi telefon ayarlarına, internet bağlantısına, izinlere, pil ayarlarına ve akıllı saat yapılandırmasına bağlıdır. Uyarılar destekleyici bir farkındalık aracıdır — doğrudan ebeveyn gözetiminin yerini almaz.",
  },
  {
    icon: "🎵",
    title: "Ninniler",
    desc: "Ebeveynler şekerleme, yatma vakti ve gece rutinlerini desteklemek için sakinleştirici ninniler çalabilir.",
  },
  {
    icon: "🌊",
    title: "Kolik Sesleri",
    desc: "Ebeveynler susturma, vantilatör, yağmur, dalga, kalp atışı veya benzeri sakinleştirici sesler gibi beyaz gürültü ve kolik sesleri kullanabilir. Bu sesler daha rahatlatıcı bir ses ortamı oluşturmaya yardımcı olabilir.",
    note: "Bu, kolik için tıbbi bir tedavi değildir.",
  },
  {
    icon: "📖",
    title: "Uyku Hikayeleri",
    desc: "Ebeveynler sakin yatma vakti veya şekerleme rutinleri için tasarlanmış nazif uyku hikayeleri çalabilir.",
  },
];

export default function LumiBabyPageTR() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 py-24 sm:py-32">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(109,40,217,0.3), rgba(79,70,229,0.1) 50%, transparent 75%)",
            }}
          />
          <div
            className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #080b1a)",
            }}
          />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-7">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl scale-110"
                  style={{ background: "rgba(109,40,217,0.3)" }}
                />
                <Image
                  src="/images/lumibaby-icon.png"
                  alt="LumiBaby"
                  width={112}
                  height={112}
                  className="relative rounded-[26px] shadow-[0_8px_40px_rgba(109,40,217,0.4)]"
                  priority
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-3">
              LumiBaby
            </h1>
            <p className="text-violet-300 text-lg font-semibold mb-5">
              Minik Uyku — Bebek Uyku Desteği
            </p>
            <p className="text-slate-200 text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Gece nöbeti için sakin, destekleyici bir yardımcı. LumiBaby, tüm
              aile dinlenebilsin diye ebeveynlerin dinlemesine, takip etmesine
              ve sakinleştirmesine yardımcı olur.
            </p>

            <div className="mb-8">
              <StoreBadges lang="tr" />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/tr/lumibaby/destek"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-violet-400/40 text-violet-200 hover:text-white hover:border-violet-400/70 text-sm font-semibold transition-colors"
              >
                Destek
              </Link>
              <Link
                href="/tr/lumibaby/gizlilik"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/tr/lumibaby/kullanim-kosullari"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors"
              >
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </section>

        {/* ── Ağlama ve Kolik Algılama — featured ─────────────── */}
        <section className="px-4 pb-4">
          <div className="max-w-5xl mx-auto">
            <div
              className="rounded-2xl border border-violet-500/35 p-7 sm:p-9"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,18,50,0.97) 0%, rgba(20,12,45,0.97) 100%)",
              }}
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-violet-500/20 border border-violet-500/35 flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                    👂
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-violet-300 bg-violet-500/15 border border-violet-500/25 rounded-full px-3 py-1 mb-4">
                    Temel Özellik
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                    Ağlama ve Kolik Algılama
                  </h2>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-violet-400 text-base leading-none flex-shrink-0">
                        ✦
                      </span>
                      <p className="text-slate-200 leading-relaxed">
                        LumiBaby, algılama ekranı açıkken cihaz mikrofonu
                        aracılığıyla dinleyebilir.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-violet-400 text-base leading-none flex-shrink-0">
                        ✦
                      </span>
                      <p className="text-slate-200 leading-relaxed">
                        Ağlamaya benzer bir ses algılandığında, seçilen ninni,
                        ebeveyn sesi veya sakinleştirici kolik/beyaz gürültü
                        sesini otomatik olarak başlatabilir.
                      </p>
                    </li>
                  </ul>

                  <div className="flex items-start gap-3 rounded-xl bg-violet-500/10 border border-violet-500/20 px-4 py-3 mb-5">
                    <span className="text-violet-300 text-lg leading-none flex-shrink-0 mt-0.5">
                      💡
                    </span>
                    <p className="text-sm text-violet-100 leading-relaxed">
                      <strong className="font-semibold">
                        En iyi sonuçlar için:
                      </strong>{" "}
                      Kesintisiz izleme için algılama ekranını açık tutun ve
                      telefonu kilitlenmemiş bırakın.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] px-4 py-3 space-y-2">
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Algılama doğruluğu mesafe, arka plan gürültüsü, telefon
                      konumu, mikrofon kalitesi ve ortama bağlı olarak
                      değişebilir.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      LumiBaby, ebeveyn gözetiminin, tıbbi tavsiyenin veya özel
                      acil durum izleme ekipmanının yerini almaz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature grid ─────────────────────────────────────── */}
        <section className="px-4 pt-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gridFeatures.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-violet-500/15 p-6 transition-colors hover:border-violet-500/30 flex flex-col"
                  style={{ background: "rgba(13,18,48,0.7)" }}
                >
                  <div className="text-3xl mb-4 select-none">{f.icon}</div>
                  <h3 className="text-base font-bold text-white mb-3">
                    {f.title}
                  </h3>

                  <div className="flex-1">
                    {f.desc && (
                      <p className="text-sm text-slate-300 leading-relaxed mb-3">
                        {f.desc}
                      </p>
                    )}

                    {f.bullets && f.bullets.length > 0 && (
                      <ul className="space-y-2 mb-3">
                        {f.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed"
                          >
                            <span className="text-violet-500 mt-0.5 flex-shrink-0 leading-none">
                              ›
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {f.note && (
                      <p className="text-xs text-slate-500 leading-relaxed mt-auto pt-3 border-t border-white/[0.06]">
                        {f.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Premium ──────────────────────────────────────────── */}
        <section className="py-16 px-4 border-t border-violet-500/10">
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl border border-violet-500/30 p-8 text-center"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(109,40,217,0.15), rgba(13,18,50,0.9) 70%)",
              }}
            >
              <div className="text-4xl mb-5 select-none">⭐</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                LumiBaby Premium
              </h2>
              <p className="text-slate-200 leading-relaxed mb-4">
                Ninni, uyku hikayesi ve kolik sesleri kitaplığının tamamının
                kilidini açın. Premium, reklamları kaldırır ve ailenize
                LumiBaby&apos;nin sunduğu her şeye erişim sağlar.
              </p>
              <p className="text-sm text-slate-400">
                Abonelikler App Store veya Google Play üzerinden yönetilir.
                Reklamlı ücretsiz bir katman da mevcuttur.
              </p>
            </div>
          </div>
        </section>

        {/* ── Legal links ──────────────────────────────────────── */}
        <section className="py-10 px-4 border-t border-violet-500/10">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-slate-400 mb-5 text-sm font-medium uppercase tracking-wider">
              Yasal &amp; Destek
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/tr/lumibaby/destek"
                className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                Destek
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link
                href="/tr/lumibaby/gizlilik"
                className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link
                href="/tr/lumibaby/kullanim-kosullari"
                className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </section>

        <RelatedProducts currentSlug="lumibaby" lang="tr" />
      </main>
      <Footer lang="tr" />
    </>
  );
}
