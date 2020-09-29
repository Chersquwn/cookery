import { formatCreditCard, formatNumberWithGroupSeparator, formatPhoneNumber } from '..'

describe('format', () => {
  describe('formatCreditCard', () => {
    test('format creditCard 6259655533117715 => 6259 6555 3311 7715', () => {
      expect(formatCreditCard('6259655533117715')).toBe('6259 6555 3311 7715')
    })
  })

  describe('formatPhoneNumber', () => {
    test('format phoneNumber 18888888888 => 188 8888 8888', () => {
      expect(formatPhoneNumber('18888888888')).toBe('188 8888 8888')
    })
  })

  describe('formatNumberWithGroupSeparator', () => {
    test('format number 1234567.89 => 1,234,567.89', () => {
      expect(formatNumberWithGroupSeparator('1234567.89')).toBe('1,234,567.89')
    })
  })
})