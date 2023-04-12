import { transform } from '../../lib/og-image.js';
import { paths } from '../../app.js';

export const get = async (props) => transform(props);

export const getStaticPaths = () => [
	paths.filter((p) => p.params.path !== '00-index'),
	{ params: { path: 'default' } },
];
