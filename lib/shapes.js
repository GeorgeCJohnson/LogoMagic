class Shape {
    constructor() {
        this.color="";
    }
    setColor(color) {
        this.color = color;
    }
};

class Circle extends Shape {
    render() {
        super();
        this.radius = 0;
    }
    setRadius(radius) {
        this.radius = radius;
    }
}

class Square extends Shape {
    render() {
        super();
        this.side = 0;
    }
    setSide(side) {
        this.side = side;
    }
}

class Triangle extends Shape {
    render() {
        super();
        this.side = 0;
    }
    setSide(side) {
        this.side = side;
    }
}

module.exports = {Circle, Square, Triangle};