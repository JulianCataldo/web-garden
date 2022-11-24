# 🚀  Astro — Base document enclosure

[![NPM](https://img.shields.io/npm/v/astro-base-document)](https://www.npmjs.com/package/astro-base-document)
![Downloads](https://img.shields.io/npm/dt/astro-base-document.svg)
[![ISC License](https://img.shields.io/npm/l/astro-base-document)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

<!-- AUTO-GENERATED-CONTENT:START (FILE:src=../../common.header.md) -->
<!-- The below content is automatically added from ../../common.header.md -->

[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=${description}) -->

Provide sensible defaults for HTML base document.  
The goal is to reduce boilerplate when using multiple layouts in Astro projects.

<!-- AUTO-GENERATED-CONTENT:END -->

---

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->

- [�  Astro — Base document enclosure](#astro--base-document-enclosure)
  - [📦  Installation](#installation)
  - [🛠  Usage](#usage)
  - [🎉  Result](#result)
  - [💈  Interface](#interface)
  - [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](#live-demo--documentation-website)
<!-- AUTO-GENERATED-CONTENT:END -->

---

## 📦  Installation

<!-- AUTO-GENERATED-CONTENT:START (INSTALLCMD) -->

```sh
pnpm i astro-base-document
```

<!-- AUTO-GENERATED-CONTENT:END -->

## 🛠  Usage

In your layout component, for example `./src/layouts/Default.astro`:

```astro
---
import { Document, Body } from 'astro-base-document';

// ...
---

<!-- All properties are optional -->
<Document
  id="test-base-rootDoc"
  data-theme="default"
  lang="en"
  class:list={[`mode-${import.meta.env.MODE}`, 'my-class-html']}
>
  <Fragment slot="head">
    <!-- Things you can inject in `HEAD` -->
    <style is:inline>
      .some-class {
        color: red;
      }
    </style>
  </Fragment>

  <Body slot="body" id="my-id" class:list={['my-class-body']}>
    <!-- Things you can inject in `BODY` -->
    <nav>My navbar</nav>

    <!-- Your page content slot  -->
    <slot />
  </Body>
</Document>
```

## 🎉  Result

```html
<!DOCTYPE html>
<html lang="es" class="some-class doby-doba js" id="the-id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <script>
      // CRITICAL
      // Add `js` class to `HTML` tag if JavaScript is enabled
      (() => {
        const root = document.documentElement;
        root.classList.add('js');
      })();
    </script>

    <style is:inline>
      .some-class {
        color: red;
      }
    </style>
  </head>

  <body class="other-class dabadi-dabada" id="much-id">
    <nav>My navbar</nav>

    <!-- Page content slot -->
    <div>My page content</div>
  </body>
</html>
```

The `js` class is added to `HTML` tag, critically.  
That way, you can handle CSS for users with or without JS enabled
with **`.js &`** / **`:not(.js) &`** SCSS selectors.

## 💈  Interface

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./Props.ts) -->
<!-- The below code snippet is automatically added from ./Props.ts -->

```ts
/// <reference types="astro/astro-jsx" />

export interface Props extends astroHTML.JSX.HTMLAttributes {
  /**
   * Provides early JS detection for further CSS use
   * by adding `js` class critically to HTML element.
   *
   * **Default**: `true`
   * */
  jsEnabledClass?: boolean;

  /**
   * **Default**: `null`
   * */
  redirectTo?: string | null;
}
```

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- AUTO-GENERATED-CONTENT:START (FILE:src=../../common.footer.md) -->
<!-- The below content is automatically added from ../../common.footer.md -->
<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

Other projects:

- [astro-content](https://github.com/JulianCataldo/astro-content): A text based, structured content manager, for edition and consumption.
- [remark-lint-frontmatter-schema](https://github.com/JulianCataldo/remark-lint-frontmatter-schema): Validate your Markdown **frontmatter** data against a **JSON schema**.
- [retext-case-police](https://github.com/JulianCataldo/retext-case-police): Check popular names casing. Example: ⚠️ `github` → ✅ `GitHub`.
- [remark-embed](https://github.com/JulianCataldo/remark-embed): A `remark` plugin for embedding remote / local Markdown or code snippets.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
<!-- AUTO-GENERATED-CONTENT:END -->
