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

const distance = (v0, a, t) => {return v0*t + 0.5*a*t*t;}
const velocity = (v0, a, t) => {return v0 + a*t;}

let shift = 0;
let skip = 0;
const bgShift = () => {
  skip++;
  skip = skip % 3;

  if (skip === 0) {
    shift--;
    shift = shift % 1920;
  }

  return shift;
};


export {bgShift, distance, velocity};