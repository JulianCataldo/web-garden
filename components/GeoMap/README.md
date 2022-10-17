# 🚀  Astro — Geographical map embed (Leaflet)

Embed interactive geographical maps in your webpage.  
Using [Leaflet.js](https://leafletjs.com) under the hood.

## 📦  Installation

<!-- Should investigate peerDeps auto-install, that way, only `pnpm i [package]` will suffice -->

```sh
pnpm i leaflet astro-geo-map

# Optional
pnpm i -D @types/leaflet
```

## 🛠  Usage

```astro
---
import { GeoMap } from 'astro-geo-map';
// ...
---
```

```astro
<!-- ... -->
<body>
  <!-- Place component inside `BODY` tag -->

  <GeoMap
    x={43.389636 /* Required */}
    y={5.3964332 /* Required */}
    z={11}
    height={'25rem' /* Required */}
    width={'25rem'}
    attribution={true}
  />

  <!-- ... -->
</body>
```

## To do

- [x] Multiple maps per page
- [ ] SSR rendered placeholder, for when JS is unavailable

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

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
