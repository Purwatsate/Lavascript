/**
 * Topic 2: Getters and Setters — get / set keywords
 *
 * Getter/Setter:
 *   - property access လုပ်သလို method call ဖြစ်တယ်
 *   - validation, computed value, encapsulation အတွက် အသုံးဝင်
 *
 * Syntax:
 *   get propertyName() { return this._prop; }
 *   set propertyName(value) { this._prop = value; }
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-getters-and-setters/
 * Run: node es6/section-04-es6-classes/02-getters-setters.js
 */

// ============================================================
// 1. Getter — property လို access, method လို run
// ============================================================
console.log('=== 1. Basic getter ===');

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const circle = new Circle(5);
console.log('radius:', circle.radius); // 5 — () မလို
console.log('area:', circle.area.toFixed(2)); // 78.54

// ============================================================
// 2. Setter — property assign လုပ်သလို validation run
// ============================================================
console.log('\n=== 2. Basic setter ===');

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return (this.celsius * 9) / 5 + 32;
  }

  set fahrenheit(value) {
    this.celsius = ((value - 32) * 5) / 9;
  }
}

const temp = new Temperature(25);
console.log('fahrenheit:', temp.fahrenheit); // 77

temp.fahrenheit = 86;
console.log('celsius after set:', temp.celsius); // 30

// ============================================================
// 3. Validation with setter
// ============================================================
console.log('\n=== 3. Setter validation ===');

class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Name must be a non-empty string');
    }
    this._name = value.trim();
  }
}

const user = new User('Alice');
console.log('user.name:', user.name);

// new User(''); // Error: Name must be a non-empty string

// ============================================================
// 4. Getter + Setter together — private-like field
// ============================================================
console.log('\n=== 4. Encapsulation pattern ===');

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (value < 0) {
      throw new Error('Balance cannot be negative');
    }
    this._balance = value;
  }

  deposit(amount) {
    this.balance = this._balance + amount;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log('balance:', account.balance); // 150

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// get prop() — read လုပ်တဲ့အခါ call (obj.prop)
// set prop(v) — assign လုပ်တဲ့အခါ call (obj.prop = v)
// _prefix convention — "private" field အဖြစ် သတ်မှတ် (convention only)
// validation, computed property, unit conversion အတွက် အသုံးဝင်
