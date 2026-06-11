/**
 * Section 4 Exercises — ES6 Classes လေ့ကျင့်ခန်း
 *
 * အောက်ပါ class/function 5 ခုကို ES6 class syntax သုံးပြီး implement လုပ်ပါ
 * ဖြေရှင်းနည်း: exercises/SOLUTIONS.md (ကိုယ်တိုင်မရေးခင် မကြည့်ပါနဲ့)
 *
 * Run: node es6/section-04-es6-classes/exercises/exercises.js
 */

// ============================================================
// Exercise 1: Rectangle — basic class
// ============================================================
// width, height ပေးပြီး Rectangle class create
// area() — width * height return
// perimeter() — 2 * (width + height) return
//
// Example:
//   const r = new Rectangle(4, 5);
//   r.area()       // 20
//   r.perimeter()  // 18
//
// Hint: constructor + instance methods
class Rectangle {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 2: Temperature — getter/setter
// ============================================================
// celsius property ရှိတဲ့ Temperature class
// fahrenheit getter — celsius ကနေ convert
// fahrenheit setter — assign လုပ်ရင် celsius update
//
// Example:
//   const t = new Temperature(0);
//   t.fahrenheit        // 32
//   t.fahrenheit = 212;
//   t.celsius           // 100
//
// Hint: get fahrenheit() / set fahrenheit(value)
class Temperature {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 3: IdGenerator — static counter
// ============================================================
// static nextId() — 1, 2, 3, ... increment return
// static reset() — counter 0 ပြန် reset
//
// Example:
//   IdGenerator.nextId() // 1
//   IdGenerator.nextId() // 2
//   IdGenerator.reset()
//   IdGenerator.nextId() // 1
//
// Hint: static property + static methods
class IdGenerator {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 4: Animal & Dog — inheritance
// ============================================================
// Animal: constructor(name), speak() return `${name} makes a sound`
// Dog extends Animal: speak() return `${name} barks`
//
// Example:
//   new Dog('Rex').speak() // Rex barks
//
// Hint: extends, super(), method override
class Animal {
  // YOUR CODE HERE
}

class Dog {
  // YOUR CODE HERE — extends Animal
}

// ============================================================
// Exercise 5: createStack — class expression factory
// ============================================================
// createStack(maxSize) — Stack class return
// Stack: push(item), pop(), peek(), size()
// maxSize ကျော်ရင် push လုပ်လို့မရ (false return, push အောင်မြင် true)
//
// Example:
//   const Stack = createStack(2);
//   const s = new Stack();
//   s.push('a'); s.push('b'); s.push('c'); // false
//   s.size(); // 2
//   s.pop();  // 'b'
//
// Hint: class expression inside function, closure for maxSize
function createStack(maxSize) {
  // YOUR CODE HERE
}

// ============================================================
// Tests — implement ပြီးရင် uncomment/run
// ============================================================
function runTests() {
  const r = new Rectangle(4, 5);
  console.assert(r.area() === 20, 'Rectangle.area');
  console.assert(r.perimeter() === 18, 'Rectangle.perimeter');

  const t = new Temperature(0);
  console.assert(t.fahrenheit === 32, 'Temperature getter');
  t.fahrenheit = 212;
  console.assert(t.celsius === 100, 'Temperature setter');

  IdGenerator.reset();
  console.assert(IdGenerator.nextId() === 1, 'IdGenerator first');
  console.assert(IdGenerator.nextId() === 2, 'IdGenerator second');
  IdGenerator.reset();
  console.assert(IdGenerator.nextId() === 1, 'IdGenerator reset');

  console.assert(new Dog('Rex').speak() === 'Rex barks', 'Dog.speak');

  const Stack = createStack(2);
  const s = new Stack();
  console.assert(s.push('a') === true, 'Stack push a');
  console.assert(s.push('b') === true, 'Stack push b');
  console.assert(s.push('c') === false, 'Stack push c blocked');
  console.assert(s.size() === 2, 'Stack size');
  console.assert(s.pop() === 'b', 'Stack pop');
  console.assert(s.peek() === 'a', 'Stack peek');

  console.log('All exercises passed!');
}

// Implement ပြီးရင် uncomment လုပ်ပါ
// runTests();
