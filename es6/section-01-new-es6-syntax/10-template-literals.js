/**
 * Topic 10: Template Literals — string ထဲ variable/expression ထည့်ခြင်း
 *
 * Template literal syntax: backtick (`) နဲ့ string ရေး
 *   - ${expression} — variable/expression ထည့်နိုင်တယ်
 *   - multiline string — newline တိုက်ရိုက် ရ
 *   - tagged template — function နဲ့ string process
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-template-literals/
 * Run: node es6/section-01-new-es6-syntax/10-template-literals.js
 */

// ============================================================
// 1. Basic Interpolation — variable string ထဲ ထည့်ခြင်း
// ============================================================
console.log('=== 1. Basic interpolation ===');

const name = 'Alice';

// backtick (`) သုံး — single/double quote မဟုတ်
// ${name} — variable value ထည့်
const greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"

// ES5 equivalent: 'Hello, ' + name + '!'

// ============================================================
// 2. Expression inside ${} — calculation/expression ထည့်နိုင်တယ်
// ============================================================
console.log('\n=== 2. Expression inside ${} ===');

const a = 5;
const b = 3;

// ${} ထဲမှာ expression, function call, ternary — ဘာမဆို ထည့်လို့ရ
console.log(`${a} + ${b} = ${a + b}`); // "5 + 3 = 8"

// ============================================================
// 3. Multiline Strings — newline တိုက်ရိုက် ရ
// ============================================================
console.log('\n=== 3. Multiline strings ===');

// backtick string ထဲ newline တိုက်ရိုက် ရ — \n မလို
const html = `
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
`;
console.log(html);

// ES5 equivalent: '<div>\n  <h1>Title</h1>\n  ...' — \n manually ထည့်ရ

// ============================================================
// 4. Tagged Template Literals — function နဲ့ string process
// ============================================================
console.log('\n=== 4. Tagged template literals ===');

// tag function — template literal ကို process လုပ်တဲ့ function
// parameter 1: string parts array, parameter 2+: interpolated values
function highlight(strings, ...values) {
  // strings — ${} နဲ့ ခွဲထားတဲ့ string part တွေ
  // values — ${} ထဲ expression result တွေ
  return strings.reduce((result, str, i) => {
    const value = values[i] !== undefined ? `[${values[i]}]` : '';
    return result + str + value;
  }, '');
}

const product = 'Laptop';
const price = 999;

// highlight`...` — tagged template call
console.log(highlight`Product: ${product}, Price: $${price}`);
// "Product: [Laptop], Price: $[999]"

// use case: i18n, HTML escape, styled console output

// ============================================================
// 5. Nested Templates — template ထဲ template
// ============================================================
console.log('\n=== 5. Nested templates ===');

const items = ['apple', 'banana', 'orange'];

// template ထဲ ${} ထဲ template — dynamic HTML/list generate
const list = `
  <ul>
    ${items.map((item) => `<li>${item}</li>`).join('\n    ')}
  </ul>
`;
console.log(list);

// React JSX, email template, report generate မှာ အများကြီး သုံးတယ်

// ============================================================
// 6. Raw Strings — String.raw() နဲ့ escape character မပြောင်း
// ============================================================
console.log('\n=== 6. Raw strings ===');

// String.raw — backslash escape မလုပ်ဘူး (Windows path အတွက် useful)
const path = String.raw`C:\Users\name\Documents`;
console.log('raw path:', path); // C:\Users\name\Documents (\\ မဖြစ်ဘူး)

// ============================================================
// 7. ES5 equivalent (purana နည်းလမ်း)
// ============================================================
console.log('\n=== 7. ES5 equivalent (for comparison) ===');

const nameES5 = 'Bob';
// ES5 — + operator နဲ့ string concatenate
const msgES5 = 'Hello, ' + nameES5 + '!\nWelcome.';
console.log(msgES5);

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Template literal သုံးသင့်တဲ့ အခြေအနေ:
//   - variable/expression string ထဲ ထည့်
//   - multiline string
//   - dynamic HTML/JSON generate
//   - string formatting
//
// သတိထား:
//   - backtick (`) သုံး — single quote ('), double quote (") မဟုတ်
//   - ${} ထဲ expression — variable, calculation, function call
//   - tagged template — advanced, i18n/library မှာ သုံး

console.log('\nUse backticks (`) not single/double quotes for template literals');
