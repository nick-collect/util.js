/**
 *
 * http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types
 *
 * @param  {*}        The value to check.
 * @return {Boolean}  Returns `true` if `value` is an object, else `false`.
 */
function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export default isObject
