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
    "revision": "5c08eeb649614d945eac694dc5486978"
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
    "url": "assets/js/10.5dc71f60.js",
    "revision": "44d36421562ff3a0dd870d4f5a28263c"
  },
  {
    "url": "assets/js/11.6cec0877.js",
    "revision": "61f7948f9336d5465140777d51215173"
  },
  {
    "url": "assets/js/12.350365dd.js",
    "revision": "1393c78f9bbb76a3b7a6e1f5d4f8479c"
  },
  {
    "url": "assets/js/13.37443924.js",
    "revision": "ba1b917e2eb0900f768d8577bc97d388"
  },
  {
    "url": "assets/js/14.5bd50145.js",
    "revision": "5b8840ea33ed81ba5c23c140bdb19596"
  },
  {
    "url": "assets/js/15.61d3cd46.js",
    "revision": "18f72631933fcee44ef5ffcae8a47f0f"
  },
  {
    "url": "assets/js/16.3b97c20b.js",
    "revision": "8bb2fb64ba5826add351abe8323cce01"
  },
  {
    "url": "assets/js/17.9dae5907.js",
    "revision": "6e5d5ed5f1248a6adb7cd91e817a735c"
  },
  {
    "url": "assets/js/18.183c1e46.js",
    "revision": "297c4ae8596c0669c8cdfb5c9ea2f953"
  },
  {
    "url": "assets/js/19.9ee4979c.js",
    "revision": "99194d88161933aa94e96ede5ac6b63c"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.0c181141.js",
    "revision": "136d0985e8aad82dfd3cd24dd4441976"
  },
  {
    "url": "assets/js/21.d538a36e.js",
    "revision": "2e8d8cf4e7c7c3b1a2ad7dfb39b0df1a"
  },
  {
    "url": "assets/js/22.40f351c5.js",
    "revision": "83b89f63d5a9f4709abaeb4f2ece30bb"
  },
  {
    "url": "assets/js/23.a3837d19.js",
    "revision": "b6d8bb00bb180c6696b16ef9d1edb53d"
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
    "url": "assets/js/26.4372e7bf.js",
    "revision": "379f9d27dac0ec71f3f4a6ca2bafc651"
  },
  {
    "url": "assets/js/27.7028d704.js",
    "revision": "38149b4878550866ba43821bf54a2acc"
  },
  {
    "url": "assets/js/28.2a857eee.js",
    "revision": "0b69f661e112bde36f1d35ac0fa89ccb"
  },
  {
    "url": "assets/js/29.2b432598.js",
    "revision": "7b21fbabc1a822d70f4f05c621ab28f7"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.b88d42be.js",
    "revision": "2481447c9162d9909ebff2bfb49fc630"
  },
  {
    "url": "assets/js/31.ebe657e4.js",
    "revision": "c68f9f22821e961c2edf62bb68f71b4b"
  },
  {
    "url": "assets/js/32.54888d62.js",
    "revision": "b7aff95a433c5f155f8851c2194f3ec3"
  },
  {
    "url": "assets/js/33.07141a36.js",
    "revision": "af28df326445f009b03bb136818ef68d"
  },
  {
    "url": "assets/js/34.de2f02a5.js",
    "revision": "63562c931ee5c4644d5b3288a36d5ea7"
  },
  {
    "url": "assets/js/35.63a3005c.js",
    "revision": "bed5bb9169788b7cd2268dc3bcf5281c"
  },
  {
    "url": "assets/js/36.020a84ed.js",
    "revision": "c7bc926bd9555a394a0b29446e72bac8"
  },
  {
    "url": "assets/js/37.9bda99f0.js",
    "revision": "98e097ecf43c3facc3effa70558bbc67"
  },
  {
    "url": "assets/js/38.c032796e.js",
    "revision": "234b0e5069376f6d13746c7b3f3ca50a"
  },
  {
    "url": "assets/js/39.e26b24da.js",
    "revision": "ac04849fdb2e95dba1ee1100bdda5d0b"
  },
  {
    "url": "assets/js/4.fcd40962.js",
    "revision": "598fec0eb90bcc4270392341b0527b50"
  },
  {
    "url": "assets/js/40.ae7da68e.js",
    "revision": "f7674e410bc8b58bbf7a7bcb9b514abd"
  },
  {
    "url": "assets/js/41.ec36732f.js",
    "revision": "ff1570d6dd40026a66f5cb955a2b87f8"
  },
  {
    "url": "assets/js/42.477c2080.js",
    "revision": "e5d3e5cd87affbeb14282fbf3885d3f2"
  },
  {
    "url": "assets/js/43.f354d3d1.js",
    "revision": "1a7b90f112b8ee72893b4e2ab05d2eca"
  },
  {
    "url": "assets/js/44.ca1046d3.js",
    "revision": "4106c7a2bb07380d77e3a06dff9dcb32"
  },
  {
    "url": "assets/js/45.d6336cce.js",
    "revision": "4c3bd9a6424341d798673cea7fcb08e6"
  },
  {
    "url": "assets/js/46.5ecd7eb3.js",
    "revision": "758fe4de8e798d417adcfaaff3ec675c"
  },
  {
    "url": "assets/js/47.597e8f52.js",
    "revision": "553f35bb356d7de476fbc53c64b690f6"
  },
  {
    "url": "assets/js/48.1133516d.js",
    "revision": "e92b1fb000342335feecc5f627f6a5d8"
  },
  {
    "url": "assets/js/49.570874f2.js",
    "revision": "f59527b8140dab01fca18decc6ef8a12"
  },
  {
    "url": "assets/js/5.6681de7a.js",
    "revision": "59f791ba4736484e2088b3db53f2dba1"
  },
  {
    "url": "assets/js/50.bb77a96c.js",
    "revision": "159318015bdf166bf348e5b9daa42d47"
  },
  {
    "url": "assets/js/51.4a3731e7.js",
    "revision": "d859ee1017723a4b89531fcafce3dd29"
  },
  {
    "url": "assets/js/52.5a2afb0c.js",
    "revision": "925bd65a8d984edaa33383f2a15ae395"
  },
  {
    "url": "assets/js/53.806ed42e.js",
    "revision": "8602f0f91c4e6cf9e1278c6325d94482"
  },
  {
    "url": "assets/js/54.b2153532.js",
    "revision": "aba08b83334b617f89b9e0b14b7a39f4"
  },
  {
    "url": "assets/js/55.7a0cdcdd.js",
    "revision": "644c216812241a1d35d55e64751c2250"
  },
  {
    "url": "assets/js/56.8ea1fabe.js",
    "revision": "2f9489f2d374297562dccede2b916fd6"
  },
  {
    "url": "assets/js/57.c0dc9682.js",
    "revision": "880b1f1c3869de1da7c206c8070fcc89"
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
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.d7c26928.js",
    "revision": "2dff57603fff7fc1617308218f5f9e94"
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
    "revision": "088d66c36df169584c310fead7ea9963"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "5108bb9acb3323df6bb701c958d21313"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "771c736686d424fac29245fa272fcef4"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "332b7acf33cb3c4e3f936826b2455ca3"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "d3e2f838cdf8cee3df20c8511ff1d618"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "7e580baf638123938a121fdecbbf0b25"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "c4f6a61349f2dcc2dc1f68a662371ad2"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "a0e4db9f0d8a024eb23cd3e1ad73e911"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "39a42a4fe43a8c3acb43676dd6b24a6f"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "944203b9a149a62d614b4707f1f043f7"
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
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "6f19d990fd8c80904c8a429d99756049"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "e6473932da1045fec08711ba68e6e278"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "18ae5f73b6e5635f0dc9537db2377986"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "0de04f0f6507723c33921962eef0a976"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "bf93b2706582f27ca3c4f92732cf3a9f"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "13d353ceace15a2969d42103d620fb55"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "e7bca16fc440261ecf554f5d458e2322"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "f165f45ac386970b661412dad03cb657"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "9d0eb1fc15c9ca3274ae1c00af3ca87e"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "7bc936fce4ae2d3a3e58dfe44b5d55e2"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "1fb820e0aac4915de6a80611e690970c"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "879822df4b204e041c26f73a81f53066"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "a71b9883599538eefeec932c9dee82a5"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "541197edd19d508629751ec485726b04"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "4d952a8793c378ec7ec78491a2d06cd8"
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
    "revision": "11697b4b30848ed4bd372851b6899734"
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
    "revision": "c5c186f06bf706fbd8a1d1e5229d831b"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "60f9ae88e1ea0b9a16d3a51c44c5c768"
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
    "revision": "65b2b88889e8fa67a106928e47067609"
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
    "revision": "7d04be7da5eb3166167c67c96b3626d1"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "498f9fa006d4e05614d5c37ded239881"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "40401f408925a86db94d0117915e2bd2"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "5cefb596c769520537ec2ac31badab40"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "ee91fcd54333b99339c6bec08accc52b"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "d7c0932a811344af697cc308ee18840a"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "e73bf942d0181d51ce5f8e50e38de2b1"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "72704df5153548a7eabcf4e18a1b56ac"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "8a4e53d0c8f7ed2dc6b4cc68e9cf9e30"
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
    "revision": "5014e78f668872c61d853e4fbcef383c"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "47a83a79d867738698c59216d1defefe"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "c35ba8b69d209d9d7f42ee87cd487fdd"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "0f4a9e90fa82d92e74c180cf70f72a17"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "092cd95e139d6ccfcb4794b47adef7fa"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "1dfac316a5e93bb7ac8f418d39a90ce7"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "56c040663a41a6466691d942b2d5b2b0"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "7ab16313c4ddbbdab7e92fbbf8e01103"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "892b86f677ac10c21ce6519241637f2f"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "7fdac8e5aacf6668108c9362a6fb20c8"
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
    "revision": "79faff21ba2c08fb580d147836914ba7"
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
