/**
 * WIP
 *
 * Some bits of code are from https://github.com/sjwall/mdx-mermaid
 *
 * Using Parcel to bundle this plugin because
 * Astro uses MJS for its config file.
 * (It seems that it support TS too, but it breaks some third-parties)
 *
 * Also, this could be a separate remark plugin?
 */

// TODO: Proper TypeScript rehaul for this file.

// eslint-disable-next-line import/no-extraneous-dependencies
import { visit } from 'unist-util-visit';
import renderDiagram from './render-diagram';

const style = `display: flex; justify-content: center; width: 100%;`;

function plugin() {
  return async function transformer(ast) {
    // Find all the mermaid diagram code blocks. i.e. ```mermaid
    const instances = [];
    visit(ast, { type: 'code', lang: 'mermaid' }, (node, index, parent) => {
      instances.push([node, index, parent]);
    });
    // Replace each Mermaid code block with the server-side rendered SVG
    await Promise.all(
      instances.map(async ([node, index, parent]) => {
        // MDX rendering seems to be already cached.
        // or this keep running puppeeter ?
        // Also, disabling it prevent a bug which doesn't
        // occur in the regular component.
        const html = await renderDiagram({
          config: {},
          code: node.value,
        }).then((diagram) => diagram);

        parent.children.splice(index, 1, {
          type: 'html',
          // TODO: put CSS elsewhere
          value: `<div class="mermaid-diagram" style="${style}">${html}</div>`,
          position: node.position,
        });
      }),
    );

    return ast;
  };
}

export default plugin;
