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
    "revision": "b0e5cb8572470362a5fde6863e476bec"
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
    "url": "assets/js/10.a1bb7c5b.js",
    "revision": "f32bbbe2fa02f45edf7817a27e01b93c"
  },
  {
    "url": "assets/js/11.7942a630.js",
    "revision": "1578155b26b990ed8d5476f6cc8f1132"
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
    "url": "assets/js/14.f0bb2f16.js",
    "revision": "18775a3c6937df3258f67e6d1a60d9cd"
  },
  {
    "url": "assets/js/15.755954c5.js",
    "revision": "e5e204f25c1395514c22381439df1b57"
  },
  {
    "url": "assets/js/16.568edfc0.js",
    "revision": "2e7886e0b09e6d63ca605e3f1245bfb0"
  },
  {
    "url": "assets/js/17.a2e41543.js",
    "revision": "1f4657eab4ce2796eb216f1affe6d088"
  },
  {
    "url": "assets/js/18.815fc977.js",
    "revision": "cd1af7a2c9d9eec425dde49f7aad37f4"
  },
  {
    "url": "assets/js/19.c944ea72.js",
    "revision": "7d169d26df76930629717fd97ce29562"
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
    "url": "assets/js/21.601eec8f.js",
    "revision": "afe066955eb8103be46c9f21f171fc3b"
  },
  {
    "url": "assets/js/22.9c3a8913.js",
    "revision": "a03692eebdaecdef70ada65f873789ae"
  },
  {
    "url": "assets/js/23.a3837d19.js",
    "revision": "b6d8bb00bb180c6696b16ef9d1edb53d"
  },
  {
    "url": "assets/js/24.0065b7ea.js",
    "revision": "4a8671df5981b8066cab0b70cce393d3"
  },
  {
    "url": "assets/js/25.152383af.js",
    "revision": "c1370ec78efe165e1e32b4206a650a45"
  },
  {
    "url": "assets/js/26.80eb9e8d.js",
    "revision": "941e07bc829abe7d45af38c1959619f4"
  },
  {
    "url": "assets/js/27.e0219f21.js",
    "revision": "c5d32c26f399fbd03be5c63735336d2f"
  },
  {
    "url": "assets/js/28.d215094e.js",
    "revision": "f2fee98067fd861baba17edbe8ff6831"
  },
  {
    "url": "assets/js/29.dfaea0f0.js",
    "revision": "41cf14f77ef566037c2120084c7cb6da"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.fe9008f6.js",
    "revision": "c1bd360519f3f0c50803fafed8b566e1"
  },
  {
    "url": "assets/js/31.eaf69d80.js",
    "revision": "bac680adcd71af6b8e2bac993181b368"
  },
  {
    "url": "assets/js/32.2f2cc6c8.js",
    "revision": "d6776c0506d18a542e8f45876804dcb6"
  },
  {
    "url": "assets/js/33.939886bf.js",
    "revision": "b283cecb78c411cb2bf3077e92387c2a"
  },
  {
    "url": "assets/js/34.7f84eebc.js",
    "revision": "a484d79595bccb77f169ff125b1a0595"
  },
  {
    "url": "assets/js/35.6d5a8101.js",
    "revision": "ea97b38643f40862300e9f8f248465e8"
  },
  {
    "url": "assets/js/36.dc09df83.js",
    "revision": "dc703ac4cf0347a6fa1598d9b6d39319"
  },
  {
    "url": "assets/js/37.4b63ee11.js",
    "revision": "440f3f9a8f63a5c5e76a5fa353146e27"
  },
  {
    "url": "assets/js/38.327252eb.js",
    "revision": "eb14a186c2835b55dcfb5f4420622335"
  },
  {
    "url": "assets/js/39.7fd8114c.js",
    "revision": "d4135e764c8a5fe03afbd3cbd746b903"
  },
  {
    "url": "assets/js/4.3e4da766.js",
    "revision": "82b7744ef18fd6e48e3471bb33ce5dcf"
  },
  {
    "url": "assets/js/40.bd7b0b92.js",
    "revision": "8fb58b4c7f2b965363a2be6be9a8cb79"
  },
  {
    "url": "assets/js/41.a69d0237.js",
    "revision": "d31222dce54ec0e4c22f1f449efe9053"
  },
  {
    "url": "assets/js/42.41e4d6e3.js",
    "revision": "8086677eb666cd62596d16b801d3c640"
  },
  {
    "url": "assets/js/43.b3a12999.js",
    "revision": "3ae7f24d38ee92fdae2f8ca19b84a545"
  },
  {
    "url": "assets/js/44.01cdb828.js",
    "revision": "4f02613cff0298a7496b04d71f0ea9dc"
  },
  {
    "url": "assets/js/45.9c3855ae.js",
    "revision": "b83089632d125fd2d3433f887ed2efa1"
  },
  {
    "url": "assets/js/46.992211cd.js",
    "revision": "ccdeb81b47b4e5293a241dcd8c2b7cc0"
  },
  {
    "url": "assets/js/47.e579e398.js",
    "revision": "644a81f91b0dbec120673b714065debc"
  },
  {
    "url": "assets/js/48.13f2c8f2.js",
    "revision": "fecb20323d5d69612d9f6a683df41109"
  },
  {
    "url": "assets/js/49.83a8ffbc.js",
    "revision": "b661d8eacb6d84d8f70701641d61cabb"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.4daebd0d.js",
    "revision": "c24ad1a05b4b8cb8f2d036610dc6e57f"
  },
  {
    "url": "assets/js/51.0f3d342e.js",
    "revision": "d176bca7b5be1e675466f93068261d12"
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
    "url": "assets/js/9.bca781e2.js",
    "revision": "647986575b35f2cde0bc2617d3abb465"
  },
  {
    "url": "assets/js/app.c2ed7c70.js",
    "revision": "d2b117ae8d600b72099bd8035ca466cc"
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
    "revision": "b8b5cd9c3e87338499ee7cef6692ce2d"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "cfbaa2afb626ac72ce2280fd6f827f73"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "27e3d763ba019388c55e99d8326cd6d0"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "293942fba47b69e7e9c2896495b6df38"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "ee72863917ca1691874c4cf739672c0d"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "8e872b8f641ca9d089273ed2bf843f97"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "9e8c599eace45ddf5f18a6b8ce1f39c1"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "8c8d804b880123e9f2bd55f951af48ab"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "f4f3b8945a82e9c1e8b0a8cb57d964db"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "47ef0f7f0a1ea6ddca37ce8b8d96aad2"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "807dbf56cb29cabd612dc58b25a04c24"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "ba10cb4a1c4e99ad20f2d5b61c13e73e"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "17c730698e076d7ddf98901d4dcb1144"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "2bbd52dcc1c3ab53c20bddaebe822f09"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "169481b905d233711259ec7beaa7657a"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "954ab03436d55d1499418e59a295eca1"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "65c2d6accd16b77e7d5e5949cc271e00"
  },
  {
    "url": "framework/React/index.html",
    "revision": "0c5cd0c6fee2bd330dbc58ed62447268"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "66655b610b4fc3f59c6b6ac248eda88f"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "ddf7c8cf64041332f69294b88885292c"
  },
  {
    "url": "programming-basics/pipe.png",
    "revision": "3d1e8b5539c68df3324954095122df73"
  },
  {
    "url": "programming-basics/pipe2.png",
    "revision": "b2db3de894447bc083c8770fab33af5d"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "50585f7fd4f5aa3bc307f4fac04e1945"
  },
  {
    "url": "running-monitoring/jsbench1.png",
    "revision": "585a3f8e9d6ff5de80a110bf61679510"
  },
  {
    "url": "running-monitoring/jsbench2.png",
    "revision": "f89abd074125783d03ef0aeee1279f33"
  },
  {
    "url": "running-monitoring/jsbench3.png",
    "revision": "1904491194e91db7a9a873c314879092"
  },
  {
    "url": "running-monitoring/timeline.png",
    "revision": "fa04fc0286403223fe79891b36482eb8"
  },
  {
    "url": "running-monitoring/v8内存分配.png",
    "revision": "dfd6c97b165d5bbd6c51771e8595a97b"
  },
  {
    "url": "running-monitoring/v8垃圾回收.png",
    "revision": "f7d82fe1d65723818c1d49f4ff4cf594"
  },
  {
    "url": "running-monitoring/内存泄露.png",
    "revision": "c5c839ac80e598d535396ed520149066"
  },
  {
    "url": "running-monitoring/可达对象1.png",
    "revision": "023bddee4114756a6df1cad98376bad6"
  },
  {
    "url": "running-monitoring/可达对象2.png",
    "revision": "7c610fa7b93d0cec3a350a3d5e0130ee"
  },
  {
    "url": "running-monitoring/堆快照.png",
    "revision": "c7f3cae3726235248be2a172aeeb9b5c"
  },
  {
    "url": "running-monitoring/堆快照分离dom.png",
    "revision": "edc41b8362337b3d45edce20dab70523"
  },
  {
    "url": "running-monitoring/增量标记.png",
    "revision": "2e529785f27e058d88a7c604c0dbdf1f"
  },
  {
    "url": "running-monitoring/标记清除.png",
    "revision": "a637c4165abcff298ca6a93b08b28e48"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "a96aa234f8963671ba0ae883b2d7fb16"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "21b99ce9b80acb171b00ad13e106d8e3"
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
    "url": "syntax&API/async1.png",
    "revision": "da5c0e3ed18fef056c4933599ead2c7c"
  },
  {
    "url": "syntax&API/CSS/css单位中px和em,rem的区别.html",
    "revision": "f3fe34309158c578f29acadeb88fa2b4"
  },
  {
    "url": "syntax&API/es_version.png",
    "revision": "20d9cb38926e62356ced4c4601d334a1"
  },
  {
    "url": "syntax&API/es&js1.png",
    "revision": "8a501318b82a9d9436fc3405f45b2537"
  },
  {
    "url": "syntax&API/es&js2.png",
    "revision": "ebf528d645770bcb664b3204b68f8c5d"
  },
  {
    "url": "syntax&API/ES语法/ECMAScript语法.html",
    "revision": "a19a207093d23a16bf323813bc9ba9e9"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "0be27838cd9344d2e38d08804e53f0b4"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "d90b92c0153360217ffd69ff9431418a"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "40bb54e1570115d14d7c0e9943bed01b"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "0d9cafc8dee8c48332017c188668d54b"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "90cb79f54c1d0efe4f299c5c39acccd9"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "da5fd265dacefe8631e7dde22ff55dba"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "6059b90ebd49f27da2ceb5256a099073"
  },
  {
    "url": "syntax&API/language_type.png",
    "revision": "5a9a106be30b1e9405f8ad41773f4fdf"
  },
  {
    "url": "syntax&API/macro&micro.jpg",
    "revision": "16f70a9a51a65d5302166b0d78414d65"
  },
  {
    "url": "syntax&API/promise1.png",
    "revision": "db6f583375a9c59bd63a3432fd8e2348"
  },
  {
    "url": "syntax&API/proxy.png",
    "revision": "61ce59b9d750f1f0041afb2112002837"
  },
  {
    "url": "syntax&API/ts.png",
    "revision": "62d74ebb7597c8d210fd2165b5c8fdd7"
  },
  {
    "url": "syntax&API/Typescript/advance.html",
    "revision": "3b21b6c4eeb8baa711793ce00f4ddf5a"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "e8351742f055f96b6ead9d833800984e"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "dc9f223507f712741539d9975a4f918e"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "aa59f5558f0483defc792fcc1ff1b686"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "0a573cd66a9a005976e4f72eaeb324a4"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "0dc902057a48a229b51619e5fd22d287"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "02a52298c931d5e3e96bf1d18d44b0b3"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "89f54a79606a14465d78645528edf555"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "a7f5724718412e61f13a59de46a195c4"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "5ff9cbcf51c800c6a9746cdfe1df1f9b"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "47d241edf0ce9a4fe04aaff11690158b"
  },
  {
    "url": "typescript.svg",
    "revision": "25c5cb938602cdaae00edc225688bcb1"
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
