# Redis 基础学习

## Redis 简介

### 什么是 Redis

以下是官方文档的解释。

Redis 是一个使用 ANSI C 编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。

Redis 不是简单的 Key-Value 数据库，它还支持数据结构，例如

- 字符串
- 哈希
- 列表
- 集合
- 带范围查询的排序集合
- 位图
- 超日志
- 带有半径查询和流的地理空间索引

Redis 具有内置的复制功能，解析执行 Lua 脚本，LRU 缓存控制，事务和不同级别的磁盘持久性，并通过 Redis Sentinel 和 Redis Cluster 自动分区提供高可用性。

### Redis 的存储结构

在大多数编程语言中都有一种数据结构：字典，例如代码 dict["key"] = "value" 中：

- dict 是一个字典结构变量
- key 是键名
- value 是键值
  在字典中我们可以获取或设置键名对应的键值，也可以删除一个键。

Redis 是 REmote DIctionary Server（远程字典服务器）的缩写，它以字典结构存储数据，并允许其他应用通过 TCP 协议读写字典中的内容。

Redis 字典中的键值除了可以是字符串，还可以是其它数据类型。其中比较常见的有：

- String： 字符串
- Hash： 散列，是由与值相关联的字段组成的内容。字段和值都是字符串。这与 Ruby 或 Python 哈希非常相似。类似于 JavaScript 中的对象结构。
- List： 列表，根据插入顺序排序的字符串元素的集合。它们基本上是链表。
- Set： 未排序的字符串元素集合，集合中的数据是不重复的
- ZSet： 与 Sets 类似，但每个字符串元素都与一个称为分数的浮点值相关联。元素总是按它们的分数排序，因此与 Sets 不同，可以检索一系列元素（例如，您可能会问：给我前 10 名或后 10 名）

### 内存存储与持久化

**Redis 数据库中所有数据都存储在内存中。相对于磁盘，内存的数据读/写速度要快得多，所以我们通常用 Redis 做缓存数据库**，在一台普通电脑上，Redis 可以在一秒内读写超过 10 万个键值。

> Redis 官网的性能测试显示，在 Linux 2.6、Xeon X3320 2.5 GHz 服务器上，50 个并发的情况下请求 100000 次，SET 操作可达 110000 次/s，GET 操作可达 81000 次/s

将数据存储在内存中也有问题，比如程序退出后内存中的数据会丢失。不过 Redis 提供了对持久化的支持，即可以将内存中的数据异步写入到硬盘中，同时不影响继续提供服务。

### 功能丰富

Redis 虽然是作为数据库开发的，但是由于提供了丰富的功能，越来越多人将其用作**缓存、队列系统**等。

（1）作为缓存系统
Redis 可以为每个键设置生存时间，生存时间到期后会自动被删除。这一功能配合出色的性能让 Redis 可以作为缓存来使用。作为缓存系统，Redis 还可以限定数据占用的最大空间，在数据达到空间限制后可以按照一定的规则自动淘汰不需要的键。

（2）作为队列系统
除此之外，Redis 的列表类型键可以用来实现队列，并且支持阻塞式读取，可以很容易的实现一个高性能的优先级队列。

（3）“发布/订阅”功能
同时在更高层面上，Redis 还支持“发布/订阅”的消息模式，可以基于此构建聊天室等系统。

### 简单稳定

即使功能再丰富，如果使用起来太复杂也很难吸引人。Redis 直观的存储结构使得通过程序与 Redis 交互十分简单。

在 Redis 中使用命令来读写数据，命令语句之于 Redis 就相当于 SQL 语言之于关系数据库。例如在关系数据库中要获取 posts 表内 id 为 1 的记录的 title 字段可以使用如下 SQL 语句实现：

```sql
SELECT title FROM posts WHERE id=1 LIMIT 1
```

相对应的，在 Redis 中要读取键名为 post: 1 的散列类型键的 title 字段的值，可以使用如下语句实现：

```
HGET post:1 title
```

其中，HGET 就是一个命令，post:1 是键名，title 是要读取的数据字段。

Redis 提供了 250 多个命令，听起来很多，但是常用的也就几十个，并且每个命令都很容易记忆。

> Redis 命令列表：https://redis.io/commands

Redis 提供了几十种不同编程语言的客户端（https://redis.io/clients），这些库都很好的封装了 Redis 的命令，使得在程序中与 Redis 进行交互变得更容易。

### Redis 应用场景

Redis 是一个 Key-Value 存储系统，大部分情况下是因为其高性能的特性，被当做**缓存**使用，这里介绍下 Redis 经常遇到的使用场景。

一个产品的使用场景肯定是需要根据产品的特性，先列举一下 Redis 的特点：

- 读写性能优异
- 持久化
- 数据类型丰富
- 单线程
- 数据自动过期
- 发布订阅
- 分布式

