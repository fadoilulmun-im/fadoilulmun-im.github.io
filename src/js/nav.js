/* =============================================================================
   nav.js — hamburger menu + scroll-spy
   Opens/closes the mobile nav panel (backdrop, Esc, link-click, resize) and
   highlights the active section's nav link via IntersectionObserver.
   ============================================================================= */
import { $, $$ } from "./dom.js";

export function initNav() {
  const toggle = $("#nav-toggle");
  const menu = $("#nav-menu");
  const backdrop = $("#nav-backdrop");
  const header = $(".site-header");
  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    if (backdrop) { backdrop.hidden = false; backdrop.classList.add("is-open"); }
  };
  const closeMenu = (returnFocus) => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (backdrop) { backdrop.classList.remove("is-open"); backdrop.hidden = true; }
    if (returnFocus) toggle.focus();
  };
  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  toggle.addEventListener("click", () => (isOpen() ? closeMenu() : openMenu()));
  if (backdrop) backdrop.addEventListener("click", () => closeMenu());

  // Close when a link inside the menu is clicked.
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  // Esc closes and restores focus to the toggle.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) closeMenu(true);
  });

  // Reset the menu if the viewport grows past the mobile breakpoint.
  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (window.innerWidth >= 1024 && isOpen()) closeMenu();
    }, 150);
  });

  /* ---- Scroll-spy: highlight the active section's nav link ---- */
  const links = $$(".nav__link");
  const map = {}; // section id -> link
  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.charAt(0) === "#" && href.length > 1) map[href.slice(1)] = link;
  });

  const watched = Object.keys(map)
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!watched.length || !("IntersectionObserver" in window)) return;

  const navH = header ? header.offsetHeight : 64;
  const visible = new Set();

  const setActive = () => {
    // First section in document order that's currently in the active band.
    let activeId = null;
    for (let i = 0; i < watched.length; i++) {
      if (visible.has(watched[i].id)) { activeId = watched[i].id; break; }
    }
    links.forEach((l) => {
      const on = activeId && map[activeId] === l;
      if (on) l.setAttribute("aria-current", "true");
      else l.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });
      setActive();
    },
    { rootMargin: `-${navH + 8}px 0px -55% 0px`, threshold: 0 }
  );
  watched.forEach((sec) => observer.observe(sec));
}
