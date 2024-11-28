import ClassRoom from "../0-classroom.js";

describe('ClassRoom', () => {
  test('should create a ClassRoom with the correct max size', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10); // Example assertion
  });
});
