import HolbertonCourse from "../2-hbtn_course.js";

describe("HolbertonCourse class", () => {
  test("should create a HolbertonCourse instance with valid attributes", () => {
    const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);

    // Validate the properties of the instance
    expect(c1.name).toBe("ES6");
    expect(c1.length).toBe(1);
    expect(c1.students).toEqual(["Bob", "Jane"]);

    // Update the name and validate
    c1.name = "Python 101";
    expect(c1.name).toBe("Python 101");
  });

  test("should throw an error when setting an invalid name", () => {
    const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
    expect(() => {
      c1.name = 12; // Invalid name
    }).toThrow("Name must be a string");
  });

  test("should throw an error when creating a course with invalid length", () => {
    expect(() => {
      new HolbertonCourse("ES6", "1", ["Bob", "Jane"]); // Invalid length
    }).toThrow("Length must be a number");
  });
});
