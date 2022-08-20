import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import glob from 'glob-promise';
import type { Package, PackageLoaderProps, PJson } from './types';

export default async function loadPackages(
  props: PackageLoaderProps,
): Promise<Package[]> {
  const packages: Package[] = [];

  /* ———————————————————————————————————————— Package.json —————————————————— */

  props.pJsons.forEach((pJson: PJson) => {
    packages.push({
      pJson: {
        name: pJson.name,
        description: pJson.description,
        repository: pJson.repository,
        bugs: pJson.bugs,
        version: pJson.version,
        keywords: pJson.keywords,
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
      hasDependencies:
        'dependencies' in pJson ||
        'devDependencies' in pJson ||
        'peerDependencies' in pJson,
    });

    console.log(pJson.name);
  });

  await Promise.all(
    props.readmes.map(async (readme, index) => {
      const headers = await readme.getHeadings();

      /* ———————————————————————————————————————— Readme ———————————————————— */

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

      props.changelogs?.forEach((changelogFile) => {
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

      const dir = packages[index].pJson.repository.directory;

      /* ———————————————————————————————————————— TS API ———————————————————— */

      const propsJson = `content/packages/${dir}/Props.json`;

      packages[index].api = await fs
        .readFile(propsJson, 'utf-8')
        .then((file) => JSON.parse(file))
        .catch(() => null);

      /* ———————————————————————————————————————— Video ————————————————————— */

      const videoName = packages[index].pJson.name
        .replace('@julian_cataldo/', '')
        .substring(6);

      /* In Public folder */
      const videoPath = `/assets/videos/tests/*-${videoName}.cy.ts.mp4`;
      const video = (await glob(`./public/${videoPath}`)).pop();
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
