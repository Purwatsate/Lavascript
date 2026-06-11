/**
 * Topic 1: Class — ES6 class declaration
 *
 * ES6 Class:
 *   - object create လုပ်ဖို့ blueprint (template)
 *   - data + data ကို manipulate လုပ်တဲ့ method တွေ encapsulate
 *   - prototypal inheritance ပေါ်မှာ syntactic sugar (class = special function)
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-class/
 * Run: node es6/section-04-es6-classes/01-class.js
 */

// ============================================================
// 1. ES5 constructor/prototype pattern (class မရှိခင်က)
// ============================================================
console.log('=== 1. ES5 constructor/prototype pattern ===');

function PersonES5(name) {
  this.name = name;
}

PersonES5.prototype.getName = function () {
  return this.name;
};

const johnES5 = new PersonES5('John Doe');
console.log(johnES5.getName()); // John Doe
console.log(johnES5 instanceof PersonES5); // true
console.log(johnES5 instanceof Object); // true

// ============================================================
// 2. ES6 class declaration
// ============================================================
console.log('\n=== 2. ES6 class declaration ===');

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const john = new Person('John Doe');
console.log(john.getName()); // John Doe
console.log(typeof Person); // function — class က special function
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

// ============================================================
// 3. Class vs constructor function — အရေးကြီးတဲ့ ကွာခြားချက်များ
// ============================================================
console.log('\n=== 3. Class vs constructor function ===');

// (a) Class declaration — hoisting မရှိ (declare မလုပ်ခင် new လုပ်လို့မရ)
// let alice = new Person('Alice'); // ReferenceError — class အပေါ်မှာ ရေးရင် error

// (b) Class body — strict mode အလိုအလျောက်
// (c) Class methods — non-enumerable (for...in loop မှာ မပေါ်)
// (d) Constructor — new မပါဘဲ ခေါ်လို့မရ
// Person('Bob'); // TypeError: Class constructor cannot be invoked without 'new'

// ============================================================
// 4. Method call syntax
// ============================================================
console.log('\n=== 4. Method call ===');

class Calculator {
  constructor(initial = 0) {
    this.value = initial;
  }

  add(n) {
    this.value += n;
    return this; // method chaining
  }

  result() {
    return this.value;
  }
}

const calc = new Calculator(10);
calc.add(5).add(3);
console.log('Calculator result:', calc.result()); // 18

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Class syntax:
//   class Name {
//     constructor(args) { this.prop = args; }
//     method() { return this.prop; }
//   }
//   const obj = new Name('value');
//
// Class = function special form (typeof Class === 'function')
// new မပါဘဲ constructor ခေါ်လို့မရ
// declare မလုပ်ခင် instantiate လုပ်လို့မရ (no hoisting)
