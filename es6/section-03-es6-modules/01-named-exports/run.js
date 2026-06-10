/**
 * Topic 1: Named Export & Import
 *
 * ES6 Module system:
 *   - code ကို file (module) တစ်ခုချင်းစီ ခွဲထားပြီး share
 *   - export → module 밖က သုံးခွင့် ပေးတယ်
 *   - import → အခြား module က export လုပ်ထားတာ ယူသုံး
 *
 * Named export/import:
 *   - export: export const x, export function fn, export { a, b }
 *   - import: import { x, fn } from './file.js'
 *   - import လုပ်တဲ့အခါ {} ထဲ name တိကျရမယ်
 *
 * Reference: https://www.javascripttutorial.net/javascript-export/
 * Run: node es6/section-03-es6-modules/01-named-exports/run.js
 */

// ============================================================
// 1. Named import — export လုပ်ထားတဲ့ name တိကျစွာ import
// ============================================================
import { PI, add, subtract, multiply, divide, Calculator } from './math.js';

console.log('=== 1. Named imports from math.js ===');
console.log('PI:', PI);
console.log('add(5, 3):', add(5, 3));
console.log('subtract(10, 4):', subtract(10, 4));
console.log('multiply(3, 7):', multiply(3, 7));
console.log('divide(20, 4):', divide(20, 4));

// ============================================================
// 2. Import လုပ်ထားတဲ့ class သုံးခြင်း
// ============================================================
console.log('\n=== 2. Imported class ===');

const calc = new Calculator(10);
calc.add(5).add(3);
console.log('Calculator result:', calc.result()); // 18

// ============================================================
// 3. ES5 vs ES6 module — global pollution vs encapsulation
// ============================================================
console.log('\n=== 3. Module encapsulation ===');

// math.js ထဲ secret variable က export မလုပ်ထားလို့ access မရ
// console.log(secret); // ReferenceError — module scope

// ES5: script tag တွေက global scope share — variable name clash ဖြစ်နိုင်
// ES6: module scope — export လုပ်ထားတာသာ အပြင်ဘက်က access ရ

// ============================================================
// 4. Import path rule
// ============================================================
console.log('\n=== 4. Import path notes ===');

// relative path — ./ or ../ သုံးရမယ် (same folder or parent)
// file extension .js ထည့်သင့်တယ် (Node.js ES modules)
//
// import { add } from './math.js';     ✓ relative
// import { add } from 'math';          ✗ bare module (npm package မဟုတ်ရင် error)

// ============================================================
// 5. Module run once — cache behavior
// ============================================================
console.log('\n=== 5. Module evaluated once ===');

// module က import ပထမဆုံးအကြိမ်မှာ evaluate — နောက်ထပ် import တွေမှာ cache သုံး
// side effect (console.log in module top level) က တစ်ခါပဲ run

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Named export syntax:
//   export const x = 1;
//   export function fn() {}
//   export { a, b };
//   export { fn as alias };
//
// Named import syntax:
//   import { x, fn } from './module.js';
//
// Rule: import name === export name (rename မလုပ်ရင်)
