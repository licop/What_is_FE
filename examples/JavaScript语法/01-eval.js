
function foo(str, a) {
  eval(str)
  console.log(a, b) // 1 , 3
}

var b = 2
foo('var b = 3', 1) 

