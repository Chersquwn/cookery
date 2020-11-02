import { enumToObject, byteUintTransform } from '..'

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

describe('unit-transform', () => {
  test('byteUnitTransform', () => {
    const byte = 1024 * 1024 * 12

    expect(byteUintTransform(byte)).toEqual('12.0 MB')
    expect(byteUintTransform(byte, 'MB')).toEqual('12.0 MB')
    expect(byteUintTransform(byte, 'GB')).toEqual('0.0117 GB')
  })
})
