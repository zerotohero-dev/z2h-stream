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

const Y = (le) => ((f) => f(f))((f) => le((x) => f(f)(x)));

const fact = (f) => (n) => (n < 2 ? 1 : n * f(n - 1));
const fib = (f) => (n) => (n < 3 ? 1 : f(n - 2) + f(n - 1));

const factorial = Y(fact);
const fibonacci = Y(fib);

console.log(factorial(6)); // Logs `720`.
console.log(fibonacci(6)); // Logs `8`.
