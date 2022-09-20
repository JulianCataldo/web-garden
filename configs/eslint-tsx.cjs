/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  overrides: [
    {
      files: ['*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',

        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/strict',

        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: [
        //
        'eslint-plugin-tsdoc',
        '@typescript-eslint',
      ],
      rules: {
        'tsdoc/syntax': 'warn',

        // 'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/jsx-filename-extension': 'off',

        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'max-lines': [
          'warn',
          { max: 150, skipComments: true, skipBlankLines: true },
        ],
      },
    },
  ],
};
