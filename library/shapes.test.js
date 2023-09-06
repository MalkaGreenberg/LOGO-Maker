// for testing the shapes
const {Circle, Triangle, Square} = require('./shapes.js');

// a testing suite for shapes is created.
describe('Shapes', () =>{
    // test to check that the Circle is being rendered properly.
    describe('circle', () => {
        it('should set the color of the circle to the given shape color', () => {
            const shape = new Circle();
            shape.setColor("pink");
            expect(shape.render()).toEqual('<circle cx="150" cy="110" r="80" fill="pink" />');
        });
    });
    // test to check that the Triangle is being rendered properly.
    describe('triangle', () => {
        it('should set the color of the triangle to the given shape color', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon y="20" points=" 150, 20 250, 175 50, 175" fill="blue" />');
        });
    });
    // test to check that the Square is being rendered properly.
    describe('square', () => {
        it('should set the color of the square to the given shape color', () => {
            const shape = new Square();
            shape.setColor("orange");
            expect(shape.render()).toEqual('<rect x="50" y="20" width="200" height="200" fill="orange" />');
        });
    });
});