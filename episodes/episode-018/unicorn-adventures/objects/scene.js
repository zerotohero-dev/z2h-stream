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

import { SCENE_HEIGHT, SCENE_WIDTH, URL_IMG_SCENE } from '../config';

const bg = new Image();
bg.src = URL_IMG_SCENE;

const scene = {
  image: bg,
  height: SCENE_HEIGHT,
  width: SCENE_WIDTH
};

export default scene;
