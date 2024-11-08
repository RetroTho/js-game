import { player } from './main.js';

const UP_KEY = 'w'
const DOWN_KEY = 's'
const LEFT_KEY = 'a'
const RIGHT_KEY = 'd'

var kbKeys = [];

export function addKey(val) {
  kbKeys.push(val);
}

export function removeKey(val) {
  kbKeys.splice(kbKeys.indexOf(val));
}

export function updateGame() {
  if (kbKeys.includes(UP_KEY)) {player.moveUp();}
  if (kbKeys.includes(DOWN_KEY)) {player.moveDown();}
  if (kbKeys.includes(LEFT_KEY)) {player.moveLeft();}
  if (kbKeys.includes(RIGHT_KEY)) {player.moveRight();}
}