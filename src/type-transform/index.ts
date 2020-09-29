/**
 * 枚举 enum 转 object
 *
 * @export
 * @param {*} enumeration
 * @returns
 */
export function enumToObject(enumeration: any) {
  const map: { [key: string]: any } = {} 

  for (const key in enumeration) {
    if (!isNaN(Number(key))) continue

    const val = enumeration[key] as string | number

    if (val !== undefined && val !== null) map[key] = val
  }

  return map
}
