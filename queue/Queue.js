const LinkedList = require('../linked_list/LinkedList');

class Queue {
  #queue;
  #size = 0;
  #maxSize;

  constructor(maxSize = Infinity) {
    this.#queue = new LinkedList();
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

  enqueue(data) {
    if (this.hasRoom()) {
      this.#queue.addToTail(data);
      this.#size++;
    } else {
      throw new Error('Queue is full');
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    } else {
      const removedNode = this.#queue.removeHead();
      this.#size--;
      return removedNode;
    }
  }

  toString() {
    return this.#queue.toString();
  }
}

module.exports = Queue;
