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

// How long in milliseconds to wait for the assets to load
// before bailing out.
export const ASSETS_LOAD_TIMEOUT_MS = 5000;

// Game dimensions
export const GAME_WIDTH = 480;
export const GAME_HEIGHT = 1080;
export const UNICORN_OFFSET = 16;

// How frequently check if the user started interacted with the page.
// This is used only the first time the game loads.
export const INTERACTIVE_CHECK_TIMEOUT_MS = 300;

// Game scene
export const URL_IMG_SCENE = '/background.png';
export const SCENE_WIDTH = 1920;
export const SCENE_HEIGHT = 1080;
export const COLOR_BG_DEFAULT = '#c0d0e0';

// Unicorn
export const URL_IMG_UNICORN = '/unicorn.png';
export const UNICORN_WIDTH = 128;
export const UNICORN_HEIGHT = 140;

// Pipe
export const URL_IMG_OBSTACLE = '/obstacle.png';
export const OBSTACLE_WIDTH = 128;
export const OBSTACLE_HEIGHT = 1080;

// Gravity (pixels / ms^2)
// The larger it is, the faster the unicorn
// will fall down.
export const ACC_GRAVITY = 300 / 1000000;

// When the user clicks multiple times (“rage click”), the flap force will
// increase.
// If the player does not within this amount of time, the amount of
// flap force will reset to its original value.
// The bigger this number is, the longer the effect of a “rage click” will
// sustain.
export const FLAP_TIMEOUT_MS = 200;
// The amount to increment the rage multiplier at every click.
export const RAGE_INCREMENT = 0.2;
// The initial rage multiplier.
export const RAGE_MULTIPLIER_INITIAL = 1;

// How hard the unicorn flaps upwards.
// The the smaller this is, the higher it can move
// in one flap.
// For, e.g., -0.44 will result in a larger flap
// than 0.022.
export const FLAP_SHIFT = -0.22;

// How many frames to skip before moving the background.
export const BG_SHIFT_SKIP = 3;

// How many pixels will the pipes move per frame.
export const PIPE_SHIFT_PX = 4;
