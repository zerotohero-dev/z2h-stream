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

import { isReady } from '../loading';
import { INTERACTIVE_CHECK_TIMEOUT_MS } from '../config';

let userInteracted = false;
document.addEventListener('click', () => {
  if (userInteracted) {
    return;
  }

  if (!isReady()) {
    return;
  }

  userInteracted = true;
});

let interactiveTimerId;
let interactivePromise = null;
let interacted = false;
const interactive = () => {
  if (interactivePromise) {
    return interactivePromise;
  }

  interactivePromise = new Promise((resolve, reject) => {
    void reject;
    interactiveTimerId = setInterval(() => {
      if (!userInteracted) {
        return;
      }

      clearInterval(interactiveTimerId);
      interacted = true;
      resolve();
    }, INTERACTIVE_CHECK_TIMEOUT_MS);
  });

  return interactivePromise;
};

const isInteractive = () => interacted;

export { interactive, isInteractive };
