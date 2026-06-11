/**
 * Topic 3: Promise Composition — Promise.all() & Promise.race()
 *
 * ============================================================
 * WHEN TO USE WHICH? (ဘယ်အချိန် ဘာသုံး?)
 * ============================================================
 *
 * Sequential (chain):  step2 needs step1's result
 *   getUser().then(getOrders).then(getItems)
 *
 * Parallel (all):      independent tasks, need ALL results
 *   Promise.all([fetchUser(), fetchPosts(), fetchComments()])
 *   → waits for slowest, returns [user, posts, comments]
 *
 * First wins (race):   timeout, fallback, fastest response
 *   Promise.race([fetchData(), timeout(5000)])
 *   → whichever settles first (resolve OR reject)
 *
 * Reference:
 *   https://www.javascripttutorial.net/javascript-promise-all/
 *   https://www.javascripttutorial.net/javascript-promise-race/
 * Run: node es6/section-08-promises/03-promise-composition.js
 */

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function delayReject(ms, error) {
  return new Promise((_, reject) => setTimeout(() => reject(error), ms));
}

// ============================================================
// 1. Promise.all — wait for ALL, get array of results
// ============================================================
async function demo1() {
  console.log('=== 1. Promise.all — all must succeed ===');

  /*
    Promise.all([p1, p2, p3])
      - All resolve → new promise resolves with [result1, result2, result3]
      - Order preserved (not completion order — array order)
      - ANY reject → immediately reject (others ignored)
  */

  const start = Date.now();

  const results = await Promise.all([
    delay(100, 'user'),
    delay(150, 'posts'),
    delay(80, 'comments'),
  ]);

  const elapsed = Date.now() - start;
  console.log('  results:', results); // ['user', 'posts', 'comments']
  console.log('  elapsed ~150ms (waits for slowest, not sum)');
}

// ============================================================
// 2. Promise.all — practical: aggregate data
// ============================================================
async function demo2() {
  console.log('\n=== 2. Promise.all — aggregate example ===');

  function fetchProduct(id) {
    return delay(50, { id, price: id * 100 });
  }

  const products = await Promise.all([
    fetchProduct(1),
    fetchProduct(2),
    fetchProduct(3),
  ]);

  const total = products.reduce((sum, p) => sum + p.price, 0);
  console.log('  products:', products.map((p) => p.id).join(', '));
  console.log('  total price:', total); // 100+200+300 = 600
}

// ============================================================
// 3. Promise.all — one failure rejects all
// ============================================================
async function demo3() {
  console.log('\n=== 3. Promise.all — fail fast ===');

  try {
    await Promise.all([
      delay(50, 'ok'),
      delayReject(30, new Error('API error')),
      delay(200, 'never waited for'), // won't matter — already rejected
    ]);
  } catch (error) {
    console.log('  caught:', error.message); // API error
    console.log('  (rejected at ~30ms, not 200ms — fail fast)');
  }
}

// ============================================================
// 4. Promise.race — first settled wins
// ============================================================
async function demo4() {
  console.log('\n=== 4. Promise.race — first wins ===');

  /*
    Promise.race([p1, p2, p3])
      - First to resolve OR reject → result adopted
      - Others still run in background (not cancelled!)
  */

  const winner = await Promise.race([
    delay(200, 'slow server'),
    delay(50, 'fast cache'),
    delay(100, 'medium CDN'),
  ]);

  console.log('  winner:', winner); // fast cache (50ms)
}

// ============================================================
// 5. Promise.race — timeout pattern
// ============================================================
async function demo5() {
  console.log('\n=== 5. Promise.race — timeout pattern ===');

  function fetchData() {
    return delay(300, { data: 'loaded' });
  }

  function timeout(ms) {
    return delay(ms, null).then(() => {
      throw new Error(`Timeout after ${ms}ms`);
    });
  }

  // Scenario A: data loads before timeout
  try {
    const result = await Promise.race([fetchData(), timeout(500)]);
    console.log('  scenario A (success):', result);
  } catch (e) {
    console.log('  scenario A error:', e.message);
  }

  // Scenario B: timeout wins (slow fetch)
  function slowFetch() {
    return delay(500, { data: 'too late' });
  }

  try {
    await Promise.race([slowFetch(), timeout(200)]);
  } catch (e) {
    console.log('  scenario B (timeout):', e.message); // Timeout after 200ms
  }
}

// ============================================================
// 6. Compare: sequential vs parallel timing
// ============================================================
async function demo6() {
  console.log('\n=== 6. Sequential vs Parallel timing ===');

  const task = (name, ms) => delay(ms, name);

  // Sequential — total time = sum
  let start = Date.now();
  await task('A', 80)
    .then(() => task('B', 80))
    .then(() => task('C', 80));
  console.log('  sequential ~' + (Date.now() - start) + 'ms'); // ~240ms

  // Parallel — total time = max
  start = Date.now();
  await Promise.all([task('A', 80), task('B', 80), task('C', 80)]);
  console.log('  parallel ~' + (Date.now() - start) + 'ms'); // ~80ms
}

// ============================================================
// 7. Quick reference table
// ============================================================
async function main() {
  await demo1();
  await demo2();
  await demo3();
  await demo4();
  await demo5();
  await demo6();

  console.log('\n=== Quick Reference ===');
  console.log('| Method          | Waits for     | Result              | On any fail     |');
  console.log('|-----------------|---------------|---------------------|-----------------|');
  console.log('| chain .then()   | previous step | passed value        | .catch()        |');
  console.log('| Promise.all()   | ALL promises  | [r1, r2, r3]        | immediate reject|');
  console.log('| Promise.race()  | FIRST settle  | first value/error   | first error wins|');
}

main();
