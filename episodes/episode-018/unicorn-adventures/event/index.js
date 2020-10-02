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

import { interactive, isInteractive } from './interactive';
import { isReady } from '../loading';

import { flap } from '../engine';
import { paintFirstScene, resizeCanvas } from '../paint';

const listen = async () => {
  document.addEventListener('click', () => {
    flap();
  });

  window.addEventListener(
    'resize',
    () => {
      if (isInteractive()) {
        resizeCanvas();
        return;
      }
      paintFirstScene();
    },
    false
  );
};

export { interactive, listen };
