import { getTimezoneOffset } from '..'

describe('time', () => {
  test('getTimezoneOffset', () => {
    expect(getTimezoneOffset()).toEqual('+8')
  })
})
