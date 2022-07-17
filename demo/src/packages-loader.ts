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
}
interface Readme {
  mainTitle: MarkdownHeader;
  headers: MarkdownHeader[] | null;
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
  pJson: PJson;
  readme: Readme;
  typescriptProps: string | null;
  api: API;
  video: string | null;
  shortname: string | null;
  hasDemo: boolean;
}

// eslint-disable-next-line import/prefer-default-export
export async function structureAllPackages(
  pJsons: PJson[],
  readmes: MarkdownInstance<unknown>[],
  anchorMode = true,
) {
  const packages: Package[] = [];

  pJsons.forEach((pJson: PJson) => {
    packages.push({
      pJson: {
        name: pJson.name,
        description: pJson.description,
        repository: pJson.repository,
      },
      readme: {
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
    console.log(pJson.name);
  });

  await Promise.all(
    readmes.map(async (readme, index) => {
      const headers = await readme.getHeaders();
      // console.log(readme.file);

      packages[index].readme = {
        mainTitle: {
          slug: anchorMode
            ? headers[0].slug
            : packages[index].pJson.name.replace('@julian_cataldo/', ''),
          text: headers[0].text,
          depth: 0,
        },
        headers,
        Content: readme.Content,
      };

      /* ———————————————————————————————————————————————————————————————————— */

      const shortname = packages[index].pJson.name.replace(
        '@julian_cataldo/',
        '',
      );
      packages[index].shortname = shortname;

      /* ———————————————————————————————————————————————————————————————————— */

      const dir = packages[index].pJson.repository.directory;
      // packages[index].typescriptProps = await fs
      //   .readFile(`../${dir}/Props.ts`, 'utf8')
      //   .catch((e) => {
      //     // console.log(e);
      //     return null;
      //   });

      /* ———————————————————————————————————————————————————————————————————— */

      const propsJson = `../content/packages/${dir}/Props.json`;
      console.log({ propsJson });
      packages[index].api = await import(propsJson)
        .then(({ default: def }) => {
          // console.log(def);
          return def;
        })
        .catch((e) => {
          // console.log(e);
          return null;
        });
      // console.log(packages[index].api);

      /* ———————————————————————————————————————————————————————————————————— */

      const videoName = packages[index].pJson.name
        .replace('@julian_cataldo/', '')
        .substring(6);

      /* In Public folder */
      const videoPath = `/assets/videos/tests/*-${videoName}.cy.ts.mp4`;
      const video = await (await glob(`./public/${videoPath}`)).pop();
      // console.log({ videoPath, video, videoName });
      if (video) {
        packages[index].video = video.replace('./public', '');
      }

      /* ———————————————————————————————————————————————————————————————————— */

      const demoPath = `./src/components/Demo/${shortname}.astro`;
      const hasDemo = existsSync(demoPath);
      // console.log({ demoPath });
      if (hasDemo) {
        packages[index].hasDemo = true;
      }
    }),
  );

  return packages;
}
