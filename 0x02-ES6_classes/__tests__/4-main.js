import Pricing from "../4-pricing.js";
import Currency from "../3-currency.js";

describe("Pricing class", () => {
  test("should create a Pricing instance with valid attributes", () => {
    const currency = new Currency("EUR", "Euro");
    const p = new Pricing(100, currency);

    // Validate the properties of the Pricing instance
    expect(p.amount).toBe(100);
    expect(p.currency).toBe(currency);

    // Validate the properties of the Currency instance
    expect(p.currency.code).toBe("EUR");
    expect(p.currency.name).toBe("Euro");
  });

  test("should correctly display the full price", () => {
    const currency = new Currency("EUR", "Euro");
    const p = new Pricing(100, currency);

    // Validate the `displayFullPrice` method
    expect(p.displayFullPrice()).toBe("100 Euro (EUR)");
  });
});
