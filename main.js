import { addKey, removeKey, updateGame } from './keyhandler.js';
import { Grid } from './screen.js';
import { Player } from './player.js';

// Create a new grid with 252x252 pixels and draw it
export let grid = new Grid(252, 252, 2);
grid.draw();

// Change the data of a specific pixel
for (let i = 12; i < 48; i++) {
    for (let j = 24; j < 36; j++) {
        grid.changePixelByCoords(i, j, 0, 255, 0, true);
    }
}

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

