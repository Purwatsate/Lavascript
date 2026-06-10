/**
 * Topic 2: let vs var — let နဲ့ var ရဲ့ ကွာခြားချက်များ
 *
 * ES5 (purana JavaScript) မှာ var သုံးခဲ့တယ်
 * ES6 မှာ let, const ထွက်လာပြီး var ကို အစားထိုးသုံးကြတယ်
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-let-vs-var/
 * Run: node es6/section-01-new-es6-syntax/02-let-vs-var.js
 */

// ============================================================
// 1. Scope ကွာခြားချက် — var က function-scoped
// ============================================================
console.log('=== 1. Scope: var is function-scoped ===');

function varScope() {
  if (true) {
    // var x က if block ထဲမှာ declare လုပ်ထားပေမယ့်
    // var ရဲ့ scope က function တစ်ခုလုံးဖြစ်တယ် (block မဟုတ်)
    var x = 1;
  }
  // if block အပြင်ဘက်ကနေ x ကို access လုပ်လို့ရတယ်!
  console.log('var x inside function:', x); // Output: 1
}
varScope();

// ဒါက bug ဖြစ်စေနိုင်တယ် — block ထဲ declare လုပ်ထားတဲ့ variable
// block အပြင်ဘက်က access ရနေတယ်

// ============================================================
// 2. Scope — let က block-scoped
// ============================================================
console.log('\n=== 2. Scope: let is block-scoped ===');

function letScope() {
  if (true) {
    // let y က if block { } ထဲမှာသာ ရှိတယ်
    let y = 1;
    console.log('let y inside block:', y); // block ထဲ — OK
  }
  // block အပြင်ဘက်က y ကို သုံးမယ်ဆိုရင် error
  // console.log(y); // ReferenceError: y is not defined
  console.log('let y is not accessible outside block');
}
letScope();

// ============================================================
// 3. Hoisting — var ရဲ့ လုပ်ဆောင်ပုံ
// ============================================================
console.log('\n=== 3. Hoisting: var ===');

// JavaScript က code run မီ variable declaration တွေကို အပေါ်ဆုံး ရွှေ့ထားတယ် (hoisting)
// var က hoisted ဖြစ်ပြီး initial value က undefined
console.log('var hoisted:', typeof hoistedVar); // Output: "undefined" (error မဖြစ်ဘူး!)
var hoistedVar = 5;

// declare မလုပ်ခင် သုံးလို့ရနေတယ် — undefined ထွက်မယ် (bug ဖြစ်နိုင်တယ်)

// ============================================================
// 4. Hoisting — let ရဲ့ Temporal Dead Zone (TDZ)
// ============================================================
console.log('\n=== 4. Hoisting: let (Temporal Dead Zone) ===');

// let လည်း hoisted ဖြစ်တယ် — ဒါပေမယ့် declare မလုပ်ခင် သုံးလို့မရ
// declare လုပ်မယ့် line မတိုင်ခင် zone က "Temporal Dead Zone" လို့ခေါ်တယ်
// console.log(hoistedLet); // ReferenceError — TDZ ထဲမှာ သုံးလို့မရ

let hoistedLet = 5;
console.log('let after declaration:', hoistedLet); // declare ပြီးမှ သုံးလို့ရ

// TDZ က bug ကို early catch လုပ်ပေးတယ် — var လို undefined ထွက်တာထက် safe

// ============================================================
// 5. for loop + closure — var ရဲ့ famous bug
// ============================================================
console.log('\n=== 5. for loop closure problem ===');

console.log('var in loop (problem):');
for (var i = 0; i < 3; i++) {
  // var i က loop အပြင်ဘက် function scope မှာ တစ်ခုတည်း
  // setTimeout run တဲ့အချိန် loop ပြီးသွားပြီး i=3 ဖြစ်နေပြီ
  setTimeout(() => console.log('  var i =', i), 200);
}
// Output: 3, 3, 3 (မျှော်လင့်ထားတာ 0, 1, 2 မဟုတ်!)

console.log('let in loop (fixed):');
for (let j = 0; j < 3; j++) {
  // let j က iteration တစ်ခုချင်းစီမှာ binding အသစ်
  // setTimeout run တဲ့အချိန် j က 0, 1, 2 ကို မှန်ကန်စွာ hold လုပ်ထားတယ်
  setTimeout(() => console.log('  let j =', j), 400);
}
// Output: 0, 1, 2 (correct!)

// ============================================================
// 6. Redeclaration — var vs let
// ============================================================
console.log('\n=== 6. Redeclaration ===');

// var — တူညီ scope ထဲ နာမည် duplicate declare လုပ်လို့ရ
var a = 1;
var a = 2; // error မဖြစ်ဘူး
console.log('var redeclare:', a); // 2

// let — တူညီ scope ထဲ redeclare လုပ်လို့မရ
let b = 1;
// let b = 2; // SyntaxError: Identifier 'b' has already been declared

// ============================================================
// အနှစ်ချုပ် — var vs let comparison table
// ============================================================
// | Feature          | var              | let                |
// |------------------|------------------|--------------------|
// | Scope            | function-scoped  | block-scoped       |
// | Hoisting         | undefined        | TDZ (ReferenceError)|
// | Redeclare        | allowed          | not allowed        |
// | for loop closure | bug (3,3,3)      | correct (0,1,2)    |
//
// Recommendation: modern JavaScript မှာ var မသုံးတော့ပါ
//                 default → const, reassignment လိုရင် → let

console.log('\nRecommendation: use let/const instead of var in modern JS');
