import { grid } from './main.js';

export function rectangle(width, height, x, y) {
    for (let i = x; i < x + width; i++) {
        for (let j = y; j < y + height; j++) {
            grid.setTileColor(i, j, 0, 255, 0, true);
            grid.setTileSolid(i, j, true);
        }
    }
}