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

import {bgShift, distance} from '../engine';
import scene from '../objects/scene';
import unicorn from '../objects/unicorn';

import {COLOR_BG_DEFAULT, SCENE_WIDTH, UNICORN_OFFSET} from '../config';
import {getInitialTopOffset, getInitialVelocity, getAcceleration, getTotalTime} from "../model";

import { init } from '../game';

const drawBackground = (ctx) => {
  const offset = bgShift();
  ctx.drawImage(scene.image, offset, 0, scene.width, scene.height);
  ctx.drawImage(
    scene.image,
    // this is a magic number.
    // needs to be computed from somewhere.
    SCENE_WIDTH + offset,
    0,
    scene.width,
    scene.height
  );
};

const drawUnicorn = (ctx, deltaY) => {
  const y0 = getInitialTopOffset();

  ctx.drawImage(unicorn.image, UNICORN_OFFSET, y0 + deltaY, unicorn.width, unicorn.height);
};

const drawInternal = (deltaY) => {
  const { canvas, ctx } = init();

  ctx.fillStyle = COLOR_BG_DEFAULT;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawBackground(ctx);
  drawUnicorn(ctx, deltaY);
};

const paintFirstScene = () => {
  drawInternal(0);
  return Promise.resolve(true);
}

const draw = () => {
  const v0 = getInitialVelocity();
  const g = getAcceleration();
  const tt = getTotalTime();
  drawInternal(distance(v0, g, tt));
};

export { draw, paintFirstScene };
