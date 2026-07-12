import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import StoreBadges from "@/components/StoreBadges";

export const metadata: Metadata = {
  title: "Lumisoft Studio",
  description:
    "En önemli anlara yönelik, özenle tasarlanmış mobil uygulamalar.",
};

const apps = [
  {
    iconImage: "/images/lumibaby-icon.png",
    name: "LumiBaby",
    tagline: "Minik Uyku — Bebek Uyku Desteği",
    description:
      "Ninni, uyku takibi, ağlama algılama, beyaz gürültü ve uyku hikayeleriyle daha huzurlu geceler.",
    href: "/tr/lumibaby",
    badge: "Şimdi Mevcut",
  },
  {
    icon: "✨",
    name: "Lumiora",
    tagline: "Aydınlık bir günlük yoldaş",
    description:
      "Yaratıcılık ve berraklık anları için huzurla ve özenle tasarlandı.",
    badge: "Yakında",
  },
  {
    icon: "⚡",
    name: "Neon Siege",
    tagline: "Hızlı tempolu neon brick breaker",
    description:
      "Şekiller, yetenekler, güçlendiriciler, bombalar, çarpanlar, yükseltmeler ve yoğun seviyeler içeren hızlı neon arcade oyunu.",
    href: "/tr/neon-siege",
    badge: "Şimdi Mevcut",
  },
  {
    icon: "🍬",
    name: "Jelly Chain Rush",
    tagline: "Şeker bulmaca macerası",
    description:
      "Şekerleri eşleştir, zincirleme patlamalar oluştur, bölümleri aç ve Şeker Adanı yenile.",
    href: "/tr/jelly-chain-rush",
    badge: "Geliştiriliyor",
  },
];

export default function HomePageTR() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 py-28 sm:py-40">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 50% 10%, rgba(109,40,217,0.32), rgba(79,70,229,0.12) 50%, transparent 80%)",
            }}
          />
          <div
            className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #080b1a)",
            }}
          />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-2xl scale-150"
                  style={{ background: "rgba(139,92,246,0.25)" }}
                />
                <Image
                  src="/images/lumisoft-studio-emblem.png"
                  alt="Lumisoft Studio"
                  width={120}
                  height={120}
                  className="relative h-28 w-28 object-contain drop-shadow-[0_0_32px_rgba(139,92,246,0.5)]"
                  priority
                />
              </div>
            </div>

            <p className="text-sm font-semibold tracking-widest text-violet-400 uppercase mb-4">
              Lumisoft Studio
            </p>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.07] mb-6">
              <span className="text-white">Kalpten yapılmış</span>{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #c4b5fd 0%, #818cf8 50%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                uygulamalar
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10">
              En önemli anlara yönelik, özenle tasarlanmış mobil deneyimler —
              bebeğinizin ilk ninnisinden bir sonraki büyük maceranıza kadar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link
                href="/tr/lumibaby"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 shadow-[0_0_24px_rgba(139,92,246,0.4)] hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #4f46e5 100%)",
                }}
              >
                🌙 LumiBaby&apos;yi Keşfet
              </Link>
              <a
                href="mailto:support@lumisoftstudios.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-violet-400/30 text-violet-200 hover:text-white hover:border-violet-400/60 font-medium transition-colors duration-200"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </section>

        {/* ── Studio intro ─────────────────────────────────────── */}
        <section className="py-20 px-4 border-t border-violet-500/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Bağımsız stüdyo, düşünceli ürünler
            </h2>
            <p className="text-slate-200 leading-relaxed text-lg">
              Anlamlı ve özenle tasarlanmış deneyimler geliştirmeye odaklanmış
              küçük, bağımsız bir uygulama stüdyosuyuz. Yayınladığımız her
              ürün, detaylara dikkat edilerek, kullanıcı gizliliğine derin
              saygıyla ve kullanıcılarımızın hak ettiği kalite taahhüdüyle
              hazırlanır.
            </p>
          </div>
        </section>

        {/* ── Apps ─────────────────────────────────────────────── */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Uygulamalarımız
              </h2>
              <p className="text-slate-300 text-sm">
                Yaptıklarımız ve sırada ne olduğu.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {apps.map((app) => (
                <AppCard
                  key={app.name}
                  {...app}
                  learnMoreLabel={
                    app.name === "Jelly Chain Rush"
                      ? "Detayları gör →"
                      : "Daha fazla →"
                  }
                  badges={
                    app.name === "LumiBaby" ? (
                      <StoreBadges lang="tr" align="start" />
                    ) : undefined
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section
          className="py-20 px-4 border-t border-violet-500/10"
          id="iletisim"
        >
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Merhaba Deyin
            </h2>
            <p className="text-slate-200 leading-relaxed mb-8">
              Sorularınız, fikirleriniz veya iş birliği önerileriniz mi var?
              Her mesajı okuyoruz.
            </p>
            <a
              href="mailto:support@lumisoftstudios.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_28px_rgba(139,92,246,0.55)]"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #4f46e5 100%)",
              }}
            >
              support@lumisoftstudios.com
            </a>
          </div>
        </section>

      </main>
      <Footer lang="tr" />
    </>
  );
}
