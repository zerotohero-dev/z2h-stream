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

import { bgShift } from '../engine';
import scene from '../objects/scene';
import unicorn from '../objects/unicorn';

import { UNICORN_OFFSET } from '../config';

const drawBackground = (ctx) => {
  const offset = bgShift();
  ctx.drawImage(scene.image, offset, 0, scene.width, scene.height);
  ctx.drawImage(
    scene.image,
    // this is a magic number.
    // needs to be computed from somewhere.
    1920 + offset,
    0,
    scene.width,
    scene.height
  );
};

const drawUnicorn = (y0, ctx, deltaY) => {
  ctx.drawImage(unicorn.image, UNICORN_OFFSET, y0 + deltaY, unicorn.width, unicorn.height);
};

const draw = (y0, canvas, ctx, deltaY) => {
  ctx.fillStyle = '#c0d0e0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawBackground(ctx);
  drawUnicorn(y0, ctx, deltaY);
};

export { draw };
