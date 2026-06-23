/* =============================================================================
   check-i18n.mjs — build-time i18n guardrail (run AFTER `vite build`)

   The runtime checkParity() in src/js/translate.js only warns in the console and
   only catches keys missing from one language. This script is the build gate:

     1. EN/ID parity — every key must exist in BOTH languages (hard error).
     2. Markup coverage — every data-i18n* key actually used in the BUILT
        dist/index.html must exist in both languages. This catches a typo'd
        data-i18n attribute, which the runtime check cannot (it just renders the
        English first-paint text forever).
     3. Orphan keys — keys defined in I18N but used by no element are reported as
        a warning (not a failure).

   Exits non-zero on any error so a regression blocks the deploy.
   ============================================================================= */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { I18N } from "../src/js/i18n.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

let errors = 0;
const enKeys = new Set(Object.keys(I18N.en));
const idKeys = new Set(Object.keys(I18N.id));

/* 1. Parity between en and id. */
for (const k of enKeys) {
  if (!idKeys.has(k)) {
    console.error(`✗ key present in EN but missing in ID: ${k}`);
    errors++;
  }
}
for (const k of idKeys) {
  if (!enKeys.has(k)) {
    console.error(`✗ key present in ID but missing in EN: ${k}`);
    errors++;
  }
}

/* 2. Keys used in the built markup must exist in both languages. */
let html;
try {
  html = readFileSync(resolve(root, "dist/index.html"), "utf8");
} catch {
  console.error("✗ dist/index.html not found — run `npm run build` first.");
  process.exit(1);
}

const used = new Set();
for (const m of html.matchAll(/data-i18n(?:-html)?="([^"]+)"/g)) used.add(m[1]);
for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
  for (const pair of m[1].split(";")) {
    const [, key] = pair.split(":").map((s) => s && s.trim());
    if (key) used.add(key);
  }
}

for (const k of used) {
  if (!enKeys.has(k)) {
    console.error(`✗ data-i18n key used in markup but missing in EN: ${k}`);
    errors++;
  }
  if (!idKeys.has(k)) {
    console.error(`✗ data-i18n key used in markup but missing in ID: ${k}`);
    errors++;
  }
}

/* 3. Orphan keys — warning only. */
const orphans = [...enKeys].filter((k) => !used.has(k));
if (orphans.length) {
  console.warn(`⚠ ${orphans.length} orphan key(s) defined but unused in markup:`);
  for (const k of orphans) console.warn(`   · ${k}`);
}

if (errors) {
  console.error(`\n✗ i18n check FAILED: ${errors} error(s).`);
  process.exit(1);
}
console.log(
  `✓ i18n check passed: ${used.size} keys used, all present in EN + ID` +
    `${orphans.length ? ` (${orphans.length} orphan warning(s))` : ""}.`,
);
