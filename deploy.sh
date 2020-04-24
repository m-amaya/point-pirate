#!/usr/bin/env sh

# Abort on errors
set -e

# Build
yarn build

# Navigate into the build output directory
cd ./dist

# Commit output
git init
git add -A
git commit -m 'deploy'

# Deploy to https://m-amaya.github.io/chatter
git push -f git@github.com:m-amaya/chatter.git master:gh-pages