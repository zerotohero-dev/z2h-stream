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

//
// Q:
// “How do I start / stop an async loop after a specific amount of time?”
//

let canWork = false;

const work = () => {
  if (!canWork) {
    return;
  }

  let tmp = '';
  for (let i = 0; i < 1000; i++) {
    tmp += `${Math.random()}`;
  }
};

const loop = () => {
  setImmediate(loop);
  work();
};

loop();

let counter = 1;
setInterval(() => {
  console.log('tick tock ' + (counter++));
  if (!canWork) {
    console.time('work');
  } else {
    console.timeEnd('work');
  }

  canWork = !canWork;
}, 2000);
