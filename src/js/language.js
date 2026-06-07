/* =============================================================================
   language.js — EN/ID toggle + persistence
   Applies a language via translatePage() and persists the choice. The initial
   `lang` is set by the inline <head> script; this module wires the toggle.
   ============================================================================= */
import { $, readStored, writeStored } from "./dom.js";
import { translatePage } from "./translate.js";

const LANGS = ["en", "id"];

function applyLang(lang, persist) {
  if (LANGS.indexOf(lang) === -1) lang = "en";
  document.documentElement.setAttribute("lang", lang);
  translatePage(lang);

  // Toggle button shows the language you'll switch TO.
  const label = $("#lang-label");
  if (label) label.textContent = lang === "en" ? "ID" : "EN";

  if (persist) writeStored("lang", lang);
}

export function initLang() {
  const stored = readStored("lang");
  const initial = stored === "id" ? "id" : "en";
  applyLang(initial, false);

  const btn = $("#lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("lang") === "en" ? "id" : "en";
      applyLang(next, true);
    });
  }
}
