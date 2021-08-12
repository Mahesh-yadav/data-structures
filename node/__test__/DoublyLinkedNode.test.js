const DoublyLinkedNode = require('../DoublyLinkedNode');

describe('DoublyLinkedNode', () => {
  test('should create a node with a value and no prev/ next links', () => {
    const node = new DoublyLinkedNode(1);

    expect(node.data).toBe(1);
    expect(node.next).toBeNull();
    expect(node.previous).toBeNull();
  });

  test('should set next link and previous link', () => {
    const middleNode = new DoublyLinkedNode(2);
    const previousNode = new DoublyLinkedNode(1);
    const nextNode = new DoublyLinkedNode(3);

    middleNode.next = nextNode;
    middleNode.previous = previousNode;

    expect(middleNode.data).toBe(2);
    expect(middleNode.previous).toBe(previousNode);
    expect(middleNode.next).toBe(nextNode);
  });

  test('should throw error if next node is not an instance of DoublyLinkedNode or null', () => {
    const node = new DoublyLinkedNode('Node One');

    expect(node.next).toBeNull();

    expect(() => {
      node.next = 'Invalid Node Link';
    }).toThrow(
      new Error('Next node must be a DoublyLinkedNode instance or null')
    );
  });

  test('should throw error if previous node is not an instance of DoublyLinkedNode or null', () => {
    const node = new DoublyLinkedNode('Node One');

    expect(node.previous).toBeNull();

    expect(() => {
      node.previous = 'Invalid Node Link';
    }).toThrow(
      new Error('Previous node must be a DoublyLinkedNode instance or null')
    );
  });

  test('should return node data as string for numbers', () => {
    const node = new DoublyLinkedNode(35);
    const strData = node.toString();
    expect(typeof strData).toBe('string');
    expect(strData).toBe('35');
  });

  test('should return node data as string for objects with custom toString() method', () => {
    const data = {
      a: 1,
      b: 2,
      toString() {
        return `a: ${this.a}, b: ${this.b}`;
      },
    };

    const node = new DoublyLinkedNode(data);
    const strData = node.toString();
    expect(typeof strData).toBe('string');
    expect(strData).toBe(data.toString());
  });
});
