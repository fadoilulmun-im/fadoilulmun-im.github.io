/* =============================================================================
   reveal.js — subtle scroll animations
   Reveals .reveal elements as they enter the viewport. Respects the user's
   reduced-motion preference (and missing IntersectionObserver) by showing
   everything immediately.
   ============================================================================= */
import { $$ } from "./dom.js";

export function initReveal() {
  const items = $$(".reveal");
  if (!items.length) return;

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
  );
  items.forEach((el) => observer.observe(el));
}
