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
    "revision": "0244b2fb715fef3b60acdc21b7b73ed5"
  },
  {
    "url": "assets/css/0.styles.5dcbec83.css",
    "revision": "966ef239f6ca39d6a32a9f92924afbad"
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
    "url": "assets/js/11.6cec0877.js",
    "revision": "61f7948f9336d5465140777d51215173"
  },
  {
    "url": "assets/js/12.5b161d54.js",
    "revision": "ae034c58cf0a3902da27cfcdcd939c90"
  },
  {
    "url": "assets/js/13.a983f7f5.js",
    "revision": "72c22d54a40303766772e0d848f234d7"
  },
  {
    "url": "assets/js/14.552096fd.js",
    "revision": "5ec7a591629b7b5646e43ebfb6d8259f"
  },
  {
    "url": "assets/js/15.ce645e31.js",
    "revision": "e292f03183376cc8c5c91e7046a2fdda"
  },
  {
    "url": "assets/js/16.46e10fff.js",
    "revision": "3b0165718fd0bfc803059a3cbf083c51"
  },
  {
    "url": "assets/js/17.883eaf2e.js",
    "revision": "c7ee5f7a0b1843854b8db7999b740d08"
  },
  {
    "url": "assets/js/18.815fc977.js",
    "revision": "cd1af7a2c9d9eec425dde49f7aad37f4"
  },
  {
    "url": "assets/js/19.a5ffff5c.js",
    "revision": "9aa34bd87a366963e5cce8ac86ffd37b"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.aff0103f.js",
    "revision": "c1be954c8ca1e0e59bc4add06788e06f"
  },
  {
    "url": "assets/js/21.79ad05d4.js",
    "revision": "8201ef78a4eeaffc3d3d9f7a83ba7f46"
  },
  {
    "url": "assets/js/22.9c3a8913.js",
    "revision": "a03692eebdaecdef70ada65f873789ae"
  },
  {
    "url": "assets/js/23.3eb6694f.js",
    "revision": "e8f99e939775fb5b6092e02267a3bdfa"
  },
  {
    "url": "assets/js/24.68f17417.js",
    "revision": "f9a9ab490dbce139cb9f2d0c4f4273d5"
  },
  {
    "url": "assets/js/25.d352497d.js",
    "revision": "8229e7ec4e9f8eeff21a983c380c8f48"
  },
  {
    "url": "assets/js/26.17943525.js",
    "revision": "27853937fd720c3c52c7aafe1da7c8dc"
  },
  {
    "url": "assets/js/27.576ad99d.js",
    "revision": "0111b5b97ff76f50d482a683eeda7d71"
  },
  {
    "url": "assets/js/28.09072761.js",
    "revision": "d783d9e1c59a4d0f5e4bb0535f7d4702"
  },
  {
    "url": "assets/js/29.4f723963.js",
    "revision": "2859e9ad647ee28aa802cd5ab573f96a"
  },
  {
    "url": "assets/js/3.be30d3f9.js",
    "revision": "f2181aeb3cc5506530a6b3a8da1d47b1"
  },
  {
    "url": "assets/js/30.f5d7d14c.js",
    "revision": "fa379e5bdf435e7c8c5596bcefaada82"
  },
  {
    "url": "assets/js/31.b5c12b45.js",
    "revision": "6c586148edc47d356a1ca3ed7bf36e3e"
  },
  {
    "url": "assets/js/32.ff0a4fac.js",
    "revision": "cbca7544b3ab2ece2d6623dd15f276b7"
  },
  {
    "url": "assets/js/4.c46fee08.js",
    "revision": "ce67aa1c2141baed8ed4892cd7a8d090"
  },
  {
    "url": "assets/js/5.6681de7a.js",
    "revision": "59f791ba4736484e2088b3db53f2dba1"
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
    "url": "assets/js/8.626e669d.js",
    "revision": "af7d6b57e865c9df61215e6d638d6846"
  },
  {
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.4d4179ae.js",
    "revision": "74056b54654acf8c00af5d91432a7038"
  },
  {
    "url": "chunk.png",
    "revision": "2f30df4d98192b7beba5320435d988f2"
  },
  {
    "url": "cicd.png",
    "revision": "4160b0f7fb525d22551b052521aa2234"
  },
  {
    "url": "create-react-app+webpack配置.svg",
    "revision": "b9e62a8c99824c28691b134ff7d4f662"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "38720595102002e1fd841350ea3c4e5b"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "af4eb00c3df17da030ef84ab755e0180"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "f7d1e0eae44e9f5d11ff5f593a80acd1"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "fa11b082e49d08a039a6aad2008cc148"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "84d5b36a3bc2e9a6e62f545b47048434"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "b2c015e2e7e562bcdec18c481ea25d17"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "d4e800710ecc56d3cea803478b834a59"
  },
  {
    "url": "development-process/单元测试/jest/jest.html",
    "revision": "7f9495f507af869fe88fe035e7100cd1"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "1a2bb9a29b844807d565006856277ada"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "21948203c0884726da2108c7adb26b52"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "72904f734147d43d92f161ce7e2d4f31"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "145dda784c41c10f9e31733fbdb4e15a"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "80d98eafdde058aaf72e7ebe6a2dde80"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "e23234e4a79c48eabf349ebe0fba5f52"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "03c47765426b2f5de26de3f65ac0fc79"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "27ecf12d35765dac0c0231152db86c57"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "f335236cc208f956ad9e19fcc2a4d60d"
  },
  {
    "url": "framework/React/index.html",
    "revision": "045c2645bac8ca80de0162719e1e4423"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "8ef4c72520b110c938c1fb46e5cb80c5"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "c5aeb3900fc37fc21be491fded102ba6"
  },
  {
    "url": "runnnig-monitoring/浏览器和 webview.html",
    "revision": "783d076c303792527263d3be04725757"
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
    "revision": "2491cabff2b2cc90587c7fe5fc056bb7"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "a0dd1145649510d11eeb7138b1b5c5a7"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "02071a9eac1d1eb4ed28a25ab6f05c7a"
  },
  {
    "url": "whatisfe.svg",
    "revision": "574047b9eceec3b296f1a9768f601f73"
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
