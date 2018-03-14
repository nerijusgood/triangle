# Preact Triangle [![Build Status](https://travis-ci.org/developit/preact-boilerplate.svg?branch=master)](https://travis-ci.org/developit/preact-boilerplate) [![Preact Slack Community](https://preact-slack.now.sh/badge.svg)](https://preact-slack.now.sh)

:guitar: Rock'n'triangle!

---

## Quick start

```sh
yarn install
```

```sh
yarn dev
```

```sh
yarn test
```

```sh
yarn build
```

Finally push: `surge ./build -d triangle.surge.sh`

---

## Intro

Very simple app. Basically all code lies in components/home/index.js. For this case I used Preact (a minified React little brother), which is fully compatible with react, just simplified and tiny. 

Based on Preact-starter-kit, I basically used their setup, have not spent time on custimzing anythig, therefore, lint, style (less) was inherited. I'd prefer `SASS` and use original `*.jsx`, but this is jut fine.

## Room for improvement

Generally, there are quite a few things I would still love to update: 

- Switch to `SASS`, use other css methodoly, like `SuitCSS`. 

- For the fun of it, it would be pretty cool to draw triangle itself with Canvas API. Or maybe some nice drawing library.

- From technical part, maybe it would be smart to create inteligent input with increments: no negative numbers, support for decimals, units(?)... A proper reusable number input component.

## License

MIT

[Preact]: https://github.com/developit/preact
[preact-compat]: https://github.com/developit/preact-compat
[webpack]: https://webpack.github.io
