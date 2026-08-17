import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StoreRedirect from "./StoreRedirect";
import {
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  REDIRECT_INLINE_SCRIPT,
} from "./deviceRedirect";

const DESCRIPTION =
  "Roto Blocks is live. Place three pieces, clear lines, and adapt as the board rotates every 3 moves. Download on the App Store or Google Play.";

export const metadata: Metadata = {
  title: {
    absolute: "Roto Blocks Download | Lumisoft Studios",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "https://lumisoftstudios.com/rotoblocks/download",
  },
  openGraph: {
    title: "Roto Blocks Download | Lumisoft Studios",
    description: DESCRIPTION,
    url: "https://lumisoftstudios.com/rotoblocks/download",
    siteName: "Lumisoft Studio",
    type: "website",
    images: [
      {
        url: "/images/web/roto-blocks-icon.webp",
        width: 88,
        height: 88,
        alt: "Roto Blocks",
      },
    ],
  },
};

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.13.09-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.85M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M3.18 23.76a1.7 1.7 0 0 0 1.71-.12l13.04-7.56-2.97-2.97L3.18 23.76zm17.47-10.64L17.9 11.5 14.7 14.7l3.22 3.22 2.73-1.58a1.73 1.73 0 0 0 0-3.22zM1.15 1.01A1.7 1.7 0 0 0 .5 2.35v19.3c0 .57.3 1.07.65 1.34l.09.07 10.82-10.82v-.26L1.15 1.01zm12.09 6.64L2.23.36A1.7 1.7 0 0 0 .5.24L11.06 10.8l2.18-3.15z" />
    </svg>
  );
}

export default function RotoBlocksDownloadPage() {
  return (
    <>
      <script
        id="rb-store-redirect"
        dangerouslySetInnerHTML={{ __html: REDIRECT_INLINE_SCRIPT }}
      />
      <StoreRedirect />
      <Header />
      <main id="main-content" className="flex-1 pt-16">
        <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 -z-20"
            style={{
              background:
                "radial-gradient(ellipse 72% 62% at 50% 12%, rgba(56,189,248,0.22), rgba(99,102,241,0.10) 46%, transparent 76%)",
            }}
          />
          <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-45" />

          <div className="mx-auto w-full max-w-2xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-[#0d1230]/80 px-5 py-9 text-center shadow-[0_28px_90px_rgba(5,7,15,0.58)] backdrop-blur-sm sm:px-10 sm:py-12">
              <div
                className="pointer-events-none absolute inset-x-12 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(56,189,248,0.8), rgba(129,140,248,0.7), transparent)",
                }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-12 h-24 w-56 -translate-x-1/2 opacity-60 blur-[1px]"
                aria-hidden="true"
              >
                <span className="absolute left-6 top-9 h-4 w-4 rotate-[8deg] rounded-[5px] bg-cyan-300 shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
                <span className="absolute left-[5rem] top-[2.4rem] h-4 w-4 -rotate-[6deg] rounded-[5px] bg-indigo-300 shadow-[0_0_18px_rgba(129,140,248,0.8)]" />
                <span className="absolute right-6 top-8 h-4 w-4 rotate-[14deg] rounded-[5px] bg-sky-200 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
              </div>

              <div className="relative mx-auto mb-7 w-fit">
                <div className="absolute inset-0 scale-125 rounded-[1.75rem] bg-cyan-400/25 blur-2xl" />
                <Image
                  src="/images/web/roto-blocks-icon.webp"
                  alt="Roto Blocks"
                  width={104}
                  height={104}
                  className="relative h-[104px] w-[104px] rounded-[26px] border border-white/15 object-cover shadow-[0_14px_44px_rgba(56,189,248,0.34)]"
                  priority
                />
              </div>

              <p className="eyebrow mb-4 text-cyan-200">
                Available on iOS &amp; Android
              </p>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Roto Blocks
              </h1>
              <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
                Roto Blocks is live. Place three pieces, clear lines, and adapt
                as the board rotates every 3 moves.
              </p>

              <div className="mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                <a
                  href={APP_STORE_URL}
                  className="inline-flex min-h-14 flex-1 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white transition-[transform,border-color,background-color] hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-300/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:max-w-[230px]"
                >
                  <AppleIcon />
                  Download on the App Store
                </a>
                <a
                  href={GOOGLE_PLAY_URL}
                  className="inline-flex min-h-14 flex-1 items-center justify-center gap-2.5 rounded-xl border border-indigo-200/20 bg-indigo-300/[0.07] px-5 py-3 text-sm font-semibold text-indigo-50 transition-[transform,border-color,background-color] hover:-translate-y-0.5 hover:border-indigo-200/55 hover:bg-indigo-300/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 sm:max-w-[230px]"
                >
                  <GooglePlayIcon />
                  Get it on Google Play
                </a>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-cyan-100">
                If the store does not open, tap the button below or open this
                page in your browser.
              </p>

              <Link
                href="/roto-blocks"
                className="mt-7 inline-flex min-h-11 items-center text-sm font-medium text-cyan-200 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Learn more about Roto Blocks
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
