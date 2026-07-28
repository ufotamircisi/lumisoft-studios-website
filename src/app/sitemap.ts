import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.lumisoftstudios.com";

const routes = [
  "/",
  "/about",
  "/support",
  "/privacy",
  "/terms",
  "/contact",
  "/lumibaby",
  "/lumibaby/download",
  "/lumibaby/support",
  "/lumibaby/privacy",
  "/lumibaby/terms",
  "/neon-siege",
  "/neon-siege/download",
  "/neon-siege/support",
  "/neon-siege/privacy-policy",
  "/neon-siege/terms-of-use",
  "/jelly-chain-rush",
  "/jelly-chain-rush/privacy",
  "/jelly-chain-rush/terms",
  "/jellychainrush/download",
  "/roto-blocks",
  "/roto-blocks/support",
  "/roto-blocks/privacy",
  "/roto-blocks/terms",
  "/tr",
  "/tr/about",
  "/tr/support",
  "/tr/privacy",
  "/tr/terms",
  "/tr/contact",
  "/tr/lumibaby",
  "/tr/lumibaby/destek",
  "/tr/lumibaby/gizlilik",
  "/tr/lumibaby/kullanim-kosullari",
  "/tr/neon-siege",
  "/tr/neon-siege/destek",
  "/tr/neon-siege/gizlilik",
  "/tr/neon-siege/kullanim-kosullari",
  "/tr/jelly-chain-rush",
  "/tr/jelly-chain-rush/gizlilik",
  "/tr/jelly-chain-rush/kullanim-kosullari",
  "/tr/roto-blocks",
  "/tr/roto-blocks/destek",
  "/tr/roto-blocks/gizlilik",
  "/tr/roto-blocks/kullanim-kosullari",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}/`.replace(/\/+$/, "/"),
    lastModified,
    changeFrequency: route === "/" || route === "/tr" ? "weekly" : "monthly",
    priority: route === "/" || route === "/tr" ? 1 : 0.7,
  }));
}
