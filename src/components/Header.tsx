"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
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
  "/roto-blocks/support": "/tr/roto-blocks/destek",
  "/roto-blocks/privacy": "/tr/roto-blocks/gizlilik",
  "/roto-blocks/terms": "/tr/roto-blocks/kullanim-kosullari",
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
  "/tr/roto-blocks/destek": "/roto-blocks/support",
  "/tr/roto-blocks/gizlilik": "/roto-blocks/privacy",
  "/tr/roto-blocks/kullanim-kosullari": "/roto-blocks/terms",
  "/tr/contact": "/contact",
};

function normalize(path: string) {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const rawPathname = usePathname();
  const pathname = normalize(rawPathname);
  const isTR = pathname === "/tr" || pathname.startsWith("/tr/");

  const counterpart =
    routeMap[pathname] ?? (isTR ? pathname.slice(3) || "/" : `/tr${pathname}`);
  const enHref = isTR ? counterpart : pathname;
  const trHref = isTR ? pathname : counterpart;
  const homeHref = isTR ? "/tr" : "/";

  const anchorBase = isTR ? "/tr/" : "/";
  const navItems = [
    { href: homeHref, label: isTR ? "Ana Sayfa" : "Home" },
    { href: `${anchorBase}#games`, label: isTR ? "Oyunlar" : "Games" },
    { href: `${anchorBase}#apps`, label: isTR ? "Uygulamalar" : "Apps" },
    { href: isTR ? "/tr/about" : "/about", label: isTR ? "Hakkımızda" : "About" },
    { href: isTR ? "/tr/support" : "/support", label: isTR ? "Destek" : "Support" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.07] bg-[#080b1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={homeHref}
          className="flex items-center gap-3 text-base font-semibold tracking-tight text-white"
        >
          <BrandLogo size={34} priority />
          <span className="text-[#f2f4ff]">Lumisoft Studios</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-1 flex items-center gap-0.5 border-l border-white/10 pl-4">
            <Link
              href={enHref}
              aria-label="English"
              className={`rounded px-2 py-1 text-xs font-bold transition-colors ${
                !isTR ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              EN
            </Link>
            <span className="select-none text-xs text-slate-700">|</span>
            <Link
              href={trHref}
              aria-label="Türkçe"
              className={`rounded px-2 py-1 text-xs font-bold transition-colors ${
                isTR ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              TR
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="p-2 text-slate-300 transition-colors hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={
            open
              ? isTR
                ? "Menüyü kapat"
                : "Close navigation menu"
              : isTR
                ? "Menüyü aç"
                : "Open navigation menu"
          }
          aria-expanded={open}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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
        <div className="border-t border-white/[0.07] bg-[#080b1a]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Primary mobile">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-2 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/[0.05] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-1 border-t border-white/[0.07] pt-3">
            <Link
              href={enHref}
              className={`px-2 py-1 text-xs font-bold transition-colors ${
                !isTR ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
              onClick={() => setOpen(false)}
            >
              EN
            </Link>
            <span className="select-none text-xs text-slate-700">|</span>
            <Link
              href={trHref}
              className={`px-2 py-1 text-xs font-bold transition-colors ${
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
