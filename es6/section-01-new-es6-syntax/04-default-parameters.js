/**
 * Topic 4: Default Function Parameters — function parameter default value
 *
 * ES5 မှာ parameter မပေးရင် undefined ဖြစ်တယ်
 * ES6 မှာ parameter definition ထဲမှာပဲ default value သတ်မှတ်လို့ရ
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-default-parameters/
 * Run: node es6/section-01-new-es6-syntax/04-default-parameters.js
 */

// ============================================================
// 1. Default parameter အခြေခံ
// ============================================================
console.log('=== 1. Basic default parameter ===');

// name parameter မပေးရင် 'Guest' သုံးမယ်
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet());        // argument မပေးထား → default 'Guest' → "Hello, Guest!"
console.log(greet('Alice')); // argument ပေးထား → 'Alice' → "Hello, Alice!"

// ============================================================
// 2. Parameter အများအပြား default value
// ============================================================
console.log('\n=== 2. Multiple defaults ===');

// name မပေးရင် required (default မရှိ)
// role မပေးရင် 'user', active မပေးရင် true
function createUser(name, role = 'user', active = true) {
  return { name, role, active };
}

console.log(createUser('Bob'));
// { name: 'Bob', role: 'user', active: true }

console.log(createUser('Carol', 'admin', false));
// { name: 'Carol', role: 'admin', active: false }

// ============================================================
// 3. Default value မှာ အရင် parameter တွေ သုံးလို့ရ
// ============================================================
console.log('\n=== 3. Default can use earlier parameters ===');

// b မပေးရင် a ရဲ့ value ကို default အဖြစ် သုံး
function multiply(a, b = a) {
  return a * b;
}

console.log('multiply(5):', multiply(5));       // b=5 (a နဲ့ တူ) → 5*5 = 25
console.log('multiply(5, 2):', multiply(5, 2)); // b=2 → 5*2 = 10

// ============================================================
// 4. Default value အဖြစ် function call
// ============================================================
console.log('\n=== 4. Default with function call ===');

function defaultTaxRate() {
  console.log('  calculating default tax rate...');
  return 0.1; // 10%
}

// tax မပေးရင် defaultTaxRate() function run ပြီး result သုံး
function calculatePrice(price, tax = defaultTaxRate()) {
  return price + price * tax;
}

console.log('Price:', calculatePrice(100));
// defaultTaxRate() run → tax=0.1 → 100 + 10 = 110

console.log('Price with custom tax:', calculatePrice(100, 0.05));
// tax=0.05 ပေးထား → defaultTaxRate() run မဖြစ် → 100 + 5 = 105

// ============================================================
// 5. undefined vs null — default trigger ဖြစ်မှု
// ============================================================
console.log('\n=== 5. undefined triggers default, null does not ===');

function show(value = 'default') {
  return value;
}

// undefined ပေးရင် default value သုံးမယ်
console.log('undefined:', show(undefined)); // 'default'

// null ပေးရင် null က value အဖြစ် accept — default မသုံး
console.log('null:', show(null)); // null

// ES5 equivalent မှာ falsy value (0, '', false) တွေလည်း default trigger ဖြစ်နိုင်တယ်
// ES6 default parameter က undefined ပဲ check လုပ်တယ် — 0, '', false က valid value

// ============================================================
// 6. ES5 နဲ့ compare (purana နည်းလမ်း)
// ============================================================
console.log('\n=== 6. ES5 equivalent (for comparison) ===');

function greetES5(name) {
  // ES5 မှာ function body ထဲမှာ manually check လုပ်ရတယ်
  name = name !== undefined ? name : 'Guest';
  return 'Hello, ' + name + '!';
}
console.log(greetES5()); // "Hello, Guest!"

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Default parameter သုံးသင့်တဲ့ အခြေအနေ:
//   - optional parameter ရှိတဲ့ function
//   - undefined check manually မလုပ်ချင်ရင်
//
// သတိထား:
//   - undefined ပေးမှ default trigger
//   - null, 0, '' ပေးရင် default မသုံး
//   - default expression က function call ဆိုရင် parameter မပေးမှ run
