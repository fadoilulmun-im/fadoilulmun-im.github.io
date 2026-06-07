/* =============================================================================
   theme.js — dark-mode toggle
   The initial data-theme is set by the inline <head> script (to avoid a flash);
   this module only wires the toggle button and follows the OS until the user
   makes an explicit choice.
   ============================================================================= */
import { $, readStored, writeStored } from "./dom.js";

function setThemeColorMeta(theme) {
  let meta = document.getElementById("meta-theme-color");
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.id = "meta-theme-color";
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", theme === "dark" ? "#0b1120" : "#ffffff");
}

function applyTheme(theme, persist) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = $("#theme-toggle");
  if (btn) btn.setAttribute("aria-pressed", String(theme === "dark"));
  setThemeColorMeta(theme);
  if (persist) writeStored("theme", theme);
}

export function initTheme() {
  // Initial data-theme already applied by the inline <head> script.
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(current, false);

  const btn = $("#theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next, true);
    });
  }

  // Follow the OS only while the user hasn't made an explicit choice.
  try {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!readStored("theme")) applyTheme(e.matches ? "dark" : "light", false);
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  } catch (e) { /* ignore */ }
}
