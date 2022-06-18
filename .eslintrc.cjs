/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:prettier/recommended',
  ],

  rules: {
    'no-restricted-syntax': 0,
    // 'import/extensions': ['error', 'always'],
    // 'prettier/prettier': ['error'],
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.astro'],
      extends: [
        // 'eslint:recommended',
        'airbnb-base',
        'plugin:astro/recommended',
        'prettier',
      ],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'import/extensions': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'import/no-extraneous-dependencies': 'off',
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
