/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  settings: {
    'import/resolver': {
      typescript: { project: ['tsconfig.json'] }, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ['eslint:recommended'],

  plugins: ['eslint-plugin-tsdoc'],

  rules: {
    'no-restricted-syntax': 0,
    'tsdoc/syntax': 'warn',
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.astro'],
      extends: ['airbnb-base', 'plugin:astro/recommended', 'prettier'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
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
    {
      files: ['*.vue'],
      extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
      ],
      rules: {
        'vue/multi-word-component-names': 'warn',
      },
    },
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      extends: ['airbnb-base', 'prettier'],
      rules: {
        'no-restricted-syntax': 0,
        'import/extensions': 'off',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'max-lines': [
          'error',
          { max: 100, skipComments: true, skipBlankLines: true },
        ],
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
      },
    },
    {
      files: ['*.jsx'],
      extends: ['airbnb', 'plugin:react/jsx-runtime', 'prettier'],
      rules: {
        'import/extensions': ['error', 'always'],
      },
    },
    {
      files: ['*.tsx'],
      extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/extensions': ['error', 'always'],
      },
    },
  ],
};
