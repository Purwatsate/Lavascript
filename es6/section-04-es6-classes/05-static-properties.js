/**
 * Topic 5: Static Properties — class ပေါ်မှာ shared property
 *
 * Static property:
 *   - instance တိုင်းမှာ မဟုတ် — class တစ်ခုလုံးမှာ share
 *   - ClassName.propertyName နဲ့ access
 *   - counter, config, constant အတွက် အသုံးဝင်
 *
 * Syntax: static propertyName = value; (ES2022+)
 *         or static get propertyName() { }
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-static-properties/
 * Run: node es6/section-04-es6-classes/05-static-properties.js
 */

// ============================================================
// 1. Static property (class field)
// ============================================================
console.log('=== 1. Static property ===');

class App {
  static version = '1.0.0';
  static maxUsers = 100;

  constructor(name) {
    this.name = name;
  }
}

console.log('version:', App.version); // 1.0.0
console.log('maxUsers:', App.maxUsers); // 100

const app1 = new App('Portal');
const app2 = new App('Dashboard');
// app1.version — undefined (instance property မဟုတ်)

// ============================================================
// 2. Static property as counter
// ============================================================
console.log('\n=== 2. Instance counter with static property ===');

class Employee {
  static count = 0;

  constructor(name) {
    this.id = ++Employee.count;
    this.name = name;
  }

  static getTotal() {
    return Employee.count;
  }
}

const e1 = new Employee('Alice');
const e2 = new Employee('Bob');
const e3 = new Employee('Charlie');

console.log('e1.id:', e1.id); // 1
console.log('e2.id:', e2.id); // 2
console.log('total:', Employee.getTotal()); // 3

// ============================================================
// 3. Static getter — computed static property
// ============================================================
console.log('\n=== 3. Static getter ===');

class Config {
  static _debug = false;

  static get debug() {
    return Config._debug;
  }

  static set debug(value) {
    Config._debug = Boolean(value);
  }

  static get label() {
    return Config._debug ? 'DEBUG' : 'PRODUCTION';
  }
}

console.log('label:', Config.label); // PRODUCTION
Config.debug = true;
console.log('label:', Config.label); // DEBUG

// ============================================================
// 4. Static property inheritance preview
// ============================================================
console.log('\n=== 4. Static property on subclass ===');

class Animal {
  static kingdom = 'Animalia';
}

class Dog extends Animal {
  static species = 'Canis familiaris';
}

console.log('Dog.kingdom:', Dog.kingdom); // Animalia — parent static inherit
console.log('Dog.species:', Dog.species); // Canis familiaris

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// static prop = value; — class-level property (ES2022 class fields)
// ClassName.prop — instance မလို access
// static counter, config, shared state အတွက် သုံး
// subclass က parent static property inherit လုပ်တယ်
