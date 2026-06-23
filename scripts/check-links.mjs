/* =============================================================================
   check-links.mjs — build-time hygiene guardrail (run AFTER `vite build`)

     1. Placeholders — fail if a known placeholder string survived into the
        shipped dist/index.html (e.g. a forgotten "your-domain.example").
     2. Internal anchors — every href="#id" must resolve to an element id in the
        built HTML, so the smooth-scroll nav and skip-link never dead-end.

   Exits non-zero on any issue so a regression blocks the deploy.
   ============================================================================= */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

let html;
try {
  html = readFileSync(resolve(root, "dist/index.html"), "utf8");
} catch {
  console.error("✗ dist/index.html not found — run `npm run build` first.");
  process.exit(1);
}

let errors = 0;

/* 1. Placeholders that must never ship. */
const PLACEHOLDERS = ["your-domain.example", "PLACEHOLDER", "lorem ipsum", "TODO", "FIXME"];
const lower = html.toLowerCase();
for (const bad of PLACEHOLDERS) {
  if (lower.includes(bad.toLowerCase())) {
    console.error(`✗ placeholder "${bad}" found in dist/index.html`);
    errors++;
  }
}

/* 2. Internal anchors resolve to an id. */
const ids = new Set();
for (const m of html.matchAll(/\sid="([^"]+)"/g)) ids.add(m[1]);

const anchors = new Set();
for (const m of html.matchAll(/href="#([^"]+)"/g)) anchors.add(m[1]);
for (const id of anchors) {
  if (!ids.has(id)) {
    console.error(`✗ internal link #${id} has no matching element id`);
    errors++;
  }
}

if (errors) {
  console.error(`\n✗ link check FAILED: ${errors} issue(s).`);
  process.exit(1);
}
console.log(
  `✓ link check passed: ${ids.size} ids, ${anchors.size} internal anchors all resolve, no placeholders.`,
);
