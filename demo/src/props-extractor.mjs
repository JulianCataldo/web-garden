// NOTE: this script is quite a rigid hack
import fs from 'node:fs/promises';
import glob from 'glob-promise';

function extract(file) {
  const allProperties = [];

  const defaults = file.match(/\*\*Default\*\*: `(.*)`/g);
  // console.log({ defaults });

  // TODO: invert defaults and properties iterations and make defaults optional

  defaults.forEach((def) => {
    const defaultValue = def.match(/\*\*Default\*\*: `(.*)`/)[1];
    allProperties.push({ default: defaultValue });
  });

  const properties = file.match(/.*: .*;/g);
  // console.log({ properties });

  properties.forEach((prop, key) => {
    const propG = prop.match(/..(.*): (.*);/);
    const required = prop.match(/\?:/g) === null;

    allProperties[key] = {
      name: propG[1].replace('?', ''),
      type: propG[2],
      required,
      ...allProperties[key],
    };
    console.log({ p: propG[1], p2: propG[2], required });
  });
  // console.log({ allProperties });

  const propExtends = file.match(/extends (.*) /);
  // console.log({ propExtends });

  return {
    extends: Array.isArray(propExtends) ? propExtends[1] : null,
    properties: allProperties,
  };
}

async function collectFiles() {
  const files = await glob('../{app,components}/**/Props.ts');
  console.log({ files });

  files.forEach(async (file) => {
    console.log({ extracting: file });
    const inputFile = await fs.readFile(file, 'utf-8');

    // console.log({ inputFile });

    const propsIface = inputFile.split('export interface Props')[1];

    const componentAPI = extract(propsIface);
    // console.log({ componentAPI });
    const jsonOutput = JSON.stringify(componentAPI, null, 2);

    const destPath = file
      .replace('../', 'content/packages/')
      .replace('Props.ts', 'Props.json');

    // console.log({ jsonOutput, destPath });

    try {
      await fs.writeFile(destPath, jsonOutput, (e) => {
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }
  });
}

await collectFiles();
