import {assert, describe, it} from "vitest";
import {getEnumKeyByEnumValue} from "../../src/utils/getEnumKeyByEnumValue";

enum hexColor {
    "#fff"= "WHITE",
    "#000"="BLACK"
}

describe("getEnumKeyByEnumValue", () => {
    it("should return the appropriate key when value is provided", () => {
        assert.equal(getEnumKeyByEnumValue(hexColor, "BLACK"), "#000");
        assert.equal(getEnumKeyByEnumValue(hexColor, "WHITE"), "#fff");
    })
})