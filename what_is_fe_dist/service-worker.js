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
    "revision": "adadef97eb59469b683547d8afc9a823"
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
    "url": "assets/js/10.f9ea4151.js",
    "revision": "b09589cbcac1b76bdca9ce73d01eb1de"
  },
  {
    "url": "assets/js/11.460b07fa.js",
    "revision": "4abbee4549ec810191a3e2d146146a3a"
  },
  {
    "url": "assets/js/12.b66bac79.js",
    "revision": "a0cb2a4a14be2f3eee4de28ae1ac3268"
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
    "url": "assets/js/18.33482e40.js",
    "revision": "d3d42ee26ddb17562a164bad6e3f6846"
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
    "url": "assets/js/20.55b96468.js",
    "revision": "df1c879ba4fe640ff50a91603030ed4d"
  },
  {
    "url": "assets/js/21.a2b545a6.js",
    "revision": "f88f3c72e2d127eda058d9fc1f504675"
  },
  {
    "url": "assets/js/22.77b722ae.js",
    "revision": "ae00681f58df49dbc2deed7b9d87edcf"
  },
  {
    "url": "assets/js/23.5c69c1c6.js",
    "revision": "33d434b739ef4f24015fa99d8904b6bb"
  },
  {
    "url": "assets/js/24.ab4558f1.js",
    "revision": "89857587f4373e3ba361e82f8eefdd1c"
  },
  {
    "url": "assets/js/25.e9f9c7b0.js",
    "revision": "cfb8e2a9c0be7bd1369b76b788738ef8"
  },
  {
    "url": "assets/js/26.0b48ef52.js",
    "revision": "f6cf56fe5761507cbf87183afe67cf16"
  },
  {
    "url": "assets/js/27.895c7084.js",
    "revision": "8ebc8d7e8c316352d963d33e1e83cfb5"
  },
  {
    "url": "assets/js/28.3980a94c.js",
    "revision": "e588adc1303ca5e107ef10cd16f31e6f"
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
    "url": "assets/js/30.6477c61b.js",
    "revision": "319ffb3c6a855bfa20e2740e57647de0"
  },
  {
    "url": "assets/js/31.85e2dd03.js",
    "revision": "38ae42e90db807c31229b19d7488dcc2"
  },
  {
    "url": "assets/js/32.63e20e5b.js",
    "revision": "306668132f5cb6df06d67081f6b5da9f"
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
    "url": "assets/js/35.23c052da.js",
    "revision": "54a7817715a0afa5703d9e195e311d63"
  },
  {
    "url": "assets/js/36.f3888f4d.js",
    "revision": "207febf9fd07c0ddaf60af68ed17791c"
  },
  {
    "url": "assets/js/37.ea679375.js",
    "revision": "411f73d3e9c830780533795fda2247c4"
  },
  {
    "url": "assets/js/38.35f74fcc.js",
    "revision": "09d2274ec41ecc83257103f8a1cff2df"
  },
  {
    "url": "assets/js/39.d243893a.js",
    "revision": "d95db6a24fb433e850eca950c39b4566"
  },
  {
    "url": "assets/js/4.172e36d4.js",
    "revision": "8ab37fce23727194cafaaca1ac5272a7"
  },
  {
    "url": "assets/js/40.cc596773.js",
    "revision": "a9ee5e6337adcebb38d5f66a4a67e389"
  },
  {
    "url": "assets/js/41.4261e168.js",
    "revision": "6fab1fccb5fd882f1e377ed423679637"
  },
  {
    "url": "assets/js/42.2876f2d2.js",
    "revision": "8ec475f8709fbc8340f07ba3904db896"
  },
  {
    "url": "assets/js/43.2bcc9df5.js",
    "revision": "66274a096e4e37587ec21d563f6530a1"
  },
  {
    "url": "assets/js/44.79c27370.js",
    "revision": "eaf7ac98241420bf83e13a8a8e621839"
  },
  {
    "url": "assets/js/45.6ef8d815.js",
    "revision": "ba3e030527fa94dae46cc12542d031cd"
  },
  {
    "url": "assets/js/46.c4d00259.js",
    "revision": "5cac9d7070a2f9cacb8b91040b4e96d6"
  },
  {
    "url": "assets/js/47.9f22ede1.js",
    "revision": "42d613bfab92d4ead7cd5d304f8df889"
  },
  {
    "url": "assets/js/48.da12f83a.js",
    "revision": "f6b1c7086471870efbba04b20a44d384"
  },
  {
    "url": "assets/js/49.5cfec78c.js",
    "revision": "290a47a010bbdd8bb9a3b9aaef80afb4"
  },
  {
    "url": "assets/js/5.6681de7a.js",
    "revision": "59f791ba4736484e2088b3db53f2dba1"
  },
  {
    "url": "assets/js/50.65224963.js",
    "revision": "6f931f5da6c002f2567d71f73cb92e1a"
  },
  {
    "url": "assets/js/51.4e5f0614.js",
    "revision": "9b16aec3dbbf36678576ba487455b14d"
  },
  {
    "url": "assets/js/52.df284287.js",
    "revision": "547234787e10876daaec8bef96c051fb"
  },
  {
    "url": "assets/js/53.36cf8248.js",
    "revision": "ca07fe8bd23c398e30a03536142fbf04"
  },
  {
    "url": "assets/js/54.66b521b8.js",
    "revision": "cc13052d8cddacaf190d8e508c2ba367"
  },
  {
    "url": "assets/js/55.32770a6d.js",
    "revision": "cab9a7b7643ca7d928c305a4adaa567c"
  },
  {
    "url": "assets/js/56.74ab524a.js",
    "revision": "cf1f407643913859506cda3ca1001650"
  },
  {
    "url": "assets/js/57.48fd0d09.js",
    "revision": "200e4a3470567ebc36c9fdaf4bf9ccea"
  },
  {
    "url": "assets/js/58.044bd864.js",
    "revision": "639323f6266c7d84ad020a306c6e06af"
  },
  {
    "url": "assets/js/59.94ffc0f4.js",
    "revision": "39abebae83f6b1d9e38454e72eb7847a"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.8689a107.js",
    "revision": "665a8947a86793273740794315551208"
  },
  {
    "url": "assets/js/61.1b93dda8.js",
    "revision": "55dc932dba97e7439ab83caaa9479110"
  },
  {
    "url": "assets/js/62.ed8e872a.js",
    "revision": "a388a4de051a73ff1fbab44365574b4f"
  },
  {
    "url": "assets/js/63.5d6bc4d5.js",
    "revision": "def74243bf143f7d2c26dae912ca3ecd"
  },
  {
    "url": "assets/js/64.6a13cb41.js",
    "revision": "e42534726ae514a68cd59502640ec2f1"
  },
  {
    "url": "assets/js/65.66eff70a.js",
    "revision": "180f9a40ca9e21e570c7c6cf74dfd16c"
  },
  {
    "url": "assets/js/66.d21d99d9.js",
    "revision": "5fd55f5c0346ea3767655b194400505f"
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
    "url": "assets/js/app.5bc1568a.js",
    "revision": "722c6459d76ea85d8bcbc5f98d7440db"
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
    "revision": "76ec614ff488f493b6db5af580b4a8b5"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "da6b1d6600abbab6e668dc2b161ac1c0"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "81ee661717a3ea0665345f17ef4eaa6c"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "bb665b17476edc8c95a1e442b2c6847f"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "98a04d5d9e93a98a7a5e318712b05f1f"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "29a1d82fe9025123bae553bf09becb62"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "1bbeb4f746c323e8a29ddca4e5cafd61"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "66718a6a52cb8c1e5c7d4f7048d6e4f4"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "86eb6a42ada00bf53d4e42bc6881842d"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "11188cecfc62e0f54c89726886321f35"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "73d6fa58d3edf2d835b419dc5c84d4b2"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "b716c3a4739992f773846599f464a5c1"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "2ca4e7c32b5721d4b0cecb109cf999ce"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "e0a1b194e9d806ce321c14eff050b87d"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "2c7b7adbffc45ad03e465d095dcafd2a"
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
    "revision": "b15d99afab7c2c1b8a50730a63f2ac9e"
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
    "revision": "3209ef714c6cda5f6efd3a4001465315"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "0e3c1ffb52202623849b22e5395b62be"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "49c71ebd3ee7854e0d0e6946bbbf428a"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "01ed62fd5c3d8bc2eb7f447c735fb632"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "3772fbdd69ed4f304be70986f249f798"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "c65273a252d83d858bfa6bcc30b2b719"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "2f0e961c64b025cadeb7c545add03365"
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
    "revision": "030d8522789d09df68bd13ba16d255c4"
  },
  {
    "url": "framework/React/index.html",
    "revision": "c624853f7ad061f49b754bdcb0b81208"
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
    "revision": "4f189bb077226d8f1dce880c2413f7a7"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "e2c507108854f36b5a9966e927a713f8"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "f623ac8b23c749743de01b395e8a0b7e"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "569ad03d0fc71a9b5aa3a54edfa62acb"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "427e3c490c37d37f20526306011d9604"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "49f455304124a2337a2ab988703799e2"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "b2bda9c64a916d8564ff1a45494617b0"
  },
  {
    "url": "framework/Vue/Vue源码解析--一些工具方法.html",
    "revision": "a3b1d56873f009727819fc8c59ed078a"
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
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "a60835c7a16ec2db38c07fc7ef9b1a99"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "609a11365b8eeadfaf369696ed586f30"
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
    "revision": "890558629d6e34dcc1a9f049b7c670f4"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "60585c99c0f602164c99b1f795513191"
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
    "revision": "c9f5fb44860147f71726bf797b84b600"
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
    "revision": "f252ebd0e1d177c0a8e4ce7687b73135"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "2224a65cbb16dbc280596b2c2f106042"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "e87eada07822c08539fd58ba3634a582"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "7eaa3db121763dc142f3df97cc9a6e70"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "381f7892ab06e99a91814013124b52b5"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "ced4cd15b628a1c2ad79c52a778ff609"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "71d64acfe9c1929f0c7712db3ebe809b"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "4bbf33a602634a3a451f1d2ac67d48ef"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "121ee9ad2067f9bdeb1ceba7c482b1ee"
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
    "revision": "3a5aff579f7d40fa85ff5f8f7a5ad3cd"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "9566d088d23f93080f63a214b3036287"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "93334ec3b648359359274a3240063573"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "a601a3894b733d8bbc071ba7f5295071"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "742a30a03bfdecb45d0473298fbc2e6d"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "6578beff9f3260eaa1334b45fdc2df68"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "00ca1bfb57f75a196c1ec844c80f4d3d"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "879508888d430679d83a15db82755ab4"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "43702e5fae0e1ab4cf5e6051e259065d"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "6f0af76ed8b1fb6a2976032c27ec21c0"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "8eddd9aa9c19753695590c348b2c4b1a"
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
