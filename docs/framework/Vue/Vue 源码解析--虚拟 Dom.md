# Vue 源码解析--虚拟 Dom

> 完整 Vue 代码注释解析参考 [Vue 注释解析](https://github.com/licop/vue)

## Vue 中的虚拟 DOM

**虚拟 DOM(Virtual DOM)** 是使用 JavaScript 对象来描述 DOM，虚拟 DOM 的本质就是 JavaScript 对象，使用 JavaScript 对象来描述 DOM 的结构。应用的各种状态变化首先作用于虚拟 DOM，最终映射 到 DOM。Vue.js 中的虚拟 DOM 借鉴了 `Snabbdom`，并添加了一些 Vue.js 中的特性，例如: **指令**和**组件**机制。

此前已对`Snabbdom`的源码进行了解析，参考此文[Snabbdom 源码解析](https://what-is-fe.licop.cn/framework/Vue/Virtual%20DOM%20%E4%BB%8B%E7%BB%8D%E4%BB%A5%E5%8F%8A%20Snabbdom%20%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90.html#%E4%BB%80%E4%B9%88%E6%98%AF-virtual-dom)，本文将介绍 Vue 如何处理虚拟 Dom。

Vue 1.x 中细粒度监测数据的变化，每一个属性对应一个 watcher，开销太大 Vue 2.x 中每个组件对应一个 watcher，状态变化通知到组件，再引入虚拟 DOM 进行比对和渲染。

## createElement(h 函数)

在解析`Snabbdom`的时候 我们知道 h 函数用来创建虚拟节点 (VNode)。Vue 由`createElement()` 函数实现这个功能，我们的 `render` 函数中的参数 h，就是 `createElement()`。

```js
const vm = new Vue({
  el: "#app",
  render(h) {
    // h(tag, data, children)
    // return h('h1', this.msg)
    // return h('h1', { domProps: { innerHTML: this.msg } })
    // return h('h1', { attrs: { id: 'title' } }, this.msg)
    const vnode = h(
      "h1",
      {
        attrs: { id: "title" },
      },
      this.msg
    );
    console.log(vnode);
    return vnode;
  },
  data: {
    msg: "Hello Vue",
  },
});
```

打印出来的 VNode 如图所示
![](/framework/vue_vnode.png)

可以看出 Vue 中的 VNode 比 Snabbdom 的 VNode 多了很多属性,有些属性用到的地方很少,下面是**VNode 的核心属性**

- tag
- data
- children
- text
- elm
- key

那么 Vue 中的`createElement()`什么时候作为 h 函数传递到用户的 render 函数中的呢。在解析 Vue 的初始化和响应式的时候，挂载 Dom 渲染视图的时候调用了`updateComponent`, 这里面的`vm._render()`用于返回虚拟 Dom

```js
// /core/instance/lifecircle.js
// vm._render()返回虚拟dom vnode，vm._update把虚拟dom转化为真实dom更新到页面上
updateComponent = () => {
  vm._update(vm._render(), hydrating);
};
```

在 `vm._render()` 中调用了，用户传递的或者编译生成的 render 函数，这个时候传递了 createElement

```js
// src/core/instance/render.js
// 调用render函数，传递createElement， 返回VNode
Vue.prototype._render = function(): VNode {
  const vm: Component = this;
  // 获取渲染函数
  const { render, _parentVnode } = vm.$options;

  if (_parentVnode) {
    vm.$scopedSlots = normalizeScopedSlots(
      _parentVnode.data.scopedSlots,
      vm.$slots,
      vm.$scopedSlots
    );
  }
  vm.$vnode = _parentVnode;

  let vnode;
  try {
    currentRenderingInstance = vm;
    // 调用render函数，改变this指向vm._renderProxy==vm, vm.$createElement为h()函数用于生成虚拟dom
    vnode = render.call(vm._renderProxy, vm.$createElement);
  } catch (e) {
    ...
  } finally {
    currentRenderingInstance = null;
  }
  ...
  // set parent
  vnode.parent = _parentVnode;
  return vnode;
};
```

`vm.c`和 `vm.$createElement` 内部都调用了`createElement`,不同的是最后一个参数。 `vm.c` 在编译生成的 render 函数内部会调用，`vm.$createElement` 在用户传入的 render 函数内部调用。当用户传入 render 函数的时候，要对用户传入的参数做处理.

```js
// src/core/instance/render.js
// 对模板编译生成的render进行渲染 createElement => h()函数
vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false);

// 对用户手写render函数进行渲染的方法 createElement => h()函数
vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true);
```

执行完 createElement 之后创建好了 VNode，把创建好的 VNode 传递给 `vm._update()` 继续处理

```js
// src/core/vdom/create-element.js
// 创建VNode
export function _createElement(
  context: Component,
  tag?: string | Class<Component> | Function | Object,
  data?: VNodeData,
  children?: any,
  normalizationType?: number
): VNode | Array<VNode> {
  // data值如果是响应式的则发出警告，返回一个空的注释节点
  if (isDef(data) && isDef((data: any).__ob__)) {
    process.env.NODE_ENV !== "production" &&
      warn(
        `Avoid using observed data object as vnode data: ${JSON.stringify(
          data
        )}\n` + "Always create fresh vnode data objects in each render!",
        context
      );
    return createEmptyVNode();
  }

  // <component v-bind:is="currentTabComponent"></component>
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  // tag不存在返回空节点
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  }
  // warn against non-primitive key
  // key应该是原始值，否则发出警告
  if (
    process.env.NODE_ENV !== "production" &&
    isDef(data) &&
    isDef(data.key) &&
    !isPrimitive(data.key)
  ) {
    if (!__WEEX__ || !("@binding" in data.key)) {
      warn(
        "Avoid using non-primitive value as key, " +
          "use string/number value instead.",
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) && typeof children[0] === "function") {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    // 返回一维数组，处理用户手写的render
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    // 把二维数组，转化为一维数组
    children = simpleNormalizeChildren(children);
  }
  // 开始创建vnode对象
  let vnode, ns;
  if (typeof tag === "string") {
    let Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    // 是否是平台的保留标签
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (
        process.env.NODE_ENV !== "production" &&
        isDef(data) &&
        isDef(data.nativeOn)
      ) {
        warn(
          `The .native modifier for v-on is only valid on components but it was used on <${tag}>.`,
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag),
        data,
        children,
        undefined,
        undefined,
        context
      );
      // 判断是否是自定义组件
    } else if (
      (!data || !data.pre) &&
      isDef((Ctor = resolveAsset(context.$options, "components", tag)))
    ) {
      // 查找自定义组件构造函数的声明
      // 根据Ctor创建组件的VNode
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    // 如果tag是一个组件，直接创建组件的VNode
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    // 处理命名空间
    if (isDef(ns)) applyNS(vnode, ns);
    if (isDef(data)) registerDeepBindings(data);
    return vnode;
  } else {
    return createEmptyVNode();
  }
}
```

## update

`vm._update`接受创建好的虚拟 DOM,内部调用 `vm.__patch__()` 把虚拟 DOM 转换成真实 DOM

```js
// src/core/instance/lifecycle.js
// _update方法的作用是把VNode渲染成真实的dom => 使用patch函数
// 首次渲染会调用，数据更新会调用
Vue.prototype._update = function(vnode: VNode, hydrating?: boolean) {
  const vm: Component = this;
  const prevEl = vm.$el;
  const prevVnode = vm._vnode;
  const restoreActiveInstance = setActiveInstance(vm);
  vm._vnode = vnode;
  // Vue.prototype.__patch__ is injected in entry points
  // based on the rendering backend used.
  if (!prevVnode) {
    // 首次渲染
    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
  } else {
    // 更新，传入新旧 VNode，对比差异
    vm.$el = vm.__patch__(prevVnode, vnode);
  }
  restoreActiveInstance();
  // update __vue__ reference
  if (prevEl) {
    prevEl.__vue__ = null;
  }
  if (vm.$el) {
    vm.$el.__vue__ = vm;
  }
  // if parent is an HOC, update its $el as well
  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
    vm.$parent.$el = vm.$el;
  }
};
```

## patch 函数

patch 函数,对比两个 VNode 的差异，把差异更新到真实 DOM。如果是首次渲染的话，会把真实 DOM 先转换成 VNode

`Snabbdom` 中 使用 init 函数做柯里化将 patch 初始化，用来缓存 dom 的做操作方法和模块

```js
export function init(modules: Array<Partial<Module>>, domApi?: DOMAPI) {
  return function patch(oldVnode: VNode | Element, vnode: VNode): VNode {};
}
```

Vue 中也做了类似的处理, `createPatchFunction`函数类似 init 的功能。Vue 中 patch 函数初始化过程如下：

```js
// src/platforms/web/runtime/index.js
import { patch } from "./patch";
Vue.prototype.__patch__ = inBrowser ? patch : noop;
```

```js
// src/platforms/web/runtime/patch.js
import * as nodeOps from "web/runtime/node-ops";
import { createPatchFunction } from "core/vdom/patch";
import baseModules from "core/vdom/modules/index";
import platformModules from "web/runtime/modules/index";

const modules = platformModules.concat(baseModules);
export const patch: Function = createPatchFunction({ nodeOps, modules });
```

```js
// src/core/vdom/patch.js
export function createPatchFunction(backend) {
  let i, j;
  const cbs = {};
  const { modules, nodeOps } = backend;
  // 把模块中的钩子函数全部设置到 cbs 中，将来统一触发 // cbs --> { 'create': [fn1, fn2], ... }
  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }
  ...
  return function patch(oldVnode, vnode, hydrating, removeOnly) {};
}
```

**patch 函数执行过程**

```js
// patch是核心函数，和平台无关，作用是对比两个VNode，然后更新VNode
function patch(oldVnode, vnode, hydrating, removeOnly) {
  // 新的VNode存在
  if (isUndef(vnode)) {
    // 老的VNode存在，执行Destory钩子函数
    if (isDef(oldVnode)) invokeDestroyHook(oldVnode);
    return;
  }

  let isInitialPatch = false;
  const insertedVnodeQueue = [];
  // 老的VNode不存在，创建组件没有挂载在dom树上
  if (isUndef(oldVnode)) {
    isInitialPatch = true;
    // 将vnode转化为Dom元素
    createElm(vnode, insertedVnodeQueue);
  } else {
    // 判断oldVnode是不是真实dom
    const isRealElement = isDef(oldVnode.nodeType);
    // 如果oldVnode是vnode，并且oldVnode和vnode是相同节点
    // sameVnode判断方法比snabbdom复杂一点，主要判断key和tag是否相同
    if (!isRealElement && sameVnode(oldVnode, vnode)) {
      // 更新操作，diff算法
      patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
    } else {
      // 第一个参数是真实Dom，创建VNode
      // 初始化
      if (isRealElement) {
        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
          oldVnode.removeAttribute(SSR_ATTR);
          hydrating = true;
        }
        if (isTrue(hydrating)) {
          if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
            invokeInsertHook(vnode, insertedVnodeQueue, true);
            return oldVnode;
          } else if (process.env.NODE_ENV !== "production") {
            warn(
              "The client-side rendered virtual DOM tree is not matching " +
                "server-rendered content. This is likely caused by incorrect " +
                "HTML markup, for example nesting block-level elements inside " +
                "<p>, or missing <tbody>. Bailing hydration and performing " +
                "full client-side render."
            );
          }
        }
        // 创建VNode
        oldVnode = emptyNodeAt(oldVnode);
      }

      // 找到父元素
      const oldElm = oldVnode.elm;
      const parentElm = nodeOps.parentNode(oldElm);

      // create new node
      // 创建新的Dom节点, 挂载到parentNode
      createElm(
        vnode,
        insertedVnodeQueue,

        oldElm._leaveCb ? null : parentElm,
        nodeOps.nextSibling(oldElm)
      );

      // update parent placeholder node element, recursively
      if (isDef(vnode.parent)) {
        let ancestor = vnode.parent;
        const patchable = isPatchable(vnode);
        while (ancestor) {
          for (let i = 0; i < cbs.destroy.length; ++i) {
            cbs.destroy[i](ancestor);
          }
          ancestor.elm = vnode.elm;
          if (patchable) {
            for (let i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, ancestor);
            }
            // #6513
            // invoke insert hooks that may have been merged by create hooks.
            // e.g. for directives that uses the "inserted" hook.
            const insert = ancestor.data.hook.insert;
            if (insert.merged) {
              // start at index 1 to avoid re-invoking component mounted hook
              for (let i = 1; i < insert.fns.length; i++) {
                insert.fns[i]();
              }
            }
          } else {
            registerRef(ancestor);
          }
          ancestor = ancestor.parent;
        }
      }

      // destroy old node
      if (isDef(parentElm)) {
        // 移除老的vnode
        removeVnodes([oldVnode], 0, 0);
      } else if (isDef(oldVnode.tag)) {
        invokeDestroyHook(oldVnode);
      }
    }
  }

  invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
  return vnode.elm;
}
```

## createElm

把 VNode 转换成真实 DOM，插入到 DOM 树上

```js
function createElm(
  vnode,
  insertedVnodeQueue,
  parentElm,
  refElm,
  nested,
  ownerArray,
  index
) {
  if (isDef(vnode.elm) && isDef(ownerArray)) {
    vnode = ownerArray[index] = cloneVNode(vnode);
  }

  vnode.isRootInsert = !nested; // for transition enter check
  if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
    return;
  }

  const data = vnode.data;
  const children = vnode.children;
  const tag = vnode.tag;
  // tag存在
  if (isDef(tag)) {
    if (process.env.NODE_ENV !== "production") {
      if (data && data.pre) {
        creatingElmInVPre++;
      }
      if (isUnknownElement(vnode, creatingElmInVPre)) {
        warn(
          "Unknown custom element: <" +
            tag +
            "> - did you " +
            "register the component correctly? For recursive components, " +
            'make sure to provide the "name" option.',
          vnode.context
        );
      }
    }
    // 创建dom
    vnode.elm = vnode.ns
      ? nodeOps.createElementNS(vnode.ns, tag)
      : nodeOps.createElement(tag, vnode);
    setScope(vnode);

    /* istanbul ignore if */
    if (__WEEX__) {
      const appendAsTree = isDef(data) && isTrue(data.appendAsTree);
      if (!appendAsTree) {
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      createChildren(vnode, children, insertedVnodeQueue);
      if (appendAsTree) {
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }
    } else {
      // 将子元素递归转化为dom对象
      createChildren(vnode, children, insertedVnodeQueue);
      if (isDef(data)) {
        // create钩子函数
        invokeCreateHooks(vnode, insertedVnodeQueue);
      }
      // 插入到父节点中
      insert(parentElm, vnode.elm, refElm);
    }

    if (process.env.NODE_ENV !== "production" && data && data.pre) {
      creatingElmInVPre--;
    }
    // 注释节点
  } else if (isTrue(vnode.isComment)) {
    vnode.elm = nodeOps.createComment(vnode.text);
    insert(parentElm, vnode.elm, refElm);
  } else {
    // 文本节点
    vnode.elm = nodeOps.createTextNode(vnode.text);
    insert(parentElm, vnode.elm, refElm);
  }
}
```

## patchVnode

对比新旧 Vnode 的节点，找到差异，然后更新到真实 dom 上

```js
function patchVnode(
  oldVnode,
  vnode,
  insertedVnodeQueue,
  ownerArray,
  index,
  removeOnly
) {
  if (oldVnode === vnode) {
    return;
  }

  if (isDef(vnode.elm) && isDef(ownerArray)) {
    // clone reused vnode
    vnode = ownerArray[index] = cloneVNode(vnode);
  }

  const elm = (vnode.elm = oldVnode.elm);

  if (isTrue(oldVnode.isAsyncPlaceholder)) {
    if (isDef(vnode.asyncFactory.resolved)) {
      hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
    } else {
      vnode.isAsyncPlaceholder = true;
    }
    return;
  }
  if (
    isTrue(vnode.isStatic) &&
    isTrue(oldVnode.isStatic) &&
    vnode.key === oldVnode.key &&
    (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
  ) {
    vnode.componentInstance = oldVnode.componentInstance;
    return;
  }
  // 执行prepach钩子函数
  let i;
  const data = vnode.data;
  if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
    i(oldVnode, vnode);
  }

  const oldCh = oldVnode.children;
  const ch = vnode.children;
  if (isDef(data) && isPatchable(vnode)) {
    // 调用cbs中的update钩子函数，，操作节点的属性/样式/事件
    for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
    // 用户的自定义钩子
    if (isDef((i = data.hook)) && isDef((i = i.update))) i(oldVnode, vnode);
  }
  // 新节点没有文本节点
  if (isUndef(vnode.text)) {
    // 新老节点都有子节点
    // 对子节点进行diff操作，调用updateChildren
    if (isDef(oldCh) && isDef(ch)) {
      if (oldCh !== ch)
        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
    } else if (isDef(ch)) {
      // 新的有子节点，老的没有
      if (process.env.NODE_ENV !== "production") {
        // 检查是否有重复的key
        checkDuplicateKeys(ch);
      }
      // 先清空老节点Dom的文本内容，然后为当前Dom节点加入子节点
      if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, "");
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
    } else if (isDef(oldCh)) {
      // 老的有子节点，新的没有
      // 删除老节点的子节点
      removeVnodes(oldCh, 0, oldCh.length - 1);
    } else if (isDef(oldVnode.text)) {
      // 老节点有文本，新节点没有文本
      // 清空老节点的文本
      nodeOps.setTextContent(elm, "");
    }
  } else if (oldVnode.text !== vnode.text) {
    // 新老节点都有文本节点
    // 修改文本
    nodeOps.setTextContent(elm, vnode.text);
  }
  // postpatch钩子
  if (isDef(data)) {
    if (isDef((i = data.hook)) && isDef((i = i.postpatch))) i(oldVnode, vnode);
  }
}
```

## updateChildren

对比子节点的差异，并更新真实 dom，diff 算法的核心。`updateChildren` 和 Snabbdom 中的整体算法一致，这里就不再展开了。

![](/framework/Vue虚拟Dom.png)

## 虚拟 DOM 中 Key 的作用

> 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key attribute.

以上是 Vue 文档中对 key 的作用的解释，理解了虚拟 Dom 和 diff 算法如何排序的我们会更深刻理解这句话。

在列表中通过三种节点操作新旧节点进行更新：插入，移动和删除，在没有 key 值的列表 diff 中，只能通过按顺序进行每个元素的对比，更新，插入与删除，在数据量较大的情况下，diff 效率低下；用户设置 key 属性的方式调整 diff 更新中默认的排序方式，就能够快速识别新旧列表之间的变化内容，提升 diff 效率。

![](/framework/diff_key.jpg)

在 `updateChildren` 函数中，调用 `patchVnode` 之前，会首先调用 `sameVnode()`判断当前的新老 VNode 是否是相同节点，`sameVnode()` 中会首先判断 key 是否相同。如果没有传递 key,才会 tag 相同也会被判断为相同节点，在列表中大多数都是相同 tag 的子节点，根据 diff 算法，会依次从开始和结尾遍历新老节点，会得到节点都相同的结果，然后 `patchVnode` 对比两个节点，当子节点顺序发生变化的时候，会增加产生大量的 Dom 操作。如果传递 key 在遍历新老节点的时候，加入子节点的顺序发生变化，由于 key 值不同，在对比首末节点的时候会判断为不同节点，然后根据 key 值去找对应的新老节点，如果子节点没有发生改变则不做任何操作，从而减少 Dom 操作的数量。

```js
function sameVnode(a, b) {
  return (
    a.key === b.key &&
    ((a.tag === b.tag &&
      a.isComment === b.isComment &&
      isDef(a.data) === isDef(b.data) &&
      sameInputType(a, b)) ||
      (isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)))
  );
}
```

通过下面代码来体会 key 的作用

```html
<div id="app">
  <button @click="handler">按钮</button>
  <ul>
    <li v-for="value in arr">{{value}}</li>
  </ul>
</div>
<script src="../../dist/vue.js"></script>
<script>
  const vm = new Vue({
    el: "#app",
    data: {
      arr: ["a", "b", "c", "d"],
    },
    methods: {
      handler() {
        this.arr = ["a", "x", "b", "c", "d"];
      },
    },
  });
</script>
```

- 当没有设置 key 的时候
  在 `updateChildren` 中比较子节点的时候，会做三次更新 DOM 操作和一次插入 DOM 的操作
- 当设置 key 的时候
  在 `updateChildren` 中比较子节点的时候，因为 `oldVnode` 的子节点的 b,c,d 和 `newVnode` 的 x,b,c 的 key 相同，所以只做比较，没有更新 DOM 的操作，当遍历完毕后，会再把 x 插入到 DOM 上 DOM 操作只有一次插入操作。

##
