# Section 4 — ES6 Classes

Reference: [JavaScript Tutorial - ES6 Section 4](https://www.javascripttutorial.net/es6/)

## Topics (အစဉ်လိုက် လေ့လာပါ)

| # | File | Topic | Tutorial Link |
|---|------|-------|---------------|
| 1 | `01-class.js` | Class declaration | [Class](https://www.javascripttutorial.net/es6/javascript-class/) |
| 2 | `02-getters-setters.js` | Getters & Setters | [Getters & Setters](https://www.javascripttutorial.net/es6/javascript-getters-and-setters/) |
| 3 | `03-class-expression.js` | Class expression | [Class Expression](https://www.javascripttutorial.net/es6/javascript-class-expression/) |
| 4 | `04-static-methods.js` | Static methods | [Static Methods](https://www.javascripttutorial.net/es6/javascript-static-methods/) |
| 5 | `05-static-properties.js` | Static properties | [Static Properties](https://www.javascripttutorial.net/es6/javascript-static-properties/) |
| 6 | `06-computed-property.js` | Computed property | [Computed Property](https://www.javascripttutorial.net/es6/javascript-computed-property/) |
| 7 | `07-inheritance.js` | Inheritance (`extends`, `super`) | [Inheritance](https://www.javascripttutorial.net/es6/javascript-inheritance/) |
| 8 | `08-new-target.js` | `new.target` metaproperty | [new.target](https://www.javascripttutorial.net/es6/javascript-new-target/) |

## Run examples

```bash
# project root မှ
node es6/section-04-es6-classes/01-class.js
node es6/section-04-es6-classes/02-getters-setters.js
node es6/section-04-es6-classes/03-class-expression.js
node es6/section-04-es6-classes/04-static-methods.js
node es6/section-04-es6-classes/05-static-properties.js
node es6/section-04-es6-classes/06-computed-property.js
node es6/section-04-es6-classes/07-inheritance.js
node es6/section-04-es6-classes/08-new-target.js
```

## Exercises

Topic 8 ခု ပြီးရင် `exercises/` folder ထဲက file ကို ကိုယ်တိုင်ဖြည့်ပါ။

## Key takeaway (Section 4)

- ES6 class = syntactic sugar over prototypal inheritance (class က function special form)
- `constructor()` — instance create လုပ်တဲ့အခါ auto call
- `get` / `set` — property access လုပ်သလို method call
- Class expression — `const Person = class { }` (anonymous or named)
- Static method/property — class ပေါ်မှာ တိုက်ရိုက် (`ClassName.method()`)
- Computed property — `[expression]` နဲ့ method/property name dynamic
- `extends` — parent class inherit, `super()` — parent constructor/method call
- `new.target` — constructor က `new` နဲ့ ခေါ်တာလား စစ်ဆေး

## Prerequisites

Section 1 (object literals, `this`) နဲ့ Section 3 (modules) ကို အရင် လေ့လာထားပါ။
