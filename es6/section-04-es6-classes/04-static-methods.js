/**
 * Topic 4: Static Methods — class ပေါ်မှာ တိုက်ရိုက် method
 *
 * Static method:
 *   - instance မဟုတ်ဘဲ class ပေါ်မှာ attach
 *   - ClassName.method() နဲ့ ခေါ်
 *   - utility function, factory method အတွက် အသုံးဝင်
 *
 * Syntax: static methodName() { }
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-static-methods/
 * Run: node es6/section-04-es6-classes/04-static-methods.js
 */

// ============================================================
// 1. Basic static method
// ============================================================
console.log('=== 1. Basic static method ===');

class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log('add:', MathHelper.add(3, 4)); // 7
console.log('multiply:', MathHelper.multiply(3, 4)); // 12

// instance ကနေ static method ခေါ်လို့မရ
const helper = new MathHelper();
// helper.add(1, 2); // TypeError: helper.add is not a function

// ============================================================
// 2. Static method vs instance method
// ============================================================
console.log('\n=== 2. Static vs instance method ===');

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
    return this.count;
  }

  static resetAll(counters) {
    counters.forEach((c) => {
      c.count = 0;
    });
  }
}

const c1 = new Counter();
const c2 = new Counter();
c1.increment();
c2.increment();
c2.increment();
console.log('before reset:', c1.count, c2.count); // 1 2

Counter.resetAll([c1, c2]);
console.log('after reset:', c1.count, c2.count); // 0 0

// ============================================================
// 3. Factory pattern with static method
// ============================================================
console.log('\n=== 3. Static factory method ===');

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  static createGuest(name) {
    return new User(name, 'guest');
  }

  static createAdmin(name) {
    return new User(name, 'admin');
  }

  describe() {
    return `${this.name} (${this.role})`;
  }
}

const guest = User.createGuest('Alice');
const admin = User.createAdmin('Bob');
console.log(guest.describe()); // Alice (guest)
console.log(admin.describe()); // Bob (admin)

// ============================================================
// 4. Static method calls another static method
// ============================================================
console.log('\n=== 4. Static method chaining ===');

class Validator {
  static isEmail(value) {
    return typeof value === 'string' && value.includes('@');
  }

  static isNotEmpty(value) {
    return typeof value === 'string' && value.trim().length > 0;
  }

  static validateUser({ name, email }) {
    return Validator.isNotEmpty(name) && Validator.isEmail(email);
  }
}

console.log('valid:', Validator.validateUser({ name: 'Aung', email: 'a@x.com' })); // true
console.log('invalid:', Validator.validateUser({ name: '', email: 'bad' })); // false

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// static methodName() { } — class ပေါ်မှာ define
// ClassName.method() — instance မလို new မလို ခေါ်နိုင်
// instance.method() — static method access မရ
// factory, utility, validation logic အတွက် သင့်တော်
