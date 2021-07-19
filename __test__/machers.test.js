describe("Comparadores comunes", () => {
  const user = {
    name: "rodrigo",
    lastname: "moura",
  };

  const user2 = {
    name: "rodrigo",
    lastname: "moura",
  };

  const user3 = {
    name: "rodrigo",
    lastname: "moura3",
  };

  /* it es un alias de test: son lo mismo */
  //it("should be equal", () => {
  //expect(user).toEqual(user2);
  //});

  test("igualdad de elementos", () => {
    expect(user).toEqual(user2);
  });

  test("no son iguales", () => {
    expect(user).not.toEqual(user3);
  });
});
