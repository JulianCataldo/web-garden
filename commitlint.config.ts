// eslint-disable-next-line import/no-import-module-exports
import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['./node_modules/webdev-configs/commitlint-base.ts'],
};

module.exports = Configuration;
