# Vuex 介绍及源码解析

## Vuex 介绍

在 Vue 中多个组件之间要共享状态(数据)，可以使用 Vue 常用组件间通信方式实现，但是比较麻烦，而且多个组件之间互相传值很难跟踪数据的变化，如果出现问题很难定位问题。当遇到多个组件需要共享状态的时候，典型的场景:购物车。我们如果使用上述的方案都不合适，我们会遇到以下的问题:

- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。

对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。
对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

因此，我们为什么不把组件的共享状态抽取出来，以一个**全局单例模式**管理呢?在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为!我们可以把多个组件的状态，或者整个程序的状态放到一个集中的位置存储，并且可以检测到数据的更改。这就是 Vuex 背后的基本思想。

这里我们先以一种简单的方式来实现

- 首先创建一个共享的仓库 store 对象

```js
export default {
  debug: true,
  state: {
    user: {
      name: "xiaomao",
      age: 18,
      sex: "男",
    },
  },
  setUserNameAction(name) {
    if (this.debug) {
      console.log("setUserNameAction triggered:", name);
    }
    this.state.user.name = name;
  },
};
```

- 把共享的仓库 store 对象，存储到需要共享状态的组件的 data 中

```js
import store from "./store";
export default {
  methods: {
    // 点击按钮的时候通过 action 修改状态
    change() {
      store.setUserNameAction("componentB");
    },
  },
  data() {
    return {
      privateState: {},
      sharedState: store.state,
    };
  },
};
```

接着我们继续延伸约定，组件不允许直接变更属于 `store` 对象的 `state`，而应执行 `action` 来分发 (dispatch) 事件通知 `store`去改变，这样最终的样子跟 Vuex 的结构就类似了。这样约定的好处是，我们能够记录所有 `store` 中发生的 `state` 变更，同时实现能做到记录变更、保存状态快照、历史回滚/时光旅行的先进的调试工具。

Vuex 是一个专为 Vue 服务，用于管理页面数据状态、提供统一数据操作的生态系统。它集中于 MVC 模式中的 Model 层，规定所有的数据操作必须通过 `action - mutation - state change` 的流程来进行，再结合 Vue 的数据视图双向绑定特性来实现页面的展示更新。统一的页面状态管理以及操作处理，可以让复杂的组件交互变得简单清晰，同时可在调试模式下使用时光穿梭的倒退前进操作，查看数据改变过程，使 debug 更加方便。

Vuex 实现了一个单向数据流，在全局拥有一个 `State` 存放数据，所有修改 `State` 的操作必须通过 `Mutation` 进行，`Mutation` 的同时提供了订阅者模式供外部插件调用获取 `State` 数据的更新。所有**异步接口**需要走 `Action`，常见于调用后端接口异步获取更新数据，而 `Action` 也是无法直接修改 `State` 的，还是需要通过 `Mutation` 来修改 `State` 的数据。最后，根据 `State` 的变化，渲染到视图上。Vuex 运行依赖 Vue 内部数据双向绑定机制，需要 new 一个 Vue 对象来实现“响应式化”和`getters`计算属性的缓存，Vuex 也是通过 Vue 插件机制实现的一个插件，所以 Vuex 是一个专门为 Vue.js 设计的状态管理库。

### 什么情况下使用 Vuex

正如官方文档所说：

> Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。
> 如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用 够简单，您最好不要使用 Vuex。一个简单的 store 模式就足够您所需了。但是，如果您需要构建 一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然 的选择。引用 Redux 的作者 Dan Abramov 的话说就是: **Flux 架构就像眼镜:您自会知道什么时候需要它**。

当你的应用中具有以下需求场景的时候:

- 多个视图依赖于同一状态
- 来自不同视图的行为需要变更同一状态

建议符合这种场景的业务使用 Vuex 来进行数据管理

## Vuex 核心概念

Vuex 的数据流程图
![](/framework/vuex流程图.png)

如上边 Vuex 的数据流程图示，Vuex 为 Vue Components 建立起了一个完整的生态圈，包括开发中的 API 调用一环。围绕这个生态圈，简要介绍一下各模块在核心流程中的主要功能：

### Vue Components

Vue 组件。HTML 页面上，负责接收用户操作等交互行为，执行 `dispatch` 方法触发对应 `action` 进行回应。

### State

页面状态管理容器对象。Vuex 使用**单一状态树**，用一个对象就包含了全部的应用层级状态。集中存储 `Vue components` 中 data 对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用 Vue 的细粒度数据响应机制来进行高效的状态更新。

