// the shape class 
class Shape {
    constructor(){
        this.color = "";
    }
    setColor(chosenColor) {
        return this.color = chosenColor;
    }
}
// circle class 
class Circle extends Shape{
    render(){
          return `<circle cx="150" cy="110" r="80" fill="${this.color}" /> `;
    }
}
// triangle class
class Triangle extends Shape{
    render(){
        return `<polygon y="20" points=" 150, 20 250, 175 50, 175" fill="${this.color}" />`;
    }
}
// sqare class
class Square extends Shape{
    render(){
        return `<rect x='50' y="20" width="200" height="200" fill="${this.color}" />`;
    }
}