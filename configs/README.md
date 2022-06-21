# Astro configurations collection

Here lies some re-usable tooling settings.

> **Warning**  
> 🚧  Work in progress  
> Might break often.

---

- [Astro configurations collection](#astro-configurations-collection)
- [Installation](#installation)
- [Tooling configurations](#tooling-configurations)
  - [VSCode](#vscode)
    - [Typescript](#typescript)
  - [ESLint](#eslint)
    - [VSCode](#vscode-1)
  - [Prettier](#prettier)
    - [Editorconfig](#editorconfig)
    - [VSCode](#vscode-2)
  - [Stylelint](#stylelint)
    - [VSCode](#vscode-3)
  - […To do](#to-do)

# Installation

```sh
pnpm i @julian_cataldo/astro-configs
```

All these extracts can be found in root directory inside `package.json`,
linters config files…

# Tooling configurations

## VSCode

In your `settings.json`:

> **Warning**  
> Beware that auto-fixing ALL linting errors on save in `astro` files can potentially be disastrous.  
> You should act on a case-by-case basis.

Extensions: `astro-build.astro-vscode`

```json
{
  …
  "editor.formatOnPaste": true|false,
  "editor.formatOnType": true|false,
  "editor.formatOnSave": true|false,
  "editor.codeActionsOnSave": {
    "source.fixAll": true|false
  }
  …
}
```

### Typescript

In your `settings.json`:

```json
{
  …
  "typescript.inlayHints.parameterNames.enabled": "all"
}
```

In your `tsconfig.json`:

```json
{
  // "include": ["./src"],
  "compilerOptions": {
    // Enable top-level await, and other modern ESM features.
    "target": "ESNext",
    "module": "ESNext",
    // Enable node-style module resolution, for things like npm package imports.
    "moduleResolution": "node",
    // Enable JSON imports.
    "resolveJsonModule": true,
    // Enable stricter transpilation for better output.
    "isolatedModules": true,
    // Add type definitions for our Vite runtime.
    "types": ["vite/client"],

    "jsx": "preserve", // Resolve Vue linting import bug

    "allowJs": true,
    "noEmit": true,

    "baseUrl": ".",
    "paths": {
      // "@components/*": ["src/components/*"]
    }
  }
}
```

## ESLint

In `package.json`:

```json

{
  …
  "scripts": {
    …
    "lint:js": "eslint . --fix"
  },
  "devDependencies": {
    …
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
      "./node_modules/@julian_cataldo/astro-configs/.eslintrc.cjs"
    ]
  },
  …
}
```

### VSCode

Extension: `dbaeumer.vscode-eslint`

In your `settings.json`:

```json
{
  …
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "astro",
    "typescript",
    "typescriptreact"
  ]
}
```

## Prettier

In `package.json`:

```json
{
  …
  "scripts": {
    …
    "format": "prettier -w ./src ./src/**/*.astro"
  },
  "devDependencies": {
    …
    "@types/prettier": "^2.6.3",
    "prettier": "^2.6.2",
    "prettier-plugin-astro": "^0.0.12"
  }
  "prettier": "./node_modules/@julian_cataldo/astro-configs/.prettierrc.cjs",
  …
}
```

### Editorconfig

Copy `./.editorconfig` in your project root.

### VSCode

Extensions: `esbenp.prettier-vscode`, `editorconfig.editorconfig`

In your `settings.json`:

```json
{
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Stylelint

In `package.json`:

```json
{
  …
  "scripts": {
    …
    "lint:style": "stylelint ./src/**/*.vue ./src/**/*.scss ./src/**/*.astro --fix"
  },
  "devDependencies": {
    …
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
      "./node_modules/@julian_cataldo/astro-configs/.stylelintrc.cjs"
    ]
  },
  …
}
```

### VSCode

Extension: `stylelint.vscode-stylelint`

In your `settings.json`:

```json
{
  …
  "stylelint.validate": ["css", "less", "postcss", "scss", "vue", "astro"],
  "stylelint.snippet": ["css", "less", "postcss", "scss", "vue", "astro"]
}
```

## …To do

- [ ] Prettier settings in `.astro` files
  - [ ] Print width 80
  - [ ] Nested code, even less correct settings
- [ ] Init root package for config distribution
- [ ] Fix broken ESLint in Astro file  
      Doc: https://github.com/ota-meshi/eslint-plugin-astro

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
