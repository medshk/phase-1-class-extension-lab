class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }

  get isValid() {
    const [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {
  constructor(sides) {
    super(sides);
  }

  get isValid() {
    return this.sides.every((side) => side === this.sides[0]);
  }

  get area() {
    const side = this.sides[0];
    return side * side;
  }
}

class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }

  get isValid() {
    const [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {
  constructor(sides) {
    super(sides);
  }

  get isValid() {
    return this.sides.every((side) => side === this.sides[0]);
  }

  get area() {
    const side = this.sides[0];
    return side * side;
  }
}
