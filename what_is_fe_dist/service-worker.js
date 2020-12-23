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
    "revision": "1c7cb4d712974b4d0ceadf98a5d51312"
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
    "url": "assets/js/11.460b07fa.js",
    "revision": "4abbee4549ec810191a3e2d146146a3a"
  },
  {
    "url": "assets/js/12.2e394fe4.js",
    "revision": "b50c54b71bef7fa798080b6a3b1d74e5"
  },
  {
    "url": "assets/js/13.37443924.js",
    "revision": "ba1b917e2eb0900f768d8577bc97d388"
  },
  {
    "url": "assets/js/14.552096fd.js",
    "revision": "5ec7a591629b7b5646e43ebfb6d8259f"
  },
  {
    "url": "assets/js/15.755954c5.js",
    "revision": "e5e204f25c1395514c22381439df1b57"
  },
  {
    "url": "assets/js/16.099a3b84.js",
    "revision": "ff04257081c72c99ff2d987f7cf6bd1b"
  },
  {
    "url": "assets/js/17.9dae5907.js",
    "revision": "6e5d5ed5f1248a6adb7cd91e817a735c"
  },
  {
    "url": "assets/js/18.fc9029a4.js",
    "revision": "fcbaeffd2e5b70b09bb56aa2f677943b"
  },
  {
    "url": "assets/js/19.2079c42f.js",
    "revision": "56f3005f1b9516fdad903cae29ae9535"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.53181be2.js",
    "revision": "276902e661852b7f1954a6adb1b99dd6"
  },
  {
    "url": "assets/js/21.d4e9e971.js",
    "revision": "bb87eec2e0ac21d556acb0c9a30907f1"
  },
  {
    "url": "assets/js/22.25fbfe6f.js",
    "revision": "f8f1bb6e5b051d8edf1f450bf255803c"
  },
  {
    "url": "assets/js/23.d9681d82.js",
    "revision": "2dca4694f3fd4f0b2dabb09707f77efa"
  },
  {
    "url": "assets/js/24.f3cf093d.js",
    "revision": "6472e322346b0efabfaab6c56cfd7d22"
  },
  {
    "url": "assets/js/25.fdac3d37.js",
    "revision": "abbc8e1fb301e6c42a3b24ede9602bb4"
  },
  {
    "url": "assets/js/26.aaf47b72.js",
    "revision": "a3222a5ca34e18aeda932ea1dc387934"
  },
  {
    "url": "assets/js/27.b8aec5bf.js",
    "revision": "dff3817c746917bf7e7dfb37db6be65e"
  },
  {
    "url": "assets/js/28.0ed6fb70.js",
    "revision": "ebdcb9941c090b4606e4d8f90630485f"
  },
  {
    "url": "assets/js/29.cb61d517.js",
    "revision": "9a14d35421bc0e33da78d70601f04087"
  },
  {
    "url": "assets/js/3.be30d3f9.js",
    "revision": "f2181aeb3cc5506530a6b3a8da1d47b1"
  },
  {
    "url": "assets/js/30.5c6e937e.js",
    "revision": "f949631e097ae4f37ec8aac1aea15b71"
  },
  {
    "url": "assets/js/31.72d6ccfd.js",
    "revision": "d1864390c19db5883f7bea4e65584644"
  },
  {
    "url": "assets/js/4.f2fd2305.js",
    "revision": "e5cd802b3fc5a9ee8393024d4a062934"
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
    "url": "assets/js/8.47fc4164.js",
    "revision": "81ebea260b92b6d20854b0df58df25c2"
  },
  {
    "url": "assets/js/9.8d9b981b.js",
    "revision": "a9a470847858eff561f461f07a14fc4a"
  },
  {
    "url": "assets/js/app.19dc190e.js",
    "revision": "622ee506baa696917ffe5dfe499c7244"
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
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "f95e940da0055c83d22e072d6d6ed64f"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "695717e9ab546d626dbe63626f6524e9"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "bdaeba7c9595efa1fa2a0b39c03eded0"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "32f2f526d07017f7c8bfc93381d1a5fa"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "a7bb7cfd3fee63be17c8b8a895aea623"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "887456330981cc452dc969b5efeaf69b"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "9088e5fe321ac6e1071428dafe8c3dff"
  },
  {
    "url": "development-process/单元测试/jest/jest.html",
    "revision": "44022873cce63f34c9422c0aec54b695"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "531c506f4d01eed32ad00e172cfe4363"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "0df2f858eef7c53851abaf8b97689cd4"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "5c3c581bef316c338f9c39e5dfe50678"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "06c5ab7db1b1148e354ded3ff8a166c9"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "2430ffdbae8db1f7ee505dd179b554da"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "d9c0b8adbf7863d035e35cd7bda1caff"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "22633c42f5bbfc35aee8e8060edf7367"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "9563af54c08fc82786c34ea7823e5da4"
  },
  {
    "url": "framework/React/index.html",
    "revision": "2a4209085c02204b1c6ea81553831d35"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "9a41a6c948b33e55b7a1815b878af98e"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "023801155502635e2f7a124b4b05da1a"
  },
  {
    "url": "runnnig-monitoring/浏览器和 webview.html",
    "revision": "48a4ecc87d75dc2e00769b4f24f859dd"
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
    "revision": "eff6de41c00c216b6f39e29372b1088f"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "0a69a7eb6c0bf8a2119903542234e0b5"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "aa79c8d223875f402d4d8e6f080e50ed"
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
