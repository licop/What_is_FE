# Vue 源码解析--模板编译和组件化

> 完整 Vue 代码注释解析参考 [Vue 注释解析](https://github.com/licop/vue)

## 模板编译

模板编译的主要目的是将**模板（template）**转换为**渲染函数（render）**。

**模板 template**

```html
<div>
  <h1 @click="handler">title</h1>
  <p>some content</p>
</div>
```

**渲染函数 render**

```js
render (h) {
  return h('div', [
    h('h1', { on: { click: this.handler} }, 'title'),
    h('p', 'some content')
  ])
}
```

**模板编译的作用**

- Vue2.x 使用 VNode 描述视图以及各种交互，用户编写自己的 VNode 比较复杂
- 用户只需编写类似 HTML 的代码，Vue 模板，通过编译器将模板转换为返回 VNode 的 render 函数
- .vue 文件会被 webpack 在构建的过程中转换为 render 函数

## 模板编译的结果

带编译器版本的 Vue.js 中，使用 template 或 el 的方式设置模板

```html
<div id="app">
  <h1>Vue<span>模板编译过程</span></h1>
  <p>{{ msg }}</p>
  <comp @myclick="handler"></comp>
</div>
<script src="../../dist/vue.js"></script>
<script>
  Vue.component("comp", {
    template: "<div>I am a comp</div>",
  });
  const vm = new Vue({
    el: "#app",
    data: {
      msg: "Hello compiler",
    },
    methods: {
      handler() {
        console.log("test");
      },
    },
  });
  console.log(vm.$options.render);
</script>
```

编译后 render 输出的结果:

```js
(function anonymous() {
  with (this) {
    return _c(
      "div",
      { attrs: { id: "app" } },
      [
        _m(0),
        _v(" "),
        _c("p", [_v(_s(msg))]),
        _v(" "),
        _c("comp", { on: { myclick: handler } }),
      ],
      1
    );
  }
});
```

我们可以看到模板中的写法要比 render 函数简单清晰很多

- this 为 Vue 实例，使用 `with` 下面的方法可以省略 this
- `_c` 是 createElement() 方法，定义的位置 instance/render.js 中

```js
// 对模板编译生成的render进行渲染 createElement => h()函数
vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false);
```

- `_m`、`_v`、`_s` 等相关的渲染函数，在 instance/render-helps/index.js 中

```js
// instance/render-helps/index.js
// target是Vue实例，给Vue实例添加下划线render方法
export function installRenderHelpers(target: any) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString; // 转化为字符串
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic; // 渲染静态内容
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode; // 创建文本VNode节点
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
```

### Vue Template Explorer

下面是将 Vue Template 转换为渲染函数的在线工具，可以观察到 Vue2.x 和 Vue3.0 的不同

- [vue-template-explorer](https://template-explorer.vuejs.org/#%3Cdiv%20id%3D%22app%22%3E%0A%20%20%3Cselect%3E%0A%20%20%20%20%3Coption%3E%0A%20%20%20%20%20%20%7B%7B%20msg%20%20%7D%7D%0A%20%20%20%20%3C%2Foption%3E%0A%20%20%3C%2Fselect%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20hello%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E) Vue 2.6 把模板编译成 render 函数的工具
- [vue-next-template-explorer](https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%20id%3D%5C%22app%5C%22%3E%5Cn%20%20%3Cselect%3E%5Cn%20%20%20%20%3Coption%3E%5Cn%20%20%20%20%20%20%7B%7B%20msg%20%20%7D%7D%5Cn%20%20%20%20%3C%2Foption%3E%5Cn%20%20%3C%2Fselect%3E%5Cn%20%20%3Cdiv%3E%5Cn%20%20%20%20hello%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Fdiv%3E%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22prefixIdentifiers%22%3Afalse%2C%22optimizeImports%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22inline%22%3Afalse%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup-const%22%2C%22setupRef%22%3A%22setup-ref%22%2C%22setupConst%22%3A%22setup-const%22%2C%22setupLet%22%3A%22setup-let%22%2C%22setupMaybeRef%22%3A%22setup-maybe-ref%22%2C%22setupProp%22%3A%22props%22%2C%22vMySetupDir%22%3A%22setup-const%22%7D%2C%22optimizeBindings%22%3Afalse%7D%7D) Vue 3.0 把模板编译成 render 函数的工具

## 模板编译过程

Vue 模板编译可以分为 3 个部分**解析**、**优化**、**生成**

### 编译的入口

在完整带编译器版本的 Vue, 找到`compileToFunctions`函数，这里是编译的入口

```js
// src\platforms\web\entry-runtime-with-compiler.js
Vue.prototype.$mount = function (
  ......
  // 把 template 转换成 render 函数
  const { render, staticRenderFns } = compileToFunctions(template, {
    outputSourceRange: process.env.NODE_ENV !== 'production',
    shouldDecodeNewlines,
    shouldDecodeNewlinesForHref,
    delimiters: options.delimiters,
    comments: options.comments
  }, this)
  options.render = render options.staticRenderFns = staticRenderFns
  ......
)
```

调试 `compileToFunctions()` 执行过程，生成渲染函数的过程

- **compileToFunctions**: src\compiler\to-function.js
- **complie(template, options)**: src\compiler\create-compiler.js
- **baseCompile(template.trim(), finalOptions)**: src\compiler\index.js

`baseCompile`是模板编译的核心函数，里面主要做了三件事情：

1. 把模板转化为抽象语法树
2. 优化抽象语法树
3. 把抽象语法树生成字符串形式的 js 代码

```js
// src\compiler\index.js
export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 1. 把模板转化为抽象语法树
  // 抽象语法树，用树形的方式描述代码结构
  const ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    // 2.优化抽象语法树
    optimize(ast, options);
  }
  // 3.把抽象语法树生成字符串形式的js代码
  const code = generate(ast, options);
  return {
    ast,
    // 渲染函数
    render: code.render,
    // 静态渲染方法
    staticRenderFns: code.staticRenderFns,
  };
});
```

### 解析 - parse

解析器将模板解析为抽象语树 AST，只有将模板解析成 AST 后，才能基于它做优化或者生成代码字符串。

**那么什么是抽象语法树呢？**

**抽象语法树**简称 AST(Abstract Syntax Tree)，使用对象的形式描述树形代码结构。此处的抽象语法树是用来描述树形结构的 HTML 字符串。

- 模板字符串转换成 AST 后，通过 AST 对模板做优化处理
- 标记模板中的静态内容，在 patch 的时候直接跳过静态内容
- 在 patch 的过程中静态内容不需要对比和重新渲染

可以通过在线[astexplorer](https://astexplorer.net/)查看得到的 Vue 模板的 AST tree 。

Vue 的将 HTML 模板转化为抽象语法树是通过`/core/compiler/parser/index.js`中的 parser 函数完成的。依次遍历 HTML 模板字符串，把 HTML 模板字符串转化为 AST 对象，HTML 中的属性和指令都会记录在 AST 的相应属性上。

解析器（parser）的原理是一小段一小段的去截取字符串，然后维护一个 stack 用来保存 DOM 深度，每截取到一段标签的开始就 push 到 stack 中，当所有字符串都截取完之后也就解析出了一个完整的 AST。具体如果实现这里不做过多解释，具体参考这篇文章[Vue 模板编译原理](https://github.com/berwin/Blog/issues/18)

### 优化 - optimize

在 parse 生成抽象语法树后，调用`optimize`方法来标记**纯静态节点**（对应的 Dom 子树永远不会发生变化），标记过后将提升**纯静态节点**为常量，重新渲染的时候不在重新创建节点， 在 patch 的时候直接跳过静态子树。

下面是`optimize`的源代码，首先第一轮标记所有的静态节点 static 设置为 true，第二轮标记**静态根节点**，即标签中包含子标签。如果一个元素内只有文本节点，此时这个元素不是静态根节点，这时 Vue 将不会进行优化，因为这样优化的成本大于收益。

```js
export function optimize(root: ?ASTElement, options: CompilerOptions) {
  if (!root) return;
  isStaticKey = genStaticKeysCached(options.staticKeys || "");
  isPlatformReservedTag = options.isReservedTag || no;
  // 第一轮：标记静态节点
  markStatic(root);
  // 第二轮：标记静态根节点
  markStaticRoots(root, false);
}
```

```js
function markStatic (node: ASTNode) {
  // 判断当前astNode是否是静态节点
  node.static = isStatic(node)
  // 元素节点
  if (node.type === 1) {
    // 是组件，不是slot，没有inline-template
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (let i = 0, l = node.children.length; i < l; i++) {
      const child = node.children[i]
      // 递归标记
      markStatic(child)
      if (!child.static) {
        // 如果有一个child不是static，当前node不是static
        node.static = false
      }
    }
    // 处理条件表达式
    if (node.ifConditions) {
      for (let i = 1, l = node.ifConditions.length; i < l; i++) {
        const block = node.ifConditions[i].block
        markStatic(block)
        if (!block.static) {
          node.static = false
        }
      }
    }
  }
```

```js
function markStaticRoots(node: ASTNode, isInFor: boolean) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // 如果一个元素内只有文本节点，此时这个元素不是静态的Root
    // Vue 认为这种优化会带来负面的影响
    if (
      node.static &&
      node.children.length &&
      !(node.children.length === 1 && node.children[0].type === 3)
    ) {
      node.staticRoot = true;
      return;
    } else {
      node.staticRoot = false;
    }
    // 检测当前节点的子节点是否有静态root
    if (node.children) {
      for (let i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (let i = 1, l = node.ifConditions.length; i < l; i++) {
        markStaticRoots(node.ifConditions[i].block, isInFor);
      }
    }
  }
}
```

### 生成 - generate

`generate`函数把静态节点标记后的抽象语法树，转换为 render 渲染函数的字符串形式.

`generator`的原理也是通过递归去拼一个函数执行代码的字符串，递归的过程根据不同的节点类型调用不同的生成方法，如果发现是一颗元素节点就拼一个 \_c(tagName, data, children) 的函数调用字符串，然后 data 和 children 也是使用 AST 中的属性去拼字符串。

```js
export function generate(
  ast: ASTElement | void,
  options: CompilerOptions
): CodegenResult {
  // 代码生成过程中使用的状态对象
  const state = new CodegenState(options);
  // 如果ast存在代用genElement生成代码
  const code = ast ? genElement(ast, state) : '_c("div")';
  return {
    // 渲染函数
    render: `with(this){return ${code}}`,
    // 存储静态根节点生成的代码
    staticRenderFns: state.staticRenderFns,
  };
}
```

`genElement(ast, state)`用来将抽象语法树对象转化为代码，包含：

- `genStatic`处理静态根节点
- `genOnce`, `genIf`,`genFor`等用来处理对应的指令
- `genSlot`用来处理插槽
- `genData`生成元素的属性/指令/事件, 处理各种指令，包括 `genDirectives`（model，text，html)转换成`createElement(h 函数)`所需要的字符串形式，第二个参数 data
- `genChildren` 处理子节点，转换成 createElement(h 函数)所需要数组形式，第三个参数 children
- ...

其中`genStatic`用来处理静态节点，把静态节点存储在`state.staticRenderFns`,`_m`静态文本渲染方法从数组中通过索引找到静态子节点

```js
// 处理静态节点
function genStatic(el: ASTElement, state: CodegenState): string {
  el.staticProcessed = true;
  const originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(`with(this){return ${genElement(el, state)}}`);
  state.pre = originalPreState;
  return `_m(${state.staticRenderFns.length - 1}${
    el.staticInFor ? ",true" : ""
  })`;
}
```

**模板编译过程**

![](/framework/模板编译过程.png)

![](/framework/vue编译模板流程.png)

## 组件化机制

一个 Vue 组件就是一个拥有预定义选项的的一个 Vue 实例，一个组件可以组成一个页面上一个功能完备的区域，组件可以包含脚本，样式，模板。

**组件化**可以让我们方便的把页面拆分成多个可重用的组件。 组件是独立的，系统内可重用，组件之间可以嵌套， 有了组件可以像搭积木一样开发网页。

### 组件注册过程

Vue 组件注册可以分为两种，**全局注册**和**局部注册**。 具体使用方法可以查看[Vue 文档 组件注册](https://cn.vuejs.org/v2/guide/components-registration.html)

**全局组件**的定义方式：

```js
Vue.component("comp", { template: "<h1>hello</h1>" });
```

初始化 Vue.component() 入口方法`initAssetRegisters()`
使用`Vue.extend`创建组件的构造函数，挂载到 Vue 实例的 `vm.options.component.componentName = Ctor`, 从这里可以看出组件实际上就是 Vue 的一个实例。

```js
// src\core\global-api\assets.js
export function initAssetRegisters(Vue: GlobalAPI) {
  // 遍历 ASSET_TYPES 数组，为 Vue 定义相应方法
  // ASSET_TYPES 包括了directive、 component、filter
  ASSET_TYPES.forEach((type) => {
    Vue[type] = function(
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + "s"][id];
      } else {
        if (process.env.NODE_ENV !== "production" && type === "component") {
          validateComponentName(id);
        }
        // Vue.component('comp', { template: '' })
        if (type === "component" && isPlainObject(definition)) {
          definition.name = definition.name || id;
          // this.options._base == Vue
          // 把组件配置转换为组件的构造函数
          definition = this.options._base.extend(definition);
        }
        // 如果是指令
        if (type === "directive" && typeof definition === "function") {
          definition = { bind: definition, update: definition };
        }
        // 全局注册，存储资源并赋值
        this.options[type + "s"][id] = definition;
        return definition;
      }
    };
  });
}
```

### 组件创建和挂载

**组件 VNode 的创建过程**

- 创建根组件，首次 `_render()` 时，会得到整棵树的 VNode 结构
- 整体流程:`new Vue()` --> `$mount()` --> `vm._render()` --> `createElement()` --> `createComponent()`（路径：src\core\vdom\create-component.js）
- 创建组件的 VNode，初始化组件的 hook 钩子函数

**组件实例的创建和挂载**

- 组件的实例对象是在`init`钩子函数中创建的
- 组件挂载流程：`Vue._update()` --> `patch()` --> `createElm()` --> `createComponent()`(路径：src\core\vdom\patch.js)
- 组件实例的创建过程是从上而下，父节点先创建，子节点后创建
- 组件实例的挂载过程是从下而上，子节点先挂载，父节点后挂载

## 更多参考

- [Vue 模板编译原理](https://github.com/berwin/Blog/issues/18)
