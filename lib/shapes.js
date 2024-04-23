class Shape {
    constructor() {
      this.color = "";
    }
    setColor(colorSet) {
      this.color = colorSet;
    }
  }
  class Triangle extends Shape {
    render() {
      return `<polygon points="" fill="${this.color}" />`;
    }
  }
  class Square extends Shape {
    render() {
      return `<rect x="" y="" width="" height="" fill="${this.color}" />`;
    }
  }
  class Circle extends Shape {
    render() {
      return `<circle cx="" cy="" r="" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Square, Circle };