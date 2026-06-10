# Section 2 Exercises — Solutions Guide

Implement လုပ်ပြီးမှ ဒီ file ကို reference အဖြစ် ကြည့်ပါ။

## Exercise 1: getFirstAndLast

```javascript
function getFirstAndLast(arr) {
  const [first, ...rest] = arr;
  const last = rest.length > 0 ? rest[rest.length - 1] : first;
  return { first, last };
}
```

## Exercise 2: swapValues

```javascript
function swapValues({ a, b }) {
  return { a: b, b: a };
}
```

## Exercise 3: parseUser

```javascript
function parseUser(user) {
  const {
    firstName,
    lastName,
    role = 'guest',
    isActive = true,
  } = user || {};

  return {
    displayName: `${firstName} ${lastName}`,
    role,
    isActive,
  };
}
```

## Exercise 4: getCoordinates

```javascript
function getCoordinates(point) {
  const [x, y, [r, g, b]] = point;
  return {
    x,
    y,
    color: { r, g, b },
  };
}
```

## Exercise 5: omitKey

```javascript
function omitKey(obj, keyToRemove) {
  const { [keyToRemove]: removed, ...rest } = obj;
  return rest;
}
```

Solutions ကို ကိုယ်တိုင်မရေးခင် `exercises.js` မှာ ကြိုးစားပါ။
