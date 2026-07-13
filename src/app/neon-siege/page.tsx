import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.erolozcitak.neonsiege";
const APP_STORE_URL =
  "https://apps.apple.com/tr/app/neon-siege-brick-breaker/id6774618872";

export const metadata: Metadata = {
  title: "Neon Siege - Neon arcade brick breaker",
  description:
    "Fast-paced neon brick breaker with shapes, skills, boosters, bombs, multipliers, upgrades, and intense levels.",
};

const features = [
  "Neon Block Shapes",
  "Skills & Boosters",
  "Bombs & Multipliers",
  "Level Progression",
  "Offline Arcade Gameplay",
  "Performance Mode",
];

const notes = [
  "Neon Siege is a game, not a gambling app.",
  "In-game diamonds are virtual items for gameplay use only.",
  "Rewarded ads are optional.",
  "Remove Forced Ads removes forced ads between levels; rewarded ads remain optional.",
  "Purchases are managed through Google Play / App Store.",
];

export default function NeonSiegePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative overflow-hidden px-4 py-24 sm:py-32">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 48% 0%, rgba(34,211,238,0.24), rgba(244,63,94,0.12) 42%, transparent 78%)",
            }}
          />
          <div
            className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #080b1a)" }}
          />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-7">
              <div className="relative">
                <div className="absolute inset-0 rounded-[28px] blur-2xl scale-125 bg-cyan-400/25" />
                <div className="relative h-28 w-28 rounded-[28px] border border-cyan-300/35 bg-[#071324] shadow-[0_0_44px_rgba(34,211,238,0.38)] flex items-center justify-center">
                  <span className="text-5xl select-none">⚡</span>
                </div>
              </div>
            </div>

            <p className="text-cyan-300 text-sm font-bold uppercase tracking-widest mb-4">
              Neon arcade brick breaker
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-3">
              Neon Siege
            </h1>
            <p className="text-fuchsia-300 text-lg font-semibold mb-5">
              Fast-paced neon brick breaker
            </p>
            <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Neon Siege is a fast neon brick breaker game built around glowing
              block shapes, geometric waves, powerful skills, boosters, bombs,
              multipliers, upgrades, and intense level progression.
              <br />
              <br />
              Aim your shot, break neon formations, unlock power-ups, collect
              rewards, and survive the siege.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href={GOOGLE_PLAY_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-cyan-300/35 bg-cyan-400/10 text-cyan-100 text-sm font-semibold transition-colors hover:border-cyan-200/70 hover:bg-cyan-400/15"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on Google Play
              </a>
              <a
                href={APP_STORE_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 bg-white/[0.03] text-slate-200 text-sm font-semibold transition-colors hover:border-white/30 hover:bg-white/[0.07]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on the App Store
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/neon-siege/support" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-cyan-300/40 text-cyan-200 hover:text-white hover:border-cyan-300/70 text-sm font-semibold transition-colors">
                Support
              </Link>
              <Link href="/neon-siege/privacy-policy" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors">
                Privacy Policy
              </Link>
              <Link href="/neon-siege/terms-of-use" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 text-sm font-medium transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-cyan-400/15 bg-[#091629]/80 p-5 shadow-[0_0_24px_rgba(34,211,238,0.06)]"
              >
                <div className="h-10 w-10 rounded-xl bg-fuchsia-500/15 border border-fuchsia-300/20 flex items-center justify-center text-cyan-200 mb-4">
                  ✦
                </div>
                <h2 className="text-base font-bold text-white">{feature}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 px-4 border-t border-cyan-400/10">
          <div className="max-w-3xl mx-auto rounded-2xl border border-cyan-400/20 bg-[#0b1228]/90 p-7 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-5">
              Game & purchase notes
            </h2>
            <ul className="space-y-3">
              {notes.map((note) => (
                <li key={note} className="flex gap-3 text-slate-200 leading-relaxed">
                  <span className="text-cyan-300 mt-0.5">›</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-10 px-4 border-t border-violet-500/10">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-slate-400 mb-5 text-sm font-medium uppercase tracking-wider">
              Legal &amp; Support
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link href="/neon-siege/support" className="text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors">
                Support
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link href="/neon-siege/privacy-policy" className="text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600">&middot;</span>
              <Link href="/neon-siege/terms-of-use" className="text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </section>
        <RelatedProducts currentSlug="neon-siege" lang="en" />
      </main>
      <Footer />
    </>
  );
}
