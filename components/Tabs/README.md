# 🚀  Astro — Tabs bar + panels

[![NPM](https://img.shields.io/npm/v/astro-tabs)](https://www.npmjs.com/package/astro-tabs)
![Downloads](https://img.shields.io/npm/dt/astro-tabs.svg)
[![ISC License](https://img.shields.io/npm/l/astro-tabs)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

A tabs bar + panels component which **works entirely without JS**.  
Supports height equalization and automatic vertical scroll bar for tabs bar.

> **Note**: It uses [the `:has()`](https://caniuse.com/css-has) CSS selector under the hood.

---

https://user-images.githubusercontent.com/603498/195471643-f5dac29e-f10c-4038-979b-53fbc977190e.mp4

---

## 📦  Installation

```sh
pnpm i astro-tabs
```

## 🛠  Usage

WITHOUT "tallest" equalization

```astro
---
import { Tabs } from 'astro-tabs';
// ...
---

<Tabs class="pass-your-own-class" class:list={['pass-your-class-list']}>
  <Fragment slot="tab-1">Tab 1</Fragment>
  <Fragment slot="tab-2">Tab 2</Fragment>
  <Fragment slot="tab-3">Tab 3</Fragment>

  <Fragment slot="panel-1">
    <h2>Panel 1</h2>
    <p>Hello world</p>
  </Fragment>

  <Fragment slot="panel-2">
    <h2>Panel 2</h2>

    <img
      height="400"
      src="https://res.cloudinary.com/dzfylx93l/image/upload/v1664340439/astro-takeoff-1_ecdfxf.gif"
    />
  </Fragment>

  <Fragment slot="panel-3">
    <h2>Panel 3</h2>
  </Fragment>
</Tabs>
```

WITH "tallest" panel equalization, use `panel-<n>-tallest`

```astro
<Tabs>
  <Fragment slot="tab-1">Tab 1</Fragment>
  <Fragment slot="tab-2">Tab 2</Fragment>
  <Fragment slot="tab-3">Tab 3</Fragment>

  <Fragment slot="panel-1">
    <h2>Panel 1</h2>
    <p>Hello world</p>
  </Fragment>

  <!-- v———————————————————————————————————— This is the tallest panel -->
  <Fragment slot="panel-2-tallest">
    <h2>Panel 2</h2>
    <img
      height="400"
      src="https://res.cloudinary.com/dzfylx93l/image/upload/v1664340439/astro-takeoff-1_ecdfxf.gif"
    />
  </Fragment>

  <Fragment slot="panel-3">
    <h2>Panel 3</h2>
    <p>Heya</p>
  </Fragment>
</Tabs>
```

### Styling

```scss
.tab {
  color: white;
  padding: 1rem;
  background-color: teal;
  border: 1px solid cyan;

  &:hover {
    color: black;
    background-color: cyan;
  }
}

.tab-selector:checked ~ .tab {
  color: black;
  background: turquoise;
}

.panel {
  padding: 1rem;
  background-color: lightcyan;
  border: 3px solid darkcyan;
}
```

Or use `:global(.tab)`,… in scoped styles.

## 🎉  Result

```html
<div class="_tabs_1754q_15 tabs pass-your-class-list pass-your-own-class">
  <style>
    ._tabs_1754q_15:has(._radio_1754q_29-1:checked) ._panel_1754q_7-1 {
      visibility: visible;
      display: inline-block;
    }
    ._tabs_1754q_15:has(._radio_1754q_29-2:checked) ._panel_1754q_7-2 {
      visibility: visible;
      display: inline-block;
    }
    ._tabs_1754q_15:has(._radio_1754q_29-3:checked) ._panel_1754q_7-3 {
      visibility: visible;
      display: inline-block;
    }
  </style>

  <nav class="_tab-bar_1754q_3">
    <div class="tab-wrapper tab-1">
      <input
        class="_radio_1754q_29 _radio_1754q_29-1 radio"
        type="radio"
        name="i8ZgJykDTKrqj1xg_epJe"
        checked="true"
        id="i8ZgJykDTKrqj1xg_epJe-1"
      />
      <label class="tab _tab_1754q_3" for="i8ZgJykDTKrqj1xg_epJe-1">
        <div>Tab 1</div>
      </label>
    </div>
    <div class="tab-wrapper tab-2">
      <input
        class="_radio_1754q_29 _radio_1754q_29-2 radio"
        type="radio"
        name="i8ZgJykDTKrqj1xg_epJe"
        id="i8ZgJykDTKrqj1xg_epJe-2"
      />
      <label class="tab _tab_1754q_3" for="i8ZgJykDTKrqj1xg_epJe-2">
        <div>Tab 2</div>
      </label>
    </div>
    <div class="tab-wrapper tab-3">
      <input
        class="_radio_1754q_29 _radio_1754q_29-3 radio"
        type="radio"
        name="i8ZgJykDTKrqj1xg_epJe"
        id="i8ZgJykDTKrqj1xg_epJe-3"
      />
      <label class="tab _tab_1754q_3" for="i8ZgJykDTKrqj1xg_epJe-3">
        <div>Tab 3</div>
      </label>
    </div>
  </nav>

  <div class="_panels_1754q_7">
    <div class="_panel_1754q_7 _panel_1754q_7-1 panel">
      <h2>Panel 1</h2>
      <p>Hello world</p>
    </div>
    <div class="_panel_1754q_7 _tallest_1754q_15 _panel_1754q_7-2 panel">
      <h2>Panel 2</h2>
      <img
        height="400"
        src="https://res.cloudinary.com/dzfylx93l/image/upload/v1664340439/astro-takeoff-1_ecdfxf.gif"
      />
    </div>
    <div class="_panel_1754q_7 _panel_1754q_7-3 panel">
      <h2>Panel 3</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt
        quibusdam praesentium. Nobis consectetur, minima laboriosam doloremque.
      </p>
      <p>
        enim perferendis fugit a porro. Corporis quis, tenetur maiores explicabo
        ex nulla quo?
      </p>
    </div>
  </div>
</div>
```

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
