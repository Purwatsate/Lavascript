/**
 * Topic 2: Default Export & Import
 *
 * Default export:
 *   - module တစ်ခုမှာ default export တစ်ခုသာ
 *   - import လုပ်တဲ့အခါ {} မလို — name ကို freely choose
 *   - export default value / function / class / object
 *
 * Named + Default ပေါင်းသုံး:
 *   import greet, { APP_NAME } from './greet.js';
 *
 * Reference: https://www.javascripttutorial.net/javascript-export/
 * Run: node es6/section-03-es6-modules/02-default-export/run.js
 */

// ============================================================
// 1. Default import — {} မလို, name က freely choose
// ============================================================
import sayHello from './greet.js';

console.log('=== 1. Default import ===');
console.log(sayHello('Alice')); // Hello, Alice!
console.log(sayHello());        // Hello, Guest!

// import name က export name နဲ့ မတူလို့ရ
// greet.js မှာ export default function greet
// ဒီ file မှာ sayHello လို့ import — OK

// ============================================================
// 2. Default + Named import ပေါင်းသုံး
// ============================================================
import greetFn, { APP_NAME } from './greet.js';

console.log('\n=== 2. Default + named import ===');
console.log('APP_NAME:', APP_NAME);
console.log(greetFn('Bob'));

// Syntax: default import က ရှေ့မှာ, named imports က {} ထဲ
// import { APP_NAME }, greet from './greet.js'; // ✗ wrong order

// ============================================================
// 3. Default export object import
// ============================================================
import appConfig from './config.js';

console.log('\n=== 3. Default export object ===');
console.log('theme:', appConfig.theme);
console.log('language:', appConfig.language);
console.log('version:', appConfig.version);

// ============================================================
// 4. Default vs Named — ဘယ်အခါ ဘာသုံး
// ============================================================
console.log('\n=== 4. When to use default vs named ===');

// Default export သုံးသင့်တဲ့ အခြေအနေ:
//   - module ရဲ့ main purpose/functionality တစ်ခု (React component, main class)
//   - import name က context ပေါ် depend (rename လွယ်)
//
// Named export သုံးသင့်တဲ့ အခြေအနေ:
//   - utility function/value အများကြီး export
//   - name consistency လိုချင်တဲ့ library API
//   - tree-shaking (unused export ဖယ်ရလွယ်)

// ============================================================
// 5. Common mistakes
// ============================================================
console.log('\n=== 5. Common mistakes ===');

// ✗ import { greet } from './greet.js'  — default ကို named import လုပ်မိ
// ✓ import greet from './greet.js'
//
// ✗ import sayHello from './math.js'      — named only module မှာ default import
// ✓ import { add } from './math.js'

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Export:  export default value;
// Import:  import name from './module.js';
// Mixed:   import defaultExport, { named1, named2 } from './module.js';
