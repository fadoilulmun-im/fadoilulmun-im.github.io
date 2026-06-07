import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import handlebars from "vite-plugin-handlebars";

// User/org GitHub Pages site is served at the root, so base is "/".
export default defineConfig({
  base: "/",
  plugins: [
    tailwindcss(),
    // Assembles index.html from the partials in src/partials/ at build time
    // (e.g. {{> navbar }} → src/partials/navbar.html). Vanilla, no runtime cost.
    handlebars({
      partialDirectory: resolve(import.meta.dirname, "src/partials"),
    }),
  ],
});
