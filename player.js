import { grid } from './main.js';

export class Player{
    constructor(){
        this.playerColor = [255, 255, 255];
        this.playerPos = new Map();
        this.playerSize = 12

        this.generatePlayer();        
        this.updatePlayer();
    }

    generatePlayer() {
        for (let i = 0; i < this.playerSize; i++){
            for (let j = 0; j < this.playerSize; j++) {
                this.playerPos.set(i * this.playerSize + j, [48 + i, 48 + j]);
            }
        }
    }

    updatePlayer(){
        for (let i = 0; i < this.playerPos.size; i++) {
            let x = this.playerPos.get(i)[0];
            let y = this.playerPos.get(i)[1];
            let r = this.playerColor[0];
            let g = this.playerColor[1];
            let b = this.playerColor[2];

            grid.topLayerPixels[y * grid.width + x].value = `rgb(${r}, ${g}, ${b})`;
        }
        grid.draw();
    }

    moveUp() {
        for (let i = 0; i < this.playerPos.size; i++) {
            let currX = this.playerPos.get(i)[0]
            let currY = this.playerPos.get(i)[1]
            if (currY - this.playerSize >= 0 && grid.pixels[(currY - this.playerSize) * grid.width + currX].solid == false) {
                grid.topLayerPixels[currY * grid.width + currX].value = ' ';
                this.playerPos.set(i, [currX, currY - this.playerSize]);
            }
        }
        this.updatePlayer();
    }

    moveDown() {
        for (let i = 0; i < this.playerPos.size; i++) {
            let currX = this.playerPos.get(i)[0]
            let currY = this.playerPos.get(i)[1]
            if (currY + this.playerSize <= grid.height - 1 && grid.pixels[(currY + this.playerSize) * grid.width + currX].solid == false) {
                grid.topLayerPixels[currY * grid.width + currX].value = ' ';
                this.playerPos.set(i, [currX, currY + this.playerSize]);
            }
        }
        this.updatePlayer();
    }

    moveLeft() {
        for (let i = 0; i < this.playerPos.size; i++) {
            let currX = this.playerPos.get(i)[0]
            let currY = this.playerPos.get(i)[1]
            if (currX - this.playerSize >= 0 && grid.pixels[currY * grid.width + (currX - this.playerSize)].solid == false) {
                grid.topLayerPixels[currY * grid.width + currX].value = ' ';
                this.playerPos.set(i, [currX - this.playerSize, currY]);
            }
        }
        this.updatePlayer();
    }

    moveRight() {
        for (let i = 0; i < this.playerPos.size; i++) {
            let currX = this.playerPos.get(i)[0]
            let currY = this.playerPos.get(i)[1]
            if (currX + this.playerSize <= grid.width - 1 && grid.pixels[currY * grid.width + (currX + this.playerSize)].solid == false) {
                grid.topLayerPixels[currY * grid.width + currX].value = ' ';
                this.playerPos.set(i, [currX + this.playerSize, currY]);
            }
        }
        this.updatePlayer();
    }
}