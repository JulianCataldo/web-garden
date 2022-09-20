/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.astro'],
      extends: [
        //
        'airbnb-base',
        'plugin:astro/recommended',
        'prettier',
      ],
      parser: 'astro-eslint-parser',
      parserOptions: {
        // Prevents "unresolved" when using "paths"
        // project: ['./tsconfig.json'],
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro', '.js', '.jsx', '.ts', '.tsx'],
      },
      rules: {
        'import/no-absolute-path': 'off',
        'import/extensions': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': [2, { ignore: ['@astrojs/image/components'] }],
        'import/no-extraneous-dependencies': 'off',
        'max-lines': [
          'error',
          { max: 160, skipComments: true, skipBlankLines: true },
        ],
      },
      globals: {
        astroHTML: 'readonly',
      },
    },
  ],
};
