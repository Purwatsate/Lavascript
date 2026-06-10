# Section 3 — ES6 Modules

Reference:
- [JavaScript Export](https://www.javascripttutorial.net/javascript-export/)
- [JavaScript Import](https://www.javascripttutorial.net/javascript-import/)

## Topics (အစဉ်လိုက် လေ့လာပါ)

| # | Folder | Topic |
|---|--------|-------|
| 1 | `01-named-exports/` | Named export & import |
| 2 | `02-default-export/` | Default export & import |
| 3 | `03-import-patterns/` | Namespace, rename, side-effect import |
| 4 | `04-re-export/` | Re-export (`export ... from`) |

## Run examples

```bash
# project root မှ
node es6/section-03-es6-modules/01-named-exports/run.js
node es6/section-03-es6-modules/02-default-export/run.js
node es6/section-03-es6-modules/03-import-patterns/run.js
node es6/section-03-es6-modules/04-re-export/run.js
```

## Folder structure

```
section-03-es6-modules/
├── package.json          ← "type": "module" (ES modules enable)
├── 01-named-exports/
│   ├── math.js           ← export (ထုတ်ပေးတဲ့ module)
│   └── run.js            ← import (သုံးတဲ့ file)
├── 02-default-export/
│   ├── greet.js
│   └── run.js
...
```

## Key takeaway (Section 3)

- Module = file တစ်ခု — `export` / `import` နဲ့ code share
- Named export: `export const x`, `export function fn` — import `{ x, fn }`
- Default export: `export default value` — module တစ်ခုမှာ default တစ်ခုသာ
- Default import: `import name from './file.js'`
- Namespace: `import * as mod from './file.js'`
- Rename: `import { x as y } from './file.js'`
- Re-export: `export { fn } from './other.js'`
- Browser: `<script type="module" src="app.js">`
- Node.js: `package.json` ထဲ `"type": "module"` or `.mjs` extension

## Prerequisites

Section 1, Section 2 ကို အရင် လေ့လာထားပါ။

## Exercises

Topic 4 ခု ပြီးရင် `exercises/` folder ထဲက file ကို ကိုယ်တိုင်ဖြည့်ပါ။
