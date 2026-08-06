const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve("out");

if (!fs.existsSync(root)) {
  console.error("out/ directory is missing. Run the production build first.");
  process.exit(1);
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

function routeTarget(route) {
  const clean = route.replace(/^\/+|\/+$/g, "");
  if (route === "/") return path.join(root, "index.html");
  if (path.extname(clean)) return path.join(root, clean);
  return path.join(root, clean, "index.html");
}

// Google Search Console drops a one-line token file at the site root. It is not a
// page, so it has no landmarks, headings, or links to verify — but it must ship
// byte-for-byte as Google generated it.
function isGoogleSiteVerification(displayName, html) {
  return (
    !displayName.includes(path.sep) &&
    /^google[0-9a-f]+\.html$/i.test(displayName) &&
    html.trim().startsWith("google-site-verification:")
  );
}

const allHtmlFiles = walk(root).filter((file) => file.endsWith(".html"));
const htmlFiles = [];
const failures = new Set();

for (const file of allHtmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const displayName = path.relative(root, file);

  if (isGoogleSiteVerification(displayName, html)) continue;
  htmlFiles.push(file);

  if (!html.includes('id="main-content"')) {
    failures.add(`${displayName}: missing #main-content`);
  }
  if (!html.includes("<h1")) {
    failures.add(`${displayName}: missing h1`);
  }
  if (displayName.startsWith(`tr${path.sep}`) && !html.includes('lang="tr"')) {
    failures.add(`${displayName}: missing Turkish language marker`);
  }

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (!href.startsWith("/") || href.startsWith("//")) continue;

    const [rawRoute, hash] = href.split("#", 2);
    const route = (rawRoute || "/").split("?", 1)[0];
    const target = routeTarget(route);

    if (!fs.existsSync(target)) {
      failures.add(`${displayName}: broken link ${href}`);
      continue;
    }

    if (hash) {
      const targetHtml = fs.readFileSync(target, "utf8");
      if (!targetHtml.includes(`id="${hash}"`)) {
        failures.add(`${displayName}: missing anchor ${href}`);
      }
    }
  }
}

if (failures.size > 0) {
  console.error(`Link and document verification failed (${failures.size}):`);
  for (const failure of [...failures].sort()) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `✓ Verified ${htmlFiles.length} HTML files: internal links, anchors, headings, main landmarks, and language markers.`,
);
