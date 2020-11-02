export type ByteUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB'

/**
 * 容量单位转换
 *
 * @export
 * @param {number} byte
 * @param {ByteUnit} [unit]
 * @returns
 */
export function byteUintTransform(byte: number, unit?: ByteUnit) {
  if (byte === 0) return '0 B'

  const k = 1024
  const units: ByteUnit[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let i: number

  if (unit && units.includes(unit)) {
    i = units.findIndex(u => u === unit)
  } else {
    i = Math.floor(Math.log(byte) / Math.log(k))
  }

  return (byte / Math.pow(k, i)).toPrecision(3) + ' ' + units[i]
}
