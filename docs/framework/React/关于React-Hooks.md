# 关于 React-Hooks

## 什么是 Hooks 及其作用

### 重新思考 React 组件的本质

React 组件的模型其实很直观，就是从 Model 到 View 的映射，这里的 Model 对应到 React 中就是 state 和 props。如下图所示：

![](/framework/react_hook/react_hook_1.webp)

在过去，我们需要处理当 Model 变化时，DOM 节点应该如何变化的细节问题。而现在，我们只需要通过 JSX，根据 Model 的数据用声明的方式去描述 UI 的最终展现就可以了，因为 React 会帮助你处理所有 DOM 变化的细节。而且，当 Model 中的状态发生变化时，UI 会自动变化，即**所谓的数据绑定。**

所以呢，我们可以把 UI 的展现看成一个函数的执行过程。其中，Model 是输入参数，函数的执行结果是 DOM 树，也就是 View。而 React 要保证的，就是每当 Model 发生变化时，函数会重新执行，并且生成新的 DOM 树，然后 React 再把新的 DOM 树以最优的方式更新到浏览器。

既然如此，使用 Class 作为组件是否真的合适呢？Class 在作为 React 组件的载体时，是否用了它所有的功能呢？如果你仔细思考，会发现使用 Class 其实是有点牵强的，主要有两方面的原因。

1. **React 组件之间是不会互相继承的。** 比如说，你不会创建一个 Button 组件，然后再创建一个 DropdownButton 来继承 Button。所以说，React 中其实是没有利用到 Class 的继承特性的。

2. **因为所有 UI 都是由状态驱动的，因此很少会在外部去调用一个类实例（即组件）的方法。** 要知道，组件的所有方法都是在内部调用，或者作为生命周期方法被自动调用的。

所以你看，这两个 Class 最重要的特性其实都没有用到。而在 React 出现之时，主流的方式还是基于对象去考虑问题。例如获得一个对话框的实例，然后通过 dialog.show(), dialog.hide() 这样的方式细粒度地去控制 UI 的变化。

而这在 React 中其实是没有必要的，因为所有的 UI 都是声明出来的，不用处理细节的变化过程。因此，通过函数去描述一个组件才是最为自然的方式。这也是为什么 React 很早就提供了函数组件的机制。

只是当时有一个局限是，函数组件无法存在内部状态，必须是纯函数，而且也无法提供完整的生命周期机制。这就极大限制了函数组件的大规模使用。

那么我们自然就知道了，**Class 作为 React 组件的载体，也许并不是最适合，反而函数是更适合去描述 State => View 这样的一个映射，但是函数组件又没有 State ，也没有生命周期方法。** 以此来看，我们应该如何去改进呢？

### Hooks 是如何诞生的？

简单想一下，函数和对象不同，并没有一个实例的对象能够在多次执行之间保存状态，那势必需要一个函数之外的空间来保存这个状态，而且要能够检测其变化，从而能够触发函数组件的重新渲染。

再进一步想，那我们是不是就是需要这样一个机制，能够把一个外部的数据绑定到函数的执行。当数据变化时，函数能够自动重新执行。这样的话，任何会影响 UI 展现的外部数据，都可以通过这个机制绑定到 React 的函数组件。

在 React 中，这个机制就是 Hooks。

所以我们现在也能够理解这个机制为什么叫 Hooks 了。顾名思义，Hook 就是“钩子”的意思。在 React 中，**Hooks 就是把某个目标结果钩到某个可能会变化的数据源或者事件源上，那么当被钩到的数据或事件发生变化时，产生这个目标结果的代码会重新执行，产生更新后的结果。**

对于函数组件，这个结果是最终的 DOM 树；对于 `useCallback`、`useMemo` 这样与缓存相关的组件，则是在依赖项发生变化时去更新缓存。

通过这样的思考，你应该能够理解 Hooks 诞生的来龙去脉了。比起 Class 组件，函数组件是更适合去表达 React 组件的执行的，因为它更符合 State => View 这样的一个逻辑关系。但是因为缺少状态、生命周期等机制，让它一直功能受限。而现在有了 Hooks，函数组件的力量终于能真正发挥出来了！

不过这里有一点需要特别注意，Hooks 中被钩的对象，不仅可以是某个独立的数据源，也可以是另一个 Hook 执行的结果，这就带来了 Hooks 的最大好处：**逻辑的复用。**

### Hooks 带来的最大好处：逻辑复用

在之前的 React 使用中，有一点经常被大家诟病，就是非常难以实现逻辑的复用，必须借助于高阶组件等复杂的设计模式。但是高阶组件会产生冗余的组件节点，让调试变得困难。不过这些问题可以通过 Hooks 得到很好的解决。所以如果有人问你 Hooks 有什么好处，那么最关键的答案就是**简化了逻辑复用。**