这里我们通过几个场景，不同维度说下 Redis 的应用。

**（1）缓存系统**

缓存现在几乎是所有中大型网站都在用的必杀技，合理的利用缓存不仅能够提升网站访问速度，还能大大降低数据库的压力。Redis 提供了键过期功能，也提供了灵活的键淘汰策略，所以，现在 Redis 用在缓存的场合非常多。

**（2）排行榜**

很多网站都有排行榜应用的，如京东的月度销量榜单、商品按时间的上新排行榜等。Redis 提供的有序集合数据类构能实现各种复杂的排行榜应用。

**（3）计数器**

什么是计数器，如电商网站商品的浏览量、视频网站视频的播放数等。为了保证数据实时效，每次浏览都得给+1，并发量高时如果每次都请求数据库操作无疑是种挑战和压力。Redis 提供的 incr 命令来实现计数器功能，内存操作，性能非常好，非常适用于这些计数场景。

**（4）分布式会话**

集群模式下，在应用不多的情况下一般使用容器自带的 session 复制功能就能满足，当应用增多相对复杂的系统中，一般都会搭建以 Redis 等内存数据库为中心的 session 服务，session 不再由容器管理，而是由 session 服务及内存数据库管理。

**（5）分布式锁**

在很多互联网公司中都使用了分布式技术，分布式技术带来的技术挑战是对同一个资源的并发访问，如全局 ID、减库存、秒杀等场景，并发量不大的场景可以使用数据库的悲观锁、乐观锁来实现，但在并发量高的场合中，利用数据库锁来控制资源的并发访问是不太理想的，大大影响了数据库的性能。可以利用 Redis 的 setnx 功能来编写分布式的锁，如果设置返回 1 说明获取锁成功，否则获取锁失败，实际应用中要考虑的细节要更多。

**（6）社交网络**

点赞、踩、关注/被关注、共同好友等是社交网站的基本功能，社交网站的访问量通常来说比较大，而且传统的关系数据库类型不适合存储这种类型的数据，Redis 提供的哈希、集合等数据结构能很方便的的实现这些功能。

**（7）最新列表**

Redis 列表结构，LPUSH 可以在列表头部插入一个内容 ID 作为关键字，LTRIM 可用来限制列表的数量，这样列表永远为 N 个 ID，无需查询最新的列表，直接根据 ID 去到对应的内容页即可。

**（8）消息系统**

消息队列是大型网站必用中间件，如 ActiveMQ、RabbitMQ、Kafka 等流行的消息队列中间件，主要用于业务解耦、流量削峰及异步处理实时性低的业务。Redis 提供了发布/订阅及阻塞队列功能，能实现一个简单的消息队列系统。另外，这个不能和专业的消息中间件相比。

**（9）示例：秒杀和 Redis 的结合**

秒杀是现在互联网系统中常见的营销模式，作为开发者，其实最不愿意这样的活动，因为非技术人员无法理解到其中的技术难度，导致在资源协调上总是有些偏差。秒杀其实经常会出现的问题包括：

- 并发太高导致程序阻塞。
- 库存无法有效控制，出现超卖的情况。

其实解决这些问题基本就两个方案：

- 数据尽量缓存,阻断用户和数据库的直接交互。
- 通过锁来控制避免超卖现象。

现在说明一下，如果现在做一个秒杀，那么，Redis 应该如何结合进行使用?

- 提前预热数据，放入 Redis
- 商品列表放入 Redis List
- 商品的详情数据 Redis Hash 保存，设置过期时间
- 商品的库存数据 Redis Sorted Set 保存
- 用户的地址信息 Redis Set 保存
- 订单产生扣库存通过 Redis 制造分布式锁，库存同步扣除
- 订单产生后发货的数据，产生 Redis List，通过消息队列处理
- 秒杀结束后，再把 Redis 数据和数据库进行同步
  以上是一个简略的秒杀系统和 Redis 结合的方案，当然实际可能还会引入 HTTP 缓存，或者将消息对接用 MQ 代替等方案，也会出现业务遗漏的情况，这个只是希望能抛砖引玉。

## Redis 安装

### 在 macOS 中安装 Redis

1. 安装 Homebrew

