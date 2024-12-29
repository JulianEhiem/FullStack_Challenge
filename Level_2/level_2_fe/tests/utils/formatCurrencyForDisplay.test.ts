import {assert, describe, it} from "vitest";
import formatCurrencyForDisplay from "../../src/utils/formatCurrencyForDisplay";


describe("formatCurrencyForDisplay", () => {
    it("returns correct formatted values", () => {
        const price1 = 343.5;
        const price2 = 343;
        const price3 = 2;
        assert.strictEqual(formatCurrencyForDisplay(price1), '$343.50')
        assert.strictEqual(formatCurrencyForDisplay(price2), '$343.00')
        assert.strictEqual(formatCurrencyForDisplay(price3), '$2.00')
    })
})