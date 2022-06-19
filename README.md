# Astro components and configurations collection

Here lies some re-usable components and tooling settings,
taking advantage of Astro strengths as much as possible.

Focus is on common web patterns and progressive enhancements.

- [Astro components and configurations collection](#astro-components-and-configurations-collection)
- [Application-level components](#application-level-components)
  - [Full page transition](#full-page-transition)
  - [URLs prefetching](#urls-prefetching)
  - [Tooltips](#tooltips)
- [Components](#components)
- [Astro demo website](#astro-demo-website)
- [Tooling configurations](#tooling-configurations)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [Stylelint](#stylelint)
  - […To do](#to-do)

# Application-level components

## Full page transition

https://user-images.githubusercontent.com/603498/174424456-edce69a7-adef-4e59-b2d8-cfc22414b8a4.mp4

---

**📦  [See component](./app/Transition/README.md)**

## URLs prefetching

https://user-images.githubusercontent.com/603498/174425991-7151f1b1-0192-4508-8e6c-3e0d8eabed0d.mp4

---

**📦  [See component](./app/Prefetch/README.md)**

## Tooltips

https://user-images.githubusercontent.com/603498/174427470-cd84028c-4f2f-41d0-8297-e71f21ad62f5.mp4

---

**📦  [See component](./app/Tooltips/README.md)**

# Components

…

# Astro demo website

[Live website demo documentation](../../demo) where you can test all components above.

# Tooling configurations

> **Warning**  
> Work in progress

All these extracts can be found in root directory inside `package.json`,
linters config files…

## ESLint

In `package.json`:

```json

{
  …
  "scripts": {
    "lint:js": "eslint . --fix"
  },
  "devDependencies": {
    "@types/eslint": "^8.4.2",
    "@typescript-eslint/eslint-plugin": "^5.27.0",
    "@typescript-eslint/parser": "^5.27.0",
    "astro-eslint-parser": "^0.2.2",
    "eslint": "^8.17.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-import-resolver-typescript": "^2.7.1",
    "eslint-plugin-astro": "^0.10.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.30.0",
    "eslint-plugin-react-hooks": "^4.5.0",
    "eslint-plugin-vue": "^9.1.0"
  },
  "eslintConfig": {
    "extends": [
      "./node_modules/@julian_cataldo/astro/.eslintrc.cjs"
    ]
  },
  …
}
```

## Prettier

In `package.json`:

```json
{
  …
  "scripts": {
    "format": "prettier -w ./src ./src/**/*.astro"
  },
  "devDependencies": {
    "@types/prettier": "^2.6.3",
    "prettier": "^2.6.2",
    "prettier-plugin-astro": "^0.0.12"
  }
  "prettier": "./node_modules/@julian_cataldo/astro/.prettierrc.cjs",
  …
}
```

Copy `./.editorconfig` in your project root.

## Stylelint

In `package.json`:

```json
{
  …
  "scripts": {
    "lint:style": "stylelint ./src/**/*.vue ./src/**/*.scss ./src/**/*.astro --fix"
  },
  "devDependencies": {
    "postcss-html": "^1.4.1",
    "@types/stylelint": "^14.0.0",
    "stylelint": "^14.8.5",
    "stylelint-config-prettier": "^9.0.3",
    "stylelint-config-recommended-scss": "^6.0.0",
    "stylelint-config-recommended-vue": "^1.4.0",
    "stylelint-config-standard": "^25.0.0",
    "stylelint-config-standard-scss": "^4.0.0"
  },
  "stylelint": {
    "extends": [
      "./node_modules/@julian_cataldo/astro/.stylelintrc.cjs"
    ]
  },
  …
}
```

## …To do

- [ ] Prettier settings in `.astro` files
  - [ ] Print width 80
- [ ] Init root package for config distribution

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
