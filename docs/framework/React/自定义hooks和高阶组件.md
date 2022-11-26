# 自定义 Hooks 和高阶组件

随着项目组件的逻辑越来越复杂，组件的代码往往会出现以下等问题：

- 承担过多职责
- 业务逻辑和交互逻辑糅杂在一起
- 从其他组件中复制粘贴代码

具体表现为：

- 传递的 props 个数过多；
- 使用 useState 的个数过多；
- 单个 useEffect 的副作用回调函数行数过多；
  ……

这些问题大都可以通过**抽象**的方式改进,可以通过设计开发自定义 Hooks 和高阶组件来实现抽象和复用代码。

## 自定义 Hooks

在开发 React 函数组件时，我们会大量使用 Hooks，包括 `useState`、`useEffect` 等。当这些 Hooks 的组合满足一定业务逻辑或者是交互逻辑时，可以根据需要将它们提取成自定义 Hooks。

当我们想在两个函数之间共享逻辑时，我们会把它提取到第三个函数中。而组件和 Hook 都是函数，所以也同样适用这种方式。

自定义 Hooks 的两个特点：

- **名字一定是以 use 开头的函数**，这样 React 才能够知道这个函数是一个 Hook；
- **函数内部一定调用了其它的 Hooks**，可以是内置的 Hooks，也可以是其它自定义 Hooks。这样才能够让组件刷新，或者去产生副作用。

来看一个典型的业务型自定义 Hook。

以下代码是一个书籍列表组件，会从服务器端读取特定类别下的书籍列表数据（注意 React.StrictMode 会重复触发副作用回调函数，为了简化例子这里没有做处理）。数据是分页返回的，当还有下一页时，用户可以点击“读取更多”按钮，加载下一页数据拼到当前列表尾部：

```js
import React, { useEffect, useState } from "react";

const BookList = ({ categoryId }) => {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      const url = `/api/books?category=${categoryId}&page=${currentPage}`;
      const res = await fetch(url);
      const { items, totalPages } = await res.json();
      setBooks((books) => books.concat(items));
      setTotalPages(totalPages);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetchBooks();
  }, [categoryId, currentPage]);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
        {isLoading && <li>Loading...</li>}
      </ul>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        读取更多
      </button>
    </div>
  );
};

export default BookList;
```

上面的代码中，分页读取书籍列表这部分逻辑，我们可以选择抽取成自定义 Hook：useFetchBooks，它的参数只有 categoryId，函数体调用了多个基础 Hooks，返回值包括 books 列表、是否读取中 isLoading。当前页和总页数做了额外处理，返回计算值 hasNextPage 和一个回调函数 onNextPage。代码如下：

```js
import React, { useEffect, useState } from "react";

function useFetchBooks(categoryId, apiUrl = "/api/box") {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      const url = `${apiUrl}/?category=${categoryId}&page=${currentPage}`;
      const res = await fetch(url);
      const { items, totalPages } = await res.json();
      setBooks((books) => books.concat(items));
      setTotalPages(totalPages);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetchBooks();
  }, [categoryId, currentPage]);
  const hasNextPage = currentPage < totalPages;
  const onNextPage = () => {
    setCurrentPage((current) => current + 1);
  };

  return { books, isLoading, hasNextPage, onNextPage };
}

const BookList = ({ categoryId }) => {
  const { books, isLoading, hasNextPage, onNextPage } = useFetchBooks(
    categoryId
  );

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
        {isLoading && <li>Loading...</li>}
      </ul>
      <button onClick={onNextPage} disabled={!hasNextPage}>
        读取更多
      </button>
    </div>
  );
};

export default BookList;
```

同时我们也可以在`MagazineList`组件中复用这个 hook。

```js
const MagazineList = ({ categoryId }) => {
  const {
    books,
    isLoading,
    hasNextPage,
    onNextPage
  } = useFetchBooks(categoryId, '/api/magazines');
  // ...
```

只要遵循 Hooks 的使用规则，一个组件中可以使用多个自定义 Hooks，自定义 Hooks 里面也可以调用其他自定义 Hooks。

自定义 Hooks 典型的四个使用场景：

- **抽取业务逻辑；**
- **封装通用逻辑；**
- **监听浏览器状态；**
- **拆分复杂组件。**

