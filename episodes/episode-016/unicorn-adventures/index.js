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

import ready from './loading';
import listen from './event';
import { loop } from './loop';

/*
ready()
  .then(paintFirstScene)
  .then(listen)
  .then(
    () => interactive().then(loop)
  );
 */

ready().then(listen);

// TODO: is there a race condition?
let userInteractedAlready = false;
document.addEventListener('click', () => {
  if (userInteractedAlready) {
    return;
  }

  userInteractedAlready = true;

  ready().then(loop);
});
