/**
 * Mixed Any
 *
 * 
 */
// string | number | boolean | ....
function passMixed(value) {
  if (typeof value === 'string') {
    value.substr(1);
  }

  if (typeof value === 'number') {
    value * value;
  }
}

passMixed('string');
passMixed(100); // ---------------------------------

function passAny(value) {
  value.substr(1);
  value * value;
}

passAny('string');
passAny(100);