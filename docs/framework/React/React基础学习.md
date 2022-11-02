# React 基础学习

## React 介绍

![](/framework/react_base_1.png)

React 是一个用于构建用户界面的 JavaScript 库，它只负责应用的视图层，帮助开发人员构建快速且交互式的 web 应用程序。

React 是**单向数据流**（也叫单向绑定）的思想，使得组件模块化，易于快速开发。React 使用组件的方式构建用户界面。

## JSX 语法

在 React 中使用 JSX 语法描述用户界面，它是一种 JavaScript 语法扩展。

在 React 代码执行之前，Babel 会将 JSX 语法转换为标准的 JavaScript API。

JSX 语法就是`createElement`函数的语法糖，浏览器本身不支持 JSX，所以在应用发布上线前，JSX 源码需要工具编译成由若干 `createElement` 函数组成的 JS 代码，然后才能在浏览器中正常执行。让开发人员使用更加舒服的代码构建用户界面。

### 在 JSX 中使用表达式

在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。JSX 可以直接利用 Javascript 语句，JS 表达式能做的，JSX 都能做，不需要开发者再去学习一套新的 DSL（Domain-Specific Language，领域特定语言）。

我们可以得到这样的结论：**JSX 是前端视图领域“最 JS”的声明式语法，它为 React 的推广和流行起了至关重要的作用**。

```js
const user = {
  firstName: "Harper",
  lastName: "Perez",
};
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const element = <h1>Hello, {formatName(user)}!</h1>;
```

JSX 本身其实也是一种表达式，将它赋值给变量，当作参数传入，作为返回值都可以。

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### 属性

如果属性值为字符串类型，需要加引号，属性名称推荐采用驼峰式命名法。

```js
const element = <div greeting="hello"></div>;
```

如果属性值为 JavaScript 表达式，属性值外面加大括号。

```js
const element = <img src={user.avatarUrl} />;
// 注意大括号外面不能加引号，JSX 会将引号当中的内容识别为字符串而不是表达式
```

### JSX 单标记必须闭合

如果 JSX 是单标记，必须闭合，否则报错。

```js
const element = <img src={user.avatarUrl} />;
const element = <input type="text" />;
```

### className

为 JSX 标记添加类名需要使用 className，而不是 class。

```js
const element = <img src={user.avatarUrl} className="rounded" />;
```

### JSX 自动展开数组

```js
const ary = [<p>哈哈</p>, <p>呵呵</p>, <p>嘿嘿</p>];
const element = <div>{ary}</div>;
// 解析后
/*
	<div>
		<p>哈哈</p>
		<p>呵呵</p>
		<p>嘿嘿</p>
	</div>
*/
```

### 三元运算

```js
{
  boolean ? <div>Hello React</div> : null;
}
{
  // 如果boolean为true，则&&右边的元素被渲染
  boolean && <div>Hello React</div>;
}
```

### 阻止组件渲染

`render`方法直接返回`null`, 而不进行任何渲染，可以直接隐藏组件

```js
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warn</div>;
}
```

### 事件

React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

```js
/* 第一个参数即是事件对象 不需传递 */
<button onClick={this.eventHandler}>按钮</button>
/* 需要传递事件对象 */
<button onClick={e => this.eventHandler('arg',e)}>按钮</button>
/* 最后一个参数即是事件对象 不需传递 */
<button onClick={this.eventHandler.bind(null, 'arg')}>按钮</button>
```

```js
constructor () {
  this.eventHandler = this.eventHandler.bind(this)
}
eventHandler () {}
<button onClick={this.eventHandler}>按钮</button>
```

### 样式

#### 行内样式

```js
class App extends Component {
  render() {
    const style = { width: 200, height: 200, backgroundColor: "red" };
    return <div style={style}></div>;
  }
}
```

#### 外链样式

```js
// Button.js
import styles from "./Button.module.css";
class Button extends Component {
  render() {
    return <button className={styles.error}>Error Button</button>;
  }
}
```

