# MongoDB 基础

## NoSQL 简介

### 关系型数据库遇到的问题

2008 年左右，网站、论坛、社交网络开始高速发展，传统的关系型数据库在存储及处理数据的时候受到了很大的挑战 ，其中主要体现在以下几点：

- 难以应付每秒上万次的高并发数据写入 。
- 查询上亿量级数据的速度极其缓慢 。
- 分库、分表形成的子库到达一定规模后难以进一步扩展 。
- 分库、分表 的规则可能会因为需求变更而发生变更。
- 修改表结构困难 。

在很多互联网应用场景下 ， 对数据联表的查询需求不是那么强烈 ，也并不需要在数据写入后立刻读取，但对数据的读取和并发写入速度有非常高的要求 。 在这样的情况下 ，非关系型数据库得到高速的发展 。

### 什么是 NoSQL 数据库

如果你之前只接触过关系型数据库如 `Oracle`、`Mysql` 或 `SQL Server`，在学习 `MongoDB` 时可能会感到不安，突然有一款数据库不支持外键，不支持事务，不支持数据类型约定，会给人一种没法用的感觉。

**MongoDB 就是这样一款非关系型的数据库**，什么叫非关系型？就是把数据直接放进一个大仓库，不标号、不连线、单纯的堆起来。传统数据库由于受到各种关系的累赘，各种数据形式的束缚，难以处理海量数据以及超高并发的业务场景。

为了解决上述问题，必须有一款自废武功，以求在更高层次上突破瓶颈的数据库系统。就像张无忌忘记招式从而学习太极一样，摈弃了固有模式的 MongoDB 才能应对 Facebook 上亿比特的海量数据。

NoSQL(NoSQL = Not Only SQL )，意即"不仅仅是 SQL"。

在现代的计算系统上每天网络上都会产生庞大的数据量，这些数据有很大一部分是由关系数据库管理系统（RDBMS）来处理。

1970 年 E.F.Codd's 提出的关系模型的论文 "A relational model of data for large shared data banks"，这使得数据建模和应用程序编程更加简单。

通过应用实践证明，关系模型是非常适合于客户服务器编程，远远超出预期的利益，今天它是结构化数据存储在网络和商务应用的主导技术。

NoSQL 是一项全新的数据库革命性运动，早期就有人提出，发展至 2009 年趋势越发高涨。NoSQL 的拥护者们提倡运用非关系型的数据存储，相对于铺天盖地的关系型数据库运用，这一概念无疑是一种全新的思维的注入。

### NoSQL 数据库有哪些特点

- 可弹性扩展
- BASE 特性
- 大数据量、高性能
- 灵活的数据模型
- 高可用

### NoSQL 数据库有哪些种类

**键值数据库**

这类数据库主要是使用数据结构中的键 Key 来查找特定的数据 Value。

- 优点：在存储时不采用任何模式，因此极易添加数据

这类数据库具有极高的读写性能，用于处理大量数据的高访问负载比较合适。
键值对数据库适合大量数据的高访问及写入负载场景，例如日志系统。
主要代表是 Redis、Flare。

**文档型数据库**

这类数据库满足了海量数据的存储和访问需求，同时对字段要求不严格，可以随意增加、删除、修改字段，且不需要预先定义表结构，所以适用于各种网络应用。
主要代表是 MongoDB、CouchDB。

**列存储型数据库**

主要代表是 Cassandra 、Hbase。
这类数据库查找速度快，可扩展性强，适合用作分布式文件存储系统。

**图数据库**

主要代表是 InfoGrid 、Neo4J 。
这类数据库利用“图结构”的相关算法来存储实体之间的关系信息，适合用于构建社交网络和推荐系统的关系图谱。

### NoSQL 与 RDB（关系型数据库） 该怎么选择

既然 NoSQL 数据库有这么多的优势，那它是否可以直接取代关系型数据库？

NoSQL 并不能完全取代关系型数据库，NoSQL 主要被用来处理大量且多元数据的存储及运算问题。在这样的特性差异下，我们该如何选择合适的数据库以解决数据存储与处理问题呢？这里提供以下几点作为判断依据。

**1、数据模型的关联性要求**

NoSQL 适合模型关联性比较低的应用。因此：

