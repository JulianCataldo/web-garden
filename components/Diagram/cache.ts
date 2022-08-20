import type mermaidAPI from 'mermaid/mermaidAPI';

interface Cache {
  [key: string]: {
    config: mermaidAPI.Config;
    code: string;
    result: string;
  };
}

const cache: Cache = {};

export default cache;