#### 全局样式

```js
import "./styles.css";
```

### ref 属性

通过 `ref` 属性可以获得组件的实例对象

#### createRef

```js
class Input extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => console.log(this.inputRef.current)}>
          {" "}
          button{" "}
        </button>
      </div>
    );
  }
}
```

#### 函数参数

```js
class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={(input) => (this.input = input)} />
        <button onClick={() => console.log(this.input)}>button</button>
      </div>
    );
  }
}
```

#### ref 字符串

不推荐使用，在严格模式下报错。

```js
class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="username" />
        <button onClick={() => console.log(this.refs.username)}>button</button>
      </div>
    );
  }
}
```

#### 获取组件实例

点击按钮让 input 文本框获取焦点。

input 文本框以及让文本框获取焦点的方法定义在 Input 组件中，在 App 组件中引入 Input 组件，按钮定义在 App 组件中。

```js
// Input.js
class Input extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.focusInput = this.focusInput.bind(this);
  }
  focusInput() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
```

```js
// App.js
class App extends Component {
  constructor() {
    super()
    this.InputComponentRef = React.createRef()
  }
  render() {
    return (
      <div className="App">
        <Input ref={this.InputComponentRef} />
        <button onClick={() => this.InputComponentRef.current.focusInput()}>button</button>
      </div>
    )
}
```

![](/framework/react_base_5.gif)

### JSX 表示对象

Babel 会把 JSX 转译成一个名为 `React.createElement()` 函数调用。

```js
// 以下两种示例代码完全等效：
const element = <h1 className="greeting">Hello, world!</h1>;

const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

`React.createElement()` 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

```js
// 注意：这是简化过的结构
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};
```

这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。

## “根”Dom 节点

假设你的 HTML 文件某处有一个 `<div>`：

```html
<div id="root"></div>
```

我们将其称为**根 DOM 节点**，因为该节点内的所有内容都将由 React DOM 管理。

想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 `ReactDOM.createRoot()`：

```js
const root = ReactDom.createRoot(document.getElementById('root'))
const element = <h1>hello world<h1>
root.render(element)
```

## 组件

### 什么是组件

React 是基于组件的方式进行用户界面开发的. 组件可以理解为对**视图及其与视图相关的逻辑、数据、交互的封装**，也可以理解为对页面中某一块区域的封装。

组件允许你将 UI 拆分成独立可复用的代码片段，并对每个片段进行独立构思。

从概念上将类似于 JavaScript 函数，它接受任意的入参（即“props”）, 并返回用于描述页面展示内容的 React 元素。

![](/framework/react_base_2.png)

### 创建组件

#### 创建类组件

```js
import React, { Component } from "react";
class App extends Component {
  render() {
    return <div>Hello, 我是类组件</div>;
  }
}
```

#### 创建函数组件

```js
const Person = () => {
  return <div>Hello, 我是函数型组件</div>;
};
```

**注意事项**

1. 组件名称首字母必须大写，用以区分组件和普通标签。
2. jsx 语法外层必须有一个根元素

### 组件 props

自定义 React 组件接受一组输入参数，用于改变组件运行时的行为，这组参数就是 props。在调用组件时可以向组件内部传递数据，在组件中可以通过 props 对象获取外部传递进来的数据。

#### props 传递数据

在调用组件时可以向组件内部传递数据，在组件中可以通过 props 对象获取外部传递进来的数据。

在声明函数组件时，函数的第一个参数就是 props。以下两种写法都很常见：

- 一个是在组件内部读取 props 对象的属性；
- 另一个是通过 ES6 的**解构赋值语法（Destructuring Assignment）**展开函数参数，直接在组件内部读取单个 prop 变量。

两种写法本质相同的：

```js
// 1
function MyComponent(props) {
  return (
    <ul>
      <li>{props.prop1}</li>
      <li>{props.prop2}</li>
    </ul>
  );
}

