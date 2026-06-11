/**
 * Topic 2: When You Should NOT Use Arrow Functions
 *
 * Arrow function မသုံးသင့်တဲ့ အခြေအနေများ:
 *   - event handler (this = element/object လို binding လို)
 *   - object literal method (this = object)
 *   - prototype method (this = instance)
 *   - arguments object သုံးတဲ့ function
 *   - constructor (new keyword)
 *   - class method (this = instance)
 *
 * Reference: https://www.javascripttutorial.net/when-you-should-not-use-arrow-functions/
 * Run: node es6/section-05-arrow-functions/02-when-not-to-use.js
 */

// ============================================================
// 1. Event handlers — this should be the target element
// ============================================================
console.log('=== 1. Event handlers (simulated) ===');

// Browser မှာ: input.addEventListener('keyup', function() { this.value })
// arrow သုံးရင် this = window/global — this.value undefined

class MockInput {
  constructor(value) {
    this.value = value;
    this.listeners = [];
  }

  addEventListener(event, handler) {
    this.listeners.push(handler);
  }

  trigger(event) {
    this.listeners.forEach((handler) => handler.call(this, event));
  }
}

const input = new MockInput('');
const greeting = { text: '' };

// WRONG — arrow: this = enclosing scope (not input)
input.addEventListener('keyup', () => {
  greeting.text = 'Hello ' + this.value;
});

input.value = 'Alice';
input.trigger('keyup');
console.log('arrow handler:', greeting.text); // Hello undefined

// CORRECT — regular function: this = input (trigger က call(this) လုပ်တယ်)
greeting.text = '';
input.addEventListener('keyup', function () {
  greeting.text = 'Hello ' + this.value;
});

input.trigger('keyup');
console.log('regular handler:', greeting.text); // Hello Alice

// ============================================================
// 2. Object methods — this should be the object
// ============================================================
console.log('\n=== 2. Object methods ===');

// WRONG — arrow inherits global/module this
const counterBad = {
  count: 0,
  next: () => ++this.count,
  current: () => this.count,
};

console.log('arrow next():', counterBad.next()); // NaN

// CORRECT — method shorthand or regular function
const counterGood = {
  count: 0,
  next() {
    return ++this.count;
  },
  current() {
    return this.count;
  },
};

console.log('regular next():', counterGood.next()); // 1
console.log('regular current():', counterGood.current()); // 1

// ============================================================
// 3. Prototype methods — this should be the instance
// ============================================================
console.log('\n=== 3. Prototype methods ===');

function Counter() {
  this.count = 0;
}

// WRONG
Counter.prototype.nextBad = () => {
  return ++this.count;
};

const cBad = new Counter();
console.log('prototype arrow:', cBad.nextBad()); // NaN

// CORRECT
Counter.prototype.nextGood = function () {
  return ++this.count;
};

const cGood = new Counter();
console.log('prototype regular:', cGood.nextGood()); // 1

// ============================================================
// 4. Functions that use arguments object
// ============================================================
console.log('\n=== 4. arguments object ===');

// WRONG — arrow has no arguments; uses outer scope's arguments (if any)
function outer() {
  const concatBad = (separator) => {
    const args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
  };
  return concatBad('-');
}

const badConcat = outer('ignored');
// badConcat('a', 'b', 'c'); // unexpected — arguments is outer's

// CORRECT — regular function or rest parameter
function concat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}

console.log('regular concat:', concat('-', 'a', 'b', 'c')); // a-b-c

// BETTER — rest parameter (ES6)
const concatRest = (separator, ...items) => items.join(separator);
console.log('rest concat:', concatRest('-', 'a', 'b', 'c')); // a-b-c

// ============================================================
// 5. Constructor — arrow cannot be used with new
// ============================================================
console.log('\n=== 5. Constructor ===');

function Person(name) {
  this.name = name;
}

const alice = new Person('Alice');
console.log('regular constructor:', alice.name);

// const BadPerson = (name) => { this.name = name; };
// new BadPerson('Bob'); // TypeError

// ============================================================
// 6. Class methods — use regular methods, not arrow properties
// ============================================================
console.log('\n=== 6. Class methods ===');

class Timer {
  constructor() {
    this.seconds = 0;
  }

  // CORRECT — method on prototype, this = instance
  tick() {
    this.seconds += 1;
    return this.seconds;
  }

  // WRONG — arrow as instance property (if assigned in constructor)
  // this.tickArrow = () => this.seconds += 1;
  // works for this but creates per-instance function — prefer method shorthand
}

const timer = new Timer();
console.log('tick:', timer.tick()); // 1
console.log('tick:', timer.tick()); // 2

// ============================================================
// 7. When TO use arrow functions — callbacks
// ============================================================
console.log('\n=== 7. Good use cases ===');

const items = [1, 2, 3, 4, 5];

// array methods — concise, no this needed
console.log('doubled:', items.map((n) => n * 2));
console.log('evens:', items.filter((n) => n % 2 === 0));
console.log('sum:', items.reduce((acc, n) => acc + n, 0));

// preserve outer this in callback
function DataStore() {
  this.data = [];

  this.add = function (item) {
    setTimeout(() => {
      this.data.push(item);
      console.log('added via arrow callback, length:', this.data.length);
    }, 10);
  };
}

const store = new DataStore();
store.add('item1');

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// DO NOT use arrow for:
//   - event handlers (need this = element)
//   - object methods (need this = object)
//   - prototype/class methods (need this = instance)
//   - functions using arguments (use rest ...args instead)
//   - constructors (new keyword)
//
// DO use arrow for:
//   - map, filter, reduce callbacks
//   - setTimeout/setInterval when you need outer this
//   - short one-liner functions with no this binding needed
