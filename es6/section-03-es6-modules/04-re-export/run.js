/**
 * Topic 4: Re-export — barrel file pattern
 *
 * Re-export syntax:
 *   export { name } from './module.js';
 *   export { default as Name } from './module.js';
 *
 * Barrel file (index.js):
 *   - folder ထဲ module တွေကို တစ်နေရာတည်းက export
 *   - consumer: import { add, multiply } from './math/index.js'
 *
 * Reference: https://www.javascripttutorial.net/javascript-export/
 * Run: node es6/section-03-es6-modules/04-re-export/run.js
 */

import { add, multiply, mul, Calculator } from './index.js';

console.log('=== 1. Re-exported named functions ===');
console.log('add(10, 5):', add(10, 5));           // 15
console.log('multiply(4, 3):', multiply(4, 3)); // 12
console.log('mul(6, 7):', mul(6, 7));           // 42 (renamed re-export)

// ============================================================
// 2. Re-exported default as named
// ============================================================
console.log('\n=== 2. Re-exported default class ===');

const calc = new Calculator(100);
console.log('Calculator value:', calc.value); // 100
calc.reset();
console.log('After reset:', calc.value);      // 0

// ============================================================
// 3. Barrel file ရဲ့ benefit
// ============================================================
console.log('\n=== 3. Barrel file benefits ===');

// Without barrel:
//   import { add } from './04-re-export/add.js';
//   import { multiply } from './04-re-export/multiply.js';
//
// With barrel (index.js):
//   import { add, multiply } from './04-re-export/index.js';
//
// Consumer code ပိုရှင်း — internal file structure ပြောင်းလို့ရ (API stable)

// ============================================================
// 4. Re-export all (careful use)
// ============================================================
console.log('\n=== 4. Re-export notes ===');

// export * from './module.js' — named exports အားလုံး re-export
// default export က export * နဲ့ မပါ
//
// export * as math from './math.js' — namespace အဖြစ် re-export

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// export { fn } from './a.js'              — re-export named
// export { default as X } from './b.js'    — re-export default as named
// export * from './c.js'                   — re-export all named
//
// index.js barrel pattern — folder public API
