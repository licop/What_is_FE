# Virtual DOM 介绍以及 Snabbdom 源码解析

## 什么是 Virtual DOM

**Virtual DOM(虚拟 DOM)**，是由普通的 JS 对象来描述 DOM 对象，因为不是真实的 DOM 对象，所以叫 Virtual DOM。

`React`文档中关于 Virtual DOM 的介绍：

> Virtual DOM 是一种编程概念。在这个概念里， UI 以一种理想化的，或者说“虚拟的”表现形式被保存于内存中，并通过如 ReactDOM 等类库使之与“真实的” DOM 同步。这一过程叫做`协调`。

真实的 dom 成员:

```
  let element = document.querySelector('#app')
  let s = ''
  for (var key in element) {
    s += key + ','
  }
  console.log(s)
  // 打印结果
  align,title,lang,translate,dir,hidden,accessKey,draggable,spellcheck,autocapitalize,contentEditable,isContentEditable,inputMode,offsetParent,offsetTop,offsetLeft,offsetWidth,offsetHeight,style,innerText,outerText,oncopy,oncut,onpaste,onabort,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncontextmenu,oncuechange,ondblclick,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onload,onloadeddata,onloadedmetadata,onloadstart,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onpause,onplay,onplaying,onprogress,onratechange,onreset,onresize,onscroll,onseeked,onseeking,onselect,onstalled,onsubmit,onsuspend,ontimeupdate,ontoggle,onvolumechange,onwaiting,onwheel,onauxclick,ongotpointercapture,onlostpointercapture,onpointerdown,onpointermove,onpointerup,onpointercancel,onpointerover,onpointerout,onpointerenter,onpointerleave,onselectstart,onselectionchange,onanimationend,onanimationiteration,onanimationstart,ontransitionend,dataset,nonce,autofocus,tabIndex,click,focus,blur,enterKeyHint,onformdata,onpointerrawupdate,attachInternals,namespaceURI,prefix,localName,tagName,id,className,classList,slot,part,attributes,shadowRoot,assignedSlot,innerHTML,outerHTML,scrollTop,scrollLeft,scrollWidth,scrollHeight,clientTop,clientLeft,clientWidth,clientHeight,attributeStyleMap,onbeforecopy,onbeforecut,onbeforepaste,onsearch,elementTiming,previousElementSibling,nextElementSibling,children,firstElementChild,lastElementChild,childElementCount,onfullscreenchange,onfullscreenerror,onwebkitfullscreenchange,onwebkitfullscreenerror,setPointerCapture,releasePointerCapture,hasPointerCapture,hasAttributes,getAttributeNames,getAttribute,getAttributeNS,setAttribute,setAttributeNS,removeAttribute,removeAttributeNS,hasAttribute,hasAttributeNS,toggleAttribute,getAttributeNode,getAttributeNodeNS,setAttributeNode,setAttributeNodeNS,removeAttributeNode,closest,matches,webkitMatchesSelector,attachShadow,getElementsByTagName,getElementsByTagNameNS,getElementsByClassName,insertAdjacentElement,insertAdjacentText,insertAdjacentHTML,requestPointerLock,getClientRects,getBoundingClientRect,scrollIntoView,scroll,scrollTo,scrollBy,scrollIntoViewIfNeeded,animate,computedStyleMap,before,after,replaceWith,remove,prepend,append,querySelector,querySelectorAll,requestFullscreen,webkitRequestFullScreen,webkitRequestFullscreen,createShadowRoot,getDestinationInsertionPoints,ELEMENT_NODE,ATTRIBUTE_NODE,TEXT_NODE,CDATA_SECTION_NODE,ENTITY_REFERENCE_NODE,ENTITY_NODE,PROCESSING_INSTRUCTION_NODE,COMMENT_NODE,DOCUMENT_NODE,DOCUMENT_TYPE_NODE,DOCUMENT_FRAGMENT_NODE,NOTATION_NODE,DOCUMENT_POSITION_DISCONNECTED,DOCUMENT_POSITION_PRECEDING,DOCUMENT_POSITION_FOLLOWING,DOCUMENT_POSITION_CONTAINS,DOCUMENT_POSITION_CONTAINED_BY,DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,nodeType,nodeName,baseURI,isConnected,ownerDocument,parentNode,parentElement,childNodes,firstChild,lastChild,previousSibling,nextSibling,nodeValue,textContent,hasChildNodes,getRootNode,normalize,cloneNode,isEqualNode,isSameNode,compareDocumentPosition,contains,lookupPrefix,lookupNamespaceURI,isDefaultNamespace,insertBefore,appendChild,replaceChild,removeChild,addEventListener,removeEventListener,dispatchEvent
```

