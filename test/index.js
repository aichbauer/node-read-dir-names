import test from 'ava';
import path from 'path';

import readDirNames from '../lib/index';

test.before(async () => {
  await process.chdir(path.join('test'));
});

test.after.always(async () => {
  await process.chdir(path.join('..'));
});

test('READ FOLDER NAMES | return an array of all folders, of a given path', (t) => {
  const cwd = process.cwd();
  const folderNames = readDirNames(path.join(cwd, 'fixtures'));
  const expectedValue = [
    'dir-1',
    'dir-2',
  ];

  t.deepEqual(folderNames, expectedValue);
});

test('READ FOLDER NAMES | throw an error, no such file or directory', (t) => {
  const cwd = process.cwd();
  t.throws(() => readDirNames(path.join(cwd, 'fixture')));
});

test.serial('READ FOLDER NAMES | return an array of all folders, of process cwd', (t) => {
  const folderNames = readDirNames();
  const expectedValue = [
    'fixtures',
  ];

  t.deepEqual(folderNames, expectedValue);
});
