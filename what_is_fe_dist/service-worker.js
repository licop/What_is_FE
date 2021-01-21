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
    "revision": "c5c29a1a111a7496c518ba192b843898"
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
    "url": "assets/js/11.460b07fa.js",
    "revision": "4abbee4549ec810191a3e2d146146a3a"
  },
  {
    "url": "assets/js/12.2e394fe4.js",
    "revision": "b50c54b71bef7fa798080b6a3b1d74e5"
  },
  {
    "url": "assets/js/13.bd2e0811.js",
    "revision": "caf48faff7fb6bb3baa5c453e6c35bf6"
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
    "url": "assets/js/16.9739f4e9.js",
    "revision": "570a32d7a324c770e9b3f4baf6d1328e"
  },
  {
    "url": "assets/js/17.9dae5907.js",
    "revision": "6e5d5ed5f1248a6adb7cd91e817a735c"
  },
  {
    "url": "assets/js/18.5bec50da.js",
    "revision": "148fb578d240c14400f8f512ec0e96f2"
  },
  {
    "url": "assets/js/19.29520cc6.js",
    "revision": "d08d3026377a39ed9980aa8efed48d84"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.23bf02a5.js",
    "revision": "27a1f9bcb5a879c580d3c3da124eee07"
  },
  {
    "url": "assets/js/21.b0c634aa.js",
    "revision": "25397d32ec912afb7043dc8aa7bd226a"
  },
  {
    "url": "assets/js/22.c7161e77.js",
    "revision": "513f031f4a696b32066b661f8b4e42f1"
  },
  {
    "url": "assets/js/23.f2019cb9.js",
    "revision": "9260d4d3f44f2d248824275e07bcbf03"
  },
  {
    "url": "assets/js/24.1cc39488.js",
    "revision": "055dda35ab1d0a62bb26a787b39101ec"
  },
  {
    "url": "assets/js/25.db0eb47c.js",
    "revision": "b6e89796e864fee77a4b33addb8a3725"
  },
  {
    "url": "assets/js/26.8c1df242.js",
    "revision": "e2d33f43d9796e3fd08be55f2ad4ffec"
  },
  {
    "url": "assets/js/27.1a479f35.js",
    "revision": "d80b9ecb6ebdf51718866e7edf9408a5"
  },
  {
    "url": "assets/js/28.2886de1b.js",
    "revision": "28c6aab772d85d7594e7cc5e4bb80fed"
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
    "url": "assets/js/30.eda55f75.js",
    "revision": "4e26b3f21f23b56c13a529e984206827"
  },
  {
    "url": "assets/js/31.3d7cee67.js",
    "revision": "239da7a4a4231860291d233fc8c23cef"
  },
  {
    "url": "assets/js/32.e497e6b0.js",
    "revision": "a0680f7e028e9acb353496243d1fdf32"
  },
  {
    "url": "assets/js/33.3dbc8cef.js",
    "revision": "9ea54eb0f2b645fe4ed96a637bf0caac"
  },
  {
    "url": "assets/js/34.9fcc1b0e.js",
    "revision": "ffcef9e507ee5d71808e56e2acd42ece"
  },
  {
    "url": "assets/js/35.1d3011ee.js",
    "revision": "0a7de80c2faec6c08eadef8b3ff63178"
  },
  {
    "url": "assets/js/36.12e52518.js",
    "revision": "c938e31faf67a3c4d8d6d00c33d9b014"
  },
  {
    "url": "assets/js/37.93d6957c.js",
    "revision": "90bd634dfba3f75a825c5c351bead993"
  },
  {
    "url": "assets/js/38.5f4ea6fd.js",
    "revision": "d29e0a78146a94a5aff9d6f27a82e246"
  },
  {
    "url": "assets/js/39.fda25305.js",
    "revision": "8cf2a6ab6a9001769c09092127fe9ec7"
  },
  {
    "url": "assets/js/4.7a959686.js",
    "revision": "76f264bf6748ca0e2d51a37b75bb788d"
  },
  {
    "url": "assets/js/40.5b75edb4.js",
    "revision": "66b8721db39d46ce8ca638586811d0a9"
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
    "url": "assets/js/44.b1967ef4.js",
    "revision": "c3e4dc86793be98f0389aaa3f9f0ea4b"
  },
  {
    "url": "assets/js/45.79483abf.js",
    "revision": "af9dc72b01ea97fb4b68a3c6542b6b87"
  },
  {
    "url": "assets/js/46.33799360.js",
    "revision": "16525944981f1ad711960db9adebd591"
  },
  {
    "url": "assets/js/47.8f16f697.js",
    "revision": "a7e97e8953a391445e0d7c7c9748fb94"
  },
  {
    "url": "assets/js/48.b9385635.js",
    "revision": "9f7a434d4fe2ef3e4afd6f75cf17ca4e"
  },
  {
    "url": "assets/js/49.1528f983.js",
    "revision": "56222d1ee1fc26b02010d0f38048e8a2"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.c1587d60.js",
    "revision": "df78b0f49340ca0c790ca75cccdfb35c"
  },
  {
    "url": "assets/js/51.3863852a.js",
    "revision": "222cdfcc758bc18b30c4e0c6d1e6f83f"
  },
  {
    "url": "assets/js/52.8eb3dda1.js",
    "revision": "bcd1fa1054dc9eaa90f9c1df7af2da09"
  },
  {
    "url": "assets/js/53.e7e80619.js",
    "revision": "db48223000f3a73053d42327efc94edc"
  },
  {
    "url": "assets/js/54.4662dd4b.js",
    "revision": "674994c2d6c70c7a3177023c619b68ad"
  },
  {
    "url": "assets/js/55.7c778d8c.js",
    "revision": "4063328b2332b7a8cccece0b34429914"
  },
  {
    "url": "assets/js/56.881c5e68.js",
    "revision": "ed8f687a7290fd27f6bb38e5f963c005"
  },
  {
    "url": "assets/js/57.5df66b02.js",
    "revision": "3e874a0bb3c02c3e70ffa8e00adfdf05"
  },
  {
    "url": "assets/js/58.40cdb3fc.js",
    "revision": "772a155a3e65d815d501aa4d9798d0c7"
  },
  {
    "url": "assets/js/59.ac6fecd1.js",
    "revision": "bc8b5180d3828ede74fa6310bb75d8b8"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.bb046d5f.js",
    "revision": "da249108ceeac0be94ac6680f200e01e"
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
    "url": "assets/js/app.fd1a825f.js",
    "revision": "7a8a10270ff2908627525a102f9c5392"
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
    "revision": "1024d9f4911755abf82f858643da8393"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "73db17faf4cc0e69eadf2372b05c6b50"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "1f6e554c085b0fb518544297cdc956fa"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "f15f034a88690bb31b985b1b9fc29963"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "deb1375377b7234e36517d3ea8341174"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "b073a093320b7e8eb4ccf87583c66d70"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "aa9a926f6c5dc83b9a5edbad13fe0ed6"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "8abf7f2e750b1154db5c9c44a60831b8"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "6dd6dc9b41fc4ce4e910bc090628eccf"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "1333854f2d274d7921444617e6bfe853"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "691dd80f5d19490bc652838b40bed4ba"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "4c7b47c15c511a62d46b5754f79dbc63"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "c184c8251b631e1b9d6f97fb814ee317"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "bdc2abc82fa7b03388eaa2b575749d8e"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "ec277e9b8c222dd299d6ac5f3501dc0b"
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
    "revision": "a2aaed9ea08218cac94bce549579dbb4"
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
    "revision": "363a42169e7c93d41219251a274cf2cf"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "da16e688b00a5bcbe5acb19551355a42"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "c6d4ab6a74fc9cfbdb64b89a715e7780"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "f550d2690924fecfd54521eb61f9ad70"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "7ac214ddfd52ac530c4d71ba5f7c503f"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "98ecf5d47dfbc2f1cb458db016bdbb42"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "e91a26c8a27d3065e55477e6cff9a84b"
  },
  {
    "url": "framework/跨平台.png",
    "revision": "37874644f9244c9bfed7f60f58237839"
  },
  {
    "url": "framework/diff1.png",
    "revision": "9555097716bc4b8f254369658038aa73"
  },
  {
    "url": "framework/image-20200103115310745.png",
    "revision": "3c9037d94ae489190c44bd239980b713"
  },
  {
    "url": "framework/image-20200103121812840.png",
    "revision": "a42e7069885026fa0acb2e5f90362cc5"
  },
  {
    "url": "framework/image-20200103125428541.png",
    "revision": "ff1e38d987d9141847d5d9592493664d"
  },
  {
    "url": "framework/image-20200103125735048.png",
    "revision": "e8fc4d09cb7181194397a93b1f80fd79"
  },
  {
    "url": "framework/image-20200103150918335.png",
    "revision": "bed8157e3b39ef7bf1c23696ce61a8e4"
  },
  {
    "url": "framework/image-20200103151051928.png",
    "revision": "1c8c4f9209860e9c032e95fb3d2ebfca"
  },
  {
    "url": "framework/image-20200103151058407.png",
    "revision": "1c8c4f9209860e9c032e95fb3d2ebfca"
  },
  {
    "url": "framework/image-20200103165507703.png",
    "revision": "83da039713892c424bef91d550765f2c"
  },
  {
    "url": "framework/image-20200103213351869.png",
    "revision": "fe11bd7d4a7943f42ba7760b915bd459"
  },
  {
    "url": "framework/image-20200109184608649.png",
    "revision": "7f3179aa206b693c4b7a5e1973fb4fd8"
  },
  {
    "url": "framework/image-20200109184822439.png",
    "revision": "f579f19ae0a361937bcf228431f66d86"
  },
  {
    "url": "framework/image-20200109194751093.png",
    "revision": "56ce703d8c057617947395e2a31aa7c8"
  },
  {
    "url": "framework/image-20200112120036948.png",
    "revision": "754fd3827072732dd08b0ebdbae3e929"
  },
  {
    "url": "framework/patchVnode.png",
    "revision": "636a43eead76698ff9122ff7f652152f"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "02925a4963629c6eb274cd78583ba9ef"
  },
  {
    "url": "framework/React/index.html",
    "revision": "72f80773ba7ae2b259c676384f017575"
  },
  {
    "url": "framework/sub_pub.png",
    "revision": "521f365eff009e7bc89489806599ca85"
  },
  {
    "url": "framework/Vue/Virtual DOM 介绍以及 Snabbdom 源码解析.html",
    "revision": "73f8443546023a8d4f3b4ae07a3592e4"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "8ce87042bd9f9d9fa648ee96073e26d4"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "5445e7fbcd278cd8e9bd777339ea1d54"
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
    "revision": "c2d29cb8748992185338b0bbb2f5aa79"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "0f017685dd2301d366d67c7353882f4d"
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
    "revision": "accba2f80077d82c6d2302469ce21695"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "657d63f04824c7ac9bbcd294eee93fb6"
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
    "revision": "a37c07eb7fda761cecff245c78843805"
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
    "revision": "24afb3a6dc2579982fca3db1cefc1044"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "10521ee794ecac78b152e0ab356800f8"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "88fbecc149d7d1457f90557663910f7c"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "4f4ed5e6690ca1b66d3662371bd8f01e"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "a91e3ed9966fccec657933efc2ff641a"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "071d0256b70eff675e23a8c24f7a8b34"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "264fbb1490a3b5dbde77f35ad7f0c1c5"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "0da3b7b6161f616013d2a8f6f78687dd"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "79afc0fc5845e4f2ac3c567d492fddae"
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
    "revision": "c0e6828c8170c4c300cac7ac271dbde6"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "8700205841521d6d06b3231f6ec66aae"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "1ab45f570417a715dd2946f628816629"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "c245631769f5a8c81306d4df289dbd8f"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "f2297e336ffe9d559e8d90411ce99a0f"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "78cdfcb55d2b91ee6be2d6b2d28a53c4"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "4859a32627dbc7a8719748aff714d771"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "ddbbad9fa0d5170c7a6733c170abfeb2"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "b7440acdf2bd05a8a4f47970d4fabafa"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "c8fd972d1bf4a8fc4215e0953fde138e"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "d354c4057c41e790b6f63e96b4d1e6db"
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
