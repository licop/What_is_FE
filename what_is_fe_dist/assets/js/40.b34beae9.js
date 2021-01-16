(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{406:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"js-值类型和引用类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-值类型和引用类型"}},[t._v("#")]),t._v(" JS 值类型和引用类型")]),t._v(" "),e("h2",{attrs:{id:"值类型和引用类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#值类型和引用类型"}},[t._v("#")]),t._v(" 值类型和引用类型")]),t._v(" "),e("p",[e("strong",[t._v("值类型(基本类型)：")]),t._v(" 数值(number)、布尔值(boolean)、undefined、string、symbol。")]),t._v(" "),e("p",[t._v("举例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  let a = 100;\n  let b = a;\n  a = 200;\n  console.log(b) // 100\n")])])]),e("p",[t._v("下图为值类型的存储")]),t._v(" "),e("p",[e("img",{attrs:{src:"/syntax&API/%E5%80%BC%E7%B1%BB%E5%9E%8B.png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("引用类型：")]),t._v(" 对象、数组、函数、null(特殊引用类型，指针指向为空地址)。")]),t._v(" "),e("p",[t._v("举例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  let a = {age: 20};\n  let b = a;\n  b.age = 21;\n  console.log(a.age) // 21\n")])])]),e("p",[t._v("下图为引用类型的存储，引用类型的存储需要内存的"),e("strong",[t._v("栈区")]),t._v("和"),e("strong",[t._v("堆区")]),t._v("（堆区是指内存里的堆内存）共同完成，"),e("strong",[t._v("栈区")]),t._v("内存保存变量标识符和指向堆内存中该对象的指针，也可以说是该对象在堆内存的地址。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/syntax&API/%E5%BC%95%E7%94%A8%E7%B1%BB%E5%9E%8B.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"typeof-运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typeof-运算符"}},[t._v("#")]),t._v(" typeof 运算符")]),t._v(" "),e("ul",[e("li",[t._v("识别所有"),e("strong",[t._v("值类型")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let a;                 typeof a   // 'undefined'\nconst str = 'abc';     typeof str // 'string'\nconst n = 100;         typeof n   // 'number'\nconst b= true;         typeof b   //  'boolean'\nconst s = Symbol('s')  typeof s   //  'symbol'\n\n")])])]),e("ul",[e("li",[t._v("识别函数")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('typeof console.log    //"function"\n\ntypeof function() {}  //"function"\n')])])]),e("ul",[e("li",[t._v("判断是否是引用类型（不可在细分）")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('typeof null          // "object"\ntypeof [\'a\', \'b\']    // "object"\ntypeof {x: 100}      // "object"\n')])])]),e("h2",{attrs:{id:"类型转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),e("h3",{attrs:{id:"字符串拼接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串拼接"}},[t._v("#")]),t._v(" 字符串拼接")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" const a = 100 + 10    // 100\n const b = 100 + '10'  // '10010'\n const c = true + '10' // 'true10'\n")])])]),e("h3",{attrs:{id:"运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[t._v("#")]),t._v(" == 运算符")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("100 == '100'  // true\n0 == ''       // true\n0 == false    // true\nfalse == ''   // true\nnull == undefined // true\n")])])]),e("p",[e("strong",[t._v("除了 == null 之外，其他都一律用===")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const obj = {x: 100}\nif(obj.a == null) {}\n// 相当于\nif(obj.a === null || obj.b === undefined) {}\n")])])]),e("h3",{attrs:{id:"if-语句和逻辑运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-语句和逻辑运算符"}},[t._v("#")]),t._v(" if 语句和逻辑运算符")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("truely")]),t._v(" 变量： !!a === true 变量")]),t._v(" "),e("li",[e("code",[t._v("falsely")]),t._v(" 变量： !!a === false 变量")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  // 以下是falsely变量。除此之外都是truly变量\n  !!0 === false;\n  !!NaN === false;\n  !!'' === false;\n  !!null === false;\n  !!undefined === false\n  !!false === false\n")])])]),e("p",[t._v("javacript 语言 if 语句判断的是"),e("code",[t._v("truely")]),t._v("和"),e("code",[t._v("falsely")]),t._v("变量")]),t._v(" "),e("h2",{attrs:{id:"深拷贝和浅拷贝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝和浅拷贝"}},[t._v("#")]),t._v(" 深拷贝和浅拷贝")]),t._v(" "),e("p",[e("strong",[t._v("浅拷贝")]),t._v(": 对于字符串类型，浅拷贝是对值的复制，对于对象来说，浅拷贝是对对象地址的复制, 也就是拷贝的结果是两个对象指向同一个地址")]),t._v(" "),e("p",[e("strong",[t._v("深拷贝")]),t._v(": 深拷贝开辟一个新的栈，两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 深拷贝\nfunction deepclone(obj = {}) {\n    // 不是对象或数组直接返回\n    if(typeof obj !== 'object' || obj == null) {\n        return obj\n    }\n    // 初始化返回结果\n    let result;\n    if(obj instanceof Array) {\n        result = []\n    } else {\n        result = {}\n    }\n\n    for(let key in obj) {\n        // 保证key不是原型属性\n        if(obj.hasOwnProperty(key)) {\n            // 递归调用\n            result[key] = deepclone(obj[key])\n        }\n    }\n\n    return result;\n}\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);