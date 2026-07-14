const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const root = path.resolve("out");
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

if (!fs.existsSync(root)) {
  console.error("out/ directory is missing. Run the production build first.");
  process.exit(1);
}

http
  .createServer((request, response) => {
    const url = new URL(request.url || "/", "http://localhost");
    const decoded = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const requested = path.resolve(root, decoded);
    const relative = path.relative(root, requested);

    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      response.writeHead(400).end("Invalid path");
      return;
    }

    const candidates = path.extname(requested)
      ? [requested]
      : [path.join(requested, "index.html"), `${requested}.html`];
    const file = candidates.find((candidate) => fs.existsSync(candidate));

    if (!file) {
      const notFound = path.join(root, "404.html");
      response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      fs.createReadStream(notFound).pipe(response);
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    fs.createReadStream(file).pipe(response);
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Static export available at http://127.0.0.1:${port}`);
  });
