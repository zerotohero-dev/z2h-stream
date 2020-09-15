
// raf polyfill.
// adapted from: https://gist.github.com/paulirish/1579671
{
  let lastTime = 0;

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback, element) => {
      const currTime = new Date().getTime();
      const timeToCall = Math.max(0, 16 - (currTime - lastTime));
      const id = window.setTimeout(() => callback(currTime + timeToCall), timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (id) => clearTimeout(id);
  }
}