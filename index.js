const filesystem = require(`fs`)
const inquirer = require(`inquirer`)
const {Circle, Square, Triangle} = require(`./lib/shapes.js`);

class SVG {
    constructor() {
        this.shapes = [];
    }
    add(shape) {
        this.shapes.push(shape);
    }
    render() {
        let svg = `<svg height="300" width="200">`;
        this.shapes.forEach(shape => {
            svg += shape.render();
        });
        svg += `</svg>`;
        return svg;
    }
}