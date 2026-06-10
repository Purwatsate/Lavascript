/**
 * index.js — Barrel file (Re-export)
 *
 * Re-export: import လုပ်ပြီး export ပြန်လုပ်တာ — consumer က folder/file တစ်ခုကပဲ import
 *
 * Pattern: "barrel file" — package/folder public API တစ်ခုတည်း
 * React project: components/index.js → export { Button, Input } from './Button.js'
 */

// re-export named — import/export မလို, တိုက်ရိုက် re-export
export { add } from './add.js';
export { multiply } from './multiply.js';

// re-export with rename
export { multiply as mul } from './multiply.js';

// re-export default — default as alias သုံး
export { default as Calculator } from './calculator.js';

// long form (equivalent):
// import { add } from './add.js';
// export { add };
