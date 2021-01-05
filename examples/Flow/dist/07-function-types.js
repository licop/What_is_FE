/**
 * 函数类型
 *
 * 
 */
function foo(callback) {
  callback('string', 100);
}

foo(function (str, n) {// str => string
  // n => number
});