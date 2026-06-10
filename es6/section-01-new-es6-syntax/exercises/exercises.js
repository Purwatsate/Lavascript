/**
 * Section 1 Exercises — ES6 New Syntax လေ့ကျင့်ခန်း
 *
 * အောက်ပါ function 5 ခုကို ES6 syntax သုံးပြီး ကိုယ်တိုင် implement လုပ်ပါ
 * ဖြေရှင်းနည်း: exercises/SOLUTIONS.md (ကိုယ်တိုင်မရေးခင် မကြည့်ပါနဲ့)
 *
 * Run: node es6/section-01-new-es6-syntax/exercises/exercises.js
 */

// ============================================================
// Exercise 1: createCounter — let/const + closure
// ============================================================
// counter function create လုပ်ပေးတဲ့ function
// createCounter() ခေါ်ရင် function တစ်ခု return
// return function က ခေါ်တိုင်း count တိုးပြီး current count return
//
// Example:
//   const counter = createCounter();
//   counter(); // 1
//   counter(); // 2
//   counter(); // 3
//
// Hint: closure သုံးပါ — let count = 0; return () => ++count;
function createCounter() {
  // YOUR CODE HERE — let/const နဲ့ closure implement လုပ်ပါ
}

// ============================================================
// Exercise 2: average — default parameter + rest parameter
// ============================================================
// argument မပေးရင် 0 return
// argument ပေးရင် average (ပျမ်းမျှ) return
//
// Example:
//   average()        // 0
//   average(2, 4, 6) // 4
//   average(10, 20)  // 15
//
// Hint: ...numbers rest parameter, numbers.length === 0 check, reduce()
function average(/* YOUR CODE — rest parameter */) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 3: mergeUnique — spread operator + Set
// ============================================================
// array 2 ခု merge လုပ်ပြီး duplicate value ဖယ်ထုတ်
//
// Example:
//   mergeUnique([1, 2], [2, 3]) // [1, 2, 3]
//   mergeUnique(['a'], ['a', 'b']) // ['a', 'b']
//
// Hint: [...new Set([...arr1, ...arr2])]
function mergeUnique(arr1, arr2) {
  // YOUR CODE HERE — spread + Set သုံးပါ
}

// ============================================================
// Exercise 4: createProduct — object literal extensions
// ============================================================
// name, price ပေးရင် product object return
// object ထဲ display() method ပါ — "Book: $15" format
//
// Example:
//   const p = createProduct('Book', 15);
//   p.name    // 'Book'
//   p.display() // 'Book: $15'
//
// Hint: property shorthand, method shorthand, template literal
function createProduct(name, price) {
  // YOUR CODE HERE — object literal extensions သုံးပါ
}

// ============================================================
// Exercise 5: formatList — for...of + template literals
// ============================================================
// title နဲ့ items array ပေးရင် formatted string return
//
// Example:
//   formatList('Fruits', ['apple', 'banana'])
//   // "Fruits:\n- apple\n- banana"
//
// Hint: for...of or map(), template literal `\n`, `- ${item}`
function formatList(title, items) {
  // YOUR CODE HERE — for...of + template literal သုံးပါ
}

// ============================================================
// Tests — implement ပြီးရင် runTests() uncomment လုပ်ပါ
// ============================================================
function runTests() {
  // Exercise 1 test
  const counter = createCounter();
  console.assert(counter() === 1, 'counter 1');
  console.assert(counter() === 2, 'counter 2');

  // Exercise 2 test
  console.assert(average() === 0, 'average empty');
  console.assert(average(2, 4, 6) === 4, 'average values');

  // Exercise 3 test
  console.assert(
    JSON.stringify(mergeUnique([1, 2], [2, 3])) === JSON.stringify([1, 2, 3]),
    'mergeUnique'
  );

  // Exercise 4 test
  const p = createProduct('Book', 15);
  console.assert(p.name === 'Book' && typeof p.display === 'function', 'createProduct');

  // Exercise 5 test
  const list = formatList('Colors', ['red', 'blue']);
  console.assert(list.includes('Colors') && list.includes('- red'), 'formatList');

  console.log('All exercises passed!');
}

// Implement ပြီးရင် အောက်က line က uncomment လုပ်ပါ
// runTests();
