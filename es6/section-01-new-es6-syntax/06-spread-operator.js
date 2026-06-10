/**
 * Topic 6: Spread Operator — array/object element တွေကို ဖြန့်ခြင်း
 *
 * Spread operator syntax: ...iterable
 *   - array, object, string element တွေကို individual item အဖြစ် ဖြန့်
 *   - Rest parameter နဲ့ syntax တူ (...), context မတူ
 *
 * Rest = collect (စုသည်)    → function parameter, destructuring
 * Spread = expand (ဖြန့်သည်) → function call, array/object create
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-spread/
 * Run: node es6/section-01-new-es6-syntax/06-spread-operator.js
 */

// ============================================================
// 1. Array ကို function argument အဖြစ် spread
// ============================================================
console.log('=== 1. Spread array into function arguments ===');

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
// ...nums → array element တွေကို individual argument အဖြစ် ဖြန့်
// add(...nums) === add(1, 2, 3)
console.log('add(...nums):', add(...nums)); // 6

// ES5 equivalent: add.apply(null, nums) — spread က ပိုရှင်းတယ်

// ============================================================
// 2. Array copy နဲ့ merge
// ============================================================
console.log('\n=== 2. Copy and merge arrays ===');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// merge — array 2 ခု ပေါင်းခြင်း
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// shallow copy — original array ကို မထိ, copy အသစ် create
const copy = [...arr1]; // [1, 2, 3]

console.log('merged:', merged);
console.log('copy:', copy);
console.log('copy !== original:', copy !== arr1); // true — reference မတူ, copy အသစ်

// ============================================================
// 3. Object spread (ES2018) — object property merge
// ============================================================
console.log('\n=== 3. Spread object (ES2018) ===');

const defaults = { theme: 'light', lang: 'en' };
const userSettings = { lang: 'my', fontSize: 14 };

// object spread — property တွေ merge, နောက်မှ property က override
const settings = { ...defaults, ...userSettings };
// { theme: 'light', lang: 'my', fontSize: 14 }
// lang: 'en' က 'my' နဲ့ override ဖြစ်သွားတယ်
console.log('merged settings:', settings);

// ============================================================
// 4. Object shallow copy
// ============================================================
console.log('\n=== 4. Clone object (shallow) ===');

const original = { a: 1, b: { nested: 2 } };
const cloned = { ...original }; // shallow copy

cloned.a = 99;           // top-level property — original မထိ
cloned.b.nested = 99;    // nested object — original လည်း ပြောင်းသွားမယ်!

console.log('original after clone change:', original);
// { a: 1, b: { nested: 99 } } — b.nested ပြောင်းသွားပြီ (shallow copy limitation)

// deep copy လိုရင် structuredClone() or JSON.parse(JSON.stringify()) သုံး

// ============================================================
// 5. Array ထဲ element အသစ် ထည့်ခြင်း (immutable way)
// ============================================================
console.log('\n=== 5. Add items to array immutably ===');

const items = ['apple', 'banana'];

// original array ကို မထိ, element အသစ် ပါတဲ့ array အသစ် create
const newItems = [...items, 'orange']; // ['apple', 'banana', 'orange']

console.log('original:', items);   // ['apple', 'banana'] — မပြောင်း
console.log('new:', newItems);     // ['apple', 'banana', 'orange']

// React state update မှာ ဒီ pattern ကို အများကြီး သုံးတယ်

// ============================================================
// 6. Math.max() နဲ့ spread
// ============================================================
console.log('\n=== 6. Math.max with spread ===');

const values = [3, 7, 2, 9, 1];
// Math.max() က individual argument လိုတယ် — array တိုက်ရိုက် မပေးလို့ရ
console.log('Math.max(...values):', Math.max(...values)); // 9

// ============================================================
// 7. String ကို character array အဖြစ် spread
// ============================================================
console.log('\n=== 7. Convert string to array of chars ===');

// string က iterable — spread နဲ့ character array အဖြစ် convert
const chars = [...'hello']; // ['h', 'e', 'l', 'l', 'o']
console.log(chars);

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Spread သုံးသင့်တဲ့ အခြေအနေ:
//   - array copy/merge
//   - object copy/merge
//   - function argument pass
//   - immutable update (React state)
//
// Rest vs Spread:
//   Rest  → collect  → ...rest in function param
//   Spread → expand  → ...arr in function call or array literal

console.log('\nRest collects, Spread expands — same syntax (...), different context');
