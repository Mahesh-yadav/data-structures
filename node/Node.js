class Node {
  #data;
  #next;

  constructor(data) {
    this.#data = data;
    this.#next = null;
  }

  get data() {
    return this.#data;
  }

  get next() {
    return this.#next;
  }

  set next(node) {
    if (node instanceof Node || node === null) {
      this.#next = node;
    } else {
      throw new Error('Next node must be a Node instance');
    }
  }

  toString() {
    return this.#data.toString();
  }
}

module.exports = Node;
