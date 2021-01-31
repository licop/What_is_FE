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
    "revision": "88cf5cbf179e2fed3c23b2542e37d2b7"
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
    "url": "assets/js/12.2e394fe4.js",
    "revision": "b50c54b71bef7fa798080b6a3b1d74e5"
  },
  {
    "url": "assets/js/13.8d280b6b.js",
    "revision": "09d5818c34b1e2b4d80e5c49000095a0"
  },
  {
    "url": "assets/js/14.bf3acadd.js",
    "revision": "580eb293bcdd4915712d28eea6a72a3c"
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
    "url": "assets/js/19.5b01ecf4.js",
    "revision": "785af9ebfeefecddf6f32bf409cc6e5b"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.55b96468.js",
    "revision": "df1c879ba4fe640ff50a91603030ed4d"
  },
  {
    "url": "assets/js/21.b0c634aa.js",
    "revision": "25397d32ec912afb7043dc8aa7bd226a"
  },
  {
    "url": "assets/js/22.6aaf197e.js",
    "revision": "c1a58e7bd2bb081622efaf88e0eba2fb"
  },
  {
    "url": "assets/js/23.f2019cb9.js",
    "revision": "9260d4d3f44f2d248824275e07bcbf03"
  },
  {
    "url": "assets/js/24.a76aa7bc.js",
    "revision": "7c4c1f71b77bd79d59f7a0c539ae0d1f"
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
    "url": "assets/js/27.d4500a28.js",
    "revision": "a258eccbf057824325c9662d2361c5ba"
  },
  {
    "url": "assets/js/28.2886de1b.js",
    "revision": "28c6aab772d85d7594e7cc5e4bb80fed"
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
    "url": "assets/js/30.92af56a1.js",
    "revision": "6c0822a69b6ca9426b52daa6be039896"
  },
  {
    "url": "assets/js/31.85e2dd03.js",
    "revision": "38ae42e90db807c31229b19d7488dcc2"
  },
  {
    "url": "assets/js/32.80cf951b.js",
    "revision": "e1afa0e6d7c5a1909fe1a05397727a81"
  },
  {
    "url": "assets/js/33.eb4df3f6.js",
    "revision": "4efe729625e424e1ee672ce9571ad631"
  },
  {
    "url": "assets/js/34.a84bbd1e.js",
    "revision": "99df3d6582a4343a9a1602952ab05f38"
  },
  {
    "url": "assets/js/35.879f2e2f.js",
    "revision": "c483efa506760be678fc2694c4d48fe3"
  },
  {
    "url": "assets/js/36.f5400109.js",
    "revision": "9060b1802c527a8d389328ebd0c07747"
  },
  {
    "url": "assets/js/37.d1c7e320.js",
    "revision": "107b8213e80c021f19886223ac4222cd"
  },
  {
    "url": "assets/js/38.713c46ea.js",
    "revision": "bf165a10e5b6bc485dbf325db530af92"
  },
  {
    "url": "assets/js/39.d7848a41.js",
    "revision": "9d9b1c03fe4d759c572ac7206003d508"
  },
  {
    "url": "assets/js/4.d8cecf85.js",
    "revision": "b9395d571179909349184b99c0b65ee6"
  },
  {
    "url": "assets/js/40.6f7b7717.js",
    "revision": "d951e0bbcdc1c8ef1d930b083b096c4f"
  },
  {
    "url": "assets/js/41.0e043c3f.js",
    "revision": "bcc04437a9e7b2ee2c7e8cf949c99b7e"
  },
  {
    "url": "assets/js/42.ddb814b0.js",
    "revision": "a038a75fb6a1af6dced6791bf7f2607f"
  },
  {
    "url": "assets/js/43.e5daa209.js",
    "revision": "b99d84dd6b77d41f0f420a2ec501a977"
  },
  {
    "url": "assets/js/44.42e69fab.js",
    "revision": "fbb271a80df67307a35c93587c54a2e4"
  },
  {
    "url": "assets/js/45.16d4dfb3.js",
    "revision": "3a65b2024bfa2a366297ee386b1845a1"
  },
  {
    "url": "assets/js/46.54a43578.js",
    "revision": "e28291aa13780d4639125ac17fb57572"
  },
  {
    "url": "assets/js/47.f7f68898.js",
    "revision": "c32054afadd08411ce81399071b0fb5a"
  },
  {
    "url": "assets/js/48.af99873b.js",
    "revision": "8059f4ec8f78f3333bf3086e442c4f42"
  },
  {
    "url": "assets/js/49.fc57de47.js",
    "revision": "31f61c66e8192ef133928a4c5e337d75"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.dd883828.js",
    "revision": "db743fbcab790333c38ad491947d23e2"
  },
  {
    "url": "assets/js/51.31e54c88.js",
    "revision": "3fedab7c059fcba98ac9e95a538636c2"
  },
  {
    "url": "assets/js/52.58d1ee78.js",
    "revision": "435de7b962c7471be7b823206d3817e3"
  },
  {
    "url": "assets/js/53.4c075088.js",
    "revision": "bee5ad0a1b900c9bb582f6f343876fb6"
  },
  {
    "url": "assets/js/54.27e5ee51.js",
    "revision": "977b306509dc94b5da77fb5852e48032"
  },
  {
    "url": "assets/js/55.b61c7988.js",
    "revision": "73c809daf563e0637d8e6228f64d9dea"
  },
  {
    "url": "assets/js/56.2e4d2ba5.js",
    "revision": "c6d4238e644c3f23adf57e3f8e57553e"
  },
  {
    "url": "assets/js/57.68d2bdd6.js",
    "revision": "2e2ae75346b1f93b6682337ba8e76bdf"
  },
  {
    "url": "assets/js/58.5665d6b0.js",
    "revision": "5d4408e946fefd963ca60c95fcbf23f3"
  },
  {
    "url": "assets/js/59.65291e01.js",
    "revision": "9129477446a449eecfcf0ab03684d986"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.03b7a13f.js",
    "revision": "1656ddd314d31f1c430dc56c7f891720"
  },
  {
    "url": "assets/js/61.03261d24.js",
    "revision": "cac9665238950e568fe1163822f2605e"
  },
  {
    "url": "assets/js/62.27cc7dbd.js",
    "revision": "3d9fa1aeedc678143f7474916676b11d"
  },
  {
    "url": "assets/js/63.beaf0c9f.js",
    "revision": "d0953946cfceaa46c0c8476dd486a5b9"
  },
  {
    "url": "assets/js/64.5a1efb5b.js",
    "revision": "3510f7587d6c413eb290348d36ae8f77"
  },
  {
    "url": "assets/js/65.0b85b6f4.js",
    "revision": "9682b100571bf9a0ffba99daeec2e795"
  },
  {
    "url": "assets/js/66.4629c80f.js",
    "revision": "1202000a3731ffe24df5317db271e7da"
  },
  {
    "url": "assets/js/67.0fe922a8.js",
    "revision": "b7a1929b023aa525a32aee9a36471b0b"
  },
  {
    "url": "assets/js/68.69abfacb.js",
    "revision": "296a226c341bcba7e5ac37b577cc92e3"
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
    "url": "assets/js/app.d77ea17b.js",
    "revision": "b7d335fdaf3f9a74616137789362c365"
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
    "revision": "e44a88615bfe0cc656c39bf9bf0760e6"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "76841e8c91389263af83beb8eeb63cfe"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "be310a5245de70cc8bbef1c796e46edb"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "dcfd76f3da1b7c377b71e8a7cf85a1bf"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "7371696d74c2a57ac7552a3b93002721"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "25bb16a49d29ee4b13866e6324f09cc8"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "4bc2fa7e836343cc63d1101d14e524a5"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "448f6891555505588546c1983e65e1d7"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "d407e2933394485e6a956d4d6f3eaf4c"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "52a881891261f285c95bd752cdeac827"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "1f9e8048ed81f55d149e3b685f13dc8e"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "cd0e2f8fd3507842a12a91221627f543"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "9bd0528f3c1d3661f62875a4976642eb"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "84f97197a938a113d3eb81edea8b2f55"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "49b3f7c432c45399da2055a55efadfd7"
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
    "revision": "be7637cf0772a0dc3e1ba9a5a6659a1c"
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
    "revision": "5b5a2ae8a4854819c2a718f010c7f3da"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "79e397c318040c136ab9420bf2d39f6d"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "800b0c71298fd6019c0cfd9adf60d5ec"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "81553450c2b3406765c8086a8f8423a1"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "243dee2d82b3babd81ef8e40e53cac7a"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "eb3c9d2b245bf3aa56f63e23155f6f96"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "72e5448443e3ecb96750112c526597cd"
  },
  {
    "url": "framework/跨平台.png",
    "revision": "37874644f9244c9bfed7f60f58237839"
  },
  {
    "url": "framework/模板编译过程.png",
    "revision": "0150ea9218de135f32b07e694877611f"
  },
  {
    "url": "framework/diff_key.jpg",
    "revision": "137b0497cc2732659af2d3ad62ec586e"
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
    "revision": "aa17e50d27d6a4a926901d7247736e41"
  },
  {
    "url": "framework/React/index.html",
    "revision": "d30251aa9b66728f94b24fd36a6a296a"
  },
  {
    "url": "framework/sub_pub.png",
    "revision": "521f365eff009e7bc89489806599ca85"
  },
  {
    "url": "framework/vue_vnode.png",
    "revision": "29c0c4ef86b34980a04e9f904170af97"
  },
  {
    "url": "framework/Vue/Virtual DOM 介绍以及 Snabbdom 源码解析.html",
    "revision": "56b276df6c1c9d720a8f5571c8809f36"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "2663d4a17d8a8fe1fefea7d90af915ea"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "de7ebb87aec7902a83c0b9e1fea77555"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "87bc1261364cdc7753792e75d3ee6b84"
  },
  {
    "url": "framework/Vue/Vue 源码解析--一些工具方法.html",
    "revision": "7b0d1d5d2633ae29a0977c0ef385d203"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "272670f82460ade001d572ceec7e7632"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "b3ad1428896ac8b2de19979079de3cb6"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "3072fd43fa3a96fe2b350f9c38512338"
  },
  {
    "url": "framework/Vue/Vuex 介绍及源码解析.html",
    "revision": "9b74e4e701da95f9c5f0b65eab738b81"
  },
  {
    "url": "framework/vue编译模板流程.png",
    "revision": "78be4fbecef653e1c526e73f9e1d36c1"
  },
  {
    "url": "framework/Vue初始化与首次渲染.png",
    "revision": "27af72dab56c10950017e4251a2b1b3d"
  },
  {
    "url": "framework/Vue数据响应式原理.png",
    "revision": "9ef66f2009ecb3060401c5dbbef95822"
  },
  {
    "url": "framework/Vue响应式.png",
    "revision": "e3108991886e84a3fef77643aa6b3118"
  },
  {
    "url": "framework/Vue虚拟Dom.png",
    "revision": "2b0b22e424fd269601ff72d22c8132f4"
  },
  {
    "url": "framework/vuex流程图.png",
    "revision": "288a0dc913bab3fe765baf18fb4bac27"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "61d57389c9867bab707dc41be127c7ab"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "c9670ea8181db83d3085c415dfafb56a"
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
    "revision": "ba739726ee3a2b9430061e2456dd8206"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "d14a4a1a3531bac3d4aa625bbd252bfe"
  },
  {
    "url": "server/csr.png",
    "revision": "bbef1c6c52e1da8dbc70fe8fdeeab49f"
  },
  {
    "url": "server/ssr.png",
    "revision": "a2455bb393e39d01b02ad7057308e74d"
  },
  {
    "url": "server/ssr/服务器端渲染.html",
    "revision": "38b7aa2bdd812da8a561e7d27da67b43"
  },
  {
    "url": "server/traditional_ssr.png",
    "revision": "06ad4feb5dde3abacea8fea3ac3b769e"
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
    "revision": "9dc04826fe7aff6d4c5ca58a673cbb7e"
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
    "revision": "aa6157417593fd6a3d8c0a0e421dfc7a"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "a355b81de6bb88b8af5b934742295388"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "82601df9903b966d975b2f75846e0316"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "b63c3a1c25e07bd970882b55f80900a5"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "c9bd446729937a20a3ebfce069b92e79"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "e0d514ae7d966560f560f0b837669d56"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "4a28b0045448a65e7f296f67aa93de6f"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "f08c665c33bb7e21d80f09af32275859"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "30a089248662f805f82e683ab97f74c2"
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
    "revision": "62045408e87af944dd16f080de6389f6"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "a6971873318f38c96486a2f6126e1a7c"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "1b604e69a5938d8a200afb3d1af581a2"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "0bd5e97629ab16c4e31dfff523f1a1ea"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "02b65f1dfe92f255dbfd4da9274f66a4"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "cdfd599100680ab4f5593620b0b3188b"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "6d0d955e339088a3ca92b173a5aa6650"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "ae7131d58b52dd10bde6400fa15996aa"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "66150b55986f553c3bf1df4128e2608a"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "ab9a4e203725a86c6a843fb1119942d7"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "ec0a33e1340220738cccb8d77d8b139f"
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
