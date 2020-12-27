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
    "revision": "34cc785e5e89ff4f4a3389a1856c25db"
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
    "url": "assets/js/11.ba4c0b82.js",
    "revision": "24a27f41f7e752a796a75fd5f451b062"
  },
  {
    "url": "assets/js/12.2e2c7246.js",
    "revision": "567fb97e3fb0f45c426f9e0e82bbe36c"
  },
  {
    "url": "assets/js/13.277c050f.js",
    "revision": "7cc07b2deb4921cfc1ef35d48fb1e6db"
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
    "url": "assets/js/16.44f92758.js",
    "revision": "5682976876f52f0d86b2ac90b3a778ca"
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
    "url": "assets/js/19.ad540fa1.js",
    "revision": "bf9cf49adef9bc843c6b4bff3884f6bc"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.21c71b16.js",
    "revision": "5b57c0105263e9cf980cf809d128ca99"
  },
  {
    "url": "assets/js/21.d538a36e.js",
    "revision": "2e8d8cf4e7c7c3b1a2ad7dfb39b0df1a"
  },
  {
    "url": "assets/js/22.e6ce73ac.js",
    "revision": "80b6f38254484bbb7ab76dd59755e4b4"
  },
  {
    "url": "assets/js/23.c86261a5.js",
    "revision": "50396953de95090f6439ce98619af2e2"
  },
  {
    "url": "assets/js/24.51962652.js",
    "revision": "8e9ca9fd4107a1a6f2d7483ea58b997d"
  },
  {
    "url": "assets/js/25.152383af.js",
    "revision": "c1370ec78efe165e1e32b4206a650a45"
  },
  {
    "url": "assets/js/26.17943525.js",
    "revision": "27853937fd720c3c52c7aafe1da7c8dc"
  },
  {
    "url": "assets/js/27.0463a65a.js",
    "revision": "23dfb69056d666a5d08ba920caee7a56"
  },
  {
    "url": "assets/js/28.bfd0e6b1.js",
    "revision": "f5520bc31f4e8496638dc7cd29002cf8"
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
    "url": "assets/js/4.291cfed9.js",
    "revision": "f40cbdb8097cc023fc0909fc01871eee"
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
    "url": "assets/js/8.626e669d.js",
    "revision": "af7d6b57e865c9df61215e6d638d6846"
  },
  {
    "url": "assets/js/9.8d9b981b.js",
    "revision": "a9a470847858eff561f461f07a14fc4a"
  },
  {
    "url": "assets/js/app.e738d58f.js",
    "revision": "0f9ae39f1b55f022ec0bf8d2764defe9"
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
    "url": "csrf.png",
    "revision": "c8062970c91b39ae33160741d5e4f3fb"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "0c110a33b4ad89fce7881e88422ea527"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "bc8eee8403ca3e6307ec04de37e58b59"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "a839aadb6b1ff2a4749d4cd2a60181c8"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "b7b2c13229f19fe10156f210d451ec9a"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "85b61ba6381f156e46728b3c7b1dfda9"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "dd1e410c13a2e456b6346c018d899bec"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "347ea32072fd126e5e26ca8baedac96b"
  },
  {
    "url": "development-process/单元测试/jest/jest.html",
    "revision": "3a5634290142a0bd7454108d4e1d0178"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "7c1ed18d0c11f5421294e1b51e788553"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "fb6b9c69283aadb1ad9c17063ca82bad"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "868060dbf0b3090285f06a46f4571e08"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "6faaafc661050c4189c3ef75d1f44428"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "393dc29a1a5ccf3428ec54413acb41f2"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "b63b392ca081c02984b6c8c73a75f8c9"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "2e31c6fcc361ea86a26d4547d1a58e9d"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "69e88e1a123914009eb6c09cefdb96c8"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "a2cabeef937eff5440ad5f3fb4f71197"
  },
  {
    "url": "framework/React/index.html",
    "revision": "9a3ed318845ab09b6b2777a3a8b34773"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "c5477df581425bd0929a21005e9c09b2"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "c0c095765cf76b9400c84922edcb8287"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "6f47976bafb09423101cfbb054817108"
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
    "revision": "454e024a98317e25a1e395fa9008598c"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "957cf14301ab225148a2af059dd7449b"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "0a1bf875f51be3e03c4b196f7b1ead70"
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
