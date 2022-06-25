# 🚀  Astro — Link, with smart optimizations

Supercharge your links.  
This component detects external / anchor / same domain / mail / telephone
**`href`**, and apply optimizations accordingly.

# Features

- External links
  - **Badge** icon as a hint for users (⎋)
  - `rel="noopener nofollow"` for search engines optimization
  - `target="_blank"` for opening link in a new tab
- JS-based **obfuscation** for `mailto:` and `tel:` links
- Applying CSS classes for specific link types

Some of these features can be disabled if needed.

## Classes

- `link`
- `is-external`
- `is-hash`
- `is-mail`
- `is-tel`
- `has-hint`

You can then style these globally with `:global(.link.is-mail)` for example.

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-link
```

## 🛠  Usage

```astro
---
import Link from '@julian_cataldo/astro-link/Link.astro';
// ...
---
```

```astro
<!-- … -->
<body>
  <!-- place component inside BODY tag -->

  <Link
    href='https://www.juliancataldo.com'
    title='Bonjour !'
    externalHint={false}
    externalInNewTab={true}
  >
    Some <strong>external</strong> link, loaded in current tab
  </Link>

  <!-- … -->
</body>
```

## 🎉  Result

```astro
<a
  href='https://www.juliancataldo.com'
  class='link is-external astro-H4CCARKM'
  rel='noopener nofollow'
  target='_blank'
>
  Some external link, loaded in a new tab
</a>
```

# 👨‍🏭  TypeScript API

```ts
export interface Props {
  href: string;
  title?: string;
  /** Whether to show external link icon or not. Default: true */
  externalHint?: boolean;
  /** Open external link in a new tab/window. Default: true */
  externalInNewTab?: boolean;
}
```

---

[Live website demo documentation](../../demo)

See [/demo/src/layouts/Layout.astro](../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