使用 Virtual DOM 来描述真实 DOM，示例:

```js
  {
    sel: "div",
    data: {},
    children: undefined,
    text: "Hello Virtual DOM",
    elm: undefined,
    key: undefined
  }
```

## 为什么使用 Virtual DOM

- 手动操作 DOM 比较麻烦，还需要考虑浏览器兼容性问题，虽然有 `jQuery` 等库简化 DOM 操作，但是随着项目的复杂 DOM 操作复杂提升
- 为了简化 DOM 的复杂操作于是出现了各种 `MVVM` 框架，`MVVM` 框架解决了视图和状态的同步问题
- 为了简化视图的操作我们可以使用模板引擎，但是模板引擎没有解决跟踪状态变化的问题，于是 `Virtual DOM` 出现了
- `Virtual DOM` 的好处是当状态改变时不需要立即更新 DOM，只需要创建一个虚拟树来描述 DOM， Virtual DOM 内部将弄清楚如何有效(diff)的更新 DOM

- 参考 github 上 [virtual-dom](https://github.com/Matt-Esch/virtual-dom) 的描述
  - 虚拟 DOM 可以维护程序的状态，跟踪上一次的状态
  - 通过比较前后两次状态的差异更新真实 DOM

## Virtual DOM 的作用

- 维护**视图**和**状态**的关系
- 复杂视图情况下提升渲染性能，注意视图比较简单或者首次渲染的时候并**不能**提升渲染性能
- **跨平台** 除了渲染 DOM 以外，还可以实现 SSR(Nuxt.js/Next.js)、原生应用(Weex/React Native)、小程序(mpvue/uni-app)等，比如`Snabbdom`就可以在初始化的时候传入`domApi`参数

![](/framework/跨平台.png)

## Virtual DOM 库

- [Snabbdom](https://github.com/snabbdom/snabbdom)
  - Vue 2.x 内部使用的 Virtual DOM 就是改造的 Snabbdom
  - 大约 200 SLOC（single line of code）
  - 通过模块可扩展
  - 源码使用 TypeScript 开发
  - 最快的 Virtual DOM 之一
- [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## Snabbdom 基本使用

Snabbdom 的两个核心函数 `init()` 和 `h()`

- `init()` 是一个高阶函数，返回 `patch()`
- `h()` 返回虚拟节点 VNode，这个函数我们在使用 Vue.js 的时候见过

```js
import { h } from "snabbdom/build/package/h";
import { init } from "snabbdom/build/package/init";

// 使用 init() 函数创建 patch()
// init() 的参数是数组，将来可以传入模块，处理属性/样式/事件等
let patch = init([]);

// 使用 h() 函数创建 vnode
let vnode = h("div.cls", [h("h1", "Hello Snabbdom"), h("p", "这是段落")]);

const app = document.querySelector("#app");
// 把 vnode 渲染到空的 DOM 元素（替换）
// 会返回新的 vnode
let oldVnode = patch(app, vnode);

setTimeout(() => {
  vnode = h("div.cls", [h("h1", "Hello World"), h("p", "这是段落")]);
  // 把老的视图更新到新的状态
  oldVnode = patch(oldVnode, vnode);
  // h('!') 是创建注释
  patch(oldVnode, h("!"));
}, 2000);
```

## 钩子函数 hooks

`Snabbdom`在 Dom 声明周期的节点中都埋下了钩子函数 hooks，提供了丰富 hooks 的选择，`Snabbdom`的模块机制也是通过 hooks 来完成扩展的。有了钩子函数我们可以在 Dom 声明周期的任何节点都能执行我们的功能。

```js
let vnode = h(
  "div#container.cls",
  {
    hook: {
      // 在vnode被初始化后执行
      init(vnode) {
        console.log(vnode.elm);
      },
      // 在vnode挂载Dom元素后执行
      create(emptyNode, vnode) {
        console.log(vnode.elm);
      },
    },
  },
  "Hello World"
);
```

了解[更多 hooks](https://github.com/snabbdom/snabbdom)

### 模块

- `Snabbdom` 的核心库并不能处理 DOM 元素的属性/样式/事件等，可以通过注册 `Snabbdom` 默认提供的模块来实现
- `Snabbdom` 中的模块可以用来扩展 `Snabbdom` 的功能
- `Snabbdom` 中的模块的实现是通过注册全局**钩子函数**实现的

**常用模块**

- 官方提供了 6 个模块

  - **attributes**
    - 设置 DOM 元素的属性，使用 `setAttribute`()
    - 处理布尔类型的属性
  - **props**
    - 和 `attributes` 模块相似，设置 DOM 元素的属性 `element[attr] = value`
    - 不处理布尔类型的属性
  - **class**
    - 切换类样式
    - 注意：给元素设置类样式是通过 `sel` 选择器
  - **dataset**
    - 设置 `data-*` 的自定义属性
  - **eventlisteners**
    - 注册和移除事件
  - **style**
    - 设置行内样式，支持动画
    - delayed/remove/destroy

**模块使用**

- 导入需要的模块
- `init()` 中注册模块
- 使用 `h()` 函数创建 VNode 的时候，可以把第二个参数设置为对象，其他参数往后移

```js
import { init } from "../snabbdom/build/package/init";
import { h } from "../snabbdom/build/package/h";

// 1. 导入模块
import { styleModule } from "../snabbdom/build/package/modules/style";
import { eventListenersModule } from "../snabbdom/build/package/modules/eventlisteners";

// 2. 注册模块
const patch = init([styleModule, eventListenersModule]);

// 3. 使用h() 函数的第二个参数传入模块中使用的数据（对象）
let vnode = h("div", [
  h("h1", { style: { backgroundColor: "red" } }, "Hello World"),
  h("p", { on: { click: eventHandler } }, "Hello P"),
]);

function eventHandler() {
  console.log("别点我，疼");
}

let app = document.querySelector("#app");
patch(app, vnode);
```

## Snabbdom 源码解析

### Snabbdom 的核心

- 使用 `h()` 函数创建 JavaScript 对象(VNode)描述真实 DOM
- `init()` 内部初始化 `modules` 和 `domApi`，然后返回一个 `patch` 函数
- `patch()` 比较新旧两个 VNode,把变化的内容更新到真实 DOM 树上,如果 `patch()`的第一个参数是真实 DOM，会首先把真实 DOM 转化成 VNode

### src 目录结构

```
├── package
│   ├── helpers
│   │   └── attachto.ts 定义了 vnode.ts 中 AttachData 的数据结构
│   ├── modules
│   │   ├── attributes.ts
│   │   ├── class.ts
│   │   ├── dataset.ts
│   │   ├── eventlisteners.ts
│   │   ├── hero.ts example 中使用到的自定义钩子
│   │   ├── module.ts 定义了模块中用到的钩子函数
│   │   ├── props.ts
│   │   └── style.ts
│   ├── h.ts h() 函数，用来创建 VNode
│   ├── hooks.ts 所有钩子函数的定义
│   ├── htmldomapi.ts 对 DOM API 的包装
│   ├── init.ts 加载 modules、DOMAPI，返回 patch 函数
│   ├── is.ts 判断数组和原始值的函数
│   ├── jsx-global.ts jsx 的类型声明文件
│   ├── jsx.ts 处理 jsx
│   ├── thunk.ts 优化处理，对复杂视图不可变值得优化
│   ├── tovnode.ts DOM 转换成 VNode
│   ├── ts-transform-js-extension.cjs
│   ├── tsconfig.json ts 的编译配置文件
│   └── vnode.ts 虚拟节点定义
```

### h 函数

在使用 Vue 的时候见过 `h()` 函数，在创建 Vue 实例的时候，会传入一个 render 函数，render 函数的参数就是 `h()`函数，作用和这里的`h()`函数相同都是用来创建 VNode 对象，不过 Vue 中的`h()`更强大，支持组件的机制

```js
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
```

h() 函数，利用`typeScript`函数重载，兼容接受参数选择器，VNode 的选项包含节点属性和 hooks，子节点和 参数类型和参数数量各种情形，调用 `vnode()`函数返回 VNnode 对象

**源码注释**

```js
// h() 函数重载
export function h (sel: string): VNode
export function h (sel: string, data: VNodeData | null): VNode
export function h (sel: string, children: VNodeChildren): VNode
export function h (sel: string, data: VNodeData | null, children: VNodeChildren): VNode
export function h (sel: any, b?: any, c?: any): VNode {
  var data: VNodeData = {}
  var children: any
  var text: any
  var i: number
  // 处理参数，实现重载机制
  if (c !== undefined) {
    // 处理三种参数的情况
    // sel, data, children/text
    if (b !== null) {
      data = b
    }
    // 如果第三个参数是数组，设置子元素
    if (is.array(c)) {
      children = c
    // 如果c是字符串或者数字
    } else if (is.primitive(c)) {
      text = c
    // 如果c是vnode
    } else if (c && c.sel) {
      children = [c]
    }
  } else if (b !== undefined && b !== null) {
    // 处理两个参数的情况
    if (is.array(b)) {
      children = b
    } else if (is.primitive(b)) {
      text = b
    // 如果b是vnode
    } else if (b && b.sel) {
      children = [b]
    } else { data = b }
  }
  if (children !== undefined) {
    for (i = 0; i < children.length; ++i) {
      // 如果child是string/number, 创建本文节点
      if (is.primitive(children[i])) children[i] = vnode(undefined, undefined, undefined, children[i], undefined)
    }
  }
  if (
    sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
    (sel.length === 3 || sel[3] === '.' || sel[3] === '#')
  ) {
    // 如果节点是svg，则添加命名空间
    addNS(data, children, sel)
  }
  // 创建一个VNode，对象并且返回
  return vnode(sel, data, children, text, undefined)
};

```

### VNode

一个 VNode 就是一个虚拟节点用来描述一个 DOM 元素

```js
// VNode节点定义属性
export interface VNode {
  // 选择器
  sel: string | undefined;
  // 节点数据：属性/样式/事件等
  data: VNodeData | undefined;
  // 子节点，和 text 只能互斥
  children: Array<VNode | string> | undefined;
  // 记录 vnode 对应的真实 DOM
  elm: Node | undefined;
  // 节点中的内容，和 children 只能互斥
  text: string | undefined;
  // 优化用
  key: Key | undefined;
}
// 返回单个VNode对象
export function vnode(
  sel: string | undefined,
  data: any | undefined,
  children: Array<VNode | string> | undefined,
  text: string | undefined,
  elm: Element | Text | undefined
): VNode {
  // key是通过data来赋值的
  const key = data === undefined ? undefined : data.key;
  return { sel, data, children, text, elm, key };
}
```

### init()函数

- **功能：**`init(modules, domApi)`，返回 `patch()` 函数（高阶函数）

- 为什么要使用高阶函数？

  - 因为 `patch()` 函数再外部会调用多次，每次调用依赖一些参数，比如：modules/domApi/cbs
  - 通过高阶函数让 `init()` 内部形成闭包，返回的 `patch()` 可以访问到 modules/domApi/cbs，而不需要重新创建

- `init()` 在返回 `patch()` 之前，首先收集了所有模块中的钩子函数存储到 cbs 对象中,然后在接下来 Dom 的各个生命周期节点中调用

### patch 函数

**功能：**

- 传入新旧 VNode，对比差异，把差异渲染到 DOM
- 返回新的 VNode，作为下一次 patch() 的 oldVnode

**执行过程：**

1. 首先执行**模块**中的**钩子**函数 `pre`
2. 如果 oldVnode 是 DOM 元素, 把 DOM 元素转换成 oldVnode
3. 如果 oldVnode 和 vnode 相同（key 和 sel 相同）

   - 调用 `patchVnode()`，找节点的差异并更新 DOM

4. 如果 oldVnode 和 vnode 不相同

   - 调用 `createElm()` 把 vnode 转换为真实 DOM，记录到 vnode.elm
   - 把刚创建的 DOM 元素插入到 parent 中
   - 移除老节点

5. 执行**模块**中的**钩子**函数 `post`

```js
function patch (oldVnode: VNode | Element, vnode: VNode): VNode {
  let i: number, elm: Node, parent: Node
  const insertedVnodeQueue: VNodeQueue = []
  // 遍历模块中的pre钩子函数，然后执行
  for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]()
  // 如果oldVnode是dom转化为VNode对象
  if (!isVnode(oldVnode)) {
    oldVnode = emptyNodeAt(oldVnode)
  }
  // 判断节点的key和sel是否相同
  if (sameVnode(oldVnode, vnode)) {
    patchVnode(oldVnode, vnode, insertedVnodeQueue)
  } else {
    // 如果节点的key和sel不相同
    // 在父元素中添加新的节点，移除老的节点
    elm = oldVnode.elm!
    parent = api.parentNode(elm) as Node
    // 把vnode节点转化为dom元素，把dom节点存储到elm的属性中
    // 没有把创建的元素挂载到dom中
    createElm(vnode, insertedVnodeQueue)

    if (parent !== null) {
      // 把vnode.elm插入到dom树中
      api.insertBefore(parent, vnode.elm!, api.nextSibling(elm))
      // 从父节点中移除旧的Vnode
      removeVnodes(parent, [oldVnode], 0, 0)
    }
  }
  // 遍历执行所有vnode的insert钩子函数传入的钩子函数
  for (i = 0; i < insertedVnodeQueue.length; ++i) {
    insertedVnodeQueue[i].data!.hook!.insert!(insertedVnodeQueue[i])
  }
  // 遍历模块中的post钩子函数，然后执行
  for (i = 0; i < cbs.post.length; ++i) cbs.post[i]()
  return vnode
}

```

### createElm

- **功能：**

  - createElm(vnode, insertedVnodeQueue)，返回创建的 DOM 元素
  - 将 vnode 转化为 Dom 元素，返回 DOM，并将 DOM 挂载到 vnode.elm 上

* **执行过程：**

  - 首先触发**用户**设置的 **init** **钩子**函数
  - 如果选择器是!，创建空的注释节点
  - 如果选择器为空，创建文本节点
  - 如果选择器不为空
    - 解析选择器，设置标签的 id 和 class 属性
    - 执行**模块**的 **create** **钩子**函数
    - 如果 vnode 有 children，创建子 vnode 对应的 DOM，追加到 DOM 树
    - 如果 vnode 的 text 值是 string/number，创建文本节点并追击到 DOM 树
    - 执行**用户**设置的 **create** **钩子**函数
    - 如果有用户设置的 insert 钩子函数，把 vnode 添加到队列中

```js
function createElm (vnode: VNode, insertedVnodeQueue: VNodeQueue): Node {
  let i: any
  let data = vnode.data
  // 执行用户设置的init钩子函数
  if (data !== undefined) {
    const init = data.hook?.init
    if (isDef(init)) {
      init(vnode)
      data = vnode.data
    }
  }
  // 把vnode转换成真实dom对象(没有渲染到页面)
  const children = vnode.children
  const sel = vnode.sel
  // 如果选择器是！，创建空的注释节点
  if (sel === '!') {
    if (isUndef(vnode.text)) {
      vnode.text = ''
    }
    vnode.elm = api.createComment(vnode.text!)
  } else if (sel !== undefined) {
    // Parse selector
    // 解析选择器
    const hashIdx = sel.indexOf('#')
    const dotIdx = sel.indexOf('.', hashIdx)
    const hash = hashIdx > 0 ? hashIdx : sel.length
    const dot = dotIdx > 0 ? dotIdx : sel.length
    const tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel
    const elm = vnode.elm = isDef(data) && isDef(i = data.ns)
      ? api.createElementNS(i, tag)
      : api.createElement(tag)
    if (hash < dot) elm.setAttribute('id', sel.slice(hash + 1, dot))
    if (dotIdx > 0) elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '))
    // 执行模块中的create钩子函数
    for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode)
    // 如果vnode有子节点，创建子vnode对应的DOM元素追加到elm上
    if (is.array(children)) {
      for (i = 0; i < children.length; ++i) {
        const ch = children[i]
        if (ch != null) {
          // 递归
          api.appendChild(elm, createElm(ch as VNode, insertedVnodeQueue))
        }
      }
    // 如果是文本则创建文本节点追加到elm上
    } else if (is.primitive(vnode.text)) {
      api.appendChild(elm, api.createTextNode(vnode.text))
    }

    const hook = vnode.data!.hook
    if (isDef(hook)) {
      // 调用用户传入的create钩子函数
      hook.create?.(emptyNode, vnode)
      // 如果用户传入insert钩子函数，将当前vnode存储到inseredVodeQuene队列中
      if (hook.insert) {
        insertedVnodeQueue.push(vnode)
      }
    }
  } else {
    // 如果选择器为空，创建文本节点
    vnode.elm = api.createTextNode(vnode.text!)
  }
  // 返回创建的DOM
  return vnode.elm
}
```

### patchVnode

**功能：**

- patchVnode(oldVnode, vnode, insertedVnodeQueue)
- 对比 oldVnode 和 vnode 的差异，把差异渲染到 DOM

**执行过程：**

- 首先执行用户设置的 **prepatch**钩子函数
- 执行 create 钩子函数
  - 首先执行**模块**的 **update** 钩子函数
  - 然后执行**用户**设置的 **update** 钩子函数
- 如果 **vnode.text** 未定义
  - 如果 `oldVnode.children` 和 `vnode.children` 都有值
    - 调用 `updateChildren()`,使用 diff 算法对比子节点，更新子节点
  - 如果 `vnode.children` 有值，`oldVnode.children` 无值
    - 清空 DOM 元素,调用 `addVnodes()`，批量添加子节点
  - 如果 `oldVnode.children` 有值，`vnode.children` 无值
    - 调用 `removeVnodes()`，批量移除子节点
  - 如果 **oldVnode.text** 有值
    - 清空 DOM 元素的内容
- 如果设置了 `vnode.text` 并且和 `oldVnode.text` 不等
  - 如果老节点有子节点，全部移除, 设置 DOM 元素的 `textContent` 为 `vnode.text`
- 最后执行用户设置的 **postpatch** 钩子函数

![](/framework/patchVnode.png)

```js
function patchVnode (oldVnode: VNode, vnode: VNode, insertedVnodeQueue: VNodeQueue) {
  // 第一过程： 触发patchVnode和update钩子函数
  const hook = vnode.data?.hook
  // 执行新节点的prepatch钩子函数
  hook?.prepatch?.(oldVnode, vnode)
  const elm = vnode.elm = oldVnode.elm!
  const oldCh = oldVnode.children as VNode[]
  const ch = vnode.children as VNode[]
  // 判断节点是否完全相同
  if (oldVnode === vnode) return
  // 执行模块和新节点的update钩子函数
  if (vnode.data !== undefined) {
    for (let i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
    vnode.data.hook?.update?.(oldVnode, vnode)
  }

  // 第二过程: 真正对比新旧vnode差异的地方，找到差异过后会立即更新真实dom
  // 新节点不是文本节点，有子节点
  if (isUndef(vnode.text)) {
    // 如果新旧vnode都有子节点
    if (isDef(oldCh) && isDef(ch)) {
      // 不相等则调用updateChildren(),使用diff算法更新子节点
      if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)
    } else if (isDef(ch)) {
      // 新节点有子节点，老节点是文本节点，清空文本节点，elm添加子节点
      if (isDef(oldVnode.text)) api.setTextContent(elm, '')
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
      // 老节点有子节点，新节点为空，清空dom元素
    } else if (isDef(oldCh)) {
      removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    // 老节点是文本节点，新节点为空，清空文本
    } else if (isDef(oldVnode.text)) {
      api.setTextContent(elm, '')
    } // 新节点是本文节点，且和老节点不相等
  } else if (oldVnode.text !== vnode.text) {
    if (isDef(oldCh)) {
      // 删除老节点
      removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    }
    // 更新文本节点
    // 注意: 本文发生变化是dom元素没有重建，还是沿用之前的dom元素
    api.setTextContent(elm, vnode.text!)
  }

  // 第三过程: 触发postpatch钩子函数
  hook?.postpatch?.(oldVnode, vnode)
}

```

### updateChildren

**功能：**

diff 算法的核心，对比新旧节点的 children，更新 DOM

**为什么需要 diff 算法**

渲染真实 Dom 的开销很大, Dom 操作会引起浏览器的**重排**和**重绘**，也就是浏览器重新渲染，浏览器重新渲染十分消耗性能，当大量数据的列表变化后，如果直接操作 Dom 会让浏览器直接渲染整个列表。虚拟 Dom 中 diff 算法的核心是当数据变化后不直接操作 Dom，而是用 js 对象描述真实 Dom，当数据变化后会先比较 js 对象是否发生变化，找到所有变化的位置，最后只去**最小化**的更新变化的位置，从而提高性能。

diff 是一种算法，类似于排序算法，用来查找两个树节点的差异

- 要对比两棵树的差异，我们可以取第一棵树的每一个节点依次和第二课树的每一个节点比较，但是这样的时间复杂度为 **O(n^3)**
- Snbbdom 根据 DOM 的特点对传统 diff 算法做了优化。 在 DOM 操作的时候我们很少很少会把一个父节点移动/更新到某一个子节点，很少会跨级别操作节点
- 因此只需要找**同级别**的子节点依次比较，然后再找下一级别的节点比较，这样算法的时间复杂度为 **O(n)**

![](/framework/diff1.png)

### 执行过程

- 在进行同级别节点比较的时候，首先会对新老节点数组的开始和结尾节点设置标记索引，遍历的过程中移动索引，分别对新老节点的开始和结尾做一次比较
- 在对**开始和结束节点**比较的时候，总共有四种情况

  - oldStartVnode / newStartVnode (旧开始节点 / 新开始节点)
  - oldEndVnode / newEndVnode (旧结束节点 / 新结束节点)
  - oldStartVnode / oldEndVnode (旧开始节点 / 新结束节点)
  - oldEndVnode / newStartVnode (旧结束节点 / 新开始节点)

  ![image-20200109184608649](/framework/image-20200109184608649.png)

- 开始节点和结束节点比较，这两种情况类似
  - oldStartVnode / newStartVnode (旧开始节点 / 新开始节点)
  - oldEndVnode / newEndVnode (旧结束节点 / 新结束节点)
- 如果 oldStartVnode 和 newStartVnode 是 sameVnode (key 和 sel 相同)
  - 调用 `patchVnode()` 对比和更新节点
  - 把旧开始和新开始索引往后移动 oldStartIdx++ / newStartIdx++

![image-20200103121812840](/framework/image-20200103121812840.png)

- oldStartVnode / newEndVnode (旧开始节点 / 新结束节点) 相同
  - 调用 `patchVnode()` 对比和更新节点
  - 把 oldStartVnode 对应的 DOM 元素，移动到右边
  - 更新索引

![image-20200103125428541](/framework/image-20200103125428541.png)

- oldEndVnode / newStartVnode (旧结束节点 / 新开始节点) 相同
  - 调用 `patchVnode()`对比和更新节点
  - 把 oldEndVnode 对应的 DOM 元素，移动到左边
  - 更新索引

![image-20200103125735048](/framework/image-20200103125735048.png)

- 如果不是以上四种情况

  - 遍历新节点，使用 newStartNode 的 key 在老节点数组中找相同节点
  - 如果没有找到，说明 newStartNode 是新节点
    - 创建新节点对应的 DOM 元素，插入到 DOM 树中
  - 如果找到了
    - 判断新节点和找到的老节点的 sel 选择器是否相同
    - 如果不相同，说明节点被修改了
      - 重新创建对应的 DOM 元素，插入到 DOM 树中
    - 如果相同，把 elmToMove 对应的 DOM 元素，移动到左边

  ![image-20200109184822439](/framework/image-20200109184822439.png)

- 循环结束

  - 当老节点的所有子节点先遍历完 (oldStartIdx > oldEndIdx)，循环结束
  - 新节点的所有子节点先遍历完 (newStartIdx > newEndIdx)，循环结束
  - 如果老节点的数组先遍历完(oldStartIdx > oldEndIdx)，说明新节点有剩余，把剩余节点批量插入到右边

  ![image-20200103150918335](/framework/image-20200103150918335.png)

  - 如果新节点的数组先遍历完(newStartIdx > newEndIdx)，说明老节点有剩余，把剩余节点批量删除

  ![image-20200109194751093](/framework/image-20200109194751093.png)

```js
function updateChildren (parentElm: Node,
  oldCh: VNode[],
  newCh: VNode[],
  insertedVnodeQueue: VNodeQueue) {
  let oldStartIdx = 0
  let newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let oldStartVnode = oldCh[0]
  let oldEndVnode = oldCh[oldEndIdx]
  let newEndIdx = newCh.length - 1
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]
  let oldKeyToIdx: KeyToIndexMap | undefined
  let idxInOld: number
  let elmToMove: VNode
  let before: any
  // 同级别节点比较
  // 循环遍历新旧节点，当 oldStartIdx > oldEndIdx 或者 newStartIdx > newEndIdx时，循环结束
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx] // Vnode might have been moved left
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx]
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx]
    // 比较开始和结束的4种情况
    // 比较开始节点，调用 patchVnode() 对比和更新节点，移动索引
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    // 比较结束节点，调用 patchVnode() 对比和更新节点，移动索引
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    // 旧开始节点/新结束节点相同， 把 oldStartVnode 对应的 DOM 元素，移动到右边
    } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
      api.insertBefore(parentElm, oldStartVnode.elm!, api.nextSibling(oldEndVnode.elm!))
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    // 旧结束节点/新开始节点相同, 把 oldEndVnode 对应的 DOM 元素，移动到左边
    } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
      api.insertBefore(parentElm, oldEndVnode.elm!, oldStartVnode.elm!)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      // 如果新旧vnode节点的开始和结束都各不相等，遍历新节点
      // 使用新节点的newStartVnode的key值在老节点数组中找相同的节点
      if (oldKeyToIdx === undefined) {
        // 将key和旧的vnode节点索引做映射
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
      }
      idxInOld = oldKeyToIdx[newStartVnode.key as string]
      if (isUndef(idxInOld)) { // New element
        // 如果没找到相同的key值，说明是新的节点，创建新节点对应的dom元素插入到dom树中
        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)
      } else {
        // 如果找到了相同的key值
        elmToMove = oldCh[idxInOld]
        // 判断新节点和找到的老节点的 sel 选择器是否相同
        // 如果不相同，说明节点被修改了
        // 重新创建对应的 DOM 元素，插入到 DOM 树中
        if (elmToMove.sel !== newStartVnode.sel) {
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)
        } else {
          // 如果相同，把 elmToMove 对应的 DOM 元素，移动到左边
          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
          oldCh[idxInOld] = undefined as any
          api.insertBefore(parentElm, elmToMove.elm!, oldStartVnode.elm!)
        }
      }

      newStartVnode = newCh[++newStartIdx]
    }
  }
  // 循环结束的收尾工作
  if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
    if (oldStartIdx > oldEndIdx) {
      // 如果老节点的数组先遍历完(oldStartIdx > oldEndIdx)，说明新节点有剩余，把剩余节点批量插入到右边
      before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
    } else {
      // 如果新节点的数组先遍历完(newStartIdx > newEndIdx)，说明老节点有剩余，把剩余节点批量删除
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
    }
  }
}
```

## 更多参考

- [snabbdom demo 和源码解析](https://github.com/licop/snabbdom-learn)
- [snabbdom 文档](https://github.com/snabbdom/snabbdom)
- [TypeScript 函数重载](https://cloud.tencent.com/developer/article/1599888)
- [深入理解 TypeScript 函数重载](https://jkchao.github.io/typescript-book-chinese/typings/functions.html#%E9%87%8D%E8%BD%BD)
