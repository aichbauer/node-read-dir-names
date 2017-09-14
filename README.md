# read-dir-names

> Returns an array of the names of all directories within another directory

[![Build Status](https://travis-ci.org/aichbauer/node-read-dir-names.svg?branch=master)](https://travis-ci.org/aichbauer/node-read-dir-names)
[![Build status](https://ci.appveyor.com/api/projects/status/jc9yhem5p99of2u2?svg=true)](https://ci.appveyor.com/project/aichbauer/node-read-dir-names)
[![Coverage Status](https://coveralls.io/repos/github/aichbauer/node-read-dir-names/badge.svg?branch=master)](https://coveralls.io/github/aichbauer/node-read-dir-names?branch=master)

## Installation

```sh
$ npm i read-dir-names
```

or

```sh
$ yarn add read-dir-names
```

## Usage

```js
const readDirNames = require('read-dir-names'); // import readDirNames from 'read-dir-names';

readDirNames(); // returns the names of directories within process.cwd()
readDirNames('path/to/dir'); // returns the names of directories within 'path/to/dir'
```

## LICENSE

MIT © Lukas Aichbauer
