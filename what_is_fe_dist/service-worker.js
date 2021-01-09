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
    "revision": "ec52aaf7f988a0d357e59e381ad1e553"
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
    "url": "assets/js/10.9fc866c3.js",
    "revision": "d10fcceaf7fda7a9fa779ece2d39700d"
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
    "url": "assets/js/13.643edb99.js",
    "revision": "16cbb017fd3ee8a63445b6b0a68abb0f"
  },
  {
    "url": "assets/js/14.6bac40a6.js",
    "revision": "c352fab67e1a7ad3f67c9c253afd1c40"
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
    "url": "assets/js/17.883eaf2e.js",
    "revision": "c7ee5f7a0b1843854b8db7999b740d08"
  },
  {
    "url": "assets/js/18.183c1e46.js",
    "revision": "297c4ae8596c0669c8cdfb5c9ea2f953"
  },
  {
    "url": "assets/js/19.02533cd2.js",
    "revision": "ea3461da3956e9a0821a58cd0a85d1ec"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.e927c48f.js",
    "revision": "cd1b3b46e5df2349fff2c938e3dca61f"
  },
  {
    "url": "assets/js/21.601eec8f.js",
    "revision": "afe066955eb8103be46c9f21f171fc3b"
  },
  {
    "url": "assets/js/22.e6ce73ac.js",
    "revision": "80b6f38254484bbb7ab76dd59755e4b4"
  },
  {
    "url": "assets/js/23.0a0d000d.js",
    "revision": "ac42e816e3bef2d86b6fbb688a697dcd"
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
    "url": "assets/js/26.31f6158b.js",
    "revision": "6d0f995b88d50af614f880fdbda698a7"
  },
  {
    "url": "assets/js/27.a07cb107.js",
    "revision": "14d780fa64519d6dcdc0284ca4ac3eb5"
  },
  {
    "url": "assets/js/28.d75b3738.js",
    "revision": "3a91c4a938e8d9de28f3153ca222ecd0"
  },
  {
    "url": "assets/js/29.2cb21908.js",
    "revision": "cf4c40a4ff70a8aa115f5c39f793550f"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.ef8672b5.js",
    "revision": "4b8524e124035f69e2c01c57e81c0661"
  },
  {
    "url": "assets/js/31.85fde811.js",
    "revision": "ecc020737e6bdce1a80e5ef0cb85d2a6"
  },
  {
    "url": "assets/js/32.c664d318.js",
    "revision": "9ae2d4f6b3bd482d0311e6f024d52bd3"
  },
  {
    "url": "assets/js/33.c2fb006b.js",
    "revision": "4eb121c7ce46ece723a76d5e33df9e51"
  },
  {
    "url": "assets/js/34.246653c2.js",
    "revision": "8234cfbfc90bf367433fee04a927d2fa"
  },
  {
    "url": "assets/js/35.5f801f03.js",
    "revision": "e18577ddb3334e73fdd77c8be09d74d4"
  },
  {
    "url": "assets/js/36.6f895472.js",
    "revision": "4fd8f693f99fba2545cac1b4d80d5f5d"
  },
  {
    "url": "assets/js/37.17d3f030.js",
    "revision": "0b3267c8820a4867ffadd4a5ded8489d"
  },
  {
    "url": "assets/js/38.2b3ab31a.js",
    "revision": "96a7d0a6206374be48d536818557257c"
  },
  {
    "url": "assets/js/39.7464134f.js",
    "revision": "81214946e9db3111d0b329c63f4b31ac"
  },
  {
    "url": "assets/js/4.d9a2acfb.js",
    "revision": "0519d4eae62d410dd8fc1df477951803"
  },
  {
    "url": "assets/js/40.4488b337.js",
    "revision": "bbdac0698c36d04f88c7ae95e7a772db"
  },
  {
    "url": "assets/js/41.7e0bdd3c.js",
    "revision": "976d41173a6c55d60a2773fbc80f8f12"
  },
  {
    "url": "assets/js/42.860aab70.js",
    "revision": "df77976944e773b4c95cfd01734fbc94"
  },
  {
    "url": "assets/js/43.be386e56.js",
    "revision": "2cd208b03a6db047f416de496a145f5c"
  },
  {
    "url": "assets/js/44.6415e439.js",
    "revision": "166c0bd5d3cab520fe44694fbc3971d7"
  },
  {
    "url": "assets/js/45.8c27fb44.js",
    "revision": "a4b7943944805bd38ceeebd88c1bf5c5"
  },
  {
    "url": "assets/js/46.ea162f6d.js",
    "revision": "f15375b96f2bb9184d067120864d7898"
  },
  {
    "url": "assets/js/47.26a59269.js",
    "revision": "150dcd87a92d22fa693ffc14c2be827d"
  },
  {
    "url": "assets/js/48.19d57a0c.js",
    "revision": "a556aeefa88eb4165bb4c0d746404418"
  },
  {
    "url": "assets/js/49.783c2463.js",
    "revision": "93a9372ae44f27f629be78ce99e4bbed"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.3a14c00d.js",
    "revision": "ec07ecc8dad6e0622258b49d92aa365e"
  },
  {
    "url": "assets/js/51.a947c12c.js",
    "revision": "2c0f27e418520ddae42577bc1f27f2cb"
  },
  {
    "url": "assets/js/52.70ef83b3.js",
    "revision": "ff7fdc8b63cccb1b094c2fdb873d61ac"
  },
  {
    "url": "assets/js/53.14cc1365.js",
    "revision": "891e12a56a648242caae6926e8e91036"
  },
  {
    "url": "assets/js/54.ceaf84a1.js",
    "revision": "5810437eaae469c5aa1780821182cc03"
  },
  {
    "url": "assets/js/55.1ba37dcb.js",
    "revision": "24508a10dcba125025ce7ac05a5c9008"
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
    "url": "assets/js/9.ad553fba.js",
    "revision": "c5d9ece68684488a646be5c30e6238e4"
  },
  {
    "url": "assets/js/app.c5777987.js",
    "revision": "25cf6282761ac00427ae250af473a9ff"
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
    "revision": "4c8f8fec19744db8e905f780a1b57e6a"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "512f059bd734195c31c4d57e86f79fbe"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "cf24b9707bdfe26b796981cf3d9dc2ae"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "df96fb4f0df0f5f4f3fc178da95d29cd"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "0a3b515c28ca727a97ec6b4c2dbfc870"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "fc21635fccbc81bae6ed3dc31049ad34"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "e7b05fba7cf079301177aed1bdcacb1d"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "c42286dd05b1a73275ad9ab6bb260f9b"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "8fc8449275794ddcf037334a807470a7"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "9b051406f7496eeb6a7806154bbaaf60"
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
    "revision": "6bf871e7352db041b041678bbb88cf38"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "13b04e2d4bf9c85682784bf3e729846c"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "231b0aa4310963dbdc9e76603de124ea"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "725c86b0cb00d9427c58a4081109b90f"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "24ddea613a0cf698b16e292d7ac2be1c"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "bc88c98a7f06c411b7c08dbb401329e8"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "934acc6a3572f9e2e77f7e574f521712"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "f37351f770e813c3a099324f2f074e30"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "5bb59f9da7796cd141348c7557950933"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "f6cdba8d12db8583ae811b735e51b40a"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "a13acf945d57ad9d4007cadd2bc2d77c"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "0ac9739ddb138d004f6d3239503d64d1"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "1410cec72af5d03af7ea2b0bbd271e59"
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
    "revision": "96ba49ae8b3c9185fdb0a4c693549d6b"
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
    "revision": "ce8e1334ba12e929f5a5583aa25b8923"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "deee82c8eb94ac6642cd1136251bc281"
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
    "revision": "2749d69eaf6755c33f350b24b6e8be96"
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
    "revision": "35cfdb5cd0f6c0509b893dd03a22ad98"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "2202da3b2d6d352231026026673df898"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "b3c655fcd38bd61bbcd8e46d1bdf62db"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "751a8784da753c521f0900cf552318e8"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "44749e15fb0ff424df983e46a51d5d15"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "ea4fa4b3059c761e5722f1b35b8a119c"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "41a4a007d769f10310f4f5d6e6db2f45"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "bc2e47885347cf496bdebaa5936170c1"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "cd4f1d72a1c71b7dad99ffb004de668a"
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
    "revision": "aef8d4d6ef9e95bdd6c213e21483f957"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "a7dca1c2b756bfd9da75bbb92fd8811c"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "97094e6e9fef10904ac48da8309205f2"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "65dc3a4b20841a08c5626e5e15acf6ee"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "f6e356e5a10910e230c408bd1d86b5b1"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "bb78025132c657d1b73f51f094ff2898"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "404185d62b21b6faf0cc6c5814f4ee7a"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "29669b380643b286c397ba86c943909c"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "bb06a11f9e21e953a6879f29aa18cb1a"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "73057d7ba4cd6813cd654af4556fc2fe"
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
    "revision": "60dd0032ba9b772d82c4436779274be1"
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
