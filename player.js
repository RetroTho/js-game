import { grid } from './main.js';

export class Player{
    constructor(){
        this.playerColor = [255, 255, 255];
        this.playerPos = new Map();

        this.generatePlayer();        
        this.updatePlayer();
    }

    generatePlayer() {
        for (let i = 0; i < 5; i++){
            for (let j = 0; j < 5; j++) {
                this.playerPos.set(i * 5 + j, [30 + i, 30 + j]);
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
            if (currY - 5 >= 0 && grid.pixels[(currY - 5) * grid.width + currX].solid == false) {
                grid.topLayerPixels[currY * grid.width + currX].value = ' ';
                this.playerPos.set(i, [currX, currY - 5]);
            }
        }
        this.updatePlayer();
    }

    moveDown() {
        for (let i = 0; i < this.playerPos.size; i++) {
            let currX = this.playerPos.get(i)[0]
            let currY = this.playerPos.get(i)[1]
            if (currY + 5 <= grid.height - 1 && grid.pixels[(currY + 5) * grid.width + currX].solid == false) {
                grid.topLayerPixels[currY * grid.width + currX].value = ' ';
                this.playerPos.set(i, [currX, currY + 5]);
            }
        }
        this.updatePlayer();
    }

    moveLeft() {
        for (let i = 0; i < this.playerPos.size; i++) {
            let currX = this.playerPos.get(i)[0]
            let currY = this.playerPos.get(i)[1]
            if (currX - 5 >= 0 && grid.pixels[currY * grid.width + (currX - 5)].solid == false) {
                grid.topLayerPixels[currY * grid.width + currX].value = ' ';
                this.playerPos.set(i, [currX - 5, currY]);
            }
        }
        this.updatePlayer();
    }

    moveRight() {
        for (let i = 0; i < this.playerPos.size; i++) {
            let currX = this.playerPos.get(i)[0]
            let currY = this.playerPos.get(i)[1]
            if (currX + 5 <= grid.width - 1 && grid.pixels[currY * grid.width + (currX + 5)].solid == false) {
                grid.topLayerPixels[currY * grid.width + currX].value = ' ';
                this.playerPos.set(i, [currX + 5, currY]);
            }
        }
        this.updatePlayer();
    }
}