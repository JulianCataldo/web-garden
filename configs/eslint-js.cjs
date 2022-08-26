/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  // env: {
  //   node: true,
  //   es2022: true,
  //   browser: true,
  // },

  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      parserOptions: {
        // project: ['./jsconfig.json'], // Useful?
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
      rules: {
        // 'no-restricted-syntax': 0,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  ],
};
