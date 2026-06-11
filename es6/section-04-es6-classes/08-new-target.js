/**
 * Topic 8: new.target — constructor ခေါ်ပုံ စစ်ဆေးခြင်း
 *
 * new.target:
 *   - constructor function/class constructor ထဲမှာ သုံး
 *   - new နဲ့ ခေါ်ရင် current class/function reference return
 *   - new မပါဘဲ ခေါ်ရင် undefined
 *   - abstract class pattern, custom instance type check အတွက် အသုံးဝင်
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-new-target/
 * Run: node es6/section-04-es6-classes/08-new-target.js
 */

// ============================================================
// 1. new.target in class constructor
// ============================================================
console.log('=== 1. new.target basics ===');

class Person {
  constructor(name) {
    console.log('new.target:', new.target.name);
    this.name = name;
  }
}

class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
}

const person = new Person('Alice');
// new.target: Person

const employee = new Employee('Bob', 'dev');
// new.target: Employee (constructor ထဲမှာ ခေါ်ရင် subclass name ပေါ်)

// ============================================================
// 2. Enforce new — new မပါဘဲ ခေါ်ရင် error
// ============================================================
console.log('\n=== 2. Enforce new keyword ===');

class Database {
  constructor(url) {
    if (new.target === undefined) {
      throw new Error('Database must be called with new');
    }
    this.url = url;
  }
}

const db = new Database('postgres://localhost');
console.log('db.url:', db.url);

// Database('mysql://'); // Error: Database must be called with new

// ============================================================
// 3. Abstract class pattern — direct instantiate မခွင့်
// ============================================================
console.log('\n=== 3. Abstract class pattern ===');

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Shape is abstract — use a subclass');
    }
  }

  area() {
    throw new Error('area() must be implemented');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log('circle area:', circle.area().toFixed(2));

// new Shape(); // Error: Shape is abstract

// ============================================================
// 4. Factory vs constructor — new.target check
// ============================================================
console.log('\n=== 4. Custom construction logic ===');

class Logger {
  constructor(level) {
    this.level = level;
  }

  static create(level) {
    return new Logger(level);
  }

  log(message) {
    console.log(`[${this.level}] ${message}`);
  }
}

const logger = Logger.create('INFO');
logger.log('Application started');

// ============================================================
// 5. new.target in derived class — instanceof chain
// ============================================================
console.log('\n=== 5. Type checking with new.target ===');

class Vehicle {
  constructor() {
    this.type = new.target.name;
  }
}

class Car extends Vehicle {}
class Truck extends Vehicle {}

console.log(new Car().type); // Car
console.log(new Truck().type); // Truck

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// new.target — constructor ထဲမှာ သုံး
// new Class() — new.target === Class (or subclass)
// plain call — new.target === undefined
// abstract class, enforce new, custom meta behavior အတွက် သုံး
