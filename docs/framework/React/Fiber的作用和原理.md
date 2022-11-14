# Fiber 的作用和原理

## 什么是 Fiber

> Fiber 是 React16 中的新的协调引擎。 它的主要目的是 Virtual DOM 可以进行增量式渲染。

以上这是 React 官方给的关于 Fiber 的描述,**增量式渲染**的意思就是把渲染任务拆分成块。Fiber 其实就是 Dom 比对的新的算法，以前 Dom 比对的方法叫做 `Stack Reconciler`。

回想一下一个 React 组件的渲染主要经历两个阶段：

- **调度阶段（Reconciler）**：用新的数据生成一棵新的树，然后通过 Diff 算法，遍历旧的树，快速找出需要更新的元素，放到更新队列中去，得到新的更新队列。
- **渲染阶段（Renderer）**：遍历更新队列，通过调用宿主环境的 API，实际更新渲染对应的元素。宿主环境如 DOM，Native 等。

我们也可以称为`diff`和`patch`两个阶段，Fiber 就是对`Reconciler`的改造。

## Fiber 解决了哪些问题

React 16 之前的版本比对更新 VirtualDOM 的过程是采用**循环加递归**实现的，这种比对方式有一个问题，就是一旦任务开始进行就无法中断，如果应用中组件数量庞大，主线程被长期占用，直到整棵 VirtualDOM 树比对更新完成之后主线程才能被释放，主线程才能执行其他任务。这就会导致一些用户交互，动画等任务无法立即得到执行，页面就会产生卡顿, 非常的影响用户体验。

核心问题：**递归无法中断，执行重任务耗时长。 JavaScript 又是单线程，无法同时执行其他任务，导致任务延迟页面卡顿，用户体验差。**

`Fiber Reconciler` 把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会。

React Fiber 把更新过程碎片化，每执行完一段更新过程，就把控制权交还给 React 负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。

维护每一个分片的数据结构，就是 **Fiber**。

总之 Fiber 将原有的 `Stack Reconciler` 替换为 `Fiber Reconciler`，**提高了复杂应用的可响应性和性能**。主要通过以下方式达成目标：

- 对大型复杂任务的分片。
- 对任务划分优先级，优先调度高优先级的任务。
- 调度过程中，可以对任务进行挂起、恢复、终止等操作。

## Fiber 的实现原理

