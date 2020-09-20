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

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();

let y0 = 16;

const image = new Image();
const imageWidth = 128;
const imageHeight = 128;
image.src = '/unicorn.png';

const draw = (deltaY) => {
  ctx.fillStyle = '#c0d0e0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    image, (window.innerWidth/2)-(imageWidth/2), y0 + deltaY, imageWidth, imageHeight
  );
};

let v0 = 0;
let t0 = 0;
let tt = 0;
const acceleration = 512 / 1000000; // pixels per millisecond^2

const distance = (t) => {return v0*t + 0.5*acceleration*t*t;}
const velocity = (t) => {return v0 + acceleration*t;}

const loop = () => {
  const now = +(new Date());
  if (t0 === 0) {t0 = now;}

  tt = now - t0;

  draw(distance(tt));
  requestAnimationFrame(loop);
};

image.onload = () => loop();
