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

import { getInitialVelocity, setGravity, shiftCoordinates } from '../loop';

const listen = () =>
  new Promise((resolve, reject) => {
    void reject;

    let tid;
    document.addEventListener('click', () => {
      // belongs to engine too.
      shiftCoordinates();

      // This definitely TMI, tha needs to be refactored.
      // engine.flapWings()
      setGravity(getInitialVelocity() >= 0 ? -(1024 / 1000000) : -(512 / 1000000));

      clearTimeout(tid);
      tid = setTimeout(() => {
        shiftCoordinates();
        // engine.resetGravity()
        setGravity(512 / 1000000);
      }, 512);
    });

    resolve();
  });

export default listen;