使用 `mapState` 简化 `State` 在视图中的使用，`mapState` 返回计算属性

`mapState` 有两种使用的方式:

- 接收数组参数

```js
// 该方法是 vuex 提供的，所以使用前要先导入
import { mapState } from 'vuex'
// mapState 返回名称为 count 和 msg 的计算属性
// 在模板中直接使用 count 和 msg
computed: {
  ...mapState(['count', 'msg']),
}
```

- 接收对象参数,如果当前视图中已经有了 count 和 msg，如果使用上述方式的话会有命名冲突，解决的方式:

```js
// 该方法是 vuex 提供的，所以使用前要先导入
import { mapState } from 'vuex'
// 通过传入对象，可以重命名返回的计算属性
// 在模板中直接使用 num 和 message
computed: {
  ...mapState({
    num: state => state.count,
    message: state => state.msg
  })
}
```

### dispatch

操作行为触发方法，是唯一能执行 `action` 的方法。

### Actions

操作行为处理模块。负责处理 `Vue Components` 接收到的所有交互行为, 包含同步/异步操作。向后台 API 请求的操作就在这个模块中进行，包括触发其他 `action` 以及提交 `mutation` 的操作。该模块提供了 `Promise` 的封装，以支持 `action` 的链式触发。

```js
import { mapActions } from 'vuex'
methods: {
  ...mapActions(['increate']),
  // 传对象解决重名的问题
  ...mapActions({
    increateAction: 'increate'
  })
}
```

### commit

状态改变提交操作方法。对 `mutation` 进行提交，是唯一能执行 `mutation`的方法。

### Mutations

状态改变操作方法。是 Vuex 修改 `state` 的唯一推荐方法，其他修改方式在**严格模式**下将会报错。该方法只能进行**同步**操作，且方法名只能全局唯一。
Vuex 中的 `mutation` 非常类似于事件: 每个 `mutation` 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 `state` 作为第一个参数。
使用 `Mutation` 改变状态的好处是，集中的一个位置对状态修改，不管在什么地方修改，都可以追踪到状态的修改。可以实现高级的 time-travel 调试功能。

```js
import { mapMutations } from 'vuex'

methods: {
    ...mapMutations(['increate']),
    // 传对象解决重名的问题
    ...mapMutations({
      increateMut: 'increate'
    })
}
```

### Getters

`state` 对象读取方法。就像计算属性一样，`getter` 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
使用 `mapGetter` 简化视图中的使用

```js
import { mapGetter } from 'vuex'

computed: {
  ...mapGetter(['reverseMsg']),
    // 改名，在模板中使用 reverse
  ...mapGetter({
    reverse: 'reverseMsg'
  })
}
```

### Modules

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，`store` 对象就有可能变得相当臃肿。
为了解决以上问题，Vuex 允许我们将 `store` 分割成**模块(module)**。每个模块拥有自己的 `state`、 `mutation`、`action`、`getter`、甚至是嵌套子模块。

## Vuex 源码解析

