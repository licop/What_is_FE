# 应用状态该用 React 组件状态还是 Redux

## React 应用中有哪些状态

们在开发 React 应用时，会用到各种状态，大致可以分类成三种：业务状态、交互状态以及外部状态。

**业务状态是指与业务直接相关的状态，这些状态理论上剥离 UI 也可以使用**，比如在单元测试中、Node.js 环境中等等。

举个具体的例子：项目中的卡片列表 中的 todoList、doneList，都可以增删改查，那么它们就属于业务状态。

另外，在大中型 React 项目中的用户权限信息，也经常被存入前端状态中，方便前端逻辑判断某个功能模块是否可以对当前用户开放，或是可见但只读，再或者，直接隐藏起来。

当然，考虑到系统整体安全性，当服务器端接收到用户从浏览器端发起的请求时，仍然要验证用户权限，这类用户权限状态也属于业务状态。

**交互状态（也称作 UI 状态），是与用户交互相关的状态，主要控制着用户与应用的交互过程，用于提升用户体验。**

比如 项目中的 中的 isLoading、showModal，分别控制着是否显示“读取中”占位提示，和是否显示“创建新卡片”的卡片，它们就属于交互状态。

还有，当大中型 React 项目中功能比较多时，常用到的 Tab 标签页，也常用诸如 currentTab 这样的交互状态来记录哪个是当前 Tab。

那**外部状态**是怎么回事？在外部不就意味着与 React 无关了吗？举个例子： window.location。

在 React 生态中，最常用的前端路由框架就是 React-Router 了。React-Router 在前端做路由时，会读取 window.location 的信息，也会通过浏览器 History API，修改 location 的 URL。这从实际上来看，就成为了 React 应用状态的一部分。其实不仅 React，业务状态、交互状态、外部状态的分类对很多其他前端框架也适用。

## 全局状态与局部状态

单看 API，state 对单个 React 组件是私有的，但从单向数据流的角度看，一个组件的 state 还可以覆盖到它的所有后代组件。

![](/framework/react_base_9.png)

ParentComponent 的 state A ：

- 可以自用；
- 可以通过 props 传给直接子组件 MyComponent ；
- 也可以通过 props 向下钻取，传给第二层和第三层的后代组件 MyChildComponent 、 MyGrandchildComponent ；
- 更可以通过 context，传给所有的后代组件。

而 MyChildComponent 的 state B 的范围虽然要小很多，但跟 state A 会有一定重合，即 MyChildComponent 、 MyGrandchildComponent 可以同时使用 state A 和 B 的值。

如果 ParentComponent 已经是应用的根组件，那么可以认为 state A 就是全局状态，而 state B 就是局部状态。

当然，全局状态和局部状态是相对而言的。如果你的根组件并未提供状态，而它的唯一子组件提供了状态，那么这个状态也是全局状态。

局部状态也可以**状态提升**这样的开发技巧，根据需要改写为全局状态。

## 什么时候使用 Redux？

什么情况下情况下使用 Redux，Redux 官网是这样介绍的：

- 应用中有很多 state 在多个组件中需要使用
- 应用 state 会随着时间的推移而频繁更新
- 更新 state 的逻辑很复杂
- 中型和大型代码量的应用，很多人协同开发

一般情况下，当你的 React 项目足够小，引入 Redux 的成本要大于收益。只有你**预期项目规模会逐渐增大，或者项目已经是大中型的体量了，这时可以考虑引入 Redux**。Redux 鼓励全局只有单一 store，所以比较适合管理全局状态。

尤其有一种情况，当你发现，项目的逻辑越来越复杂，**你不得不把项目中大部分组件的 state 都提升到根组件上时，全局状态会不断膨胀**，那你就有可能亟需引入 Redux 了。

## 可否混用 React 内建 state 和 Redux？

当你决定了为项目引入 Redux，并不意味着你就与 useState 说再见了。**它们可以共存，而且可以配合得很好。**

一般情况下可以这样分工：

- 全局状态倾向于放到 Redux store 里；
- 局部状态倾向于放到 React state 里；
- 业务状态倾向于放到 Redux store 里；
- 交互状态倾向于放到 React state 里；
- 必要时，可以把外部状态同步到 Redux store 里。

大多数表单的 state 不应该保存在 Redux 中。 相反，在编辑表单的时候把数据存到表单组件中，当用户提交表单的时候再 dispatch action 来更新 store。

在 React 中引入 Redux 后，不能将大大小小的状态都习惯性地往 Redux store 里放，这就是一种**路径依赖**了。这样做的后果也很容易想象得到：**Redux store 不堪重负，React 反而头重脚轻。**

> 路径依赖（Path Dependence），说的是人们在当前做的决策选择往往受制于他过去的决策，哪怕所处环境已经发生变化
