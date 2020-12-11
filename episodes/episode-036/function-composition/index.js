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

const compose = (...fns) => fns.reduce(
  (acc, curr) => ((...args) => acc(curr(...args)))
);

const add42 = x => x + 42;
const square = x => x ** 2;
const multiply = (x, y) => x * y;

const multiplyThenSquareThenAdd42 = compose(
  add42,
  square,
  multiply
);

const result = multiplyThenSquareThenAdd42( 5, 2 );

console.log(result);
