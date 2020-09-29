export function isObject(obj: any): obj is { [key: string]: any } {
  return Object.prototype.toString.call(obj) === '[object Object]'
}