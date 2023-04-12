/* eslint-disable arrow-body-style */

const allow = import.meta.env.PROD_DEPLOY === 'true';

const txt = `User-agent: *
${allow ? 'Allow' : 'Disallow'}: /
${
	allow
		? `
Sitemap: ${import.meta.env.SITE}/sitemap-index.xml
`
		: ''
}`;

export const get = () => {
	return new Response(txt, {
		status: 200,
		headers: {
			'Content-Type': 'text/plain',
		},
	});
};
