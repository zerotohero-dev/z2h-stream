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

import {AUDIO_RETRY_INTERVAL_MS, AUDIO_URL, EPOCH_GREETING} from "./constants";

// Let us hope this does not create a circular dependency
// race condition or somehting :)
import loop from './loop';

let audioRetryTimerId;
const audio = window.Audio ? new Audio(AUDIO_URL) : null;

export const playAudio = () => {
  if (!audio) {return;}

  audio.play()
    .then(() => {console.log(EPOCH_GREETING);})
    .catch(err => {
      void err;
      clearTimeout(audioRetryTimerId);
      audioRetryTimerId = setTimeout(loop, AUDIO_RETRY_INTERVAL_MS);
    });
};
