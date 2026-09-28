import Image from "next/image";
import Link from "next/link";
import {relatedProducts} from "@/lib/products";
export default function RelatedProducts({currentSlug,lang="en"}:{currentSlug:string;lang?:"en"|"tr"}) {
 return <section className="related-section studio-width"><h2>{lang==="tr"?"Keşfetmeye devam et.":"Keep exploring."}</h2><div className="related-list">{relatedProducts(currentSlug).map(p=><Link key={p.slug} href={p.href![lang]}><Image src={p.iconImage!} alt="" width={56} height={56} /><div><h3>{p.name}</h3><p>{p.tagline[lang]}</p></div><span aria-hidden="true">↗</span></Link>)}</div></section>;
}
