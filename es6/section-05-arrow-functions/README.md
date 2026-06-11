# Section 5 — Arrow Functions

Reference: [JavaScript Tutorial - ES6 Section 5](https://www.javascripttutorial.net/es6/)

## Topics (အစဉ်လိုက် လေ့လာပါ)

| # | File | Topic | Tutorial Link |
|---|------|-------|---------------|
| 1 | `01-arrow-functions.js` | Arrow functions (`=>`) | [Arrow Functions](https://www.javascripttutorial.net/es6/javascript-arrow-function/) |
| 2 | `02-when-not-to-use.js` | When you should not use | [When Not To Use](https://www.javascripttutorial.net/when-you-should-not-use-arrow-functions/) |

## Run examples

```bash
# project root မှ
node es6/section-05-arrow-functions/01-arrow-functions.js
node es6/section-05-arrow-functions/02-when-not-to-use.js
```

## Exercises

Topic 2 ခု ပြီးရင် `exercises/` folder ထဲက file ကို ကိုယ်တိုင်ဖြည့်ပါ။

## Key takeaway (Section 5)

- Arrow function syntax: `(a, b) => a + b` — shorter than function expression
- Single param — parentheses optional: `x => x * 2`
- No params — parentheses required: `() => value`
- Expression body — implicit return; block body — explicit `return`
- Object literal return — `() => ({ key: value })` (parentheses လို)
- Lexical `this` — outer scope ရဲ့ `this` inherit (own `this` မရှိ)
- No `arguments`, no `prototype`, `new` နဲ့ call လို့မရ
- Use for: callbacks, map/filter, closures
- Avoid for: object methods, prototype methods, event handlers (need `this`), `arguments` user

## Prerequisites

Section 1 (functions, rest/spread) နဲ့ Section 4 (classes, `this`) ကို အရင် လေ့လာထားပါ။
