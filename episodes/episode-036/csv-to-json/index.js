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

const splitAndTrim = (text) => text.split(byComma).map(r => r.trim());
const trimmed = (rows) => rows.map(r => r.trim());
const rows = (mt) => mt.split(byNewLine);
const sanitized = (text) => trimmed(rows(text.trim()));

const body = (text) => sanitized(text).slice(1).map(splitAndTrim)
const titles = (text) => splitAndTrim(sanitized(text)[0]);
const toObject = (cols, obj, title, index) => {
  obj[title] = cols[index];
  return obj;
};

const csvToJson = (csvText) => body(csvText).map(
      (cols) => titles(csvText).reduce(
        (obj, title, index) => toObject(cols, obj, title, index),
        {}
      )
  );

log(csvToJson(csvContent));
