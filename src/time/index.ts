/**
 * 获取时区
 *
 * @export
 * @returns
 */
export function getTimezoneOffset() {
  const date = new Date()
  const timezone = -date.getTimezoneOffset()
  const timezoneInHours = timezone / 60

  return `${timezoneInHours > 0 ? '+' : ''}${timezoneInHours}`
}
