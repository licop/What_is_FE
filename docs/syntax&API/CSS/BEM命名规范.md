# BEM 命名规范

BEM 代表 “块（block）,元素（element）,修饰符（modifier）”

**BEM 的命名规范：.block-name\_\_element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名。**

### 块（block）

一个块是设计或布局的一部分，它有具体且唯一地意义 ，要么是语义上的要么是视觉上的。

在大多数情况下，任何独立的页面元素（或复杂或简单）都可以被视作一个块。它的 HTML 容器会有一个唯一的 CSS 类名，也就是这个块的名字。

例如：一个自定义列表 .list 是一个块，一个 list 列表的 block 写法应该为:

```css
.list
```

### 元素（element）

快（block）的子元素

```css
.list {
}
.list .item {
}

.list {
}
.list__item {
}
```

### 修饰符（modifier）

一个“修饰符”可以理解为一个块的特定状态，标识着它持有一个特定的属性。

用一个例子来解释最好不过了。一个表示按钮的块默认有三个大小：小，中，大。为了避免创建三个不同的块，最好是在块上加修饰符。这个修饰符应该有个名字（比如：size ）和值（ small，normal 或者 big ）。

```css
.list {
}
.list.select {
}
.list .item {
}
.list .item.active {
}

.list {
}
.list_select {
}
.list__item {
}
.list__item--active {
}
```

## 更多参考

- [CSS 命名规范-BEM](https://bemcss.com/#:~:text=BEM%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E7%9F%A9%E5%BE%88,%E5%85%83%E7%B4%A0%E5%90%8D%2B%20%E4%BF%AE%E9%A5%B0%E5%99%A8%E5%90%8D%E3%80%82&text=%E4%B8%8A%E9%9D%A2%E6%88%91%E4%BB%AC%E7%94%A8%E5%8F%8C%E4%B8%8B%E5%88%92%E7%BA%BF,%2Dbtn_prev%E5%92%8Cpage%2Dbtn_next%E3%80%82)
- [CSS — BEM 命名规范 掘金](https://juejin.cn/post/6844903672162304013)
- [CSS BEM 书写规范](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)
- [本人使用 BEM 命名方式开发的项目](https://github.com/licop/vue-waimai-h5)
