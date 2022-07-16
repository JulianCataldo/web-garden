#!/bin/sh

# Here, we gather config files from root repo that cannot be extended by design

cd ../

cp .editorconfig \
.vscode \
./configs

# These are extended

# commitlint.config.cjs \
# tsconfig.json \
# .eslintrc.cjs \
# .prettierrc.cjs \
# .stylelintrc.cjs \
