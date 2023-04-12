// NOTE: This part is still a mess, that's normal: a lot of trial and errors

// Inspired by https://github.com/TheOtterlord/manual/blob/main/src/pages/images/%5B...id%5D.png.ts
// & @astro-content/html2png

import satori from 'satori';
// import * as entities from 'entities';
import { html } from 'satori-html';
// import OpenSans from 'simple-docs/lib/OpenSans-Regular.ttf';
import type { APIContext } from 'astro';
import { get } from 'lodash-es';
import { Resvg } from '@resvg/resvg-js';
import { content, SITE_DESCRIPTION, SITE_TITLE } from '../app/content';
import favicon from '/public/favicon.svg?raw';

const width = 1200;
const height = 630;

const fontBuffer = await fetch(
	'https://unpkg.com/typeface-source-sans-pro@1.1.13/files/source-sans-pro-400.woff',
).then((r) => r.arrayBuffer());

// color: white; background: hsl(0, 0%, 8%)
// color: hsl(0, 0%, 88%);"
const styles = {
	container: `
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      background-image: radial-gradient(
        at 15% 100%,
        rgba(16, 29, 38, 1) 0px,
        rgba(20, 32, 42, 0.8) 100%
      ),
      linear-gradient(
        90deg,
        rgba(22, 73, 127, 0) 0px,
        rgba(12, 33, 57) 50%,
        rgba(22, 23, 27, 1) 100%
      )
      ;
			`,

	title: `
      font-weight: 700;
      color: white`,

	title2: `
      text-shadow: 0.15em 0.15em 0.5em hsl(200, 100%, 5%, 0.85);
      color: hsl(192, 100%, 57%);`,

	wrap: `
			font-size: 70px;
			padding: 50px 70px;
      height: 100%;
      width: 100%;
			display: flex;
      justify-content: space-between;
			flex-direction: column;
			color: white;`,
	description: `
			font-size: 40px;
			margin-top: -10px;
			display: flex;
			flex-direction: column;
      /* gap: 10px; */
      /* width: 1100px; */
      /* flex-wrap: wrap; */
      overflow: hidden;
      border-left: 5px solid hsl(200, 100%, 45%, 0.75);
      max-height: 164px;
      padding: 0 30px 0 30px;
			padding-bottom: 10px;
			color: white;`,
};

export async function transform({ url, params, props }: APIContext) {
	// console.log({ params });
	if (params?.path === '00-index') {
		return {
			status: 404,
			body: '',
		};
	}

	const c = get(content, params?.path?.split('/')?.join('.'));
	const page = c || {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
	};
	const isHome = !c || params.path === 'default';

	const title = (page?.__index?.title || page?.title).replace(
		/[^\w\s-\(\),]/gi,
		'',
	);
	const description = page?.__index?.description || page?.description;
	const siteTitle = isHome ? '' : SITE_TITLE;

	const markup = html(/* html */ ` <!--  -->
		<div style="${styles.container}">
			<div style="${styles.wrap}">
				<span style="${styles.title2}">${title}</span>
				<div style="${styles.description}">${description
		// .replace('\n', '<br />')
		.trim()}</div>
        <div style="display: flex; align-items: center; gap: 30px;">
          <span style="margin-left: -1rem">${favicon}</span>
          <span style="${styles.title2}; font-size: 50px">${siteTitle}</span> 
          ${
						isHome
							? ''
							: '<span style="${styles.title}; font-size: 50px; margin-top: -5px; opacity: 0.75;">|   </span>'
					}
          <span style="${styles.title}; font-size: 50px">Documentation</span>
        </div>
			</div>
		</div>`);

	let svg = await satori(markup, {
		fonts: [
			{
				name: 'Open Sans',
				data: fontBuffer,
				// data: Buffer.from(OpenSans),
				style: 'normal',
			},
		],
		height,
		width,
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width,
		},
	});

	const image = resvg.render();

	return {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},

		body: image.asPng(),
		// body: '=======',
	};
}
