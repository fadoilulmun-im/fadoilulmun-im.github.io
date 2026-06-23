import js from "@eslint/js";
import globals from "globals";

/**
 * Flat ESLint config. Browser globals for the behavior layer; Node globals for
 * build scripts, configs, and tests. Caught errors are allowed to go unused
 * (the try/catch wrappers in dom.js intentionally swallow them).
 */
export default [
  { ignores: ["dist/", "node_modules/"] },
  js.configs.recommended,
  {
    files: ["src/**/*.js", "src/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_", caughtErrors: "none" }],
    },
  },
  {
    files: ["scripts/**/*.mjs", "tests/**/*.js", "*.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_", caughtErrors: "none" }],
    },
  },
];
