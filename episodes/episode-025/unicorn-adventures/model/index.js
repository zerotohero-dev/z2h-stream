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

import { distance } from '../engine';
import { ACC_GRAVITY } from '../config';
import { canvas } from '../objects/canvas';

let y0 = canvas.height / 2; // pixels

console.log('canvas', canvas.height, canvas.width);

let v0 = 0; // pixels / millisecond
let t0 = 0; // millisecond
let tt = 0; // millisecond
let g = ACC_GRAVITY; // pixels per millisecond^2

const resetGameData = () => {
  v0 = 0;
  t0 = 0;
  tt = 0;
  y0 = canvas.height / 2;
};

const gameData = () => {
  return {
    y0,
    v0,
    t0,
    tt,
    g
  };
};

const tick = () => {
  const now = +new Date();
  if (t0 === 0) {
    t0 = now;
  }
  tt = now - gameData().t0;
};

const shiftCoordinates = (velocity) => {
  y0 = y0 + distance(v0, g, tt);
  v0 = velocity;
  t0 = 0;
  tt = 0;
};

const getInitialVelocity = () => {
  const { v0 } = gameData();
  return v0;
};

const getAcceleration = () => {
  const { g } = gameData();
  return g;
};

const getTotalTime = () => {
  const { tt } = gameData();
  return tt;
};

const getInitialTopOffset = () => {
  const { y0 } = gameData();
  return y0;
};

const setInitialTopOffset = (v) => {
  y0 = v;
};

const setGravity = (newG) => {
  g = newG;
};

const getGravity = () => g;

export {
  tick,
  setGravity,
  getGravity,
  setInitialTopOffset,
  shiftCoordinates,
  getInitialVelocity,
  getInitialTopOffset,
  getAcceleration,
  getTotalTime,
  resetGameData
};
