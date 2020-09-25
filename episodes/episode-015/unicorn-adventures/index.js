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

console.log('hello unicorns');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const resizeCanvas = () => {
  canvas.width = 480; // window.innerWidth;
  canvas.height = 1080; // window.innerHeight;

  const ratio = window.innerHeight / canvas.height;

  if (window.innerWidth <= canvas.width * ratio) {
    const newRatio = window.innerWidht / canvas.width;
    canvas.style.transform = `scaleX(${newRatio}) scaleY(${newRatio})`;
  } else {
    canvas.style.transform = `scaleX(${ratio}) scaleY(${ratio})`;
  }
};
window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();

const image = new Image();
const imageWidth = 128;
const imageHeight = 128;
image.src = '/unicorn.png';

const bg = new Image();
bg.src = '/background.png';
const bgWidth = 1920;
const bgHeight = 1080;

let y0 = (canvas.height/2) - (imageHeight*2);
// (window.innerHeight/2) - (imageHeight/2);

const unicornOffset = 16;

let counter = 0;
let skip = 0;

// TODO: modularize this code.
const draw = (deltaY) => {
  ctx.fillStyle = '#c0d0e0';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  skip++;

  skip = skip % 3;

  if (skip === 0) {
    counter--;
    counter = counter % 1920;
  }

  ctx.drawImage(
    bg,
    counter, 0,
    bgWidth, bgHeight
  );
  ctx.drawImage(
    bg,
    1920 + counter, 0,
    bgWidth, bgHeight
  );

  ctx.drawImage(
    image,
    unicornOffset, y0 + deltaY,
    imageWidth, imageHeight
  );

};

let v0 = 0;
let t0 = 0;
let tt = 0;
let acceleration = 512 / 1000000; // pixels per millisecond^2

const distance = (t) => {return v0*t + 0.5*acceleration*t*t;}
const velocity = (t) => {return v0 + acceleration*t;}

let tid;
document.addEventListener('click', () => {
  y0 = y0 + distance(tt);
  v0 = velocity(tt);
  t0 = 0;
  tt = 0;

  acceleration = v0 >= 0 ?
    -(1024 / 1000000) :
    -(512 / 1000000);

  clearTimeout(tid);
  tid = setTimeout(() => {
    y0 = y0 + distance(tt);
    v0 = velocity(tt);
    t0 = 0;
    tt = 0;
    acceleration = (512 / 1000000);
  }, 512);
});

const loop = () => {
  const now = +(new Date());
  if (t0 === 0) {t0 = now;}

  tt = now - t0;

  draw(distance(tt));
  requestAnimationFrame(loop);
};

let remaining = 2;

image.onload = () => {
  remaining--;
  console.log('loaded image', remaining);
  if (remaining <= 0) {loop();}
};

bg.onload = () => {
  remaining--;
  console.log('loaded bg image', remaining);
  if (remaining <= 0) {loop();}
};
























