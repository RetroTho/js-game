import { KEYS } from './consts.js';
import { player } from './main.js';

var kbKeys = [];

export function addKey(val) {
  kbKeys.push(val);
}

export function removeKey(val) {
  kbKeys.splice(kbKeys.indexOf(val));
}

export function updateGame() {
  if (kbKeys.includes(KEYS.UP_KEY)) {player.moveUp();}
  if (kbKeys.includes(KEYS.DOWN_KEY)) {player.moveDown();}
  if (kbKeys.includes(KEYS.LEFT_KEY)) {player.moveLeft();}
  if (kbKeys.includes(KEYS.RIGHT_KEY)) {player.moveRight();}
}