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

import {
  BG_SHIFT_SKIP,
  FLAP_SHIFT,
  FLAP_TIMEOUT_MS,
  RAGE_INCREMENT,
  RAGE_MULTIPLIER_INITIAL,
  SCENE_WIDTH
} from '../config';
import { shiftCoordinates } from '../model';

const distance = (v0, a, t) => v0 * t + 0.5 * a * t * t;
const velocity = (v0, a, t) => v0 + a * t;

let shift = 0;
let skip = 0;
const bgShift = () => {
  skip++;
  skip = skip % BG_SHIFT_SKIP;

  if (skip === 0) {
    shift--;
    shift = shift % SCENE_WIDTH;
  }

  return shift;
};

let tid;
let multiplier = RAGE_MULTIPLIER_INITIAL;
const flap = () => {
  shiftCoordinates(FLAP_SHIFT * multiplier);
  multiplier = multiplier + RAGE_INCREMENT;

  clearTimeout(tid);
  tid = setTimeout(() => {
    multiplier = RAGE_MULTIPLIER_INITIAL;
  }, FLAP_TIMEOUT_MS);
};

export { flap, bgShift, distance, velocity };
