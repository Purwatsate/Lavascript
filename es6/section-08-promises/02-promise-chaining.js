/**
 * Topic 2: Promise Chaining — async steps ကို အစဉ်လိုက် ချိတ်ဆက်ခြင်း
 *
 * ============================================================
 * WHAT IS CHAINING? (Chaining ဆိုတာ ဘာလဲ?)
 * ============================================================
 *
 * Each .then() returns a NEW promise
 * Return value from .then() → next .then() receives it
 * Return another promise → next .then() waits for it
 *
 *   step1()
 *     .then(result => step2(result))   // step2 gets step1's result
 *     .then(result => step3(result))   // step3 gets step2's result
 *
 * NOT chaining (common mistake):
 *   promise.then(handlerA);
 *   promise.then(handlerB);  // both run on SAME promise, independent
 *
 * Reference: https://www.javascripttutorial.net/promise-chaining/
 * Run: node es6/section-08-promises/02-promise-chaining.js
 */

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// ============================================================
// 1. Basic chain — value passes through
// ============================================================
async function demo1() {
  console.log('=== 1. Basic chain — value flow ===');

  /*
    Flow:
      delay(50, 5)  → fulfills with 5
      .then(v => v*2) → returns 10 → new promise fulfills with 10
      .then(v => v+3) → returns 13 → new promise fulfills with 13
  */

  const result = await delay(50, 5)
    .then((value) => {
      console.log('  step 1 received:', value); // 5
      return value * 2;
    })
    .then((value) => {
      console.log('  step 2 received:', value); // 10
      return value + 3;
    })
    .then((value) => {
      console.log('  step 3 received:', value); // 13
      return value;
    });

  console.log('  final result:', result); // 13
}

// ============================================================
// 2. Return plain value vs return Promise
// ============================================================
async function demo2() {
  console.log('\n=== 2. Return value vs return Promise ===');

  // Return plain value — next then gets it immediately (wrapped in resolved promise)
  await delay(30, 1)
    .then((v) => {
      console.log('  return plain:', v);
      return v + 1; // 2
    })
    .then((v) => console.log('  got plain return:', v)); // 2

  // Return Promise — next then WAITS for that promise
  await delay(30, 1)
    .then((v) => {
      console.log('  return promise with:', v);
      return delay(50, v + 10); // returns Promise — waits 50ms
    })
    .then((v) => console.log('  got after promise resolved:', v)); // 11
}

// ============================================================
// 3. Multiple .then() on SAME promise ≠ chaining
// ============================================================
async function demo3() {
  console.log('\n=== 3. Multiple handlers vs chaining ===');

  const p = delay(50, 100);

  // These are PARALLEL handlers — both get 100, no value passed between them
  p.then((v) => console.log('  handler A:', v));
  p.then((v) => console.log('  handler B:', v));

  await p;

  console.log('  (A and B both received 100 independently — not a chain)');

  // CHAINING — value flows A → B → C
  await delay(30, 1)
    .then((v) => {
      console.log('  chain step A:', v);
      return v * 2;
    })
    .then((v) => {
      console.log('  chain step B:', v);
      return v * 2;
    })
    .then((v) => console.log('  chain step C:', v));
}

// ============================================================
// 4. Practical example — user → services → cost
// ============================================================
function getUser(userId) {
  return delay(50, { id: userId, name: 'Alice' });
}

function getServices(user) {
  console.log(`  getServices for user: ${user.name}`);
  return delay(50, ['email', 'hosting', 'backup']);
}

function getServiceCost(services) {
  console.log(`  getServiceCost for: ${services.join(', ')}`);
  const prices = { email: 5, hosting: 20, backup: 10 };
  const total = services.reduce((sum, s) => sum + prices[s], 0);
  return delay(30, total);
}

async function demo4() {
  console.log('\n=== 4. Practical chain: user → services → cost ===');

  /*
    Without promises (callback style):
      getUser(100, (user) => {
        getServices(user, (services) => {
          getServiceCost(services, (cost) => {
            console.log(cost);
          });
        });
      });

    With promise chaining — flat and readable:
  */

  const cost = await getUser(100)
    .then(getServices) // pass function reference — receives previous result
    .then(getServiceCost);

  console.log('  total cost: $' + cost);
}

// ============================================================
// 5. Pass result explicitly vs function reference
// ============================================================
async function demo5() {
  console.log('\n=== 5. Explicit vs function reference ===');

  function double(n) {
    return delay(20, n * 2);
  }

  function addTen(n) {
    return delay(20, n + 10);
  }

  // Explicit — transform before passing
  await delay(20, 5)
    .then((n) => double(n))
    .then((n) => addTen(n))
    .then((n) => console.log('  explicit chain result:', n)); // (5*2)+10 = 20

  // Function reference — when function signature matches (receives prev result)
  await delay(20, 5)
    .then(double)
    .then(addTen)
    .then((n) => console.log('  reference chain result:', n)); // 20
}

// ============================================================
// 6. Anti-pattern — nested .then() (callback hell again!)
// ============================================================
async function demo6() {
  console.log('\n=== 6. Nested then (avoid) vs flat chain (prefer) ===');

  // BAD — pyramid of doom
  await new Promise((resolve) => {
    delay(30, 1).then((a) => {
      delay(30, a + 1).then((b) => {
        delay(30, b + 1).then((c) => {
          console.log('  nested result:', c); // 3
          resolve();
        });
      });
    });
  });

  // GOOD — flat chain
  const flat = await delay(30, 1)
    .then((a) => delay(30, a + 1))
    .then((b) => delay(30, b + 1));

  console.log('  flat chain result:', flat); // 3
}

// ============================================================
// Run all demos in order
// ============================================================
async function main() {
  await demo1();
  await demo2();
  await demo3();
  await demo4();
  await demo5();
  await demo6();

  console.log('\n=== Summary ===');
  console.log('Chain: .then().then().then() — each step gets previous result');
  console.log('Return value from .then() → next step input');
  console.log('Return Promise from .then() → next step waits');
  console.log('Multiple .then() on same promise = parallel, NOT chain');
}

main();
