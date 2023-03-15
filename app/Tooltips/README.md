# 🚀  Astro — Tooltips

[![NPM](https://img.shields.io/npm/v/astro-tooltips)](https://www.npmjs.com/package/astro-tooltips)
![Downloads](https://img.shields.io/npm/dt/astro-tooltips.svg)
[![ISC License](https://img.shields.io/npm/l/astro-tooltips)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

Progressively enhanced.  
This component globally override regular `title` attributes on all links with [Tippy.js](https://atomiks.github.io/tippyjs/) tooltips.

## 📦  Installation

```sh
pnpm i astro-tooltips
```

## 🛠  Usage

```astro
---
import { Tooltips } from 'astro-tooltips';
// ...
---
```

Global settings: see all properties on [Tippy documentation](https://atomiks.github.io/tippyjs/v5/all-props/).

```astro
<!-- ... -->
<head>
  <!-- Place component inside `HEAD` tag -->

  <!-- All properties are optional, extends `TippyProps` typings -->
  <Tooltips interactive={false} delay={[15, 14000]} />

  <!-- ... -->
</head>
```

Use:

```astro
<!-- Use the regular title attribute on A tags -->
<a href="#" title="Hello!">Tooltip link</a>

<!-- Or anywhere else -->

<div title="Salut!">Tooltip static element</div>
```

Per tooltip global settings **override**:

```tsx
// Tooltip placement control
<a href="#" title="Hello!" data-tooltip-placement="left">Tooltip left</a>

// Interactivity control
<a href="#" title="Hello!" data-tooltip-interactive="false">Tooltip left</a>
```

## Theming

```css
.tippy-box[data-theme='default'] {
  background-color: var(--vscode-menu-background);
  color: var(--vscode-badge-foreground);
  border: 1px solid var(--vscode-editorWidget-border);
  border-radius: 0.15rem;
  padding: 0.5rem;
  word-wrap: break-word;
}
```

# To do

- [ ] Theming
  - [ ] Override
  - [ ] Docs

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
