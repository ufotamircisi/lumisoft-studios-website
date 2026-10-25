# MIDCHAIN / Öğrenimo / Wandermio validation

2026-10-25. Initial HEAD `c9be6c572986da52705392c06c970a78a7d8c5af`. See `integration-preflight.md` for relocation recovery and `product-content-sources.md` / `media-sources.json` for provenance.

## Implementation

- Existing studio shell, hero composition, navigation, footer and existing products retained. Featured MIDCHAIN leads Games; Wandermio/Öğrenimo leads Apps, followed by the existing LumiBaby feature.
- Four product routes and twelve legal/support routes use the existing EN root / TR prefix architecture. No duplicate `/ogrenimo` alias. Canonical URLs have trailing slashes; reciprocal EN/TR/x-default alternates, localized titles/descriptions, OG/Twitter, product JSON-LD, alt text and sitemap entries are included.
- New products have no store/download CTA. Both accurately say in development for iOS/Android. No ratings, downloads, awards, testimonials, prices, dates or public-testing claims were invented.
- Final approved icons, MIDCHAIN clean engine captures, six new actual Öğrenimo runtime screenshots. WebP derivatives only. Source images untouched, no video/audio added, no new client-side animation or runtime dependency.
- Global Privacy/Terms only gain product links, localized names and an updated directory date; existing policy text retained. Support gains product destinations. New product policies use the shared legal layout and cross-link all three documents.

## Local verification

- `npm run lint`: PASS.
- `npm run build:cloudflare`: PASS. 67 generated static entries; 65 HTML documents pass links, anchors, headings, main landmark and language marker checks.
- `npm run verify:contracts`: PASS. Original 46 routes, 53 protected files (three intentionally extended catalog/directory hashes reviewed; 50 original hashes unchanged), 8 Neon/LumiBaby device cases, 16 existing store CTA checks.
- Jelly download regression: 25 cases PASS. Roto download regression: 17 cases PASS.
- `npm run verify:products`: PASS. All 16 new routes, names, canonicals, language alternates, headings, assets, release status and both homepage catalogs. Included in the existing Cloudflare build chain.
- Real Chromium: six homepage/product locales × seven widths (320, 390, 768, 1024, 1280, 1440, 1920): **42/42**, no horizontal overflow, escaping headings or page errors.
- Twelve product legal pages × 320/768/1440: **36/36**, HTTP 200, product-specific title, canonical, footer and cross-links; no overflow.
- Scroll-through image loading: homepage, MIDCHAIN and Öğrenimo at 390 px, no failed images. Desktop and mobile screenshots inspected. First image pass caught an unused Expo starter icon; replaced with the approved Buddy icon from the actual app config before release.
- Mobile menu opens, closes on Escape and restores focus; legal-page EN→TR switch resolves to the matching Öğrenimo privacy page; Apps navigation closes the menu and reaches `/tr/#apps`.
- Four existing download routes in a desktop browser: HTTP 200, correct store fallbacks; Neon redirects to its product page, other desktop fallbacks remain visible.
- Reduced motion: preference detected, zero running animations and zero initial video requests on homepage.
- `git diff --check`: PASS. Existing user file `erseroloLumiAppsWebsite` remains untracked and is not included in release commits.

Screenshots and temporary capture scripts are in ignored `artifacts/`. These are browser checks, not physical iOS/Android device tests or a Lighthouse score. Source app repositories remain unchanged. No AI Studio or Sound Vault use.

## Production verification

Recorded after the existing Git-connected Cloudflare deployment completes; see the release report.
