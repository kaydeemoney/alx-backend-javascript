// __tests__/5-main.js

import Building from '../5-building.js';

describe('Building class', () => {
  let b;

  beforeAll(() => {
    // Create a Building instance with a valid size
    b = new Building(100);
  });

  test('should create a Building instance with valid attributes', () => {
    // Validate that the instance is a Building
    expect(b).toBeInstanceOf(Building);

    // Validate the size property
    expect(b.size).toBe(100); // Check if the size is 100
  });

  test('should throw an error when creating an instance without size', () => {
    expect(() => new Building()).toThrow("Size is required");
  });
});
