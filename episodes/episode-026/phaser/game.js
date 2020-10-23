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

{
  const gameConfig = {
    width: 480,
    height: 640,
    backgroundColor: 0x770000,
  };

  const resizeCanvas = () => {
    const canvas = document.querySelector("canvas");

    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const wr = ww / wh;
    const gr = game.config.width / game.config.height;

    const wide = wr < gr;

    canvas.style.width = wide ? `${ww}px` : `${wh * gr}px`;
    canvas.style.height = wide ? `${ww / gr}px` : `${wh}px`;
  };

  const game = new Phaser.Game(gameConfig);

  game.events.on("ready", () => {
    resizeCanvas();

    window.addEventListener(
      "resize",
      () => {
        resizeCanvas();
      },
      false
    );
  });
}
