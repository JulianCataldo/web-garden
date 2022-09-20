# 🚀  Astro — Media map embed

Embed interactive geographical maps in your webpage.  
Using [Leaflet.js](https://leafletjs.com) under the hood.

## 📦  Installation

<!-- Should investigate peerDeps auto-install, that way, only `pnpm i [package]` will suffice -->

```sh
pnpm i @julian_cataldo/astro-media-map leaflet
pnpm i -D @types/leaflet
```

## 🛠  Usage

```astro
---
import MediaMap from '@julian_cataldo/astro-media-map/MediaMap.astro';
// ...
---
```

```astro
<!-- ... -->
<body>
  <!-- Place component inside `BODY` tag -->

  <MediaMap
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

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
