import initializeRooms from "../1-make_classrooms.js";

describe("initializeRooms", () => {
  test("should return an array of 3 ClassRoom objects with the correct sizes", () => {
    const rooms = initializeRooms();

    // Check if `rooms` is an array of length 3
    expect(Array.isArray(rooms)).toBe(true);
    expect(rooms.length).toBe(3);

    // Validate the size of each room
    expect(rooms[0]._maxStudentsSize).toBe(19);
    expect(rooms[1]._maxStudentsSize).toBe(20);
    expect(rooms[2]._maxStudentsSize).toBe(34);
  });
});
