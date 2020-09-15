// // IIFE: Immediately-Invoking Function Expression
// (function(w) {
//     console.log(w);
// }(window))




{
  const EPOCH_TARGET = 1600000000000;
  const DELTA = 30500000;
  const EPOCH_GREETING = 'Hello epoch 16 Trillion 🎊'

  const audio = window.Audio ? new Audio('./celebration.mp3') : null;

  const showAnimation = () => {
    const popper = document.getElementsByClassName('party-popper')[0];
    const cannon = document.getElementsByClassName('cannon')[0];
    popper.style.display = "";
    cannon.style.display = "";
  };

  const displayGreetingInHeading = () => {
    const heading  = document.getElementsByTagName('h1')[0]
    heading.innerText = EPOCH_GREETING;
  };

  const playAudio = () => {
    if (!audio) {return;}
    audio.play()
      .then(() => {console.log(EPOCH_GREETING)})
      .catch(err => {
        void err;
        setTimeout(loop, 500);
      });
  };

  displayTimeLeftInHeading = (now) => {
    const heading  = document.getElementsByTagName('h1')[0];
    const diff = EPOCH_TARGET + DELTA - now;
    heading.innerText = (diff);
  };

  const loop = () => {
    const now = +(new Date());
    const notTimeYet = now < EPOCH_TARGET + DELTA;

    if (notTimeYet) {
      displayTimeLeftInHeading(now);
      requestAnimationFrame(loop);
      return;
    }

    showAnimation();
    displayGreetingInHeading();
    playAudio();
  };

  loop();
}
