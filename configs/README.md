# Astro configurations collection

Here lies some re-usable tooling settings.  
Languages: JS, TS, Astro, Vue, React, JSX, TSX, SCSS, CSS.  
Tools: Prettier, ESlint, Stylelint, Editorconfig, TypeScript, Commitlint, VS Code.

Opinions are: _use whatever is the most common in web dev' conventions_.

This means aligning to Prettier defaults, air-bnb rules, etc.

---

> **Warning**  
> 🚧  Work in progress  
> Might break often.

---

<div class="git-hide">

- [Astro configurations collection](#astro-configurations-collection)
- [Installation](#installation)
- [Tooling configurations](#tooling-configurations)
  - [VSCode](#vscode)
    - [TypeScript](#typescript)
  - [ESLint](#eslint)
    - [VSCode](#vscode-1)
  - [Prettier](#prettier)
    - [Editorconfig](#editorconfig)
    - [VSCode](#vscode-2)
  - [Stylelint](#stylelint)
    - [VSCode](#vscode-3)
  - [SCSS](#scss)
    - [VSCode](#vscode-4)
  - [Markdown](#markdown)
    - [VSCode](#vscode-5)
  - […To do](#to-do)
  - [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](#live-demo--documentation-website)

---

</div>

# Installation

```sh
pnpm i @julian_cataldo/astro-configs
```

[See the root package.json](../package.json) for this mono-repo.  
Its `devDependencies` are mostly dedicated for meta-framework,
developer's IDE experience.  
You can cherry pick and get inspirations for your own configurations.  
Atomic configs import is planned, as each project might not need the whole range of tools, and will make them more shareable.

# Tooling configurations

## VSCode

In your `settings.json`:

> **Warning**  
> Beware that auto-fixing ALL linting errors on save in `astro` files can potentially be disastrous.  
> You should act on a case-by-case basis.

Extensions: `astro-build.astro-vscode`

```jsonc
{
  // ...
  "editor.formatOnPaste": true|false,
  "editor.formatOnType": true|false,
  "editor.formatOnSave": true|false,
  "editor.codeActionsOnSave": {
    "source.fixAll": true|false
  }
  // ...
}
```

### TypeScript

In your `settings.json`:

```jsonc
{
  // ...
  "typescript.inlayHints.parameterNames.enabled": "all"
}
```

In your `tsconfig.json`:

```jsonc
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

[See the ESLint config file](./.eslintrc.cjs)

---

In `package.json`:

```jsonc
{
  // ...
  "scripts": {
    // ...
    "lint:js": "eslint . --fix"
  },
  "devDependencies": {
    // ...
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
    "eslint-plugin-tsdoc": "^0.2.16",
    "eslint-plugin-vue": "^9.1.0"
  },
  "eslintConfig": {
    "extends": ["./node_modules/@julian_cataldo/astro-configs/.eslintrc.cjs"]
  }
  // ...
}
```

### VSCode

Extension: `dbaeumer.vscode-eslint`

In your `settings.json`:

```jsonc
{
  // ...
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

[See the Prettier config file](./.prettierrc.cjs)

---

In `package.json`:

```jsonc
{
  // ...
  "scripts": {
    // ...
    "format": "prettier -w ./src ./src/**/*.astro"
  },
  "devDependencies": {
    // ...
    "@types/prettier": "^2.6.3",
    "prettier": "^2.6.2",
    "prettier-plugin-astro": "^0.0.12"
  },
  "prettier": "./node_modules/@julian_cataldo/astro-configs/.prettierrc.cjs"
  // ...
}
```

### Editorconfig

[See the Editorconfig file](./.editorconfig)

---

Copy `./.editorconfig` in your project root.

### VSCode

Extensions: `esbenp.prettier-vscode`, `editorconfig.editorconfig`

In your `settings.json`:

```jsonc
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

[See the Stylelint config file](./.stylelintrc.cjs)

---

In `package.json`:

```jsonc
{
  // ...
  "scripts": {
    // ...
    "lint:style": "stylelint ./src/**/*.vue ./src/**/*.scss ./src/**/*.astro --fix"
  },
  "devDependencies": {
    // ...
    "postcss-html": "^1.4.1",
    "stylelint": "^14.8.5",
    "stylelint-config-prettier": "^9.0.3",
    "stylelint-config-recommended-scss": "^6.0.0",
    "stylelint-config-recommended-vue": "^1.4.0",
    "stylelint-config-standard": "^25.0.0",
    "stylelint-config-standard-scss": "^4.0.0"
  },
  "stylelint": {
    "extends": ["./node_modules/@julian_cataldo/astro-configs/.stylelintrc.cjs"]
  }
  // ...
}
```

### VSCode

Extension: `stylelint.vscode-stylelint`

In your `settings.json`:

```jsonc
{
  // ...
  "stylelint.validate": ["css", "less", "postcss", "scss", "vue", "astro"],
  "stylelint.snippet": ["css", "less", "postcss", "scss", "vue", "astro"]
}
```

## SCSS

### VSCode

Extensions:

- SCSS IntelliSense / `mrmlnc.vscode-scss`  
  Advanced autocompletion and refactoring support for SCSS

## Markdown

### VSCode

Extensions:

- markdownlint / `DavidAnson.vscode-markdownlint`  
  Markdown linting and style checking for Visual Studio Code

## …To do

- [ ] Prettier settings in `.astro` files
  - [ ] Nested code, doesn't keep defined settings

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
