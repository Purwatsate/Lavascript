/**
 * Section 5 Exercises — Arrow Functions လေ့ကျင့်ခန်း
 *
 * အောက်ပါ function 5 ခုကို arrow function syntax သုံးပြီး implement လုပ်ပါ
 * ဖြေရှင်းနည်း: exercises/SOLUTIONS.md (ကိုယ်တိုင်မရေးခင် မကြည့်ပါနဲ့)
 *
 * Run: node es6/section-05-arrow-functions/exercises/exercises.js
 */

// ============================================================
// Exercise 1: doubleAll — map with arrow function
// ============================================================
// number array ပေးရင် element တိုင်းကို 2 ဆ multiply လုပ်ပြီး array return
//
// Example:
//   doubleAll([1, 2, 3]) // [2, 4, 6]
//
// Hint: arr.map(n => ...)
function doubleAll(arr) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 2: filterPositive — filter with arrow function
// ============================================================
// positive number (> 0) တွေသာ filter လုပ်ပြီး return
//
// Example:
//   filterPositive([-1, 2, 0, 3]) // [2, 3]
//
// Hint: arr.filter(n => ...)
function filterPositive(arr) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 3: createMultiplier — arrow function factory
// ============================================================
// factor number ပေးရင် function return — return function က value * factor
//
// Example:
//   const triple = createMultiplier(3);
//   triple(4) // 12
//
// Hint: return (value) => value * factor
function createMultiplier(factor) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 4: toPerson — arrow return object literal
// ============================================================
// name, age ပေးရင် { name, age, label: 'name (age)' } return
//
// Example:
//   toPerson('Aung', 25) // { name: 'Aung', age: 25, label: 'Aung (25)' }
//
// Hint: (name, age) => ({ name, age, label: ... })
function toPerson(name, age) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 5: createLogger — lexical this with arrow callback
// ============================================================
// createLogger(prefix) — object return: { messages: [], log(msg) }
// log(msg) ခေါ်ရင် `${prefix}: ${msg}` က messages array ထဲ push
// log method ထဲ arrow function မသုံး — object method shorthand သုံး
// push callback (if any) or internal logic — prefix က closure ကနေ access
//
// Example:
//   const logger = createLogger('INFO');
//   logger.log('started');
//   logger.log('done');
//   logger.messages // ['INFO: started', 'INFO: done']
//
// Hint: return { messages: [], log(msg) { ... } }
function createLogger(prefix) {
  // YOUR CODE HERE
}

// ============================================================
// Tests — implement ပြီးရင် uncomment/run
// ============================================================
function runTests() {
  console.assert(
    JSON.stringify(doubleAll([1, 2, 3])) === JSON.stringify([2, 4, 6]),
    'doubleAll'
  );

  console.assert(
    JSON.stringify(filterPositive([-1, 2, 0, 3])) === JSON.stringify([2, 3]),
    'filterPositive'
  );

  const triple = createMultiplier(3);
  console.assert(triple(4) === 12, 'createMultiplier');

  const person = toPerson('Aung', 25);
  console.assert(
    person.name === 'Aung' && person.label === 'Aung (25)',
    'toPerson'
  );

  const logger = createLogger('INFO');
  logger.log('started');
  logger.log('done');
  console.assert(
    JSON.stringify(logger.messages) === JSON.stringify(['INFO: started', 'INFO: done']),
    'createLogger'
  );

  console.log('All exercises passed!');
}

// Implement ပြီးရင် uncomment လုပ်ပါ
// runTests();
