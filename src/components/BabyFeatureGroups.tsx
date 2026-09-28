import Image from "next/image";

interface Feature { icon: string; title: string; desc?: string; bullets?: string[]; note?: string; }
export default function BabyFeatureGroups({ features, lang }: { features: Feature[]; lang: "en" | "tr" }) {
  const tr = lang === "tr";
  const groups = [
    { title: tr ? "Uyku düzenini görün." : "See the sleep pattern.", screen: "baby-routine", caption: tr ? "LumiBaby uyku rutini ekranı" : "LumiBaby sleep routine screen", items: [0, 3] },
    { title: tr ? "Tanıdık bir sesle." : "A familiar sound helps.", screen: "baby-sounds", caption: tr ? "LumiBaby sakinleştirici sesler ekranı" : "LumiBaby soothing sounds screen", items: [2, 5, 6, 7] },
    { title: tr ? "Bakımı paylaşırken." : "When you share the care.", screen: null, caption: "", items: [1, 4] },
  ];
  return <div className="studio-width baby-feature-groups">{groups.map(group => <div key={group.title} className={`baby-feature-group${group.screen ? " with-screen" : ""}`}>
    {group.screen && <figure className="baby-feature-screen"><Image src={`/media/${group.screen}.webp`} alt={group.caption} width={691} height={1536} sizes="(max-width:760px) 230px, 290px" /><figcaption>{group.caption}</figcaption></figure>}
    <div className="baby-group-copy"><h2>{group.title}</h2><div className="baby-group-items">{group.items.map(index => { const f = features[index]; return <article key={f.title}>
      <h3><span aria-hidden="true">{f.icon}</span>{f.title}</h3>
      {f.desc && <p>{f.desc}</p>}
      {f.bullets && <ul>{f.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
      {f.note && <p className="baby-safety-note">{f.note}</p>}
    </article>; })}</div></div>
  </div>)}</div>;
}
