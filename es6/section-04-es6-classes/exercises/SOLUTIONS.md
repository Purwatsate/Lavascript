# Section 4 Exercises — Solutions Guide

Implement လုပ်ပြီးမှ ဒီ file ကို reference အဖြစ် ကြည့်ပါ။

## Exercise 1: Rectangle

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}
```

## Exercise 2: Temperature

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return (this.celsius * 9) / 5 + 32;
  }

  set fahrenheit(value) {
    this.celsius = ((value - 32) * 5) / 9;
  }
}
```

## Exercise 3: IdGenerator

```javascript
class IdGenerator {
  static _counter = 0;

  static nextId() {
    IdGenerator._counter += 1;
    return IdGenerator._counter;
  }

  static reset() {
    IdGenerator._counter = 0;
  }
}
```

## Exercise 4: Animal & Dog

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}
```

## Exercise 5: createStack

```javascript
function createStack(maxSize) {
  return class {
    constructor() {
      this.items = [];
    }

    push(item) {
      if (this.items.length >= maxSize) {
        return false;
      }
      this.items.push(item);
      return true;
    }

    pop() {
      return this.items.pop();
    }

    peek() {
      return this.items[this.items.length - 1];
    }

    size() {
      return this.items.length;
    }
  };
}
```

Solutions ကို ကိုယ်တိုင်မရေးခင် `exercises.js` မှာ ကြိုးစားပါ။
