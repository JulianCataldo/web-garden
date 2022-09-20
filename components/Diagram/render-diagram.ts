import path from 'node:path';
import fs from 'node:fs/promises';
// import { createRequire } from 'module';
import puppeteer from 'puppeteer';
/* ·········································································· */
import type { Props } from './Props';

/* —————————————————————————————————————————————————————————————————————————— */

// FIXME: prefer this method over `fs.readFile`.
// Parceled MDX plugin wasn't working well with this ——v
// const require = createRequire(import.meta.url);
// const path = require.resolve('mermaid/dist/mermaid.js');

export default async function renderDiagram({ config, code }: Props) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  const content = await fs.readFile(
    path.join(process.cwd(), 'node_modules/mermaid/dist/mermaid.js'),
    'utf8',
  );

  await page.addScriptTag({ content });

  const result: {
    status: string;
    error?: Error;
    message?: string;
    svgCode?: string;
  } = await page.evaluate(
    (configB, codeB: string) => {
      // FIXME: `window.mermaid` global browser stubbing
      window.mermaid.initialize(configB);

      try {
        /* Render the mermaid diagram */
        const svgCode = window.mermaid.mermaidAPI.render('diagram', codeB);
        return { status: 'success', svgCode };
      } catch (error) {
        return { status: 'error', error, message: error.message };
      }
    },
    config,
    code,
  );

  await browser.close();

  if (result.status === 'success' && typeof result.svgCode === 'string') {
    return result.svgCode;
  }

  return false;
}
