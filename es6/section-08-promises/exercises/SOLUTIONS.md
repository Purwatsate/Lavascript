# Section 8 Exercises — Solutions Guide

Implement လုပ်ပြီးမှ ဒီ file ကို reference အဖြစ် ကြည့်ပါ။

## Exercise 1: delay

```javascript
function delay(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}
```

## Exercise 2: fetchNumber

```javascript
function fetchNumber(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error('Invalid id'));
      } else {
        resolve({ id, value: id * 10 });
      }
    }, 50);
  });
}
```

## Exercise 3: doubleThenAdd

```javascript
function doubleThenAdd(promise) {
  return promise
    .then((n) => n * 2)
    .then((n) => n + 10);
}
```

## Exercise 4: fetchAllProducts

```javascript
function fetchAllProducts(ids) {
  return Promise.all(ids.map((id) => fetchProduct(id)));
}
```

## Exercise 5: fetchWithTimeout

```javascript
function fetchWithTimeout(fetchFn, timeoutMs) {
  const timeout = delay(timeoutMs).then(() => {
    throw new Error('Timeout');
  });

  return Promise.race([fetchFn(), timeout]);
}
```

Solutions ကို ကိုယ်တိုင်မရေးခင် `exercises.js` မှာ ကြိုးစားပါ။
