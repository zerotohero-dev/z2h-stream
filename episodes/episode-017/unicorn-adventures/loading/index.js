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

import unicorn from '../objects/unicorn';
import scene from '../objects/scene';

import { ASSETS_LOAD_TIMEOUT_MS } from '../config';

let remaining = 2;

let readyPromise = null;
const ready = () => {
  if (readyPromise) {
    return readyPromise;
  }

  readyPromise = new Promise((resolve, reject) => {
    const rejectTimerId = setTimeout(() => {
      reject({ reason: 'Request(s) timed out' });
    }, ASSETS_LOAD_TIMEOUT_MS);

    unicorn.image.onload = () => {
      remaining--;

      if (remaining <= 0) {
        clearTimeout(rejectTimerId);
        resolve();
      }
    };
    unicorn.image.onerror = () => {
      clearTimeout(rejectTimerId);
      reject({ reason: 'Failed to load the unicorn image' });
    };

    scene.image.onload = () => {
      remaining--;
      if (remaining <= 0) {
        clearTimeout(rejectTimerId);
        resolve();
      }
    };
    scene.image.onerror = () => {
      clearTimeout(rejectTimerId);
      reject({ reason: 'Failed to load the scene image' });
    };
  });

  return readyPromise;
};

const isReady = () => {
  return remaining <= 0;
};

export { isReady, ready };
