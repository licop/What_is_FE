/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ea2c27bca6ac2acb7a017e29fedfb806"
  },
  {
    "url": "assets/css/0.styles.41761744.css",
    "revision": "48b2407143635021f762600b48a109ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.591f96cb.js",
    "revision": "499390d1f0ad141c5f72fc8db5b9d0a3"
  },
  {
    "url": "assets/js/11.f8d05fef.js",
    "revision": "af6858d21d8029ce3b7450ba31027d82"
  },
  {
    "url": "assets/js/12.b66bac79.js",
    "revision": "a0cb2a4a14be2f3eee4de28ae1ac3268"
  },
  {
    "url": "assets/js/13.a983f7f5.js",
    "revision": "72c22d54a40303766772e0d848f234d7"
  },
  {
    "url": "assets/js/14.2c18f271.js",
    "revision": "7ff136f8acc61da1c4f59976a11fbb45"
  },
  {
    "url": "assets/js/15.61d3cd46.js",
    "revision": "18f72631933fcee44ef5ffcae8a47f0f"
  },
  {
    "url": "assets/js/16.099a3b84.js",
    "revision": "ff04257081c72c99ff2d987f7cf6bd1b"
  },
  {
    "url": "assets/js/17.30b2a075.js",
    "revision": "4e05712a9888e98073548d237b9a1264"
  },
  {
    "url": "assets/js/18.33482e40.js",
    "revision": "d3d42ee26ddb17562a164bad6e3f6846"
  },
  {
    "url": "assets/js/19.84b1db3f.js",
    "revision": "0e65d93b211325953735846c75471c64"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.441f104f.js",
    "revision": "f6d44dbae0d02a92386b7acbcb93aa97"
  },
  {
    "url": "assets/js/21.28ecc26b.js",
    "revision": "d8f7ac9ac22efb636a23f9b5c923f2ff"
  },
  {
    "url": "assets/js/22.3d8fa076.js",
    "revision": "d6439ca24d74381f4f34b48be42bf85f"
  },
  {
    "url": "assets/js/23.6734d0d2.js",
    "revision": "2234683fbbc15daf6335bbad54abbfaa"
  },
  {
    "url": "assets/js/24.f4b52303.js",
    "revision": "ec65e422b141a1ab6578313fd7bd668c"
  },
  {
    "url": "assets/js/3.be30d3f9.js",
    "revision": "f2181aeb3cc5506530a6b3a8da1d47b1"
  },
  {
    "url": "assets/js/4.156e29b7.js",
    "revision": "24a73da1e5ba0c637444fc28d16eb571"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/7.ab8ffd39.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.50fb9c55.js",
    "revision": "e284d7c62befd66d4fe35b81f8ed6008"
  },
  {
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.5828c45f.js",
    "revision": "3416c4f71332b5b30289003568752188"
  },
  {
    "url": "cicd.png",
    "revision": "4160b0f7fb525d22551b052521aa2234"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "c344c9af937e1337cc9c02329a82d717"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "5c670558612872a9ad6bdc5057d26071"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "d276c910a31065413d126017b3c5617a"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "734b6185bb1f90bc7883d99ca9efabbf"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "921d6f6c94004dc6352027d8b25a8018"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "a1d5071f65fb4f2b54e8849f75ff6d8d"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "1e60a05e51cd5253a576b1964e9f7252"
  },
  {
    "url": "development-process/单元测试/jest/jest.html",
    "revision": "3be290f062546348cd35530b31589cc3"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "85cab738eaf63805ca652b1c8a77a33b"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "7ca083e509135b27ef3ffb6d485097c8"
  },
  {
    "url": "framework/React/index.html",
    "revision": "5b74c1de7b050bd5bb202daecf64a8df"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "5245df19161a8920aa088ef283dca612"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "235972b97e36383989e0dc66df475891"
  },
  {
    "url": "runnnig-monitoring/浏览器和 webview.html",
    "revision": "71bee0669d2f4006faf85c2f29afcc55"
  },
  {
    "url": "storybook-custom-doc.png",
    "revision": "9cccabc21b89890914cb5b3537766024"
  },
  {
    "url": "storybook-jsx-doc.png",
    "revision": "50bba2cb67b386ad23d2d156afd6a783"
  },
  {
    "url": "syntax&API/CSS/css单位中px和em,rem的区别.html",
    "revision": "047b01a96bae558a52096d69bfc324c6"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "8778aa9f80ce7d8aa3d80aed7bf30c91"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
