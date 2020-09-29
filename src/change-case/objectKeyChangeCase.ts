import { camelCase, constantCase, pascalCase, snakeCase } from 'change-case'
import { objectKeyConvert, Input } from './objectKeyConvert'

/**
 * 转驼峰
 *
 * @export
 * @template T
 * @param {(T | T[])} obj
 * @returns { [key: string]: any }
 * @example
 * ```
 * const source = {
 *  user_name: 'Alice'
 * }
 * 
 * const target = objectKeyCamelCase(source)    // target = { userName: 'Alice' }
 * ```
 */
export function objectKeyCamelCase<T extends Input>(obj: T | T[]) {
  return objectKeyConvert(obj, camelCase)
}

/**
 * 转全大写下划线分隔
 *
 * @export
 * @template T
 * @param {(T | T[])} obj
 * @returns
 * @example
 * ```
 * const source = {
 *  user_name: 'Alice'
 * }
 * 
 * const target = objectKeyConstantCase(source)    // target = { USER_NAME: 'Alice' }
 * ```
 */
export function objectKeyConstantCase<T extends Input>(obj: T | T[]) {
  return objectKeyConvert(obj, constantCase)
}

/**
 * 转首字母大写驼峰
 *
 * @export
 * @template T
 * @param {(T | T[])} obj
 * @returns
 * @example
 * ```
 * const source = {
 *  user_name: 'Alice'
 * }
 * 
 * const target = objectKeyPascalCase(source)    // target = { UserName: 'Alice' }
 * ```
 */
export function objectKeyPascalCase<T extends Input>(obj: T | T[]) {
  return objectKeyConvert(obj, pascalCase)
}

/**
 * 转全小写下划线分隔
 *
 * @export
 * @template T
 * @param {(T | T[])} obj
 * @returns
 * @example
 * ```
 * const source = {
 *  userName: 'Alice'
 * }
 * 
 * const target = objectKeySnakeCase(source)    // target = { user_name: 'Alice' }
 * ```
 */
export function objectKeySnakeCase<T extends Input>(obj: T | T[]) {
  return objectKeyConvert(obj, snakeCase)
}