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

import { OBSTACLE_HEIGHT, OBSTACLE_WIDTH, URL_IMG_OBSTACLE } from '../config';

const img = new Image();
img.src = URL_IMG_OBSTACLE;

const obstacle = {
  image: img,
  height: OBSTACLE_HEIGHT,
  width: OBSTACLE_WIDTH
};

export default obstacle;
