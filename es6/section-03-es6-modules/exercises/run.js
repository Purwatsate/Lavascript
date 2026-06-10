/**
 * Section 3 Exercises — ES6 Modules လေ့ကျင့်ခန်း
 *
 * exercises/modules/ folder ထဲ module တွေ create လုပ်ပြီး
 * exercises/run.js ထဲ import သုံးပါ
 *
 * Run: node es6/section-03-es6-modules/exercises/run.js
 */

// ============================================================
// Exercise 1: string-utils.js
// ============================================================
// named export: capitalize(str), reverse(str)
// Example: capitalize('hello') → 'Hello', reverse('abc') → 'cba'

// ============================================================
// Exercise 2: constants.js
// ============================================================
// named export: MAX_USERS = 100, APP_VERSION = '1.0'
// default export: config object { debug: false, timeout: 5000 }

// ============================================================
// Exercise 3: index.js (barrel file)
// ============================================================
// string-utils.js နဲ့ constants.js က re-export လုပ်ပါ
// consumer က index.js တစ်ခုတည်းက import လုပ်နိုင်ရမယ်

// ============================================================
// Exercise 4: run.js (ဒီ file)
// ============================================================
// barrel file (index.js) ကနေ import လုပ်ပြီး အောက်က test run ပါ
//
// Expected output:
//   capitalize: Hello
//   reverse: olleh
//   MAX_USERS: 100
//   config.debug: false

// YOUR IMPORTS HERE

function runTests() {
  // YOUR CODE HERE — imported functions/values သုံးပြီး console.log
  console.log('Implement exercises first!');
}

runTests();
