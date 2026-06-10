/**
 * math.js — Named Exports Module
 *
 * Named export: value/function/class တစ်ခုချင်းစီကို နာမည် attach လုပ်ပြီး export
 * Module တစ်ခုမှာ named export အများကြီး ရှိနိုင်တယ်
 *
 * Export နည်းလမ်း 2 မျိုး:
 *   1. export inline — declaration ရှေ့မှာ export ထား
 *   2. export list — file အောက်ဆုံးမှာ export { ... }
 */

// export inline — const variable export
export const PI = 3.14159;

// export inline — function export
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// export inline — class export
export class Calculator {
  constructor(initial = 0) {
    this.value = initial;
  }

  add(n) {
    this.value += n;
    return this;
  }

  result() {
    return this.value;
  }
}

// local variable — export မလုပ်ထား (module အပြင်ဘက်က access မရ)
const secret = 'internal only';

// export list — နောက်မှ export (declaration နဲ့ ခွဲထားချင်ရင်)
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

export { multiply, divide };

// export list + rename — divide ကို div အဖြစ် export
// export { divide as div };
