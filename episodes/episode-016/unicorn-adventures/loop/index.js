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

import { draw } from '../paint';
import unicorn from '../objects/unicorn';
import { init } from '../game';
import { distance, velocity } from '../engine';

const { canvas, ctx } = init();

let y0 = canvas.height / 2 - unicorn.height * 2;
let v0 = 0;
let t0 = 0;
let tt = 0;
let g = 512 / 1000000; // pixels per millisecond^2

// I don't like exposing this. need to find some other way.
const shiftCoordinates = () => {
  y0 = y0 + distance(v0, g, tt);
  v0 = velocity(v0, g, tt);
  t0 = 0;
  tt = 0;
};

const setGravity = (a1) => {
  g = a1;
};

const getInitialVelocity = () => {
  return v0;
};

const loop = () => {
  const now = +new Date();
  if (t0 === 0) {
    t0 = now;
  }

  tt = now - t0;

  draw(y0, canvas, ctx, distance(v0, g, tt));
  requestAnimationFrame(loop);
};

export { loop, setGravity, getInitialVelocity, shiftCoordinates };
