
class Player {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

class Map {
    constructor(size) {
        this.size = size;
        this.wallGrid = new Uint8Array(size * size);
    }
}

