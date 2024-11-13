import { PLAYER } from './consts.js';
import { grid } from './main.js';

export class Player{
    constructor(){
        this.playerColor = [255, 255, 255];
        this.playerSize = PLAYER.SIZE;
        this.playerPos = PLAYER.SPAWN_POS;

        this.createPlayer();
    }

    createPlayer() {
        grid.setTileVisible(this.playerPos[0], this.playerPos[1], true, true);
        grid.setTileColor(this.playerPos[0], this.playerPos[1], this.playerColor[0], this.playerColor[1], this.playerColor[2], true);
    }

    moveUp() {
        if (this.playerPos[1] - 1 >= 0 && grid.tilesBottom[(this.playerPos[0])][this.playerPos[1] - 1].solid == false) {
            grid.setTileVisible(this.playerPos[0], this.playerPos[1], false, true);
            grid.setTileColor(this.playerPos[0], this.playerPos[1], 0, 0, 0, true);
            grid.setTileVisible(this.playerPos[0], this.playerPos[1] - 1, true, true);
            grid.setTileColor(this.playerPos[0], this.playerPos[1] - 1, this.playerColor[0], this.playerColor[1], this.playerColor[2], true);
            this.playerPos[1]--;
        }
        grid.draw();
    }

    moveDown() {
        if (this.playerPos[1] + 1 < grid.height && grid.tilesBottom[(this.playerPos[0])][this.playerPos[1] + 1].solid == false) {
            grid.setTileVisible(this.playerPos[0], this.playerPos[1], false, true);
            grid.setTileColor(this.playerPos[0], this.playerPos[1], 0, 0, 0, true);
            grid.setTileVisible(this.playerPos[0], this.playerPos[1] + 1, true, true);
            grid.setTileColor(this.playerPos[0], this.playerPos[1] + 1, this.playerColor[0], this.playerColor[1], this.playerColor[2], true);
            this.playerPos[1]++;
        }
        grid.draw();
    }

    moveLeft() {
        if (this.playerPos[0] - 1 >= 0 && grid.tilesBottom[(this.playerPos[0] - 1)][this.playerPos[1]].solid == false) {
            grid.setTileVisible(this.playerPos[0], this.playerPos[1], false, true);
            grid.setTileColor(this.playerPos[0], this.playerPos[1], 0, 0, 0, true);
            grid.setTileVisible(this.playerPos[0] - 1, this.playerPos[1], true, true);
            grid.setTileColor(this.playerPos[0] - 1, this.playerPos[1], this.playerColor[0], this.playerColor[1], this.playerColor[2], true);
            this.playerPos[0]--;
        }
        grid.draw();
    }

    moveRight() {
        if (this.playerPos[0] + 1 < grid.width && grid.tilesBottom[(this.playerPos[0] + 1)][this.playerPos[1]].solid == false) {
            grid.setTileVisible(this.playerPos[0], this.playerPos[1], false, true);
            grid.setTileColor(this.playerPos[0], this.playerPos[1], 0, 0, 0, true);
            grid.setTileVisible(this.playerPos[0] + 1, this.playerPos[1], true, true);
            grid.setTileColor(this.playerPos[0] + 1, this.playerPos[1], this.playerColor[0], this.playerColor[1], this.playerColor[2], true);
            this.playerPos[0]++;
        }
        grid.draw();
    }
}