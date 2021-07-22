describe("Test strings", () => {
  const text = "un bonito texto";
  it("should contains 'bonito'", () => {
    expect(text).toMatch(/bonito/);
  });

  it("should not contains 'es'", () => {
    expect(text).not.toMatch(/es/);
  });

  it("should have a length of 15 characters", () => {
    expect(text).toHaveLength(15);
  });
});
