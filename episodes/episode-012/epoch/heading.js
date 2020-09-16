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

import {DELTA, EPOCH_GREETING, EPOCH_TARGET} from "./constants";
import {tagf} from "./dom";

export const displayGreetingInHeading = () => {
  const heading  = tagf('h1');
  heading.innerText = EPOCH_GREETING;
};

export const displayTimeLeftInHeading = (now) => {
  const heading  = tagf('h1');
  const diff = EPOCH_TARGET + DELTA - now;

  heading.innerText = `${diff}`;
};
