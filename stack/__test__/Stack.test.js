const Stack = require('../Stack');

describe('Stack', () => {
  test('creates a new unbounded stack', () => {
    const stack = new Stack();

    expect(stack.maxSize).toBe(Infinity);
    expect(stack.toString()).toBe('');
  });

  test('creates a new bounded stack', () => {
    const maxSize = 5;
    const stack = new Stack(maxSize);

    expect(stack.maxSize).toBe(maxSize);
    expect(stack.toString()).toBe('');
  });

  test('pushes data', () => {
    const stack = new Stack();
    for (let i = 1; i <= 3; i++) {
      stack.push(i);
    }

    expect(stack.size).toBe(3);
    expect(stack.toString()).toBe('3, 2, 1');
  });

  test('handles stack overflow while pushing data', () => {
    const maxSize = 3;
    const stack = new Stack(maxSize);
    for (let i = 1; i <= 3; i++) {
      stack.push(i);
    }

    expect(stack.toString()).toBe('3, 2, 1');
    expect(() => {
      stack.push(4);
    }).toThrow();
    expect(stack.toString()).toBe('3, 2, 1');
  });

  test('pop data from a not-empty stack', () => {
    const stack = new Stack();
    for (let i = 1; i <= 3; i++) {
      stack.push(i);
    }

    const removedData = stack.pop();

    expect(removedData).not.toBeNull();
    expect(removedData.data).toBe(3);
    expect(stack.size).toBe(2);
    expect(stack.toString()).toBe('2, 1');
  });

  test('handles stack underflow while popping', () => {
    const stack = new Stack();

    expect(() => {
      stack.pop();
    }).toThrow();
  });

  test('peek data from a not-empty stack', () => {
    const stack = new Stack();
    for (let i = 1; i <= 3; i++) {
      stack.push(i);
    }

    const top = stack.peek();

    expect(top).not.toBeNull();
    expect(top.data).toBe(3);
    expect(stack.size).toBe(3);
    expect(stack.toString()).toBe('3, 2, 1');
  });

  test('returns null while peeking an empty stack', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();
  });
});
