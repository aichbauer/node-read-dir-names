# read-dir-names

> Returns an array of the names of all directories within another directory

## Installation

```sh
$ npm i read-folder-names
```

or

```sh
$ yarn add read-folder-names
```

## Usage

```js
const readDirNames = require('read-dir-names'); // import readDirNames from 'read-dir-names';

readDirNames(); // returns the names of directories within process.cwd()
readDirNames('path/to/dir'); // returns the names of directories within 'path/to/dir'
```

## LICENSE

MIT © Lukas Aichbauer
