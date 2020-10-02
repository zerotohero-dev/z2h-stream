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

import { ready } from './loading';

import { listen, interactive } from './event';
import loop from './loop';

import { paintFirstScene } from './paint';

const run = async () => {
  await ready();
  paintFirstScene();
  await listen();
  await interactive();
  loop();
};

run().then(
  () => {
    console.log('Unicorn Adventures began.');
  },
  () => {
    console.error('We’ve had a problem.');
  }
);
