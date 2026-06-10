/**
 * Topic 3: Import Patterns — namespace, rename, side-effect
 *
 * Import patterns:
 *   1. Namespace import — import * as name from './module.js'
 *   2. Rename import — import { x as y } from './module.js'
 *   3. Side-effect import — import './module.js' (value ယူမယ်, run ပဲ လို)
 *   4. Dynamic import — import('./module.js') (async, lazy load)
 *
 * Reference: https://www.javascripttutorial.net/javascript-import/
 * Run: node es6/section-03-es6-modules/03-import-patterns/run.js
 */

// ============================================================
// 1. Namespace import — export အားလုံး object တစ်ခုထဲ
// ============================================================
import * as helpers from './helpers.js';

console.log('=== 1. Namespace import ===');
console.log('VERSION:', helpers.VERSION);
console.log('formatPrice(99.5):', helpers.formatPrice(99.5));
console.log('formatDate:', helpers.formatDate(new Date()));

// default export က namespace.default နဲ့ access
helpers.default('Namespace import works!');

// ============================================================
// 2. Rename import — name clash ရှောင်ခြင်း
// ============================================================
import { formatPrice as priceFormatter, formatDate as dateFormatter } from './helpers.js';

console.log('\n=== 2. Rename import (as) ===');
console.log('priceFormatter(150):', priceFormatter(150));
console.log('dateFormatter:', dateFormatter(new Date()));

// module 2 ခုက same name export — rename နဲ့ clash ရှား
// import { formatPrice as productPrice } from './product.js';
// import { formatPrice as servicePrice } from './service.js';

// ============================================================
// 3. Default + named — destructuring style
// ============================================================
import logger, { VERSION, formatPrice } from './helpers.js';

console.log('\n=== 3. Mixed default and named ===');
console.log('VERSION:', VERSION);
console.log('formatPrice(25):', formatPrice(25));
logger('Mixed import works!');

// ============================================================
// 4. Side-effect import — value import မလို, module run ပဲ လို
// ============================================================
console.log('\n=== 4. Side-effect import ===');

// import './setup.js' — setup code run (polyfill, global config)
// value assign မလုပ်ဘူး — module evaluate ဖြစ်ဖို့သာ import
import './helpers.js'; // already imported above — cached, won't re-run top-level

console.log('Side-effect: module loadedAt was set when first imported');

// ============================================================
// 5. Dynamic import — runtime မှာ async load (code splitting)
// ============================================================
console.log('\n=== 5. Dynamic import ===');

// static import — file top level, load time မှာ resolve
// dynamic import() — Promise return, runtime/lazy load
const dynamicHelpers = await import('./helpers.js');
console.log('Dynamic VERSION:', dynamicHelpers.VERSION);
dynamicHelpers.default('Dynamic import works!');

// use case: route-based lazy loading, conditional module load

// ============================================================
// 6. import/export restrictions
// ============================================================
console.log('\n=== 6. Import rules ===');

// import/export က file top level မှာသာ — if block, function ထဲ မရ
// if (true) { import x from './x.js'; } // SyntaxError
//
// import/export က hoisted — module graph build အတွက် parse time မှာ resolve
//
// Browser: script tag မှာ type="module" လို
// <script type="module" src="app.js"></script>

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// import * as mod from './file.js'     — namespace
// import { x as y } from './file.js'   — rename
// import './file.js'                   — side effect only
// await import('./file.js')            — dynamic (async)
