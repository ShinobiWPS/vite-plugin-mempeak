
<h1 align="center">
  <br>
  MemPeak
  <br>
</h1>
<h3 align="center">Monitor heap memory usage in your Vite projects</h3>

<p align="center">
<a  href="https://npmjs.org/package/vite-plugin-mempeak/">
<img alt="CI" src="https://img.shields.io/npm/v/vite-plugin-mempeak
">
</a>
<a href="https://npmjs.org/package/vite-plugin-mempeak/">
<img alt="CI" src="https://img.shields.io/npm/d18m/vite-plugin-mempeak
">
</a>

</p>

Mempeak is a Vite plugin to keep track of heap-memory usage at build time only (..for now)
.

## Why use MemPeak?

Mempeak shows you the exact heap memory usage of your Vite project during the build process. This is useful to debug memory-related issue,that are only direct causeof your project and exclude other factors.

### Examples Use cases

I personally had an issue within a Node environment,so I wrote this plugin to help me debug it and cut times.

## 👨‍💻 Getting started

### Installation

```console
npm i -D vite-plugin-mempeak
```

```console
yarn i -D vite-plugin-mempeak
```

```console
pnpm i -D vite-plugin-mempeak
```

## Usage

Initialize it to your `vite.config.js` or `vite.config.ts` file:

```js

mempeak({
  // options
})
```

## 🥇 Contributors

You are welcome to improve it! Just open a PR
