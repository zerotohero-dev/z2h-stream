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

import { init } from './game';

import unicorn from './objects/unicorn';
import scene from './objects/scene';

import { distance, velocity, bgShift } from "./engine";

console.log('begin index');

const {canvas, ctx} = init();

let y0 = (canvas.height/2) - (unicorn.height*2);

const unicornOffset = 16;

// TODO: modularize this code.
const draw = (deltaY) => {
  ctx.fillStyle = '#c0d0e0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const offset = bgShift();

  console.log('offset', offset);

  ctx.drawImage(
    scene.image,
    offset, 0,
    scene.width, scene.height
  );
  ctx.drawImage(
    scene.image,
    // this is a magic number.
    // needs to be computed from somewhere.
    1920 + offset, 0,
    scene.width, scene.height
  );

  ctx.drawImage(
    unicorn.image,
    unicornOffset, y0 + deltaY,
    unicorn.width, unicorn.height
  );
};

let v0 = 0;
let t0 = 0;
let tt = 0;
let acceleration = 512 / 1000000; // pixels per millisecond^2

const shiftCoordinates = () => {
  y0 = y0 + distance(v0, acceleration, tt);
  v0 = velocity(v0, acceleration, tt);
  t0 = 0;
  tt = 0;
};

let tid;
document.addEventListener('click', () => {
  shiftCoordinates();

  acceleration = v0 >= 0 ?
    -(1024 / 1000000) :
    -(512 / 1000000);

  clearTimeout(tid);
  tid = setTimeout(() => {
    shiftCoordinates();
    acceleration = (512 / 1000000);
  }, 512);
});

const loop = () => {
  const now = +(new Date());
  if (t0 === 0) {t0 = now;}

  tt = now - t0;

  draw(distance(v0, acceleration, tt));
  requestAnimationFrame(loop);
};

let remaining = 2;

unicorn.image.onload = () => {
  remaining--;
  console.log('loaded image', remaining);
  if (remaining <= 0) {loop();}
};

scene.image.onload = () => {
  remaining--;
  console.log('loaded bg image', remaining);
  if (remaining <= 0) {loop();}
};

console.log('end index');






















