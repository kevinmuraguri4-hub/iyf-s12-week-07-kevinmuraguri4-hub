import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules/", "coverage/"] },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
    },
    rules: {
      "no-var": "error",
      eqeqeq: "error",
      curly: "error",
      "prefer-const": "warn",
      "no-unused-vars": "warn",
    },
  },
  {
    files: ["tests/**/*.js"],
    languageOptions: { globals: { ...globals.node } },
  },
];
