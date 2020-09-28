import unicorn from '../objects/unicorn';
import scene from '../objects/scene';

let remaining = 2;

let readyPromise = null;
const ready = () => {
  if (readyPromise) {
    return readyPromise;
  }

  readyPromise = new Promise((resolve, reject) => {
    // handle this sometime.
    void reject;

    unicorn.image.onload = () => {
      remaining--;

      if (remaining <= 0) {
        resolve();
      }
    };

    scene.image.onload = () => {
      remaining--;
      if (remaining <= 0) {
        resolve();
      }
    };
  });

  return readyPromise;
};
export default ready;
