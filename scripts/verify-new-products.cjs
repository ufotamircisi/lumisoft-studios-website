// Verify public product/locale contracts on the actual static export.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const base='https://www.lumisoftstudios.com';
const configs=[['midchain','en','MIDCHAIN'],['tr/midchain','tr','MIDCHAIN'],['wandermio','en','Wandermio'],['tr/ogrenimo','tr','Öğrenimo']];
let checked=0;
for(const [route,lang,name] of configs){
 for(const suffix of ['',...(lang==='tr'?['gizlilik','kullanim-kosullari','destek']:['privacy','terms','support'])]){
  const full=route+(suffix?'/'+suffix:'');
  const html=fs.readFileSync(path.join('out',full,'index.html'),'utf8');
  assert(html.includes(`href="${base}/${full}/"`),'Canonical missing '+full);
  assert(html.match(/<title>([^<]+)<\/title>/)?.[1].includes(name),'Wrong title '+full);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length,1,'One H1 '+full);
  assert(html.includes('hrefLang="tr"')||html.includes('hreflang="tr"'),'TR alternate missing '+full);
  assert(html.includes('hrefLang="en"')||html.includes('hreflang="en"'),'EN alternate missing '+full);
  assert(!html.includes('Wondermio'),'Old product name '+full);
  for(const match of html.matchAll(/(?:src|href)="(\/media\/[^"]+)"/g))assert(fs.existsSync(path.join('out',match[1])),'Missing image '+match[1]);
  if(suffix)assert(html.includes('mailto:support@lumisoftstudios.com'),'Contact missing '+full);
  else {
   assert(html.includes('application/ld+json'),'Structured data missing '+full);
   assert(html.includes(lang==='tr'?'Geliştiriliyor':'In development'),'Honest release status missing '+full);
  }
  checked++;
 }
}
for(const lang of ['en','tr']){
 const html=fs.readFileSync(path.join('out',lang==='tr'?'tr':'','index.html'),'utf8');
 for(const name of ['MIDCHAIN',lang==='tr'?'Öğrenimo':'Wandermio','Neon Siege','Jelly Chain Rush','Roto Blocks','LumiBaby'])assert(html.includes(name),'Homepage product missing '+name);
}
console.log(`PASS: ${checked} new product/legal pages, canonical URLs, locale alternates, headings, assets, release status and both homepage catalogs.`);
