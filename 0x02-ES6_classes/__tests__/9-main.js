import listOfStudents from "../9-hoisting.js";

describe("listOfStudents array", () => {
  test("should log the list of students correctly", () => {
    // Verify that listOfStudents is an array and it is not empty
    expect(Array.isArray(listOfStudents)).toBe(true);
    expect(listOfStudents.length).toBeGreaterThan(0);
  });

  test("should map to fullStudentDescription correctly", () => {
    // Map over the list and check that the 'fullStudentDescription' exists for each student
    const listPrinted = listOfStudents.map(student => student.fullStudentDescription);

    // Ensure that all elements of listPrinted are strings (assuming 'fullStudentDescription' is a string)
    expect(listPrinted.every(description => typeof description === 'string')).toBe(true);
  });
});
