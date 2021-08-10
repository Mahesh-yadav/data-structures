const Node = require('../node');

describe('Node class', () => {
  test('should create node with a value and no links', () => {
    const node = new Node(90);

    expect(node.data).toBe(90);
    expect(node.next).toBeNull();
  });

  test('should link nodes together', () => {
    const firstNode = new Node('Node One');
    const secondNode = new Node('Node Two');
    firstNode.next = secondNode;

    expect(firstNode.next).toBe(secondNode);
    expect(secondNode.next).toBe(null);
  });

  test('should throw error if next node is not an instance of Node', () => {
    const firstNode = new Node('Node One');

    expect(() => {
      firstNode.next = 'Invalid Node Link';
    }).toThrow(new Error('Next node must be a Node instance'));
  });
});
