# MIDCHAIN / Wandermio preflight

2026-10-25, before source changes.

- Canonical: `F:\Projeler\lumi-apps-website`.
- Git root: same. Branch: `main`. Remote: `https://github.com/ufotamircisi/lumisoft-studios-website.git`.
- Initial HEAD: `c9be6c572986da52705392c06c970a78a7d8c5af`.
- Relocation: `.git` and `node_modules` absent after restore. Cloned the established remote into a temporary directory without checkout; populated its index and compared all 150 tracked files against this workspace. No content differences. Copied only Git metadata back; restored dependencies with `npm ci`.
- Historical copy: `D:\Projelerim\F_Projeler_20261011_7c291d7b\F\Users\erolo\lumi-apps-website`. Backup, also without `.git`; left untouched. No other active website copy found in adjacent project roots.
- User files: untracked `erseroloLumiAppsWebsite` is a historical diff, preserved and excluded from commits. Existing artifacts and asset backups preserved.
- Build: `npm run build:cloudflare`, Next.js 16.2.6 static export to `out`, trailing slashes.
- Deployment: existing `main` push integration, Cloudflare Pages project `lumisoft-studios-website`. Initial GitHub Cloudflare check passed; deployment `1c3edf73-83de-4269-9cd9-a4b00f098103`, preview `https://1c3edf73.lumisoft-studios-website.pages.dev`. Domain `https://www.lumisoftstudios.com/` matches local homepage and product structure.
- Production path audit: no machine-specific runtime/build imports, no source/assets junctions. `localhost` occurs only in the local preview server's URL parser; no fix required. Historical docs contain source provenance paths only.
- Baseline: `npm run verify:contracts` PASS (46 public routes, 53 protected files, existing download scenarios).
- Read-only product sources: MIDCHAIN `7442aa4`; Ogrenimo `e78a703`. No app changes, builds, signing or submissions.
- Risks: preserve all existing legal/download contracts; avoid claims of store availability; use product-specific privacy based on source audits; verify localized routes and live production after deployment.

## Design decision

Keep the existing shell, Segoe UI typography, hero composition, navigation and footer. Base palette stays `#101320` / `#191e30` / `#f0f3f8` / `#a8b2c8`; MIDCHAIN uses ocean `#123e55`, Wandermio uses its real art's turquoise `#8ad0f2`. MIDCHAIN gets a wide real-render feature before existing games, with left-aligned copy and unobscured predator/prey on the right. Wandermio gets a warm, spacious app feature with actual landscape UI, distinct from the existing calm LumiBaby section. No stock, fabricated screens, or generated art. Existing motion retained; new sections remain lightweight and readable without animation.
