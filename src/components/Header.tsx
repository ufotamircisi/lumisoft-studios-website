"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routeMap: Record<string, string> = {
  "/": "/tr",
  "/lumibaby": "/tr/lumibaby",
  "/lumibaby/support": "/tr/lumibaby/destek",
  "/lumibaby/privacy": "/tr/lumibaby/gizlilik",
  "/lumibaby/terms": "/tr/lumibaby/kullanim-kosullari",
  "/neon-siege": "/tr/neon-siege",
  "/neon-siege/download": "/tr/neon-siege",
  "/neon-siege/download/": "/tr/neon-siege",
  "/neon-siege/support": "/tr/neon-siege/destek",
  "/neon-siege/privacy-policy": "/tr/neon-siege/gizlilik",
  "/neon-siege/terms-of-use": "/tr/neon-siege/kullanim-kosullari",
  "/jelly-chain-rush": "/tr/jelly-chain-rush",
  "/jelly-chain-rush/privacy": "/tr/jelly-chain-rush/gizlilik",
  "/jelly-chain-rush/terms": "/tr/jelly-chain-rush/kullanim-kosullari",
  "/roto-blocks": "/tr/roto-blocks",
  "/roto-blocks/privacy": "/tr/roto-blocks/gizlilik",
  "/roto-blocks/terms": "/tr/roto-blocks/kullanim-kosullari",
  "/roto-blocks/support": "/tr/roto-blocks/destek",
  "/contact": "/tr/contact",
  "/tr": "/",
  "/tr/lumibaby": "/lumibaby",
  "/tr/lumibaby/destek": "/lumibaby/support",
  "/tr/lumibaby/gizlilik": "/lumibaby/privacy",
  "/tr/lumibaby/kullanim-kosullari": "/lumibaby/terms",
  "/tr/neon-siege": "/neon-siege",
  "/tr/neon-siege/destek": "/neon-siege/support",
  "/tr/neon-siege/gizlilik": "/neon-siege/privacy-policy",
  "/tr/neon-siege/kullanim-kosullari": "/neon-siege/terms-of-use",
  "/tr/jelly-chain-rush": "/jelly-chain-rush",
  "/tr/jelly-chain-rush/gizlilik": "/jelly-chain-rush/privacy",
  "/tr/jelly-chain-rush/kullanim-kosullari": "/jelly-chain-rush/terms",
  "/tr/roto-blocks": "/roto-blocks",
  "/tr/roto-blocks/gizlilik": "/roto-blocks/privacy",
  "/tr/roto-blocks/kullanim-kosullari": "/roto-blocks/terms",
  "/tr/roto-blocks/destek": "/roto-blocks/support",
  "/tr/contact": "/contact",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPathname =
    pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  const isTR = normalizedPathname.startsWith("/tr");

  const counterpart =
    routeMap[normalizedPathname] ??
    (isTR
      ? normalizedPathname.slice(3) || "/"
      : `/tr${normalizedPathname}`);
  const enHref = isTR ? counterpart : normalizedPathname;
  const trHref = isTR ? normalizedPathname : counterpart;
  const homeHref = isTR ? "/tr" : "/";
  const lumiBabyHref = isTR ? "/tr/lumibaby" : "/lumibaby";
  const neonSiegeHref = isTR ? "/tr/neon-siege" : "/neon-siege";
  const jellyChainRushHref = isTR
    ? "/tr/jelly-chain-rush"
    : "/jelly-chain-rush";
  const rotoBlocksHref = isTR ? "/tr/roto-blocks" : "/roto-blocks";

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-violet-500/10 bg-[#080b1a]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href={homeHref}
          className="flex items-center gap-3 font-semibold text-white text-base tracking-tight"
        >
          <Image
            src="/images/lumisoft-studio-emblem.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="text-[#eef0ff]">Lumisoft Studio</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <nav className="flex items-center gap-4 lg:gap-6">
            <Link
              href={homeHref}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              {isTR ? "Ana Sayfa" : "Home"}
            </Link>
            <Link
              href={lumiBabyHref}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              LumiBaby
            </Link>
            <Link
              href={neonSiegeHref}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              Neon Siege
            </Link>
            <Link
              href={jellyChainRushHref}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              Jelly Chain Rush
            </Link>
            <Link
              href={rotoBlocksHref}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              Roto Blocks
            </Link>
          </nav>

          <div className="flex items-center gap-0.5 border-l border-violet-500/20 pl-4 ml-1">
            <Link
              href={enHref}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                !isTR ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              EN
            </Link>
            <span className="text-violet-700 text-xs select-none">|</span>
            <Link
              href={trHref}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                isTR ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              TR
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-violet-500/10 bg-[#080b1a]/95 px-4 py-4">
          <nav className="flex flex-col gap-1">
            <Link
              href={homeHref}
              className="text-sm text-slate-200 hover:text-white py-2 transition-colors"
              onClick={() => setOpen(false)}
            >
              {isTR ? "Ana Sayfa" : "Home"}
            </Link>
            <Link
              href={lumiBabyHref}
              className="text-sm text-slate-200 hover:text-white py-2 transition-colors"
              onClick={() => setOpen(false)}
            >
              LumiBaby
            </Link>
            <Link
              href={neonSiegeHref}
              className="text-sm text-slate-200 hover:text-white py-2 transition-colors"
              onClick={() => setOpen(false)}
            >
              Neon Siege
            </Link>
            <Link
              href={jellyChainRushHref}
              className="text-sm text-slate-200 hover:text-white py-2 transition-colors"
              onClick={() => setOpen(false)}
            >
              Jelly Chain Rush
            </Link>
            <Link
              href={rotoBlocksHref}
              className="text-sm text-slate-200 hover:text-white py-2 transition-colors"
              onClick={() => setOpen(false)}
            >
              Roto Blocks
            </Link>
          </nav>
          <div className="flex items-center gap-1 mt-3 pt-3 border-t border-violet-500/10">
            <Link
              href={enHref}
              className={`text-xs font-bold px-2 py-1 transition-colors ${
                !isTR ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
              onClick={() => setOpen(false)}
            >
              EN
            </Link>
            <span className="text-violet-700 text-xs select-none">|</span>
            <Link
              href={trHref}
              className={`text-xs font-bold px-2 py-1 transition-colors ${
                isTR ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
              onClick={() => setOpen(false)}
            >
              TR
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