- 如果需要多表关联，则更适合用 RDB
- 如果对象实体关联少，则更适合用 NoSQL 数据库
  - 其中 MongoDB 可以支持复杂度相对高的数据结构，能够将相关联的数据以文档的方式嵌入，从而减少数据之间的关联操作

**2、数据库的性能要求**

如果数据量多切访问速度至关重要，那么使用 NoSQL 数据库可能是比较合适的。NoSQL 数据库能通过数据的分布存储大幅地提供存储性能。

**3、数据的一致性要求**

NoSQL 数据库有一个缺点：其在事务处理与一致性方面无法与 RDB 相提并论，比如银行的交易系统不适合 NoSQL。
因此，NoSQL 数据库很难同时满足强一致性与高并发性。如果应用对性能有高要求，则 NoSQL 数据库只能做到数据最终一致。

**4、数据的可用性要求**

考虑到数据不可用可能会造成风险，NoSQL 数据库提供了强大的数据可用性（在一些需要快速反馈信息给使用者的应用中，响应延迟也算某种程度的高可用）。

**一个项目并非只选择一种数据库，可以将其拆开设计，将需要 RDB 特性的放到 RDB 中管理，而其它数据放到 NoSQL 中管理。**

## MongoDB 简介

### 什么是 MongoDB

- 官方文档：https://www.mongodb.com/
- MongoDB 是由 C++ 语言编写的，是一个基于分布式文件存储的开源 NoSQL 数据库系统。
- MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。
  - 这会让曾经使用过关系型数据库的人比较容易上手
- MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。
  ![](/server/mongodb/mongodb1.png)
- MongoDB 的查询功能非常强大
  - 不仅支持大部分关系型数据库中的单表查询，还支持范围查询、排序、聚合、MapReduce 等
  - MongoDB 的查询语法类似于面相对象的程序语言

### MongoDB 有哪些特点

- 文档型数据库
- 高性能
- 灵活性
- 可扩展性
- 强大的查询语言
- 优异的性能
- 高性能：支持使用嵌入数据时，减少系统 I/O 负担，支持子文档查询
- 多种查询类型支持，且支持数据聚合查询、文本检索、地址位置查询
- 高可用、水平扩展：支持副本集与分片
- 多种存储引擎：WiredTiger , In-Memory

### MongoDB 发展历史

- 2007 年 10 月，MongoDB 由 10gen 团队所发展
- 2009 年 2 月首度推出 1.0 版
- 2011 年 9 月，发布 2.0 版本
  - 分片、复制等功能
- 2015 年 3 月，发布 3.0 版本
  - WiredTiger 存储引擎支持
- 2018 年 6 月，发布 4.0 版本
  - 推出 ACID 事务支持，成为第一个支持强事务的 NoSQL 数据库；
- ……

### MongoDB 适用于哪些场景

**1、需要处理大量的低价值数据，且对数据处理性能有较高要求**

比如，对微博数据的处理就不需要太高的事务性，但是对数据的存取性能有很高的要求，这时就非常适合使用 MongoDB。

**2、需要借助缓存层来处理数据**

因为 MongoDB 能高效的处理数据，所以非常适合作为缓存层来使用。将 MongoDB 作为持久化缓存层，可以避免底层存储的资源过载。

**3、需要高度的伸缩性**

对关系型数据库而言，当表的大小达到一定数量级后，其性能会急剧下降。这时可以使用多台 MongoDB 服务器搭建一个集群环境，实现最大程度的扩展，且不影响性能。

## 安装 MongoDB(Mac)

