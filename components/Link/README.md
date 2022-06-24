# 🚀  Astro — Link, with smart optimizations

Supercharge your links.  
This component detects external / anchor / same domain / mail / telephone
**`href`**, and apply optimizations accordingly.

# Features

- `rel="noopener nofollow"`, `target="_blank"` and **badge** icon for external links (⎋)
- JS-based **obfuscation** for `mailto:` and `tel:` links
- Applying CSS classes for specific link types

## Classes

- `is-external`
- `is-hash`
- `is-mail`
- `is-tel`
- `has-hint`

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

[Live website demo documentation](../../../../demo)

See [/demo/src/layouts/Layout.astro](../../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
