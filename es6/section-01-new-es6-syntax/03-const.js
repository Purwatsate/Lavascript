/**
 * Topic 3: const — Constant (မပြောင်းလဲနိုင်တဲ့ reference) declare လုပ်ခြင်း
 *
 * const က read-only reference create လုပ်တယ်
 *   - variable ကို reassign (ပြန်ချိတ်ခြင်း) လုပ်လို့မရ
 *   - declare လုပ်တဲ့အချိန် value ပေးရမယ် (initialize လုပ်ရမယ်)
 *   - block-scoped (let လို)
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-const/
 * Run: node es6/section-01-new-es6-syntax/03-const.js
 */

// ============================================================
// 1. const အခြေခံ
// ============================================================
console.log('=== 1. Basic const ===');

// const နဲ့ constant declare — convention အရ UPPERCASE သုံးကြတယ်
const PI = 3.14159;
console.log('PI:', PI);

// reassign လုပ်မယ်ဆိုရင် TypeError
// PI = 3.14; // TypeError: Assignment to constant variable

// ============================================================
// 2. declare လုပ်တဲ့အချိန် value ပေးရမယ်
// ============================================================
console.log('\n=== 2. Must initialize ===');

// let လို value မပေးဘဲ declare လုပ်လို့မရ
// const MAX; // SyntaxError: Missing initializer in const declaration

// ============================================================
// 3. const + Object — reference fixed, properties ပြောင်းလို့ရ
// ============================================================
console.log('\n=== 3. const with objects (reference is fixed, properties can change) ===');

// const က variable ရဲ့ reference (လိပ်စာ) ကို lock လုပ်တယ်
// object/array ရဲ့ content ကို lock မလုပ်ဘူး
const person = { name: 'Alice', age: 20 };

// property value ပြောင်းလို့ရ — object content mutate လုပ်လို့ရ
person.age = 21;
person.city = 'Yangon'; // property အသစ် ထပ်ထည့်လို့လည်း ရ
console.log(person);

// object တစ်ခုလုံး reassign လုပ်လို့မရ — reference ပြောင်းလို့မရ
// person = { name: 'Bob' }; // TypeError

// ============================================================
// 4. const + Array
// ============================================================
console.log('\n=== 4. const with arrays ===');

const colors = ['red'];

// array method တွေနဲ့ element ထည့်/ဖယ်လို့ရ
colors.push('green'); // ['red', 'green']
console.log('after push:', colors);

colors.pop(); // ['red']
colors.pop(); // [] — element မရှိတော့ empty array
console.log('after pop:', colors);

// array တစ်ခုလုံး reassign လုပ်လို့မရ
// colors = []; // TypeError

// ============================================================
// 5. Object.freeze() — object content ကို freeze လုပ်ခြင်း
// ============================================================
console.log('\n=== 5. Object.freeze() for shallow immutability ===');

// Object.freeze() — object property တွေ ပြောင်းလို့/ဖယ်လို့/ထည့်လို့ မရတော့
const frozen = Object.freeze({ score: 100 });
// frozen.score = 50; // strict mode: TypeError, sloppy mode: silently fail

// freeze() က shallow — nested object ထဲက property တွေကို freeze မလုပ်ဘူး
const company = Object.freeze({
  name: 'ABC Corp',
  address: { city: 'Yangon' }, // nested object — freeze မဖြစ်သေး
});

// company.name = 'XYZ'; // TypeError — top level freeze ဖြစ်နေလို့
company.address.city = 'Mandalay'; // OK — nested object က freeze မဖြစ်သေး
console.log('nested still mutable:', company.address.city);

// ============================================================
// 6. for...of loop ထဲမှာ const
// ============================================================
console.log('\n=== 6. const in for...of (new binding each iteration) ===');

const scores = [75, 80, 95];

// for...of loop မှာ iteration တစ်ခုချင်းစီမှာ score constant အသစ် create
for (const score of scores) {
  console.log(score); // 75, 80, 95
}
// loop variable က iteration တစ်ခုချင်းစီမှာ binding အသစ် — let loop လို

// ============================================================
// 7. classic for loop (for i=0; i<n; i++) မှာ const သုံးလို့မရ
// ============================================================
console.log('\n=== 7. const in classic for loop fails ===');

// classic for loop မှာ const သုံးလို့မရ — declaration က loop မစခင် တစ်ခါပဲ evaluate
// for (const i = 0; i < 3; i++) { } // TypeError: Assignment to constant variable

// ============================================================
// အနှစ်ချုပ် — const သုံးသင့်တဲ့ rule
// ============================================================
// Rule: default အနေနဲ့ const သုံး, reassignment လိုမှ let သုံး
//
// const reassign မလုပ်ရ:
//   const x = 5; x = 10; // TypeError
//
// const object/array content ပြောင်းလို့ရ:
//   const arr = [1]; arr.push(2); // OK
//   const obj = {}; obj.key = 'val'; // OK
//
// const object/array reassign မလုပ်ရ:
//   const arr = []; arr = [1]; // TypeError

console.log('\nRule: use const by default, use let when reassignment is needed');
