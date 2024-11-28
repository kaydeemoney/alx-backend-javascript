import Car from "../10-car.js";

describe("TestCar class", () => {
  let tc1, tc2;

  beforeAll(() => {
    // Create an instance of TestCar before each test
    class TestCar extends Car {}

    tc1 = new TestCar("Nissan", "Turbo", "Pink");
    tc2 = tc1.cloneCar();
  });

  test("should create an instance of TestCar", () => {
    // Verify tc1 is an instance of TestCar
    expect(tc1 instanceof TestCar).toBe(true);
  });

  test("should clone the car correctly", () => {
    // Verify that tc2 is a clone of tc1
    expect(tc2 instanceof TestCar).toBe(true);
    // Ensure that tc1 and tc2 are not the same instance
    expect(tc1 === tc2).toBe(false);
  });

  test("should have equal properties after cloning", () => {
    // Verify that both tc1 and tc2 have the same properties
    expect(tc1.model).toBe(tc2.model);
    expect(tc1.engine).toBe(tc2.engine);
    expect(tc1.color).toBe(tc2.color);
  });

  test("should not be the same instance", () => {
    // Verify that tc1 and tc2 are different instances
    expect(tc1 === tc2).toBe(false);
  });
});