绑定窗口大小的场景为例。如果有多个组件需要在用户调整浏览器窗口大小时，重新调整布局，那么我们需要把这样的逻辑提取成一个公共的模块供多个组件使用。以 React 思想，在 JSX 中我们会根据 Size 大小来渲染不同的组件，例如：

```js
function render() {
  if (size === "small") return <SmallComponent />;
  else return <LargeComponent />;
}
```

这段代码看上去简单，但如果在过去的 Class 组件中，我们甚至需要一个比较复杂的设计模式来解决，这就是高阶组件。所以接下来我们不妨通过实际的代码来进行一下比较，如果之前没有用过 React 也没有关系，你只需根据字面含义进行大概的理解即可。
在 Class 组件的场景下，我们首先需要定义一个高阶组件，负责监听窗口大小变化，并将变化后的值作为 props 传给下一个组件。

```js
const withWindowSize = Component => {
  // 产生一个高阶组件 WrappedComponent，只包含监听窗口大小的逻辑
  class WrappedComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        size: this.getSize()
      };
    }
    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
    getSize() {
      return window.innerWidth > 1000 ? "large" ："small";
    }
    handleResize = ()=> {
      const currentSize = this.getSize();
      this.setState({
        size: this.getSize()
      });
    }
    render() {
      // 将窗口大小传递给真正的业务逻辑组件
      return <Component size={this.state.size} />;
    }
  }
  return WrappedComponent;
};
```

这样，在你的自定义组件中可以调用 withWindowSize 这样的函数来产生一个新组件，并自带 size 属性，例如：

```js
class MyComponent extends React.Component {
  render() {
    const { size } = this.props;
    if (size === "small") return <SmallComponent />;
    else return <LargeComponent />;
  }
}
// 使用 withWindowSize 产生高阶组件，用于产生 size 属性传递给真正的业务组件
export default withWindowSize(MyComponent);
```

在这里，我们可以看到，为了传递一个外部的状态，我们不得不定义一个没有 UI 的外层组件，而这个组件只是为了封装一段可重用的逻辑。更为糟糕的是，**高阶组件几乎是 Class 组件中实现代码逻辑复用的唯一方式**，其缺点其实比较显然：

1. 代码难理解，不直观，很多人甚至宁愿重复代码，也不愿用高阶组件；
2. 会增加很多额外的组件节点。每一个高阶组件都会多一层节点，这就会给调试带来很大的负担。

可以说，正因为这些缺点被抱怨已久，React 团队才终于提出了 Hooks 这样一个全新的方案。那么现在我们不妨看一下，同样的逻辑如果用 Hooks 和函数组件该如何实现。首先我们需要实现一个 Hooks：

```js
const getSize = () => {
  return window.innerWidth > 1000 ? "large" : "small";
};
const useWindowSize = () => {
  const [size, setSize] = useState(getSize());
  useEffect(() => {
    const handler = () => {
      setSize(getSize());
    };
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return size;
};
```

这样，我们在组件中使用窗口大小就会非常简单：

```js
const Demo = () => {
  const size = useWindowSize();
  if (size === "small") return <SmallComponent />;
  else return <LargeComponent />;
};
```

可以看到，窗口大小是一个外部的一个数据状态，我们通过 Hooks 的方式对其进行了封装，从而将其变成一个可绑定的数据源。这样当窗口大小发生变化时，使用这个 Hook 的组件就都会重新渲染。而且代码也更加简洁和直观，不会产生额外的组件节点。

### Hooks 的另一大好处：有助于关注分离

除了逻辑复用之外，Hooks 能够带来的另外一大好处就是**有助于关注分离**，意思是说 Hooks 能够让针对同一个业务逻辑的代码尽可能聚合在一块儿。这是过去在 Class 组件中很难做到的。因为在 Class 组件中，你不得不把同一个业务逻辑的代码分散在类组件的不同生命周期的方法中。

所以通过 Hooks 的方式，把业务逻辑清晰地隔离开，能够让代码更加容易理解和维护。

### 总结

1. React-Hooks 更好地体现了 React 的开发思想，即从 State => View 的函数式映射。
2. Hooks 帮助函数组件拥有了状态和生命周期
3. Hooks 也解决了 Class 组件存在的一些代码冗余、难以逻辑复用的问题
4. 原来的基于 Class 的组件完全可以继续使用，这意味着这两种开发方式可以并存，已有代码不需要做任何改动，而新的代码可以根据具体情况采用 Hooks 的方式来实现就行了。

