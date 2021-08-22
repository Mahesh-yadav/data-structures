const HashMap = require('../HashMap');

describe('HashMap', () => {
  test('should create an hashmap of given size', () => {
    const map = new HashMap(5);

    expect(map).not.toBeNull();
    expect(map.size).toBe(5);
  });

  test('should map key to array index', () => {
    const map = new HashMap(5);
    const key = 'any key';

    const index = map.hash(key);

    expect(typeof index).toBe('number');
    expect(index).toBeLessThanOrEqual(4);
    expect(index).toBeGreaterThanOrEqual(0);
  });

  test("assign() should overwrite a key's value if already exists", () => {
    const map = new HashMap(5);
    map.assign('one', 1);
    map.assign('omg', 3);
    map.assign('one', 'one');
    map.assign('omg', 'three');

    expect(map.retrieve('one')).toBe('one');
    expect(map.retrieve('omg')).toBe('three');
  });

  test("should retrieve a key's value", () => {
    const map = new HashMap(5);
    map.assign('one', 1);

    expect(map.retrieve('one')).toBe(1);
  });

  test("should retrieve a key's value in case of collision", () => {
    const map = new HashMap(5);
    map.assign('one', 1);
    map.assign('two', 2);
    map.assign('omg', 3);

    expect(map.retrieve('one')).toBe(1);
    expect(map.retrieve('omg')).toBe(3);
  });

  test('retrieve() should return null if key does not exist', () => {
    const map = new HashMap(5);
    map.assign('one', 1);
    map.assign('two', 2);

    expect(map.retrieve('three')).toBeNull();
  });
});