[官方安装说明](https://www.mongodb.com/docs/manual/installation/)

### 安装说明

- 关于 MongoDB 的版本号
  - 奇数为开发版（4.3），建议开发环境使用
  - 偶数为稳定版（4.4），建议生产环境使用
- 从版本 3.2 之后不再支持 32 位操作系统
- 课程中使用到的版本是最新稳定版 4.4
  - 仅支持 MacOS 10.13 及更高版本

在 macOS 上安装 MongoDB 有两种方式：

- 使用 Homebrew 安装 MongoDB
- 下载 .tgz 压缩包手动安装

建议尽可能使用 Homebrew 包管理器安装 MongoDB。使用程序包管理器会自动安装所有必需的依赖项，并简化以后的升级和维护任务。

### 使用 homebrew 安装 MongoDB

> 如果已经安装了 Homebrew 的可以跳过前两步。

**1、安装 Command Line Tools for Xcode**

如果你电脑上安装了 XCode 软件开发工具（在 App Store 中安装 Xcode），Command Line Tools for Xcode 已经给你安装好了。

也可以直接安装 Command Line Tools for Xcode。在终端输入以下代码完成安装：

```shell
xcode-select --install
```

**2、安装 Homebrew**

```shell
/bin/bash -c "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

**3、添加 MongoDB 安装源到 Homebrew**

```shell
brew tap mongodb/brew
```

**4、使用 homebrew 安装 MongoDB**

```shell
brew install mongodb-community
```

该安装除安装必要的二进制文件之外，还会创建运行 MongoDB 服务所需的文件目录：

- MongoDB 配置文件：/usr/local/etc/mongod.conf
- 日志文件存储目录：/usr/local/var/log/mongodb
- 数据文件存储目录：/usr/local/var/mongodb

### 启动 MongoDB

启动 MongoDB 并运行在后台。

```shell
brew services start mongodb-community
```

或者手动启动 MongoDB，运行在前台。也可以加入 --fork 参数运行在后台。

```shell
mongod --config /usr/local/etc/mongod.conf
```

### 查看 MongoDB 服务运行状态

要验证 MongoDB 是否正在运行，请在正在运行的进程中搜索 mongod：

```shell
ps aux | grep -v grep | grep mongod
```

还可以通过查看日志文件以查看 mongod 进程的当前状态：/usr/local/var/log/mongodb/mongo.log。

### 停止 MongoDB

```shell
brew services stop mongodb-community
```

### 重启 MongoDB

```shell
brew services restart mongodb-community
```

### 卸载 MongoDB

```shell
brew uninstall mongodb-community
```

## mongo Shell

### 什么是 mongo Shell

- mongo Shell 是 MongoDB 官方提供的一个在命令行中用来连接操作 MongoDB 服务的客户端工具
- 使用 mongo Shell 可以对 MongoDB 数据库进行数据的管理

### 安装 mongo Shell

mongo Shell 包含在 MongoDB 服务器安装中。如果您已经安装了服务器，则 mongo Shell 将安装在与服务器二进制文件相同的位置。

另外，如果您想从 MongoDB 服务器上单独下载 mongo shell，可以参考这里：[mongo Shell 安装](https://docs.mongodb.com/manual/mongo/#download-the-mongo-shell)。

```shell
brew install mongosh
```

### 启动 mongo Shell 并连接到 MongoDB

> 使用 mongo shell 之前必须开启 MongoDB

**连接默认端口上的本地 MongoDB 服务**

您可以在没有任何命令行选项的情况下运行 mongo shell，以使用默认端口 27017 连接到在本地主机上运行的 MongoDB 实例：

```
mongosh
```

**连接非默认端口上的本地 MongoDB 服务**

要明确指定端口，请包括 --port 命令行选项。例如，要使用非默认端口 28015 连接到在 localhost 上运行的 MongoDB 实例，请执行以下操作：

```
mongosh --port 28015
```

**连接远程主机上的 MongoDB 服务**

连接远程主机上的 MongoDB 服务需要明确指定主机名和端口号。
您可以指定一个连接字符串。例如，要连接到在远程主机上运行的 MongoDB 实例，请执行以下操作：

```
mongosh "mongodb://mongodb0.example.com:28015"
```

您可以使用命令行选项 --host <主机>:<端口>。例如，要连接到在远程主机上运行的 MongoDB 实例，请执行以下操作：

```
mongosh --host mongodb0.example.com:28015
```

您可以使用--host `<host>`和--port `<port>`命令行选项。例如，要连接到在远程主机上运行的 MongoDB 实例，请执行以下操作：

```
mongosh --host mongodb0.example.com --port 28015
```

**连接具有身份认证的 MongoDB 服务**

您可以在连接字符串中指定用户名，身份验证数据库以及可选的密码。例如，以 alice 用户身份连接并认证到远程 MongoDB 实例：

```
mongosh "mongodb://alice@mongodb0.examples.com:28015/?authSource=admin"
```

您可以使用--username `<user>`和--password，--authenticationDatabase `<db>`命令行选项。例如，以 alice 用户身份连接并认证到远程 MongoDB 实例：

```
mongosh --username alice --password --authenticationDatabase admin --host mongodb0.examples.com --port 28015
```

> 注意：如果您指定--password 而不输入用户密码，则外壳程序将提示您输入密码。

### mongo Shell 执行环境

- 提供了 JavaScript 执行环境
- 内置了一些数据库操作命令
  - show dbs 显示有哪些数据库
  - db
  - use database
  - show collections
  - ...
- 提供了一大堆的内置 API 用来操作数据库
  - db.users.insert({ name: 'Jack', age: 18 })

### 退出 mongo Shell

- 输入 .exit, exit, or exit().
- 输入 quit or quit().
- Ctrl + D.

## MongoDB 基础概念

接下来我们主要学习的内容就是如何管理 MongoDB 中的数据，但是在具体的操作之前要先来了解一下 MongoDB 数据库中的一些基本概念。

- MongoDB 中的数据存储结构
- 数据库(Database)
- 集合(Collection)
- 文档(Document)

### MongoDB 中的数据存储结构

由于 MongoDB 是文档型数据库，其中存储的数据就是熟悉的 JSON 格式数据。

- 你可以把 MongoDB 数据库想象为一个超级大对象
- 对象里面有不同的集合
- 集合中有不同的文档

使用 MongoDB 需要按照以下这种结构存储数据

```JS
{
  // 数据库 Database
  "京东": {
    // 集合 Collection，对应关系型数据库中的 Table
    "用户": [
      // 文档 Document，对应关系型数据库中的 Row
      {
        // 数据字段 Field，对应关系数据库中的 Column
        "id": 1,
        "username": "张三",
        "password": "123"
      },
      {
        "id": 2,
        "username": "李四",
        "password": "456"
      }
      // ...
    ],
    "商品": [
      {
        "id": 1,
        "name": "iPhone Pro Max",
        "price": 100
      },
      {
        "id": 2,
        "name": "iPad Pro",
        "price": 80
      }
    ],
    "订单": []
    // ...
  },

  // 数据库
  "淘宝": {}

  // ...
}
```

### 数据库(Database)

在 MongoDB 中，数据库包含一个或多个文档集合。

**查看数据库列表**

```
show dbs
```

**查看当前数据库**

```
db
```

MongoDB 中默认的数据库为 test，如果你没有创建新的数据库，集合将存放在 test 数据库中。

有一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。

- admin：从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
- local： 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
- config：当 Mongo 用于分片设置时，config 数据库在内部使用，用于保存分片的相关信息。

**创建/切换数据库**

```
use <DATABASE_NAME>
```

在 MongoDB 中数据库只有真正的有了数据才会被创建出来。

你可以切换到不存在的数据库。首次将数据存储在数据库中（例如通过创建集合）时，MongoDB 会创建数据库。例如，以下代码在 `insertOne()` 操作期间创建数据库 `myNewDatabase` 和集合 `myCollection`：

```
use myNewDatabase
db.myCollection.insertOne( { x: 1 } );
```

**数据库名称规则**

https://docs.mongodb.com/manual/reference/limits/#naming-restrictions

- 不区分大小写，但是建议全部小写
- 不能包含空字符。
- 数据库名称不能为空，并且必须少于 64 个字符。
- Windows 上的命名限制
  - 不能包括 /\. "\$\*<>:|? 中的任何内容
- Unix 和 Linux 上的命名限制
  - 不能包括 /\. "\$ 中的任何字符

**删除数据库**

1. 使用 use 命令切换到要删除的数据库
2. 使用 `db.dropDatabase()` 删除当前数据库

### 集合(Collection)

集合类似于关系数据库中的表，MongoDB 将文档存储在集合中。

![](/server/mongodb/mongodb2.svg)

**创建集合**

如果不存在集合，则在您第一次为该集合存储数据时，MongoDB 会创建该集合。

```
db.myNewCollection2.insert( { x: 1 } )
```

MongoDB 提供 `db.createCollection()` 方法来显式创建具有各种选项的集合，例如设置最大大小或文档验证规则。如果未指定这些选项，则无需显式创建集合，因为在首次存储集合数据时，MongoDB 会创建新集合。

**集合名称规则**

集合名称应以下划线或字母字符开头，并且：

- 不能包含 \$
- 不能为空字符串
- 不能包含空字符
- 不能以 . 开头
- 长度限制

**查看集合**

```
show collections
```

**删除集合**

```
db.集合名称.drop()
```

### 文档(Document)

- MongoDB 将数据记录存储为 BSON 文档
- BSON（Binary JSON）是 JSON 文档的二进制表示形式，它比 JSON 包含更多的数据类型
- [BSON 规范](https://bsonspec.org/)
- [BSON 支持的数据类型](https://www.mongodb.com/docs/manual/reference/bson-types/)

![](/server/mongodb/mongodb1.png)

**文档结构**

MongoDB 文档由字段和值对组成，并具有以下结构：

```json
{
  "field1": value1,
  "field2": value2,
  "field3": value3,
  "fieldN": valueN
}
```

**字段名称**

文档对字段名称有以下限制：

- 字段名称 \_id 保留用作主键；它的值在集合中必须是唯一的，不可变的，并且可以是数组以外的任何类型。
- 字段名称不能包含空字符。
- 顶级字段名称不能以美元符号 \$ 开头。
  - 从 MongoDB 3.6 开始，服务器允许存储包含点 . 和美元符号 \$ 的字段名称

**MongoDB 中的数据类型**

字段的值可以是任何 BSON 数据类型，包括其他文档，数组和文档数组。例如，以下文档包含各种类型的值：

```js
var mydoc = {
  _id: ObjectId("5099803df3f4948bd2f98391"),
  name: { first: "Alan", last: "Turing" },
  birth: new Date("Jun 23, 1912"),
  death: new Date("Jun 07, 1954"),
  contribs: ["Turing machine", "Turing test", "Turingery"],
  views: NumberLong(1250000),
};
```

上面的字段具有以下数据类型：

- \_id 保存一个 ObjectId 类型
- name 包含一个嵌入式文档，该文档包含 first 和 last 字段
- birth 和 death 持有 Date 类型的值
- contribs 保存一个字符串数组
- views 拥有 NumberLong 类型的值

下面是 MongoDB 支持的常用数据类型。

| 类型               | 整数标识符 | 别名（字符串标识符） | 别名（字符串标识符）                                                                                       |
| ------------------ | ---------- | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| Double             | 1          | “double”             | 双精度浮点值。用于存储浮点值。                                                                             |
| String             | 2          | “string”             | 字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。                              |
| Object             | 3          | “object”             | 用于内嵌文档                                                                                               |
| Array              | 4          | “array”              | 用于将数组或列表或多个值存储为一个键。                                                                     |
| Binary data        | 5          | “binData”            | 二进制数据。用于存储二进制数据。                                                                           |
| ObjectId           | 7          | “objectId”           | 对象 ID。用于创建文档的 ID。                                                                               |
| Boolean            | 8          | “bool”               | 布尔值。用于存储布尔值（真/假）。                                                                          |
| Date               | 9          | “date”               | 日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。 |
| Null               | 10         | “null”               | 用于创建空值。                                                                                             |
| Regular Expression | 11         | “regex”              | 正则表达式类型。用于存储正则表达式。                                                                       |
| 32-bit integer     | 16         | “int”                | 整型数值。用于存储 32 位整型数值。                                                                         |
| Timestamp          | 17         | “timestamp”          | 时间戳。记录文档修改或添加的具体时间。                                                                     |
| 64-bit integer     | 18         | “long”               | 整型数值。用于存储 64 位整型数值。                                                                         |
| Decimal128         | 19         | “decimal”            | 数值类型。常用于存储更精确的数字，例如货币。                                                               |

**\_id 字段**

在 MongoDB 中，存储在集合中的每个文档都需要一个唯一的 \_id 字段作为主键。如果插入的文档省略 \_id 字段，则 MongoDB 驱动程序会自动为 \_id 字段生成 ObjectId。

\_id 字段具有以下行为和约束：

- 默认情况下，MongoDB 在创建集合时会在 \_id 字段上创建唯一索引。
- \_id 字段始终是文档中的第一个字段
- \_id 字段可以包含任何 BSON 数据类型的值，而不是数组。

### 可视化管理工具

**Robo 3T**

- 官网：https://robomongo.org/
- 下载地址：https://robomongo.org/download

**MongoDB Compass**

- 官网：https://www.mongodb.com/products/compass
- 下载地址：https://www.mongodb.com/try/download/compass
- 使用文档：https://docs.mongodb.com/compass/current/

Navicat

- 官网：http://www.navicat.com.cn/
