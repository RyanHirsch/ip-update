# IP Update

Designed to update Dynamo with our current IP.

## General TS Project setup -- cause I'm a n00b

```sh
yarn init -y
yarn global upgrade typescript tslint
echo 10 > .nvmrc
docker pull node:10
cp "${DOTFILES}/node/default-editorconfig" ./.editorconfig
cp "${DOTFILES}/node/default-prettier.json" ./.prettierrc
cp "${DOTFILES}/node/default-tsconfig.json" ./tsconfig.json
cp "${DOTFILES}/node/default-tslint.json" ./tslint.json
cp "${DOTFILES}/node/default-tsjest.config.js" ./jest.config.js
cp "${DOTFILES}/node/default-tsdockerfile" ./Dockerfile
cp "${DOTFILES}/node/default-tsdockerignore" ./.dockerignore
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
  rimraf
```

Update config files

```sh
cp ./tsconfig.json "${DOTFILES}/node/default-tsconfig.json"
cp ./tslint.json "${DOTFILES}/node/default-tslint.json"
cp ./jest.config.js "${DOTFILES}/node/default-tsjest.config.js"
cp ./Dockerfile "${DOTFILES}/node/default-tsdockerfile"
cp ./.dockerignore "${DOTFILES}/node/default-tsdockerignore"
```
