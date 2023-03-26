/** @type {import("eslint").Linter.Config} */

module.exports = {
  // FIXME: ./node_modules/ prefix is required, why?
  root: true,
  extends: ['./node_modules/webdev-configs/eslint-all.cjs'],
};
