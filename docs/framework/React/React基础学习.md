# React 基础学习

## React 介绍

![](/framework/react_base_1.png)

React 是一个用于构建用户界面的 JavaScript 库，它只负责应用的视图层，帮助开发人员构建快速且交互式的 web 应用程序。

React 使用组件的方式构建用户界面。

## JSX 语法

在 React 中使用 JSX 语法描述用户界面，它是一种 JavaScript 语法扩展。

在 React 代码执行之前，Babel 会将 JSX 语法转换为标准的 JavaScript API。

JSX 语法就是一种语法糖，让开发人员使用更加舒服的代码构建用户界面。

### 在 JSX 中使用表达式

在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。

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
  boolean && <div>Hello React</div>;
}
```

### 循环

```js
const persons = [
  {
    id: 1,
    name: "张三",
    age: 20,
  },
  {
    id: 2,
    name: "李四",
    age: 15,
  },
  {
    id: 3,
    name: "王五",
    age: 22,
  },
];
```

```js
<ul>
  {persons.map((person) => (
    // key属性的值是唯一的，可以帮助我们识别那些元素修改和删除了，减少dom操作，提高domm操作的性能
    <li key={person.id}>
      {" "}
      {person.name} {person.age}{" "}
    </li>
  ))}
</ul>
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

React 是基于组件的方式进行用户界面开发的. 组件可以理解为对页面中某一块区域的封装。

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

#### props 传递数据

在调用组件时可以向组件内部传递数据，在组件中可以通过 props 对象获取外部传递进来的数据。

```js
<Person name="乔治" age="20"/>
<Person name="玛丽" age="10"/>
```

```js
// 类组件
class Person extends Component {
  render() {
    return (
      <div>
        <h3>姓名：{this.props.name}</h3>
        <h4>年龄：{this.props.age}</h4>
      </div>
    );
  }
}
```

```js
// 函数组件
const Person = (props) => {
  return (
    <div>
      <h3>姓名：{props.name}</h3>
      <h4>年龄：{props.age}</h4>
    </div>
  );
};
```

**注意：**

1. props 对象中存储的数据是只读的，不能在组件内部被修改。
2. 当 props 数据源中的数据被修改后，组件中的接收到的 props 数据会被同步更新。( 数据驱动 DOM )

#### 设置 props 默认值

```js
class App extends Component {
  static defaultProps = {};
}
```

```js
function ThemedButton(props) {}
ThemedButton.defaultProps = {
  theme: "secondary",
  label: "Button Text",
};
```

#### children

通过 props.children 属性可以获取到在调用组件时填充到组件标签内部的内容。

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

### 类组件状态 state

如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。

#### 定义组件状态

类组件除了能够从外部 (props) 接收状态数据以外还可以拥有自己的状态 (state)，此状态在组件内部可以被更新，状态更新 DOM 更新。

组件内部的状态数据被存储在组件类中的 state 属性中，state 属性值为对象类型，属性名称固定不可更改。

```js
class App extends Component {
  constructor() {
    super();
    this.state = {
      person: { name: "张三", age: 20 },
    };
  }
  render() {
    return (
      <div>
        {this.state.person.name}
        {this.state.person.age}
      </div>
    );
  }
}
```

#### 更改组件状态

state 状态对象中的数据不可直接更改，如果直接更改 DOM 不会被更新，要更改 state 状态数据需要使用 setState 方法。

```js
class App extends Component {
  constructor() {
    this.state = {
      person: { name: "张三", age: 20 },
    };
    this.changePerson = this.changePerson.bind(this);
  }
  changePerson() {
    this.setState({
      person: {
        name: "李四",
        age: 15,
      },
    });
  }
  render() {
    return (
      <div>
        {this.state.person.name}
        {this.state.person.age}
        <button onClick={this.changePerson}>按钮</button>
      </div>
    );
  }
}
```

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

### Context

通过 Context 可以跨层级传递数据

![](/framework/react_base_6.png)

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
