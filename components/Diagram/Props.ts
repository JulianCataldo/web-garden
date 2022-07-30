/// <reference types="astro/astro-jsx" />

import type mermaidAPI from 'mermaid/mermaidAPI';

// FIXME: should `extends astroHTML.JSX.HTMLAttributes`?
export interface Props {
  /**
   * Configuration
   *
   * **Default**: `{}`
   * */
  config: mermaidAPI.Config;
  /**
   * Mermaid code
   *
   * **Default**: `''`
   * */
  code: string;
}
