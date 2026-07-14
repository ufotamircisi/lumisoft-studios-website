import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex flex-1 items-center px-4 pb-20 pt-36 sm:pt-40">
        <section className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d1230]/75 p-8 text-center shadow-[0_24px_80px_rgba(5,7,15,0.6)] sm:p-12">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.22), transparent 60%)",
            }}
          />
          <div className="relative">
            <p className="eyebrow mb-4 text-violet-400">404</p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Page not found
            </h1>
            <p className="mx-auto mb-8 max-w-lg leading-relaxed text-slate-300">
              The address may have changed, or the page may no longer be available. You can return home or browse our current products.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/" className="btn-primary w-full sm:w-auto">
                Return home
              </Link>
              <Link href="/#games" className="btn-secondary w-full sm:w-auto">
                Browse games
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
