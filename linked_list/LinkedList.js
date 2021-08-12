const Node = require('../node/Node');

class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }

  get head() {
    return this.#head;
  }
  // For testing purpose
  set head(node) {
    this.#head = node;
  }

  addToHead(data) {
    const newNode = new Node(data);
    newNode.next = this.#head;
    this.#head = newNode;
  }

  addToTail(data) {
    const newNode = new Node(data);

    if (this.#head === null) {
      // list is empty
      this.#head = newNode;
    } else {
      let currentNode = this.#head;

      // Traverse to the end of the list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  removeHead() {
    const removedHead = this.#head;

    if (removedHead !== null) {
      this.#head = removedHead.next;
    }

    return removedHead;
  }

  printList() {
    console.log(this.toString());
  }

  toString() {
    let currentNode = this.#head;
    let output = '';

    while (currentNode !== null) {
      output += `${currentNode.toString()}, `;
      currentNode = currentNode.next;
    }

    return output.slice(0, -2);
  }
}

module.exports = LinkedList;
