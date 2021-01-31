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
    "revision": "f09a4e55ff94ae8a431b0bfc991b9a94"
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
    "url": "assets/js/11.f8d05fef.js",
    "revision": "af6858d21d8029ce3b7450ba31027d82"
  },
  {
    "url": "assets/js/12.2e2c7246.js",
    "revision": "567fb97e3fb0f45c426f9e0e82bbe36c"
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
    "url": "assets/js/16.a3e6ca3d.js",
    "revision": "a35a35283dcc338800eccf2f84efaa21"
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
    "url": "assets/js/21.cc5d852a.js",
    "revision": "33e51457703f765d8bafae5cce57d30e"
  },
  {
    "url": "assets/js/22.8912e7ee.js",
    "revision": "d6b2e39d6ed35de325bf725c39a8fa81"
  },
  {
    "url": "assets/js/23.5c69c1c6.js",
    "revision": "33d434b739ef4f24015fa99d8904b6bb"
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
    "url": "assets/js/30.eda55f75.js",
    "revision": "4e26b3f21f23b56c13a529e984206827"
  },
  {
    "url": "assets/js/31.7dc8e5b6.js",
    "revision": "514fc1e5308fc676065bf0ff4d517f99"
  },
  {
    "url": "assets/js/32.1df69aa5.js",
    "revision": "979349d5d80c3519c0fd0c8510042ffe"
  },
  {
    "url": "assets/js/33.928b4f61.js",
    "revision": "10231ff847111448b2d6d72c791590f3"
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
    "url": "assets/js/36.0eb77aba.js",
    "revision": "918f64fec1d8fdb323957d75754b1f15"
  },
  {
    "url": "assets/js/37.66727ab1.js",
    "revision": "1b052cea9019a1b18ddbee5e2ebf1b9a"
  },
  {
    "url": "assets/js/38.6d117ed8.js",
    "revision": "6bcde513b627cb48cdcc99ddc5f4adca"
  },
  {
    "url": "assets/js/39.700eff8d.js",
    "revision": "9db0110e3d07c67795c2959045d881b3"
  },
  {
    "url": "assets/js/4.d56f0852.js",
    "revision": "ec0da28112b0cf20b7d6e2a65756b32c"
  },
  {
    "url": "assets/js/40.aa5ce2ab.js",
    "revision": "5611ec9112d4fd700d4212fbb236dccb"
  },
  {
    "url": "assets/js/41.59d1c3dd.js",
    "revision": "c118baa239c78fe25495055b4e889366"
  },
  {
    "url": "assets/js/42.8c9a5191.js",
    "revision": "45cc32feeed508578d9561f4e16496b5"
  },
  {
    "url": "assets/js/43.d6c44459.js",
    "revision": "9a4810d5fe48fb143a8586593ab7bfa5"
  },
  {
    "url": "assets/js/44.106478dd.js",
    "revision": "e8b2c5a386077b61dd5bf4bba3d8162f"
  },
  {
    "url": "assets/js/45.5851f0a7.js",
    "revision": "a95d371ffd6d8efc54b60a6dad231766"
  },
  {
    "url": "assets/js/46.8113388e.js",
    "revision": "abe16c16e19e9e6a100559e0b238de84"
  },
  {
    "url": "assets/js/47.9731c93a.js",
    "revision": "b934e99a128a83c016d325b3bb681938"
  },
  {
    "url": "assets/js/48.d356e604.js",
    "revision": "d84ab3e39dab81a7053266834c7834f1"
  },
  {
    "url": "assets/js/49.336aa7e7.js",
    "revision": "acdc7610ca626585a4ba7b6aec762d3f"
  },
  {
    "url": "assets/js/5.f8f27f75.js",
    "revision": "02e5d10bfdb1d77a32528d9585481a70"
  },
  {
    "url": "assets/js/50.f4c3b18e.js",
    "revision": "87bdcb6272c73c823c6f4f64512220ce"
  },
  {
    "url": "assets/js/51.72547c69.js",
    "revision": "b58a67f1b919951ffed4c7df0e94cf80"
  },
  {
    "url": "assets/js/52.1c27578f.js",
    "revision": "f52381f763e8a8c41ff9ddddf32fa06e"
  },
  {
    "url": "assets/js/53.59fb7123.js",
    "revision": "3e2b58b1fc2ec3a3a575eb9bca06dc9a"
  },
  {
    "url": "assets/js/54.5cb36450.js",
    "revision": "0ffe0c78d29d93231c38f05f5b23aa9e"
  },
  {
    "url": "assets/js/55.76dfddca.js",
    "revision": "89ce3f2ab85774dca95d14988c2e3d33"
  },
  {
    "url": "assets/js/56.59926546.js",
    "revision": "b6965dac0dd54e26ef7114a64a45009d"
  },
  {
    "url": "assets/js/57.21bdac78.js",
    "revision": "3dfea89fa366fe9915300a2917d28280"
  },
  {
    "url": "assets/js/58.aa3fa072.js",
    "revision": "a438f8145a1876f03054342a8b948991"
  },
  {
    "url": "assets/js/59.1f312174.js",
    "revision": "a5aa4f5c23b0f0f73c8f399cc8499e70"
  },
  {
    "url": "assets/js/6.5d0f7064.js",
    "revision": "1a6a55111f5437523ec177ca680a7613"
  },
  {
    "url": "assets/js/60.647e0dff.js",
    "revision": "e1d86c4924d9e271e4e68fe2243f2a54"
  },
  {
    "url": "assets/js/61.d9b51f61.js",
    "revision": "6f749499b9ead493dbfbb7939d387564"
  },
  {
    "url": "assets/js/62.e2707912.js",
    "revision": "332424a5d226c82006e5b1495737abd9"
  },
  {
    "url": "assets/js/63.57fdb8d7.js",
    "revision": "a3edaac170e22538acabc2306cbe7cc5"
  },
  {
    "url": "assets/js/64.b6c48fe1.js",
    "revision": "6245ad2b64c093f5c5c460ac534c1011"
  },
  {
    "url": "assets/js/65.dbcaaf41.js",
    "revision": "033e56bf40f9ff127f7e2f57ba2c2a36"
  },
  {
    "url": "assets/js/66.d28545ee.js",
    "revision": "52765caac07698a1b2865d4c862bf1e2"
  },
  {
    "url": "assets/js/67.1914154b.js",
    "revision": "58374809c7da7ff2929bf008e5cf2047"
  },
  {
    "url": "assets/js/68.3a9aaa4b.js",
    "revision": "1db7b4dc43d65385935dabb1e6b8d2fa"
  },
  {
    "url": "assets/js/69.1a855be4.js",
    "revision": "e271c2d9c80d7256a7ddf0bf27d2dde9"
  },
  {
    "url": "assets/js/7.ab8ffd39.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.dcb4cdc7.js",
    "revision": "506e353d8d4fbcb9cbc29a7e19f53eac"
  },
  {
    "url": "assets/js/9.ad553fba.js",
    "revision": "c5d9ece68684488a646be5c30e6238e4"
  },
  {
    "url": "assets/js/app.ecd1342e.js",
    "revision": "63fc19696aa1a1f2e87e04a34cc17fc5"
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
    "revision": "e5ee1846ff4f0f12fa4c8a31d103f8be"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "558ba478043438c34b4b7ff8d88d2956"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "8ef8d8cefe23dad67726c66e88f4a99e"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "7b599d2408c2c79470b8ee3768bd2396"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "1921717771120dc59caa7c2180ae9f20"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "3b79e0e428b0117055afbd899e6a7b3f"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "f683ad96cbb0dfc0bbc7535b7c1b604a"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "a00fdcb752b66608d02fdea55882232d"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "f0ed6ff3c7348171aac224857f9a21e6"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "bb5da8515f5b1519b4630386634944f4"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "605e80f60dfb095b6683c3a1f3e0195d"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "0d2d3c2a15c404c82a12f0f52138e8d7"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "9a4de1a2e0d88269fefed82765006ab1"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "b35a3de12efba995ea27c34dabec221b"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "36773136963f0bad7f154027866b93e4"
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
    "revision": "5f7ac90e4074098896ed6f008aa8059e"
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
    "revision": "877fb19235e7804af4b32f2213723e1f"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "d1ddfc9c847ec2304b2ae4d670788903"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "25a8b07067770d25fcdfda771cb3858a"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "a5d36af35195ed47a7888157b66c8d4b"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "9fab57a8f65d7068432e322c40412c69"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "d9bb64c55686fd793aa36f1bd9a56b5f"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "02139f39a471a171f52471e38f935aec"
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
    "revision": "f18380f5aa8b961cfd17a3aef9a44538"
  },
  {
    "url": "framework/React/index.html",
    "revision": "01fbd628d6527a83ae81d6deddfd822b"
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
    "revision": "26aa7ea4ac4c3c49364d496d6f6855aa"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "7f480e2495a7a55752df82c43387f873"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "a1f7e212f7fb38fd261dcb82fa2490d0"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "6e76d0b7a6f077759e83ed32e0b90bce"
  },
  {
    "url": "framework/Vue/Vue 源码解析--一些工具方法.html",
    "revision": "6700f7fd8e6d11c64ba6d8a2530b9667"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "10e37b2eea135052c3e4c85b76ecbcb6"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "5fce3a80ff814016e53775530d56da42"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "88eb650734af7bab172f4b241d54219d"
  },
  {
    "url": "framework/Vue/Vuex 介绍及源码解析.html",
    "revision": "e883ddc5d2739d90b8182c913d413325"
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
    "revision": "1679d4e7fa0830ff95215edd20dba4bc"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "de5432a095c304efcc4857c789f802ad"
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
    "revision": "0ada12520493398d96036a6cf8aa3592"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "da82847e8cdda8569902ac79c62513e8"
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
    "revision": "b3cef0bb06e126dd751b5bc37a0aeab3"
  },
  {
    "url": "server/ssr/nuxt使用.html",
    "revision": "119cb8df43646419dba4f93681ba4f33"
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
    "revision": "a5c65ce940540b2f4c7aa55e79a1e628"
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
    "revision": "2469e6835af26e19b915bf313174d108"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "34a398fe49575fae1b7a99003b17140e"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "6d4f47f40403416a5ec1bd885ed4ef65"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "14450be97d0435568e0c609dcb4d15d1"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "fd279ea3eff83b3c16d9e8173c7dd971"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "e721fa3c42f11398fa4acb784c3b648d"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "9f879cc8e81c4a46e13fa21c3a0a2970"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "fa2ab4c64503936d6094462516c39041"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "117fccfb33735cd924bb9521807b5c8e"
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
    "revision": "a01693feaf7625fd5820fc49837da249"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "6b856a25ce4afb812d2cf0141b3d191f"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "36468bd69cc3740cc4124697d4c6ebb4"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "e79b3848ff238271631c83c1668a6521"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "46ccb43d272dd279db9fbf82ef722e82"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "226baa255df53fb61e3d52305db71aa8"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "c69f029a30f5d24e753e46b2278c2cff"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "4e7fc0facd988307164f68cbac8f4916"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "e977f7787123bddfb99a74e861e22dd0"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "eabd812803536f76f96b71f661aac759"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "c2a543960a4680538f37f5568204347d"
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
