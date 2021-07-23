import { getDataFromApi } from "../promise";

describe('Test async/await', () => {
  it('test request to an API', async () => {
    const api = 'https://rickandmortyapi.com/api/character/'

    const getRick = 'https://rickandmortyapi.com/api/character/1'

    await getDataFromApi(api)
      .then(data => {
        expect(data.results.length).toBeGreaterThan(0)
      })

    await getDataFromApi(getRick)
      .then(data => {
        expect(data.name).toEqual('Rick Sanchez')
      })
  });

  it('Test request to an API with error 404', async () => {
    const apiError = 'http://httpstat.us/404'

    const peticion = getDataFromApi(apiError)

    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'))
  });

  it('Test request to an API with error 500', async () => {
    const apiError = 'http://httpstat.us/500'

    const peticion = getDataFromApi(apiError)

    await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'))
  });

  it("Resolve an 'hola'", async () => {
    await expect(Promise.resolve('hola')).resolves.toBe('hola')
    await expect(Promise.resolve('Error')).resolves.toBe('Error')
  });
})
