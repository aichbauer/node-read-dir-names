import fs from 'fs';
import path from 'path';

const readDirNames = (dir) => {
  const folders = [];
  const cwd = process.cwd();
  const thisDir = dir || cwd;

  try {
    const listOfFiles = fs.readdirSync(thisDir);

    listOfFiles.forEach((file) => {
      const thisFile = path.join(thisDir, file);
      const stat = fs.statSync(thisFile);

      if (stat && stat.isDirectory()) {
        folders.push(file);
      }
    });

    return folders;
  } catch (e) {
    throw new Error(e);
  }
};

export default readDirNames;
