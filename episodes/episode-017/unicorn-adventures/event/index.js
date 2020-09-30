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

import { getInitialVelocity, setGravity, shiftCoordinates } from '../model';

import { isReady } from '../loading';
import {ACC_GRAVITY, ACC_PUSH_HIGH, ACC_PUSH_LOW, FLAP_TIMEOUT_MS, INTERACTIVE_CHECK_TIMEOUT_MS} from '../config';

const listen = () =>
  new Promise((resolve, reject) => {
    void reject;

    let tid;
    document.addEventListener('click', () => {
      // belongs to engine too.
      shiftCoordinates();

      // This definitely TMI, tha needs to be refactored.
      // engine.flapWings()
      setGravity(getInitialVelocity() >= 0 ? ACC_PUSH_HIGH : ACC_PUSH_LOW);

      clearTimeout(tid);
      tid = setTimeout(() => {
        shiftCoordinates();
        // engine.resetGravity()
        setGravity(ACC_GRAVITY);
      }, FLAP_TIMEOUT_MS);
    });

    resolve();
  });


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
const interactive = () => {
  if (interactivePromise) {
    return interactivePromise;
  }

  interactivePromise = new Promise((resolve, reject) => {
    void reject;
    interactiveTimerId = setInterval(() => {
      if (!userInteracted) {return;}

      clearInterval(interactiveTimerId);
      resolve();
    }, INTERACTIVE_CHECK_TIMEOUT_MS);
  });

  return interactivePromise;
}

export {
  interactive,
  listen
};
