import { getCharacter } from '../snapshot'
import rick from '../rick.json'

describe("It's snapshot time", () => {
  it('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
  });


})
