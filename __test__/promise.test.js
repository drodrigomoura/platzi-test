import { getDataFromApi } from "../promise";


describe('Test promises', () => {
  it('get data from API', done => {
    const api = 'https://rickandmortyapi.com/api/character/'

    getDataFromApi(api)
      .then(data => {
        expect(data.results.length).toBeGreaterThan(0)
        done()
      })
  });

  it("resolve an 'hola!'", () => {
    return expect(Promise.resolve('hola!')).resolves.toBe('hola!')
  })

  it("reject with an error", () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})
