import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductMotion from "@/components/ProductMotion";
import ScreenComposition from "@/components/ScreenComposition";
import { games, apps } from "@/lib/products";

export default function HomePage({ lang = "en" }: { lang?: "en" | "tr" }) {
 const tr = lang === "tr";
 const baby = apps[0];
 return <><Header /><main id="main-content" className="studio-home"><ProductMotion />
  <section className="studio-hero studio-width">
   <div className="hero-copy">
    <p className="studio-kicker"><span className="status-dot" />{tr ? "Bağımsız fikirler. Gerçek ürünler." : "Independent minds. Real products."}</p>
    <h1>{tr ? <>Küçük ekranlar.<br />Büyük dünyalar.</> : <>Small screens.<br />Big worlds.</>}</h1>
    <p className="hero-description">{tr ? "Neon bloklar, şeker adaları, dönen bulmacalar. Sonra LumiBaby ile uyku vakti. iOS ve Android için oyunlar ve uygulamalar geliştiriyoruz." : "Neon bricks, candy islands, puzzles that turn. Then bedtime with LumiBaby. We make games and apps for iOS and Android."}</p>
    <div className="studio-actions"><a className="studio-button" href="#games">{tr ? "Oyunlarımız" : "Our games"}<span aria-hidden="true">↗</span></a><a className="studio-text-link" href="#apps">{tr ? "Uygulamalarımız" : "Our apps"}<span aria-hidden="true">↗</span></a></div>
   </div>
   <ScreenComposition lang={lang} />
   <div className="hero-caption"><span>{tr ? "Üç oyun. Bir uyku arkadaşı." : "Three games. One bedtime companion."}</span><a href="#games">{tr ? "Keşfetmek için kaydır" : "Scroll to explore"}<span aria-hidden="true">↓</span></a></div>
  </section>
  <div className="product-index studio-width" aria-label={tr ? "Ürünler" : "Products"}>{[...games,baby].map(p=><Link key={p.slug} href={p.href![lang]}><Image src={p.iconImage!} width={40} height={40} alt="" /><span>{p.name}<small>{p.kind === "game" ? (tr ? "Oyun" : "Game") : (tr ? "Uygulama" : "App")}</small></span><span className="index-arrow" aria-hidden="true">↗</span></Link>)}</div>
  <section id="games" className="games-section studio-width" aria-labelledby="games-heading">
   <div className="section-heading"><div><p className="studio-kicker">{tr ? "Oyunlarımız" : "Made for play"}</p><h2 id="games-heading">{tr ? "Bir tur daha." : "One more round."}</h2></div><p>{tr ? "İster iyi bir atış, ister uzun bir zincir, ister tam yerine oturan bir blok." : "A well-aimed shot. A candy chain. That block fitting just right."}</p></div>
   {games.map((p,i)=><article key={p.slug} className={`game-chapter chapter-${p.slug}`}>
    <div className="chapter-art">
     {p.slug === "jelly-chain-rush" && <Image className="world-image" src="/media/jelly-world.webp" alt="" fill sizes="(max-width: 760px) 100vw, 60vw" />}
     {p.slug === "neon-siege" && <div className="neon-orbits" aria-hidden="true"><i /><i /><i /></div>}
     {p.slug === "roto-blocks" && <div className="rotation-orbit" aria-hidden="true" />}
     <div className="chapter-device"><Image src={`/media/${["neon-game","jelly-game","roto-game"][i]}.webp`} alt={tr ? `${p.name} gerçek oyun ekranı` : `${p.name} gameplay screen`} width={390} height={844} sizes="(max-width: 760px) 220px, 280px" /></div>
     <div className="art-caption"><span>{p.tagline[lang]}</span><span>iOS / Android</span></div>
    </div>
    <div className="chapter-copy"><Image src={p.iconImage!} width={64} height={64} alt="" className="product-icon" /><p className="studio-kicker">{tr ? "Şimdi yayında" : "Available now"}</p><h3>{p.name}</h3><p>{p.description[lang]}</p><Link href={p.href![lang]} className="studio-button secondary">{tr ? "Oyuna göz at" : "See the game"}<span aria-hidden="true">↗</span></Link></div>
   </article>)}
  </section>
  <section id="apps" className="apps-section" aria-labelledby="apps-heading"><div className="studio-width app-feature">
   <div className="app-copy"><p className="studio-kicker">{tr ? "Hayata eşlik eden uygulamalar" : "Made for everyday"}</p><h2 id="apps-heading">{tr ? <>Biraz daha<br />huzur.</> : <>A little more<br />peace of mind.</>}</h2><div className="app-identity"><Image src={baby.iconImage!} width={56} height={56} alt="" /><div><h3>LumiBaby</h3><span>{tr ? "Bebek uyku desteği" : "Baby sleep support"}</span></div></div><p>{baby.description[lang]}</p><Link href={baby.href![lang]} className="studio-button dark">{tr ? "LumiBaby’yi keşfet" : "Meet LumiBaby"}<span aria-hidden="true">↗</span></Link></div>
   <div className="app-screens"><div className="app-halo" aria-hidden="true" /><figure className="app-phone back"><Image src="/media/baby-sounds.webp" alt={tr ? "LumiBaby sakinleştirici sesler ekranı" : "LumiBaby soothing sounds screen"} width={691} height={1536} sizes="(max-width: 760px) 180px, 260px" /></figure><figure className="app-phone front"><Image src="/media/baby-routine.webp" alt={tr ? "LumiBaby uyku rutini ekranı" : "LumiBaby sleep routine screen"} width={691} height={1536} sizes="(max-width: 760px) 200px, 280px" /></figure></div>
  </div></section>
  <section className="studio-width studio-statement"><p className="studio-kicker">Lumisoft Studio</p><div className="statement-grid"><h2>{tr ? "Arcade’den uyku vaktine." : "From the arcade to bedtime."}</h2><div><p>{tr ? "Neon Siege’den LumiBaby’ye, bu ekranda gördüğünüz ürünleri biz geliştiriyoruz. Ürünle ilgili bir sorunuz varsa bize doğrudan yazabilirsiniz." : "From Neon Siege to LumiBaby, we develop the products you see here. Have a question about one of them? You can write to us directly."}</p><Link href={tr ? "/tr/about" : "/about"} className="studio-text-link">{tr ? "Stüdyoyu tanıyın" : "Meet the studio"}<span aria-hidden="true">↗</span></Link></div></div><div className="studio-principles">{(tr ? [["Üç farklı oyun","Nişan al, eşleştir veya tahtayı döndür."],["Uyku vaktinde LumiBaby","Sesler, rutinler ve uyku takibi."],["Bize doğrudan ulaşın","Her ürünün destek bağlantısı burada."]] : [["Three ways to play","Take aim, make a match, or turn the board."],["Bedtime with LumiBaby","Sounds, routines, and sleep tracking."],["A direct line to us","Support links for every product, right here."]]).map(([a,b])=><div key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></section>
  <section id="contact" className="contact-band studio-width"><div><p className="studio-kicker">{tr ? "Konuşalım" : "Let’s talk"}</p><h2>{tr ? "Aklınızda bir şey mi var?" : "Something on your mind?"}</h2></div><Link href={tr ? "/tr/contact" : "/contact"} className="studio-button">{tr ? "İletişime geçin" : "Get in touch"}<span aria-hidden="true">↗</span></Link></section>
 </main><Footer lang={lang} /></>;
}
