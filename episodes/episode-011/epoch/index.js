{
  // #region Configuration
  const EPOCH_GREETING = 'Hello epoch 16 Trillion 🎊';
  const EPOCH_TARGET = 1600000000000;
  const DELTA = 30500000;
  const AUDIO_RETRY_INTERVAL_MS = 500;
  // #endregion

  // #region DOM Helpers
  const cls = (c) => document.getElementsByClassName(c);
  const tag = (t) => document.getElementsByTagName(t);
  const clsf = (s) => cls(s)[0];
  const tagf = (s) => tag(s)[0];
  const show = (el) => el.style.display = '';
  // #endregion

  const audio = window.Audio ? new Audio('./celebration.mp3') : null;

  const showAnimation = () => {
    const popper = clsf('party-popper');
    const cannon = clsf('cannon');
	show(popper);
	show(cannon);
  };

  const displayGreetingInHeading = () => {
    const heading  = tagf('h1');
    heading.innerText = EPOCH_GREETING;
  };

  let audioRetryTimerId;

  const playAudio = () => {
    if (!audio) {return;}

    audio.play()
      .then(() => {console.log(EPOCH_GREETING);})
      .catch(err => {
        void err;
        clearTimeout(audioRetryTimerId);
        audioRetryTimerId = setTimeout(loop, AUDIO_RETRY_INTERVAL_MS);
      });
  };

  displayTimeLeftInHeading = (now) => {
    const heading  = tagf('h1');
    const diff = EPOCH_TARGET + DELTA - now;

    heading.innerText = `${diff}`;
  };

  // #region Loop
  const loop = () => {
    const now = +(new Date());

    const notTimeYet = now < EPOCH_TARGET + DELTA;
    if (notTimeYet) {
      displayTimeLeftInHeading(now);
      requestAnimationFrame(loop);
      return;
    }

    displayGreetingInHeading();
    showAnimation();
    playAudio();
  };
  loop();
  // #endregion
}
