import { sumar, multiplicar, restar, dividir } from "../maths";

describe("maths calculations", () => {
  it("should sum values", () => {
    expect(sumar(1, 5)).toBe(6);
  });

  it("should rest values", () => {
    expect(restar(1, 5)).toBe(-4);
  });

  it("should multiply values", () => {
    expect(multiplicar(6, 3)).toBe(18);
  });

  it("should divide values", () => {
    expect(dividir(6, 2)).toBe(3);
  });
});
