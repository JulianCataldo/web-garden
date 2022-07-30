# 🚀  Astro — Diagrams with Mermaid JS 🧜🏻‍♀️

Embed you Mermaid diagrams in no time inside your Astro templates. Features **server-side rendering** and **smart
caching**.

---

Uses Muhammad Muzzammil' [`headless-mermaid`](https://github.com/muhammadmuzzammil1998/headless-mermaid) under the hood.  
And of course, the [`mermaid`](https://github.com/mermaid-js/mermaid) library.

## 📦  Installation

```sh
pnpm i @julian_cataldo/astro-diagram headless-mermaid
```

## 🛠  Usage

```astro
---
import Diagram, { Config } from '@julian_cataldo/astro-diagram/Diagram.astro';

const config = {
  theme: 'forest',
  // ...
} as Config;

const code = `
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?`;

// ...
---
```

```astro
<!-- ... -->
<body>
  <!-- Place component inside BODY tag -->

  <!-- All properties are mandatory -->

  <Diagram config={config} code={code} />

  <!-- ... -->
</body>
```

<div class="git-hide">

## 🎉  Result

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

</div>

## To do

- [ ] Investigate Astro **MDX** integration  
       See https://github.com/sjwall/mdx-mermaid  
       Unist visit: https://github.com/sjwall/mdx-mermaid/blob/main/src/mdxast-mermaid.ts

<div class="git-footer">

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com/)

</div>
