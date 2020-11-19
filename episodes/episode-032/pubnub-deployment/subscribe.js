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

import createHub from './pubnub.js';

const { addListener: listen, subscribe } = createHub();

import { CHANNEL_NAME, ACTION_DEPLOY } from './constants.js';

const init = () => {
  listen({
    message(msg) {
      console.log('Message recieved');

      if (!msg) {
        return;
      }

      if (!msg.message.action) {
        return;
      }

      if (msg.message.action !== ACTION_DEPLOY) {
        return;
      }

      console.log('Will trigger deployment');
    }
  });

  subscribe({
    channels: [CHANNEL_NAME]
  });
};

init();