// 2
function MyComponent({ prop1, prop2 }) {
  return (
    <ul>
      <li>{prop1}</li>
      <li>{prop2}</li>
    </ul>
  );
}
```

第二种写法有些很方便的功能，比如为 props 设置默认值：

```js
function MyComponent({ prop1, prop2, optionalProp = 'default' }) {
```

以及利用 ES2018 的 Rest Properties 语法，将解构剩余属性赋值给一个变量，便于透传给子元素：

```js
function MyComponent({ prop1, prop2, ...restProps }) {
  return (
    <ul {...restProps}>
      <li>{prop1}</li>
      <li>{prop2}</li>
    </ul>
  );
}
```

类组件的 props 可以通过 this.props 读取：

```js
class MyLegacyClassComponent extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.prop1}</li>
        <li>{this.props.prop2}</li>
      </ul>
    );
  }
}
```

**注意：**

1. 无论是哪种写法，props 都是**不可变的**，不能在组件内改写从外面传进来的 props。

2. 当 props 数据源中的数据被修改后，组件中的接收到的 props 数据会被同步更新。( 数据驱动 DOM )

以及两个形式上像 props，但并不是 props 的属性：

- 形成列表的子元素的 key
- 引用 DOM 元素的 ref

key 和 ref 的特殊之处还在于，当子元素是自定义组件时，在子组件内部是不能读取传给它的 key 或 ref 值的，如果尝试读取，React 则会在控制台提示，也就是 Warning: KanbanCard: key is not a prop. Trying to access it will result inundefined being returned；如果确实需要在子组件中访问 key 或 ref 的值，就得用另一个额外的 prop 传进来。

#### children

通过 `props.children` 属性可以获取到在调用组件时填充到组件标签内部的内容。

```js
<Person>组件内部的内容</Person>
```

```js
const Person = (props) => {
  return <div>{props.children}</div>;
};
```

#### 单向数据流

1.  在 React 中, 关于数据流动有一条原则, 就是单向数据流动, 自顶向下, 从父组件到子组件.

2.  单向数据流特性要求我们共享数据要放置在上层组件中.

3.  子组件通过调用父组件传递过来的方法更改数据.

4.  当数据发生更改时, React 会重新渲染组件树.

5.  单向数据流使组件之间的数据流动变得可预测. 使得定位程序错误变得简单.

![](/framework/react_base_3.png)

### 状态 state

在 props 之外，组件也可以拥有自己的数据。对于一个函数而言，“自己的数据”一般是指函数内声明的变量。

如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。

而对一个函数组件来说，因为每次渲染函数体都会重新执行，函数体内变量也会被重新声明，如果需要组件在它的生命周期期间拥有一个“稳定存在”的数据，那就需要为组件引入一个专有的概念，即 state。在函数组件中使用 state，需要调用 `useState` / `useReducer` Hooks。

```js
function MyComponent() {
  const [state1, setState1] = useState("文本");
  const [state2, setState2] = useState(123);
  const handleClick = () => {
    setState1("更新文本");
    setState2(456);
  };
  return (
    <ul>
      <li>{state1}</li>
      <li>{state2}</li>
      <li>
        <button onClick={handleClick}>更新state</button>
      </li>
    </ul>
  );
}
```

在类组件内可以通过 this.state 读取 state，通过 this.setState 修改 state，唯一例外是在类组件构造函数里，可以通过赋值 this.state 的方式设置初始值，与 Hooks 的 state 不同，类组件的 state 总是以对象形式存在：

```js
class MyLegacyClassComponent extends React.Component {
  constructor() {
    this.state = { state1: "文本", state2: 123 };
  }

  handleClick = () => {
    this.setState({ state1: "更新文本", state2: 456 });
  };

