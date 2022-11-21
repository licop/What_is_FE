# 关于 HTML

## 如何理解 HTML 语义化

#### 优点

- 让人更容易读懂(增加代码可读性)
- 让搜索引擎跟容易读懂(SEO)

## 块状元素 & 内联元素

- display： block/table； 有 div h1 h2 table ul ol p 等
- display： inline/inline-block; 有 span img input button 等

## meta 元素都有什么

**元数据（metadata）** ： 用来构建 HTML 文档的基本结构，以及就如何处理文档向浏览器提供信息和指示，它们本身不是文档内容，但提供了关于后面文档内容的信息，如 titile、base、meta 都是元数据元素

**meta 元素**： meta 元素可提供有关页面的元信息（meta-information），如何针对搜索引擎和更新频度的描述和关键词。

meta 元素可以定义文档的各种元数据，提供各种文档信息，通俗点说就是可以理解为提供了关于网站的各种信息。html 文档中可以包含多个 meta 元素，每个 meta 元素只能用于一个用途，如果想定义多个文档信息，则需要在 head 标签中添加多个 meta 元素

meta 元素包含四大属性：charset，content，http-equiv,name

- _charset_: 属性声明了页面的字符编码
  - 常用的值： UTF-8(Unicode 字符编码)、ISO-8859-1(拉丁字母表的字符编码)
- _content_： content 属性通常配合 name 或 http-equiv 使用，能够给这个属性提供一个值
- _http-equiv_： http-equiv 可用做 HTTP 头部的某些作用，通过定义该属性可以改变服务器和用户代理的行为
- _name_： 用于定义页面的元数据。他不能与 http-equiv、charset 共存。通常是 content 配合使用

## 网站提升 SEO

1.  合理的 title、description、keywords: 搜索对着三项的权重逐个减小，title 值强调重点即可；description 把页面内容高度概括，不可过分堆砌关键词；keywords 列举出重要的关键词
2.  语义化 HTML 标签
3.  非装饰的图片加 alt
4.  让重要的内容放在 HTML 最前面，优先加载；搜索引擎抓取 HTML 顺序是从上到下，保证重要的内容被专区
5.  每个页面只出现一个 h1 标签
6.  页面尽量不要做成 flash、图片、视频，因为搜索引擎抓取不到
7.  少用 iframe、iframe 抓取不到
8.  页面尽量扁平，层级太深不利于抓取
9.  异步加载内容（ajax）搜索引擎也无法抓取，重要信息选择直接输出，有利于用户体验和 seo 优化
10. 采用友情链接：在别人的网站导入自己网站的链接
11. 向各大搜索引擎登录入口提交尚未收录的站点
12. 提高网站速度：网站速度是搜索引擎排序的一个重要指标
13. 做好 404 页面。不仅是为了提高蜘蛛体验，也是为了用户体验更好
