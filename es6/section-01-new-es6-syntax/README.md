# Section 1 — New ES6 Syntax

Reference: [JavaScript Tutorial - ES6 Section 1](https://www.javascripttutorial.net/es6/)

## Topics (အစဉ်လိုက် လေ့လာပါ)

| # | File | Topic | Tutorial Link |
|---|------|-------|---------------|
| 1 | `01-let.js` | `let` — block-scoped variables | [let](https://www.javascripttutorial.net/es6/javascript-let/) |
| 2 | `02-let-vs-var.js` | `let` vs `var` | [let vs var](https://www.javascripttutorial.net/es6/javascript-let-vs-var/) |
| 3 | `03-const.js` | `const` — constants | [const](https://www.javascripttutorial.net/es6/javascript-const/) |
| 4 | `04-default-parameters.js` | Default function parameters | [Default Parameters](https://www.javascripttutorial.net/es6/javascript-default-parameters/) |
| 5 | `05-rest-parameter.js` | Rest parameter (`...`) | [Rest Parameter](https://www.javascripttutorial.net/es6/javascript-rest-parameter/) |
| 6 | `06-spread-operator.js` | Spread operator (`...`) | [Spread Operator](https://www.javascripttutorial.net/es6/javascript-spread/) |
| 7 | `07-object-literal-extensions.js` | Object literal syntax extensions | [Object Literal](https://www.javascripttutorial.net/es6/enhanced-object-literals/) |
| 8 | `08-for-of.js` | `for...of` loop | [for...of](https://www.javascripttutorial.net/es6/javascript-for-of/) |
| 9 | `09-octal-binary-literals.js` | Octal and binary literals | [Octal & Binary](https://www.javascripttutorial.net/es6/octal-and-binary-literals/) |
| 10 | `10-template-literals.js` | Template literals | [Template Literals](https://www.javascripttutorial.net/es6/javascript-template-literals/) |

## Run examples

```bash
# project root မှ
node es6/section-01-new-es6-syntax/01-let.js
node es6/section-01-new-es6-syntax/02-let-vs-var.js
# ... အစဉ်လိုက် ဆက်လုပ်ပါ
```

## Exercises

Topic တစ်ခုပြီးတိုင်း `exercises/` folder ထဲက file ကို ကိုယ်တိုင်ဖြည့်ပါ။

## Key takeaway (Section 1)

- `var` → function-scoped, hoisting ရှိတယ်
- `let` / `const` → block-scoped, temporal dead zone ရှိတယ်
- `const` → reassign မလုပ်ရ၊ object/array property/content ပြောင်းလို့ရ
- `...` → rest (collect) vs spread (expand)
- Template literals → backtick `` ` `` နဲ့ `${variable}`
