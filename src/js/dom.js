/* =============================================================================
   dom.js — shared low-level helpers
   Tiny, dependency-free shims used across the behavior modules:
     • $ / $$        — querySelector / querySelectorAll (as an Array)
     • readStored /  — localStorage get/set wrapped in try/catch so private-mode
       writeStored      (where storage throws) degrades gracefully.
   ============================================================================= */

export const $ = (sel, ctx) => (ctx || document).querySelector(sel);
export const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

export function readStored(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

export function writeStored(key, val) {
  try { localStorage.setItem(key, val); } catch (e) { /* ignore */ }
}
