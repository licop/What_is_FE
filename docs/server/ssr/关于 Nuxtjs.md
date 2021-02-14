# 关于 Nuxtjs

## Nuxtjs 介绍

`Nuxt.js` 是一个基于 Vue.js 的服务端渲染应用框架，它可以帮我们轻松的实现同构应用。至于为什么要实现同构应用，可以参考[服务器渲染](https://what-is-fe.licop.cn/server/ssr/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93.html)

通过对客户端/服务端基础架构的抽象组织，`Nuxt.js` 主要关注的是应用的 **UI 渲染**。

`Nuxt.js`目标是创建一个灵活的应用框架，你可以基于它初始化新项目的基础结构代码，或者在已有 Node.js 项目中使用 `Nuxt.js`。
`Nuxt.js` 预设了利用 Vue.js 开发**服务端渲染**的应用所需要的各种配置。除此之外，`Nuxt.js`还提供了一种命令叫: `nuxt generate` ，为基于 Vue.js 的应用提供生成对应的静态站点的功能。

作为框架，Nuxt.js 为 `客户端/服务端` 这种典型的应用架构模式提供了许多有用的特性，例如**异步数据加载**、**中间件支持**、**布局支持**等非常实用的功能。

使用`Nuxt.js`的应用程序分别在服务器端（即 nodejs 环境）和客户端运行，在服务器端无法获取`document`和`window`对象，可以通过`process.server`和`process.client`判别应用正在运行的环境。

### Nuxt.js 的 SSR 应用渲染步骤

1. **从浏览器到服务器**
   当浏览器发送初始请求时，它将访问 `Node.js` 内部服务器。 `Nuxt.js` 会生成 HTML，并执行其功能和钩子函数（例如， asyncData，nuxtServerInit 或 fetch。
2. **从服务器到浏览器**
   浏览器使用生成的 HTML 从服务器接收呈现的页面。显示内容，Vue.js 开始渲染 dom。在此过程之后，页面是交互式的
3. **浏览器到浏览器**
   使用<NuxtLink>在页面之间导航是在客户端完成的，因此除非您强制刷新浏览器，否则您不会再次访问服务器

具体参考文档[Server Side Rendering](https://nuxtjs.org/docs/2.x/concepts/server-side-rendering)

### 特性

- 基于 Vue.js,集成 `Vue`、`Vue Router`、`Vuex`、`Vue SSR`
- 自动代码分层
- 服务端渲染
- 强大的路由功能，支持异步数据
- 静态文件服务
- ES2015+ 语法支持
- 打包和压缩 JS 和 CSS
- HTML 头部标签管理
- 本地开发支持热加载
- 集成 ESLint
- 支持各种样式预处理器: SASS、LESS、 Stylus 等等
- 支持 HTTP/2 推送

压缩并 gzip 后，总代码大小为:57kb (如果使用了 Vuex 特性的话为 60kb)。
另外，`Nuxt.js` 使用 `Webpack` 和 `vue-loader` 、 `babel-loader` 来处理代码的自动化构建工作(如打包、代码分层、压缩等等)。

## 安装

在项目中使用`Nuxt.js`有两种方法：

- 使用 `create-nuxt-app` 脚手架工具
- 手动创建

具体安装方法步骤可以参考官方文档 [Installation](https://zh.nuxtjs.org/docs/2.x/get-started/installation)

## 目录结构

以下是一个 `Nuxt.js` 应用程序的目录结构和介绍，这些目录和文件的名字没有额外的配置不要更改，具体可以参考文档[目录结构](https://zh.nuxtjs.org/docs/2.x/directory-structure/nuxt)

```

├── nuxtjs-demo
│   ├── .nuxt      构建目录，当你执行nuxt dev 和nuxt build时自动生成，部署SSR应用时需要
│   ├── assets     包含未编译的Stylus or Sass 样式文件，图片或者字体
│   ├── components 包含Vuejs的组件，可以在pages、layouts或者其他组件里重复使用
│   ├── content    通过@nuxtjs/content模块在其中写入Markdown，JSON，YAML和CSV文件，并可以通过api获取这些文件的信息
│   ├── dist       使用nuxt generate命令时动态生成的目录，包含生成的HTML和其他运行静态生成的Nuxt.js应用程序所必需的文件
│   ├── layouts    默认的视图布局文件目录
│   ├── middleware 中间件目录，中间件可以让你在page或者一组pages渲染之前运行一个自定义的函数
│   ├── modules    Nuxtjs官方模块和自定义模块，如 '@nuxtjs/axios'
│   ├── pages      包含应用程序的视图和路由，Nuxt.js 读取目录中所有.vue文件，自动生成路由配置
│   ├── plugins    插件目录，在Vuejs根应用实例化之前运行
│   ├── static     目录直接映射到服务的root，Nuxt会给该目录提供服务，目录里的文件可以通过项目根Url访问
│   ├── store      包含Vuex 的store文件
│   ├── nuxt.config.js nuxtjs应用程序的配置文件
│
```

## 视图 views

视图(views)由 app.html 模板、一个 layout 布局文件和实际页面 page 组成。

![](/server/views.png)

### app.html 模板

app.html 模板是`Nuxt.js`应用页面的实际 HTML 框架, 可以为页面注入 head 和 body 的变量,这些变量都是自动生成的,可以通过在项目的源目录中创建一个 `app.html` 文件（默认情况下是根目录）来自定义 `Nuxt.js` 使用的 HTML 应用模板，以引入所需要的 js 和 css 文件

```html
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

关于更多视图内容 参考文档[views](https://zh.nuxtjs.org/docs/2.x/concepts/views)

## 路由

`Nuxt.js` 有两种配置路由的方式， 依据 pages 目录结构自动生成 `vue-router` 模块的路由配置和通过`nuxt.config.js`的 router 属性手动配置路由。

### 自动生成路由

**基础路由**

假设 `pages` 的目录结构如下:

```
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

那么，`Nuxt.js` 自动生成的路由配置如下:

```js
router: {
  routes: [
    {
      name: "index",
      path: "/",
      component: "pages/index.vue",
    },
    {
      name: "user",
      path: "/user",
      component: "pages/user/index.vue",
    },
    {
      name: "user-one",
      path: "/user/one",
      component: "pages/user/one.vue",
    },
  ];
}
```

**动态路由**

在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的**以下划线作为前缀**的 Vue 文件 或 目录。 以下目录结构:

```
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```

`Nuxt.js` 生成对应的路由配置表为:

```js
router: {
  routes: [
    {
      name: "index",
      path: "/",
      component: "pages/index.vue",
    },
    {
      name: "users-id",
      path: "/users/:id?",
      component: "pages/users/_id.vue",
    },
    {
      name: "slug",
      path: "/:slug",
      component: "pages/_slug/index.vue",
    },
    {
      name: "slug-comments",
      path: "/:slug/comments",
      component: "pages/_slug/comments.vue",
    },
  ];
}
```

你会发现名称为 `users-id` 的路由路径带有 `:id?` 参数，表示该路由是可选的。如果你想将它设置为必 选的路由，需要在 `users/_id` 目录内创建一个 `index.vue` 文件。

**嵌套路由**

你可以通过 `vue-router` 的子路由创建 `Nuxt.js` 应用的嵌套路由。
创建内嵌子路由，你需要添加一个 Vue 文件，同时添加一个与该文件同名的目录用来存放子视图组件。

> Warning: 别忘了在父组件( .vue 文件) 内增加 <nuxt-child/> 用于显示子视图内容。 假设文件结构如:

```
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
```

Nuxt.js 自动生成的路由配置如下:

```js
router: {
  routes: [
    {
      path: "/users",
      component: "pages/users.vue",
      children: [
        {
          path: "",
          component: "pages/users/index.vue",
          name: "users",
        },
        {
          path: ":id",
          component: "pages/users/_id.vue",
          name: "users-id",
        },
      ],
    },
  ];
}
```

### 手动配置路由

在`extendRoutes`自定义路由规则，在添加路由配置之前，先清除 `Nuxt.js` 基于 `pages`目录默认生成的路由表规则

```js
// nuxt.config.js文件
router: {
    linkActiveClass: 'active',
    // 自定义路由规则
    extendRoutes(routes, resolve) {
      // 清除Nuxt.js基于pages目录默认生成的路由表规则
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout'),
          children: [
            {
              path: '', // 默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/')
            },
            {
              path: '/editor/:slug',
              name: 'editArticle',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/editor',
              name: 'newArticle',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            }
          ]
        }
      ])
    }
  },
```

更多关于路由配置参考[router](https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-router)

### watcheQuery

使用 `watchQuery` 来设置查询字符串 `$route.query` 的监视。如果路由中，定义的字符串发生更改，则将调用所有组件方法（asyncData，fetch，validate，layout 等）。监视默认情况下处于禁用状态，以提高性能。

```js
export default {
  watchQuery: ["page"],
};
```

## 获取异步数据

`Nuxt.js` 支持在客户端应用（client-side）中加载数据的传统 Vue 模式，例如在组件的 `mounted（）`的钩子中获取数据。同时为了满足 SSR 应用的功能，**页面内容有利于 SEO** 和**提升首屏渲染速度**的特性，`Nuxt.js` 提供两个在服务端渲染期间调用的钩子函数`fetch`和`asyncData`。

这样有助于 SEO 的数据信息就可以`fetch`和`asyncData`中获取在，显示到页面的 html 中了。

### fetch

在 Nuxt 2.12+版本中可以使用，可以在任意 `pages` 和 `components` 中使用

### asyncData

`asyncData`只能在 pages 里使用，在首次加载在服务端调用，路由导航的的时候的客户端调用，`asyncData`中获取不到 vue 实例的 this，不过可以接收 Nuxt 的上下文`context`作为参数。`asyncData`中返回的数据会自动和组件的 data 属性合并。

![](/server/context.svg)

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <nuxt-link to="/about">about</nuxt-link>
    <foo :posts="posts" />
  </div>
</template>

<script>
import axios from "axios";
import Foo from "@/components/Foo";

export default {
  name: "HomePage",
  components: {
    Foo,
  },
  // 当你想要动态页面内容有利于seo或者提升首屏渲染速度的时候就在asyncData中发请求
  async asyncData() {
    console.log("asyncData");
    // asyncData没有this，只能用于请求数据，在组价初始化之前被调用
    console.log(this); // undefined
    const res = await axios({
      methods: "GET",
      url: "http://localhost:3000/data.json",
    });
    return {
      posts: res.data.posts,
      title: res.res.title,
    };
  },
};
</script>
```

关于更多获取异步数据参考[Data Fetching](https://zh.nuxtjs.org/docs/2.x/features/data-fetching)

## 生命周期

下面是`Nuxt.js`的生命周期 hooks 在服务器端和客户端的调用情况
![](/server/nuxt生命周期.png)

## 中间件 middleware

中间件使你可以可在渲染一个页面或一组页面（layout）之前运行的自定义 function，function 接收上下文参数。

例如,验证是否登录的中间件,如果没登录重定向到登录页面

```js
// /middleware/authenticated.js
export default function({ store, redirect }) {
  if (!store.state.user) {
    return redirect("/login");
  }
}
```

当我们的页面需要这个功能时，直接在页面中引用就好了

```js
// /pages/editor/index.vue
export default {
  // 在路由匹配组件渲染之前会先执行中间件
  middleware: "authenticated",
};
```

## 插件

我们可以通过插件扩展`Nuxt.js`的功能

![](/server/plugins.svg)

例如可以扩展`axios`，添加拦截器在每个请求前请求头添加 token

```js
// /plugins/request.js
import axios from "axios";

// 创建请求对象
export const request = axios.create({
  baseURL: "https://conduit.productionready.io", // 'http://realworld.api.fed.lagounews.com'
});

// 通过插件机制获取到上下文对象（query、params、req、res、app、store...）
// 插件导出函数必须作为 default 成员
export default ({ store }) => {
  // 请求拦截器,任何请求都要经过请求拦截器
  // 我们可以在请求拦截器中做一些公共的业务处理,例如统一设置 token
  request.interceptors.request.use(
    function(config) {
      // 请求就会经过这里
      const { user } = store.state;
      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`;
      }

      // 返回 config 请求配置对象
      return config;
    },
    function(error) {
      // 如果请求失败(此时请求还没有发出去)就会进入这里
      return Promise.reject(error);
    }
  );
};
```

```js
// nuxt.config.js
// 注册插件
plugins: ["~/plugins/request.js"];
```

## meta 标签和 SEO

pages 中添加 head，可以为我们的页面增加 title 和 meta 标签，有助于提升 SEO

```js
head () {
  return {
    title: `${this.article.title} - RealWorld`,
    meta: [
      { hid: 'description', name: 'description', content: this.article.description }
    ]
  }
}
```

## 使用 Vuex

`Nuxt.js`中已经集成了 Vuex 在 store 目录中定义需要的 `state`，`mutations` 和 `actions` 即可.

`Nuxt.js`增加了`nuxtServerInit`,一个特殊的 action，这个 action 会在服务器渲染期间自动调用，初始化容器数据，传递数据给客户端使用。

```js
// store/index.js
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null;

    // 如果请求头中有cookie
    if (req.headers.cookie) {
      // 使用cookieparser把cookie字符串转化为Javascript对象
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        user = JSON.parse(parsed.user);
      } catch (err) {}
    }

    commit("setUser", user);
  },
};
```

## 使用 Nuxtjs 实现 realworld 项目

使用 Nuxt.js 完成 realworld 项目，已部署到阿里云 https://realworld.licop.cn/

## 更多参考

- [Nuxtjs 官方文档](https://zh.nuxtjs.org/docs/2.x/get-started/installation)
- [使用 Nusxjs 实现 realworld](https://github.com/licop/nuxtjs-realworld)
