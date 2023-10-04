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
        return() {
        }
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

module.exports = {Shape, Circle, Square, Triangle};