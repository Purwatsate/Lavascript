# Section 8 — Promises

Reference: [JavaScript Tutorial - ES6 Section 8](https://www.javascripttutorial.net/es6/)

## Topics (အစဉ်လိုက် လေ့လာပါ)

| # | File | Topic | Tutorial Link |
|---|------|-------|---------------|
| 1 | `01-promises.js` | Promise basics — create & consume | [Promises](https://www.javascripttutorial.net/es6/javascript-promises/) |
| 2 | `02-promise-chaining.js` | Promise chaining | [Promise Chaining](https://www.javascripttutorial.net/promise-chaining/) |
| 3 | `03-promise-composition.js` | `Promise.all()` & `Promise.race()` | [Promise.all](https://www.javascripttutorial.net/javascript-promise-all/) / [Promise.race](https://www.javascripttutorial.net/javascript-promise-race/) |
| 4 | `04-promise-error-handling.js` | Error handling | [Promise Error Handling](https://www.javascripttutorial.net/promise-error-handling/) |

## Run examples

```bash
# project root မှ
node es6/section-08-promises/01-promises.js
node es6/section-08-promises/02-promise-chaining.js
node es6/section-08-promises/03-promise-composition.js
node es6/section-08-promises/04-promise-error-handling.js
```

## Exercises

Topic 4 ခု ပြီးရင် `exercises/` folder ထဲက file ကို ကိုယ်တိုင်ဖြည့်ပါ။

---

## Mental Model — Promise ကို ဘယ်လို ထင်ရမလဲ?

Promise = **"အနာဂတ်မှာ ရလာမယ့် ရult"** ကို ကိုယ်စားပြုတဲ့ object

```
         pending          fulfilled (value)
    [  ခဏစောင့်နေတယ်  ] ──────────────► ✓ အောင်မြင်
            │
            └──────────────────────────► ✗ reject (error)
                        rejected
```

**Real-life analogy:**
- Restaurant order slip — "မှာထားပြီး" (pending) → "ပြီးပြီ" (fulfilled) or "မရနိုင်ပါ" (rejected)
- Callback = phone number ပေးပြီး ခေါ်ပါမယ်
- Promise = order slip number — `.then()` နဲ့ result ကြည့်လို့ရ

---

## Key takeaway (Section 8)

| Concept | Meaning |
|---------|---------|
| `new Promise((resolve, reject) => {})` | async operation wrap — executor function |
| `resolve(value)` | pending → fulfilled |
| `reject(error)` | pending → rejected |
| `.then(onFulfilled)` | success ဖြစ်ရင် run |
| `.catch(onRejected)` | fail ဖြစ်ရင် run |
| `.finally(onFinally)` | success/fail မခွဲ — cleanup |
| Chaining | `.then().then()` — step-by-step async sequence |
| `Promise.all([p1, p2])` | အားလုံး success — results array; တစ်ခု fail — immediately reject |
| `Promise.race([p1, p2])` | ပထမဆုံး settle ဖြစ်တာ win |

## Prerequisites

Section 5 (arrow functions) နဲ့ callback/async concept အခြေခံ သိထားပါ။

## Common mistakes

1. **Sync code လို promise result သုံး** — `const data = getData();` မရ — `.then()` or `await` လို
2. **`.then()` ထဲ return မလုပ်** — chain မှာ value pass မသွား
3. **`.catch()` မထား** — unhandled rejection → program crash
4. **Multiple `.then()` on same promise ≠ chaining** — parallel handlers, not sequence
