/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  overrides: [
    {
      files: ['*.jsx'],
      extends: [
        //
        'airbnb',
        'plugin:react/jsx-runtime',
        'prettier',
      ],
      rules: {
        'import/extensions': ['error', 'always'],
      },
    },
  ],
};
