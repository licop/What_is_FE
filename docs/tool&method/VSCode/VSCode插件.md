# VSCode 插件

## 快速代码插件 ES7+ React/Redux/React-Native snippets

### 安装

[插件安装](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

### 使用

- rcc：类组件

```js
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}
```

- rafce： 插入箭头函数组件

```js
import React from "react";

const Home = () => {
  return <div>Home</div>;
};

export default Home;
```

- clg: 打印

```js
console.log(first);
```

- hoc: 高阶组件

```js
import React from "react";
import PropTypes from "prop-types";

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};
```

- [更多缩写命令](https://blog.csdn.net/nickroprak/article/details/122595766)
- [官方命令文档](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
