# 🚀  Astro — Tooltips

Progressively enhanced.  
This component globally override regular `title` attributes on all links with [Tippy.js](https://atomiks.github.io/tippyjs/) tooltips.

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-tooltips
```

## 🛠  Usage

```astro
---
import Tooltips from '@julian_cataldo/astro-tooltips/Tooltips.astro';
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
