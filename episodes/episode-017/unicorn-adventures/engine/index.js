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

import {ACC_GRAVITY, ACC_PUSH_HIGH, ACC_PUSH_LOW, FLAP_TIMEOUT_MS, SCENE_WIDTH} from '../config';
import {getInitialVelocity, setGravity, shiftCoordinates} from "../model";

const distance = (v0, a, t) => {
  return v0 * t + 0.5 * a * t * t;
};

const velocity = (v0, a, t) => {
  return v0 + a * t;
};

let shift = 0;
let skip = 0;
const bgShift = () => {
  skip++;
  skip = skip % 3;

  if (skip === 0) {
    shift--;
    shift = shift % SCENE_WIDTH;
  }

  return shift;
};

let tid;
const flap = () => {
  shiftCoordinates();

  setGravity(getInitialVelocity() >= 0 ? ACC_PUSH_HIGH : ACC_PUSH_LOW);

  clearTimeout(tid);
  tid = setTimeout(() => {
    shiftCoordinates();
    // engine.resetGravity()
    setGravity(ACC_GRAVITY);
  }, FLAP_TIMEOUT_MS);
};

export {flap, bgShift, distance, velocity};
