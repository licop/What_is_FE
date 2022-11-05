# React 项目的文件目录结构

在前端工程化和团队协作的基础上，大型 React 项目代码量上 10 万很常见。项目从最初的几行代码到如今的数十万代码，你可能会遇到如下问题：

- 新功能的组件、Hooks、样式要不要分文件写，源文件都放到哪里？
- Redux 的 action、reducer、store 都写到哪里？
- 公共的代码放到哪里？
- 代码文件多到找不到怎么办？

大中型 React 项目在代码增多，项目整体的扩展就会遇到挑战，这时目录结构组件就变的重要了。

## 几种典型的 React 项目文件目录

项目源码的文件目录结构并不等同于应用的整体逻辑，但却可以**作为把握应用整体逻辑的一张“地图”**。一个良好的文件目录结构是**自解释**的，可以帮助新接触项目的开发者快速熟悉代码逻辑。

React 应用项目有以下五种典型的文件目录结构：

- 单文件结构；
- 单目录结构；
- 按文件职能划分目录结构；
- 按组件划分目录结构；
- 按业务功能划分目录结构。

### 单文件结构

单文件结构就是指，在单个 React 组件文件中开发所有业务逻辑。比如说不算样式的话，我们把所有代码都写在了 `src/app.js` 中。需要注意的是，这种结构只适合代码演示或微型的 React 项目。

### 单目录结构

比起单文件结构，这种结构拆分了组件文件，拆分的文件都放在同一个目录下。

```js
src
├── App.css
├── App.js
├── KanbanBoard.js
├── KanbanCard.js
├── KanbanColumn.js
├── KanbanNewCard.js
├── index.css
└── index.js
```

单目录结构比起单文件结构，能支撑更多组件以及相关逻辑，适合微型 React 项目。

### 按文件职能划分目录结构

顾名思义，在这种结构下，组件文件放一个目录，自定义 Hooks 文件放一个目录，context 文件放一个目录，如果使用了 Redux 的话，actions、reducers、store 各占一个目录（或者 Redux Toolkit 的 slices 和 store 目录）。

```js
src
├── components
│   ├── App.css
│   ├── App.tsx
│   ├── KanbanBoard.tsx
│   ├── KanbanCard.tsx
│   ├── KanbanColumn.tsx
│   └── KanbanNewCard.tsx
├── context
│   └── AdminContext.ts
├── hooks
│   └── useFetchCards.ts
├── actions
├── reducers
├── store
├── types
├   └── KanbanCard.types.ts
├── index.css
└── index.tsx
```

按文件职能划分目录结构的优点在于，可以快速定位任何一种类型的源码，在源码之间导入导出也比较方便：

```js
// src/components/App.tsx
import AdminContext from "../context/AdminContext";
```

当其中某个或者某几个目录中的文件数不断增多时，这种结构的缺点就暴露出来了：不容易定位到直接相关的源文件。比如 hooks/useFetchCards.ts 目前只有 components/App.tsx 在用，这从目录结构上是看不出来的，必须进到源码里去看，当 components 目录下的文件足够多时，要花些功夫才能确认这两个文件的关联关系。

### 按组件划分目录结构

这种目录结构为每个组件都划分了一个独立、平级的目录，只要跟这个组件强相关，都往这个目录里招呼。
这种设计出于两个考虑：

- React 的基本开发单元是组件；
- 同一组件的相关代码要尽量**共置**

目录树结构的例子如下：

```js
src
├── components
│   ├── App
│   │   ├── AdminContext.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── App.test.jsx
│   │   ├── index.js
│   │   └── useFetchCards.js
│   ├── KanbanBoard
│   │   ├── KanbanBoard.css
│   │   ├── KanbanBoard.jsx
│   │   └── index.js
│   ├── KanbanCard
│   │   ├── KanbanCard.css
│   │   ├── KanbanCard.jsx
│   │   ├── KanbanNewCard.jsx
│   │   └── index.js
│   └── KanbanColumn
│       ├── KanbanColumn.css
│       ├── KanbanColumn.jsx
│       └── index.js
├── index.css
└── index.jsx
```

在每个目录中都有一个 index.js，负责把当前目录的组件重新导出（Re-export）到目录外面去，这样其他组件在导入这个组件时，不需要关心目录里都有哪些实现，只关注作为入口的 index.js 就行。入口文件示意代码如下：

```js
// src/components/KanbanCard/index.js
export { default as KanbanCard } from "./KanbanCard.jsx";
export { default as KanbanNewCard } from "./KanbanNewCard.jsx";
```

这种目录结构的优势在于，能为特定组件提供一定的封装性，在它专属的目录中能找到它强相关的所有代码。但它也有不足，面对一些跨组件复用的逻辑，可能会出现放到哪个组件目录都不太合适的窘境。

### 按业务功能划分目录结构

