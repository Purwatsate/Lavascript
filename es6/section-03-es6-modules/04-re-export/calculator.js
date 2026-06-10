/**
 * calculator.js — default export module
 */
export default class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  reset() {
    this.value = 0;
    return this;
  }
}
