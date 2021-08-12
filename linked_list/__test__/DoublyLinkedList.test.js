const DoublyLinkedList = require('../DoublyLinkedList');

describe('DoublyLinkedList', () => {
  test('should create an empty list', () => {
    const list = new DoublyLinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.toString()).toBe('');
  });

  test('should add data to the head of an empty list', () => {
    const list = new DoublyLinkedList();

    list.addToHead(1);

    expect(list.head.data).toBe(1);
    expect(list.tail.data).toBe(1);
    expect(list.toString()).toBe('1');
  });

  test('should add data to the head of a list', () => {
    const list = new DoublyLinkedList();

    list.addToHead(1);
    list.addToHead(2);
    list.addToHead(3);

    expect(list.head.data).toBe(3);
    expect(list.tail.data).toBe(1);
    expect(list.toString()).toBe('3, 2, 1');
  });

  test('should add data to the tail of an empty list', () => {
    const list = new DoublyLinkedList();

    list.addToTail(1);

    expect(list.head.data).toBe(1);
    expect(list.tail.data).toBe(1);
    expect(list.toString()).toBe('1');
  });

  test('should add data to the tail of the list', () => {
    const list = new DoublyLinkedList();

    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);

    expect(list.head.data).toBe(1);
    expect(list.tail.data).toBe(3);
    expect(list.toString()).toBe('1, 2, 3');
  });

  test('should return null if head node is removed from empty list', () => {
    const list = new DoublyLinkedList();

    const removedNode = list.removeHead();

    expect(removedNode).toBeNull();
  });

  test('should remove head node from one element list', () => {
    const list = new DoublyLinkedList();

    list.addToHead(1);

    const removedNode = list.removeHead();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.toString()).toBe('');
    expect(removedNode).not.toBeNull();
    expect(removedNode.data).toBe(1);
  });

  test('should remove head node from a list with > 1 elements', () => {
    const list = new DoublyLinkedList();

    list.addToHead(1);
    list.addToTail(2);
    list.addToHead(3);

    const removedNode = list.removeHead();

    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
    expect(list.toString()).toBe('1, 2');
    expect(removedNode).not.toBeNull();
    expect(removedNode.data).toBe(3);
  });

  test('should return null if tail node is removed from empty list', () => {
    const list = new DoublyLinkedList();

    const removedNode = list.removeTail();

    expect(removedNode).toBeNull();
  });

  test('should remove tail node from one element list', () => {
    const list = new DoublyLinkedList();

    list.addToHead(1);

    const removedNode = list.removeTail();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.toString()).toBe('');
    expect(removedNode).not.toBeNull();
    expect(removedNode.data).toBe(1);
  });

  test('should remove tail node from a list with > 1 elements', () => {
    const list = new DoublyLinkedList();

    list.addToHead(1);
    list.addToTail(2);
    list.addToHead(3);

    const removedNode = list.removeTail();

    expect(list.head).not.toBeNull();
    expect(list.tail).not.toBeNull();
    expect(list.toString()).toBe('3, 1');
    expect(removedNode).not.toBeNull();
    expect(removedNode.data).toBe(2);
  });

  test('removeByData should return null if list is empty', () => {
    const list = new DoublyLinkedList();

    const removedNode = list.removeByData(1);

    expect(removedNode).toBeNull();
  });

  test('removeByData should return null if data is not in the list', () => {
    const list = new DoublyLinkedList();
    list.addToHead(1);
    list.addToHead(2);

    const removedNode = list.removeByData(3);

    expect(removedNode).toBeNull();
    expect(list.toString()).toBe('2, 1');
  });

  test('removeByData should remove data if it is the head node', () => {
    const list = new DoublyLinkedList();
    list.addToHead(1);
    list.addToHead(2);

    const removedNode = list.removeByData(2);

    expect(removedNode).not.toBeNull();
    expect(list.toString()).toBe('1');
    expect(removedNode.data).toBe(2);
  });

  test('removeByData should remove data if it is the tail node', () => {
    const list = new DoublyLinkedList();
    list.addToHead(1);
    list.addToHead(2);

    const removedNode = list.removeByData(1);

    expect(removedNode).not.toBeNull();
    expect(list.toString()).toBe('2');
    expect(removedNode.data).toBe(1);
  });

  test('removeByData should remove data', () => {
    const list = new DoublyLinkedList();
    list.addToHead(1);
    list.addToHead(2);
    list.addToTail(3);

    const removedNode = list.removeByData(1);

    expect(removedNode).not.toBeNull();
    expect(list.toString()).toBe('2, 3');
    expect(removedNode.data).toBe(1);
  });
});
