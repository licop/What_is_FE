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
    "revision": "93e8eb2f1f75ecbbff8c9d700b7ed454"
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
    "url": "assets/js/11.f3b23486.js",
    "revision": "20f7985cee0e9b54cb0d0a364cab1c96"
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
    "url": "assets/js/14.b1402da3.js",
    "revision": "53c6b04a0af35863fdb504165cb4c19a"
  },
  {
    "url": "assets/js/15.61d3cd46.js",
    "revision": "18f72631933fcee44ef5ffcae8a47f0f"
  },
  {
    "url": "assets/js/16.e1e700c5.js",
    "revision": "0a2315f4d7d71dd455f50a9f8683c288"
  },
  {
    "url": "assets/js/17.30b2a075.js",
    "revision": "4e05712a9888e98073548d237b9a1264"
  },
  {
    "url": "assets/js/18.183c1e46.js",
    "revision": "297c4ae8596c0669c8cdfb5c9ea2f953"
  },
  {
    "url": "assets/js/19.8b90d6fe.js",
    "revision": "7f38dce05ac6abdac613e780c1afe35f"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.bc0ab09a.js",
    "revision": "f98c7e460de1159f04d93d3061b25f1d"
  },
  {
    "url": "assets/js/21.b0c634aa.js",
    "revision": "25397d32ec912afb7043dc8aa7bd226a"
  },
  {
    "url": "assets/js/22.5d17eb01.js",
    "revision": "06c7e3193e77aaa05bfd0d4b6264d6b9"
  },
  {
    "url": "assets/js/23.9a50a0f2.js",
    "revision": "384a9d9dcec75c62a6b762bc1cdca419"
  },
  {
    "url": "assets/js/24.e3fe8a25.js",
    "revision": "61f12270527536e6373b4e5315768156"
  },
  {
    "url": "assets/js/25.3f5746e2.js",
    "revision": "c48d9e0fc5e20bc982f1c55232a39d5a"
  },
  {
    "url": "assets/js/26.63d02b2a.js",
    "revision": "c8311f96f371e2e60d856fefd96e4a4b"
  },
  {
    "url": "assets/js/27.bd1cfbc8.js",
    "revision": "f5658e3b566cc3a1a1363c5513e6e5e1"
  },
  {
    "url": "assets/js/28.43de4239.js",
    "revision": "734bc490f04df6b1daa4f700bf8e0e07"
  },
  {
    "url": "assets/js/29.d46d55e1.js",
    "revision": "dcf50263550ff2fd989d2f71272f42c9"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.5573d4a5.js",
    "revision": "1b85c7361b7b01afa6cfe86d0c38425d"
  },
  {
    "url": "assets/js/31.5982f7a9.js",
    "revision": "9ca74d367b6ae459a43c185d34b4792b"
  },
  {
    "url": "assets/js/32.63e20e5b.js",
    "revision": "306668132f5cb6df06d67081f6b5da9f"
  },
  {
    "url": "assets/js/33.2b9dd082.js",
    "revision": "4ec3e6539ac496d07b5a79a006159691"
  },
  {
    "url": "assets/js/34.abe86184.js",
    "revision": "8dd17878d93b6e84e323fc1c1d35527f"
  },
  {
    "url": "assets/js/35.4ab88a8d.js",
    "revision": "712dfd68797846c4052fa80415986c67"
  },
  {
    "url": "assets/js/36.c12b55f4.js",
    "revision": "a357e59938d86a6066f67c722a405420"
  },
  {
    "url": "assets/js/37.985ca46b.js",
    "revision": "68cdad18bb7d9c1c04d8c95234cd1a83"
  },
  {
    "url": "assets/js/38.b3795405.js",
    "revision": "01d7b9bb27af6353a1114e64ff696e7c"
  },
  {
    "url": "assets/js/39.114e1788.js",
    "revision": "c3d446561b4867e72b00a972046a57c7"
  },
  {
    "url": "assets/js/4.3499da8f.js",
    "revision": "9f7cdd55afd8659af6c9a201e0a87bf1"
  },
  {
    "url": "assets/js/40.d3e328d2.js",
    "revision": "d2acd11ae0cbdf3a6b1f863174666eb7"
  },
  {
    "url": "assets/js/41.89bd80d1.js",
    "revision": "e7bcc73707435f79031ec1b3fb7a4484"
  },
  {
    "url": "assets/js/42.dc9200b3.js",
    "revision": "091bc954da1040ed80347c2445fee244"
  },
  {
    "url": "assets/js/43.43a97d44.js",
    "revision": "3965965acfcbdfd46c6f3cc61da14148"
  },
  {
    "url": "assets/js/44.210a92c1.js",
    "revision": "766f1cbc4d96e8d0e079935c3de6ade6"
  },
  {
    "url": "assets/js/45.7989e576.js",
    "revision": "a933df2f1f128c89a99d838dab445783"
  },
  {
    "url": "assets/js/46.3b14f282.js",
    "revision": "c8b209ca611a5fecb2650b4c6d5d862f"
  },
  {
    "url": "assets/js/47.ae934548.js",
    "revision": "54d51fd26bd918702b45939982072dcb"
  },
  {
    "url": "assets/js/48.596469f6.js",
    "revision": "c200a87881cf03818720a2d78d0bd3c8"
  },
  {
    "url": "assets/js/49.d7076eda.js",
    "revision": "f5d17f543857f850463e7c451124db32"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.49c02189.js",
    "revision": "9c2225f03c0ae4cb0ab82ba67fcb5c3f"
  },
  {
    "url": "assets/js/51.a02f791a.js",
    "revision": "9ed461b046f3590b1e818461cf3a9aea"
  },
  {
    "url": "assets/js/52.f29a98bd.js",
    "revision": "bc66c5f0ccbb949ef7de105994e277a7"
  },
  {
    "url": "assets/js/53.bdcb5a68.js",
    "revision": "f7e061392aa63aaaf8efa95b60dbb33c"
  },
  {
    "url": "assets/js/54.b7c133ef.js",
    "revision": "7f2b38adb10da111c469d855e60f7573"
  },
  {
    "url": "assets/js/55.668df143.js",
    "revision": "0fb3809adb2d30fb565321c3571d81d3"
  },
  {
    "url": "assets/js/56.9805d36a.js",
    "revision": "4077698d50bd1c3d8134e63d7cb93f6c"
  },
  {
    "url": "assets/js/57.95a56ab8.js",
    "revision": "203058a75d1b11e3a38994403f624b9d"
  },
  {
    "url": "assets/js/58.f5d11fc0.js",
    "revision": "0424adead9d0532986222265fdcc571c"
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
    "url": "assets/js/8.f847aa7a.js",
    "revision": "b1c9ab125c33a057eeea93c7754eadef"
  },
  {
    "url": "assets/js/9.a1c872e2.js",
    "revision": "6863ca35da3aa52d6626237bba227dfd"
  },
  {
    "url": "assets/js/app.7199f03a.js",
    "revision": "1f7295bc048f61af92398af387b4484a"
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
    "revision": "b7228b8b04858f237d2f30b91d5ae58f"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "bf9458a14a024fb91647136d6803b4fc"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "7f88bea642dbeb7b49958825d9e9dcf4"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "fbb077b48837a2e083e3ad9abd34fd8f"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "95e6da7169ee1903ca1b97f6394c2019"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "cccd27d01a7ecb1d0a18dfa1e176efd0"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "b78fd1c76c4ee0bb0f74206d22b9439b"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "c240ea420773df861b0684b84bc00062"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "18346c6062acdef10a94d8fe038ab770"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "56640253a3b4ee52b200b77bfb017e5e"
  },
  {
    "url": "engineering/babel插件机制.png",
    "revision": "6b923d969f8b4f8e926524c3ad98ced4"
  },
  {
    "url": "engineering/es6_module.png",
    "revision": "25d262c851c55392bbb8755cbe833e40"
  },
  {
    "url": "engineering/eslint_env.png",
    "revision": "b8503d3ecfdf90aabcc63f9742d67ddb"
  },
  {
    "url": "engineering/generator.png",
    "revision": "3490cd0888918f574af11fcaf428d51d"
  },
  {
    "url": "engineering/gulp1.png",
    "revision": "6492ebb85fa4b54186539ff7c426654b"
  },
  {
    "url": "engineering/rollup/rollup.html",
    "revision": "13dce2bc3958cca5ebb191c45b3d883a"
  },
  {
    "url": "engineering/webpack_bundle.png",
    "revision": "b96abec0f8eb1e3033ddd4934469d109"
  },
  {
    "url": "engineering/webpack_static.png",
    "revision": "bfe07da8729979e72ddb6a6129497574"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "8fe9be12df3e52bbe4fae9d3004a12b1"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "a8d41b16f7ddfd5918bf30fff6e6a100"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "90e68523391182f441c63537a6fa73a5"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "6d966a9ccca968ba85c2625a08433e5e"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "3d24cc7bc77f2314cad82b30ed828a57"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "f5ee047231431eb0c419a65447fba822"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "023c397405681f4f1a89d803c2c3835b"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "ecf72589f098a601b74675e24ca4e665"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "6a1c9a9c0a3016fc70eadef4200fc9b8"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "5a660787d345f189edd9a35ee816f780"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "69812161cdce0d53c1519fef346a48bb"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "4f2303927afe3cd47260b4a3bc835398"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "e0b92e5ebf45109908f3c25ac710f601"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "613857d16fb754fde0c45c9b5aa6db25"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "a5485df4e40469b41dc1d356c016c710"
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
    "revision": "b1d378c60b0851ba0451192934b15547"
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
    "revision": "b66935cfa7483974eb4e58a1841b1f7e"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "a1e322beebeed23bbe99442afdaf7747"
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
    "revision": "2ed1e64c9d30ba22d2b5b5b3525a3c26"
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
    "url": "syntax&API/ES语法/ECMAScript 2015 语法.html",
    "revision": "240a16c8eba48231f59aac45dccdd466"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "fc436fccf865c6008381c0c2823f0a81"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "4c696020e683cc2dc029e0cda47f2986"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "93374427e28bc7b2335580559749032c"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "c73e68d450e643de8b89d91807e6583a"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "7a31fcebbfa4b7f641b1c9f52856ff74"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "b2fbcd5d53e94b9ecd3d2faded69e441"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "d902edbd549171f48db8288af84f88d4"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "db503197cd8293599bffa57c263d8c71"
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
    "revision": "76129a2741b7216f44d249ea19f0ab41"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "b9071f3b64a30fdd130af2b099a007ac"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "b06f1620a32ed26a794f4a2d45d8c6b0"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "4064bd985f5f9a459dd73ab337123053"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "f0c8dc4e2ccb766094410276f30daab3"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "e199ffe790faedba5b8debde4da61fc1"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "855581fb22bef7ad4d5bbaeaf1b33621"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "5c44ef16859af55221866b32b7efa6ac"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "522666f0019bd53386c37364a430e35a"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "64560bbb0f9af051cd225cd5cfdb3274"
  },
  {
    "url": "syntax&API/值类型.png",
    "revision": "3adc04db710d3033b60b9a3ac7224d2c"
  },
  {
    "url": "syntax&API/引用类型.png",
    "revision": "f7efb8b9e7f85357a859aed31094b505"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "8c696dbe4067532ffd7d038b5a85df21"
  },
  {
    "url": "typescript.svg",
    "revision": "25c5cb938602cdaae00edc225688bcb1"
  },
  {
    "url": "whatisfe.svg",
    "revision": "fa8efc3bb002e4dee9d9383d3ba887de"
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
