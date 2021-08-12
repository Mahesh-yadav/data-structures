const DoublyLinkedNode = require('../node/DoublyLinkedNode');

class DoublyLinkedList {
  #head;
  #tail;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  addToHead(data) {
    const newHead = new DoublyLinkedNode(data);
    const currentHead = this.#head;

    /* 
      Start by checking to see if there is a current head to the list. If there is (meaning the list is not empty), then we want to reset the pointers at the head of the list:
        - Set the current head’s previous node to the new head
        - Set the new head’s next node to the current head
    */
    if (this.#head) {
      currentHead.previous = newHead;
      newHead.next = currentHead;
    }

    // Update the head property to be the new head
    this.#head = newHead;

    /*
      Finally, if there isn’t a current tail to the list (meaning the list was empty):
        - Update the tail property to be the new head since that node will be both the head and tail
    */
    if (!this.#tail) {
      this.#tail = newHead;
    }
  }

  addToTail(data) {
    const newTail = new DoublyLinkedNode(data);
    const currentTail = this.#tail;

    if (this.#tail) {
      currentTail.next = newTail;
      newTail.previous = currentTail;
    }

    this.#tail = newTail;

    if (!this.#head) {
      this.#head = newTail;
    }
  }

  removeHead() {
    const removedHead = this.#head;

    /*
      Start by checking if there’s a current head to the list. If there isn’t:
        - The list is empty, so return null
    */
    if (!removedHead) {
      return null;
    }

    // update the list’s head to be the current head’s next node
    this.#head = removedHead.next;

    /*
      If there is still a head to the list (meaning the list had more than one element when we started):
        - Set the head’s previous node to null since there should be no node before the head of the list
    */
    if (this.#head) {
      this.#head.previous = null;
    } else {
      /*
      If the removed head was also the tail of the list (meaning there was only one element in the list):
        - set the tail to null as there are no elements in the list
    */
      this.#tail = null;
    }

    return removedHead;
  }

  removeTail() {
    const removedTail = this.#tail;

    if (!removedTail) {
      return null;
    }

    this.#tail = removedTail.previous;

    if (this.#tail) {
      this.#tail.next = null;
    } else {
      this.#head = null;
    }

    return removedTail;
  }

  removeByData(data) {
    let currentNode = this.#head;
    let nodeToRemove = null;

    // Iterate through the list to find the matching node
    while (currentNode) {
      if (data === currentNode.data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }

    // If there is a matching node,
    if (nodeToRemove) {
      if (nodeToRemove === this.#head) {
        this.removeHead();
      } else if (nodeToRemove === this.#tail) {
        this.removeTail();
      } else {
        // nodeToRemove is in the middle of the list
        const nextNode = nodeToRemove.next;
        const previousNode = nodeToRemove.previous;

        nextNode.previous = previousNode;
        previousNode.next = nextNode;
      }
    }

    return nodeToRemove;
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

module.exports = DoublyLinkedList;
