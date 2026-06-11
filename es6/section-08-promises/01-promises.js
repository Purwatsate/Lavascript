/**
 * Topic 1: Promises — asynchronous operation result ကို handle လုပ်ခြင်း
 *
 * ============================================================
 * WHY PROMISES? (ဘာကြောင့် Promise လို?)
 * ============================================================
 *
 * JavaScript is single-threaded — code တစ်ကြောင်းချင်း run
 * API call, file read, database query — time ကြာတယ်
 * ဒါပေမယ့် main thread ကို block မလုပ်ချင်ဘူး
 *
 * Problem with sync style:
 *   const users = getUsers();  // API မပြီးသေးဘူး — [] or undefined
 *   users.find(...)            // wrong result
 *
 * Problem with callbacks:
 *   getUsers((users) => {
 *     findUser(users, (user) => {
 *       getOrders(user, (orders) => { ... });  // callback hell
 *     });
 *   });
 *
 * Promise solution:
 *   - cleaner syntax
 *   - chainable (.then().then())
 *   - unified error handling (.catch())
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-promises/
 * Run: node es6/section-08-promises/01-promises.js
 */

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function getUsersSyncBroken() {
  let users = [];
  setTimeout(() => {
    users = [
      { username: 'john', email: 'john@example.com' },
      { username: 'jane', email: 'jane@example.com' },
    ];
  }, 100);
  return users;
}

function getUsersCallback(callback) {
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@example.com' },
      { username: 'jane', email: 'jane@example.com' },
    ]);
  }, 100);
}

function findUserCallback(username, callback) {
  getUsersCallback((users) => {
    callback(users.find((u) => u.username === username));
  });
}

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve([
          { username: 'john', email: 'john@example.com' },
          { username: 'jane', email: 'jane@example.com' },
        ]);
      } else {
        reject(new Error('Failed to fetch users'));
      }
    }, 100);
  });
}

function getUsersFail() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Network timeout')), 50);
  });
}

function fetchWithCleanup(shouldSucceed) {
  console.log('  [fetch] start loading...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) resolve('data loaded');
      else reject(new Error('load failed'));
    }, 50);
  })
    .then((data) => {
      console.log('  [fetch] success:', data);
      return data;
    })
    .catch((err) => {
      console.log('  [fetch] error:', err.message);
      // demo: don't re-throw — in real app you might re-throw or return default
    })
    .finally(() => {
      console.log('  [fetch] hide loading spinner (always)');
    });
}

async function main() {
  // ============================================================
  // 1. The async problem — sync code fails
  // ============================================================
  console.log('=== 1. Why sync fails with async ===');

  const brokenUsers = getUsersSyncBroken();
  console.log('sync broken result:', brokenUsers);
  console.log('find john:', brokenUsers.find((u) => u.username === 'john'));
  console.log('Lesson: return runs BEFORE setTimeout finishes');

  // ============================================================
  // 2. Callback approach — works but messy
  // ============================================================
  console.log('\n=== 2. Callback approach ===');

  await new Promise((resolve) => {
    findUserCallback('john', (user) => {
      console.log('callback found:', user);
      resolve();
    });
  });

  // ============================================================
  // 3. Promise states
  // ============================================================
  console.log('\n=== 3. Promise states ===');
  /*
    PENDING   → default when created
    FULFILLED → resolve(value) called — success
    REJECTED  → reject(error) called — failure
    State change is ONE-WAY — cannot go back
  */
  new Promise(() => {});
  console.log('pending promise created');

  // ============================================================
  // 4. Creating a Promise
  // ============================================================
  console.log('\n=== 4. Create Promise ===');

  const promise = getUsers();
  console.log('getUsers() returns Promise (not data):', promise);
  console.log('typeof:', typeof promise);

  // ============================================================
  // 5. .then() — handle success
  // ============================================================
  console.log('\n=== 5. then() — handle success ===');

  await getUsers().then((users) => {
    console.log('then received:', users.length, 'users');
    console.log('found john:', users.find((u) => u.username === 'john').username);
  });

  // ============================================================
  // 6. .catch() — handle failure
  // ============================================================
  console.log('\n=== 6. catch() — handle failure ===');

  await getUsersFail()
    .then(() => console.log('skipped on reject'))
    .catch((error) => console.log('catch error:', error.message));

  // ============================================================
  // 7. .finally() — cleanup always runs
  // ============================================================
  console.log('\n=== 7. finally() — always runs ===');

  await fetchWithCleanup(true);
  await fetchWithCleanup(false);

  // ============================================================
  // 8. then() returns new Promise
  // ============================================================
  console.log('\n=== 8. then() returns new Promise ===');

  await delay(50, 10)
    .then((value) => {
      console.log('step 1:', value);
      return value * 2;
    })
    .then((value) => console.log('step 2:', value));

  // ============================================================
  // 9. Wrap async operation
  // ============================================================
  console.log('\n=== 9. Wrap setTimeout as Promise ===');
  console.log('wait(ms) pattern — use delay() or new Promise + setTimeout');

  console.log('\n=== Summary ===');
  console.log('Promise = placeholder for future async result');
  console.log('resolve/reject → then/catch/finally');
  console.log('promise variable ≠ result — use .then() or await');
}

main();
