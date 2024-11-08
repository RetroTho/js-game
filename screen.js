let gridCanvas = document.getElementById('grid-canvas');
let ctx = gridCanvas.getContext('2d');

export class Pixel {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = 'rgb(0, 0, 0)';
        this.solid = false;
    }
}

export class Grid {
    constructor(width, height, pixelSize=10) {
        this.width = width;
        this.height = height;
        this.pixelSize = pixelSize;
        this.pixels = [];
        this.topLayerPixels = [];

        this.generateBottomLayer();
        this.generateTopLayer();
    }

    generateBottomLayer() {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let r = Math.random() * 0;
                let g = Math.random() * 0;
                let b = Math.random() * 0;

                this.pixels.push(new Pixel(x, y));
                this.pixels[y * this.width + x].value = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
            }
        }
    }

    generateTopLayer() {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.topLayerPixels.push(new Pixel(x, y));
                this.topLayerPixels[y * this.width + x].value = ' ';
            }
        }
    }

    changePixelByCoords(x, y, r, g, b, solid=false) {
        if (this.pixels[y * this.width + x]) { 
            let newValue = `rgb(${r}, ${g}, ${b})`;
            this.pixels[y * this.width + x].value = newValue;
            this.pixels[y * this.width + x].solid = solid;

            // Draw the updated color on the screen
            ctx.fillStyle = newValue;
            ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
        } else {
            // Handle the case when pixel is not found
            console.log(`No pixel at coordinates (${x}, ${y}) found`);
        }
    }

    drawBottomLayer() {
        ctx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);

        // Draw bottom layer
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let pixelValue = this.pixels[y * this.width + x].value;

                if (pixelValue.startsWith('rgb')) {
                    let match = pixelValue.match(/(\d+),\s*(\d+),\s*(\d+)/);
                    let r = parseInt(match[1]);
                    let g = parseInt(match[2]);
                    let b = parseInt(match[3]);

                    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                }

                // Draw the pixel at its position on the canvas
                ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
            }
        }
    }

    drawTopLayer() {
        // Draw top layer
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let pixelValue = this.topLayerPixels[y * this.width + x].value;

                if (pixelValue.startsWith('rgb')) {
                    let match = pixelValue.match(/(\d+),\s*(\d+),\s*(\d+)/);
                    let r = parseInt(match[1]);
                    let g = parseInt(match[2]);
                    let b = parseInt(match[3]);

                    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
                }
            }
        }

    }

    draw() {
        this.drawBottomLayer();
        this.drawTopLayer();
    }
}