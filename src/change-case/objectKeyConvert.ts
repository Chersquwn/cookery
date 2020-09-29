import { Options } from 'change-case'
import mapObject, { Mapper } from 'map-obj'
import { isArray } from '../utils/isArray'
import { isObject } from '../utils/isObject'
import { throwError } from '../utils/throwError'

export type Input = Record<string, any>

export type ObjectKeyConverter = (input: string, options?: Options) => string

export function objectKeyConvert<T extends Input>(obj: T | T[], objectKeyConverter: ObjectKeyConverter) {
  if (!isObject(obj) && !isArray(obj)) throwError(`${obj} is not an object or object array.`)

  const mapper: Mapper<{ [key: string] : any}, string, any> = (key, value) => {
    const v = isArray(value) ? value.map(v => {
      if (isObject(v)) {
        return mapObject(v, mapper)
      }

      return v
    }) : isObject(value) ? mapObject(value, mapper) : value

    return [objectKeyConverter(key as string), v]
  }

  return mapObject(obj, mapper)
}