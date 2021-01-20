# CSRF

## 介绍

`CSRF` 或 `XSRF`， 全称 `Cross-Site Request Forgery` 跨站请求伪造漏洞, 它是前端常见的一种攻击方式。

`CSRF` 攻击允许恶意用户在另一个用户不知情的情况下利用其身份信息执行操作。通过一张图来认识它的攻击手段。

![](/csrf.png)

下面是 MDN 关于 CSRF 举的实例:

John 是一个恶意用户，他知道某个网站允许已登陆用户使用包含了账户名和数额的 HTTP POST 请求来转帐给指定的账户。John 构造了包含他的银行卡信息和某个数额做为隐藏表单项的表单，然后通过 Email 发送给了其它的站点用户（还有一个伪装成到 “快速致富”网站的链接的提交按钮）.

## 如何防御

### 验证码

对于敏感操作加入验证码，强制用户与网站进行交互，能很好遏制`CSRF`攻击。

### 检查 Referer 字段

`HTTP` 协议有一个`Referer`字段，记录了该`HTTP`请求的来源地址，浏览器限制其改动，最多将其设置为空 rel="noreferrer"，当然如果不是在浏览器中发起 `HTTP` 请求是可以随意改动这个字段的。

但是这种方法也有一定的局限性，某些旧版本的浏览器比如 IE6 可以篡改 `Referer` 字段，有些用户认为 `Referer`字段会侵犯他们的隐私，从而关闭了浏览器发送 `Referer`，正常访问网站会被误认为为 `CSRF` 而拒绝响应。

### 使用 Token 验证字段

在服务器端要求每个 POST 请求都包含一个用户特定的由站点生成的`Token`( 这个`Token`可以由服务器在发送用来传输数据的网页表单时提供）。并通过 `set-cookie` 的方式种到客户端，然后客户端发送请求的时候，从 `cookie` 中对应的字段读取出 `token`，然后添加到请求`headers`中。这样服务端就可以从请求 `headers` 中读取这个 `token` 并验证，由于这个 `token` 是很难伪造的，所以就能区分这个请求是否是用户正常发起的。

Web 框架（如`Axios`）通常都会包含一些类似的 CSRF 防范技巧。

## Axios 源码如何防御 CSRF

`Axios` 源码做了三件事

- 首先判断如果是配置 `withCredentials` 为 `true` 或者是同域请求，才会请求 `headers` 添加 `xsrf` 相关的字段。
- 如果判断成功，尝试从 `cookie` 中读取 `xsrf` 的 `token` 值。
- 如果能读到，则把它添加到请求 `headers` 的 `xsrf` 相关字段中。

### 同源判断

```js
export function isURLSameOrigin(requestURL) {
  const parsedOrigin = resolveURL(requestURL);
  return (
    parsedOrigin.protocol === currentOrigin.protocol &&
    parsedOrigin.host === currentOrigin.host
  );
}

const urlParsingNode = document.createElement("a");
const currentOrigin = resolveURL(window.location.href);

function resolveURL(url) {
  urlParsingNode.setAttribute("href", url);
  const { protocol, host } = urlParsingNode;

  return {
    protocol,
    host,
  };
}
```

### 读取 `token`

```js
const cookie = {
  read(name) {
    const match = document.cookie.match(
      new RegExp("(^|;\\s*)(" + name + ")=([^;]*)")
    );
    return match ? decodeURIComponent(match[3]) : null;
  },
};

export default cookie;
```

### 将 `token`添加到 请求 `headers` 中

```js
if ((withCredentials || isURLSameOrigin(url!)) && xsrfCookieName){
    const xsrfValue = cookie.read(xsrfCookieName);
    if (xsrfValue) {
        headers[xsrfHeaderName!] = xsrfValue
    }
}
```
