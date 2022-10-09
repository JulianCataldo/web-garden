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

      plugins: [
        //
        'eslint-plugin-tsdoc',
      ],

      rules: {
        'import/extensions': ['error', 'always'],

        'tsdoc/syntax': 'warn',

        'max-lines': [
          'warn',
          { max: 150, skipComments: true, skipBlankLines: true },
        ],

        'react/require-default-props': [
          2,
          {
            functions: 'defaultArguments',
          },
        ],
      },
    },
  ],
};
