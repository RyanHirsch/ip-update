# IP Update

Designed to update Dynamo with our current IP.

## General TS Project setup -- cause I'm a n00b

```sh
NODE_VERSION=10
nvm use $NODE_VERSION
yarn init -y
yarn global upgrade typescript tslint
echo $NODE_VERSION > .nvmrc
docker pull node:$NODE_VERSION
docker pull node:$NODE_VERSION-alpine
cp "${DOTFILES}/node/default-editorconfig" ./.editorconfig
cp "${DOTFILES}/node/default-prettier.json" ./.prettierrc
cp "${DOTFILES}/node/default-tsconfig.json" ./tsconfig.json
cp "${DOTFILES}/node/default-tslint.json" ./tslint.json
cp "${DOTFILES}/node/default-tsjest.config.js" ./jest.config.js
cp "${DOTFILES}/node/default-tsdockerfile" ./Dockerfile
cp "${DOTFILES}/node/default-tsdockerignore" ./.dockerignore
cp "${DOTFILES}/node/default-tslintstagedrc" ./.lintstagedrc

npx npm-add-script -k "prettier:base" -v "prettier --parser typescript" -f
npx npm-add-script -k "prettier:check" -v "npm run prettier:base -- --list-different \"src/**/*.{ts,tsx}\"" -f
npx npm-add-script -k "prettier:write" -v "npm run prettier:base -- --write \"src/**/*.{ts,tsx}\"" -f
npx npm-add-script -k "start" -v "node dist/index.js" -f
npx npm-add-script -k "prebuild" -v "rimraf dist" -f
npx npm-add-script -k "build" -v "tsc" -f
npx npm-add-script -k "test" -v "jest" -f
npx npm-add-script -k "test:watch" -v "jest --watch" -f
npx npm-add-script -k "dev" -v "ts-node src/index.ts" -f
npx npm-add-script -k "dev:watch" -v "tsnd --respawn --no-notify src/index.ts" -f
npx npm-add-script -k "precommit" -v "lint-staged" -f

mkdir -p src/
touch src/index.ts
yarn add -D typescript \
  ts-node-dev \
  prettier \
  tslint \
  tslint-config-airbnb \
  tslint-config-prettier \
  jest \
  @types/jest \
  ts-jest \
  husky \
  lint-staged \
  rimraf
```

Update config files

```sh
cp ./tsconfig.json "${DOTFILES}/node/default-tsconfig.json"
cp ./tslint.json "${DOTFILES}/node/default-tslint.json"
cp ./jest.config.js "${DOTFILES}/node/default-tsjest.config.js"
cp ./Dockerfile "${DOTFILES}/node/default-tsdockerfile"
cp ./.dockerignore "${DOTFILES}/node/default-tsdockerignore"
cp  ./.lintstagedrc "${DOTFILES}/node/default-tslintstagedrc"
```
