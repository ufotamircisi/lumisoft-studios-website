// Preserve the public contracts recorded before the studio redesign.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
const baseline=JSON.parse(fs.readFileSync('docs/public-contract.json','utf8'));
const assert=(ok,message)=>{if(!ok)throw new Error(message);};
for(const [file,expected] of Object.entries(baseline.protectedFiles)) {
 assert(fs.existsSync(file),'Protected file missing: '+file);
 const bytes=fs.readFileSync(file);
 const candidates=[bytes];
 // Git normalizes text line endings across Windows and Linux; binary assets remain exact.
 if(/\.(tsx?|cjs)$/.test(file)) {
  const lf=bytes.toString('utf8').replace(/\r\n/g,'\n');
  candidates.push(Buffer.from(lf),Buffer.from(lf.replace(/\n/g,'\r\n')));
 }
 assert(candidates.some(data=>crypto.createHash('sha256').update(data).digest('hex')===expected),'Protected content changed: '+file);
}
const rows=[];
for(const route of baseline.routes) {
 const file=path.join('out',route,'index.html');
 assert(fs.existsSync(file),'Missing route: '+route);
 const html=fs.readFileSync(file,'utf8');
 assert(/<h1[ >]/.test(html),'Missing heading: '+route);
 assert(/<title>[^<]+<\/title>/.test(html),'Missing title: '+route);
 assert(/rel="canonical"/.test(html),'Missing canonical: '+route);
 assert(html.includes('id="main-content"'),'Missing accessible main: '+route);
 rows.push(route);
}
const scenarios=[['iPhone','Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)',5,'ios'],['iPad desktop','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)',5,'ios'],['Android','Mozilla/5.0 (Linux; Android 14) Mobile',5,'android'],['Desktop','Mozilla/5.0 (Windows NT 10.0; Win64; x64)',0,'desktop']];
const simple=[{route:'/neon-siege/download',ios:'https://apps.apple.com/tr/app/neon-siege-brick-breaker/id6774618872',android:'https://play.google.com/store/apps/details?id=com.erolozcitak.neonsiege',desktop:'/neon-siege/'},{route:'/lumibaby/download',ios:'https://apps.apple.com/app/lumibaby-audio-baby-monitor/id6762529949',android:'https://play.google.com/store/apps/details?id=com.lumisoft.lumibaby',desktop:null}];
for(const config of simple) {
 const html=fs.readFileSync(path.join('out',config.route,'index.html'),'utf8');
 const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
 const redirect=scripts.find(s=>s.includes('navigator.userAgent')&&s.includes('location.replace'));
 assert(redirect,'Missing redirect: '+config.route);
 assert(html.includes('href="'+config.ios+'"')&&html.includes('href="'+config.android+'"'),'Missing store fallbacks: '+config.route);
 for(const [name,userAgent,maxTouchPoints,platform] of scenarios) {
  let target=null;
  vm.runInNewContext(redirect,{navigator:{userAgent,maxTouchPoints},window:{location:{replace:url=>target=url}}});
  assert(target===config[platform],config.route+' incorrect '+name+' destination: '+target);
 }
}
for(const [slug,apple,play] of [['neon-siege','6774618872','com.erolozcitak.neonsiege'],['lumibaby','6762529949','com.lumisoft.lumibaby'],['jelly-chain-rush','6790545058','com.lumisoft.jellychainrush'],['roto-blocks','6797314822','com.lumisoft.rotoblocks']]) {
 for(const prefix of ['', '/tr']) {
  const html=fs.readFileSync(path.join('out',prefix,slug,'index.html'),'utf8');
  assert(new RegExp('href="https://apps.apple.com/[^" ]*'+apple).test(html),'Missing App Store CTA: '+prefix+'/'+slug);
  assert(html.includes('href="https://play.google.com/store/apps/details?id='+play+'"'),'Missing Play CTA: '+prefix+'/'+slug);
 }
}
assert(fs.existsSync('out/404.html'),'Missing 404');
assert(fs.existsSync('out/sitemap.xml')&&fs.existsSync('out/robots.txt'),'Missing SEO routes');
console.log('PASS: '+rows.length+' public routes, '+Object.keys(baseline.protectedFiles).length+' immutable files, 8 Neon/LumiBaby device cases, 16 product store CTAs, 404 and SEO routes.');
