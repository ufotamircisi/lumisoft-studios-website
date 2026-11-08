// Exercise the published privacy contract, including legacy URLs and localized links.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const base = 'https://www.lumisoftstudios.com';
const routes = { en: '/wandermio/privacy/', tr: '/tr/ogrenimo/gizlilik/' };
for (const [lang, route] of Object.entries(routes)) {
  const html = fs.readFileSync(path.join('out', route, 'index.html'), 'utf8');
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert(main, `Missing policy main: ${lang}`);
  assert.equal((main.match(/<h1\b/g) || []).length, 1, `Policy must have one H1: ${lang}`);
  assert(html.includes(`rel="canonical" href="${base}${route}"`), `Canonical changed: ${lang}`);
  for (const [locale, counterpart] of Object.entries(routes)) {
    assert(html.includes(`hrefLang="${locale}" href="${base}${counterpart}"`), `Missing reciprocal alternate: ${lang}/${locale}`);
  }
  assert(main.includes(lang === 'tr' ? '8 Kasım 2026' : 'November 8, 2026'), `Stale policy date: ${lang}`);
  for (const term of ['RevenueCat', 'AdMob', 'StoreKit', 'Google Play Billing', 'ML Kit', 'COPPA', 'GDPR', 'KVKK', 'IDFA', 'ATT', 'versionCode 12', '1.0.0 (7)']) {
    assert(main.includes(term), `Missing material disclosure ${term}: ${lang}`);
  }
  for (const url of ['mailto:support@lumisoftstudios.com', 'https://www.revenuecat.com/privacy', 'https://policies.google.com/privacy', 'https://www.apple.com/legal/privacy/', 'https://developers.google.com/ml-kit/terms']) {
    assert(main.includes(`href="${url}"`), `Non-clickable privacy contact/provider: ${lang}/${url}`);
  }
  for (const suffix of lang === 'tr' ? ['gizlilik', 'kullanim-kosullari', 'destek'] : ['privacy', 'terms', 'support']) {
    const destination = (lang === 'tr' ? '/tr/ogrenimo/' : '/wandermio/') + suffix + '/';
    assert(main.includes(`href="${destination}"`), `Legal navigation changed: ${destination}`);
    assert(fs.existsSync(path.join('out', destination, 'index.html')), `Broken destination ${destination}`);
  }
  assert(!/does not link the Google|SDK’sı iOS uygulamasına bağlanmaz|Data Not Collected|collects no device ID|cihaz kimliği toplamaz/.test(main), `Outdated data claim: ${lang}`);
  assert(main.includes(lang === 'tr' ? 'satın alma haklarını ve reklam sıklığı sınırlarını korur' : 'preserves purchase rights and ad-frequency limits'), `Deletion limitations missing: ${lang}`);
}
console.log('PASS: both privacy policies, retained paths, reciprocal metadata, provider links, current SDK/build disclosures and deletion limits.');