```shell
/bin/bash -c "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

2. 通过 Homebrew 安装 Redis

```
brew install redis
```

### 运行 Redis

编译后在 Redis 源代码目录的 src 文件夹中会有以下几个可执行文件：

- `redis-server` Redis 服务器
- `redis-cli` Redis 命令行客户端
- `redis-benchmark` Redis 性能测试工具
- `redis-check-aof` AOF 文件修复工具
- `redis-check-dump` RDB 文件检查工具
- `redis-sentinel` 哨兵模式工具

注意：通过编译源码安装的话，也会产生一个 `redis.conf` 的配置文件。

我们最常用是 `redis-server` 和 `redis-cli`。

最简单的，直接运行 `redis-server` 即可启动 Redis：

```shell
redis-server;
```

Redis 默认使用 `6379` 端口，我们也可以通过 `--port` 参数指定启动端口：

```shell
redis-server --port 1234
```

如果需要在后端运行 Redis：

```shell
# 常用
redis-server --daemonize yes
```

查看 Redis 运行状态：

```shell
ps -ef | grep -i redis
```

### 停止 Redis

考虑到 Redis 有可能正在将内存中的数据同步到硬盘中，强行终止 Redis 进程可能会导致数据丢失。
所有正确停止 Redis 的方式应该是向 Redis 发送 SHUTDOWN 命令：

```shell
redis-cli shutdown
```

当 Redis 手动 Shutdown 命令后，会先断开所有客户端连接，然后根据配置执行持久化，最后完成退出。

Redis 可以妥善处理 SIGTERM 信号，所有使用 kill Redis 进程的 PID 也可以正常结束 Redis，效果与发送 SHUTDOWN 命令一样。

```shell
# 通过进程号停止 Redis
kill -9 4684
```

### 连接 Redis

`redis-cli` 是 Redis 自带的基于命令行的 Redis 客户端，也是我们学习和测试 Redis 的重要工具。

运行 `redis-cli` 即可连接数据库：

```shell
redis-cli
```

也可以指定服务器地址和端口连接：

```shell
redis-cli -h 127.0.0.1 -p 1234
```

不出差错的话，此时已经连接上 Redis 数据库，我们通过 Redis 提供的 PING 命令来测试与 Redis 是否连接正常：

```shell
127.0.0.1:6379> PING
PONG
127.0.0.1:6379>
```

Redis 返回 PONG，证明连接正常。

```shell
# 获取全部键
keys *
# 存储一个键值对
SET foo bar
# 获取一个键
GET foo
```

如果想要断开连接：

- 命令：quit
- 快捷键：Ctrl + C

## Redis 中的多数据库

一个 Redis 实例提供了多个用来存储数据的字典，客户端可以指定将数据存储在哪个字典中。这与我们熟知的在一个关系数据库中可以创建多个数据库类似，所有可以将其中的每个字典都理解成一个独立的数据库。

Redis 默认支持 16 个数据库，分别编号为 0、1、2、...14、15

- Redis 不支持自定义数据库名字
- 因为每个数据库都以编号命名，所有开发者必须要明确哪个数据库存放了哪些数据
- 可以通过配置参数 `databases` 修改支持的数据库个数

每个数据库都是独立的，也就是说你在 0 号数据库中插入的数据在 1 号数据库是访问不到的。

客户端与 Redis 建立连接后自动选择 0 号数据库，我们可以使用 SELECT 命令来更换数据库。

```shell
127.0.0.1:6379> SET a 1
OK
127.0.0.1:6379> KEYS *
1) "a"
127.0.0.1:6379> SELECT 16
(error) ERR DB index is out of range
127.0.0.1:6379> SELECT 15
OK
127.0.0.1:6379[15]> SET b 2
OK
127.0.0.1:6379[15]> KEYS *
1) "b"
127.0.0.1:6379[15]> SELECT 0
OK
127.0.0.1:6379> KEYS *
1) "a"
127.0.0.1:6379>

# 将指定 key 移动到指定数据库
move key db

