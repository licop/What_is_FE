/**
 * 类型注解
 *
 * 
 */
function square(n) {
  return n * n;
}

let num = 100; // num = 'string' // error

function foo() {
  return 100; // ok
  // return 'string' // error
}

function bar() {// return undefined
}