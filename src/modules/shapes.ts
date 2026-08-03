export class Circle {
  constructor(public radius: number) {}
}

export class Square {
  constructor(public width: number) {}
}

export { Circle, Square }; // Exporting the classes using ES module syntax for compatibility with modern JavaScript module system.

module.exports = { Circle, Square }; // Exporting the classes using CommonJS syntax for compatibility with Node.js module system.
