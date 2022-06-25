// eslint-disable-next-line import/no-import-module-exports
import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@julian_cataldo/astro-configs/commitlint.config.ts'],
};

module.exports = Configuration;
