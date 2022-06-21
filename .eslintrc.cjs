/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  // FIX: ./node_modules/ prefix is required, IDK why
  extends: ['./node_modules/@julian_cataldo/astro-configs/.eslintrc.cjs'],
};
