const inquirer = require("inquirer");

const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes");

function getFile(fileName, feedback) {
  
  let svgString = "";
  
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  
  svgString += "<g>";

  svgString += `${feedback.shape}`;

  let shapeOption;
  if (feedback.shape === "Triangle") {
    shapeOption = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${feedback.shapeBg}"/>`;
  } else if (feedback.shape === "Square") {
    shapeOption = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${feedback.shapeBg}"/>`;
  } else {
    shapeOption = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${feedback.shapeBg}"/>`;
  }

  
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${feedback.textColor}">${feedback.text}</text>`;
  
  svgString += "</g>";
  
  svgString += "</svg>";

  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}


function getPrompt() {
  inquirer
    .prompt([
    
      {
        type: "input",
        message:
          "Enter your Logo!",
        name: "text",
      },
    
      {
        type: "input",
        message:
          "Choose text color!",
        name: "textColor",
      },
    
      {
        type: "list",
        message: "Choose a Shape!",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      
      {
        type: "input",
        message:
          "Choose a color!",
        name: "shapeBg",
      },
    ])
    .then((feedback) => {
      
      if (feedback.text.length > 3) {
        console.log("Need at least 3 characters!");
        getPrompt();
      } else {
        
        getFile("logo.svg", feedback);
      }
    });
}


getPrompt();