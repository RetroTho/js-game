import { addKey, removeKey, updateGame } from './keyhandler.js';
import { Grid } from './screen.js';
import { Player } from './player.js';

// Create a new grid with 50x50 pixels and draw it
export let grid = new Grid(100, 100, 5);
grid.draw();

// Change the data of a specific pixel
for (let i = 10; i < 90; i++) {
    for (let j = 10; j < 15; j++) {
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

