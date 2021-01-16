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
    "revision": "9428fcf71361290e35cbc38222124664"
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
    "url": "assets/js/13.277c050f.js",
    "revision": "7cc07b2deb4921cfc1ef35d48fb1e6db"
  },
  {
    "url": "assets/js/14.5bd50145.js",
    "revision": "5b8840ea33ed81ba5c23c140bdb19596"
  },
  {
    "url": "assets/js/15.6db39cda.js",
    "revision": "54a1d1e3866c4185721a01f32fbfa773"
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
    "url": "assets/js/18.77de363b.js",
    "revision": "fe8523d57cc1771a2e045353d6245207"
  },
  {
    "url": "assets/js/19.b4a0979b.js",
    "revision": "0f98488c8c9745e4800da929fcbc7e25"
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
    "url": "assets/js/21.a2b545a6.js",
    "revision": "f88f3c72e2d127eda058d9fc1f504675"
  },
  {
    "url": "assets/js/22.75e843a5.js",
    "revision": "6e397f0ac64ea3df2ff0e7f95244202b"
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
    "url": "assets/js/25.ab1f95a7.js",
    "revision": "23aef277ff2999806f923d8410b51f2c"
  },
  {
    "url": "assets/js/26.0cfbdff5.js",
    "revision": "51a2cad077b5b720fe2e3ac1add57c2b"
  },
  {
    "url": "assets/js/27.740eca72.js",
    "revision": "c5a36c5c4cf6a9c934ff3fa707580b94"
  },
  {
    "url": "assets/js/28.12b5f83b.js",
    "revision": "b2315d7c4143e0ad6c7bd94eaf976650"
  },
  {
    "url": "assets/js/29.04a19c58.js",
    "revision": "57faa0f9a59030ae3f1271b9230aab46"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.bc8b1c99.js",
    "revision": "3a24a29cd5d6b888ad3dae934f92a478"
  },
  {
    "url": "assets/js/31.3f13f8ad.js",
    "revision": "1d74a64ad7c9e9034ed26cb9df1612e3"
  },
  {
    "url": "assets/js/32.80cf951b.js",
    "revision": "e1afa0e6d7c5a1909fe1a05397727a81"
  },
  {
    "url": "assets/js/33.2b9dd082.js",
    "revision": "4ec3e6539ac496d07b5a79a006159691"
  },
  {
    "url": "assets/js/34.ce2a0718.js",
    "revision": "b9b9c7934984ce3d3a6ab5039ae1750c"
  },
  {
    "url": "assets/js/35.4d774e8d.js",
    "revision": "4d00a46a9d0eeb8558184ea730a85d47"
  },
  {
    "url": "assets/js/36.42b5c3dd.js",
    "revision": "63c150e1c38ca5ba7ec4d68a42b9d8ed"
  },
  {
    "url": "assets/js/37.29c39caf.js",
    "revision": "270eb45bb75f19f2a5ee2261c5a0fde5"
  },
  {
    "url": "assets/js/38.3096cb90.js",
    "revision": "868bf409cf634c15e6ef8057d6e469a7"
  },
  {
    "url": "assets/js/39.762c1fc5.js",
    "revision": "cad82f8da783230ee27291c0ad6a30d7"
  },
  {
    "url": "assets/js/4.e70eefd9.js",
    "revision": "e9d73496a008cc2bf3e6f6b2fcd541cc"
  },
  {
    "url": "assets/js/40.b34beae9.js",
    "revision": "abd01a60d94decf022fc56bed65efac0"
  },
  {
    "url": "assets/js/41.aca0c1af.js",
    "revision": "34df0cfa134af34ac77e0592f889a7e0"
  },
  {
    "url": "assets/js/42.922c8820.js",
    "revision": "ac9c43cdbed4fe9537403943c225cdc7"
  },
  {
    "url": "assets/js/43.0d0c850d.js",
    "revision": "0f323932cba4edf0637baf508d2d0b99"
  },
  {
    "url": "assets/js/44.6883cb5e.js",
    "revision": "dfb30482b73c4e7a9f3753595fadd1ad"
  },
  {
    "url": "assets/js/45.b38ea3bb.js",
    "revision": "fe0ae915241ed3035ea647212e250751"
  },
  {
    "url": "assets/js/46.94b29c10.js",
    "revision": "b906bf496df2a8217a1fd7c6bc56d4f7"
  },
  {
    "url": "assets/js/47.718bdf44.js",
    "revision": "1d8e51b82fc51cccfcc07670e19997db"
  },
  {
    "url": "assets/js/48.1f80403d.js",
    "revision": "774a7acad73188f6071ce3a18047d68e"
  },
  {
    "url": "assets/js/49.893969a9.js",
    "revision": "d3d7979f2e236356da0eb82213c21654"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.1bf7c41f.js",
    "revision": "f7df000a510c28c36639653928655f48"
  },
  {
    "url": "assets/js/51.fda02040.js",
    "revision": "c2070d3f81f6b25e6682db24196f6ceb"
  },
  {
    "url": "assets/js/52.f550bb31.js",
    "revision": "8eeae036c8864f8c2b7af03f7476a7bd"
  },
  {
    "url": "assets/js/53.467bcdd1.js",
    "revision": "938281108eaf33be11222c2771117f3a"
  },
  {
    "url": "assets/js/54.e5a9e0b5.js",
    "revision": "44791bac1542cfbba2114fa8eb9dcb44"
  },
  {
    "url": "assets/js/55.7ea5652d.js",
    "revision": "250b04da233bf041beb8500c37b011f3"
  },
  {
    "url": "assets/js/56.52da274f.js",
    "revision": "b7a4b891c3321afa2c2c2dee6d8cedb0"
  },
  {
    "url": "assets/js/57.15cc1050.js",
    "revision": "c2aed5a8325e541392286e5b1b7d6851"
  },
  {
    "url": "assets/js/58.aac9b2c7.js",
    "revision": "3ba04421ada6378d218ef6457335b9ab"
  },
  {
    "url": "assets/js/59.f0b70fb1.js",
    "revision": "cf47c23a7f4d7d45a35b7b19f33ec54b"
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
    "url": "assets/js/8.c51eb416.js",
    "revision": "56608115138f8bf3eaf55b74e54c6963"
  },
  {
    "url": "assets/js/9.bca781e2.js",
    "revision": "647986575b35f2cde0bc2617d3abb465"
  },
  {
    "url": "assets/js/app.7360b574.js",
    "revision": "fafbe52a687d14ea344bb58b28b574cd"
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
    "revision": "b202c262248ada201ba3353eb033636d"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "b31a68acd8e27cc93fb6e908b9243bb1"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "d92e5b8e35e231d1cb3a59962ee357ba"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "327785d542eab2eda902722a34942c6f"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "571003acd3078f52523c7eed264f77cc"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "a323a08affe84d16a12aed102d0134ae"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "5b5cf061a37b0383c1a8f23f0921b4a6"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "1a057df4bf9c36a919ac1ee255a8f64a"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "351d368a64f16db2cbcb8f82d06d16ef"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "cc6fd39f412d0f491c925b3ebb6f2531"
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
    "revision": "289e88b42ca58b473f195ea654c9f8a2"
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
    "revision": "78e3b209088eae091c9068c29e1cc186"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "0ff05f2b7adcd826c077b1966777fb78"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "333ab73d2a9426e0caaee94a96d59199"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "9a4ff929189e9b7f1c6b855f708fdcaf"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "ebcafd6cea24482733c699ee33aeb860"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "a4a389cf463c4e1a3db5b81bfd6c8f5c"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "aca2c07a4c91a9b9aa1e10f499d27747"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "fb67f5460115091cfae5efa2a6a93a15"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "6989d7bd0ce72be36b635a61b2aecb80"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "5253fba434c8deae204634c813541ad9"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "054d9d38a407ab6ddaff7cdf324bedde"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "d8e691bdd776c81a78e5b65ad7a7ab0c"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "990b6ed7c12ece9e5c99336ec4e1304d"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "297324e00a7d31a42d2e0315e6d0f3f7"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "b1cd83f7a612ede3da17683eaea38661"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "f2b6593f304abbb36896e87fcbfb53e5"
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
    "revision": "05979ef147e620931d565e98614b9654"
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
    "revision": "86e463ddf7de37a45cdb235178a7ade4"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "d962865228e9d6cb8306fdc8cb7dde1e"
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
    "revision": "6713f6be1fda5f19f953feec69abc7c6"
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
    "revision": "0c95064f92b6b1ff2a29da1c6c3e48cb"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "bbdf3c0e47ac66da3c6afb7580031849"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "5ffc1e2e807c9473b7f5d08f93c72901"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "b7730ba4503cbf21170336176bd0aac3"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "7069e73fdfd90812b116ce2ebe6960e3"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "daaff61aa296695cc06fcf04fb05c448"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "9d33bd36a7fba6e4d580c97a7b5af5f9"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "d8b3253c6d9927ae8c53b2ed989c1a20"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "9be0eda126ad57d12ccf6e266c0fbdba"
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
    "revision": "55eed2b30ea56e124db3989c350f3707"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "00a80c5c772fe934f7c7f4e9539d80e0"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "f61c024b94495082b79c11db07e8647b"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "80cbb57243a251e39f247d9797be467f"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "d2e87370fc389944662a3f451c86c7e0"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "b2dbbb628592375f9531b31f7b7b0bb8"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "8672d40decced20daae3ccae44d9cf5c"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "2bc10b8aabeeb85c0f6adf2fc49fbc5a"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "c096f329d7d35b3413eb600766d12103"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "8f8791310ea9121722136e7141785718"
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
    "revision": "bb094d844ebdac5e70804265ef76ff43"
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
