# 🛠  Web developer tool belt

Here lies some re-usable tooling setups, for modern, front-end oriented web development.

Languages features: **JS**, **TS**, **Astro**, **Vue**, **React**, **JSX**, **TSX**, **SCSS**, **CSS**.  
Tools: **Prettier**, **ESlint**, **Stylelint**, **Editorconfig**, **TypeScript**, **Commitlint**, **VS Code**.

Opinions are: _use whatever is the most common in web dev' conventions_.

This means aligning to Prettier defaults, air-bnb rules, etc.

---

> **Warning**  
> 🚧  Continuous re-work,  
> Might break often.

---

<div class="git-hide">

- [🛠  Web developer tool belt](#web-developer-tool-belt)
  - [ESLint](#eslint)
    - [Installations](#installations)
    - [Configuration](#configuration)
    - [VSCode](#vscode)
      - [Extension(s)](#extensions)
      - [Settings](#settings)
  - [Prettier](#prettier)
    - [Installations](#installations-1)
    - [Configuration](#configuration-1)
    - [Editorconfig](#editorconfig)
    - [VSCode](#vscode-1)
      - [Extension(s)](#extensions-1)
      - [Settings](#settings-1)
  - [Stylelint](#stylelint)
    - [Installations](#installations-2)
    - [Configuration](#configuration-2)
    - [VSCode](#vscode-2)
      - [Extension(s)](#extensions-2)
      - [Settings](#settings-2)
  - [SCSS](#scss)
    - [VSCode](#vscode-3)
      - [Extension(s)](#extensions-3)
  - [Markdown](#markdown)
    - [VSCode](#vscode-4)
      - [Extension(s)](#extensions-4)
  - [TypeScript](#typescript)
    - [VSCode](#vscode-5)
    - [Project settings boilerplate](#project-settings-boilerplate)
  - [VSCode](#vscode-6)
    - [Languages](#languages)
      - [Astro](#astro)
  - […To do](#to-do)
  - [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](#live-demo--documentation-website)

---

</div>

<!-- # Installation

```sh
pnpm i @julian_cataldo/astro-configs
```

[See the root package.json](../package.json) for this mono-repo.

Its `devDependencies` are mostly dedicated for meta-framework,
developer's IDE experience.
You can cherry pick and get inspirations for your own configurations.
Atomic configs import is planned, as each project might not need the whole range of tools, and will make them more shareable. -->

## ESLint

### Installations

```sh
# v—————————————————————————————————— Base
pnpm i -D \
eslint \
@types/eslint \
eslint-config-airbnb-base

# v—————————————————————————————————— Prettier compat.
pnpm i -D \
eslint-config-prettier \
eslint-plugin-prettier

# v—————————————————————————————————— TypeScript
pnpm i -D \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint-plugin-import \
eslint-import-resolver-typescript \
eslint-plugin-tsdoc

# v—————————————————————————————————— JSX / TSX (React)
pnpm i -D \
eslint-plugin-react \
eslint-plugin-react-hooks \
eslint-config-airbnb \
eslint-plugin-jsx-a11y

# v—————————————————————————————————— Astro
pnpm i -D \
astro-eslint-parser \
eslint-plugin-astro

# v—————————————————————————————————— Vue
pnpm i -D \
eslint-plugin-vue

# v—————————————————————————————————— MDX
pnpm i -D \
eslint-plugin-mdx
```

### Configuration

[See this ESLint config file for inspiration](./.eslintrc.cjs)

---

Script command in `package.json`:

```jsonc
{
  // …
  "scripts": {
    // …
    "lint:js": "eslint . --fix"
  }
  // …
}
```

### VSCode

#### Extension(s)

```sh
code --install-extension \
dbaeumer.vscode-eslint
```

#### Settings

In your `settings.json`:

```jsonc
{
  // …
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "astro",
    "typescript",
    "typescriptreact",
    "mdx"
  ]
  // …
}
```

## Prettier

### Installations

```sh
# v—————————————————————————————————— Base
pnpm i -D \
@types/prettier \
prettier

# v—————————————————————————————————— Astro
pnpm i -D \
prettier-plugin-astro \
postcss-html
```

### Configuration

[See this Prettier config file for inspiration](./.prettierrc.cjs)

---

Script command in `package.json`:

```jsonc
{
  // …
  "scripts": {
    // …
    "format": "prettier -w ./src ./src/**/*.astro"
  }
  // …
}
```

### Editorconfig

This is used locally with your IDE, in harmony with Prettier and for homogeneous display on GitHub etc.

[See this the config file for inspiration](./.editorconfig)

---

Copy `./.editorconfig` in your project root.

### VSCode

#### Extension(s)

```sh
code --install-extension \
esbenp.prettier-vscode \
editorconfig.editorconfig
```

#### Settings

In your `settings.json`:

```jsonc
{
  // …
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
  },
  "[markdown]": {
    "editor.wordWrap": "off",
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[mdx]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  // …
}
```

## Stylelint

### Installations

```sh
# v—————————————————————————————————— Base
pnpm i -D \
stylelint \
@types/stylelint \
stylelint-config-standard \
stylelint-config-recommended

# v—————————————————————————————————— SCSS
pnpm i -D \
stylelint-config-standard-scss \
stylelint-config-recommended-scss

# v—————————————————————————————————— Vue
pnpm i -D \
stylelint-config-recommended-vue \
postcss-html

# v—————————————————————————————————— Astro
pnpm i -D \
postcss-html

# v—————————————————————————————————— Prettier compat.
pnpm i -D \
stylelint-config-prettier
```

### Configuration

[See this Stylelint config file for inspiration](./.stylelintrc.cjs)

---

Script command in `package.json`:

```jsonc
{
  // …
  "scripts": {
    // …
    "lint:style": "stylelint ./src/**/*.vue ./src/**/*.scss ./src/**/*.astro --fix"
  }
  // …
}
```

### VSCode

#### Extension(s)

```sh
code --install-extension \
stylelint.vscode-stylelint
```

#### Settings

In your `settings.json`:

```jsonc
{
  // …
  "stylelint.validate": ["css", "postcss", "scss", "vue", "astro"],
  "stylelint.snippet": ["css", "postcss", "scss", "vue", "astro"]
  // …
}
```

## SCSS

### VSCode

#### Extension(s)

- Advanced **auto-completion** and **refactoring** support for SCSS  
  **SCSS IntelliSense**  
  `code --install-extension mrmlnc.vscode-scss`

## Markdown

### VSCode

#### Extension(s)

- Markdown **linting** and **style checking** for Visual Studio Code  
  **Markdownlint**  
  `code --install-extension DavidAnson.vscode-markdownlint`
- Markdown **frontmatter YAML** validation against **JSON-Schema**  
  See [github.com/JulianCataldo/remark-lint-frontmatter-schema](https://github.com/JulianCataldo/remark-lint-frontmatter-schema)

## TypeScript

### VSCode

In your `settings.json`:

```jsonc
{
  // …
  "typescript.inlayHints.parameterNames.enabled": "all"
  // …
}
```

### Project settings boilerplate

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

## VSCode

In your `settings.json`:

> **Warning**  
> Beware that auto-fixing ALL linting errors on save can lead to unwanted results.  
> You should act on a case-by-case basis, or review batch fixes carefully.

```jsonc
{
  // …
  "editor.formatOnPaste": true|false,
  "editor.formatOnType": true|false,
  "editor.formatOnSave": true|false,
  "editor.codeActionsOnSave": {
    "source.fixAll": true|false
  }
  // …
}
```

### Languages

#### Astro

```sh
code --install-extension \
astro-build.astro-vscode
```

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
