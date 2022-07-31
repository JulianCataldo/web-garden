// TODO: Proper TypeScript rehaul for this file.

import headlessMermaid from 'headless-mermaid';
/* ·········································································· */

import type { Props } from './Props';

/* —————————————————————————————————————————————————————————————————————————— */

export default async function renderDiagram({ config, code }: Props) {
  /* Render the mermaid diagram */
  const result = await await headlessMermaid
    // NOTE: Fetching mermaid from CDN isn't ideal, should use NPM package?
    .execute(code, config, 'mermaid.min@9.1.3')
    .then((r) => r)
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e);
      return false;
    });

  if (result) {
    return { code, config, result };
  }

  return false;
}
