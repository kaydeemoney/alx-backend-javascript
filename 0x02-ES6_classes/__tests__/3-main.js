import Currency from "../3-currency.js";

describe("Currency class", () => {
  test("should create a Currency instance with valid attributes", () => {
    const dollar = new Currency("$", "Dollars");

    // Validate the properties of the instance
    expect(dollar.code).toBe("$");
    expect(dollar.name).toBe("Dollars");
  });

  test("should correctly display the full currency", () => {
    const dollar = new Currency("$", "Dollars");

    // Validate the `displayFullCurrency` method
    expect(dollar.displayFullCurrency()).toBe("Dollars ($)");
  });
});
