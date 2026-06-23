import { test, expect } from "@playwright/test";

/**
 * Smoke tests — the two stateful behaviors a static portfolio can still get
 * wrong: theme persistence and the bilingual toggle. Not exhaustive by design.
 */

test("theme toggle flips data-theme and persists across reload", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");

  const initial = await html.getAttribute("data-theme");
  await page.locator("#theme-toggle").click();
  const toggled = await html.getAttribute("data-theme");
  expect(toggled).not.toBe(initial);

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", String(toggled));
});

test("language toggle swaps copy and the <html lang> attribute", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  const about = page.locator('[data-i18n="nav.about"]').first();

  await expect(html).toHaveAttribute("lang", "en");
  await expect(about).toHaveText("About");

  await page.locator("#lang-toggle").click();

  await expect(html).toHaveAttribute("lang", "id");
  await expect(about).toHaveText("Tentang");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "id");
});
