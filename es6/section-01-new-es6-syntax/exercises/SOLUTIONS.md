# Section 1 Exercises — Solutions Guide

Implement လုပ်ပြီးမှ ဒီ file ကို reference အဖြစ် ကြည့်ပါ။

## Exercise 1: createCounter

```javascript
function createCounter() {
  let count = 0;
  return () => ++count;
}
```

## Exercise 2: average

```javascript
function average(...numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}
```

## Exercise 3: mergeUnique

```javascript
function mergeUnique(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
```

## Exercise 4: createProduct

```javascript
function createProduct(name, price) {
  return {
    name,
    price,
    display() {
      return `${this.name}: $${this.price}`;
    },
  };
}
```

## Exercise 5: formatList

```javascript
function formatList(title, items) {
  const lines = items.map((item) => `- ${item}`).join('\n');
  return `${title}:\n${lines}`;
}
```

Solutions ကို ကိုယ်တိုင်မရေးခင် `exercises.js` မှာ ကြိုးစားပါ။
