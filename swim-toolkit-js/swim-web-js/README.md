# Swim Web TypeScript Framework

[![package](https://img.shields.io/npm/v/@swim/web.svg)](https://www.npmjs.com/package/@swim/web)
[![documentation](https://img.shields.io/badge/doc-TypeDoc-blue.svg)](https://docs.swimos.org/js/latest/modules/_swim_web.html)
[![chat](https://img.shields.io/badge/chat-Gitter-green.svg)](https://gitter.im/swimos/community)

<a href="https://www.swimos.org"><img src="https://docs.swimos.org/readme/marlin-blue.svg" align="left"></a>

The **Swim Web** framework implements a thin web application framework built on
the **Swim UI** toolkit.  **Swim Web** makes it easy to embed
[**Swim UI**](https://github.com/swimos/swim/tree/master/swim-toolkit-js/swim-ui-js) and
[**Swim UX**](https://github.com/swimos/swim/tree/master/swim-toolkit-js/swim-ux-js)
views in any web page by simply adding special `swim-` attributes to ordinary
HTML elements.  **Swim Web** is a part of the broader
[**Swim Toolkit**](https://github.com/swimos/swim/tree/master/swim-toolkit-js/@swim/toolkit) framework.

## Framework

The **Swim Web** framework consists of the following component libraries:

- [**@swim/web**](@swim/web) –
  umbrella package that depends on, and re-exports, all Swim Web libraries.
- [**@swim/website**](@swim/website) –
  minimalist components that implement common dynamic website behaviors.
- [**@swim/webapp**](@swim/webapp) –
  lightweight web application loader that dynamically instantiates views and
  controllers declared by `swim-` HTML attributes.

**Swim Web** builds on the [**Swim Core**](https://github.com/swimos/swim/tree/master/swim-system-js/swim-core-js),
[**Swim UI**](https://github.com/swimos/swim/tree/master/swim-toolkit-js/swim-ui-js), and
[**Swim UX**](https://github.com/swimos/swim/tree/master/swim-toolkit-js/swim-ux-js)
frameworks; it has no additional dependencies.

## Installation

### npm

For an npm-managed project, `npm install @swim/web` to make it a dependency.
TypeScript sources will be installed into `node_modules/@swim/web/main`.
Transpiled JavaScript and TypeScript definition files install into
`node_modules/@swim/web/lib/main`.  And a pre-built UMD script, which
bundles all **@swim/web** component libraries, can be found in
`node_modules/@swim/web/dist/main/swim-web.js`.

### Browser

Browser applications can load `swim-web.js`, along with its `swim-core.js`,
`swim-ui.js`, and `swim-ux.js` dependencies, from the SwimOS CDN.

```html
<!-- Development -->
<script src="https://cdn.swimos.org/js/latest/swim-core.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-ui.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-ux.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-web.js"></script>

<!-- Production -->
<script src="https://cdn.swimos.org/js/latest/swim-core.min.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-ui.min.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-ux.min.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-web.min.js"></script>
```

Alternatively, the `swim-toolkit.js` script may be loaded, along with its
`swim-system.js` dependency, from the SwimOS CDN.  The `swim-toolkit.js`
script bundles **@swim/web** together with all other
[**@swim/toolkit**](https://github.com/swimos/swim/tree/master/swim-toolkit-js/@swim/toolkit)
frameworks.

```html
<!-- Development -->
<script src="https://cdn.swimos.org/js/latest/swim-system.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-toolkit.js"></script>

<!-- Production -->
<script src="https://cdn.swimos.org/js/latest/swim-system.min.js"></script>
<script src="https://cdn.swimos.org/js/latest/swim-toolkit.min.js"></script>
```

## Usage

### ES6/TypeScript

**@swim/web** can be imported as an ES6 module from TypeScript and other
ES6-compatible environments.  All component libraries are re-exported by
the umbrella `@swim/web` module.

```typescript
import * as swim from "@swim/web";
```

### CommonJS

**@swim/web** can also be used with CommonJS-compatible module systems.
All component libraries are re-exported by the umbrella `@swim/web` module.

```javascript
var swim = require("@swim/web");
```

### Browser

When loaded by a web browser, the `swim-web.js` script adds all component
library exports to the global `swim` namespace.  The `swim-web.js` script
requires that `swim-core.js`, `swim-ui.js`, and `swim-ux.js` have already
been loaded.

The `swim-toolkit.js` script also adds all **@swim/web** component library
exports to the global `swim` namespace, making it a drop-in replacement
for `swim-ui.js`, `swim-ux.js`, and `swim-web.js` when additional
**@swim/toolkit** frameworks are needed.

## Development

**Note:**
`swim-web-js` can be built against the currently checked out `swim-core-js`,
`swim-ui-js`, and `swim-ux-js` sources by compiling it from the parent
`swim-toolkit-js` directory.

### Setup

Install build dependencies:

```sh
swim-web-js $ npm install
```

### Build script

Use the `bin/build.js` script to build the **Swim Web** framework.
The build script supports `compile`, `test`, `doc`, and `watch` commands,
described below.  All build script commands take an optional `--projects`
(`-p`) option to restrict the build to a comma-separated list of projects.

Each project supports multiple output targets; typical targets for a project
include `main`, to build the main sources, and `test`, to build the test
sources.  A specific target can be built for a project by appending a colon
(`:`) and the target name to the project name.  For example, to build just the
`main` sources of the `util` project, pass `-p util:main` to the build script.

Most build commands take a `--devel` (`-d`) option to expedite development
builds by skipping the minification step.

Run `bin/build.js help` to see a complete list of build commands.  Run
`bin/build.js <command> --help` to see a list of options supported by a
particular build command.

### Compiling sources

Use the `compile` build script command to compile, bundle, and minify
TypeScript sources into JavaScript universal module definitions, output
to the `dist` subdirectory of each project.  To compile all targets,
of all projects, run:

```sh
swim-web-js $ bin/build.js compile
```

To compile a subset of projects and targets, include a `--projects` (`-p`)
option, with a comma-separated list of `$project:($target)?` specifiers.
For example, to build the `main` target of the `webapp` project, and all
targets of the `web` project, run:

```sh
swim-web-js $ bin/build.js compile -p webapp:main,web
```

### Running tests

Use the `test` build script command to compile and run unit tests.
For example, to compile and test the `website` project, run:

```sh
swim-web-js $ bin/build.js test -p website
```

### Continuous development builds

Use the `watch` build script command to automatically rebuild projects when
dependent source files change.  For example, to continuously recompile the
`main` target of the `webapp` project when any source file in the project–or
in one of the project's transitive local dependencies–changes, run:

```sh
swim-web-js $ bin/build.js watch -p webapp:main
```

Pass the `--devel` (`-d`) option to expedite recompilation by skipping the
minification step.  Add the `--test` (`-t`) option to automatically run unit
tests after each successful compilation.  For example, to continuosly compile
and test the `website` project, bypassing minification, and skipping generation
of the main script, run:

```sh
swim-web-js $ bin/build.js watch -p website:test -d -t
```
