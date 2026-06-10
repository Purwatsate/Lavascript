/**
 * Topic 2: Object Destructuring — object property တွေကို variable တွေထဲ assign လုပ်ခြင်း
 *
 * ES6 Object Destructuring:
 *   - object property တွေကို variable တွေထဲ တိုက်ရိုက် assign
 *   - property name နဲ့ variable name တူရင် shorthand သုံး
 *   - property name ≠ variable name ဆိုရင် rename: { prop: newName }
 *
 * Syntax: let { prop1, prop2 } = object;
 *
 * Reference: https://www.javascripttutorial.net/es6/javascript-object-destructuring/
 * Run: node es6/section-02-destructuring/02-object-destructuring.js
 */

// ============================================================
// 1. Object Destructuring အခြေခံ
// ============================================================
console.log('=== 1. Basic object destructuring ===');

const person = {
  firstName: 'John',
  lastName: 'Doe',
};

// ES5 နည်းလမ်း — property တစ်ခုချင်း assign
let fn = person.firstName;
let ln = person.lastName;
console.log('ES5:', fn, ln);

// ES6 destructuring — property name = variable name (shorthand)
let { firstName, lastName } = person;
console.log('ES6:', firstName, lastName); // John Doe

// ============================================================
// 2. Property rename — variable name က property name နဲ့ မတူ
// ============================================================
console.log('\n=== 2. Rename properties ===');

// { propertyName: variableName } — property ကို variable အသစ် နာမည်နဲ့ assign
let { firstName: fname, lastName: lname } = person;
console.log('fname:', fname); // John
console.log('lname:', lname); // Doe

// object literal မှာ key:left, value:right
// destructuring မှာလည်း property:left, variable:right

// ============================================================
// 3. Property မရှိရင် undefined
// ============================================================
console.log('\n=== 3. Missing property is undefined ===');

let { firstName: f, lastName: l, middleName } = person;
console.log('middleName:', middleName); // undefined — person ထဲ middleName မရှိ

// ============================================================
// 4. Default values
// ============================================================
console.log('\n=== 4. Default values ===');

const employee = {
  firstName: 'John',
  lastName: 'Doe',
  currentAge: 28,
};

let {
  firstName: empFirst,
  lastName: empLast,
  middleName: mid = '',
  currentAge: age = 18,
} = employee;

console.log('mid:', mid);   // '' — default (property မရှိ)
console.log('age:', age);   // 28 — property value ရှိ

// property ရှိပြီး value undefined မဟုတ်ရင် default မသုံး
const personWithMiddle = {
  firstName: 'Jane',
  lastName: 'Smith',
  middleName: 'C.',
  currentAge: 30,
};

let { middleName: mid2 = '', currentAge: age2 = 18 } = personWithMiddle;
console.log('mid2:', mid2); // 'C.' — property value သုံး
console.log('age2:', age2); // 30

// ============================================================
// 5. null object destructure — error ကာကွယ်
// ============================================================
console.log('\n=== 5. Fallback for null object ===');

function getPerson() {
  return null;
}

// null return — destructure လုပ်မယ်ဆိုရင် TypeError
// let { firstName } = getPerson(); // TypeError

// || {} fallback — empty object နဲ့ destructure
let { firstName: nullFn, lastName: nullLn } = getPerson() || {};
console.log('nullFn:', nullFn); // undefined
console.log('nullLn:', nullLn); // undefined

// ============================================================
// 6. Nested object destructuring
// ============================================================
console.log('\n=== 6. Nested object destructuring ===');

const worker = {
  id: 1001,
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
};

// nested object property ခွဲထုတ်
let {
  name: { firstName: nestedFirst, lastName: nestedLast },
} = worker;

console.log(nestedFirst, nestedLast); // John Doe

// property တစ်ခုကို variable + nested property ခွဲ — နှစ်ခုလုံး assign
let {
  name: { firstName: nf, lastName: nl },
  name,
} = worker;

console.log(nf, nl); // John Doe
console.log(name);   // { firstName: 'John', lastName: 'Doe' }

// ============================================================
// 7. Function parameter destructuring
// ============================================================
console.log('\n=== 7. Destructuring function arguments ===');

// ES5 — parameter object ထဲ property တစ်ခုချင်း access
function displayES5(personObj) {
  console.log(`${personObj.firstName} ${personObj.lastName}`);
}

// ES6 — parameter ကို destructure — code ပိုတို, ပိုရှင်း
function display({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

const user = { firstName: 'Alice', lastName: 'Brown' };
displayES5(user); // Alice Brown
display(user);    // Alice Brown

// React component props destructuring မှာ ဒီ pattern အများကြီး သုံးတယ်
// function UserCard({ name, email, avatar }) { ... }

// ============================================================
// 8. Declaration နဲ့ assignment ခွဲ — parentheses လို
// ============================================================
console.log('\n=== 8. Separate declaration and assignment ===');

let city, country;

// object destructuring assignment — parentheses မရှိရင် block လို့ treat
// { city, country } = address; // SyntaxError

({ city, country } = { city: 'Yangon', country: 'Myanmar' });
console.log(city, country); // Yangon Myanmar

// ============================================================
// 9. Rest property — object ထဲ property 일부 ခွဲ, ကျန်တွေ collect
// ============================================================
console.log('\n=== 9. Rest property in object destructuring ===');

const product = {
  id: 1,
  name: 'Laptop',
  price: 999,
  category: 'Electronics',
};

// id ခွဲထုတ်, ကျန်ရှိ property တွေ details object ထဲ
const { id, ...details } = product;
console.log('id:', id);           // 1
console.log('details:', details); // { name: 'Laptop', price: 999, category: 'Electronics' }

// ============================================================
// 10. Array + Object destructuring ပေါင်းသုံး
// ============================================================
console.log('\n=== 10. Combined array and object destructuring ===');

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// array element (object) ကို destructure
const [firstUser, secondUser] = users;
console.log(firstUser.name); // Alice

// array destructuring + object destructuring တစ်ခါတည်း
const [{ name: user1Name }, { name: user2Name }] = users;
console.log(user1Name, user2Name); // Alice Bob

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// Object destructuring syntax:
//   let { a, b } = obj;                    — basic (shorthand)
//   let { a: x, b: y } = obj;              — rename
//   let { a = 'default' } = obj;           — default value
//   let { a: { b } } = obj;                — nested
//   let { a, ...rest } = obj;              — rest property
//   function fn({ a, b }) {}               — parameter destructuring
//
// null object return: getPerson() || {}
// separate assignment: ({ a, b } = obj) — parentheses လို
