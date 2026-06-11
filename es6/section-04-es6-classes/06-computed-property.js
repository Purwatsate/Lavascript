/**
 * Topic 6: Computed Property — dynamic method/property name
 *
 * Computed property:
 *   - [expression] နဲ့ property/method name ကို runtime မှာ သတ်မှတ်
 *   - object literal extension (Section 1) နဲ့ class မှာလည်း သုံး
 *
 * Syntax:
 *   [methodName]() { }
 *   static [propName] = value;
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-computed-property/
 * Run: node es6/section-04-es6-classes/06-computed-property.js
 */

// ============================================================
// 1. Computed method name
// ============================================================
console.log('=== 1. Computed method name ===');

const methodName = 'greet';

class Greeter {
  constructor(name) {
    this.name = name;
  }

  [methodName]() {
    return `Hello, ${this.name}!`;
  }
}

const greeter = new Greeter('Aung');
console.log(greeter.greet()); // Hello, Aung!
console.log(greeter[methodName]()); // same — dynamic access

// ============================================================
// 2. Multiple computed methods from array
// ============================================================
console.log('\n=== 2. Dynamic methods from config ===');

const actions = ['start', 'stop', 'pause'];

class Player {
  constructor() {
    this.state = 'idle';
  }
}

actions.forEach((action) => {
  Player.prototype[action] = function () {
    this.state = action;
    return `Player is ${action}`;
  };
});

const player = new Player();
console.log(player.start()); // Player is start
console.log(player.state); // start
console.log(player.pause()); // Player is pause

// ============================================================
// 3. Computed property with Symbol
// ============================================================
console.log('\n=== 3. Symbol as computed key ===');

const idKey = Symbol('id');

class Item {
  constructor(id, label) {
    this[idKey] = id;
    this.label = label;
  }

  getId() {
    return this[idKey];
  }
}

const item = new Item(42, 'Book');
console.log('label:', item.label); // Book
console.log('id:', item.getId()); // 42
// item[idKey] — Symbol key က direct access ခက်ခဲ (encapsulation)

// ============================================================
// 4. Static computed property
// ============================================================
console.log('\n=== 4. Static computed property ===');

const envKey = 'NODE_ENV';
const envValue = 'development';

class Environment {
  static [envKey] = envValue;

  static isDev() {
    return Environment[envKey] === 'development';
  }
}

console.log('NODE_ENV:', Environment.NODE_ENV); // development
console.log('isDev:', Environment.isDev()); // true

// ============================================================
// 5. Getter with computed name
// ============================================================
console.log('\n=== 5. Computed getter ===');

const fullNameKey = 'fullName';

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get [fullNameKey]() {
    return `${this.first} ${this.last}`;
  }
}

const person = new Person('Aung', 'Naing');
console.log('fullName:', person.fullName); // Aung Naing

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// [expression]() { } — method name dynamic
// [expression] = value — property name dynamic
// variable, Symbol, template result သုံး၍ name သတ်မှတ်
// plugin system, dynamic API mapping အတွက် အသုံးဝင်
