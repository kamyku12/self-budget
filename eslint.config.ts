import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    extends: [
      js.configs.recommended,
      pluginReact.configs.flat.recommended,
      tseslint.configs.recommended,
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, React: "readonly" },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    ignores: ["src/dist/**", "src/dist-electron/**"],
  },
]);
