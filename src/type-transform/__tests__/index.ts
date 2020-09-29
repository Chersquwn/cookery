import { enumToObject } from '..'

describe('type-transform', () => {
  test('enumToObject', () => {
    enum Example {
      A = 1,
      B = '2',
      C = 'c'
    }

    expect(enumToObject(Example)).toEqual({
      A: 1,
      B: '2',
      C: 'c'
    })
  })
})
