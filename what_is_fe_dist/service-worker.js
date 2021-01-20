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
    "revision": "aaf5e3fad09c5301c80e1ece42c6786c"
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
    "url": "assets/js/11.ba4c0b82.js",
    "revision": "24a27f41f7e752a796a75fd5f451b062"
  },
  {
    "url": "assets/js/12.48e62fc1.js",
    "revision": "0f5ee4afb7ccdc1a372ccf151a274b7b"
  },
  {
    "url": "assets/js/13.b979ab1b.js",
    "revision": "c3a91b55fe3275a2254afb114af611bb"
  },
  {
    "url": "assets/js/14.55c61acc.js",
    "revision": "95bf054959d6ab029b4ea60e19694666"
  },
  {
    "url": "assets/js/15.e9a85e67.js",
    "revision": "c59c6919491db01067b0f98a28a95f27"
  },
  {
    "url": "assets/js/16.2355070b.js",
    "revision": "ab47dc250579142bffd966ae9ad491e7"
  },
  {
    "url": "assets/js/17.9dae5907.js",
    "revision": "6e5d5ed5f1248a6adb7cd91e817a735c"
  },
  {
    "url": "assets/js/18.33482e40.js",
    "revision": "d3d42ee26ddb17562a164bad6e3f6846"
  },
  {
    "url": "assets/js/19.c0b89ba1.js",
    "revision": "82a2237195a2769466c473e94cc8059f"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.7b36073c.js",
    "revision": "9de2935449cd6d6b7df48837fc69945c"
  },
  {
    "url": "assets/js/21.a65e9615.js",
    "revision": "e49d67e98526d1b5f9e399ab40d0c08e"
  },
  {
    "url": "assets/js/22.910496c8.js",
    "revision": "71f8cc1d6a10daa312dfd9755aabc05f"
  },
  {
    "url": "assets/js/23.6504443a.js",
    "revision": "5c27af64d96e95621a45852798a644a1"
  },
  {
    "url": "assets/js/24.1cc39488.js",
    "revision": "055dda35ab1d0a62bb26a787b39101ec"
  },
  {
    "url": "assets/js/25.ef85fa64.js",
    "revision": "83e63983e3cc531d1c4072e184ee66f1"
  },
  {
    "url": "assets/js/26.dc745528.js",
    "revision": "375716c8e64e94410f720f92b0da7cbe"
  },
  {
    "url": "assets/js/27.1a479f35.js",
    "revision": "d80b9ecb6ebdf51718866e7edf9408a5"
  },
  {
    "url": "assets/js/28.3d4aa3bc.js",
    "revision": "cc9246da1812e1fe7a760c44bd8deb81"
  },
  {
    "url": "assets/js/29.bb450fe1.js",
    "revision": "a76e544336753d2926e731af8d8aa10b"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.d7197eb2.js",
    "revision": "9ebb03b19dde3fe9b6322f4c7e7ac6fd"
  },
  {
    "url": "assets/js/31.7dc8e5b6.js",
    "revision": "514fc1e5308fc676065bf0ff4d517f99"
  },
  {
    "url": "assets/js/32.0870b2dc.js",
    "revision": "ea7402930bb2d639f5e55e051c6dddeb"
  },
  {
    "url": "assets/js/33.997ccc63.js",
    "revision": "1108e3e31ed6b000cc004eb675144464"
  },
  {
    "url": "assets/js/34.c04eca9a.js",
    "revision": "1f01d36a1f298923e0435c577586d3bd"
  },
  {
    "url": "assets/js/35.e32caaa9.js",
    "revision": "64b956bdd281ce420ba35d23f74b95be"
  },
  {
    "url": "assets/js/36.12e52518.js",
    "revision": "c938e31faf67a3c4d8d6d00c33d9b014"
  },
  {
    "url": "assets/js/37.8b2c246f.js",
    "revision": "a5e889e63594e164db4e9f49ad00f51d"
  },
  {
    "url": "assets/js/38.5f4ea6fd.js",
    "revision": "d29e0a78146a94a5aff9d6f27a82e246"
  },
  {
    "url": "assets/js/39.1855d6ff.js",
    "revision": "97dcf27828cdc6a7b92e3e0a1beb2c9e"
  },
  {
    "url": "assets/js/4.7a959686.js",
    "revision": "76f264bf6748ca0e2d51a37b75bb788d"
  },
  {
    "url": "assets/js/40.592df7d1.js",
    "revision": "04db28f9784e7dc39359bc926151a8ea"
  },
  {
    "url": "assets/js/41.ddebbf1d.js",
    "revision": "58e9fc886f5b582f9ba47161d70e5abc"
  },
  {
    "url": "assets/js/42.4bb6a70f.js",
    "revision": "089b3d4b413e0c34164490a795ac4c1c"
  },
  {
    "url": "assets/js/43.2f1085f7.js",
    "revision": "62b5a0a13a218a1bb0f5c389444653ae"
  },
  {
    "url": "assets/js/44.93e95322.js",
    "revision": "4ebbff860b258b2cc9e01b51a39cdb3a"
  },
  {
    "url": "assets/js/45.d509ff9f.js",
    "revision": "8877c409599448352cd3099744216fb7"
  },
  {
    "url": "assets/js/46.93c539eb.js",
    "revision": "15052aa40fc3c5b08c81682911a8b59d"
  },
  {
    "url": "assets/js/47.8f16f697.js",
    "revision": "a7e97e8953a391445e0d7c7c9748fb94"
  },
  {
    "url": "assets/js/48.ca788061.js",
    "revision": "0569b59efb01ee7d39b10063073251fe"
  },
  {
    "url": "assets/js/49.4ea60280.js",
    "revision": "8dd40268031626d5b3465d3377b475b7"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.44ab6439.js",
    "revision": "d8c4662917cb685f83ea867de5faff7d"
  },
  {
    "url": "assets/js/51.0597ce31.js",
    "revision": "c8e8a904f34ac7cb30719f2ca3b3e396"
  },
  {
    "url": "assets/js/52.45cedec5.js",
    "revision": "5ef3fe1b612481ea9faa952648258ea1"
  },
  {
    "url": "assets/js/53.db94a888.js",
    "revision": "d19444dc0eb32bcae6b7c23ce22bcf50"
  },
  {
    "url": "assets/js/54.3e31aae7.js",
    "revision": "b5993b03f3fb0c98856d19b478396a6d"
  },
  {
    "url": "assets/js/55.d1caba4b.js",
    "revision": "c39484581ccb39999cb7debe33b76672"
  },
  {
    "url": "assets/js/56.16210700.js",
    "revision": "255175323cbbb551ddd0350570f880a5"
  },
  {
    "url": "assets/js/57.1d665a88.js",
    "revision": "c96cdf3418e7ab1a33c2f14138e47f39"
  },
  {
    "url": "assets/js/58.07aa5bd3.js",
    "revision": "7b8aa012b44f01fa25e867d7a52c7e0b"
  },
  {
    "url": "assets/js/59.ec0a8609.js",
    "revision": "d71e57d91f738325bef69e772bc0d310"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.e331ec07.js",
    "revision": "1e14f7fa722513cd02fed6bdc27a0649"
  },
  {
    "url": "assets/js/61.2a7cd9aa.js",
    "revision": "0921a1aebac11ff89ac65bfe768e596b"
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
    "url": "assets/js/app.8545703d.js",
    "revision": "06e9ab599274d6e916d8f6e52c0aab1d"
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
    "url": "development-process/单元测试/Jest.html",
    "revision": "34990f2ae17d491ac27c06a55fab3945"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "7ece334dadb1133c4a7e9a06f49d0970"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "cb0585a7e92b0b3bb8314c8ceb7a562e"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "d5fe676c834a3d3d57d21d66beeb4dba"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "50c020c767c96c9c2e69b9766636a372"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "47cb1fd03fe266cfcc973e7caf612287"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "37aab30a7de36437df117f647e6ef4df"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "43e8683f3d5ef6294825f49f188877d0"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "d110fabfe0c4ebc93d1269b9d387b502"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "7c7cded606b434cb67d4823fc8f825bc"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "7737274b6e2ab08cf8673fb8cc4508bf"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "d9744761db6c232cc7cecfe467d23907"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "c4002dd6661c0421090bb79d31d22368"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "7242a1b13b23eef132029bcb3ddb01d7"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "2eec8c1e9cb87ddd037791d809f661fb"
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
    "revision": "5462398065b3f7ee92b5cd6a84b6a11c"
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
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "558d3b088a51f017d817a2e8a18536c3"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "e11309a87d37b177b391c718c65c767e"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "a8756f40b3efe67f6ebf53b1e5b29f56"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "d90dbfa1fff739489c85563a0ef1c464"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "c5e55cd6d866371d50d6411b6b0c9dba"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "af65bc834672b4c58dc63248d6635d76"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "3d3c7a1ddbf8e633dcd37c3f62403853"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "9a2493b4112da73c4eff58ab3e32060d"
  },
  {
    "url": "framework/React/index.html",
    "revision": "4aa87bdb9e6c32a8b7411ba4cb027616"
  },
  {
    "url": "framework/sub_pub.png",
    "revision": "521f365eff009e7bc89489806599ca85"
  },
  {
    "url": "framework/Vue/Virtual DOM 介绍以及 Snabbdom 源码解析.html",
    "revision": "c85c9db79a5b14fc86bba1ee6acc7040"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "3617a4f9c2cb39dbd0118a8bc45f96a3"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "e1498bff42b28146cc0e2aa0dd604c82"
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
    "revision": "2f1b1dbea8f6c377937c829d7a7d0bef"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "5dcd16f7307b30f12f23eec2cd24f994"
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
    "url": "running-monitoring/标记清除.png",
    "revision": "a637c4165abcff298ca6a93b08b28e48"
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
    "url": "running-monitoring/可达对象1.png",
    "revision": "023bddee4114756a6df1cad98376bad6"
  },
  {
    "url": "running-monitoring/可达对象2.png",
    "revision": "7c610fa7b93d0cec3a350a3d5e0130ee"
  },
  {
    "url": "running-monitoring/内存泄露.png",
    "revision": "c5c839ac80e598d535396ed520149066"
  },
  {
    "url": "running-monitoring/增量标记.png",
    "revision": "2e529785f27e058d88a7c604c0dbdf1f"
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
    "url": "running-monitoring/v8垃圾回收.png",
    "revision": "f7d82fe1d65723818c1d49f4ff4cf594"
  },
  {
    "url": "running-monitoring/v8内存分配.png",
    "revision": "dfd6c97b165d5bbd6c51771e8595a97b"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "d394e95904fdc15b02370c26d8d6addb"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "4601d983d182c9cf6a0f4d7a8c71f064"
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
    "url": "syntax&API/引用类型.png",
    "revision": "f7efb8b9e7f85357a859aed31094b505"
  },
  {
    "url": "syntax&API/值类型.png",
    "revision": "3adc04db710d3033b60b9a3ac7224d2c"
  },
  {
    "url": "syntax&API/async1.png",
    "revision": "da5c0e3ed18fef056c4933599ead2c7c"
  },
  {
    "url": "syntax&API/CSS/css单位中px和em,rem的区别.html",
    "revision": "7abcb42c3ac5cdfedf8d4f01459e19af"
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
    "revision": "a74d1ecca4b95cdb45205b32ec8c0eb9"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "9b76560b29a43a7fcef3343e91663001"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "0d0453d97aecdb29183f3970d4093a76"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "88eac8c30661abea8f604acfd9d2187b"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "ae10ba6e836a04d75ea205796088fda2"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "0c73f5f65fa0cc9b1552e60c3c336779"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "f625f0e33d50b4d6619396adc4cf78a5"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "b774cd2bc253c09a4f1f4b50a94fa35d"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "3e80aac7f01c82e0745e450368b23d61"
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
    "revision": "60516829f57e6da3ec88933d7bb8bb02"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "68ac1fb142591244850c394fffc22d49"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "0cc6b19f344cf086b65e73aa1faf3cac"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "9b6bc3085b77c0f2da5e501bf8c889c3"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "4378b579e870a77abb93851c64f77913"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "9881f1feca9b100326a7c9bd89425146"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "52819cadd942d5dec89eb68f701b4463"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "2b818d945c59e986b10bd9b55d83beda"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "929b8cd924058056c218f3d2fd2a42de"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "31bb948838b9c5c5ffd4d8ac985aa458"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "b8a4906bfc106460deeb8aa14aece344"
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
