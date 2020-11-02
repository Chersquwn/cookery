/**
 * 格式化银行卡号
 *
 * @export
 * @param {string} cardNum
 * @returns
 */
export function formatCreditCard(cardNum: string) {
  return cardNum
    .replace(/\s/g, '')
    .replace(/[^\d]/g, '')
    .replace(/(\d{4})(?=\d)/g, '$1 ')
}

/**
 * 格式化手机号
 *
 * @export
 * @param {string} phoneNum
 * @returns
 * @example
 * ```
 * formatPhoneNumber('13888888888')    // 138 8888 8888
 * ```
 */
export function formatPhoneNumber(phoneNum: string) {
  return phoneNum
    .replace(/\s/g, '')
    .replace(/[^\d]/g, '')
    .replace(/(\d{3})(\d{4})(?=\d)/g, '$1 $2 ')
}

/**
 * 格式化数字，添加千位分隔符
 *
 * @export
 * @param {(string | number)} num
 * @returns
 * @example
 * ```
 * formatNumberWithGroupSeparator(1234567)    // 1,234,567
 * ```
 */
export function formatNumberWithGroupSeparator(num: string | number) {
  const numStr = String(num)
  const integer = numStr.split('.')[0]
  const decimal = numStr.split('.')[1]

  return (
    integer
      .replace(/\s/g, '')
      .replace(/[^\d]/g, '')
      .replace(/(?!^)(?=(\d{3})+$)/g, ',') + (decimal ? '.' + decimal : '')
  )
}
