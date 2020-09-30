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

import {getCanvas} from "../game";
import {distance, velocity} from "../engine";
import {ACC_GRAVITY} from "../config";

const canvas = getCanvas();

let y0 = canvas.height / 2; // - unicorn.height * 2;
let v0 = 0;
let t0 = 0;
let tt = 0;
let g = ACC_GRAVITY; // pixels per millisecond^2

const gameData = () => ({
  y0, v0, t0, tt, g
});

const setV0 = (value) => {v0 = value;};
const setY0 = (value) => {y0 = value;};
const setT0 = (value) => {t0 = value;};
const setTT = (value) => {tt = value;};
const setG = (value) => {g = value};

const tick = () => {
  const { t0 } = gameData();
  const now = +new Date();
  if (t0 === 0) {setT0(now);}
  setTT(now - (gameData()).t0);
};

const shiftCoordinates = () => {
  const { y0, v0, tt, g } = gameData();
  setY0(y0 + distance(v0, g, tt));
  setV0(velocity(v0, g, tt))
  setT0(0);
  setTT(0);
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

const setGravity = (a1) => { setG(a1); };

export {
  tick,
  setGravity,
  shiftCoordinates,
  getInitialVelocity,
  getInitialTopOffset,
  getAcceleration,
  getTotalTime
};