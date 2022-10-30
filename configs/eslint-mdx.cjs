/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  overrides: [
    {
      files: ['*.md', '*.mdx'],

      extends: ['plugin:mdx/recommended'],
    },
  ],
};
