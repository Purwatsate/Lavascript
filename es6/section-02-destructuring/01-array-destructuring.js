/**
 * Topic 1: Array Destructuring — array element တွေကို variable တွေထဲ assign လုပ်ခြင်း
 *
 * ES6 Destructuring Assignment:
 *   - array element တွေကို position အရ variable တွေထဲ တိုက်ရိုက် assign
 *   - function က array return လုပ်ရင် element ခွဲထုတ်ဖို့ အဆင်ပြေ
 *
 * Syntax: let [var1, var2, var3] = array;
 *
 * Reference: https://www.javascripttutorial.net/es6/destructuring/
 * Run: node es6/section-02-destructuring/01-array-destructuring.js
 */

// ============================================================
// 1. Array Destructuring အခြေခံ
// ============================================================
console.log('=== 1. Basic array destructuring ===');

function getScores() {
  return [70, 80, 90];
}

// ES5 နည်းလမ်း — index နဲ့ တစ်ခုချင်း assign
let scores = getScores();
let x = scores[0];
let y = scores[1];
let z = scores[2];
console.log('ES5:', { x, y, z });

// ES6 destructuring — line တစ်ကြောင်းနဲ့ assign
let [a, b, c] = getScores();
console.log('ES6:', { a, b, c }); // { a: 70, b: 80, c: 90 }

// ============================================================
// 2. Element မလုံလောက်ရင် undefined
// ============================================================
console.log('\n=== 2. Missing elements become undefined ===');

function getTwoScores() {
  return [70, 80];
}

let [p, q, r] = getTwoScores();
console.log({ p, q, r }); // { p: 70, q: 80, r: undefined }

// element အများကြီး return လုပ်ရင် ကျန်တွေ discard
function getFourScores() {
  return [70, 80, 90, 100];
}

let [s, t, u] = getFourScores();
console.log({ s, t, u }); // { s: 70, t: 80, u: 90 } — 100 discard

// ============================================================
// 3. Element skip လုပ်ခြင်း (comma)
// ============================================================
console.log('\n=== 3. Skip elements with comma ===');

const colors = ['red', 'green', 'blue', 'yellow'];

// element ပထမတစ်ခု skip — green နဲ့ blue သာ assign
const [, second, third] = colors;
console.log('second:', second); // green
console.log('third:', third);   // blue

// ============================================================
// 4. Rest syntax — ကျန်ရှိ element တွေ collect
// ============================================================
console.log('\n=== 4. Rest syntax ===');

function getManyScores() {
  return [70, 80, 90, 100];
}

// x, y — element 2 ခု, rest — ကျန်ရှိ element အားလုံး array အဖြစ်
let [x1, y1, ...rest] = getManyScores();
console.log({ x1, y1, rest }); // { x1: 70, y1: 80, rest: [90, 100] }

// ============================================================
// 5. Default values — undefined ဖြစ်ရင် default သုံး
// ============================================================
console.log('\n=== 5. Default values ===');

function getItems() {
  return [10, 20];
}

// element 3 ခုမြောက် မရှိ — default 0 သုံး
let [, , thirdItem = 0] = getItems();
console.log('thirdItem:', thirdItem); // 0

// element တစ်ခုသာ return — b က default 2
let m, n;
[m = 1, n = 2] = [10];
console.log('m:', m); // 10 — array ထဲ value ရှိ
console.log('n:', n); // 2 — undefined ဖြစ်လို့ default

// ============================================================
// 6. null/undefined fallback — error ကာကွယ်
// ============================================================
console.log('\n=== 6. Fallback for null return ===');

function getItemsOrNull() {
  return null;
}

// null return — destructure လုပ်မယ်ဆိုရင် error
// let [i, j] = getItemsOrNull(); // TypeError: not iterable

// || [] fallback — empty array နဲ့ destructure
let [i = 10, j = 20] = getItemsOrNull() || [];
console.log('i:', i); // 10 — default
console.log('j:', j); // 20 — default

// ============================================================
// 7. Nested array destructuring
// ============================================================
console.log('\n=== 7. Nested array destructuring ===');

function getProfile() {
  return ['John', 'Doe', ['Red', 'Green', 'Blue']];
}

// nested array — element 3 ခုမြောက် ထဲမှာ array ထပ်ရှိ
let [
  firstName,
  lastName,
  [color1, color2, color3],
] = getProfile();

console.log(firstName, lastName);       // John Doe
console.log(color1, color2, color3);    // Red Green Blue

// ============================================================
// 8. Variable swap — element 2 ခု swap (temporary variable မလို)
// ============================================================
console.log('\n=== 8. Swap variables ===');

let num1 = 10;
let num2 = 20;

[num1, num2] = [num2, num1]; // swap
console.log('num1:', num1); // 20
console.log('num2:', num2); // 10

// ============================================================
// 9. Function က multiple value return — destructuring နဲ့ ခွဲ
// ============================================================
console.log('\n=== 9. Multiple return values ===');

function stat(a, b) {
  return [a + b, (a + b) / 2, a - b];
}

let [sum, average, difference] = stat(20, 10);
console.log('sum:', sum);             // 30
console.log('average:', average);     // 15
console.log('difference:', difference); // 10

// ============================================================
// 10. Declaration နဲ့ assignment ခွဲခြားခြင်း
// ============================================================
console.log('\n=== 10. Separate declaration and assignment ===');

let alpha, beta;
[alpha, beta] = [100, 200];
console.log({ alpha, beta }); // { alpha: 100, beta: 200 }

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Array destructuring syntax:
//   let [a, b, c] = array;           — basic
//   let [, , third] = array;         — skip element
//   let [first, ...rest] = array;    — rest collect
//   let [a = 1, b = 2] = array;      — default values
//   let [a, [b, c]] = nested;        — nested
//   [a, b] = [b, a];                 — swap
//
// null/undefined array return: getItems() || []