## useState：让函数组件具有维持状态的能力

state 是 React 组件的一个核心机制，`useState` 这个 Hook 就是用来管理 state 的，它可以让函数组件具有维持状态的能力。也就是说，在一个函数组件的多次渲染之间，这个 state 是共享的。下面这个例子就显示了 useState 的用法：

```js
import React, { useState } from "react";

function Example() {
  // 创建一个保存 count 的 state，并给初始值 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

在这个例子中，我们声明了一个名为 count 的 state，并得到了设置这个 count 值的函数 setCount。当调用 setCount 时，count 这个 state 就会被更新，并触发组件的刷新。那么 `useState` 这个 Hook 的用法总结出来就是这样的：

1. `useState(initialState)` 的参数 initialState 是创建 state 的初始值，它可以是任意类型，比如数字、对象、数组等等。
2. `useState()` 的返回值是一个有着两个元素的数组。第一个数组元素用来读取 state 的值，第二个则是用来设置这个 state 的值。在这里要注意的是，state 的变量（例子中的 count）是只读的，所以我们必须通过第二个数组元素 setCount 来设置它的值。
3. 如果要创建多个 state，那么我们就需要多次调用 useState。比如要创建多个 state，使用的代码如下：

```js
// 定义一个年龄的 state，初始值是 42
const [age, setAge] = useState(42);
// 定义一个水果的 state，初始值是 banana
const [fruit, setFruit] = useState("banana");
// 定一个一个数组 state，初始值是包含一个 todo 的数组
const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
```

如果你之前用过类组件，那么这里的 `useState` 就和类组件中的 `setState` 非常类似。不过两者最大的区别就在于，类组件中的 state 只能有一个。所以我们一般都是把一个对象作为 一个 state，然后再通过不同的属性来表示不同的状态。**而函数组件中用 useState 则可以很容易地创建多个 state，所以它更加语义化。**

可以说，state 是 React 组件非常重要的一个机制，那么什么样的值应该保存在 state 中呢？这是日常开发中需要经常思考的问题。通常来说，我们要遵循的一个原则就是：**state 中永远不要保存可以通过计算得到的值。** 比如说：

1. **从 props 传递过来的值。** 有时候 props 传递过来的值无法直接使用，而是要通过一定的计算后再在 UI 上展示，比如说排序。那么我们要做的就是每次用的时候，都重新排序一下，或者利用某些 cache 机制，而不是将结果直接放到 state 里。
2. **从 URL 中读到的值。** 比如有时需要读取 URL 中的参数，把它作为组件的一部分状态。那么我们可以在每次需要用的时候从 URL 中读取，而不是读出来直接放到 state 里。
3. **从 cookie、localStorage 中读取的值。** 通常来说，也是每次要用的时候直接去读取，而不是读出来后放到 state 里。

## useEffect：执行副作用

`useEffect` 可以让你在函数组件中执行副作用操作。副作用是指一段和当前执行结果无关的代码。比如说要修改函数外部的某个变量，要发起一个请求。

useEffect 可以接收两个参数，函数签名如下：

```js
useEffect(callback, dependencies);
```

第一个为要执行的函数 callback，第二个是可选的依赖项数组 dependencies。其中依赖项是可选的，**如果不指定，那么 callback 就会在每次函数组件执行完后都执行；如果指定了，那么只有依赖项中的值发生变化的时候，它才会执行。**

`useEffect` 给函数组件增加了操作副作用的能力。它跟 class 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API。

举个例子，某个组件用于显示一篇 Blog 文章，那么这个组件会接收一个参数来表示 Blog 的 ID。而当 ID 发生变化时，组件需要发起请求来获取文章内容并展示：

```js
import React, { useState, useEffect } from "react";

