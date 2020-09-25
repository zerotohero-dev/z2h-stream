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
  canvas.width = 480;
  canvas.height = 1080;

  const ratio = window.innerHeight / canvas.height;

  if (window.innerWidth <= canvas.width * ratio) {
    const newRatio = window.innerWidht / canvas.width;
    canvas.style.transform = `scaleX(${newRatio}) scaleY(${newRatio})`;
  } else {
    canvas.style.transform = `scaleX(${ratio}) scaleY(${ratio})`;
  }
};
resizeCanvas();

const init = () => {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, false);
  return {canvas, ctx};
};

export {
  init
};

// First I want to initialize this canvas objet
// and export the ctx as a result of our initialization.