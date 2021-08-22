const LinkedList = require('../linked_list/LinkedList');
const Node = require('../node/Node');

class HashMap {
  #hashmap = [];
  constructor(size = 0) {
    this.#hashmap = new Array(size).fill(null);
  }

  get size() {
    return this.#hashmap.length;
  }

  /**
   *
   * @param {string} key - the key to lookup in the hashmap
   * @returns {number} - the index in hashmap's internal array
   */
  hash(key) {
    let hashCode = 0;

    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }

    return hashCode % this.#hashmap.length;
  }

  /**
   * Stores the key-value pair at a particular index
   * @param {string} key - the key to store in the hashmap
   * @param {*} value - the value associated with the key
   */
  assign(key, value) {
    const arrayIndex = this.hash(key);

    // if the index has no linked list, then create a new linked list with the key-value stored at the head
    if (this.#hashmap[arrayIndex] === null) {
      const linkedList = new LinkedList();
      linkedList.addToHead({ key, value });
      this.#hashmap[arrayIndex] = linkedList;
      return;
    }

    let current = this.#hashmap[arrayIndex].head;

    while (current) {
      // If key already exists, overwrite value
      if (current.data.key === key) {
        current.data = {
          key,
          value,
        };
      }

      // If key does not exist, append value to the list
      if (!current.next) {
        const newNode = new Node({ key, value });
        current.next = newNode;
        break;
      }

      current = current.next;
    }
  }

  /**
   * Retrieves value stored at the given key
   * @param {string} key - key to lookup in the hashmap
   * @returns {*}
   */
  retrieve(key) {
    const arrayIndex = this.hash(key);

    if (!this.#hashmap[arrayIndex]) {
      return null;
    }

    let current = this.#hashmap[arrayIndex].head;

    while (current) {
      if (current.data.key === key) {
        return current.data.value;
      }

      current = current.next;
    }

    return null;
  }
}

module.exports = HashMap;
