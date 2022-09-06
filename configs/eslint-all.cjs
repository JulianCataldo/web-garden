/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  extends: [
    //
    './eslint-js.cjs',
    './eslint-ts.cjs',
    './eslint-jsx.cjs',
    './eslint-tsx.cjs',
    './eslint-astro.cjs',
    './eslint-vue.cjs',
  ],
};
