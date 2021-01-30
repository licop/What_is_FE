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
    "revision": "48f797086675368360fba6d2f411f8ed"
  },
  {
    "url": "assets/css/0.styles.ef8495e9.css",
    "revision": "b4ee5ae3cfc4ce86bebe512b2aa5172b"
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
    "url": "assets/js/12.b66bac79.js",
    "revision": "a0cb2a4a14be2f3eee4de28ae1ac3268"
  },
  {
    "url": "assets/js/13.8b715855.js",
    "revision": "348933cbc6a911fd0dcd8945fe8b9f52"
  },
  {
    "url": "assets/js/14.6bac40a6.js",
    "revision": "c352fab67e1a7ad3f67c9c253afd1c40"
  },
  {
    "url": "assets/js/15.e9a85e67.js",
    "revision": "c59c6919491db01067b0f98a28a95f27"
  },
  {
    "url": "assets/js/16.7c578722.js",
    "revision": "3f34f52f4bb9c0c1d38bdb2668a32f65"
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
    "url": "assets/js/19.d7334e03.js",
    "revision": "b2a0a82543ad7d85b9b7a3269ceae403"
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
    "url": "assets/js/22.49076df9.js",
    "revision": "7237675f8f2f91c4040eaca23c9b9c22"
  },
  {
    "url": "assets/js/23.f2019cb9.js",
    "revision": "9260d4d3f44f2d248824275e07bcbf03"
  },
  {
    "url": "assets/js/24.43ad3e81.js",
    "revision": "976c837e136d562c84ebd0e871321750"
  },
  {
    "url": "assets/js/25.40572b65.js",
    "revision": "f8e9643cd5880d289fba1933ed9f035f"
  },
  {
    "url": "assets/js/26.8c1df242.js",
    "revision": "e2d33f43d9796e3fd08be55f2ad4ffec"
  },
  {
    "url": "assets/js/27.7b630f19.js",
    "revision": "8c0c24b19f7fa42f56579e47b86cb6b5"
  },
  {
    "url": "assets/js/28.3287ba71.js",
    "revision": "67c704f66c0a2f9b243457191a344e99"
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
    "url": "assets/js/30.78d17318.js",
    "revision": "41a8c151dab9ff46ba2b6a7c7f5bf2d0"
  },
  {
    "url": "assets/js/31.85e2dd03.js",
    "revision": "38ae42e90db807c31229b19d7488dcc2"
  },
  {
    "url": "assets/js/32.15bfc016.js",
    "revision": "2000907b21a3261b8fd2d64859962a4c"
  },
  {
    "url": "assets/js/33.3dbc8cef.js",
    "revision": "9ea54eb0f2b645fe4ed96a637bf0caac"
  },
  {
    "url": "assets/js/34.0c377332.js",
    "revision": "7761a43527cb24ab73a1008336b71a0a"
  },
  {
    "url": "assets/js/35.990fa00d.js",
    "revision": "65389e6ec9c2e87de44fcbebde0bd1ea"
  },
  {
    "url": "assets/js/36.f5400109.js",
    "revision": "9060b1802c527a8d389328ebd0c07747"
  },
  {
    "url": "assets/js/37.4b54cd91.js",
    "revision": "762f13ec290f8a4faad15580924a0f65"
  },
  {
    "url": "assets/js/38.713c46ea.js",
    "revision": "bf165a10e5b6bc485dbf325db530af92"
  },
  {
    "url": "assets/js/39.e9be3f7a.js",
    "revision": "bcc9d6224058d0146e540c8b43b114df"
  },
  {
    "url": "assets/js/4.5f016dda.js",
    "revision": "9cfc4c83cbdf7db9a5145d6e9398856f"
  },
  {
    "url": "assets/js/40.c902ec66.js",
    "revision": "094f9bf6259b6ad23575b972aca03783"
  },
  {
    "url": "assets/js/41.d1285b1c.js",
    "revision": "2ec0f03b2d5035b992a1b05709ab4802"
  },
  {
    "url": "assets/js/42.e30202c3.js",
    "revision": "de10979ab0a4fc7c00127b8baf207590"
  },
  {
    "url": "assets/js/43.31104a9f.js",
    "revision": "eeb8fb6e484505520aff02f7ca5bfb1d"
  },
  {
    "url": "assets/js/44.05c5276a.js",
    "revision": "abc5d4aaece27fa8022ff24dc3ed8926"
  },
  {
    "url": "assets/js/45.194807b2.js",
    "revision": "fe324a6089045caa72968be1ad77e633"
  },
  {
    "url": "assets/js/46.7671e121.js",
    "revision": "4204baad2d8510a78b70f127e6eccdd5"
  },
  {
    "url": "assets/js/47.91111ac2.js",
    "revision": "197481b50d5cfb7430dc2dbdb6b6bd61"
  },
  {
    "url": "assets/js/48.6bd62965.js",
    "revision": "a67126e4d0013d843a2f5ff190761348"
  },
  {
    "url": "assets/js/49.6e5d8894.js",
    "revision": "bb813716fdc399b66b3fa27921fadba4"
  },
  {
    "url": "assets/js/5.f8f27f75.js",
    "revision": "02e5d10bfdb1d77a32528d9585481a70"
  },
  {
    "url": "assets/js/50.181256f8.js",
    "revision": "26f9fabb731270bde51e85b0605af590"
  },
  {
    "url": "assets/js/51.2dd6fa37.js",
    "revision": "b68e5e8c699c6c31e95af31044890d20"
  },
  {
    "url": "assets/js/52.04679dc9.js",
    "revision": "356eb646a7824e0120002849ce2a91ed"
  },
  {
    "url": "assets/js/53.14d62e99.js",
    "revision": "eb469184ee1f29c6d5af377b9abf5b6c"
  },
  {
    "url": "assets/js/54.c8b21ae6.js",
    "revision": "7a7b3c69098cfa77340cf3dea955da61"
  },
  {
    "url": "assets/js/55.628c5836.js",
    "revision": "2732dac2b2de64c98903d104f28d87e1"
  },
  {
    "url": "assets/js/56.e1df5ea2.js",
    "revision": "ad2b162ff32a44b5bde1dc4b3ae98a72"
  },
  {
    "url": "assets/js/57.fa55ee4f.js",
    "revision": "67a59c774bed9f3ea2802944936d71fa"
  },
  {
    "url": "assets/js/58.f046efc0.js",
    "revision": "bdb34e4d530eb18d79bd6b9f466ac0e2"
  },
  {
    "url": "assets/js/59.3c5f8ceb.js",
    "revision": "f1551269c15c6a1973a6bee78ee53019"
  },
  {
    "url": "assets/js/6.5d0f7064.js",
    "revision": "1a6a55111f5437523ec177ca680a7613"
  },
  {
    "url": "assets/js/60.2a77e3cf.js",
    "revision": "a5a83e0ad853965b67badca1e1c4a9f2"
  },
  {
    "url": "assets/js/61.e1513d2e.js",
    "revision": "32c114d83b51ef0e4a65001629bd66fd"
  },
  {
    "url": "assets/js/62.684714ab.js",
    "revision": "029e7fde04ae5d01e7c2535ee4bf97e5"
  },
  {
    "url": "assets/js/63.f9fea9a2.js",
    "revision": "61e9868d245f99acb51f94038a12aae9"
  },
  {
    "url": "assets/js/64.0fe171ad.js",
    "revision": "b0374aa000e5956fa2add37208f58f67"
  },
  {
    "url": "assets/js/65.3750bb7f.js",
    "revision": "594bdd1fd26c662fe255b94bdc35eeff"
  },
  {
    "url": "assets/js/66.e972fbe0.js",
    "revision": "74a78eac2fada891109392e5d8e0b1c3"
  },
  {
    "url": "assets/js/67.d8c71cf3.js",
    "revision": "74ac31473538e57d4b1636b084b2fe5f"
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
    "url": "assets/js/9.4b9e5ca6.js",
    "revision": "8c6890777d750f1d7e27a98a182453dc"
  },
  {
    "url": "assets/js/app.da4d7989.js",
    "revision": "f8a2d2c96981f5a54e5ea7ce16dc66d0"
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
    "revision": "e21b1eea0236130a125057d4b2b26385"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "2d6c3fc767f9e948c9abe7266a14ccf6"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "c7d82ab0c93e72e6393d78fedda58261"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "f2aedd095cc135162baed7fc1a8ae922"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "d3fb730144feeeb096c62b5599a1965c"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "bd59341c22d8ffadefe5d21c68665c8b"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "0180346f57d3d1a36bed399a72c07d0c"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "cab5e2e0e8a190750a7ae72926c7954f"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "4e9647659a5d62bf4dbac1f48ef8c7e0"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "15046688acbed7f0e72468f27ea278e3"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "0dcb1e66cb704e5688c6643811afb0f0"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "1a2d71f91d1559ca686703376c8d759e"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "f10ed2868498b609d8b5c605e1528bee"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "d75aed0d22d7afbb5eaa1de629489178"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "5ce480f341e4c74364b602c53b2e822b"
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
    "revision": "a7b119aba741efdc84f4ae118b20a775"
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
    "revision": "2dc16014a5fc2be6d0f5bad64dbbf3ef"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "c4b3c505defc2e25c2b4fcdf7d48a86f"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "cf316be1288a80a1354b416681fc5240"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "d9df91c88429c180699e8052cece5218"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "1f9037414ca3315c8052e21d974de4ef"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "de9e33748ae014d78f3c5596cbd0c77c"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "b93b6d13a9170ed5174220a13665a079"
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
    "revision": "936fc4bc28d58412de764c087ed6b38a"
  },
  {
    "url": "framework/React/index.html",
    "revision": "0dcdbd691aa807088cf5b44f9b25d386"
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
    "revision": "ae855bcc70da94df0c1a473ff3ae61e9"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "0be6c05f87702f7198b39940d3396f69"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "054d2a6e51d2188d8903d0d6cb0305a5"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "2250b9b7c33adcd6572aeaada7abf3be"
  },
  {
    "url": "framework/Vue/Vue 源码解析--一些工具方法.html",
    "revision": "60dc558bc047e18f7ea846d1ce0546b3"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "5bf111180cbbded5c8386bb14e0cb533"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "a9ef2317adc251eafc9cdfeadacfb15a"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "b79b4aa3fbc6b03020112d73b883a5b8"
  },
  {
    "url": "framework/Vue/Vuex 介绍及源码解析.html",
    "revision": "5c4d4269e315825ec7bb90630742a4a0"
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
    "revision": "78712b8ad476c1dc548e65130b55bce4"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "0f4459ec89bd8939991a84816246268d"
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
    "revision": "f59f31b0f4d02d03b1942eb09e93c03d"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "24c294e7a8a452b66175196ac0aff6fd"
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
    "revision": "6dc0a189d22696a8e706ce7af0a41f74"
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
    "revision": "bc77b34f84feab3b6460f54f997a734c"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "163bebebb2345a6c59701a589e7675b2"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "543cb6e9776f0556b10227367836b553"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "e1d5b1999704058caefca8ca0437d565"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "88c024b6e4f10b2e6448e629d49aaa48"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "d83a0125062ed7caea7ad125d97d5f9c"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "8e22c3e9be1f2f68a0de0815e66cdea9"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "60274ca259deb55de07efe02da3fbeb2"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "2045b563260a9b16567978219b98ecec"
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
    "revision": "7e8716cb26e58993702e8962e8948dae"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "ea5369ba3074158a77174557fedb07b5"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "23fe341f13388be71529849e7a4299b4"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "7c86db316c89983eacd37aa0aceb0c2f"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "b566baf62a0b17f8212fbcc7c7984b95"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "0ee7ffde996a6ad189dd8cda45f7640b"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "e5da133ee25dcac332d15303b30f504e"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "0cdbd13f986899f96cc3672322f364b8"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "aa8ce2693a4f655e063ce39bac64f94c"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "e2587ae01e450c1fa15485124a311f29"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "21528719e310df2a7e843978cd34c63c"
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
