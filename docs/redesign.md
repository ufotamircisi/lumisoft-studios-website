# Lumisoft Studio redesign

## Before editing
46 public pages are recorded in `public-contract.json`, with SHA-256 checksums for legal content, smart download logic, product/store data, sitemap/robots and all pre-existing public assets.

Current design: centered logo hero, repeated small product cards, icon-only product art, extensive purple glows, almost no actual product screens. EN/TR routes and static export are already implemented. Keep these contracts.

## Art direction
Palette: ink #101320, deep ink #080b1a, ice #f0f3f8, lavender #e8e6f5, periwinkle #bac4ff, secondary text #a8b2c8. Real product art supplies the vivid colors.
Type: system sans, Segoe UI/Arial, tightly set large display and restrained readable body. No font download or extra library.
Layout: asymmetrical studio hero with an overlapping composition of actual game/app screens; wide game chapters; a lighter LumiBaby device composition; concise studio statement; clear contact and product/legal navigation.

    [brand                         Games Apps Studio Support EN/TR]
    [large studio headline         layered actual product screens]
    [product index / direct navigation                           ]
    [Games: broad visual scenes with product identity + CTA      ]
    [Apps: light lavender composition and real LumiBaby screens  ]
    [Studio principles                  Contact                  ]
    [brand + games + apps + studio + legal                       ]

Review: avoid repeating a three-column portfolio kit or a black/gradient SaaS hero. Put visual emphasis on the real screen composition; keep surrounding chrome quiet. Games and apps share typography and navigation but have distinct visual pace. Natural scroll, no intro gate. Product icons remain byte-identical.

## Motion and accessibility
One short entrance, interactive depth only on fine-pointer devices, pauseable viewport-aware game preview, no scroll hijacking. Content visible without JS. Focus rings, mobile dialog focus containment, reduced motion, 44px targets and safe-area support.

## Media
Read sibling product repositories only. Original selected files are backed up under ignored `asset_backups/website-reimagination`. Website derivatives are new files under `public/media`. Existing project icon files are untouched.