  render() {
    return (
      <ul>
        <li>{this.state.state1}</li>
        <li>{this.state.state2}</li>
        <li>
          <button onClick={this.handleClick}>更新state</button>
        </li>
      </ul>
    );
  }
}
```

不过需要反复强调的是，state 与 props 一样，也是**不可变的**。需要修改 state 时，不能直接给 state 变量赋值，
而是必须调用 state 更新函数，即 `setXxx / dispatch` 或 `this.setState` 。

当组件的 state 发生改变时，组件将重新渲染。那什么才算是改变呢？从底层实现来看，React 框架是用[Object.is()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 来判断两个值是否不同的。
尤其注意，当新旧值都是对象、数组、函数时，**判断依据是它们的值引用是否不同**。

对同一个对象属性的修改不会改变对象的值引用，对同一个数组成员的修改也不会改变数组的值引用，在 React 中都不认为是变化。
所以在更新这类 state 时，**需要新建对象、数组**：

```js
function MyComponent() {
  const [obj, setObj] = useState({ a: "文本", b: true });
  const [arr, setArr] = useState([1, 2, 3]);
  const handleClick = () => {
    setObj({ ...obj, a: "更新文本" }); // ...对象展开语法
    setArr([...arr, 4, 5, 6]); // ...数组展开语法
  };
  return (
    <ul>
      <li>{obj.a}</li>
      <li>{arr.join(",")}</li>
      <li>
        <button onClick={handleClick}>更新state</button>
      </li>
    </ul>
  );
}
```

再来看看 state 的数据流向，当读取和更改 state 都发生在同一组件中时，state 的流动仅限于当前组件之内。

如果希望由子组件或后代组件来更改 state，需要将对应的 state 更新函数包在另一个函数，比如事件处理函数中，然后将函数以 `props` 或 `context` 的方式传给子组件或后代组件，由它们来决定调用的时机和参数。
当这个函数被调用，state 被更新，当前组件则会重新传染。

如下图所示：
![](/framework/react_base_7.png)

#### 双向数据绑定

双向数据绑定是指，组件类中更新了状态，DOM 状态同步更新，DOM 更改了状态，组件类中同步更新。组件 <=> 视图。

要实现双向数据绑定需要用到表单元素和 state 状态对象。

```js
class App extends Component {
  constructor() {
    this.state = {
      name: "张三",
    };
    this.nameChanged = this.nameChanged.bind(this);
  }
  nameChanged(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <Person name={this.state.name} changed={this.nameChanged} />
      </div>
    );
  }
}
```

```js
const Person = (props) => {
  return <input type="text" value={props.name} onChange={props.changed} />;
};
```

#### State 的更新可能是异步的

出于性能考虑，React 可能会把多个 `setState()` 调用合并成一个调用。

因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

例如，此代码可能会无法更新计数器：

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 `setState()` 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));
```

### Context

React 很早就引入了 context 这个概念，它的 API 也经历过新老版本的更迭，用于组件跨越多个组件层次结构，向后代组件传递和共享“全局”数据。

```js
// userContext.js
import React from "react";

const userContext = React.createContext("default value");
const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export { UserProvider, UserConsumer };
```

```js
// App.js
import { UserProvider } from "./userContext";
class App extends Component {
  render() {
    return (
      <UserProvider value="Hello React Context">
        <A />
      </UserProvider>
    );
  }
}
```

```js
// C.js
import { UserConsumer } from "./userContext";

export class C extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(username) => {
            return <div>{username}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}
```

context 的另一种用法

```js
// userContext.js
export default userContext;
```

```js
// C.js
import userContext from "./userContext";

export class C extends Component {
  static contextType = userContext;
  render() {
    return <div>{this.context}</div>;
  }
}
```

`Context.Provider`的 value 值也可以传一个对象进去，但要注意写法，避免在组件重新渲染时反复创建新的对象，比如利用`state`和 `useMemo`

