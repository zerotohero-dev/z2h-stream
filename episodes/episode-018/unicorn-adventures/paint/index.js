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
import obstacle from '../objects/obstacle';

import { canvas, ctx } from '../objects/canvas';

import {
  COLOR_BG_DEFAULT,
  GAME_HEIGHT,
  GAME_WIDTH,
  PIPE_SHIFT_PX,
  SCENE_WIDTH,
  UNICORN_OFFSET
} from '../config';
import {
  getInitialTopOffset,
  getInitialVelocity,
  getAcceleration,
  getTotalTime,
  setInitialTopOffset
} from '../model';
import { isInteractive } from '../event/interactive';

const drawBackground = () => {
  const offset = bgShift();
  ctx.drawImage(scene.image, offset, 0, scene.width, scene.height);
  ctx.drawImage(scene.image, SCENE_WIDTH + offset, 0, scene.width, scene.height);
};

let logged = false;

const drawUnicorn = (deltaY) => {
  const y0 = getInitialTopOffset();

  if (!logged) {
    logged = true;
    console.log('drawUnicorn:y0', y0, deltaY);
  }

  ctx.drawImage(unicorn.image, UNICORN_OFFSET, y0 + deltaY, unicorn.width, unicorn.height);
};

const drawUnicornInitial = (deltaY) => {
  const y0 = canvas.height / 2;
  setInitialTopOffset(y0);
  ctx.drawImage(unicorn.image, UNICORN_OFFSET, y0 + deltaY, unicorn.width, unicorn.height);
};

const drawTopPipe = (deltaX) => {
  ctx.drawImage(obstacle.image, canvas.width - deltaX, 0, obstacle.width, obstacle.height);
};

let shift = -PIPE_SHIFT_PX;
const updateShift = () => {
  shift = shift + PIPE_SHIFT_PX;
  shift = shift % (canvas.width + obstacle.width);
};

const fillCanvas = () => {
  ctx.fillStyle = COLOR_BG_DEFAULT;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const drawInternal = (deltaY) => {
  fillCanvas();
  drawBackground();
  drawUnicorn(deltaY);

  if (!isInteractive()) {
    return;
  }

  updateShift();
  drawTopPipe(shift);
};

const drawInternalInitial = () => {
  fillCanvas();
  drawBackground(ctx);
  drawUnicornInitial(0);

  if (!isInteractive()) {
    return;
  }

  updateShift();
  drawTopPipe(shift);
};

const resizeCanvas = () => {
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;

  const windowRatio = window.innerWidth / window.innerHeight;
  const canvasRatio = canvas.width / canvas.height;

  if (windowRatio < canvasRatio) {
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerWidth / canvasRatio + 'px';

    return;
  }

  canvas.style.height = window.innerHeight + 'px';
  canvas.style.width = window.innerHeight * canvasRatio + 'px';
};

const paintFirstScene = () => {
  resizeCanvas();
  drawInternalInitial();
};

const draw = () => {
  drawInternal(distance(getInitialVelocity(), getAcceleration(), getTotalTime()));
};

export { draw, paintFirstScene, resizeCanvas };
