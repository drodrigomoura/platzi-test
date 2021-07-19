import { isFalse, isNull, isTrue, isUndefined } from "../true";

describe("Nulos", () => {
  it("should be null", () => {
    expect(isNull()).toBeNull();
  });
});

describe("Verdadero", () => {
  it("should be true", () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe("Falsos", () => {
  it("should be false", () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe("Undefined", () => {
  it("should be undefined", () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe("Negacion", () => {
  it("should be true", () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
