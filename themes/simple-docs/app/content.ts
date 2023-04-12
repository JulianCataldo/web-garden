import { /* get, */ set } from 'lodash-es';
import truncate from 'truncate-html';

import pkg from '/../package.json';

export { pkg };

export const SITE_URL = import.meta.env.SITE;
export const SITE_DESCRIPTION = pkg.description;
export const REPO_URL = pkg?.repository?.url || pkg?.repository;
export const PKG_RELEASE_URL = `https://www.npmjs.com/package/${pkg.name}`;
export const PKG_LICENSE = pkg.license;
export const PROJECT_AUTHORS =
	typeof pkg.author === 'string' ? pkg.author : pkg?.author?.join(', ');
export const ROOT_PKG_VERSION = pkg.version;
export const ISSUES_URL = pkg.bugs.url;
export const SITE_TITLE = pkg.typedoc?.displayName || pkg.name;

const files = import.meta.glob('/content/**/*.md', { eager: true });

function normalize(s: string, stripIndex = false) {
	return s
		.replace(/\/content\//, '')
		.replace(/\.md$/, '')
		.replace(stripIndex ? '/00-index' : '', '')
		.replace('/00-index', '/__index')
		.replaceAll(/\/[0-9][0-9]-/g, '/');
}

export const paths = Object.keys(files).map((path) => ({
	params: {
		path: normalize(path, true),
	},
}));
// Home
// paths.push();
// Default OG
// paths.push({ params: { path: 'default' } });

if (import.meta.env.DEV) {
	paths.push({ params: { path: '_og' } });
}

export const content = {
	// pkg,
	// learn: {},
	// reference: {},
	// more: {},
};

truncate.setup({ stripTags: true, length: 200 });

const fArr = Object.entries(files);
const sortedBasesFiles = fArr.sort(([p, md], i) => {
	// FIXME:
	// return p.startsWith('/content/more/') &&
	// 	!fArr?.[i - 1]?.[0]?.startsWith('/content/more/')
	// 	? -1
	// 	: 1;
	return 1;
});
sortedBasesFiles.map(([p, md], i) => {
	// console.log({ p, md });

	const d = md.compiledContent().split('\n');
	d.splice(0, 1);

	let description = SITE_DESCRIPTION;

	const moreSep = '<!-- more -->';
	if (d.includes(moreSep)) {
		description = truncate(d.join('\n').split('<!-- more -->')?.[0], {
			// decodeEntities: true,
			stripTags: true,
			keepWhitespaces: true,
		}).trim();
	}

	console.log({ description });

	const prev = sortedBasesFiles?.[i - 1];
	const next = sortedBasesFiles?.[i + 1];

	// console.log({ ccc: sortedBasesFiles });
	console.log({ prevvv: prev });

	set(content, normalize(p).split('/').join('.'), {
		title: md.getHeadings()?.[0]?.text,
		description,

		headings: md.getHeadings(),
		Content: md.Content,
		rawContent: md.rawContent,

		previous:
			prev?.[0] !== '/content/00-index.md'
				? {
						// ...prev,
						path: prev?.[0] ? normalize(prev?.[0], true) : undefined,
						title: prev?.[1]?.getHeadings?.()?.[0]?.text,
				  }
				: undefined,

		next: {
			// ...prev,
			path: next?.[0] ? normalize(next?.[0], true) : undefined,
			title: next?.[1]?.getHeadings?.()?.[0]?.text,
		},

		// ...md,
	});
});
