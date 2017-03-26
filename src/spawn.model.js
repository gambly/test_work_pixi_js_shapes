
class SpawnModel {
    constructor () {
        this.shapes = [];
        
        this.gravity = 1;
        this.area = 0;
        this.shapeSpeed = 1;
    }
    
    addShape (shape) {
        this.shapes.push(shape);
    }

    destroyShape (shape) {
        this.shapes.splice(this.shapes.indexOf(shape), 1)
    }
}

exports = SpawnModel