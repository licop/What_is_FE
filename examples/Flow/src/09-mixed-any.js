/**
 * Mixed Any
 *
 * @flow
 */

// string | number | boolean | ....
// mixed是强类型的
function passMixed (value: mixed) {
  if (typeof value === 'string') {
    value.substr(1)
  }

  if (typeof value === 'number') {
    value * value
  }
}

passMixed('string')

passMixed(100)

// ---------------------------------
// any是弱类型的
function passAny (value: any) {
  value.substr(1)

  value * value
}

passAny('string')

passAny(100)