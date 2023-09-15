/** @type {import("@types/stylelint").Options} */

module.exports = {
  // TODO: Split config

  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',

    /* ALL */
    // 'stylelint-config-html',
    /* OR */
    'stylelint-config-html/html',
    'stylelint-config-html/astro',
    'stylelint-config-html/vue',
    'stylelint-config-html/xml',
    // "stylelint-config-html/svelte",
    // "stylelint-config-html/php"
  ],

  plugins: [
    //
    'stylelint-order',
  ],

  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-prettier',
        'stylelint-config-recommended-vue/scss',
      ],
    },
  ],
  rules: {
    'comment-empty-line-before': null,
    // Shorthand units make things hard to read and change
    'shorthand-property-no-redundant-values': null,
    'scss/double-slash-comment-empty-line-before': null,
    'color-function-notation': null,
    'property-no-vendor-prefix': null,
    'value-keyword-case': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'hue-degree-notation': null,
    'length-zero-no-unit': null,
    'alpha-value-notation': null,
    'scss/at-import-partial-extension': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'max-line-length': [100, , { ignore: ['comments'] }],
  },
};
