/* =============================================================================
   translate.js — apply a language to the DOM
   The only two consumers of I18N:
     • translatePage — rewrites textContent / innerHTML / attributes from I18N
     • checkParity   — dev-time warning if a key is missing from either language

   ⚑ EDITING COPY: edit the strings in ./i18n.js (change a string in BOTH `en`
     and `id`). checkParity() warns on first load if a key is missing.
   ============================================================================= */
import { I18N } from "./i18n.js";
import { $$ } from "./dom.js";

/* Dev-time parity check: warn if a key is missing from either language. */
export function checkParity() {
  const enKeys = Object.keys(I18N.en);
  const idKeys = Object.keys(I18N.id);
  const missingInId = enKeys.filter((k) => !(k in I18N.id));
  const missingInEn = idKeys.filter((k) => !(k in I18N.en));
  if (missingInId.length) console.warn("[i18n] Missing in ID:", missingInId);
  if (missingInEn.length) console.warn("[i18n] Missing in EN:", missingInEn);
}

export function translatePage(lang) {
  const dict = I18N[lang] || I18N.en;
  const fallback = I18N.en;
  const get = (key) => (key in dict ? dict[key] : fallback[key]);

  // Text content
  $$("[data-i18n]").forEach((el) => {
    const val = get(el.getAttribute("data-i18n"));
    if (val != null) el.textContent = val;
  });

  // Trusted HTML (none used by default, but supported)
  $$("[data-i18n-html]").forEach((el) => {
    const val = get(el.getAttribute("data-i18n-html"));
    if (val != null) el.innerHTML = val;
  });

  // Attributes: "aria-label:key; title:key2"
  $$("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr")
      .split(";")
      .forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s && s.trim());
        if (!attr || !key) return;
        const val = get(key);
        if (val != null) el.setAttribute(attr, val);
      });
  });
}
