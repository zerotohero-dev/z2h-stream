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

import {GAME_WIDTH, GAME_HEIGHT} from "../config";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const resizeCanvas = () => {
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;

  const scaleH = window.innerHeight / canvas.height;
  const scaleW = window.innerWidth / canvas.width;

  const widthDoesNotFit = window.innerWidth <= canvas.width * scaleH;

  canvas.style.transform = widthDoesNotFit ?
    `scaleX(${scaleW}) scaleY(${scaleW})` :
    `scaleX(${scaleH}) scaleY(${scaleH})`;
};
resizeCanvas();

const getCanvas = () => canvas;

const init = () => {
  resizeCanvas();

  // TODO: does this need to go to the /event module too?
  window.addEventListener('resize', resizeCanvas, false);
  return {canvas, ctx};
};

export {
  getCanvas,
  init
};
