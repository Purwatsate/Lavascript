/**
 * Topic 1: Arrow Functions — concise function syntax (=>)
 *
 * Arrow function:
 *   - function expression ရဲ့ shorter alternative
 *   - callback, array method, closure အတွက် အသုံးများတယ်
 *   - lexical this — own this binding မရှိ
 *
 * Syntax:
 *   (x, y) => expression
 *   (x, y) => { statements; return value; }
 *   x => expression          — param တစ်ခုဆိုရင် () optional
 *   () => expression         — param မရှိရင် () လို
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-arrow-function/
 * Run: node es6/section-05-arrow-functions/01-arrow-functions.js
 */

// ============================================================
// 1. Function expression vs arrow function
// ============================================================
console.log('=== 1. Basic arrow function ===');

const addExpr = function (x, y) {
  return x + y;
};

const addArrow = (x, y) => x + y;

console.log('expression:', addExpr(10, 20)); // 30
console.log('arrow:', addArrow(10, 20)); // 30
console.log('typeof:', typeof addArrow); // function
console.log('instanceof Function:', addArrow instanceof Function); // true

// ============================================================
// 2. Multiple parameters
// ============================================================
console.log('\n=== 2. Multiple parameters ===');

const numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log('sorted:', numbers); // [6, 4, 2]

// expression body — => expression === => { return expression; }
const multiply = (x, y) => {
  return x * y;
};
console.log('multiply:', multiply(3, 4)); // 12

// ============================================================
// 3. Single parameter — parentheses optional
// ============================================================
console.log('\n=== 3. Single parameter ===');

const names = ['John', 'Mac', 'Peter'];
const lengths = names.map((name) => name.length);
console.log('lengths:', lengths); // [4, 3, 5]

const double = (n) => n * 2;
console.log('double:', double(5)); // 10

// ============================================================
// 4. No parameters
// ============================================================
console.log('\n=== 4. No parameters ===');

const getTimestamp = () => Date.now();
console.log('timestamp type:', typeof getTimestamp()); // number

// ============================================================
// 5. Expression vs statement body
// ============================================================
console.log('\n=== 5. Expression vs block body ===');

// expression — implicit return
const square = (x) => x * x;
console.log('square:', square(4)); // 16

// statement — block + explicit return
const isEven = (n) => {
  const result = n % 2 === 0;
  return result;
};
console.log('isEven(4):', isEven(4)); // true

// throw statement — block body လို
const fail = (msg) => {
  throw new Error(msg);
};
// fail('error'); // Error: error

// ============================================================
// 6. Return object literal — parentheses wrap
// ============================================================
console.log('\n=== 6. Return object literal ===');

const setColor = (color) => ({ value: color });

const backgroundColor = setColor('Red');
console.log('color:', backgroundColor.value); // Red

// ({ value: color }) — object literal return
// { value: color } only — block အဖြစ် interpret → error

// ============================================================
// 7. Lexical this — arrow inherits outer this
// ============================================================
console.log('\n=== 7. Lexical this ===');

function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;

    // regular function — own this (global/undefined in strict module)
    setTimeout(function () {
      console.log('regular fn this.speed:', this.speed); // undefined
    }, 50);

    // arrow function — lexical this (speedUp ရဲ့ this = car instance)
    setTimeout(() => {
      console.log('arrow fn this.speed:', this.speed); // 50
    }, 100);
  };
}

const car = new Car();
car.speedUp(50);

// ============================================================
// 8. arguments object — arrow doesn't have own arguments
// ============================================================
console.log('\n=== 8. arguments (lexical) ===');

function show() {
  return (x) => x + arguments[0];
}

const display = show(10, 20);
console.log('display(5):', display(5)); // 15 — arguments belongs to show(), not arrow

// ============================================================
// 9. No prototype property
// ============================================================
console.log('\n=== 9. No prototype ===');

function regularFn() {}
console.log('regular has prototype:', regularFn.hasOwnProperty('prototype')); // true

const arrowFn = () => {};
console.log('arrow has prototype:', arrowFn.hasOwnProperty('prototype')); // false

// ============================================================
// 10. Cannot use as constructor
// ============================================================
console.log('\n=== 10. Not a constructor ===');

// const Person = (name) => { this.name = name; };
// new Person('John'); // TypeError: Person is not a constructor

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// (a, b) => a + b           — implicit return
// (a, b) => { return a + b } — block body
// x => x * 2                — single param, () optional
// () => 42                  — no params
// () => ({ key: val })      — object return needs ()
//
// Arrow vs regular:
//   lexical this (no own this)
//   no arguments object
//   no prototype
//   cannot use new
