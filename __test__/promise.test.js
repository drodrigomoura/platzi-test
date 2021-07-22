import { getDataFromApi } from "../promise";


describe('Test promises', () => {
  it('get data from API', (done) => {
    const api = 'https://rickandmortyapi.com/api/character/'

    getDataFromApi(api)
      .then(data => {
        expectExport(data.results.length).toBeGreaterThan(0)
        done()
      })
  });
})
