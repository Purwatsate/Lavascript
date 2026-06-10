/**
 * Topic 1: let — Block-scoped variable declaration
 * ES6 မှာ variable declare လုပ်ဖို့ `let` keyword အသစ် ထပ်ပေါ်လာတယ်
 *
 * let ရဲ့ အဓိက အချက်များ:
 *   - block scope ရှိတယ် ({ } ထဲမှာသာ အသုံးပြုနိုင်တယ်)
 *   - value ကို ပြန်ပြောင်းလို့ရတယ် (reassign)
 *   - တူညီ scope ထဲမှာ နာမည် duplicate declare လုပ်လို့မရ
 *   - declare မလုပ်ခင် သုံးလို့မရ (Temporal Dead Zone)
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-let/
 * Run: node es6/section-01-new-es6-syntax/01-let.js
 */

// ============================================================
// 1. let အခြေခံ အသုံးပြုမှု
// ============================================================
console.log('=== 1. Basic let ===');

// let နဲ့ variable တစ်ခု declare လုပ်တယ် — value က 10
let count = 10;

// let သုံးထားရင် value ကို နောက်မှ ပြန်ပြောင်းလို့ရတယ်
count = 20;
console.log(count); // Output: 20

// ============================================================
// 2. Block Scope — let ရဲ့ အရေးကြီးဆုံး feature
// ============================================================
console.log('\n=== 2. Block scope ===');

// block ဆိုတာ { } curly braces နဲ့ ဝိုင်းထားတဲ့ code area
if (true) {
  // message က if block ထဲမှာသာ ရှိတယ်
  let message = 'Hello from block';
  console.log(message); // block ထဲမှာ သုံးလို့ရတယ်
}

// block အပြင်ဘက်က message ကို သုံးမယ်ဆိုရင် ReferenceError ဖြစ်မယ်
// ဘာလို့လဲ — let က block-scoped ဖြစ်လို့ block ပြီးသွားရင် message ပျောက်သွားတယ်
// console.log(message); // ReferenceError: message is not defined

// var နဲ့ compare လုပ်ရင်:
// var သုံးရင် if block အပြင်ဘက်ကနေလည်း access ရနိုင်တယ် (function-scoped)
// let သုံးရင် block အပြင်ဘက်က access မရ — bug လျော့သွားတယ်

// ============================================================
// 3. for loop ထဲမှာ let သုံးခြင်း
// ============================================================
console.log('\n=== 3. let in for loop ===');

// setTimeout က code ကို ခဏနောက်မှ run ပေးတယ် (async)
for (let i = 0; i < 3; i++) {
  // let သုံးထားလို့ loop တစ်ခါပြည့်တိုင်း i variable အသစ် create ဖြစ်တယ်
  // ဒါကြောင့် setTimeout run တဲ့အချိန် i=0, i=1, i=2 ကို မှန်မှန်ကန်ကန် print ထုတ်မယ်
  setTimeout(() => console.log('let i =', i), 100);
}

// var သုံးရင် loop ပြီးသွားမှ i=3 ဖြစ်နေမယ် — 3, 3, 3 ထွက်မယ် (bug!)
// let သုံးရင် iteration တစ်ခုချင်းစီမှာ binding အသစ် — 0, 1, 2 ထွက်မယ် (correct!)

// ============================================================
// 4. တူညီ scope ထဲမှာ redeclare လုပ်လို့မရ
// ============================================================
console.log('\n=== 4. Cannot redeclare in same scope ===');

let name = 'Alice';
// let name = 'Bob'; // SyntaxError: Identifier 'name' has already been declared
// var နဲ့ မတူ — var က တူညီ scope ထဲ redeclare လုပ်လို့ရတယ်

// ============================================================
// 5. declare လုပ်ပြီး value မပေးချင်ရင်
// ============================================================
console.log('\n=== 5. let without initialization ===');

// let က value မပေးဘဲ declare လုပ်လို့ရတယ် (const က မရ)
let age;
console.log(age); // undefined — declare လုပ်ထားပေမယ့် value မရှိသေး

// နောက်မှ value ပေးလို့ရ
age = 25;
console.log(age); // 25

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// let သုံးသင့်တဲ့ အခြေအနေ:
//   - value ပြန်ပြောင်းရမယ့် variable
//   - loop counter
//   - if/switch block ထဲက temporary variable
//
// const vs let:
//   - value မပြောင်းတော့ဘူးဆိုရင် const သုံး
//   - value ပြန်ပြောင်းရမယ်ဆိုရင် let သုံး
//   - var က modern JS မှာ သုံးမထားတော့ပါ
