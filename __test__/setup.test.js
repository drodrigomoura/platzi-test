//despues de cada prueba
afterEach(() => console.log("Despues de cada prueba"));
//despues de todas las pruebas
afterAll(() => console.log("Despues de todas las pruebas"));

//antes de todas las pruebas
beforeAll(() => console.log("Antes de todas las pruebas"));
//antes de cada prueba
beforeEach(() => console.log("Antes de cada prueba"));

describe("Prepare before ejecuted", () => {
  it("should be true", () => {
    expect(true).toBeTruthy();
  });
});
