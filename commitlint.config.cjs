/** @type {import("@commitlint/types").Linter.Config} */
// NOTE: types are not tested yet.

/*
    build | chore | ci | docs | feat | fix | perf
    refactor | revert | style | test
*/

module.exports = {
  extends: ['@julian_cataldo/astro-configs/commitlint.config.cjs'],
};
