import { getCharacter } from '../snapshot'
import rick from '../rick.json'

describe("It's snapshot time", () => {
  it('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
  });

  it('Always fails the snapshot', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20)
    }

    expect(user).toMatchSnapshot()
  });

  it('Exception for some values', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Rick Sanchez"
    }

    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    })
  });

})
