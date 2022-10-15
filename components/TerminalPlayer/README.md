# 🚀  Astro — Terminal Player (Asciinema)

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
