const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} =  require('./lib/shapes')


inquirer
  .prompt([{
    type: "input",
    name: "text",
    message: "Please enter up to thee letters to include in your logo",
    },
    {
      type: "input",
      name: "textFill",
      message: "What color would you like your text? (color keyword OR a hexadecimal number)"
    },
    {
      type: "input",
      name: "color",
      message:'What color would you like for your logo? (color keyword OR a hexadecimal number)'
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for your logo",
      choices:[
        "square",
        "circle",
        "triangle",
      ],
    }
  ])
  .then(data => {
   
    // we need to know what shape was chosen. then we need to create a new instance of that class. 

    let chosenShape;

    if(data.shape === 'circle'){
      chosenShape = new Circle(data.color, data.text, data.textFill)
    } else if(data.shape === "triangle"){
      chosenShape = new Triangle(data.color, data.text, data.textFill)
    } else{
      chosenShape = new Square(data.color, data.text, data.textFill)
    }

    fs.writeFile("./dist/logo.svg", chosenShape.render(), err => {
      if (err) 
        console.log(err);
      else {
        console.log("Generated logo.svg")
      }  
  })
})

