import HolbertonClass from "../8-hbtn_class.js";

describe("HolbertonClass class", () => {
  let hc;

  beforeEach(() => {
    // Create a new instance before each test
    hc = new HolbertonClass(12, "Mezzanine");
  });

  test("should create an instance with correct properties", () => {
    // Validate the properties of the HolbertonClass instance
    expect(hc).toBeInstanceOf(HolbertonClass);
    expect(hc._students).toBe(12);
    expect(hc._location).toBe("Mezzanine");
  });

  test("should return correct value when converted to a number", () => {
    // Check if the instance is correctly converted to a number
    expect(Number(hc)).toBe(12);
  });

  test("should return correct value when converted to a string", () => {
    // Check if the instance is correctly converted to a string
    expect(String(hc)).toBe("Holberton Class Mezzanine");
  });
});
