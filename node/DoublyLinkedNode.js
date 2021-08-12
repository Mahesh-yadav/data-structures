const Node = require('./Node');

class DoublyLinkedNode extends Node {
  #previous;

  constructor(data) {
    super(data);
    this.#previous = null;
  }

  get previous() {
    return this.#previous;
  }

  get next() {
    return super.next;
  }

  set next(node) {
    if (node instanceof DoublyLinkedNode || node === null) {
      super.next = node;
    } else {
      throw new Error('Next node must be a DoublyLinkedNode instance or null');
    }
  }

  set previous(node) {
    if (node instanceof DoublyLinkedNode || node === null) {
      this.#previous = node;
    } else {
      throw new Error(
        'Previous node must be a DoublyLinkedNode instance or null'
      );
    }
  }
}

module.exports = DoublyLinkedNode;
