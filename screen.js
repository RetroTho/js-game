import { SCREEN } from './consts.js';

let gridCanvas = document.getElementById('grid-canvas');
let ctx = gridCanvas.getContext('2d');

export class Pixel {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = [0, 0, 0];
    }

    setColor(r, g, b) {
        this.color = [r, g, b];
    }
}

class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = SCREEN.TILE_SIZE;
        this.solid = false;
        this.pixels = [];

        this.fillTile();
    }

    fillTile() {
        for (let i = 0; i < this.size; i++) {
            this.pixels.push([]);
            for (let j = 0; j < this.size; j++) {
                this.pixels[i].push(new Pixel(i, j));
            }
        }
    }

    setColor(r, g, b) {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                this.pixels[i][j].setColor(r, g, b);
            }
        }
    }

    setSolid(solid) {
        this.solid = solid;
    }
}

export class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.pixelSize = SCREEN.PIXEL_SIZE;
        this.tileSize = SCREEN.TILE_SIZE;
        this.tilesBottom = [];
        this.tilesTop = [];

        ctx.canvas.width = this.width * this.tileSize * this.pixelSize;
        ctx.canvas.height = this.height * this.tileSize * this.pixelSize;

        this.generateBottomLayer();
        this.generateTopLayer();
    }

    generateBottomLayer() {
        for (let i = 0; i < this.width; i++) {
            this.tilesBottom.push([]);
            for (let j = 0; j < this.height; j++) {
                this.tilesBottom[i].push(new Tile(i, j));
            }
        }
    }

    generateTopLayer() {
        for (let i = 0; i < this.width; i++) {
            this.tilesTop.push([]);
            for (let j = 0; j < this.height; j++) {
                this.tilesTop[i].push(new Tile(i, j));
            }
        }
    }


    setTileColor(x, y, r, g, b, top=false) {
        let tile = this.getTile(x, y, top);
        tile.setColor(r, g, b);

        this.draw();
    }

    setTileSolid(x, y, solid, top=false) {
        let tile = this.getTile(x, y, top);
        tile.setSolid(solid);
    }

    getTile(x, y, top=false) {
        if (top) {
            return this.tilesTop[x][y];
        } else {
            return this.tilesBottom[x][y];
        }
    }

    clearScreen() {
        ctx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);
    }

    drawTile(x, y, r, g, b) {
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

        // Draw the pixel at its position on the canvas
        ctx.fillRect(x * this.pixelSize * this.tileSize, y * this.pixelSize * this.tileSize, this.pixelSize * this.tileSize, this.pixelSize * this.tileSize);
    }

    drawBottomLayer() {
        this.clearScreen();

        // Draw bottom layer
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                let tile = this.tilesBottom[i][j];
                let color = tile.pixels[0][0].color;
                let r = color[0];
                let g = color[1];
                let b = color[2];

                this.drawTile(i, j, r, g, b);
            }
        }
    }

    drawTopLayer() {
        this.clearScreen();

        // Draw top layer
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                let tile = this.tilesTop[i][j];
                let color = tile.pixels[0][0].color;
                let r = color[0];
                let g = color[1];
                let b = color[2];

                this.drawTile(i, j, r, g, b);
            }
        }
    }

    draw() {
        this.drawBottomLayer();
        this.drawTopLayer();
    }
}