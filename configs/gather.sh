#!/bin/sh

# Here, we gather config files from root repo that cannot be extended by design

cd ../

cp .editorconfig \
./configs

# These are extended

# commitlint.config.cjs \
# tsconfig.json \
# .eslintrc.cjs \
# .prettierrc.cjs \
# .stylelintrc.cjs \
