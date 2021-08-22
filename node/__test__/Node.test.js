const Node = require('../node');

describe('Node', () => {
  test('should create a node with a value and no next link', () => {
    const node = new Node(90);

    expect(node.data).toBe(90);
    expect(node.next).toBeNull();
  });

  test('should update node data', () => {
    const node = new Node(1);
    node.data = 2;

    expect(node.data).toBe(2);
  });

  test('should link nodes together', () => {
    const firstNode = new Node('Node One');
    const secondNode = new Node('Node Two');
    firstNode.next = secondNode;

    expect(firstNode.next).toBe(secondNode);
    expect(secondNode.next).toBe(null);
  });

  test('should throw error if next node is not an instance of Node or null', () => {
    const firstNode = new Node('Node One');

    expect(() => {
      firstNode.next = 'Invalid Node Link';
    }).toThrow(new Error('Next node must be a Node instance or null'));
  });
});
