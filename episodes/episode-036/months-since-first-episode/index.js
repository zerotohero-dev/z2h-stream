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

const now = (new Date().getTime());
const then = (new Date('2020-08-20').getTime());
const months = (now - then )/(1000*60*60*24*30);

console.log(
  `It has been more-or-less ${months} months since we first aired ZeroToHero 🦄`
);
