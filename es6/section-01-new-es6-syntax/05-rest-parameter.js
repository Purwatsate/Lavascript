/**
 * Topic 5: Rest Parameter — ကျန်ရှိတဲ့ arguments တွေကို array အဖြစ် collect လုပ်ခြင်း
 *
 * Rest parameter syntax: ...parameterName
 *   - function က argument အများကြီး လက်ခံချင်တဲ့အခါ သုံး
 *   - ကျန်ရှိတဲ့ argument တွေကို real Array အဖြစ် စုထားပေးတယ်
 *   - parameter list ရဲ့ နောက်ဆုံးမှာသာ ထားလို့ရ
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-rest-parameter/
 * Run: node es6/section-01-new-es6-syntax/05-rest-parameter.js
 */

// ============================================================
// 1. Rest parameter အခြေခံ — argument တွေ collect လုပ်ခြင်း
// ============================================================
console.log('=== 1. Collect remaining arguments ===');

// ...numbers ဆိုတာ rest parameter — argument ဘယ်နှစ်ခု ပေးပေးလို့ရ
// numbers က real JavaScript Array ဖြစ်မယ်
function sum(...numbers) {
  // reduce() — array element တွေကို တစ်ခုချင်း total ထုတ်
  return numbers.reduce((total, n) => total + n, 0);
}

console.log('sum(1, 2, 3):', sum(1, 2, 3)); // 6
console.log('sum(10, 20):', sum(10, 20));   // 30
console.log('sum():', sum());               // 0 — argument မပေးရင် empty array

// ============================================================
// 2. Rest parameter က parameter list ရဲ့ နောက်ဆုံးမှာသာ
// ============================================================
console.log('\n=== 2. Rest must be last parameter ===');

// first, second က fixed parameter — rest က ကျန်ရှိတဲ့ argument တွေ
function log(first, second, ...rest) {
  console.log('first:', first);   // 'a'
  console.log('second:', second); // 'b'
  console.log('rest:', rest);     // ['c', 'd', 'e'] — ကျန်ရှိ argument 3 ခု
}
log('a', 'b', 'c', 'd', 'e');

// ...rest က parameter list ရဲ့ နောက်ဆုံးမှာသာ ထားလို့ရ
// function(a, ...rest, b) {} // SyntaxError

// ============================================================
// 3. Rest vs arguments object (ES5)
// ============================================================
console.log('\n=== 3. Rest vs arguments object ===');

function compare(a, b, ...rest) {
  // rest parameter က real Array — array method တွေ တိုက်ရိုက် သုံးလို့ရ
  console.log('rest is real Array:', Array.isArray(rest));       // true
  console.log('rest has map():', typeof rest.map === 'function'); // true

  // map() — array element တစ်ခုချင်းစီ 2 ဆ multiply
  console.log('mapped:', rest.map((x) => x * 2)); // [6, 8]
}
compare(1, 2, 3, 4);

// ES5 arguments object:
//   - array-like object (real array မဟုတ်)
//   - map(), filter() တို့ သုံးဖို့ Array.from() or slice.call() လိုတယ်
// Rest parameter က real array — ES5 arguments ထက် သုံးရလွယ်

// ============================================================
// 4. Destructuring နဲ့ rest parameter
// ============================================================
console.log('\n=== 4. Destructuring with rest ===');

// Array destructuring — element ပထမတစ်ခု head, ကျန်တွေ tail
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log('head:', head); // 1
console.log('tail:', tail); // [2, 3, 4, 5]

// Object destructuring — name property ခွဲထုတ်, ကျန်တွေ otherProps
const { name, ...otherProps } = { name: 'Alice', age: 30, city: 'Yangon' };
console.log('name:', name);               // 'Alice'
console.log('otherProps:', otherProps);   // { age: 30, city: 'Yangon' }

// ============================================================
// 5. ES5 arguments object (purana နည်းလမ်း)
// ============================================================
console.log('\n=== 5. ES5 arguments (for comparison) ===');

function sumES5() {
  // arguments — function ထဲမှာ argument အားလုံး ရနိုင်တဲ့ special object
  // real array မဟုတ်လို့ convert လုပ်ရ
  const args = Array.prototype.slice.call(arguments);
  return args.reduce((t, n) => t + n, 0);
}
console.log('ES5 sum:', sumES5(1, 2, 3)); // 6

// ============================================================
// အနှစ်ချုပ် — Rest vs Spread
// ============================================================
// Rest (...):  collect — argument/value တွေကို array/object ထဲ စုသည်
//   function sum(...nums) {}     ← function parameter
//   const [a, ...rest] = arr    ← destructuring
//
// Spread (...): expand — array/object က element/property တွေ ဖြန့်သည်
//   sum(...[1, 2, 3])           ← function call
//   const copy = [...arr]       ← array copy
//
// Syntax တူ (...), context မတူ — collect vs expand
