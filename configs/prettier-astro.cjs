/** @type {import("@types/prettier").Options} */

module.exports = {
  ...require('./prettier-base.cjs'),

  plugins: ['./node_modules/prettier-plugin-astro'],

  overrides: [
    {
      files: '*.astro',
      semi: true,
      options: {
        parser: 'astro',
        printWidth: 80,
      },
    },
  ],
};
