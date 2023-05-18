/**
 * 判断类
 *
 */
// Record<key,value> 用于表示键值对类型的集合
export const isNumber = (value: unknown): value is number =>
  typeof value === 'number';
export const isString = (value: unknown): value is string =>
  typeof value === 'string';
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';
export const isUndef = (value: unknown): value is undefined =>
  typeof value === 'undefined';

export const isFunction = (value: unknown): value is (...args: any) => any =>
  typeof value === 'function';
export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === 'object';
