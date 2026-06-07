/* =============================================================================
   Fadoilul Mun'im — Portfolio behavior (orchestrator)
   Vanilla JS, no dependencies. Loaded as an ES module.

   Modules (all in src/js/):
     dom.js        — $ / $$ / readStored / writeStored
     i18n.js       — EN/ID translation strings
     translate.js  — translatePage + checkParity
     theme.js      — dark-mode toggle (initial theme set in <head>)
     language.js   — EN/ID toggle + persistence
     nav.js        — hamburger menu + scroll-spy (active link)
     reveal.js     — subtle scroll animations (respects reduced motion)

   ⚑ EDITING COPY: edit the strings in ./i18n.js (change a string in BOTH `en`
     and `id`). checkParity() warns on first load if a key is missing.
   ============================================================================= */
import { $ } from "./dom.js";
import { checkParity } from "./translate.js";
import { initTheme } from "./theme.js";
import { initLang } from "./language.js";
import { initNav } from "./nav.js";
import { initReveal } from "./reveal.js";

/* -------------------------------- MISC ------------------------------------ */
function initYear() {
  const el = $("#year");
  if (el) el.textContent = String(new Date().getFullYear());
}

/* --------------------------------- INIT ----------------------------------- */
function init() {
  checkParity();
  initTheme();
  initLang();
  initNav();
  initReveal();
  initYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
