/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  overrides: [
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
  ],
};
