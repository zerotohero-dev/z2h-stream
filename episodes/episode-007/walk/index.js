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

const { NOTES_DIR } = require('./constants');

const walk = require('./walk');

const { readFile } = require('fs').promises;

const urlRegex = /(https?:\/\/[^\s]+)/g;

// I will use a simple lightweight database instead
// of storing everything in memory.
// This will be the topic of a follow-up session.
const urlMetaData = {};

const store = ({ url, fileName }) => {
  if (!urlMetaData[url]) {
    if (fileName) {
      urlMetaData[url] = { files: [fileName]};
      return;
    }

    urlMetaData[url] = { files: []};
    return;
  }

  urlMetaData[url].files.push(fileName);
};

const processMarkdownFile = (fileName) =>
  readFile(fileName)
    .then((result) => {
      let matches = urlRegex.exec(`${result}`);
      while (matches) {
        const foundUrl = matches[0];

        store({ url: foundUrl, fileName });

        matches = urlRegex.exec(`${result}`);
      }
    })
    .catch((err) => console.log(err));

const noop = () => {};

const run = () => {
  walk(NOTES_DIR, processMarkdownFile)
    .then(noop)
    .catch(ex => console.log(ex));
};

run();
