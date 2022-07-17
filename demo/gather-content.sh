#!/bin/bash

# Cannot pick content outside project directory with Vite, even when setting:
# https://vitejs.dev/config/#server-fs-allow

# So using this script as a work-around for now.


# cp /

# rsync -av --prune-empty-dirs ../docs content/packages

# rsync -av --prune-empty-dirs --include '*/' --include 'Props.ts' --exclude '*' .. content/packages
# rsync -av --prune-empty-dirs --include '*/' --include '*/*/' --include '*/*/*/' --include 'README.md' --exclude '*' .. content/packages
# rsync -av --prune-empty-dirs --include '*/' --include 'package.json' --exclude '*' .. content/packages



rsync -av --prune-empty-dirs --delete-after --include '*/' --include '*.mp4' --exclude '*' ../cypress/videos/ ./public/assets/videos/tests


find .. -iname 'README.md' -maxdepth 3 | rsync -av --files-from=- .. content/packages/

node src/props-extractor.mjs