function BlogView({ id }) {
  // 设置一个本地 state 用于保存 blog 内容
  const [blogContent, setBlogContent] = useState(null);

  useEffect(() => {
    // useEffect 的 callback 要避免直接的 async 函数，需要封装一下
    const doAsync = async () => {
      // 当 id 发生变化时，将当前内容清楚以保持一致性
      setBlogContent(null);
      // 发起请求获取数据
      const res = await fetch(`/blog-content/${id}`);
      // 将获取的数据放入 state
      setBlogContent(await res.text());
    };
    doAsync();
  }, [id]); // 使用 id 作为依赖项，变化时则执行副作用

  // 如果没有 blogContent 则认为是在 loading 状态
  const isLoading = !blogContent;
  return <div>{isLoading ? "Loading..." : blogContent}</div>;
}
```

这样，我们就利用 `useEffect` 完成了一个简单的数据请求的需求。在这段代码中，我们把 ID 作为依赖项参数，这样就很自然地在 ID 发生变化时，利用 `useEffect` 执行副作用去获取数据。如果在之前的类组件中要完成类似的需求，我们就需要在 `componentDidUpdate` 这个方法里，自己去判断两次 ID 是否发生了变化。如果变了，才去发起请求。这样的话，逻辑上就不如 `useEffect` 来得直观。

useEffect 还有两个特殊的用法：**没有依赖项，以及依赖项作为空数组。** 我们来具体分析下。

1. **没有依赖项，则每次 render 后都会重新执行。** 例如：

```js
useEffect(() => {
  // 每次 render 完一定执行
  console.log("re-rendered");
});
```

2. **空数组作为依赖项，则只在首次执行时触发，对应到 Class 组件就是 componentDidMount。** 例如：

```js
useEffect(() => {
  // 组件首次渲染时执行，等价于 class 组件中的 componentDidMount
  console.log("did mount");
}, []);
```

除了这些机制之外，`useEffect` 还允许你返回一个函数，用于在组件销毁的时候做一些清理的操作。比如移除事件的监听。这个机制就几乎等价于类组件中的 `componentWillUnmount`。举个例子，在组件中，我们需要监听窗口的大小变化，以便做一些布局上的调整：

```js
// 设置一个 size 的 state 用于保存当前窗口尺寸
const [size, setSize] = useState({});
useEffect(() => {
  // 窗口大小变化事件处理函数
  const handler = () => {
    setSize(getSize());
  };
  // 监听 resize 事件
  window.addEventListener("resize", handler);

  // 返回一个 callback 在组件销毁时调用
  return () => {
    // 移除 resize 事件
    window.removeEventListener("resize", handler);
  };
}, []);
```

通过这样一个简单的机制，我们能够更好地管理副作用，从而确保组件和副作用的一致性。总结一下，useEffect 让我们能够在下面四种时机去执行一个回调函数产生副作用：

1. 每次 render 后执行：不提供第二个依赖项参数。比如 `useEffect(() => {})`。
2. 仅第一次 render 后执行：提供一个空数组作为依赖项。比如 `useEffect(() => {}, [])`。
3. 第一次以及依赖项发生变化后执行：提供依赖项数组。比如 `useEffect(() => {}, [deps])`。
4. 组件 unmount 后执行：返回一个回调函数。比如 `useEffect() => { return () => {} }, [])`。

### 理解 Hooks 的依赖

在定义依赖项时，我们需要注意以下三点：

1. 依赖项中定义的变量一定是会在回调函数中用到的，否则声明依赖项其实是没有意义的。
2. **依赖项一般是一个常量数组，而不是一个变量**。因为一般在创建 callback 的时候，你其实非常清楚其中要用到哪些依赖项了。
3. React 会使用**浅比较**来对比依赖项是否发生了变化，所以要特别注意数组或者对象类型。如果你是每次创建一个新对象，即使和之前的值是等价的，也会被认为是依赖项发生了变化。这是一个刚开始使用 Hooks 时很容易导致 Bug 的地方。例如下面的代码：

```js
function Sample() {
  // 这里在每次组件执行时创建了一个新数组
  const todos = [{ text: "Learn hooks." }];
  useEffect(() => {
    console.log("Todos changed.");
  }, [todos]);
}
```

代码的原意可能是在 todos 变化的时候去产生一些副作用，但是这里的 todos 变量是在函数内创建的，实际上每次都产生了一个新数组。所以在作为依赖项的时候进行引用的比较，实际上被认为是发生了变化的。

### 忘掉 Class 组件的生命周期

在类组件中，`componentDidMount`，`componentWillUnmount`，和 `componentDidUpdate` 这三个生命周期方法可以说是日常开发最常用的。业务逻辑通常要分散到不同的生命周期方法中，
比如说在下面的 Blog 文章的例子中，你需要同时在 `componentDidMount` 和 `componentDidUpdate` 中去获取数据。

```js
class BlogView extends React.Component {
  // ...
  componentDidMount() {
    // 组件第一次加载时去获取 Blog 数据
    fetchBlog(this.props.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      // 当 Blog 的 id 发生变化时去获取博客文章
      fetchBlog(this.props.id);
    }
  }
  // ...
}
```

可以看到，在 Class 组件中，需要在两个生命周期方法中去实现副作用，一个是首次加载，另外一个则是每次 UI 更新后。而在函数组件中不再有生命周期的概念，而是提供了 `useEffect` 这样一个 Hook 专门用来执行副作用，因此，只需下面的代码即可实现同样的功能：

```js
function BlogView({ id }) {
  useEffect(() => {
    // 当 id 变化时重新获取博客文章
    fetchBlog(id);
  }, [id]); // 定义了依赖项 id
}
```

可以看到，使用 Hooks 的方式更加简洁，在函数组件中你要思考的方式永远是：**当某个状态发生变化时，我要做什么**，而不再是在 Class 组件中的某个生命周期方法中我要做什么。

```js
useEffect(() => {
  // componentDidMount + componentDidUpdate
  console.log("这里基本等价于 componentDidMount + componentDidUpdate");
  return () => {
    // componentWillUnmount
    console.log("这里基本等价于 componentWillUnmount");
  };
}, [deps]);
```

1. `useEffect(callback)` 这个 Hook 接收的 callback，只有在依赖项变化时才被执行。而传统的 `componentDidUpdate` 则一定会执行。这样来看，Hook 的机制其实更具有语义化，因为过去在 `componentDidUpdate` 中，我们通常都需要手动判断某个状态是否发生变化，然后再执行特定的逻辑。
2. callback 返回的函数（一般用于清理工作）在下一次依赖项发生变化以及组件销毁之前执行，而传统的 `componentWillUnmount` 只在组件销毁时才会执行。

## Hooks 规则

Hooks 本身作为纯粹的 JavaScript 函数，不是通过某个特殊的 API 去创建的，而是直接定义一个函数。它需要在降低学习和使用成本的同时，还需要遵循一定的规则才能正常工作。因而 Hooks 的使用规则包括以下两个：

1. **只能在函数组件的顶级作用域使用；**
2. **只能在函数组件或者其他 Hooks 中使用。**

### Hooks 只能在函数组件的顶级作用域使用

所谓**顶层作用域**，就是**Hooks 不能在循环、条件判断或者嵌套函数内执行，而必须是在顶层**。同时 **Hooks 在组件的多次渲染之间，必须按顺序被执行**。因为在 React 组件内部，其实是维护了一个对应组件的固定 Hooks 执行列表的，以便在多次渲染之间保持 Hooks 的状态，并做对比

而下面的代码是错误的，因为在某些条件下 Hooks 是不会被执行到的：

```js
function MyComp() {
  const [count, setCount] = useState(0);
  if (count > 10) {
    // 错误：不能将 Hook 用在条件判断里
    useEffect(() => {
      // ...
    }, [count]);
  }

  // 这里可能提前返回组件渲染结果，后面就不能再用 Hooks 了
  if (count === 0) {
    return "No content";
  }

  // 错误：不能将 Hook 放在可能的 return 之后
  const [loading, setLoading] = useState(false);

  //...
  return <div>{count}</div>;
}
```

所以 Hooks 的这个规则可以总结为两点：**第一，所有 Hook 必须要被执行到。第二，必须按顺序执行。**

因为 Hooks 使用规则的存在，使得有时某些逻辑无法直观地实现。 为了解决这个问题，我们可以使用**容器模式**，实现按条件执行 Hooks.
具体做法就是**把条件判断的结果放到两个组件之中，确保真正 render UI 的组件收到的所有属性都是有值的。** 具体案例参考[容器模式](https://github.com/licop/react-hooks-demo/blob/main/src/10/UserInfoModal.js)

### Hooks 只能在函数组件或者其它 Hooks 中使用

Hooks 作为专门为函数组件设计的机制，使用的情况只有两种，**一种是在函数组件内，另外一种则是在自定义的 Hooks 里面。**

这个规则在函数组件和类组件同时存在的项目中，可能会造成一定的困扰，因为 Hooks 简洁、直观，我们可能都倾向于用 Hooks 来实现逻辑的重用，但是如果一定要在 Class 组件中使用，那应该如何做呢？其实有一个通用的机制，那就是**利用高阶组件的模式，将 Hooks 封装成高阶组件，从而让类组件使用。**

举个例子。我们已经定义了监听窗口大小变化的一个 Hook：useWindowSize。那么很容易就可以将其转换为高阶组件：

```js
import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export const withWindowSize = (Comp) => {
  return (props) => {
    const windowSize = useWindowSize();
    return <Comp windowSize={windowSize} {...props} />;
  };
};
```

```js
const getSize = () => {
  return window.innerWidth > 1000 ? "large" : "small";
};
const useWindowSize = () => {
  const [size, setSize] = useState(getSize());
  useEffect(() => {
    const handler = () => {
      setSize(getSize());
    };
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return size;
};
```

```js
import React from "react";
import { withWindowSize } from "./withWindowSize";

class MyComp {
  render() {
    const { windowSize } = this.props;
    // ...
  }
}

// 通过 withWindowSize 高阶组件给 MyComp 添加 windowSize 属性
export default withWindowSize(MyComp);
```

这样，通过 withWindowSize 这样一个高阶组件模式，你就可以把 useWindowSize 的结果作为属性，传递给需要使用窗口大小的类组件，这样就可以实现在 Class 组件中复用 Hooks 的逻辑了。

## useCallback：缓存回调函数

在 React 函数组件中，每一次 UI 的变化，都是通过重新执行整个函数来完成的，这和传统的 Class 组件有很大区别：**函数组件中并没有一个直接的方式在多次渲染之间维持一个状态。**

比如下面的代码中，我们在加号按钮上定义了一个事件处理函数，用来让计数器加 1。但是因为定义是在函数组件内部，因此在多次渲染之间，是无法重用 handleIncrement 这个函数的，而是每次都需要创建一个新的：

```js
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  // ...
  return <button onClick={handleIncrement}>+</button>;
}
```

你不妨思考下这个过程。每次组件状态发生变化的时候，函数组件实际上都会重新执行一遍。在每次执行的时候，实际上都会创建一个新的事件处理函数 handleIncrement。这个事件处理函数中呢，包含了 count 这个变量的闭包，以确保每次能够得到正确的结果。

这也意味着，即使 count 没有发生变化，但是函数组件因为其它状态发生变化而重新渲染时，这种写法也会每次创建一个新的函数。创建一个新的事件处理函数，虽然不影响结果的正确性，但其实是没必要的。因为这样做不仅增加了系统的开销，更重要的是：**每次创建新函数的方式会让接收事件处理函数的组件，需要重新渲染。**

比如这个例子中的 button 组件，接收了 handleIncrement ，并作为一个属性。如果每次都是一个新的，那么这个 React 就会认为这个组件的 props 发生了变化，从而必须重新渲染。因此，我们需要做到的是：**只有当 count 发生变化时，我们才需要重新定一个回调函数。**而这正是 useCallback 这个 Hook 的作用。

```js
useCallback(fn, deps);
```

这里 fn 是定义的回调函数，deps 是依赖的变量数组。**只有当某个依赖变量发生变化时，才会重新声明 fn 这个回调函数。** 那么对于上面的例子，我们可以把 handleIncrement 这个事件处理函数通过 useCallback 来进行性能的优化：

```js
import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(
    () => setCount(count + 1),
    [count] // 只有当 count 发生变化时，才会重新创建回调函数
  );
  // ...
  return <button onClick={handleIncrement}>+</button>;
}
```

在这里，我们把 count 这个 state ，作为一个依赖传递给 useCallback。这样，只有 count 发生变化的时候，才需要重新创建一个回调函数，这样就保证了组件不会创建重复的回调函数。**而接收这个回调函数作为属性的组件，也不会频繁地需要重新渲染。**

除了 useCallback，useMemo 也是为了缓存而设计的。只不过，useCallback 缓存的是一个函数，而 useMemo 缓存的是计算的结果。

## useMemo：缓存计算的结果

```js
useMemo(fn, deps);
```

这里的 fn 是产生所需数据的一个计算函数。通常来说，fn 会使用 deps 中声明的一些变量来生成一个结果，用来渲染出最终的 UI。

这个场景应该很容易理解：**如果某个数据是通过其它数据计算得到的，那么只有当用到的数据，也就是依赖的数据发生变化的时候，才应该需要重新计算。**

举个例子，对于一个显示用户信息的列表，现在需要对用户名进行搜索，且 UI 上需要根据搜索关键字显示过滤后的用户，那么这样一个功能需要有两个状态：

- 用户列表数据本身：来自某个请求。
- 搜索关键字：用户在搜索框输入的数据。

无论是两个数据中的哪一个发生变化，都需要过滤用户列表以获得需要展示的数据。那么如果不使用 `useMemo` 的话，就需要用这样的代码实现：

```js
import React, { useState, useEffect } from "react";