比如我们可以通过自定义 Hooks，封装异步请求逻辑 useAsync， 监听浏览器滚动条状态 useScroll 等等，更多参考[自定义 Hooks ：四个典型的使用场景](https://github.com/licop/react-hooks-demo/tree/main/src/06)

更多案例可以参考[官方文档自定义 hook](https://zh-hans.reactjs.org/docs/hooks-custom.html)的聊天框案例。

我们也可以编写一个`useReducers`的 hook，使用 reducer 的方式来管理组件的内部 state。其简化版本可能如下所示：

```js
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, acition);
    return setState(nextState);
  }

  return [state, dispatch];
}
```

在组件中使用它，让 reducer 驱动它管理 state：

```js
function todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: "add", text });
  }
}
```

更多自定义 hooks 的通用方法库 参考[react-use](https://github.com/licop/react-use)

## 高阶组件

**高阶组件（HOC）**是 React 中用于**复用组件**逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

具体而言，高阶组件是参数为组件，返回值为新组件的函数。

组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。

HOC 在 React 的第三方库中很常见，例如 Redux 的 connect 和 Relay 的 createFragmentContainer。

```js
const EnhancedComponent = withSomeFeature(WrappedComponent);
//    -----------------   --------------- ----------------
//          |             ----    |               |
//          |              |      |               |
//          V              V      V               V
//       增强组件       (约定前缀) 高阶组件         原组件
```

或者

```js
const EnhancedComponent = withSomeFeature(args)(WrappedComponent);
//    -----------------   --------------- ----  ----------------
//          |                    |         |            |
//          |                    V         V            |
//          |                 高阶函数     参数           |
//          |             ---------------------         |
//          |                       |                   |
//          V                       V                   V
//       增强组件                 高阶组件               原组件
```

为了开发高阶组件，一般可以先把多个组件公共的逻辑或者交互，抽取成为一个父组件，再封装成高阶组件。

比如下面这个显示“读取中”状态的高阶组件，它要做的事情就是从传入的 props 中拿到 isLoading 属性，如果为 true 则显示一个炫酷的读取中 CSS 动画，否则直接展示原组件：

```js
function withLoading(WrappedComponent) {
  const ComponentWithLoading = ({ isLoading, ...restProps }) {
    // 炫酷的读取中CSS动画
    return isLoading ? (
      <div className="loading">读取中</div>
    ) : (
      <WrappedComponent {...restProps} />
    );
  };
  return ComponentWithLoading;
}

// ...
const EnhancedMovieList = withLoading(MovieList);
// ...
<MovieList movies={movies} />
<EnhancedMovieList isLoading={isLoading} movies={movies} />
```

此外还可以从高阶组件中创建新的 props 传递给原组件，以下是高阶组件 withRouter 的示意代码，来自 React 路由框架 react-router v6 的官方文档：

```js
function withRouter(WrappedComponent) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <WrappedComponent {...props} router={{ location, navigate, params }} />
    );
  }
  return ComponentWithRouterProp;
}
```

可以看出，这个 withRouter 就是三个自定义 Hooks 的组合，创建了一个新的 router 属性传给了原组件，这跟在原组件中直接使用三个 Hooks 区别不大。其实这个高阶组件主要还是给类组件用的，毕竟类组件无法直接使用 Hooks。

高阶组件也可以组合使用，比如：

```js
const EnhancedMovieList = withRouter(withLoading(MovieList));
```

这时推荐使用 Redux 的 compose 函数来改善代码的可读性：

```js
const enhance = compose(withRouter, withLoading);
const EnhancedMovieList = enhance(MovieList);
```

以上的例子都相对简单，当必要时，可以在高阶组件内部加入相关的 state、Hooks，以封装一段完整的业务或交互逻辑。比如下面这个高阶组件 withLoggedInUserContext ，在用户尚未登录时显示登录对话框，登录成功后从服务器端读取当前用户数据，并把用户数据放到 LoggedInUserContext 中，供后代组件使用：

```js
export const LoggedInUserContext = React.createContext();
function withLoggedInUserContext(WrappedComponent) {
  const LoggedInUserContainer = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentUserData, setCurrentUserData] = useState(null);
    useEffect(() => {
      async function fetchCurrentUserData() {
        const res = await fetch("/api/user");
        const data = await res.json();
        setCurrentUserData(data);
        setIsLoading(false);
      }

      if (isLoggedIn) {
        setIsLoading(true);
        fetchCurrentUserData();
      }
    }, [isLoggedIn]);

    return !isLoggedIn ? (
      <LoginDialog onLogin={setIsLoggedIn} />
    ) : isLoading ? (
      <div>读取中</div>
    ) : (
      <LoggedInUserContext.Provider value={currentUserData}>
        <WrappedComponent {...props} />
      </LoggedInUserContext.Provider>
    );
  };
}
```

更多案例可以参考[官方文档高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html)
