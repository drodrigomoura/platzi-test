import { callbackHell } from "../callbacks";

describe('Test callback', () => {
  it('Callback', (done) => {
    function otherCallback(data) {
      expect(data).toBe('Hola JS')
      done()
    }
    callbackHell(otherCallback)
  });

})
