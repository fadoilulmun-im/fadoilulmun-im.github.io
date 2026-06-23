import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import handlebars from "vite-plugin-handlebars";
import { projects } from "./src/data/projects.js";
import { experiences } from "./src/data/experience.js";
import { certificates } from "./src/data/certificates.js";

// User/org GitHub Pages site is served at the root, so base is "/".
export default defineConfig({
  base: "/",
  plugins: [
    tailwindcss(),
    // Assembles index.html from the partials in src/partials/ at build time
    // (e.g. {{> navbar }} → src/partials/navbar.html). Vanilla, no runtime cost.
    // `context` exposes the data-driven sections to the {{#each}} loops; the
    // same arrays feed the runtime I18N dictionary in src/js/i18n.js.
    handlebars({
      partialDirectory: resolve(import.meta.dirname, "src/partials"),
      context: { projects, experiences, certificates },
      helpers: {
        // 0-based @index → 1-based bullet number (exp.<key>.b1, b2, …).
        inc: (value) => Number(value) + 1,
      },
    }),
  ],
});
