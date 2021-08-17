const LinkedList = require('../linked_list/LinkedList');

class Stack {
  #stack;
  #size;
  #maxSize;
  constructor(maxSize = Infinity) {
    this.#stack = new LinkedList();
    this.#size = 0;
    this.#maxSize = maxSize;
  }

  get size() {
    return this.#size;
  }

  get maxSize() {
    return this.#maxSize;
  }

  isEmpty() {
    return this.#size === 0;
  }

  hasRoom() {
    return this.#size < this.#maxSize;
  }

  push(data) {
    if (this.hasRoom()) {
      this.#stack.addToHead(data);
      this.#size++;
    } else {
      throw new Error('Stack is full');
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.#stack.head;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    } else {
      const top = this.#stack.removeHead();
      this.#size--;
      return top;
    }
  }

  toString() {
    return this.#stack.toString();
  }
}

module.exports = Stack;
