import type { MarkdownInstance } from 'astro';
import type { MarkdownHeading } from '@astrojs/markdown-remark';
import type { AstroComponentFactory } from 'astro/dist/types/runtime/server';

export interface PJson {
  name: string;
  description: string;
  repository: {
    url: string;
    directory: string;
  };
  version: string;
  keywords: string[];
}
export interface mdFile {
  mainTitle?: MarkdownHeading;
  headers?: MarkdownHeading[] | null;
  Content: AstroComponentFactory | null;
}

export interface APIProps {
  name?: string;
  type?: string;
  required?: boolean;
  default?: string;
}
export interface API {
  extends?: null | string;
  properties?: APIProps[] | null;
}

export interface Package {
  pJson: PJson | null;
  readme: mdFile | null;
  changelog: mdFile | null;
  typescriptProps: string | null;
  api: API | null;
  video: string | null;
  shortname: string | null;
  hasDemo: boolean;
}

export interface PackageLoaderProps {
  pJsons: PJson[];
  readmes: MarkdownInstance<unknown>[];
  changelogs: MarkdownInstance<unknown>[] | null;
  anchorMode: boolean;
}
