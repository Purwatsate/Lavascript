/**
 * Topic 8: for...of Loop — iterable object element တွေကို iterate လုပ်ခြင်း
 *
 * for...of loop:
 *   - iterable object (array, string, Map, Set) element တွေကို value အဖြစ် iterate
 *   - for...in loop နဲ့ မတူ — for...in က key/property iterate
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-for-of/
 * Run: node es6/section-01-new-es6-syntax/08-for-of.js
 */

// ============================================================
// 1. Array iterate — for...of အခြေခံ
// ============================================================
console.log('=== 1. Iterate array ===');

const fruits = ['apple', 'banana', 'orange'];

// for...of — array element value တစ်ခုချင်းစီ iterate
for (const fruit of fruits) {
  console.log(fruit); // apple, banana, orange
}

// for loop index မလို — value တိုက်ရိုက် ရ
// for (let i = 0; i < fruits.length; i++) { console.log(fruits[i]); }

// ============================================================
// 2. for...of vs for...in — အရေးကြီးဆုံး ကွာခြားချက်
// ============================================================
console.log('\n=== 2. for...of vs for...in ===');

const arr = ['a', 'b', 'c'];
arr.customProp = 'not an index'; // array ထဲ custom property ထည့်

// for...in — object property/key iterate (array index + custom property)
console.log('for...in (keys/properties):');
for (const key in arr) {
  console.log(' ', key, arr[key]);
  // 0 a, 1 b, 2 c, customProp not an index
  // array index + custom property အားလုံး iterate — array မှာ မသုံးသင့်ဘူး!
}

// for...of — value iterate (custom property မပါ)
console.log('for...of (values only):');
for (const value of arr) {
  console.log(' ', value); // a, b, c — value တွေသာ
}

// Rule: array iterate → for...of, object property iterate → for...in or Object.keys()

// ============================================================
// 3. String iterate — string character တစ်ခုချင်း
// ============================================================
console.log('\n=== 3. Iterate string ===');

// string က iterable — character တစ်ခုချင်း iterate
for (const char of 'Hello') {
  process.stdout.write(char + ' '); // H e l l o
}
console.log();

// ============================================================
// 4. Map iterate — key-value pair
// ============================================================
console.log('\n=== 4. Iterate Map ===');

const map = new Map([
  ['name', 'Alice'],
  ['age', 30],
]);

// Map iterate — [key, value] pair array အဖြစ် ရ
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
  // name: Alice, age: 30
}

// ============================================================
// 5. Set iterate — unique value တွေ
// ============================================================
console.log('\n=== 5. Iterate Set ===');

// Set — duplicate value မရှိ — unique value တွေသာ iterate
const unique = new Set([1, 2, 3, 2, 1]); // duplicate 2, 1 ဖယ်ထုတ်မယ်
for (const num of unique) {
  console.log(num); // 1, 2, 3
}

// ============================================================
// 6. entries(), keys(), values() — index/value pair iterate
// ============================================================
console.log('\n=== 6. entries(), keys(), values() ===');

const colors = ['red', 'green', 'blue'];

// entries() — [index, value] pair iterate
for (const [index, color] of colors.entries()) {
  console.log(`${index}: ${color}`);
  // 0: red, 1: green, 2: blue
}

// keys() — index iterate, values() — value iterate

// ============================================================
// 7. break နဲ့ continue — for...of မှာ သုံးလို့ရ
// ============================================================
console.log('\n=== 7. break and continue work ===');

for (const n of [1, 2, 3, 4, 5]) {
  if (n === 3) continue; // 3 ကို skip
  if (n === 5) break;    // 5 မှာ loop ရပ်
  console.log(n);        // 1, 2, 4
}

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// for...of သုံးသင့်တဲ့ အခြေအနေ:
//   - array element iterate
//   - string character iterate
//   - Map, Set iterate
//
// for...of မသုံးရ:
//   - plain object ({ name: 'Alice' }) — iterable မဟုတ်
//   - object iterate → Object.keys(), Object.values(), Object.entries()
//
// for...in vs for...of:
//   for...in → key/property (object, array index)
//   for...of → value (array, string, Map, Set)

console.log('\nNote: plain objects are NOT iterable with for...of — use Object.keys/values/entries');
