/* =============================================================================
   dom.js — shared low-level helpers
   Tiny, dependency-free shims used across the behavior modules:
     • $ / $$        — querySelector / querySelectorAll (as an Array)
     • readStored /  — localStorage get/set wrapped in try/catch so private-mode
       writeStored      (where storage throws) degrades gracefully.
   ============================================================================= */

/**
 * querySelector shorthand. Every call site here queries HTMLElements, so the
 * return is typed as such; cast at the call site for SVG/other element types.
 * @param {string} sel
 * @param {ParentNode} [ctx]
 * @returns {HTMLElement | null}
 */
export const $ = (sel, ctx) =>
  /** @type {HTMLElement | null} */ ((ctx || document).querySelector(sel));

/**
 * querySelectorAll as a real Array of HTMLElement.
 * @param {string} sel
 * @param {ParentNode} [ctx]
 * @returns {HTMLElement[]}
 */
export const $$ = (sel, ctx) =>
  /** @type {HTMLElement[]} */ (Array.from((ctx || document).querySelectorAll(sel)));

/**
 * Read a localStorage value, returning null if storage is unavailable.
 * @param {string} key
 * @returns {string | null}
 */
export function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

/**
 * Write a localStorage value, silently ignoring failures (e.g. private mode).
 * @param {string} key
 * @param {string} val
 */
export function writeStored(key, val) {
  try {
    localStorage.setItem(key, val);
  } catch (e) {
    /* ignore */
  }
}
