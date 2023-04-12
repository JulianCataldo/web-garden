// import fs from 'node:fs';
import path from 'node:path';
import type { AstroIntegration } from 'astro';
// import react from '@astrojs/react';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import dotenv from 'dotenv';
import { $ } from 'execa';

dotenv.config();

// TODO: Make a proper choosable pkg.json?
const { homepage } = await import(
	/* @vite-ignore */ path.join(process.cwd(), '../package.json')
);

console.log(homepage);

/* ========================================================================== */

let created = false;

const PROD_DEPLOY = process.env.PROD_DEPLOY === 'true';

export const integrationPreset = (): AstroIntegration[] => [
	// react(),
	prefetch(),

	PROD_DEPLOY ? sitemap() : undefined,

	pagefind(),

	{
		name: 'simple-docs',
		hooks: {
			'astro:config:setup': ({ injectRoute, updateConfig, config }) => {
				if (created) return;
				created = true;
				injectRoute({
					pattern: '[...path]',
					entryPoint: 'simple-docs/pages/[...path].astro',
				});
				injectRoute({
					pattern: '/og/[...path].png',
					entryPoint: 'simple-docs/pages/og/[...path].png.ts',
				});
				injectRoute({
					pattern: 'robots.txt',
					entryPoint: 'simple-docs/pages/robots.txt.ts',
				});
				injectRoute({
					pattern: '404',
					entryPoint: 'simple-docs/pages/[...path].astro',
				});
				console.log('HELLO');

				// const local =
				// 	'http://localhost' + config.server.port
				// 		? ':' + config.server.port
				// 		: ':3000';
				const local = process.env.SITE_URL;

				updateConfig({
					site: process.env.PROD_DEPLOY
						? homepage
						: process.env.SITE_URL || local,

					vite: {
						// plugins: [rawFonts(['.ttf'])],
						optimizeDeps: {
							//
							exclude: [
								//
								'@resvg/resvg-js',
							],
						},
					},

					// For astro-pagefind
					build: {
						format: 'file',
					},
				});
			},
			// NOTE: This is breaking stuff
			// --collapse-whitespace
			'astro:build:done': async () => {
				console.log('Running html-minifier-terser…');
				await $`npx html-minifier-terser --input-dir ./dist --output-dir ./dist --file-ext html --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true`;
			},
		},
	},
];

// function rawFonts(ext) {
// 	return {
// 		name: 'vite-plugin-raw-fonts',
// 		transform(_, id) {
// 			if (ext.some((e) => id.endsWith(e))) {
// 				const buffer = fs.readFileSync(id);
// 				return {
// 					code: `export default ${JSON.stringify(buffer)}`,
// 					map: null,
// 				};
// 			}
// 		},
// 	};
// }
