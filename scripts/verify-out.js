const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

if (fs.existsSync(outDir)) {
  console.log("✓ out/ directory found — static export ready for Cloudflare Pages.");
  process.exit(0);
} else {
  console.error("✗ out/ directory NOT found after build.");
  console.error("  Working directory:", process.cwd());
  console.error("  Files present:");
  fs.readdirSync(process.cwd()).forEach((f) => console.error("   ", f));
  process.exit(1);
}
