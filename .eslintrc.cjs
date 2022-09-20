/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  // FIXME: ./node_modules/ prefix is required, why?
  root: true,
  extends: ['./node_modules/@julian_cataldo/astro-configs/eslint-all.cjs'],
};
