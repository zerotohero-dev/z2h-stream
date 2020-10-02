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

import { bgShift, distance } from '../engine';
import scene from '../objects/scene';
import unicorn from '../objects/unicorn';

import { canvas, ctx } from '../objects/canvas';

import { COLOR_BG_DEFAULT, GAME_HEIGHT, GAME_WIDTH, SCENE_WIDTH, UNICORN_OFFSET } from '../config';
import { getInitialTopOffset, getInitialVelocity, getAcceleration, getTotalTime } from '../model';

const drawBackground = (ctx) => {
  const offset = bgShift();
  ctx.drawImage(scene.image, offset, 0, scene.width, scene.height);
  ctx.drawImage(scene.image, SCENE_WIDTH + offset, 0, scene.width, scene.height);
};

const drawUnicorn = (ctx, deltaY) => {
  const y0 = getInitialTopOffset();

  ctx.drawImage(unicorn.image, UNICORN_OFFSET, y0 + deltaY, unicorn.width, unicorn.height);
};

const drawInternal = (deltaY) => {
  ctx.fillStyle = COLOR_BG_DEFAULT;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawBackground(ctx);
  drawUnicorn(ctx, deltaY);
};

const resizeCanvas = () => {
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;

  const scaleH = window.innerHeight / canvas.height;
  const scaleW = window.innerWidth / canvas.width;

  const widthDoesNotFit = window.innerWidth <= canvas.width * scaleH;

  canvas.style.transform = widthDoesNotFit
    ? `scaleX(${scaleW}) scaleY(${scaleW})`
    : `scaleX(${scaleH}) scaleY(${scaleH})`;
};

const paintFirstScene = () => {
  resizeCanvas();
  drawInternal(0);
};

const draw = () => {
  const v0 = getInitialVelocity();
  const g = getAcceleration();
  const tt = getTotalTime();
  drawInternal(distance(v0, g, tt));
};

export { draw, paintFirstScene, resizeCanvas };
