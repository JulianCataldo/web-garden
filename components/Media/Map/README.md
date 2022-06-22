# Astro — Media map embed

Embed an interactive map in your webpage.  
Using [Leaflet.js](https://leafletjs.com) under the hood.

## Installation

```sh
pnpm i @julian_cataldo/astro-media-map
```

## Usage

> **Note**  
> Only **one** map per page for now

```astro
---
import MediaMap from '@julian_cataldo/astro-media-map/MediaMap.astro';
// ...
---
```

```astro
<!-- … -->
<body>
  <!-- place component inside BODY tag -->

  <MediaMap
    x={43.389636}
    y={5.3964332}
    z={11}
    width={'25rem'}
    height={'25rem'}
    attribution={true}
  />

  <!-- … -->
</body>
```

## Result

![](../../../docs/component-media-map.png)

# API

```ts
export interface Props {
  /** Longitude */
  x: number;
  /** Latitude */
  y: number;
  /** Default zoom level: 10 */
  z?: number;

  height: string;
  /** Default: '100%' */
  width?: string;

  /** Default: true */
  attribution?: boolean;
}
```

## To do

- [ ] Multiple maps per page

---

[Live website demo documentation](../../../../demo)

See [/demo/src/layouts/Layout.astro](../../../demo/src/layouts/Layout.astro)
for full implementation demo.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)
