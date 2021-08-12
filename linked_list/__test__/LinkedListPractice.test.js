const LinkedListPractice = require('../LinkedListPractice');

describe('LinkedListPractice', () => {
  test('swapNodes should swap given elements', () => {
    const list = new LinkedListPractice();

    for (let i = 1; i <= 5; i++) {
      list.addToTail(i);
    }

    expect(list.toString()).toBe('1, 2, 3, 4, 5');
    list.swapNodes(1, 2);
    expect(list.toString()).toBe('2, 1, 3, 4, 5');
    list.swapNodes(2, 5);
    expect(list.toString()).toBe('5, 1, 3, 4, 2');
  });

  test('swapNodes should throw error if one or more elements not in the list', () => {
    const list = new LinkedListPractice();

    for (let i = 1; i <= 5; i++) {
      list.addToTail(i);
    }

    expect(() => {
      list.swapNodes(3, 10);
    }).toThrow();
  });
});
