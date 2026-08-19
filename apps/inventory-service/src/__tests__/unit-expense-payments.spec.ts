import { paymentsCoverCost } from "../common/unit-expense-payments.js";

describe("unit expense payment coverage", () => {
  it("requires Operational splits to equal cost", () => {
    expect(paymentsCoverCost(15000, [{ amount: 10000 }, { amount: 5000 }])).toBe(true);
    expect(paymentsCoverCost(15000, [{ amount: 10000 }])).toBe(false);
  });
});
