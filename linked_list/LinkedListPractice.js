const LinkedList = require('./LinkedList');

class LinkedListPractice extends LinkedList {
  /**
   * Finds the matching and preceding node
   */
  #findNodeAndPrev(data) {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      if (currentNode.data === data) {
        break;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return {
      previousNode,
      currentNode,
    };
  }

  swapNodes(data1, data2) {
    if (data1 === data2) {
      return;
    }

    // Finding the Matching and Preceding Nodes
    const { previousNode: node1Prev, currentNode: node1 } =
      this.#findNodeAndPrev(data1);
    const { previousNode: node2Prev, currentNode: node2 } =
      this.#findNodeAndPrev(data2);

    if (node1 === null || node2 === null) {
      throw new Error(
        'Swap not possible - One or both elements are not in the list.'
      );
    }

    // Updating the Preceding Nodes’ Pointers
    if (node1Prev === null) {
      this.head = node2;
    } else {
      node1Prev.next = node2;
    }

    if (node2Prev === null) {
      this.head = node1;
    } else {
      node2Prev.next = node1;
    }

    // Updating the Nodes’ Next Pointers
    const temp = node1.next;
    node1.next = node2.next;
    node2.next = temp;
  }
}

module.exports = LinkedListPractice;