```

> 当选择的数据库编号超过最大数据库编号时，默认编号的数据库

**Redis 不支持为每个数据库设置不同的访问密码，所有一个客户端要么可以访问全部数据库，要么一个数据库也没有权限访问。**

最重要的一点是多个数据库之间并不是完全隔离的，比如 FLUSHALL 命令可以清空一个 Redis 实例中所有数据库中的数据。

综上所述，这些数据库更像是一个命名空间，**而不适宜存储不同应用程序的数据**，比如不适宜使用 0 号数据库存储 A 应用数据而使用 1 号数据库存储 B 应用数据，这是非常不推荐的做法！！！

**不同的应用应该使用不同的 Redis 实例存储数据。** 由于 Redis 非常轻量级，一个空的 Redis 占用的内存只有 1 MB 作用，所以不用担心多个 Redis 实例会额外占用很多内存的问题。

## Redis 中的数据类型及操作命令（CURD）

Redis 不是简单的键值存储，它实际上是一个数据结构服务器，支持不同类型的值。这意味着在传统键值存储中，您将字符串键与字符串值相关联，而在 Redis 中，该值不仅限于简单的字符串，还可以容纳更复杂的数据结构。以下是 Redis 中支持的所有数据结构的列表：

- `String`: 字符串
- `Hash`: 散列，是由与值相关联的字段组成的内容。字段和值都是字符串。这与 Ruby 或 Python 哈希非常相似。类似于 JavaScript 中的对象结构。
- `List`: 列表，根据插入顺序排序的字符串元素的集合。它们基本上是链表。
- `Set`: 未排序的字符串元素集合，集合中的数据是不重复的。
- `ZSet`: 与 Sets 类似，但每个字符串元素都与一个称为分数的浮点值相关联。元素总是按它们的分数排序，因此与 Sets 不同，可以检索一系列元素（例如，您可能会问：给我前 10 名或后 10 名）。
- `Bit`： arrays（或 bitmaps） 可以使用特殊命令像位数组一样处理字符串值：您可以设置和清除单个位，计数所有设置为 1 的位，找到第一个设置或未设置的位，依此类推。
- `HyperLogLogs`： 这是一个概率数据结构，用于估计集合的基数。
- `Streams`： 提供抽象日志数据类型的类似地图项的仅追加集合。

### Redis 中的键

Redis 密钥是二进制安全的，这意味着您可以使用任何二进制序列作为 key，从 "foo" 之类的字符串到 JPEG 文件的内容。空字符串也是有效的键。

有关键的其他一些规则：

- 太长不好，占用内存空间
- 太短也不好，没有可读性
- 尝试坚持使用固定规则，例如：
  - object-type:id
  - user:1000
  - 点或破折号通常用于多字字段，例如：comment:1234:reply.to 或 comment:1234:reply-to 中。
- 允许的最大大小为 512 MB

总结一下：

- 不要太长，浪费空间
- 不要过短，不利于阅读
- 统一的命令规范

## 在 Node.js 中操作 Redis

Node.js 中可以操作 Redis 的软件包推荐列表：https://redis.io/clients#nodejs。

推荐下面两个：

- https://github.com/NodeRedis/node-redis
- https://github.com/luin/ioredis

这里我主要以 ioredis 为例。

ioredis 是功能强大的 Redis 客户端，已被世界上最大的在线商务公司阿里巴巴和许多其他了不起的公司所使用。

ioredis 特点：

- 功能齐全。它支持集群，前哨，流，流水线，当然还支持 Lua 脚本和发布/订阅（具有二进制消息的支持）。
- 高性能
- 令人愉快的 API。它的异步 API 支持回调函数与 Promise
- 命令参数和返回值的转换
- 透明键前缀
- Lua 脚本的抽象，允许您定义自定义命令。
- 支持二进制数据
- 支持 TLS
- 支持脱机队列和就绪检查
- 支持 ES6 类型，例如 Map 和 Set
- 支持 GEO 命令（Redis 3.2 不稳定）
- 复杂的错误处理策略
- 支持 NAT 映射
- 支持自动流水线

相关链接：

- API 参考文档：https://github.com/luin/ioredis/blob/master/API.md
- 更新日志：https://github.com/luin/ioredis/blob/master/Changelog.md
- 从 node_redis 迁移：https://github.com/luin/ioredis/wiki/Migrating-from-node_redis

### 基本使用

安装依赖：

```
npm install ioredis
```

```js
const Redis = require("ioredis");
const redis = new Redis(); // uses defaults unless given configuration object

// ioredis supports all Redis commands:
redis.set("foo", "bar"); // returns promise which resolves to string, "OK"

// the format is: redis[SOME_REDIS_COMMAND_IN_LOWERCASE](ARGUMENTS_ARE_JOINED_INTO_COMMAND_STRING)
// the js: ` redis.set("mykey", "Hello") ` is equivalent to the cli: ` redis> SET mykey "Hello" `

// ioredis supports the node.js callback style
redis.get("foo", function(err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Promise resolves to "bar"
  }
});

// Or ioredis returns a promise if the last argument isn't a function
redis.get("foo").then(function(result) {
  console.log(result); // Prints "bar"
});

// Most responses are strings, or arrays of strings
redis.zadd("sortedSet", 1, "one", 2, "dos", 4, "quatro", 3, "three");
redis.zrange("sortedSet", 0, 2, "WITHSCORES").then((res) => console.log(res)); // Promise resolves to ["one", "1", "dos", "2", "three", "3"] as if the command was ` redis> ZRANGE sortedSet 0 2 WITHSCORES `

// All arguments are passed directly to the redis server:
redis.set("key", 100, "EX", 10);
```

有关更多实例，可以参考这里：https://github.com/luin/ioredis/tree/master/examples。

## 相关资源

- [官网](https://redis.io/)
- [GitHub 仓库](https://github.com/redis/redis)
- [交互式学习 Redis](https://try.redis.io/)
- [Redis 中文网（非官方](http://www.redis.cn/)
- [Redis 命令参考](http://doc.redisfans.com/)
- [Redis 教程](https://www.yuque.com/lipengzhou/redis/nshx0v)
