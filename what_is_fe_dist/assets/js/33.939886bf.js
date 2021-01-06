(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{399:function(a,t,s){"use strict";s.r(t);var r=s(27),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-类型系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-类型系统"}},[a._v("#")]),a._v(" JavaScript 类型系统")]),a._v(" "),s("h2",{attrs:{id:"强类型与弱类型-类型安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强类型与弱类型-类型安全"}},[a._v("#")]),a._v(" 强类型与弱类型(类型安全)")]),a._v(" "),s("p",[s("strong",[a._v("强类型")]),a._v("语言层面限制函数的实参类型必须与形参类型相同。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("class Main {\n    static void foo(int num) {\n        System.out.println(num)\n    }\n    publish static void main(String[] args) {\n        Main.foo(100)  // ok\n        Main.foo('100') // error '100' is a string\n        Main.foo(Inerger.parseInt('100')) // ok\n    }\n}\n")])])]),s("p",[s("strong",[a._v("弱类型")]),a._v("语言层面层面不会限制实参的类型。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function foo(num) {\n    console.log(num)\n}\n\nfoo(100)  // ok\nfoo('100') // ok\nfoo(parseInt('100')) // ok\n")])])]),s("p",[s("strong",[a._v("强类型")]),a._v("有更强的类型约束，而"),s("strong",[a._v("弱类型")]),a._v("中几乎没有约束")]),a._v(" "),s("p",[s("strong",[a._v("强类型")]),a._v("语言中不允许任意的隐式类型转换，而"),s("strong",[a._v("弱类型")]),a._v("语言中则允许任意的数据隐式类型转换")]),a._v(" "),s("h2",{attrs:{id:"静态类型与动态类型-类型检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态类型与动态类型-类型检查"}},[a._v("#")]),a._v(" 静态类型与动态类型(类型检查)")]),a._v(" "),s("p",[s("strong",[a._v("静态类型")]),a._v("一个变量声明时他的类型就是明确的，声明过后，它的类型就不允许修改了")]),a._v(" "),s("p",[s("strong",[a._v("动态类型")]),a._v("运行阶段才能够明确变量类型，而且变量的类型可以随时发生变化, 动态类型语言中变量是没有类型的，变量中存放的值是有类型的")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var foo = 100\nfoo = 'bar'\n\nconsole.log(foo)\n")])])]),s("p",[s("img",{attrs:{src:"/syntax&API/language_type.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"javascript-类型系统特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-类型系统特征"}},[a._v("#")]),a._v(" JavaScript 类型系统特征")]),a._v(" "),s("p",[a._v("JavaScript 是门灵活多变的弱类型和动态类型的语言，且缺失类型系统的可靠性。")]),a._v(" "),s("p",[a._v("为什么会这样？因为 JavaScript 早前的应用简单，且没有编译环节。")]),a._v(" "),s("p",[a._v("目前随着 JavsScript 的应用规模越来越大，这种灵活多变的“优势”就变成了短板。")]),a._v(" "),s("h2",{attrs:{id:"javascript-弱类型系统产生的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-弱类型系统产生的问题"}},[a._v("#")]),a._v(" JavaScript 弱类型系统产生的问题")]),a._v(" "),s("h3",{attrs:{id:"_1-异常需要等到运行时才能发现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-异常需要等到运行时才能发现"}},[a._v("#")]),a._v(" 1. 异常需要等到运行时才能发现")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const obj = {}\n\n// obj.foo()\n\nsetTimeout(() => {\n  obj.foo()\n}, 1000000)\n")])])]),s("h3",{attrs:{id:"_2-函数功能可能发生改变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-函数功能可能发生改变"}},[a._v("#")]),a._v(" 2. 函数功能可能发生改变")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function sum (a, b) {\n   return a + b\n}\n\nconsole.log(sum(100, 100))\nconsole.log(sum(100, '100')) // \"100100\"\n")])])]),s("h3",{attrs:{id:"_3-对象索引器的错误用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-对象索引器的错误用法"}},[a._v("#")]),a._v(" 3. 对象索引器的错误用法")]),a._v(" "),s("p",[a._v("对象的属性值自动转换为字符串")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const obj = {}\n\nobj[true] = 100 // 属性名会自动转换为字符串\n\nconsole.log(obj['true']) // 100\n")])])]),s("h2",{attrs:{id:"强类型的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强类型的优势"}},[a._v("#")]),a._v(" 强类型的优势")]),a._v(" "),s("ol",[s("li",[a._v("错误可以更早的暴露")]),a._v(" "),s("li",[a._v("代码更智能，编辑器提示更完善，编码更准确")]),a._v(" "),s("li",[a._v("重构更牢靠，更改代码，会提示报错")]),a._v(" "),s("li",[a._v("减少不必要的类型判断")])])])}),[],!1,null,null,null);t.default=n.exports}}]);