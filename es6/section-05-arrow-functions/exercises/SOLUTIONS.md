# Section 5 Exercises — Solutions Guide

Implement လုပ်ပြီးမှ ဒီ file ကို reference အဖြစ် ကြည့်ပါ။

## Exercise 1: doubleAll

```javascript
function doubleAll(arr) {
  return arr.map((n) => n * 2);
}
```

## Exercise 2: filterPositive

```javascript
function filterPositive(arr) {
  return arr.filter((n) => n > 0);
}
```

## Exercise 3: createMultiplier

```javascript
function createMultiplier(factor) {
  return (value) => value * factor;
}
```

## Exercise 4: toPerson

```javascript
function toPerson(name, age) {
  return {
    name,
    age,
    label: `${name} (${age})`,
  };
}
```

Or as a direct arrow function:

```javascript
const toPerson = (name, age) => ({
  name,
  age,
  label: `${name} (${age})`,
});
```

## Exercise 5: createLogger

```javascript
function createLogger(prefix) {
  return {
    messages: [],
    log(msg) {
      this.messages.push(`${prefix}: ${msg}`);
    },
  };
}
```

Solutions ကို ကိုယ်တိုင်မရေးခင် `exercises.js` မှာ ကြိုးစားပါ။