按业务功能划分目录结构，它与我们刚刚讲过的结构都不同，意味着目录划分的主要依据不再是具体框架中的某个具体技术概念（包括 React 的组件、Hooks、context，也包括 Redux 的 action、reducer、store）。这使得按业务功能划分目录结构成为一个框架无关的方案，也就是说，其他框架的应用也可以利用这种目录结构。

目录树结构的例子如下：

```js
src
├── features
│   ├── admin
│   │   ├── AdminContext.js
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminSettings.jsx
│   │   └── index.js
│   ├── kanban
│   │   ├── KanbanBoard.jsx
│   │   ├── KanbanCard.jsx
│   │   ├── KanbanColumn.jsx
│   │   ├── KanbanNewCard.jsx
│   │   ├── index.js
│   │   └── useFetchCards.js
│   ├── login
│   │   ├── Login.css
│   │   ├── Login.jsx
│   │   ├── LoginForm.jsx
│   │   └── index.js
│   └── user
│       ├── Password.jsx
│       ├── UserProfile.jsx
│       ├── UserSettings.jsx
│       └── index.js
├── index.css
└── index.jsx
```

按业务功能划分目录结构可以说，它是这五种结构中最适合大中型 React 项目的。它既强调了相关源文件的共置，也在增加业务功能时具有良好的可扩展性。但它也具有与按组件划分目录结构类似的缺点，面对一些跨业务功能复用的逻辑，放在哪个业务目录下都不太合适。

### 如何选取合适的文件目录结构？

![](/framework/react_base_10.png)

### 前端应用逻辑架构的功用

无论是否精确、美观，这样的架构图有助于我们把握项目的整体走向，对于大中型 React 项目而言是一个值得的先期投入。

![](/framework/react_base_11.png)

### 大中型 React 项目推荐的文件目录结构

当 React 项目规模属于中型或大型时，文件目录结构需要满足以下几个目标：

- 便于横向扩展（即增加新功能点或视图）；
- 易于定位相关代码；鼓励代码复用；
- 有利于团队协作。

为了满足上面的目标，推荐以按业务功能划分为主，结合按组件、按文件职能的方式，划分目录结构。

```js
src
├── components
│   ├── Button
│   ├── Dialog
│   ├── ErrorBoundary
│   ├── Form
│   │   ├── Form.css
│   │   ├── FormField.jsx
│   │   ├── Form.jsx
│   │   └── index.js
│   ├── ...
│   └── Tooltip
├── context
│   ├── ...
│   └── UserContext.js
├── features
│   ├── admin
│   ├── dashboard
│   │   ├── activies
│   │   │   └── ActivityList.jsx
│   │   ├── charts
│   │   │   └── ...
│   │   ├── news
│   │   │   ├── news.png
│   │   │   ├── NewsDetail.jsx
│   │   │   └── NewsList.jsx
│   │   ├── Dashboard.css
│   │   ├── Dashboard.jsx
│   │   └── index.js
│   ├── kanban
│   │   ├── KanbanBoard.jsx
│   │   ├── index.js
│   │   └── useFetchCards.js
│   ├── home
│   ├── login
│   ├── ...
│   └── user
├── hooks
│   ├── ...
│   └── useLocation.js
├── servies
│   ├── kanbanService.js
│   ├── ...
│   └── userService.js
├── index.css
└── index.jsx
```

对应上面的例子，首先建立 features 目录， features 下面的一级目录都对应一个相对完整的业务功能，目录中有实现这一功能的各类代码。

对于部分体量比较大的功能，可以根据需要在一级目录下加入二级目录，每个二级目录都对应一个相对独立的子功能（业务），目录内部是实现子功能的各类代码。必要时还可以加入三级、四级目录，但总体目录层级不应过深。所以我们说，在 features 目录，可以从横向、纵向两个方向扩展功能点。

在 features 目录之外，为公用的代码建立一系列职能型的目录，包括可重用组件的 components 目录、可重用 Hooks 的 hooks 目录； context 目录的主要目的不是重用，而是跨业务功能使用 context； services 目录下，集中定义了整个应用会用到的远程服务，避免四散到各个业务模块中，甚至硬编码（Hardcode）。这些公用代码的目录层级不宜太深，以一到二级为主。

从代码的导入导出关系来看，在 features 目录下，原则上同级目录间的文件不应互相导入，二级、三级目录只应被直接上一级目录导入，不能反过来被下一级目录导入。features 目录的代码可以导入公用目录的代码，反过来公用目录的代码不能导入 features 目录的代码。在任何时候都应该避免循环导入（Circular Import）。

目前为止的目录结构，都是以单个 React 项目为前提的。

根据实际项目需要，也有很多 React 项目使用了多项目或者 monorepo 的方式来开发和扩展，虽然编译构建、CI/CD 更加复杂了，但更有利于多个团队的协作，提高整体开发效率。在这样的实践中，可以把追加功能点到同一个 React 项目（或 monorepo 的包）看作纵向扩展，把特定模块、可复用组件和逻辑抽取为独立 React 项目（或 monorepo 的包）看作横向扩展。
