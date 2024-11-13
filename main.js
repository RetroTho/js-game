import { addKey, removeKey, updateGame } from './keyhandler.js';
import { Grid } from './screen.js';
import { Player } from './player.js';
import { rectangle } from './objects.js';
import { TIME } from './consts.js';

// Create a new grid with 21x21 tiles and draw it
export let grid = new Grid(21, 21);
grid.draw();

// Create rectangle
rectangle(4, 4, 3, 3)

// Create player
export let player = new Player();

// Handle input
window.addEventListener('keydown', function (event) {
    addKey(event.key);
})

window.addEventListener('keyup', function (event) {
    removeKey(event.key);
})

// Game Loop
let timeStart = window.performance.now();
let timePerFrame = 1000 / TIME.FPS;
let frames = 0;

function gameLoop() {
    window.requestAnimationFrame(gameLoop);

    let timeEnd = window.performance.now();
    let timeDiff = timeEnd - timeStart;

    if (timeDiff < timePerFrame) return;

    let timeExcess = timeDiff % timePerFrame;
    timeStart = timeEnd - timeExcess;

    updateGame();

    frames++;
}

setInterval(() => {
    document.getElementById("fps").innerHTML = `${frames} FPS`;
    frames = 0;
  }, 1000)

// Start game loop
gameLoop();