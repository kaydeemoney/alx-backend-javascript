import Airport from "../7-airport.js";

describe("Airport class", () => {
  let airportSF;

  beforeEach(() => {
    // Create a new instance before each test
    airportSF = new Airport('San Francisco Airport', 'SFO');
  });

  test("should create an Airport instance with valid attributes", () => {
    // Validate the properties of the Airport instance
    expect(airportSF).toBeInstanceOf(Airport);
    expect(airportSF.name).toBe('San Francisco Airport');
    expect(airportSF.code).toBe('SFO');
  });

  test("should return the correct string representation of the Airport", () => {
    // Check if toString() method works as expected
    const stringRepresentation = airportSF.toString();
    expect(stringRepresentation).toBe('San Francisco Airport (SFO)');
  });
});
