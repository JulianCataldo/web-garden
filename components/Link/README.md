# 🚀  Astro — Link, with smart optimizations

[![NPM](https://img.shields.io/npm/v/astro-link)](https://www.npmjs.com/package/astro-link)
![Downloads](https://img.shields.io/npm/dt/astro-link.svg)
[![ISC License](https://img.shields.io/npm/l/astro-link)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

Supercharge your links.  
This component detects external / anchor / same domain / mail / telephone
**`href`**, and apply optimizations accordingly.

# Features

- External links
  - `rel="noopener nofollow"` for search engines optimization
  - `target="_blank"` for opening link in a new tab
- JS-based **obfuscation** for `mailto:` and `tel:` links
- Applying CSS classes for specific link types
- Internal links
  - Auto prefix URLs with 'BASE_URL'
  - Auto add the `rel=prefetch` marker (e.g. for `@astrojs/prefetch`)

Some of these features can be disabled if needed.

## Classes

- `link`
- `is-external`
- `is-internal`
- `is-hash`
- `is-mail`
- `is-tel`
- `has-hint`

You can then style these globally with `:global(.link.is-mail)` for example.

## 📦  Installation

```sh
pnpm i astro-link
```

## 🛠  Usage

```astro
---
import { Link } from 'astro-link';
// ...
---
```

```astro
<!-- ... -->
<body>
	<!-- Place component inside `BODY` tag -->

	<Link
		href={'https://www.juliancataldo.com' /* Required */}
		title={'Bonjour !'}
		externalInNewTab={true}
	>
		Some <strong>external</strong> link, loaded in current tab
	</Link>

	<!-- ... -->
</body>
```

## 🎉  Result

```astro
<a
	href="https://www.juliancataldo.com"
	class="link is-external astro-H4CCARKM"
	rel="noopener nofollow"
	target="_blank"
>
	Some external link, loaded in a new tab
</a>
```

## 🎨  Styling

As all component in this collection, you are responsible to bring style to them.  
This will give you maximum freedom, still you can prevent most of potential styles leaking when needed.

Of course, as links are ubiquitous in any website, it's totally valid to style them globally with `is:global`.

---

Semi-scoped styles inside parent (it won't effect upstream, only downstream):

```astro
<style lang="scss">
	.my-parent-with-custom-links {
		// Use `:global` as a localized escape hatch:

		& :global(.link) {
			font-weight: 700;
			color: green;
		}
		& :global(.link.is-tel) {
			background: yellow;
		}
		& :global(.link.is-mail) {
			color: red;
		}
	}
</style>
```

-**OR**-

Global styles (in your layout component, for example):

```astro
<style lang="scss" is:global>
	a.link {
		font-weight: 700;
		color: green;
	}
	// ...
</style>
```

## To do

- [ ] Support Astro `base` option for prefixing `href`s.

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
