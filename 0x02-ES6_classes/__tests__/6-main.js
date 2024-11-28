import SkyHighBuilding from "../6-sky_high.js";

describe("SkyHighBuilding class", () => {
  let building;

  beforeEach(() => {
    // Create a new instance before each test
    building = new SkyHighBuilding(140, 60);
  });

  test("should create a SkyHighBuilding instance with valid attributes", () => {
    // Validate the properties of the SkyHighBuilding instance
    expect(building).toBeInstanceOf(SkyHighBuilding);
    expect(building.sqft).toBe(140); // Assuming sqft is the size of the building
    expect(building.floors).toBe(60); // Assuming floors is the number of floors
  });

  test("should return correct evacuation warning message", () => {
    // Check if evacuationWarningMessage method works as expected
    const warningMessage = building.evacuationWarningMessage();
    expect(warningMessage).toBe("Evacuate the building immediately!"); // Assuming the expected message
  });
});
