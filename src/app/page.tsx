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
    "Thoughtfully crafted mobile apps for the moments that matter most.",
};

const apps = [
  {
    iconImage: "/images/lumibaby-icon.png",
    name: "LumiBaby",
    tagline: "Minik Uyku — Baby Sleep Support",
    description:
      "Lullabies, sleep tracking, cry detection, white noise, and sleep stories for calmer nights.",
    href: "/lumibaby",
    badge: "Available Now",
  },
  {
    icon: "✨",
    name: "Lumiora",
    tagline: "A luminous daily companion",
    description:
      "Crafted with calm and care for moments of creativity and clarity.",
    badge: "Coming Soon",
  },
  {
    icon: "⚡",
    name: "Neon Siege",
    tagline: "Neon arcade brick breaker",
    description:
      "Fast-paced neon brick breaker with shapes, skills, boosters, bombs, multipliers, upgrades, and intense levels.",
    href: "/neon-siege",
    badge: "Available Now",
  },
  {
    icon: "🍬",
    name: "Jelly Chain Rush",
    tagline: "Candy puzzle adventure",
    description:
      "Match candies, create chain reactions, unlock levels, and rebuild your Candy Island.",
    href: "/jelly-chain-rush",
    badge: "In Development",
  },
  {
    iconImage: "/images/roto-blocks-icon.png",
    name: "Roto Blocks",
    tagline: "Puzzle Game",
    description:
      "A relaxing block puzzle game where every three moves rotate the board and create new combo chances.",
    href: "/roto-blocks",
    badge: "Coming Soon",
    learnMoreLabel: "Learn More",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 py-28 sm:py-40">
          {/* deep purple nebula glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 50% 10%, rgba(109,40,217,0.32), rgba(79,70,229,0.12) 50%, transparent 80%)",
            }}
          />
          {/* bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #080b1a)",
            }}
          />

          <div className="relative max-w-4xl mx-auto text-center">
            {/* Emblem */}
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
              <span className="text-white">Apps built</span>{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #c4b5fd 0%, #818cf8 50%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                with heart
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10">
              Thoughtfully crafted mobile experiences for the moments that
              matter most &mdash; from your baby&apos;s first lullaby to your
              next great adventure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link
                href="/lumibaby"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-200 shadow-[0_0_24px_rgba(139,92,246,0.4)] hover:shadow-[0_0_32px_rgba(139,92,246,0.6)]"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #4f46e5 100%)",
                }}
              >
                🌙 Explore LumiBaby
              </Link>
              <a
                href="mailto:support@lumisoftstudios.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-violet-400/30 text-violet-200 hover:text-white hover:border-violet-400/60 font-medium transition-colors duration-200"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* ── Studio intro ────────────────────────────────────── */}
        <section className="py-20 px-4 border-t border-violet-500/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Independent studio, thoughtful products
            </h2>
            <p className="text-slate-200 leading-relaxed text-lg">
              We are a small, independent app studio focused on building
              meaningful, polished experiences. Every product we ship is crafted
              with attention to detail, deep respect for user privacy, and a
              commitment to quality that our users deserve.
            </p>
          </div>
        </section>

        {/* ── Apps ────────────────────────────────────────────── */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Our apps
              </h2>
              <p className="text-slate-300 text-sm">
                What we have built &mdash; and what&apos;s coming next.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {apps.map((app) => (
                <AppCard
                  key={app.name}
                  {...app}
                  badges={
                    app.name === "LumiBaby" ? (
                      <StoreBadges align="start" />
                    ) : undefined
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ─────────────────────────────────────────── */}
        <section className="py-20 px-4 border-t border-violet-500/10" id="contact">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Say hello
            </h2>
            <p className="text-slate-200 leading-relaxed mb-8">
              Questions, ideas, or partnership proposals? We read every message.
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
      <Footer />
    </>
  );
}
