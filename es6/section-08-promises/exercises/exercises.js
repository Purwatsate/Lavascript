/**
 * Section 8 Exercises — Promises လေ့ကျင့်ခန်း
 *
 * အောက်ပါ function 5 ခုကို Promise syntax သုံးပြီး implement လုပ်ပါ
 * ဖြေရှင်းနည်း: exercises/SOLUTIONS.md (ကိုယ်တိုင်မရေးခင် မကြည့်ပါနဲ့)
 *
 * Run: node es6/section-08-promises/exercises/exercises.js
 */

// ============================================================
// Exercise 1: delay — basic Promise wrapper
// ============================================================
// ms milliseconds စောင့်ပြီး value resolve လုပ်တဲ့ Promise return
//
// Example:
//   await delay(100, 'hello') // 'hello' (after 100ms)
//
// Hint: return new Promise((resolve) => setTimeout(() => resolve(value), ms))
function delay(ms, value) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 2: fetchNumber — resolve or reject
// ============================================================
// id positive integer ဆိုရင် { id, value: id * 10 } resolve
// id <= 0 ဆိုရင် Error('Invalid id') reject
// 50ms delay simulate
//
// Example:
//   await fetchNumber(3)  // { id: 3, value: 30 }
//   await fetchNumber(0)  // rejects
//
// Hint: new Promise with setTimeout, if/else resolve/reject
function fetchNumber(id) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 3: doubleThenAdd — promise chaining
// ============================================================
// number promise return — chain: double → add 10
//
// Example:
//   await doubleThenAdd(delay(10, 5)) // (5*2)+10 = 20
//
// Hint: return promise.then(n => n*2).then(n => n+10)
function doubleThenAdd(promise) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 4: fetchAllProducts — Promise.all
// ============================================================
// ids array ပေးရင် product object array return
// product = { id, name: `Product-${id}` }
// fetchProduct(id) — 30ms delay per id
//
// Example:
//   await fetchAllProducts([1, 2, 3])
//   // [{ id:1, name:'Product-1' }, ...]
//
// Hint: Promise.all(ids.map(id => fetchProduct(id)))
function fetchProduct(id) {
  return delay(30, { id, name: `Product-${id}` });
}

function fetchAllProducts(ids) {
  // YOUR CODE HERE
}

// ============================================================
// Exercise 5: fetchWithTimeout — Promise.race
// ============================================================
// fetchFn() promise + timeoutMs ပေးရင်
// fetchFn ပြီးရင် result return, timeout ကျော်ရင် Error('Timeout') throw
//
// Example:
//   await fetchWithTimeout(() => delay(50, 'data'), 200) // 'data'
//   await fetchWithTimeout(() => delay(300, 'data'), 100) // Error Timeout
//
// Hint: Promise.race([fetchFn(), delay(timeoutMs).then(() => { throw ... })])
function fetchWithTimeout(fetchFn, timeoutMs) {
  // YOUR CODE HERE
}

// ============================================================
// Tests — implement ပြီးရင် uncomment/run
// ============================================================
async function runTests() {
  const d = await delay(50, 'hello');
  console.assert(d === 'hello', 'delay');

  const num = await fetchNumber(3);
  console.assert(num.value === 30, 'fetchNumber success');

  let rejected = false;
  try {
    await fetchNumber(0);
  } catch (e) {
    rejected = e.message === 'Invalid id';
  }
  console.assert(rejected, 'fetchNumber reject');

  const chained = await doubleThenAdd(delay(10, 5));
  console.assert(chained === 20, 'doubleThenAdd');

  const products = await fetchAllProducts([1, 2]);
  console.assert(products.length === 2 && products[0].name === 'Product-1', 'fetchAllProducts');

  const fast = await fetchWithTimeout(() => delay(50, 'data'), 200);
  console.assert(fast === 'data', 'fetchWithTimeout success');

  let timedOut = false;
  try {
    await fetchWithTimeout(() => delay(200, 'data'), 50);
  } catch (e) {
    timedOut = e.message === 'Timeout';
  }
  console.assert(timedOut, 'fetchWithTimeout timeout');

  console.log('All exercises passed!');
}

// Implement ပြီးရင် uncomment လုပ်ပါ
// runTests();
