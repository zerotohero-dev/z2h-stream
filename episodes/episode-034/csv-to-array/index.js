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

const log = (...args) => console.log(...args);

const csvContent = `
   id, name, age
   0, John, 22
  1, Jill, 35
  2, Jane, 42
  3, Bob, 15
`;

const byComma = /,/;
const byNewLine = /\n/;

const toTrimmed = (s) => s.trim();
const notEmpty = (s) => !!s;
const toTrimmedColumns = (s) => s.split(byComma).map(toTrimmed);
const csvToArray = (csvText) =>
  toTrimmed(csvText)
    .split(byNewLine)
    .map(toTrimmed)
    .filter(notEmpty)
    .map(toTrimmedColumns);

log(csvToArray(csvContent));
