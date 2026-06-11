/**
 * Topic 3: Class Expression — class ကို expression အဖြစ် define
 *
 * Class Expression:
 *   - class declaration မဟုတ်ဘဲ variable ထဲ assign
 *   - anonymous (နာမည်မပေး) or named class expression
 *   - function expression လို conditional create လုပ်လို့ရ
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-class-expression/
 * Run: node es6/section-04-es6-classes/03-class-expression.js
 */

// ============================================================
// 1. Anonymous class expression
// ============================================================
console.log('=== 1. Anonymous class expression ===');

const Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
};

const rect = new Rectangle(4, 5);
console.log('area:', rect.area()); // 20

// ============================================================
// 2. Named class expression — debugging အတွက် အသုံးဝင်
// ============================================================
console.log('\n=== 2. Named class expression ===');

const Square = class SquareShape {
  constructor(side) {
    this.side = side;
  }

  area() {
    return this.side ** 2;
  }
};

const sq = new Square(6);
console.log('square area:', sq.area()); // 36
console.log(sq.constructor.name); // SquareShape

// ============================================================
// 3. Class expression in function — factory pattern
// ============================================================
console.log('\n=== 3. Factory with class expression ===');

function createGreeter(greeting) {
  return class {
    greet(name) {
      return `${greeting}, ${name}!`;
    }
  };
}

const HelloGreeter = createGreeter('Hello');
const HiGreeter = createGreeter('Hi');

console.log(new HelloGreeter().greet('Aung')); // Hello, Aung!
console.log(new HiGreeter().greet('Aung')); // Hi, Aung!

// ============================================================
// 4. Class declaration vs class expression — hoisting
// ============================================================
console.log('\n=== 4. Hoisting difference ===');

// Class declaration — block scope, hoisting မရှိ
// Class expression — variable declaration rule အတိုင်း (const/let = TDZ)

// const Before = new PersonClass(); // ReferenceError
const PersonClass = class PersonClass {
  constructor(name) {
    this.name = name;
  }
};

const after = new PersonClass('Bob');
console.log('name:', after.name);

// ============================================================
// 5. Immediately invoked class (IIFE pattern)
// ============================================================
console.log('\n=== 5. Singleton-like pattern ===');

const AppConfig = new (class {
  constructor() {
    this.version = '1.0.0';
    this.debug = false;
  }

  enableDebug() {
    this.debug = true;
  }
})();

console.log('version:', AppConfig.version);
AppConfig.enableDebug();
console.log('debug:', AppConfig.debug);

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Class expression:
//   const C = class { };           — anonymous
//   const C = class Name { };      — named (stack trace မှာ Name ပေါ်)
//   return class { };              — function ထဲ return
//
// Declaration: class Foo { } — standalone statement
// Expression: const Foo = class { } — value အဖြစ် assign
