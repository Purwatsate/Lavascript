# Section 2 — Destructuring

Reference: [JavaScript Tutorial - ES6 Section 2](https://www.javascripttutorial.net/es6/)

## Topics (အစဉ်လိုက် လေ့လာပါ)

| # | File | Topic | Tutorial Link |
|---|------|-------|---------------|
| 1 | `01-array-destructuring.js` | Array Destructuring | [Array Destructuring](https://www.javascripttutorial.net/es6/destructuring/) |
| 2 | `02-object-destructuring.js` | Object Destructuring | [Object Destructuring](https://www.javascripttutorial.net/es6/javascript-object-destructuring/) |

## Run examples

```bash
# project root မှ
node es6/section-02-destructuring/01-array-destructuring.js
node es6/section-02-destructuring/02-object-destructuring.js
```

## Exercises

Topic 2 ခု ပြီးရင် `exercises/` folder ထဲက file ကို ကိုယ်တိုင်ဖြည့်ပါ။

## Key takeaway (Section 2)

- Destructuring — array/object element/property တွေကို variable တွေထဲ တိုက်ရိုက် assign
- Array: `let [a, b] = arr` — position အရ assign
- Object: `let { name, age } = obj` — property name အရ assign
- Default value: `let [a = 1] = []` or `let { x = 0 } = obj`
- Rest: `let [first, ...rest] = arr` or `let { name, ...other } = obj`
- Nested destructuring — array/object ထဲ nested structure ခွဲထုတ်
- Swap variables: `[a, b] = [b, a]`
- Function parameter destructuring — React မှာ အများကြီး သုံး

## Prerequisites

Section 1 (let, const, rest, spread) ကို အရင် လေ့လာထားပါ။
