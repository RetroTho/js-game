import { addKey, removeKey, updateGame } from './keyhandler.js';
import { Grid } from './screen.js';
import { Player } from './player.js';
import { rectangle } from './objects.js';

// Create a new grid with 21x21 tiles and draw it
export let grid = new Grid(21, 21);
grid.draw();

// Create rectangle
rectangle(4, 4, 3, 3)

// Create player
export let player = new Player();

// Start game loop
var gLoop = setInterval(updateGame, 120);

// Handle input
window.addEventListener('keydown', function (event) {
    addKey(event.key);
})

window.addEventListener('keyup', function (event) {
    removeKey(event.key);
})