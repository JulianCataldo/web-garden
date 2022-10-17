# 🚀  Astro — Terminal Player (Asciinema)

[![NPM](https://img.shields.io/npm/v/astro-terminal-player)](https://www.npmjs.com/package/astro-terminal-player)
![Downloads](https://img.shields.io/npm/dt/astro-terminal-player.svg)
[![ISC License](https://img.shields.io/npm/l/astro-terminal-player)](https://github.com/JulianCataldo/web-garden/blob/develop/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)  
[![Astro](https://img.shields.io/badge/Astro-333333.svg?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/Prettier-333333.svg?logo=prettier)](https://prettier.io)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

Embed player for terminal sessions (recorded with [asciinema](https://asciinema.org)) in your Astro project.  
Using [asciinema player](https://github.com/asciinema/asciinema-player) under the hood.

Comes with full asciinema player settings support, typings and docs hints.  
Auto plays / pauses when player is visible.

## 📦  Installation

<!-- Should investigate peerDeps auto-install, that way, only `pnpm i [package]` will suffice -->

```sh
pnpm i asciinema-player astro-terminal-player
```

## 🛠  Usage

```astro
---
import { TerminalPlayer } from 'astro-terminal-player';

import myRecordedCast from '../assets/myRecordedCast.cast?url';
// ...
---
```

```astro
<!-- ... -->
<body>
  <!-- Place component inside `BODY` tag -->

  <TerminalPlayer
    src={myRecordedCast /* Required */}
    settings={{
      /* `asciinema-player` settings are typed and thoroughly documented */
      loop: true,
      speed: 1.7,
      theme: 'solarized-dark',
      terminalFontSize: 'big',
    }}
    aria-label="Terminal session player!"
    class="my-custom-css-overrides"
    class:list={['my-custom-css-list']}
  />

  <!-- ... -->
</body>
```

## 🎉  Result

![](https://res.cloudinary.com/dzfylx93l/image/upload/c_scale,w_1200/v1665842732/astro-terminal-player-1.png)

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