export default function SearchUserList() {
  const [users, setUsers] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      // 组件首次加载时发请求获取用户数据
      const res = await fetch("https://reqres.in/api/users/");
      setUsers(await res.json());
    };
    doFetch();
  }, []);
  let usersToShow = null;

  if (users) {
    // 无论组件为何刷新，这里一定会对数组做一次过滤的操作
    usersToShow = users.data.filter((user) =>
      user.first_name.includes(searchKey)
    );
  }

  return (
    <div>
      <input
        type="text"
        value={searchKey}
        onChange={(evt) => setSearchKey(evt.target.value)}
      />
      <ul>
        {usersToShow &&
          usersToShow.length > 0 &&
          usersToShow.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}
```

在这个例子中，无论组件为何要进行一次重新渲染，实际上都需要进行一次过滤的操作。但其实你只需要在 users 或者 searchKey 这两个状态中的某一个发生变化时，重新计算获得需要展示的数据就行了。那么，这个时候，我们就可以用 `useMemo` 这个 Hook 来实现这个逻辑，缓存计算的结果：

```js
//...
// 使用 userMemo 缓存计算的结果
const usersToShow = useMemo(() => {
    if (!users) return null;
    return users.data.filter((user) => {
      return user.first_name.includes(searchKey));
    }
  }, [users, searchKey]);
//...
```

可以看到，通过 useMemo 这个 Hook，可以避免在用到的数据没发生变化时进行的重复计算。虽然例子展示的是一个很简单的场景，但如果是一个复杂的计算，那么对于提升性能会有很大的帮助。这也是 userMemo 的一大好处：**避免重复计算。**

除了避免重复计算之外，useMemo 还有一个很重要的好处：**避免子组件的重复渲染。** 比如在例子中的 usersToShow 这个变量，如果每次都需要重新计算来得到，那么对于 UserList 这个组件而言，就会每次都需要刷新，因为它将 usersToShow 作为了一个属性。而一旦能够缓存上次的结果，就和 useCallback 的场景一样，可以避免很多不必要的组件刷新。

这个时候，如果我们结合 useMemo 和 useCallback 这两个 Hooks 一起看，会发现一个有趣的特性，那就是 **useCallback 的功能其实是可以用 useMemo 来实现的**。比如下面的代码就是利用 useMemo 实现了 useCallback 的功能:

```js
const myEventHandler = useMemo(() => {
  // 返回一个函数作为缓存结果
  return () => {
    // 在这里进行事件处理
  };
}, [dep1, dep2]);
```

理解了这一点，相信你一下子会对这两个 Hooks 的机制有更进一步的认识，也就不用死记硬背两个 API 都是干嘛的了，因为从本质上来说，它们只是做了同一件事情：**建立了一个绑定某个结果到依赖数据的关系。只有当依赖变了，这个结果才需要被重新得到。**

## useRef：在多次渲染之间共享数据

函数组件虽然非常直观，简化了思考 UI 实现的逻辑，但是比起 Class 组件，还缺少了一个很重要的能力：**在多次渲染之间共享数据。**

在类组件中，我们可以定义类的成员变量，以便能在对象上通过成员属性去保存一些数据。但是在函数组件中，是没有这样一个空间去保存数据的。因此，React 让 useRef 这样一个 Hook 来提供这样的功能。

```js
const myRefContainer = useRef(initialValue);
```

**我们可以把 useRef 看作是在函数组件之外创建的一个容器空间。在这个容器上，我们可以通过唯一的 current 属设置一个值，从而在函数组件的多次渲染之间共享这个值。**

你可能会有疑问，useRef 的这个功能具体有什么用呢？

我们可以看一个例子。假设你要去做一个计时器组件，这个组件有开始和暂停两个功能。很显然，你需要用 `window.setInterval` 来提供计时功能；而为了能够暂停，你就需要在某个地方保存这个 `window.setInterval` 返回的计数器的引用，确保在点击暂停按钮的同时，也能用 `window.clearInterval`停止计时器。那么，这个保存计数器引用的最合适的地方，就是`useRef`，因为它可以存储跨渲染的数据。代码如下：

```js
import React, { useState, useCallback, useRef } from "react";

export default function Timer() {
  // 定义 time state 用于保存计时的累积时间
  const [time, setTime] = useState(0);

  // 定义 timer 这样一个容器用于在跨组件渲染之间保存一个变量
  const timer = useRef(null);

  // 开始计时的事件处理函数
  const handleStart = useCallback(() => {
    // 使用 current 属性设置 ref 的值
    timer.current = window.setInterval(() => {
      setTime((time) => time + 1);
    }, 100);
  }, []);

  // 暂停计时的事件处理函数
  const handlePause = useCallback(() => {
    // 使用 clearInterval 来停止计时
    window.clearInterval(timer.current);
    timer.current = null;
  }, []);

  return (
    <div>
      {time / 10} seconds.
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
```

这里可以看到，我们使用了 useRef 来创建了一个保存 window.setInterval 返回句柄的空间，从而能够在用户点击暂停按钮时清除定时器，达到暂停计时的目的。

同时你也可以看到，使用 useRef 保存的数据一般是和 UI 的渲染无关的，**因此当 ref 的值发生变化时，是不会触发组件的重新渲染的，这也是 useRef 区别于 useState 的地方。**

除了存储跨渲染的数据之外，useRef 还有一个重要的功能，**就是保存某个 DOM 节点的引用**。我们知道，在 React 中，几乎不需要关心真实的 DOM 节点是如何渲染和修改的。但是在某些场景中，我们必须要获得真实 DOM 节点的引用，所以结合 React 的 ref 属性和 useRef 这个 Hook，我们就可以获得真实的 DOM 节点，并对这个节点进行操作。

比如说，你需要在点击某个按钮时让某个输入框获得焦点，可以通过下面的代码来实现：

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // current 属性指向了真实的 input 这个 DOM 节点，从而可以调用 focus 方法
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

可以看到 ref 这个属性提供了获得 DOM 节点的能力，并利用 `useRef` 保存了这个节点的应用。这样的话，一旦 input 节点被渲染到界面上，那我们通过 inputEl.current 就能访问到真实的 DOM 节点的实例了。

## useContext：定义全局状态

React 提供了 Context 这样一个机制，能够让所有在某个组件开始的组件树上创建一个 Context。这样这个组件树上的所有组件，就都能访问和修改这个 Context 了。那么在函数组件里，我们就可以使用 `useContext` 这样一个 Hook 来管理 Context。

```js
const value = useContext(MyContext);
```

正如刚才提到的，一个 Context 是从某个组件为根组件的组件树上可用的，所以我们需要有 API 能够创建一个 Context，这就是 `React.createContext` API，如下:

```js
const MyContext = React.createContext(initialValue);
```

这里的 MyContext 具有一个 `Provider` 的属性，一般是作为组件树的根组件。这里我仍然以 React 官方文档的例子来讲解，即：一个主题的切换机制。代码如下：

```js
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
// 创建一个 Theme 的 Context

const ThemeContext = React.createContext(themes.light);
function App() {
  // 整个应用使用 ThemeContext.Provider 作为根组件
  return (
    // 使用 themes.dark 作为当前 Context
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 在 Toolbar 组件中使用一个会使用 Theme 的 Button
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// 在 Theme Button 中使用 useContext 来获取当前的主题
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme.background,
        color: theme.foreground,
      }}
    >
      I am styled by theme context!
    </button>
  );
}
```

看到这里你也许会有点好奇，Context 看上去就是一个全局的数据，为什么要设计这样一个复杂的机制，而不是直接用一个全局的变量去保存数据呢？

答案其实很简单，**就是为了能够进行数据的绑定。**当这个 Context 的数据发生变化时，使用这个数据的组件就能够自动刷新。但如果没有 Context，而是使用一个简单的全局变量，就很难去实现了。

不过刚才我们看到的其实是一个静态的使用 Context 的例子，直接用了 thems.dark 作为 Context 的值。那么如何让它变得动态呢？

比如说常见的切换黑暗或者明亮模式的按钮，用来切换整个页面的主题。事实上，动态 Context 并不需要我们学习任何新的 API，而是利用 React 本身的机制：

```js
// ...

function App() {
  // 使用 state 来保存 theme 从而可以动态修改
  const [theme, setTheme] = useState("light");

  // 切换 theme 的回调函数
  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }, []);

  return (
    // 使用 theme state 作为当前 Context
    <ThemeContext.Provider value={themes[theme]}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

在这段代码中，我们使用 state 来保存 theme，从而达到可以动态调整的目的。

可以看到，Context 提供了一个方便在多个组件之间共享数据的机制。不过需要注意的是，它的灵活性也是一柄双刃剑。你或许已经发现，Context 相当于提供了一个定义 React 世界中全局变量的机制，而全局变量则意味着两点：

1. 会让调试变得困难，因为你很难跟踪某个 Context 的变化究竟是如何产生的。
2. 让组件的复用变得困难，因为一个组件如果使用了某个 Context，它就必须确保被用到的地方一定有这个 Context 的 Provider 在其父组件的路径上。

所以在 React 的开发中，除了像 Theme、Language 等一目了然的需要全局设置的变量外，我们很少会使用 Context 来做太多数据的共享。需要再三强调的是，**Context 更多的是提供了一个强大的机制，让 React 应用具备定义全局的响应式数据的能力。**

此外，很多状态管理框架，比如 Redux，正是利用了 Context 的机制来提供一种更加可控的组件之间的状态管理机制。因此，理解 Context 的机制，也可以让我们更好地去理解 Redux 这样的框架实现的原理。

## 更多参考

- [react hook 中文文档](https://zh-hans.reactjs.org/docs/hooks-intro.html)
- [useEffect 完整指南 by Dan](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
- [React Hooks 实现和由来以及解决的问题](https://mp.weixin.qq.com/s/Vl5LhpkTocNl9LYRIYBwFg)
