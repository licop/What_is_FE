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
    "revision": "14d2293da9b0a714f5d3f4ff4f280e52"
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
    "url": "assets/js/10.4ff0b6b6.js",
    "revision": "efa7bb6ea7dfc656549f10d02167478b"
  },
  {
    "url": "assets/js/11.f8d05fef.js",
    "revision": "af6858d21d8029ce3b7450ba31027d82"
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
    "url": "assets/js/14.466cf9fc.js",
    "revision": "b89ecd18cb5aa23dc2c697e7a41cee07"
  },
  {
    "url": "assets/js/15.755954c5.js",
    "revision": "e5e204f25c1395514c22381439df1b57"
  },
  {
    "url": "assets/js/16.2c832fb0.js",
    "revision": "1f5a8c5c570bad8c4060298abd98f709"
  },
  {
    "url": "assets/js/17.8653a0f2.js",
    "revision": "29dc32b4d0c9291ae63ad88aebd7bc25"
  },
  {
    "url": "assets/js/18.fc9029a4.js",
    "revision": "fcbaeffd2e5b70b09bb56aa2f677943b"
  },
  {
    "url": "assets/js/19.bef20e55.js",
    "revision": "538dfc68d31a56c4737309da0453b305"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.1239cd84.js",
    "revision": "6d58a4d366833919b6e468cebad96872"
  },
  {
    "url": "assets/js/21.179655bb.js",
    "revision": "452c75ed94958b3c41d18828227e2076"
  },
  {
    "url": "assets/js/22.25fbfe6f.js",
    "revision": "f8f1bb6e5b051d8edf1f450bf255803c"
  },
  {
    "url": "assets/js/23.062a7c06.js",
    "revision": "eed2bc9dd0876a7d22ef5b6b21506044"
  },
  {
    "url": "assets/js/24.e299a6a3.js",
    "revision": "feccab02395258c4fb41737b6fc11b6b"
  },
  {
    "url": "assets/js/25.f8c54314.js",
    "revision": "0e409b2756bdd99aa7a9b7a4b09e9c36"
  },
  {
    "url": "assets/js/26.21c8289b.js",
    "revision": "2c90889abde1e6f0fe1a13a030154d58"
  },
  {
    "url": "assets/js/27.b8aec5bf.js",
    "revision": "dff3817c746917bf7e7dfb37db6be65e"
  },
  {
    "url": "assets/js/28.536f874c.js",
    "revision": "2e34b58ba453ac29654e6667b96ba199"
  },
  {
    "url": "assets/js/29.f43710be.js",
    "revision": "ea6c77b30ca1d3f59a2b305735c4f76b"
  },
  {
    "url": "assets/js/3.be30d3f9.js",
    "revision": "f2181aeb3cc5506530a6b3a8da1d47b1"
  },
  {
    "url": "assets/js/30.5a9e15da.js",
    "revision": "8cebca006f6277ea1d68aa432d428e1b"
  },
  {
    "url": "assets/js/4.cf3e819a.js",
    "revision": "6897b5bc0bec43d0b271b7fbae48f7b0"
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
    "url": "assets/js/8.92b8e2ba.js",
    "revision": "53290312035cf4b65abddc5d4f51bdad"
  },
  {
    "url": "assets/js/9.8d9b981b.js",
    "revision": "a9a470847858eff561f461f07a14fc4a"
  },
  {
    "url": "assets/js/app.a4e20ded.js",
    "revision": "70790fb0e485012bf0fe7afc75722703"
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
    "revision": "c0342f361aaefee414c8c7b07dc1c454"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "4d03c4406d2bf1f861262524df98bc98"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "18f61a18cf05cae9850d5ef9ffb25231"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "2ecb689a9101436c2b8a83aef4f0bfd2"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "6cb2ecf306b82e23965602bf06e9597d"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "4dd70125e1563897c9ea2395e48a873a"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "8f4c0cda7477bd0351f476eebaeaa552"
  },
  {
    "url": "development-process/单元测试/jest/jest.html",
    "revision": "651936aff3c53d7b61f424438af2b409"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "b57341309274aaafd08e4eaec36e7cc8"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "a61ef1f3718476f91ff11b48e64a6f69"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "d55eeb3a681fba2d4634c070fd4a4074"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "7dffbc1abbb131629d00ec5feed4daa0"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "7dd68d2bd5962dd4b126e7c1ad27b544"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "4c780fd1e32071e59494ea043edaf76f"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "d91f2e6f6185d675aaaf8947fe1bc0fc"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "55920e726dcadc29792db2e7cf1e5371"
  },
  {
    "url": "framework/React/index.html",
    "revision": "12a3218cbe5e2eaec229ab3a57908ecb"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "55b091083090c0249b59cd9cc2e5f8c6"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "751b8c37a363fe7ea5e77efb31c8399e"
  },
  {
    "url": "runnnig-monitoring/浏览器和 webview.html",
    "revision": "e4ca5e0b40c65ac9859027c71d6326e8"
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
    "revision": "95c9378a1c3d1cb0127f250a841bd79c"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "6e520cbcb341a63a59ab33f7ecfb411e"
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
