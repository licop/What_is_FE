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
    "revision": "a2285e83fbce04d88bf07840172328b9"
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
    "url": "assets/js/11.6cec0877.js",
    "revision": "61f7948f9336d5465140777d51215173"
  },
  {
    "url": "assets/js/12.5b161d54.js",
    "revision": "ae034c58cf0a3902da27cfcdcd939c90"
  },
  {
    "url": "assets/js/13.277c050f.js",
    "revision": "7cc07b2deb4921cfc1ef35d48fb1e6db"
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
    "url": "assets/js/16.03b29a5f.js",
    "revision": "b13403bfc161ef7701e825f436c2c5d4"
  },
  {
    "url": "assets/js/17.7bdb8b53.js",
    "revision": "5dd3d18cd5eaf800387e69df006bb0b9"
  },
  {
    "url": "assets/js/18.815fc977.js",
    "revision": "cd1af7a2c9d9eec425dde49f7aad37f4"
  },
  {
    "url": "assets/js/19.acc4779c.js",
    "revision": "3dc957a7ab409ec482614e9d8bc60691"
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
    "url": "assets/js/21.ec742249.js",
    "revision": "aa8b7260eee7d4990e237d98f5be4494"
  },
  {
    "url": "assets/js/22.724fe8b1.js",
    "revision": "0a8112bc341da10b5c76521d2824534a"
  },
  {
    "url": "assets/js/23.455e47b6.js",
    "revision": "131335863ca6ea3cc68deb424a1bd03a"
  },
  {
    "url": "assets/js/24.79266300.js",
    "revision": "f81b556e8c9bb401151829d17d11b155"
  },
  {
    "url": "assets/js/25.f8103722.js",
    "revision": "81e2e0e4dec489e5a4848b877466c3a0"
  },
  {
    "url": "assets/js/26.63d02b2a.js",
    "revision": "c8311f96f371e2e60d856fefd96e4a4b"
  },
  {
    "url": "assets/js/27.1a479f35.js",
    "revision": "d80b9ecb6ebdf51718866e7edf9408a5"
  },
  {
    "url": "assets/js/28.7fc5f2a7.js",
    "revision": "0f14ebcd1f88ff7a21f939b1bc843296"
  },
  {
    "url": "assets/js/29.94271ae0.js",
    "revision": "826fa9bbdde17579860f7f81cb8a2bb3"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.84eaed92.js",
    "revision": "5f6c9d8421712290cdb68d5cb39a1d60"
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
    "url": "assets/js/33.a7ef4c15.js",
    "revision": "e520e2ca847cc2747f72c91fb7f36458"
  },
  {
    "url": "assets/js/34.55849da3.js",
    "revision": "7a478bcf5d398cb9e80ad0d70e43110f"
  },
  {
    "url": "assets/js/35.c5900b30.js",
    "revision": "87b3c7ec35840655bc9e3196002af586"
  },
  {
    "url": "assets/js/36.883d0a7d.js",
    "revision": "9ac505ea5f2679ebf0c847b07e5e67d2"
  },
  {
    "url": "assets/js/37.aa1821d3.js",
    "revision": "690c205cdcd2e42d21c8e199b551fd4e"
  },
  {
    "url": "assets/js/38.a5801709.js",
    "revision": "b26267c489df4de1aeebc3ddf7f8efea"
  },
  {
    "url": "assets/js/39.1e0f91c2.js",
    "revision": "e7831ecffec5374964c41cd6b16d79da"
  },
  {
    "url": "assets/js/4.e089175f.js",
    "revision": "d7f94a7e99a22b737154b6e60f7062d1"
  },
  {
    "url": "assets/js/40.988c987b.js",
    "revision": "6dc5c00fe5fbb296929bf938699a7636"
  },
  {
    "url": "assets/js/41.35d59dce.js",
    "revision": "2fccfaece6144818513d7ff1656e9ebc"
  },
  {
    "url": "assets/js/42.3106b10f.js",
    "revision": "2cc9bb56a3b43116fc8d219292f45c21"
  },
  {
    "url": "assets/js/43.0261f029.js",
    "revision": "f4dd8e657e9743bb0fe8a1b697aaa659"
  },
  {
    "url": "assets/js/44.e8365804.js",
    "revision": "c3bb908fff016def8d233706ef19e782"
  },
  {
    "url": "assets/js/45.475775aa.js",
    "revision": "a65671e10b335c1f2147bb2f70f09b1b"
  },
  {
    "url": "assets/js/46.eff1d3b7.js",
    "revision": "3a9fcc65b75a8ac91cff209eaa0b3c16"
  },
  {
    "url": "assets/js/47.82311ca2.js",
    "revision": "e58ac6e51da9608cbe2863a96575bb69"
  },
  {
    "url": "assets/js/48.7d3e4a2b.js",
    "revision": "973b3428654191bd2eeb7ab5cf263efa"
  },
  {
    "url": "assets/js/49.0f2a273a.js",
    "revision": "ada40048a1fffa7be972aead9a52569f"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.b9aadd89.js",
    "revision": "2be66f144a7fab254cf7702a2874af92"
  },
  {
    "url": "assets/js/51.7c271592.js",
    "revision": "b4505b15bc414c1563b12abcbef784a4"
  },
  {
    "url": "assets/js/52.e0c8fd3f.js",
    "revision": "a872f958fa764a5287900b3f1bad1bae"
  },
  {
    "url": "assets/js/53.0247b880.js",
    "revision": "6704fa2eba9c90502349b45a5669c250"
  },
  {
    "url": "assets/js/54.65c261f5.js",
    "revision": "35a0917e63829bdc5d2a63f2b441c4ad"
  },
  {
    "url": "assets/js/55.f2946d34.js",
    "revision": "cbd7d9202725c2254798cc1a02f9956f"
  },
  {
    "url": "assets/js/56.a4af5049.js",
    "revision": "593c612be118440838769bdee8065edb"
  },
  {
    "url": "assets/js/57.cd5e5cc7.js",
    "revision": "05eac2d0e8b15f44c97a0ada7003789e"
  },
  {
    "url": "assets/js/58.bd7a2e90.js",
    "revision": "3549f14b6f5168e460bd1b51c4916750"
  },
  {
    "url": "assets/js/59.192f28d9.js",
    "revision": "5c28138a2a4b3a639bef36098b905c51"
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
    "url": "assets/js/8.f847aa7a.js",
    "revision": "b1c9ab125c33a057eeea93c7754eadef"
  },
  {
    "url": "assets/js/9.a1c872e2.js",
    "revision": "6863ca35da3aa52d6626237bba227dfd"
  },
  {
    "url": "assets/js/app.2fdf45e7.js",
    "revision": "6e2b5fe98326e378bb15edcf65b30fbd"
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
    "revision": "2078f5581dc31eb66bb63adb22d9ba6b"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "e87b410d548f0847aa7a7a3ad42f2cc5"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "a771f4ac5f769fa9ad49e0b0ca31ec10"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "7d19447c0e7b9037d2c6a852f828a04e"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "4c395d8b029330e83f62c9f4aeac31a1"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "4c8a58859796c5996f14acd4866e553b"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "54df11110149f2aa0b68166c7bdc5e04"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "364e5f956b6aa2b16bc36e4032574b3b"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "092266493eb08848c0871ccf0f8020ae"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "1f2d677768f81867eb2d329e7d7ffc57"
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
    "revision": "4a719205329dd92ef94ac21cb01954de"
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
    "revision": "6afa7f60605ee032b27d5650aa286f4f"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "fcf4ce1ecfc025c3b8dd1bfbd9bcf1bf"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "02b30ff4790ff1979ba666cbe6247aa2"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "0bf61ba1a7bca2d78545af547e61863c"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "3dc1a81ac095ddff584044fc731faf5a"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "2682d0b61c78b6780ca9d30b5744bc5a"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "eaef3b3f8fb97dd8320043e5cf34ed16"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "1d1ff5296325d9f5be23d21075dcce26"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "68a42697614f9fa8329be41571e77b78"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "50c84db8b5e55060a72370676ef10b1e"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "297b1dfe50edc449c3963f5dadef6b56"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "4f4a96026a289d373e1b746380c7f49d"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "4de6e185295800ba355d9bff5aeead7d"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "5eb142f81239ad59b362dbcc91c882b8"
  },
  {
    "url": "framework/sub_pub.png",
    "revision": "521f365eff009e7bc89489806599ca85"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "4fef32ea7f7bbf79da4510dc7aef7658"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "744da62265e1fa0784f7deba17238d3a"
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
    "revision": "b6859b3b91202ccb84c60fb60ab76aa5"
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
    "revision": "df29978260cff0518bc114b7693aee96"
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
    "revision": "7e72409c78fd35431767e861be8b4833"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "5e099ac5e589ab0ff63230c5aa3206ae"
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
    "revision": "c34b089787280dc55dfae737ff2e558d"
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
    "revision": "5d495f54da274d5e4b04996a8028a172"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "2e71d6277e284d9d0060b8726f72007e"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "6a6fd5fe7cf2b23024f7ed3681f59d2c"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "8ddcfe09b56a8d4e00f02581da34cc50"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "25e5f3905b9c387dc9c50fd78363acc3"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "5cb1b999cf537eb3001cf6f5580c8c0f"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "7ed25e63f4d3f8b77066f621e768a2dc"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "7637acbfb42635832cd06bbf2c68689f"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "45dbb25df19eef8166275b58addd5252"
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
    "revision": "5db950c6184d14c2dac632afb7f2d9fd"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "655b31d0f7d2ddfb2964bf2504463118"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "7aef64a5785c9c458fa2c25d744ae7a4"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "bd0325d7b25a57c1ff38322f1dc72a2b"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "762d915410385965598561c45305ccef"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "1498b63a41c46fcb1d2fc409326d9c29"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "a9a6d6e152647c0ae40917ffc2db3ac1"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "93451952700d3c4929fd71fc7d7f2274"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "4ac48123a5c73315f75e3223042a3591"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "9baab63f96f7125d089c86421e07618f"
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
    "revision": "4cc504905d1ade1fa3460d67518f5db7"
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
