#!/bin/bash

# Cannot pick content outside project directory with Vite, even when setting:
# https://vitejs.dev/config/#server-fs-allow

# So using this script as a work-around for now.

rsync -av --prune-empty-dirs ../docs content/packages

rsync -av --prune-empty-dirs --include '*/' --include 'Props.ts' --exclude '*' .. content/packages
rsync -av --prune-empty-dirs --include '*/' --include 'README.md' --exclude '*' .. content/packages
rsync -av --prune-empty-dirs --include '*/' --include 'package.json' --exclude '*' .. content/packages

rsync -av --prune-empty-dirs --include '*/' --include '*.mp4' --exclude '*' ../cypress/videos/app/ ./public/assets/videos/tests
