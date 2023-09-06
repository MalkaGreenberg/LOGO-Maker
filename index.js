// importing the inquirer
const inquirer = require('inquirer');

// importing file system 
const fs = require('fs');

// importing shapes classes
const {Circle,Triangle, Square} = require('./library/shapes');

function promptUser(){
    // prompting the user for imput
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'Please choose a shape for your logo:',
                choices: ['Circle','Triangle','Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'what color would you like the SHAPE to be? (enter a color keyword OR a hexadecimal number) ',
            },
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text for your logo (you can use up to 3 characters) ',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'what color would you like the TEXT to be? (enter a color keyword OR a hexadecimal number) ',
            },
        ]).then((answers) => {
            // calling function that will create the svg file
            writeSvgFile(answers);
        });
}

function writeSvgFile(answers){
    // creates the shape according to which one the user chose
    var shape;
    if(answers.shape == 'Circle'){
         shape = new Circle();
    }else if(answers.shape == 'Triangle'){
         shape = new Triangle();
    }else{
         shape = new Square();
    }
    // sets the shape's color to the color that the user chose
    shape.setColor(answers.shapeColor);
    // a string of code to put into the svg file 
    var svgCode = `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height="200" width="300">
    ${shape.render()}
    <text x="150" y="125" font-size="55" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
    `;
    // to create the logo.svg file
    fs.writeFile('logo.svg', svgCode, (err) =>
       err ? console.log(err) : console.log('Generated logo.svg')
    );
}


// function to initialize the application
promptUser();