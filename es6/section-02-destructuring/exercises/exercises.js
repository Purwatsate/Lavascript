/**
 * Section 2 Exercises — Destructuring လေ့ကျင့်ခန်း
 *
 * အောက်ပါ function 5 ခုကို destructuring syntax သုံးပြီး implement လုပ်ပါ
 * ဖြေရှင်းနည်း: exercises/SOLUTIONS.md (ကိုယ်တိုင်မရေးခင် မကြည့်ပါနဲ့)
 *
 * Run: node es6/section-02-destructuring/exercises/exercises.js
 */

// ============================================================
// Exercise 1: getFirstAndLast — array destructuring
// ============================================================
// array ပေးရင် first element နဲ့ last element return
//
// Example:
//   getFirstAndLast([1, 2, 3, 4]) // { first: 1, last: 4 }
//   getFirstAndLast(['a'])          // { first: 'a', last: 'a' }
//
// Hint: destructuring + array length or rest
function getFirstAndLast(arr) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 2: swapValues — array destructuring swap
// ============================================================
// object { a, b } ပေးရင် value 2 ခု swap လုပ်ပြီး return
//
// Example:
//   swapValues({ a: 1, b: 2 }) // { a: 2, b: 1 }
//
// Hint: [a, b] = [b, a] pattern
function swapValues({ a, b }) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 3: parseUser — object destructuring + default
// ============================================================
// user object ပေးရင် { displayName, role, isActive } return
// displayName = firstName + ' ' + lastName
// role default 'guest', isActive default true
//
// Example:
//   parseUser({ firstName: 'Aung', lastName: 'Tun' })
//   // { displayName: 'Aung Tun', role: 'guest', isActive: true }
//
// Hint: object destructuring with defaults
function parseUser(user) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 4: getCoordinates — nested array destructuring
// ============================================================
// [x, y, [r, g, b]] format array ပေးရင် object return
//
// Example:
//   getCoordinates([10, 20, [255, 128, 0]])
//   // { x: 10, y: 20, color: { r: 255, g: 128, b: 0 } }
//
// Hint: nested destructuring in function parameter or body
function getCoordinates(point) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 5: omitKey — object destructuring + rest
// ============================================================
// object နဲ့ key name ပေးရင် ထို key ကို ဖယ်ထားတဲ့ object အသစ် return
//
// Example:
//   omitKey({ a: 1, b: 2, c: 3 }, 'b') // { a: 1, c: 3 }
//
// Hint: { [key]: _, ...rest } = obj — rest property
function omitKey(obj, keyToRemove) {
  // YOUR CODE HERE
}

// ============================================================
// Tests — implement ပြီးရင် uncomment/run
// ============================================================
function runTests() {
  console.assert(
    JSON.stringify(getFirstAndLast([1, 2, 3, 4])) === JSON.stringify({ first: 1, last: 4 }),
    'getFirstAndLast'
  );

  console.assert(
    JSON.stringify(swapValues({ a: 1, b: 2 })) === JSON.stringify({ a: 2, b: 1 }),
    'swapValues'
  );

  const parsed = parseUser({ firstName: 'Aung', lastName: 'Tun' });
  console.assert(parsed.displayName === 'Aung Tun' && parsed.role === 'guest', 'parseUser');

  const coords = getCoordinates([10, 20, [255, 128, 0]]);
  console.assert(coords.x === 10 && coords.color.r === 255, 'getCoordinates');

  console.assert(
    JSON.stringify(omitKey({ a: 1, b: 2, c: 3 }, 'b')) === JSON.stringify({ a: 1, c: 3 }),
    'omitKey'
  );

  console.log('All exercises passed!');
}

// Implement ပြီးရင် uncomment လုပ်ပါ
// runTests();
