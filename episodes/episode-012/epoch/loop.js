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

import {DELTA, EPOCH_TARGET} from "./constants";
import {displayGreetingInHeading, displayTimeLeftInHeading} from "./heading";
import {showAnimation} from "./animation";
import {playAudio} from "./audio";

const loop = () => {
  const now = +(new Date());

  const notTimeYet = now < EPOCH_TARGET + DELTA;
  if (notTimeYet) {
    displayTimeLeftInHeading(now);
    requestAnimationFrame(loop);
    return;
  }

  displayGreetingInHeading();
  showAnimation();
  playAudio();
};

export default loop;
