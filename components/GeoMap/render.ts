import path from 'node:path';
import fs from 'node:fs/promises';
import type { PuppeteerNode } from 'puppeteer';
import type { MapOptions } from 'leaflet';

/* —————————————————————————————————————————————————————————————————————————— */

const ASSETS = path.join(process.cwd(), 'node_modules/leaflet/dist');
const SCRIPT = await fs.readFile(path.join(ASSETS, 'leaflet.js'), 'utf8');
const STYLES = await fs.readFile(path.join(ASSETS, 'leaflet.css'), 'utf8');

// NOTE: Needed because static import is not working.
// End-goal is to provide opt-out of SSR image w. puppeteer.
const puppeteer = (await import(
  path.join(
    process.cwd(),
    './node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js',
  )
)) as PuppeteerNode;

interface Settings {
  url: string;
  width: string;
  height: string;
  leafletOptions: MapOptions;
}
export interface Props {
  settings: Settings;
  hash: string;
  cacheDir: string;
}
export async function render(props: Props) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.addScriptTag({ content: SCRIPT });
  await page.addStyleTag({ content: STYLES });

  await page.evaluate((settings: Settings) => {
    const holder = document.createElement('div');
    holder.style.width = settings.width;
    holder.style.height = settings.height;
    holder.style.zIndex = '0';

    document.body.appendChild(holder);

    const map = L.map(holder, {
      ...settings.leafletOptions,
      zoomControl: false,
    });

    const layer = new L.TileLayer(settings.url);
    map.addLayer(layer);

    return {
      status: 'success',
    };
  }, props.settings);

  await page.waitForNetworkIdle();

  const base = path.join(process.cwd(), props.cacheDir);
  await fs.mkdir(base, { recursive: true });

  await (
    await page.$('div')
  )?.screenshot({
    path: path.join(base, `${props.hash}.png`),
  });

  await browser.close();
}
