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

import PubNub from 'pubnub';

const createHub = () => {
  return new PubNub({
    publishKey: process.env.PUBNUB_PUBLISH_KEY,
    subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY
  });
};

export default createHub;
