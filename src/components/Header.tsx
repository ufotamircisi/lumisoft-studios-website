"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { usePathname } from "next/navigation";

const routeMap: Record<string, string> = {
  "/": "/tr",
  "/lumibaby": "/tr/lumibaby",
  "/lumibaby/download": "/tr/lumibaby",
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
  "/jellychainrush/download": "/tr/jelly-chain-rush",
  "/rotoblocks/download": "/tr/roto-blocks",
  "/roto-blocks": "/tr/roto-blocks",
  "/roto-blocks/support": "/tr/roto-blocks/destek",
  "/roto-blocks/privacy": "/tr/roto-blocks/gizlilik",
  "/roto-blocks/terms": "/tr/roto-blocks/kullanim-kosullari",
  "/about": "/tr/about",
  "/support": "/tr/support",
  "/privacy": "/tr/privacy",
  "/terms": "/tr/terms",
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
  "/tr/about": "/about",
  "/tr/support": "/support",
  "/tr/privacy": "/privacy",
  "/tr/terms": "/terms",
  "/tr/contact": "/contact",
};

function normalize(path: string) {
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = normalize(usePathname());
  const isTR = pathname === "/tr" || pathname.startsWith("/tr/");
  const counterpart = routeMap[pathname] ?? (isTR ? "/" : "/tr");
  const homeHref = isTR ? "/tr" : "/";
  const navItems = [
    {href: homeHref + "#games", label: isTR ? "Oyunlar" : "Games"},
    {href: homeHref + "#apps", label: isTR ? "Uygulamalar" : "Apps"},
    {href: isTR ? "/tr/about" : "/about", label: isTR ? "Stüdyo" : "Studio"},
    {href: isTR ? "/tr/support" : "/support", label: isTR ? "Destek" : "Support"},
  ];
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { dialog.close(); document.body.style.overflow = previous; };
    }
  }, [open]);
  useEffect(() => {
    const media = matchMedia("(min-width: 900px)");
    const close = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  const close = () => { setOpen(false); menuButtonRef.current?.focus(); };
  const languages = <div className="language-switch"><Link aria-label="English" hrefLang="en" lang="en" aria-current={!isTR ? "page" : undefined} href={isTR ? counterpart : pathname} onClick={close}>EN</Link><Link aria-label="Türkçe" hrefLang="tr" lang="tr" aria-current={isTR ? "page" : undefined} href={isTR ? pathname : counterpart} onClick={close}>TR</Link></div>;
  return <header className="studio-header"><div className="header-inner studio-width">
    <Link href={homeHref} className="studio-brand" aria-label="Lumisoft Studio"><BrandLogo size={34} priority /><span>Lumisoft<small>Studio</small></span></Link>
    <nav className="desktop-navigation" aria-label={isTR ? "Ana gezinme" : "Primary navigation"}>{navItems.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
    <div className="desktop-tools">{languages}<Link className="header-contact" href={isTR ? "/tr/contact" : "/contact"}>{isTR ? "İletişim" : "Say hello"}<span aria-hidden="true">↗</span></Link></div>
    <button ref={menuButtonRef} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={isTR ? "Menüyü aç" : "Open navigation menu"} onClick={()=>setOpen(true)}><span /> <span /></button>
    <dialog ref={dialogRef} id="mobile-navigation" className="mobile-dialog" aria-label={isTR ? "Gezinme menüsü" : "Navigation menu"} onCancel={close}>
      <div className="mobile-menu-top"><span>Lumisoft Studio</span><button type="button" onClick={close} aria-label={isTR ? "Menüyü kapat" : "Close navigation menu"}>×</button></div>
      <nav aria-label={isTR ? "Mobil gezinme" : "Mobile navigation"}><Link href={homeHref} onClick={close}>{isTR ? "Ana sayfa" : "Home"}</Link>{navItems.map(item=><Link key={item.href} href={item.href} onClick={close}>{item.label}<span aria-hidden="true">↗</span></Link>)}<Link href={isTR ? "/tr/contact" : "/contact"} onClick={close}>{isTR ? "İletişim" : "Contact"}<span aria-hidden="true">↗</span></Link></nav>
      <div className="mobile-menu-bottom">{languages}<span>{isTR ? "iOS + Android için oyunlar ve uygulamalar" : "Games & Apps for iOS + Android"}</span></div>
    </dialog>
  </div></header>;
}