下面通过实现一个简易的[Fiber](https://github.com/licop/Fiber)项目来了解一下其原理, 该项目通过`Fiber Reconciler`实现了 React 的基础功能，可以对元素节点和组件的渲染、更新和删除。

### 核心 API requestIdleCallback

利用浏览器的空余时间执行任务，如果有更高优先级的任务要执行时，当前执行的任务可以被终止，优先执行高级别任务。

比如说当页面有个计算任务在执行，浏览主线程是卡在这里的，并不能执行其他的任务。如果此时用户想要进行其他操作，页面就会变得卡顿，体验变差;
我们可以将就计算任务放在`requestIdleCallback`中执行，用浏览的空余时间执行，当用户操作页面优先级比较高的任务就可以执行了。

```javascript
// 浏览器有空余时间，执行参数里的函数
requestIdleCallback(function(deadline) {
  // deadline.timeRemaining() 获取浏览器的空余时间
});
```

### 浏览器空余时间

页面是一帧一帧绘制出来的，当每秒绘制的帧数达到 60 时，页面是流畅的，小于这个值时， 用户会感觉到卡顿

1s 60 帧，每一帧分到的时间是 1000/60 ≈ 16 ms，如果每一帧执行的时间小于 16ms，就说明浏览器有空余时间

如果任务在剩余的时间内没有完成则会停止任务执行，继续优先执行主任务，也就是说 `requestIdleCallback` 总是利用浏览器的空余时间执行任务

### API 功能体验

页面中有两个按钮和一个 DIV，点击第一个按钮执行一项昂贵的计算，使其长期占用主线程，当计算任务执行的时候去点击第二个按钮更改页面中 DIV 的背景颜色就会十分卡顿。

使用 `requestIdleCallback` 就可以完美解决这个卡顿问题。

```html
<div class="playground" id="play">playground</div>
<button id="work">start work</button>
<button id="interaction">handle some user interaction</button>
```

```css
<style>
  .playground {
    background: palevioletred;
    padding: 20px;
    margin-bottom: 10px;
  }
</style>
```

```javascript
var play = document.getElementById("play");
var workBtn = document.getElementById("work");
var interactionBtn = document.getElementById("interaction");
var iterationCount = 100000000;
var value = 0;

var expensiveCalculation = function(deadline) {
  // 空余时间大于1s
  while (iterationCount > 0 && deadline.timeRemaining() > 1) {
    // 用于产生昂贵的计算
    value = Math.random() < 0.5 ? value + Math.random() : value + Math.random();
    iterationCount = iterationCount - 1;
  }
  requestIdleCallback(expensiveCalculation);
};

workBtn.addEventListener("click", function() {
  requestIdleCallback(expensiveCalculation);
});

interactionBtn.addEventListener("click", function() {
  play.style.background = "palegreen";
});
```

目前 `requestIdleCallback` 目前只有 Chrome 支持。所以目前 React 自己实现了一个。

### 实现思路

除了 Fiber 工作单元的拆分，两阶段的拆分也是一个非常重要的改造，**在此之前都是一边 Diff 一边提交的**。先来看看这两者的区别:

**协调阶段**: 可以认为是 Diff 阶段, 这个阶段**可以被中断**, 这个阶段构建 Fiber 对象，并会找出所有节点变更，例如节点新增、删除、属性变更等等, 这些变更 React 称之为'副作用(Effect)' . 以下生命周期钩子会在协调阶段被调用：

- constructor
- componentWillMount(废弃)
- componentWillReceiveProps(废弃)
- static getDerivedStateFromProps
- shouldComponentUpdate
- componentWillUpdate(废弃)
- render

**提交阶段**: 将上一个阶段计算出来的需要处理的**副作用(Effects)**一次性执行了。这个阶段必须同步执行，**不能被打断**. 这些生命周期钩子在提交阶段被执行:

- getSnapshotBeforeUpdate() 严格来说，这个是在进入 commit 阶段前调用
- componentDidMount
- componentDidUpdate
- componentWillUnmount

需要注意的是：因为**协调阶段**可能被中断、恢复，甚至重做，React 协调阶段的生命周期钩子可能会被调用多次! 例如 `componentWillMount` 可能会被调用两次。
因此建议**协调阶段**的生命周期钩子不要包含副作用. 索性 React 就废弃了这部分可能包含副作用的生命周期方法，例如 `componentWillMount`、`componentWillUpdate`.

#### 协调阶段 -> 构建 Fiber

构建 Fiber 发生在生成 virtualDOM 之后，我们要在 virtualDOM 中找到每个内部的 virtualDOM 对象，为每个 virtualDOM 对象构建 Fiber 对象。Fiber 对象也是 JavaScript 对象，由 virtualDOM 对象演变而来，新增一些重要的信息，比如当前节点要执行的操作。当所有 Fiber 对象构建完成后，存放在一个 Fiber 的数组中。

VirtualDom tree 变成 Fiber tree 了，以前是自上而下的简单树结构，现在是基于**单链表的树结构**，维护的节点关系更多一些。

![](/framework/react_fiber/react_fiber_2.png)

以下是 Fiber 对象的一些属性， 由于 VirtualDom 对象节点树被抹平，所以 Fiber 对象需要添加`parent`, `child`, `sibling`属性，才能进行节点比对。

```
{
  type         节点类型 (元素, 文本, 组件)(具体的类型)
  props        节点属性
  stateNode    节点 DOM 对象 | 组件实例对象
  tag          节点标记 (对具体类型的分类 hostRoot || hostComponent || classComponent || functionComponent)
  effects      数组, 存储需要更改的 fiber 对象
  effectTag    当前 Fiber 要被执行的操作 (新增, 删除, 修改)
  return/parent       当前 Fiber 的父级 Fiber
  child        当前 Fiber 的子级 Fiber
  sibling      当前 Fiber 的下一个兄弟 Fiber
  alternate    旧的Fiber 备份， fiber 比对时使用
}
```

以下是协调阶段构建 Fiber 对象的简略代码。
`workLoop` 的工作大概猜到了，它会从更新队列(taskQueue)中弹出更新任务来执行，每执行完一个‘执行单元‘，就检查一下剩余时间是否充足，如果充足就进行执行下一个执行单元。

`executeTask`去调用`reconcileChildren`函数构建子节点 fiber 对象，遍历 fiber 数结构按照**先子节点后相邻节点**的顺序，不断弹出子任务。

```js
// 构建根节点的fiber对象
const getFirstTask = () => {
  // 从任务队列中获取任务
  const task = taskQueue.pop();

  //...

  // 返回最外层节点的Fiber对象
  return {
    props: task.props,
    stateNode: task.dom,
    // 根节点
    tag: "host_root",
    effects: [],
    child: null,
    // 旧的fiber对象备份
    alternate: task.dom.__rootFiberContainer,
  };
};

// 构建子节点fiber对象
const reconcileChildren = (fiber, children) => {
  // ***
};

const executeTask = (fiber) => {
  // 构建子级对象
  // ...
  reconcileChildren(fiber, fiber.props.children);

  /**
   * 如果子级存在 返回子级
   * 将这个子级当做父级 构建这个父级下的子级
   * 在workloop的while里进行循环调用
   */
  if (fiber.child) {
    return fiber.child;
  }
  /**
   * 如果存在同级 返回同级 构建同级的子级
   * 如果同级不存在 返回到父级 看父级是否有同级
   * 这样就可以遍历所有节点了
   */
  let currentExecutelyFiber = fiber;

  while (currentExecutelyFiber.parent) {
    // 构建effects数组
    // 将所有的fiber存放在在外层fiber的effects中
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(
      currentExecutelyFiber.effects.concat([currentExecutelyFiber])
    );

    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling;
    }
    currentExecutelyFiber = currentExecutelyFiber.parent;
  }
  // 此时currentExecutelyFiber为根节点的fiber
  pendingCommit = currentExecutelyFiber;
};

const workLoop = (deadline) => {
  // 如果子任务不存在，就去获取子任务
  if (!subTask) {
    subTask = getFirstTask();
  }
  // 如果任务存在并且浏览器有空闲时间
  // executeTask方法执行任务，接受任务，返回新的任务
  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask);
  }
  // 获取到顶级节点的fiber和effects属性下的fiber数组，提交fiber进行渲染
  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
};

const preformTask = (deadline) => {
  // 执行任务
  workLoop(deadline);
  // 判断任务是否存在，判断任务队列中是否还有任务没有执行
  // 再次告诉浏览器在空闲的时间执行任务
  if (subTask || !taskQueue.isEmpty()) {
    requestIdleCallback(preformTask);
  }
};

export const render = (element, dom) => {
  // 1. 向任务队列，添加任务
  // 任务就是通过virtualDOM对象构建Fiber对象
  taskQueue.push({
    dom,
    props: { children: element },
  });

  // 2. 指定在浏览器空闲时执行任务
  requestIdleCallback(preformTask);
};
```

#### 提交阶段 Commit

将 Fiber 的渲染和变更的数据**一次性提交**，渲染为真实 DOM

`commitAllWork`的参数为根节点的 fiber 对象，`effects`属性中存放这所有节点的 fiber 对象

```js
const commitAllWork = (fiber) => {
  // 循环effects数组，构建dom节点树
  fiber.effects.forEach((item) => {
    // 如果是类组件，在其组件实例对想中挂载fiber
    if (item.tag === "class_component") {
      item.stateNode.__fiber = fiber;
    }

    if (item.effectTag === "delete") {
      // 删除节点
      item.parent.stateNode.removeChild(item.stateNode);
    } else if (item.effectTag === "update") {
      // 更新节点
      if (item.type === item.alternate.type) {
        // 节点类型相同
        updateElementNode(item.stateNode, item, item.alternate);
      } else {
        // 节点类型不同
        item.parent.stateNode.replaceChild(
          item.stateNode,
          item.alternate.stateNode
        );
      }
    } else if (item.effectTag === "placement") {
      // 当前要追加的子节点
      let fiber = item;
      // 当前要追加的子节点的父级
      let parentFiber = item.parent;
      /**
       * 找到普通节点父级 排除组件父级
       * 因为组件父级是不能直接追加真实DOM节点的
       */
      while (
        parentFiber.tag === "class_component" ||
        parentFiber.tag === "function_component"
      ) {
        parentFiber = parentFiber.parent;
      }
      // 如果子节点是普通节点 找到父级 将子节点追加到父级中
      if (fiber.tag === "host_component") {
        parentFiber.stateNode.appendChild(fiber.stateNode);
      }
    }
  });
  // 在跟节点dom上备份旧的fiber节点对象
  fiber.stateNode.__rootFiberContainer = fiber;
};
```

- DOM 初始渲染: virtualDOM -> Fiber -> Fiber[] -> DOM
- DOM 更新操作: newFiber vs oldFiber -> Fiber[] -> DOM

其实稍一细想，从 `Stack reconciler` 到 `Fiber reconciler`，源码层面就是干了一件**递归改循环**的事情（当然，实际做的事情远不止递归改循环，但这是第一步）

以上只是对 fiber 的原理的简易实现，并没有涉及复杂的双缓冲技术。

## 更多资料

- [React Fiber 是什么](https://zhuanlan.zhihu.com/p/26027085)
- [React Fiber 的作用和原理](https://cloud.tencent.com/developer/article/1882296)
- [完全理解 React Fiber](http://www.ayqy.net/blog/dive-into-react-fiber/)
- [这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.cn/post/6844903975112671239)
- [走进 React Fiber 的世界](https://juejin.cn/post/6937560479795511303)
