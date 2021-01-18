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
    "revision": "48328c17478ece62e55b5164ba63f898"
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
    "url": "assets/js/12.48e62fc1.js",
    "revision": "0f5ee4afb7ccdc1a372ccf151a274b7b"
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
    "url": "assets/js/15.b02c7ad3.js",
    "revision": "f8e464a36166ed2db6b81d211c8a4323"
  },
  {
    "url": "assets/js/16.4c707614.js",
    "revision": "f4aa40421f899c9defb92998e3fdd3e2"
  },
  {
    "url": "assets/js/17.9dae5907.js",
    "revision": "6e5d5ed5f1248a6adb7cd91e817a735c"
  },
  {
    "url": "assets/js/18.77de363b.js",
    "revision": "fe8523d57cc1771a2e045353d6245207"
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
    "url": "assets/js/20.5e7a00ff.js",
    "revision": "008581a598df155e6612babe635dd8d5"
  },
  {
    "url": "assets/js/21.a65e9615.js",
    "revision": "e49d67e98526d1b5f9e399ab40d0c08e"
  },
  {
    "url": "assets/js/22.02219807.js",
    "revision": "4bcac41ef079993ea0b86932648ec4cb"
  },
  {
    "url": "assets/js/23.455e47b6.js",
    "revision": "131335863ca6ea3cc68deb424a1bd03a"
  },
  {
    "url": "assets/js/24.1cc39488.js",
    "revision": "055dda35ab1d0a62bb26a787b39101ec"
  },
  {
    "url": "assets/js/25.2d6a99bb.js",
    "revision": "298276f2d7987eaff9483eabbf1153f6"
  },
  {
    "url": "assets/js/26.0cfbdff5.js",
    "revision": "51a2cad077b5b720fe2e3ac1add57c2b"
  },
  {
    "url": "assets/js/27.895c7084.js",
    "revision": "8ebc8d7e8c316352d963d33e1e83cfb5"
  },
  {
    "url": "assets/js/28.7fc5f2a7.js",
    "revision": "0f14ebcd1f88ff7a21f939b1bc843296"
  },
  {
    "url": "assets/js/29.f914a730.js",
    "revision": "11fa4f78ae6ed632a90d44948765e31a"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.bd3e0843.js",
    "revision": "5b75ea7c66a44b0440f9ce13b58c0c37"
  },
  {
    "url": "assets/js/31.67bfa0e9.js",
    "revision": "b21ad38c0eff6376f7c0bd25bba3a0a3"
  },
  {
    "url": "assets/js/32.04e8cba2.js",
    "revision": "e0d01e8082dda0bc159178a2c41e6908"
  },
  {
    "url": "assets/js/33.2b9dd082.js",
    "revision": "4ec3e6539ac496d07b5a79a006159691"
  },
  {
    "url": "assets/js/34.cce895e0.js",
    "revision": "737ec61c18b5378556fe8286e2fafc06"
  },
  {
    "url": "assets/js/35.adbd3087.js",
    "revision": "daf7efb5347e96b62eaa2707db3e2d7e"
  },
  {
    "url": "assets/js/36.e5abf0c8.js",
    "revision": "cbdad458241065762cea321f7138538a"
  },
  {
    "url": "assets/js/37.d5a3a6fa.js",
    "revision": "6dc07ad776ddbf1c8503e63e09d95502"
  },
  {
    "url": "assets/js/38.a5801709.js",
    "revision": "b26267c489df4de1aeebc3ddf7f8efea"
  },
  {
    "url": "assets/js/39.4475a262.js",
    "revision": "b1a2ed4ab6ebe0aebaff6bcbf613f246"
  },
  {
    "url": "assets/js/4.e089175f.js",
    "revision": "d7f94a7e99a22b737154b6e60f7062d1"
  },
  {
    "url": "assets/js/40.e6a7b64d.js",
    "revision": "ed04c1974f3c55b6c0acef609672dd08"
  },
  {
    "url": "assets/js/41.6691c17f.js",
    "revision": "849510a1515446fbde99a8954af572c9"
  },
  {
    "url": "assets/js/42.29e7e86f.js",
    "revision": "aafc6d3973d38875fcb215c9e9554648"
  },
  {
    "url": "assets/js/43.edb3ea45.js",
    "revision": "10aac002add9ed518bcf91b7327e97b1"
  },
  {
    "url": "assets/js/44.3e0fb924.js",
    "revision": "8aefe143c8e74556bef61238e60107a8"
  },
  {
    "url": "assets/js/45.c76c5643.js",
    "revision": "6f566aa734366b9a3a72701b292be1ab"
  },
  {
    "url": "assets/js/46.eff1d3b7.js",
    "revision": "3a9fcc65b75a8ac91cff209eaa0b3c16"
  },
  {
    "url": "assets/js/47.37816c76.js",
    "revision": "f9ac871dc020fdbba80f3c6a6974d53d"
  },
  {
    "url": "assets/js/48.019c2516.js",
    "revision": "82c2085bf670e886f9516fc2785fee63"
  },
  {
    "url": "assets/js/49.e86be80d.js",
    "revision": "846cac46b739e4ad21d9a5ae64e79dec"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.b323a160.js",
    "revision": "e1df25ca7d588141d53f32f1631e290c"
  },
  {
    "url": "assets/js/51.67d7e69d.js",
    "revision": "5460e0b722889176db4a34181d3f72cc"
  },
  {
    "url": "assets/js/52.f3b55d0f.js",
    "revision": "d396d9a722ecddb47ca4e9aac25ce720"
  },
  {
    "url": "assets/js/53.239ec9a0.js",
    "revision": "ff05f0aa4bcb9b28a6683cc2e3cc0ce1"
  },
  {
    "url": "assets/js/54.3748bb36.js",
    "revision": "b5cd9d04971257db63c4bef6399c4e05"
  },
  {
    "url": "assets/js/55.80690103.js",
    "revision": "2bcc63ce95072655a1b698cc94891597"
  },
  {
    "url": "assets/js/56.cb9330bb.js",
    "revision": "bfa4738dae15b4b111b8999b60fc289d"
  },
  {
    "url": "assets/js/57.033c3bde.js",
    "revision": "83110eafce5a08eb513ced0e37c9f646"
  },
  {
    "url": "assets/js/58.4a625f40.js",
    "revision": "0a17a0b024549d20b64d31e92a952a62"
  },
  {
    "url": "assets/js/59.5083ddc8.js",
    "revision": "58c373c9d45d39e3fec7faf309f3d03d"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.e6f4bdba.js",
    "revision": "ae2b34742ac529f5083493157f040a9e"
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
    "url": "assets/js/app.2f1d061d.js",
    "revision": "e5d50dc53f4f565a01f5cac5cfcd7285"
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
    "revision": "fdf789ddb226b8a61eec5f0e0e9dbc72"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "2d843f24d92e6af753ab3251bf8b21a2"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "99ef349c4eab38e882041f45714ec2a2"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "7a2a2621d15e760036003a55ae69abfe"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "ba0ccfb0a77f1b8d2357f3cdd17e1dbc"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "4980a99c997b3e1933757d9901dc64b4"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "b28fa7bfcb1dbb4815140fbfc91e4385"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "ee5ed311b4ff9cf8c859286bd45cf881"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "ece7e456636f3a44551c819abc4ddde6"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "63d9a234717f740e8d4dcc9de6e29b55"
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
    "revision": "b86cbb29f8ccab290999357fc319457c"
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
    "revision": "f47ab8fc3bbb9c28bb7783abd9407885"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "b71c23fcc547dc3e4950f4128e2e354d"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "e4e100dcd33c23e29b4685003c84a876"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "c66479c30824e3e1a06fd9c517895a3c"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "8c05e3699eb623591f5f3a8e78411a72"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "0a2c1cb114a18cad8a4498c26d1ebef1"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "1cef864d62c694b62f80902ee56d6a40"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "e896e552c336d2fdcf5f8b9c4a122786"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "91d963c36578b6684b9fb38fddd0d614"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "4dca45b06875732ec73b3d692e02a980"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "bcc2ffcb5a3ea2640d8bd87ea8d57018"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "002770258e0dfac11a56e604e726e3bc"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "7b9e66fc92b7ed56796d58cd41aa482c"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "664daaf30ef746d71fa0f5d36739251f"
  },
  {
    "url": "framework/sub_pub.png",
    "revision": "521f365eff009e7bc89489806599ca85"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "0e4c58972dc2dc6b70e869fcd0980c92"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "1694818fb9c9533b1970444d542316da"
  },
  {
    "url": "framework/Vue响应式.png",
    "revision": "e3108991886e84a3fef77643aa6b3118"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "6bc769f5bd6ac22b2c1b2293ee954c9f"
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
    "revision": "7187db4253cbdf13e546ed6e3381cd80"
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
    "revision": "4a5f493d7ec04d25c62f71e85510c4c1"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "d22e0463a902506c11004616f1bf196e"
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
    "revision": "2fa1656fbe87c1aebe7e05e952397938"
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
    "revision": "400e74fdc5d3517bd36a6b87e53d3643"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "86f58108b7b4e532d4e82c00f8ee70be"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "a641faea09a69f5f4ec82e3e13a82b1a"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "7d87b58b8df6c2ab994a2cb27a62bc9d"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "0495564b1035161b169d0a8e42cda964"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "42968cc519b4d4e9e15ae71ce865ed65"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "60bf56c4f2ba536882b1e998b5f69f32"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "613243e25ab604c8de8c90585b509d8d"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "af11a5f2a97cac4bdf16400d420248f5"
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
    "revision": "fcdb7fdb138e91bf3c1ad801055a598b"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "8fd76062cac2f8689c111d8ccddaf50f"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "40621e5ca90ec8d1897da609c029a746"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "27c62c01bc63e1f1bde7bce5f3bb91fc"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "ab664a19250a833e4c8f7c5a314431f8"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "f6903b5dfe3d3c0539f0f6f9bbf47e2e"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "ce1c0fc01b332d266e57c760a315493d"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "b207a34e6d604b5d689a64b8b8e0ff7a"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "21ea22f97f2af20f3d1ad4d53f53ba36"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "1188696f2de3f243b94b1b34cda18186"
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
    "revision": "e5d46e30c58fdc65b6a924d0c78662e4"
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
