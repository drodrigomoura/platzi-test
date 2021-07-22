import { arrayColors, arrayFruits } from "../arrays";

describe("Exits an element", () => {
  it("should contains a banana ", () => {
    expect(arrayFruits()).toContain("banana");
  });

  it("should not contains a platano ", () => {
    expect(arrayFruits()).not.toContain("platano");
  });

  it("should have a lenght === 6", () => {
    expect(arrayFruits()).toHaveLength(6);
  });

  it("should exist a color", () => {
    expect(arrayColors()).toContain("azul");
  });
});
