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

import {UNICORN_HEIGHT, UNICORN_WIDTH, URL_IMG_UNICORN} from "../config";

const image = new Image();
image.src = URL_IMG_UNICORN;

const unicorn = {
  width: UNICORN_WIDTH,
  height: UNICORN_HEIGHT,
  image
};

export default unicorn;
