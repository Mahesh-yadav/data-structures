const Queue = require('../Queue');

describe('Queue', () => {
  test('creates a new unbounded queue', () => {
    const queue = new Queue();

    expect(queue.maxSize).toBe(Infinity);
    expect(queue.toString()).toBe('');
  });

  test('creates a new bounded queue', () => {
    const maxSize = 5;
    const queue = new Queue(maxSize);

    expect(queue.maxSize).toBe(maxSize);
    expect(queue.toString()).toBe('');
  });

  test('enqueue data', () => {
    const queue = new Queue();
    for (let i = 1; i <= 3; i++) {
      queue.enqueue(i);
    }

    expect(queue.size).toBe(3);
    expect(queue.toString()).toBe('1, 2, 3');
  });

  test('handles queue overflow while enqueuing', () => {
    const maxSize = 3;
    const queue = new Queue(maxSize);
    for (let i = 1; i <= 3; i++) {
      queue.enqueue(i);
    }

    expect(queue.toString()).toBe('1, 2, 3');
    expect(() => {
      queue.enqueue(4);
    }).toThrow();
    expect(queue.toString()).toBe('1, 2, 3');
  });

  test('dequeue data', () => {
    const queue = new Queue();
    for (let i = 1; i <= 3; i++) {
      queue.enqueue(i);
    }

    expect(queue.size).toBe(3);
    expect(queue.toString()).toBe('1, 2, 3');

    const removedData = queue.dequeue();

    expect(removedData).not.toBeNull();
    expect(removedData.data).toBe(1);
    expect(queue.size).toBe(2);
    expect(queue.toString()).toBe('2, 3');
  });

  test('handles queue underflow while dequeuing', () => {
    const queue = new Queue();

    expect(() => {
      queue.dequeue();
    }).toThrow();
  });
});
