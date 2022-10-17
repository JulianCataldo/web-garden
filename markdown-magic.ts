import path from 'path';
import markdownMagic from 'markdown-magic';
import tree from 'markdown-magic-directory-tree';
import vBadge from 'markdown-magic-version-badge';
import install from 'markdown-magic-install-command';
// import template from 'markdown-magic-template';
import pkgJson from 'markdown-magic-package-json';

const config = {
  transforms: {
    DIRTREE: (content, options, config) =>
      tree(
        content,
        {
          ...options,
          ignore: [
            ...(options.ignore || []),
            'CHANGELOG.md',
            'README.md',
            'node_modules',
            'package.json',
            'pnpm-lock.yaml',
            '.dev',
            '.DS_Store',
          ],
          depth: 1,
        },
        config,
      ),
    VERSIONBADGE: (content, options, config) =>
      vBadge(content, options, config),

    INSTALLCMD: (content, options, config) =>
      install(
        content,
        {
          client: 'pnpm',
        },
        config,
      )
        .replace('--save ', '')
        .replace('install', 'i'),

    // TEMPLATE: install,
    PKGJSON: (content, options, config) =>
      pkgJson(
        content,
        {
          ...options,
          pkg: path.join(path.dirname(config.originalPath), 'package.json'),
        },
        config,
      ),
  },
};

const markdownPaths = [
  path.join(__dirname, 'README.md'),
  path.join(__dirname, 'app/*/README.md'),
  path.join(__dirname, 'components/*/README.md'),
  path.join(__dirname, 'configs/README.md'),
  path.join(__dirname, 'demo/README.md'),
];
markdownMagic(markdownPaths, config);
