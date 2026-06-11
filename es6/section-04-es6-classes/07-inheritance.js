/**
 * Topic 7: Inheritance — extends & super
 *
 * Inheritance:
 *   - child class က parent class ရဲ့ method/property inherit
 *   - extends — parent class ချိတ်
 *   - super() — parent constructor ခေါ် (child constructor ထဲ)
 *   - super.method() — parent method ခေါ် (override/shadow လုပ်ထားရင်)
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-inheritance/
 * Run: node es6/section-04-es6-classes/07-inheritance.js
 */

// ============================================================
// 1. Basic inheritance — extends & super
// ============================================================
console.log('=== 1. Basic inheritance ===');

class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log(`walking on ${this.legs} legs`);
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs); // parent constructor — this သုံးမီ ခေါ်ရမယ်
  }

  fly() {
    console.log('flying');
  }
}

const bird = new Bird(2);
bird.walk(); // walking on 2 legs
bird.fly(); // flying

// ============================================================
// 2. Child constructor without explicit constructor
// ============================================================
console.log('\n=== 2. Implicit super() ===');

class Fish extends Animal {
  swim() {
    console.log('swimming');
  }
}

const fish = new Fish(0);
fish.walk(); // walking on 0 legs
fish.swim(); // swimming

// ============================================================
// 3. Child constructor with extra properties
// ============================================================
console.log('\n=== 3. super() then this ===');

class ColoredBird extends Animal {
  constructor(legs, color) {
    super(legs);
    this.color = color; // super() ပြီးမှ this သုံး
  }

  getColor() {
    return this.color;
  }
}

const pigeon = new ColoredBird(2, 'white');
console.log('color:', pigeon.getColor()); // white
pigeon.walk();

// ============================================================
// 4. Method shadowing & super.method()
// ============================================================
console.log('\n=== 4. Method shadowing ===');

class Dog extends Animal {
  constructor() {
    super(4);
  }

  walk() {
    super.walk();
    console.log('go walking');
  }
}

const bingo = new Dog();
bingo.walk();
// walking on 4 legs
// go walking

// ============================================================
// 5. Static method inheritance
// ============================================================
console.log('\n=== 5. Static inheritance ===');

class Base {
  static hello() {
    return 'Hello from Base';
  }
}

class Derived extends Base {
  static greet() {
    return 'Hello from Derived';
  }
}

console.log(Derived.hello()); // Hello from Base
console.log(Derived.greet()); // Hello from Derived

// ============================================================
// 6. Extend built-in type — Queue extends Array
// ============================================================
console.log('\n=== 6. Extend built-in Array ===');

class Queue extends Array {
  enqueue(item) {
    super.push(item);
  }

  dequeue() {
    return super.shift();
  }

  peek() {
    return this.length > 0 ? this[0] : undefined;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

while (!queue.isEmpty()) {
  console.log('dequeue:', queue.dequeue());
}

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// class Child extends Parent { }
// constructor ထဲ: super(args) — child constructor ရှိရင် မဖြစ်မနေ ခေါ်
// super() မခေါ်ဘဲ this သုံး — ReferenceError
// super.method() — parent method ခေါ် (override လုပ်ထားရင်)
// static members — child class က inherit
// Array, Map စတဲ့ built-in type တွေကိုလည်း extend လုပ်လို့ရ
