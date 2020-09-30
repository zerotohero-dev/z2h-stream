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

import interactive from './interactive';

import { flap } from '../engine';
import { resizeCanvas } from '../paint';

const listen = async () => {
  document.addEventListener('click', () => {
    flap();
  });

  window.addEventListener('resize', resizeCanvas, false);
};

export { interactive, listen };
