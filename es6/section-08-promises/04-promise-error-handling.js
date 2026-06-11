/**
 * Topic 4: Promise Error Handling — errors ကို catch လုပ်ခြင်း
 *
 * ============================================================
 * HOW ERRORS FLOW IN PROMISE CHAINS
 * ============================================================
 *
 * Error sources:
 *   1. reject(error) or reject('message') in executor
 *   2. throw new Error('...') inside executor or .then()
 *   3. Returned promise that rejects
 *
 * Error propagation:
 *   promise1.then(step2).then(step3).catch(handle)
 *   → error in ANY step jumps to .catch() (skips intermediate then)
 *
 * Rules:
 *   - .catch() returns new promise (can continue chain after recovery)
 *   - Missing .catch() on rejected promise → unhandled rejection (crash in Node)
 *   - .finally() runs regardless, but does NOT swallow errors
 *
 * Reference: https://www.javascripttutorial.net/promise-error-handling/
 * Run: node es6/section-08-promises/04-promise-error-handling.js
 */

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// ============================================================
// 1. reject() vs throw — both go to .catch()
// ============================================================
async function demo1() {
  console.log('=== 1. reject() and throw both caught ===');

  // reject() explicitly
  await new Promise((_, reject) => {
    reject(new Error('via reject()'));
  }).catch((e) => console.log('  caught reject:', e.message));

  // throw inside executor
  await new Promise(() => {
    throw new Error('via throw in executor');
  }).catch((e) => console.log('  caught throw:', e.message));

  // throw inside .then()
  await delay(20, 1)
    .then(() => {
      throw new Error('via throw in then');
    })
    .catch((e) => console.log('  caught then throw:', e.message));
}

// ============================================================
// 2. Error bubbles through chain — skips to .catch()
// ============================================================
async function demo2() {
  console.log('\n=== 2. Error bubbles through chain ===');

  /*
    step1 (ok) → step2 (ERROR) → step3 (SKIPPED) → catch (runs)
  */

  await delay(20, 'start')
    .then((v) => {
      console.log('  step 1:', v);
      return 'step1 done';
    })
    .then(() => {
      console.log('  step 2: throwing error...');
      throw new Error('step 2 failed');
    })
    .then(() => {
      console.log('  step 3: NEVER runs'); // skipped
    })
    .catch((e) => {
      console.log('  catch:', e.message);
    });
}

// ============================================================
// 3. .catch() for recovery — chain continues after catch
// ============================================================
async function demo3() {
  console.log('\n=== 3. catch() recovery — chain continues ===');

  const result = await delay(20, 10)
    .then((n) => {
      if (n > 5) throw new Error('too big');
      return n;
    })
    .catch((e) => {
      console.log('  recovered from:', e.message);
      return 0; // return value → next then runs with 0
    })
    .then((n) => {
      console.log('  after recovery:', n); // 0
      return n + 100;
    });

  console.log('  final:', result); // 100
}

// ============================================================
// 4. Re-throw — catch then propagate again
// ============================================================
async function demo4() {
  console.log('\n=== 4. Re-throw after logging ===');

  try {
    await delay(20, 1)
      .then(() => {
        throw new Error('original error');
      })
      .catch((e) => {
        console.log('  logged:', e.message);
        throw e; // re-throw — propagate to outer catch
      });
  } catch (e) {
    console.log('  outer catch:', e.message);
  }
}

// ============================================================
// 5. .then(onFulfilled, onRejected) vs .catch()
// ============================================================
async function demo5() {
  console.log('\n=== 5. then(success, fail) vs catch ===');

  // then's second arg only catches errors from THAT promise, not next then
  await delay(20, 1)
    .then(
      () => {
        throw new Error('error in first then');
      },
      (e) => {
        console.log('  then fail handler:', e.message); // won't run — error in first arg
      }
    )
    .catch((e) => console.log('  catch handles it:', e.message));

  // Better: use .catch() at end of chain for all errors
}

// ============================================================
// 6. finally — runs always, doesn't catch errors
// ============================================================
async function demo6() {
  console.log('\n=== 6. finally behavior ===');

  // Success path
  await delay(20, 'ok')
    .then((v) => console.log('  success:', v))
    .finally(() => console.log('  finally on success'));

  // Error path — finally still runs, then error propagates
  try {
    await delay(20, 1)
      .then(() => {
        throw new Error('fail');
      })
      .finally(() => console.log('  finally on error (before catch)'))
      .catch((e) => console.log('  catch after finally:', e.message));
  } catch {
    // already caught above
  }
}

// ============================================================
// 7. Missing .catch() — unhandled rejection danger
// ============================================================
async function demo7() {
  console.log('\n=== 7. Always add catch — unhandled rejection ===');

  /*
    DANGEROUS (don't do in production):
      fetchData();  // returns rejected promise, no .catch()
      → UnhandledPromiseRejection → Node may crash

    SAFE:
      fetchData().catch(err => console.error(err));
      // or
      try { await fetchData(); } catch (e) { ... }
  */

  // We handle it here to avoid crash:
  await delayReject(20, new Error('unhandled if no catch')).catch((e) => {
    console.log('  safely caught:', e.message);
  });

  console.log('  always end chains with .catch() or try/catch with await');
}

function delayReject(ms, error) {
  return new Promise((_, reject) => setTimeout(() => reject(error), ms));
}

// ============================================================
// 8. Promise.all error — first rejection wins
// ============================================================
async function demo8() {
  console.log('\n=== 8. Promise.all error handling ===');

  try {
    await Promise.all([
      delay(50, 'a'),
      delayReject(30, new Error('second failed')),
      delay(100, 'c'),
    ]);
  } catch (e) {
    console.log('  Promise.all caught:', e.message);
  }

  // Handle partial failure: Promise.allSettled (ES2020 — bonus)
  const settled = await Promise.allSettled([
    delay(30, 'a'),
    delayReject(30, new Error('fail')),
    delay(30, 'c'),
  ]);

  console.log('  allSettled (bonus):');
  settled.forEach((r, i) => {
    console.log(`    [${i}] ${r.status}:`, r.status === 'fulfilled' ? r.value : r.reason.message);
  });
}

// ============================================================
// Run all
// ============================================================
async function main() {
  await demo1();
  await demo2();
  await demo3();
  await demo4();
  await demo5();
  await demo6();
  await demo7();
  await demo8();

  console.log('\n=== Summary ===');
  console.log('reject() and throw → both caught by .catch()');
  console.log('Error in chain → skips to nearest .catch()');
  console.log('.catch() can recover (return value) or re-throw');
  console.log('.finally() always runs — cleanup only');
  console.log('Never leave rejected promise without handler');
}

main();
