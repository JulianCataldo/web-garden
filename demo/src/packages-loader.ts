import type { MarkdownInstance } from 'astro';
import type { MarkdownHeader } from '@astrojs/markdown-remark';
import type { AstroComponentFactory } from 'astro/dist/types/runtime/server';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import glob from 'glob-promise';

interface PJson {
  name: string;
  description: string;
  repository: {
    url: string;
    directory: string;
  };
  version: string;
}
interface mdFile {
  mainTitle?: MarkdownHeader;
  headers?: MarkdownHeader[] | null;
  Content: AstroComponentFactory | null;
}

export interface APIProps {
  name?: string;
  type?: string;
  required?: boolean;
  default?: string;
}
interface API {
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

interface Props {
  pJsons: PJson[];
  readmes: MarkdownInstance<unknown>[];
  changelogs: MarkdownInstance<unknown>[] | null;
  anchorMode: boolean;
}
export async function structureAllPackages(props: Props): Promise<Package[]> {
  const packages: Package[] = [];

  props.pJsons.forEach((pJson: PJson) => {
    packages.push({
      pJson: {
        name: pJson.name,
        description: pJson.description,
        repository: pJson.repository,
        version: pJson.version,
      },
      readme: {
        mainTitle: { text: '', slug: '', depth: 0 },
        headers: null,
        Content: null,
      },
      changelog: {
        mainTitle: { text: '', slug: '', depth: 0 },
        headers: null,
        Content: null,
      },
      typescriptProps: null,
      api: null,
      video: null,
      shortname: null,
      hasDemo: false,
    });
  });

  await Promise.all(
    props.readmes.map(async (readme, index) => {
      const headers = await readme.getHeaders();

      packages[index].readme = {
        mainTitle: {
          slug: props.anchorMode
            ? headers[0].slug
            : packages[index].pJson.name.replace('@julian_cataldo/', ''),
          text: headers[0].text,
          depth: 0,
        },
        headers,
        Content: readme.Content,
      };

      /* ———————————————————————————————————————— Changelog ————————————————— */

      props.changelogs?.map((changelogFile) => {
        if (changelogFile.file.replace('CHANGELOG', 'README') === readme.file) {
          packages[index].changelog = {
            Content: changelogFile.Content,
          };
        }
      });

      /* ———————————————————————————————————————————————————————————————————— */

      const shortname = packages[index].pJson.name.replace(
        '@julian_cataldo/',
        '',
      );
      packages[index].shortname = shortname;

      /* ———————————————————————————————————————————————————————————————————— */

      const dir = packages[index].pJson.repository.directory;

      // Old way
      // packages[index].typescriptProps = await fs
      //   .readFile(`../${dir}/Props.ts`, 'utf8')
      //   .catch((e) => {
      //     return null;
      //   });

      /* ———————————————————————————————————————— TS API ———————————————————— */

      const propsJson = `content/packages/${dir}/Props.json`;

      packages[index].api = await fs
        .readFile(propsJson, 'utf-8')
        .then((file) => JSON.parse(file))
        .catch(() => null);

      /* ———————————————————————————————————————————————————————————————————— */

      const videoName = packages[index].pJson.name
        .replace('@julian_cataldo/', '')
        .substring(6);

      /* In Public folder */
      const videoPath = `/assets/videos/tests/*-${videoName}.cy.ts.mp4`;
      const video = await (await glob(`./public/${videoPath}`)).pop();
      if (video) {
        packages[index].video = video.replace('./public', '');
      }

      /* ———————————————————————————————————————— Live demo ————————————————— */

      const demoPath = `./src/components/Demo/${shortname}.astro`;
      const hasDemo = existsSync(demoPath);
      if (hasDemo) {
        packages[index].hasDemo = true;
      }
    }),
  );

  return packages;
}
