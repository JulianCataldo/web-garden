# 🚀  Astro — Testbed 👩🏻‍🔬🧫

Component testing and analysis.  
For design systems, storybooks, local dev. isolation, documentation…  
Works with Astro / React JSX.

https://user-images.githubusercontent.com/603498/194942444-cb68238b-f349-4f64-bf32-780dcd2af4d1.mp4

> **Note**  
> Current state is: _usable_, need more tests and refinements.

See demo / **playground** on [astro-content.dev/\_\_content](https://astro-content.netlify.app/__content).  
Then, go to 📍  Storybooks > **Testbeds**

## 📦  Installation

```sh
pnpm i ts-morph astro-testbed
```

## 🛠  Usage

### In Astro template / MDX file

```mdx
import { Testbed } from 'astro-testbed';

## Astro component testbed

<Testbed
  component="/src/components-demo/Crab.astro"
  props={{ character: 'friendly', shellColor: 'salmon' }}
>

🏵 **I'm a default slotted content** 🤹🏻‍♂️

</Testbed>
```

```mdx
## React component testbed — with embedded settings

<Testbed
  component="/src/components-demo/ThreeJuggler.tsx"
  props={{
    count: 7,
  }}
>

    {/* This renders to the default `<ThreeJuggler />` slot. */}

    > **With embedded testbed control schema**

</Testbed>
```

```mdx
## Testbed, headless

Bring your own styles!

<details>
  <summary>Click to see the unstyled component</summary>
  <Testbed
    headless
    component="/src/components-demo/Crab.astro"
    props={{ character: 'aggressive', shellColor: 'seagreen' }}
  >

    oh no

  </Testbed>
</details>
```

```mdx
## Testbed, with controls settings as props.

<Testbed
  component="/src/components-demo/ThreeJuggler.tsx"
  schema={{
    properties: {
      count: {
        title: 'Object count',
        type: 'number',
        minimum: 1,
        maximum: 20,
      },
      mode: {
        title: 'Scene mode',
        type: 'string',
        enum: ['juggler', 'lsd', 'sharkTeeth'],
      },
      hue: {
        title: 'Color hue',
        default: '#ababab',
        type: 'string',
      },
    },
  }}
  ui={{
    count: {
      'ui:widget': 'range',
    },
    hue: {
      'ui:widget': 'color',
    },
  }}
  props={{
    count: 7,
  }}
/>
```

## Embed controls in React JSX component

[Reference for form generation](https://react-jsonschema-form.readthedocs.io/en/latest/)

```tsx

export default function MyReactComponent({
  return <div>{/* … */}</div>
});

MyReactComponent.testbed = {
  schema: {
    properties: {
      count: {
        title: 'Object count',
        type: 'number',
        minimum: 1,
        maximum: 20,
      },
      mode: {
        title: 'Scene mode',
        type: 'string',
        enum: ['juggler', 'lsd', 'sharkTeeth'],
      },
      hue: {
        title: 'Color hue',
        type: 'string',
      },
    },
  },
  ui: {
    count: {
      'ui:widget': 'range',
    },
    hue: {
      'ui:widget': 'color',
    },
  },
};
```

## 🎉  Result

![](https://res.cloudinary.com/dzfylx93l/image/upload/v1665426543/Screenshot_2022-10-10_at_20.28.59_ug0oav.png)

![](https://res.cloudinary.com/dzfylx93l/image/upload/v1665426579/Screenshot_2022-10-10_at_20.29.35_vczgdu.png)

---

## [LIVE DEMO  🎭  DOCUMENTATION WEBSITE ⎋](https://code.juliancataldo.com/)

[![Live demo website](https://code.juliancataldo.com/poster.png)](https://code.juliancataldo.com)

**_[`code.juliancataldo.com`](https://code.juliancataldo.com/)_**

---

See [CHANGELOG.md](./CHANGELOG.md) for release history.

---

Related projects:

- [astro-content](https://astro-content.dev): A text based, structured content manager, for edition and consumption.

Other projects:

- [retext-case-police](https://github.com/JulianCataldo/retext-case-police): Check popular names casing. Example: ⚠️ `github` → ✅ `GitHub`.
- [remark-embed](https://github.com/JulianCataldo/remark-embed): A `remark` plugin for embedding remote / local Markdown or code snippets.
- [remark-lint-frontmatter-schema](https://github.com/JulianCataldo/remark-lint-frontmatter-schema): Validate your Markdown frontmatter data against a JSON schema.

---

🔗  [JulianCataldo.com](https://www.juliancataldo.com)
