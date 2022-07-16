# 🚀  Astro — Media map embed

Embed an interactive map in your webpage.  
Uses [Leaflet.js](https://leafletjs.com) under the hood.

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-media-map
```

## 🛠  Usage

> **Note**  
> Only **one** map per page for now

```astro
---
import MediaMap from '@julian_cataldo/astro-media-map/MediaMap.astro';
// ...
---
```

```astro
<!-- ... -->
<body>
  <!-- Place component inside BODY tag -->

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

- [ ] Multiple maps per page

<div class="git-footer">

---

[LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
