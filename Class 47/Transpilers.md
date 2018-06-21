# Transpiling

Transpilers take your code and convert it to other formats to ensure backwards compatability in browsers which do not support newer versions of the languages you use

- Runtime Transpilers
  - good for development, bad for production

- CLI Transpilers
  - !that

### Setup

1. initialize

```sh

$ mkdir babel-demo
$ cd babel-demo
$ mkdir src lib
$ npm init -f
$ npm install --save-dev babel-cli

```

2. get most recent build
  - env is most recent stable build

```sh

$ npm install babel-preset-env --save-dev

```

3. babel configuration

```sh

$ touch .babelrc

```

4. set "presets" for build versions

```js

{

  "presets": ["env"]
  //          ^ name of preset installed
}

```

5. run the compiler

```sh

$ npm run build


```

6. [optional] set bable to watch for file changes and on change compile
- All files inside the specified ["src"] folder were moved and compiled to ["lib"]
```sh

./node_modules/.bin/babel src -d lib --watch

```