Vuex 代码量不多且结构清晰，非常适合研究学习其内部实现。下面我们将带着问题对 Vuex 源码进行解析，这样使得学习和研究更加有针对性。[Vuex 源码解析注释](https://github.com/licop/vuex)在这里。

**1._store 是如何注入到组件中的，为何子组件也能访问到 store？_**

`Vue.use(Vuex)` 方法执行的是 install 方法

```js
// 暴露给外部的插件install方法，供Vue.use调用安装插件
export function install(_Vue) {
  // 避免重复安装（Vue.use内部也会检测一次是否重复安装同一个插件）
  if (Vue && _Vue === Vue) {
    if (__DEV__) {
      console.error(
        "[vuex] already installed. Vue.use(Vuex) should be called only once."
      );
    }
    return;
  }
  // 保存Vue，同时用于检测是否重复安装
  Vue = _Vue;
  // 将vuexInit混淆进Vue的beforeCreate(Vue2.0)或_init方法(Vue1.0)
  applyMixin(Vue);
}
```

`vuexInit` 会尝试从 `options` 中获取 `store`，如果当前组件是根组件（Root 节点），则 `options` 中会存在 `store`，直接获取赋值给`$store`即可。如果当前组件非根组件，则通过`options`中的`parent`获取父组件的`$store` 引用。这样一来，所有的组件都获取到了同一份内存地址的 `Store` 实例，于是我们可以在每一个组件中通过 `this.$store` 愉快地访问全局的 `Store` 实例了。

```js
/* Vuex的init钩子，会存入每一个Vue实例等钩子列表 */
function vuexInit() {
  const options = this.$options;
  // store injection
  if (options.store) {
    /* 存在store其实代表的就是Root节点，直接执行store（function时）或者使用store（非function）*/
    this.$store =
      typeof options.store === "function" ? options.store() : options.store;
  } else if (options.parent && options.parent.$store) {
    /* 子组件直接从父组件中获取$store，这样就保证了所有组件都公用了全局的同一份store */
    this.$store = options.parent.$store;
  }
}
```

**2. _state 是如何实现响应式的，以及 getters 如何实现计算缓存的？_**

在实例 store 初始化的时候调用`resetStoreVM`，在其内部 new 一个 Vue 实例，并挂载到 store 实例上，将 state 作为 data 数据传入，实现了 state 数据响应式，在实例的 get 方法中返回`this._vm._data.$$state`。

Vuex 的`getters`和 Vue 的`computed`功能几乎一致，Vuex 也是利用 Vue 的`computed`实现的，遍历传入`getters`使用`Object.defineProperty`使其访问的只为`store._vm[key]`也就是 Vue 实例的计算属性。

```js
// 通过vm重设store，新建Vue对象使用Vue内部的响应式实现注册state以及computed
function resetStoreVM(store, state, hot) {
  // 存放之前的vm对象
  const oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  const wrappedGetters = store._wrappedGetters;
  const computed = {};

  // 通过Object.defineProperty为每一个getter方法设置get方法
  // 比如获取this.$store.getters.test的时候获取的是store._vm.test，也就是Vue对象的computed属性
  forEachValue(wrappedGetters, (fn, key) => {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    // 使用计算来利用其延迟缓存机制
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
      enumerable: true, // for local getters
    });
  });

  const silent = Vue.config.silent;
  // Vue.config.silent暂时设置为true的目的是在new一个Vue实例的过程中不会报出一切警告
  Vue.config.silent = true;
  // 这里new了一个Vue对象，运用Vue内部的响应式实现注册state以及computed
  store._vm = new Vue({
    data: {
      $$state: state,
    },
    computed,
  });
  Vue.config.silent = silent;

  // 使严格模式，保证修改store只能通过mutation
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    // 解除旧vm的state的引用，以及销毁旧的Vue对象
    if (hot) {
      store._withCommit(() => {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(() => oldVm.$destroy());
  }
}
```

```js
get state () {
  return this._vm._data.$$state
}
```

**3. _严格模式是如何实现的，Vuex 如何区分 state 是外部直接修改，还是通过 mutation 方法修改的？_**

Vuex 的 Store 构造类的 option 有一个 strict 的参数，可以控制 Vuex 执行严格模式，严格模式下，所有修改 state 的操作必须通过 mutation 实现，否则会抛出错误。

```js
// 严格模式
function enableStrictMode(store) {
  store._vm.$watch(
    function() {
      return this._data.$$state;
    },
    () => {
      if (process.env.NODE_ENV !== "production") {
        /* 检测store中的_committing的值，如果是false代表不是通过mutation的方法修改的 */
        assert(
          store._committing,
          `Do not mutate vuex store state outside mutation handlers.`
        );
      }
    },
    { deep: true, sync: true }
  );
}
```

首先，在严格模式下，Vuex 会利用 vm 的`$watch` 方法来观察`$$state`，也就是 Store 的 state，在它被修改的时候进入回调。我们发现，回调中只有一句话，用 assert 断言来检测 `store._committing`，当 `store._committing` 为 false 的时候会触发断言，抛出异常。

我们发现，Store 的 commit 方法中，执行 mutation 的语句是这样的。

```js
this._withCommit(() => {
  entry.forEach(function commitIterator(handler) {
    handler(payload);
  });
});
```

再来看看`_withCommit` 的实现。

```js
_withCommit (fn) {
  // 调用withCommit修改state的值时会将store的committing值置为true，内部会有断言检查该值，
  // 在严格模式下只允许使用mutation来修改store中的值，而不允许直接修改store的数值
  const committing = this._committing
  this._committing = true
  fn()
  this._committing = committing
}
```

我们发现，通过 commit（mutation）修改 state 数据的时候，会在调用 mutation 方法之前将 `committing` 置为 true，接下来再通过 mutation 函数修改 state 中的数据，这时候触发`$watch`中的回调断言 `committing` 是不会抛出异常的（此时 `committing` 为 true）。而当我们直接修改 state 的数据时，触发`$watch` 的回调执行断言，这时 `committing` 为 false，则会抛出异常。这就是 Vuex 的严格模式的实现。

**4. _store.subscribe 在哪个节点调用？_**

我们发现在`commit`中遍历了通知了所有订阅者，并将`mutation`和当前的`state`传递过去，所以每次我们`commit`的时候都会通知全部订阅者，我们可以利用`subscribe`来编写插件实现用于外部地数据持久化、记录或调试功能

```js
 // 调用mutation的commit方法
  commit (_type, _payload, _options) {
    ...
    // 通知所有订阅者
    this._subscribers
      .slice()
      .forEach(sub => sub(mutation, this.state))
    ...
  }
```

**5. _调试时的”时空穿梭”功能是如何实现的？_**

`devtoolPlugin` 中提供了此功能。因为 dev 模式下所有的 state change 都会被记录下来，'时空穿梭' 功能其实就是将当前的 state 替换为记录中某个时刻的 state 状态，利用 `store.replaceState(targetState)` 方法将执行替换 store 的根状态实现。

```js
  // 替换 store 的根状态，仅用状态合并或时光旅行调试
  replaceState (state) {
    this._withCommit(() => {
      this._vm._data.$$state = state
    })
  }
```

## 实现一个简易的 Vuex

下面我们实现一个简易的 Vuex，没有 module 功能的实现

```js
let Vue = null;
class Store {
  constructor(options) {
    const { state = {}, getters = {}, mutations = {}, actions = {} } = options;

    // 另一种getters和state响应式的实现, getter没有实现缓存机制
    // this.state = Vue.observable(state)
    // this.getters = Object.create(null)
    // Object.keys(getters).forEach(key => {
    //   Object.defineProperty(this.getters, key, {
    //     get: () => getters[key](state)
    //   })
    // })

    this._mutations = mutations;
    this._actions = actions;
    this._getters = getters;

    initStoreVM(this, state);
  }

  get state() {
    return this._vm._data.$$state;
  }

  commit(type, payload) {
    this._mutations[type](this.state, payload);
  }

  dispatch(type, payload) {
    this._actions[type](this, payload);
  }
}

// 新建Vue对象使用Vue内部的响应式实现注册state以及computed
function initStoreVM(store, state) {
  const oldVm = store._vm;
  const getters = store._getters;
  const computed = {};
  store.getters = {};
  // 通过Object.defineProperty为每一个getter方法设置get方法
  // 比如获取this.$store.getters.test的时候获取的是store._vm.test，也就是Vue对象的computed属性
  Object.keys(getters).forEach((key) => {
    const fn = getters[key];
    computed[key] = partial(fn, state);
    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
      enumerable: true,
    });
  });

  const silent = Vue.config.silent;
  Vue.config.silent = true;
  // 这里new了一个Vue对象，运用Vue内部的响应式实现注册state以及computed
  store._vm = new Vue({
    data: {
      $$state: state,
    },
    computed,
  });
  Vue.config.silent = silent;
  console.log(store);

  if (oldVm) {
    // 解除旧vm的state的引用，以及销毁旧的Vue对象
    Vue.nextTick(() => oldVm.$destroy());
  }
}

function partial(fn, arg) {
  return function() {
    return fn(arg);
  };
}

function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      // store injection
      if (options.store) {
        /* 存在store其实代表的就是Root节点，直接执行store（function时）或者使用store（非function） */
        this.$store =
          typeof options.store === "function" ? options.store() : options.store;
      } else if (options.parent && options.parent.$store) {
        /* 子组件直接从父组件中获取$store，这样就保证了所有组件都公用了全局的同一份store */
        this.$store = options.parent.$store;
      }

      // 挂载到原型方法上，使其每个实例都有store对象
      // 不合理: 会对Vue实例造成污染, 应该挂载到根实例上。然后让其子组件也依次挂载store
      // if (options.store) {
      //   _Vue.prototype.$store = options.store
      // }
    },
  });
}
```

[完整源码参考](https://github.com/licop/What_is_FE/tree/master/examples/vuex/my-vuex)

## 更多参考

- [Vuex 官方文档](https://vuex.vuejs.org/zh/guide/)
- [Vuex 实现购物车](https://github.com/licop/What_is_FE/tree/master/examples/vuex/vuex-cart-demo)
- [Vuex 源码解析](https://github.com/answershuto/learnVue/blob/master/docs/Vuex%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90.MarkDown)
- [Vuex 框架原理与源码分析](https://tech.meituan.com/2017/04/27/vuex-code-analysis.html)
