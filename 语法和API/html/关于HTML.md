## 关于HTML

### 如何理解HTML语义化

##### 优点
- 让人更容易读懂(增加代码可读性)
- 让搜索引擎跟容易读懂(SEO)


### 块状元素 & 内联元素

- display： block/table； 有div h1 h2 table ul ol p等
- display： inline/inline-block; 有span img input button等

 
### meta元素都有什么

**元数据（metadata）** ： 用来构建HTML文档的基本结构，以及就如何处理文档向浏览器提供信息和指示，它们本身不是文档内容，但提供了关于后面文档内容的信息，如titile、base、meta都是元数据元素

**meta元素**： meta元素可提供有关页面的元信息（meta-information），如何针对搜索引擎和更新频度的描述和关键词。

meta元素可以定义文档的各种元数据，提供各种文档信息，通俗点说就是可以理解为提供了关于网站的各种信息。html文档中可以包含多个meta元素，每个meta元素只能用于一个用途，如果想定义多个文档信息，则需要在head标签中添加多个meta元素

meta元素包含四大属性：charset，content，http-equiv,name

- *charset*: 属性声明了页面的字符编码 
   - 常用的值： UTF-8(Unicode字符编码)、ISO-8859-1(拉丁字母表的字符编码)
- *content*： content属性通常配合name或http-equiv使用，能够给这个属性提供一个值
- *http-equiv*： http-equiv可用做HTTP头部的某些作用，通过定义该属性可以改变服务器和用户代理的行为
- *name*： 用于定义页面的元数据。他不能与http-equiv、charset共存。通常是content配合使用

### 网站提升SEO

1.  合理的title、description、keywords: 搜索对着三项的权重逐个减小，title值强调重点即可；description把页面内容高度概括，不可过分堆砌关键词；keywords列举出重要的关键词
2. 语义化HTML标签
3. 非装饰的图片加alt
4. 让重要的内容放在HTML最前面，优先加载；搜索引擎抓取HTML顺序是从上到下，保证重要的内容被专区
5. 每个页面只出现一个h1标签
6. 页面尽量不要做成flash、图片、视频，因为搜索引擎抓取不到
7. 少用iframe、iframe抓取不到
8. 页面尽量扁平，层级太深不利于抓取
9. 异步加载内容（ajax）搜索引擎也无法抓取，重要信息选择直接输出，有利于用户体验和seo优化
10. 采用友情链接：在别人的网站导入自己网站的链接
11. 向各大搜索引擎登录入口提交尚未收录的站点
12. 提高网站速度：网站速度是搜索引擎排序的一个重要指标
13. 做好404页面。不仅是为了提高蜘蛛体验，也是为了用户体验更好


 






