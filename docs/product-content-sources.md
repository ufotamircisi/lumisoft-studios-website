# Product content and media provenance

Reviewed 2026-10-25. The website uses real project assets only. No generated imagery, stock photos, fabricated app screens or audio were added. No files in either source repository were changed.

## MIDCHAIN

- Source: `F:/Projeler/below`, commit `7442aa4`.
- `art/store/source/*.jpg`: clean captures rendered by the real game engine, documented in `art/store/README.md`. Scenes are staged with the game's own simulation and assets, HUD hidden; they are not a recorded continuous player run. Store typography overlays are not used.
- Hero: `01_food_chain_w169.jpg`; gallery: `02_hunt_w169.jpg`, `03_hide_w169.jpg`, `07_lifecycle_w169.jpg`.
- Species: `08_species_{levrek,balon,kalamar,fener}_sq.jpg`.
- Environments: `05_zone_{reef,wreck,open,dark,abyss}_p916.jpg`.
- Final icon: `art/branding/icon/icon-master-1024.png`, derived by the source project's own pipeline from the user's final `resources/icon.png`. The old provisional icon was not used or redesigned.
- Website derivatives: `public/media/midchain/*.webp`, resized without enlargement, quality 84. Original masters unchanged.
- Product status: in development; closed testing or public availability is not claimed. Platforms are plans, not live store links. No micro-preview video added (optional P2).
- Privacy source: `PRIVACY_AUDIT.md`, `legal/midchain-legal.json`, source AdMob integration and release-readiness records. Website text distinguishes local gameplay data from Google SDK processing, optional rewarded ads, UMP consent, iOS non-personalized/no ATT configuration, and test vs future production ads.
- External check: https://developers.google.com/admob/android/privacy/play-data-disclosure and https://policies.google.com/privacy (2026-10-25). SDK processing is not described as zero-data, including in test mode. No legal compliance certification is claimed.

## Öğrenimo / Wandermio

- Source: `F:/Projeler/ogrenimo`, HEAD `e78a703` at inspection.
- Final icon: `assets/branding/generated/icon.png`, the approved Buddy-with-book artwork referenced by `app.json` and `brandArt.test.ts`, optimized to `public/media/wandermio/icon.webp`. The unused Expo starter icon was caught during visual QA and replaced before deployment.
- Runtime screenshots: existing `dist/` served read-only on localhost; actual setup flow, empty optional nickname, age 4–6 and kindergarten profile, Turkish and English selected through the parent interface. No real child profile or personal information. Screens captured at 1280×800, unchanged UI, optimized to WebP.
- World, Letter World and Game Park captured in both languages. The app uses a first tap to read a card and second tap to open it for this age, followed in the capture session.
- The source export's browser title still used a previous English brand. No screenshot includes that browser title; no source files or branding in the app were modified. Website English copy, metadata and links consistently use **Wandermio**, Turkish **Öğrenimo**.
- Source features verified against the runtime, `docs/PRIVACY_AND_FAMILIES.md`, `src/__tests__/safety.test.ts`, storage implementation and purchase provider: local child profiles/progress, parent gate, adult-initiated backups, no account, no ads/analytics/tracking SDK, currently unconfigured real purchases. No invented prices, review badges or learning guarantees.
- Privacy describes children’s local data, adult-exported backups, deletion and support correspondence separately. Future purchases are clearly identified as unconfigured, not available subscriptions.

## Existing contract baseline

`docs/public-contract.json` retains all original public routes and protected files. Three reviewed hashes were updated because this task explicitly extends the sitemap, product catalog and global privacy/terms product directories. Their diffs preserve original routes, existing product entries, store URLs and global policy body. The other 50 protected files retain their original hashes. `scripts/verify-new-products.cjs` additionally checks all 16 new localized routes, metadata, images, release status and homepage catalog.

## Source protection

Lumisoft AI Studio and Sound Vault were not used or modified. No audio, external download workers, app builds, signing, application identifiers, AdMob identifiers, store submissions or mobile source commits are part of this website task.
