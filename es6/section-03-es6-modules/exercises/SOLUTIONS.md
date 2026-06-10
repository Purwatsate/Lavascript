# Section 3 Exercises — Solutions Guide

`exercises/modules/` folder create လုပ်ပြီး အောက်ပါ files တွေ ရေးပါ။

## exercises/modules/string-utils.js

```javascript
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str) {
  return str.split('').reverse().join('');
}
```

## exercises/modules/constants.js

```javascript
export const MAX_USERS = 100;
export const APP_VERSION = '1.0';

const config = {
  debug: false,
  timeout: 5000,
};

export default config;
```

## exercises/modules/index.js

```javascript
export { capitalize, reverse } from './string-utils.js';
export { MAX_USERS, APP_VERSION } from './constants.js';
export { default as config } from './constants.js';
```

## exercises/run.js

```javascript
import {
  capitalize,
  reverse,
  MAX_USERS,
  config,
} from './modules/index.js';

console.log('capitalize:', capitalize('hello'));
console.log('reverse:', reverse('hello'));
console.log('MAX_USERS:', MAX_USERS);
console.log('config.debug:', config.debug);
```

Solutions ကို ကိုယ်တိုင်မရေးခင် ကြိုးစားပါ။
