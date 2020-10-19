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

let destroyBox = document.querySelector("#destroy-box");
VanillaTilt.init(destroyBox);

document
  .querySelector("#destroy-button")
  .addEventListener("click", function () {
    destroyBox.vanillaTilt.destroy();
  });

document.querySelector("#enable-button").addEventListener("click", function () {
  VanillaTilt.init(destroyBox);
});
