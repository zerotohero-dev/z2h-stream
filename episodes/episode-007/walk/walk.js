/*
 *  \
 *  \\,
 *   \\\,^,.,,.                    “Zero to Hero”
 *   ,;7~((\))`;;,,               <zerotohero.dev>
 *   ,(@') ;)`))\;;',    stay up to date, be curious: learn
 *    )  . ),((  ))\;,
 *   /;`,,/7),)) )) )\,,
 *  (& )`   (,((,((;( ))\,
 */

const {readdir, stat} = require('fs').promises;
const {join} = require('path');

/**
 * Recursively walks `rootPath` and executes `callback(fileName)`
 * whenever the walker sees a file.
 */
const walk = async (rootPath, callback) =>
  (await Promise.all(
    (await readdir(rootPath)).map(async (file) => {
      const filePath = join(rootPath, file);

      const stats = await stat(filePath);
      const isFolder = stats.isDirectory();
      const isFile = stats.isFile();

      if (isFolder) {return walk(filePath, callback);}
      if (isFile) {
        callback(filePath);
        return filePath;
      }

      return "";
    })
  )).reduce((acc, curr) => {
    if (!curr) {return acc;}

    return acc.concat(curr);
  }, []);

module.exports = walk;
