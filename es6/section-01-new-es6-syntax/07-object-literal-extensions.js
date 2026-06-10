/**
 * Topic 7: Object Literal Syntax Extensions — object ရေးသားမှု ပိုလွယ်ကူစေတဲ့ syntax
 *
 * ES6 object literal extensions 3 မျိုး:
 *   1. Property shorthand — variable name = property name
 *   2. Method shorthand — function: function() {} မလိုတော့
 *   3. Computed property names — [expression] နဲ့ dynamic key
 *
 * Reference: https://www.javascripttutorial.net/es6/enhanced-object-literals/
 * Run: node es6/section-01-new-es6-syntax/07-object-literal-extensions.js
 */

// ============================================================
// 1. Property Shorthand — variable name နဲ့ property name တူရင် shorthand
// ============================================================
console.log('=== 1. Property shorthand ===');

const name = 'Alice';
const age = 30;

// ES6 shorthand — { name, age } === { name: name, age: age }
const user = { name, age };
console.log(user); // { name: 'Alice', age: 30 }

// ES5 မှာ ရေးရမယ်ဆိုရင်:
// const user = { name: name, age: age };

// ============================================================
// 2. Method Shorthand — object ထဲ function ရေးသားမှု
// ============================================================
console.log('\n=== 2. Method shorthand ===');

const calculator = {
  // ES6 method shorthand — function keyword မလိုတော့
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log('add:', calculator.add(5, 3));       // 8
console.log('subtract:', calculator.subtract(5, 3)); // 2

// ES5 equivalent:
// add: function(a, b) { return a + b; }

// ============================================================
// 3. Computed Property Names — dynamic key နဲ့ property create
// ============================================================
console.log('\n=== 3. Computed property names ===');

const propName = 'score';
const dynamicKey = 'dynamic_' + Date.now();

const record = {
  [propName]: 95,                    // key = 'score', value = 95
  [dynamicKey]: 'computed value',    // key = runtime value, value = 'computed value'
  [`full_${propName}`]: 100,         // key = 'full_score', value = 100
};
console.log(record);
// { score: 95, dynamic_1234567890: 'computed value', full_score: 100 }

// ES5 မှာ dynamic key ရေးရမယ်ဆိုရင် object create ပြီး bracket notation သုံး

// ============================================================
// 4. Feature 3 ခု ပေါင်းသုံးခြင်း — real-world example
// ============================================================
console.log('\n=== 4. Combining all features ===');

function createPerson(firstName, lastName) {
  const id = Math.floor(Math.random() * 1000);

  return {
    firstName,           // property shorthand
    lastName,            // property shorthand
    fullName() {         // method shorthand
      return `${this.firstName} ${this.lastName}`;
    },
    [id]: 'internal id key', // computed property
  };
}

const person = createPerson('Aung', 'Naing');
console.log(person.fullName()); // "Aung Naing"
console.log('keys:', Object.keys(person));

// ============================================================
// 5. ES5 equivalent (purana နည်းလမ်း)
// ============================================================
console.log('\n=== 5. ES5 equivalent (for comparison) ===');

const nameES5 = 'Bob';
const userES5 = {
  name: nameES5,                    // shorthand မရှိ — name: nameES5 ရေးရ
  greet: function () {            // method shorthand မရှိ — function keyword လို
    return 'Hi ' + this.name;
  },
};
console.log(userES5.greet()); // "Hi Bob"

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Object literal extensions သုံးသင့်တဲ့ အခြေအနေ:
//   - variable name = property name → shorthand
//   - object ထဲ function → method shorthand
//   - runtime မှာ key decide → computed property [expression]
//
// React component, API response, config object တွေမှာ အများကြီး သုံးတယ်
