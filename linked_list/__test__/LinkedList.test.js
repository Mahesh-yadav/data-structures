const LinkedList = require('../LinkedList');

describe('LinkedList', () => {
  test('should create an empty list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.toString()).toBe('');
  });

  test('addToHead should add data to the head of the list', () => {
    const list = new LinkedList();

    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);

    expect(list.toString()).toBe('3, 2, 1');
  });

  test('addToTail should add data to the tail of the list', () => {
    const list = new LinkedList();

    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);

    expect(list.toString()).toBe('1, 2, 3');
  });

  test('removeHead should return null if head node is removed from empty list', () => {
    const list = new LinkedList();

    const removedNode = list.removeHead();

    expect(removedNode).toBeNull();
  });

  test('removeHead should remove head node from non-empty list', () => {
    const list = new LinkedList();

    list.addToHead(1);
    list.addToTail(2);

    const removedNode = list.removeHead();

    expect(list.toString()).toBe('2');
    expect(removedNode).not.toBeNull();
    expect(removedNode.data).toBe(1);
  });
});