```js
// 不要这样写
function MyComponent() {
  const [state1, setState1] = useState("文本");
  // ...
  return (
    <MyContext.Provider value={{ key1: state1 }}>
      <MyChildComponent />
    </MyContext.Provider>
  );
}

// 可以利用state
function MyComponent() {
  const [obj, setObj] = useState({ key1: "文本" });
  // ...
  return (
    <MyContext.Provider value={obj}>
      <MyChildComponent />
    </MyContext.Provider>
  );
}

// 也可以利用useMemo
function MyComponent() {
  const [state1, setState1] = useState("文本");
  const obj = useMemo(() => ({ key1: state1 }), [state1]);
  // ...
  return (
    <MyContext.Provider value={obj}>
      <MyChildComponent />
    </MyContext.Provider>
  );
}
```

从数据流的角度看，**context 的数据流向也是单向的，只能从声明了 Context.Provider 的当前组件传递给它的子组件树**，即子组件和后代组件。
而不能向父组件或祖先组件传递，也不能向当前子组件树之外的其他分支组件树传递。正如下图所示：

![](/framework/react_base_8.png)

### 类组件生命周期函数

![](/framework/react_base_4.jpg)

在组件完成更新之前需要做某种逻辑或者计算，就需要用到快照

```js
componentDidUpdate(prevProps, prevState, snapshot) {}
```

`getSnapshotBeforeUpdate` 方法会在组件完成更新之前执行，用于执行某种逻辑或计算，返回值可以在 `componentDidUpdate` 方法中的第三个参数中获取，就是说在组件更新之后可以拿到这个值再去做其他事情。

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  return 'snapshot'
}
```

## 列表

可以通过`map`方法将数组中的每个元素变成`<li>`标签

```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
```

JSX 允许大括号里嵌入任何表达式，所以还可以写成下面这种形式

```js
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}
```

## key

key 帮助 React 识别哪些元素改变了，比如被添加或删除，可以提高 React 渲染 Dom 的效率。因此你应当给数组中的每一个元素赋予一个确定的标识。

一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key：

```js
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

**注意事项**

- 如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。
- Key 应该具有稳定，可预测，以及列表内唯一的特质。不稳定的 key（比如通过 Math.random() 生成的）会导致许多组件实例和 DOM 节点被不必要地重新创建，这可能导致性能下降和子组件中的状态丢失

### 用 key 提取组件

元素的 key 只有放在就近的数组上下文中才有意义。

比方说，如果你提取出一个 `ListItem` 组件，你应该把 `key` 保留在数组中的这个 `<ListItem />` 元素上，而不是放在 `ListItem` 组件中的 `<li>` 元素上。

一个好的经验法则是：在 `map()` 方法中的元素需要设置 key 属性。

```js
function ListItem(props) {
  // 正确！这里不需要指定 key：
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // 正确！key 应该在数组的上下文中被指定
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}
```

### key 值在兄弟节点之间必须唯一

数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值：

```js
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];
```

key 会传递信息给 React ，但不会传递给你的组件。如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值：

```js
// Post 组件可以读出 props.id，但是不能读出 props.key
const content = posts.map((post) => (
  <Post key={post.id} id={post.id} title={post.title} />
));
```

## 表单

### 受控表单

表单控件中的值由组件的 state 对象来管理，state 对象中存储的值和表单控件中的值时同步状态的

```js
class App extends Component {
  constructor() {
    this.state = { username: "" };
    this.nameChanged = this.nameChanged.bind(this);
  }

  nameChanged(e) {
    this.setState({ username: e.target.value });
  }
  render() {
    return (
      <form>
        <p>{this.state.username}</p>
        <input
          type="text"
          value={this.state.username}
          onChange={this.nameChanged}
        />
      </form>
    );
  }
}
```

### 非受控表单

表单元素的值由 DOM 元素本身管理。

```js
class App extends Component {
  constructor () {
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e) {
    console.log(this.username.value)
    e.preventDefault();
  }
  render(
    <form onSubmit={this.onSubmit}>
      <input type="text" ref={username => this.username = username}/>
    </form>
  )
}
```

大多数情况下，你应该使用受控组件
。
