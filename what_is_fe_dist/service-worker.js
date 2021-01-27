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
    "revision": "263912c637f45de756bf3e958f14b0e8"
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
    "url": "assets/js/13.8b715855.js",
    "revision": "348933cbc6a911fd0dcd8945fe8b9f52"
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
    "url": "assets/js/16.05bca15b.js",
    "revision": "a486379b7b09a1da12b4aeca13ac9b64"
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
    "url": "assets/js/19.5b01ecf4.js",
    "revision": "785af9ebfeefecddf6f32bf409cc6e5b"
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
    "url": "assets/js/23.6504443a.js",
    "revision": "5c27af64d96e95621a45852798a644a1"
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
    "url": "assets/js/26.febf3895.js",
    "revision": "a40b9c32584428144227634a482769fc"
  },
  {
    "url": "assets/js/27.895c7084.js",
    "revision": "8ebc8d7e8c316352d963d33e1e83cfb5"
  },
  {
    "url": "assets/js/28.39460385.js",
    "revision": "f8e11790ee9557609f8f9540305eb7d0"
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
    "url": "assets/js/30.eda55f75.js",
    "revision": "4e26b3f21f23b56c13a529e984206827"
  },
  {
    "url": "assets/js/31.3d7cee67.js",
    "revision": "239da7a4a4231860291d233fc8c23cef"
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
    "url": "assets/js/35.0c3ec10a.js",
    "revision": "d4be9e32b6be4fa33e2ee8a06771733b"
  },
  {
    "url": "assets/js/36.f5400109.js",
    "revision": "9060b1802c527a8d389328ebd0c07747"
  },
  {
    "url": "assets/js/37.53a642fd.js",
    "revision": "4104f76dd93fb115957df66de3b36dfd"
  },
  {
    "url": "assets/js/38.365c30b7.js",
    "revision": "cd50e49a49f5a2c18082629f49eb79d0"
  },
  {
    "url": "assets/js/39.700eff8d.js",
    "revision": "9db0110e3d07c67795c2959045d881b3"
  },
  {
    "url": "assets/js/4.a45e1e69.js",
    "revision": "170ca3561659f0f802bfe04dac160493"
  },
  {
    "url": "assets/js/40.9b189078.js",
    "revision": "6a601f8f03590fcdba4a624c0c447afc"
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
    "url": "assets/js/43.ca645346.js",
    "revision": "2af5cb92f04e105d0cab590d1598b8af"
  },
  {
    "url": "assets/js/44.bfad4d9d.js",
    "revision": "c40542822b17345788e925a445aab187"
  },
  {
    "url": "assets/js/45.a377970e.js",
    "revision": "9326a396a32f15e65104114119c2dc3b"
  },
  {
    "url": "assets/js/46.ee7cb0d6.js",
    "revision": "c2303a7033d8b003f7457b71880fb755"
  },
  {
    "url": "assets/js/47.7d24d755.js",
    "revision": "53dbfab043c2e9f858c9de232c126594"
  },
  {
    "url": "assets/js/48.303a2bc5.js",
    "revision": "f88de379471d6198aa9c2a9652122dfa"
  },
  {
    "url": "assets/js/49.b69404b0.js",
    "revision": "41f773b73ea338e877cb1546865a5902"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
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
    "url": "assets/js/52.c148770b.js",
    "revision": "63183508b4eab4f338a2850d06a62d84"
  },
  {
    "url": "assets/js/53.9f059ccf.js",
    "revision": "ce1cd040bf9dd67e68ec5dbf935d4c6e"
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
    "url": "assets/js/56.fc4db78c.js",
    "revision": "e7d8937847da23d44fd23eadb433df96"
  },
  {
    "url": "assets/js/57.b41f7931.js",
    "revision": "009173ad44c51e60cc8934fe4b089bc5"
  },
  {
    "url": "assets/js/58.522cda12.js",
    "revision": "79e7329bc1f7fe345277269874e444fa"
  },
  {
    "url": "assets/js/59.d9aae161.js",
    "revision": "1aa6cce3b81d49cce7a83a5a9e500524"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.0a77f812.js",
    "revision": "ad8bde7d100bc6e97afaafff014902cf"
  },
  {
    "url": "assets/js/61.27774c64.js",
    "revision": "57d4d08bf6ecf64c0d92b4485801fd57"
  },
  {
    "url": "assets/js/62.773a09aa.js",
    "revision": "76a3339a59fb34644792022af49fdd80"
  },
  {
    "url": "assets/js/63.ceffe470.js",
    "revision": "d35c91332cbfc73a45f6cf700ae9f24f"
  },
  {
    "url": "assets/js/64.3cce0f8a.js",
    "revision": "cb4e17f7ccb15ffca3dafa4c89c3f3d7"
  },
  {
    "url": "assets/js/65.6dc27d3b.js",
    "revision": "4cde2fe56aac0616124d681baab60b78"
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
    "url": "assets/js/8.626e669d.js",
    "revision": "af7d6b57e865c9df61215e6d638d6846"
  },
  {
    "url": "assets/js/9.bca781e2.js",
    "revision": "647986575b35f2cde0bc2617d3abb465"
  },
  {
    "url": "assets/js/app.b841a769.js",
    "revision": "fa2339b61aef9f55e8ce423c0094499b"
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
    "revision": "d4fd084c2f467406ca3238e87f2e0436"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "fa96ebbdd411d8436a36f65ee5724a51"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "4c25f8f35e37470149601873a68816e6"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "37ef8eea7daec2f1b308351e242d3dbc"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "d9a2a5ceb273a080f72d8af0847b160d"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "4b2db157d8d7c6fe7f10c01ae559f266"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "92871946477607987cb26d5439e56b6c"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "cae825bd2cc064b53da40110bb36c1f6"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "4050f97de0c21b12c6070b44b7be4aa7"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "0c8a8e404c659ff364bf9f386fa06efa"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "98ed84d2c54f71c2d597a8195e3aa54f"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "af1b46c688bc1521b45fc3dda21b835f"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "c7ef214be98aee9c4894d14e0d776df3"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "0df02c9118d5b7c351a1a64756553dc7"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "87910289519731046454113418187893"
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
    "revision": "2e28bc1df23413ec0fbd5f1e4ea3d1cd"
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
    "revision": "a3613a941d2ec781dd770f9e44fc9a2b"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "18bc542635bdfca12f3c7d1db820cdba"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "bdddbbc1ab6c1b76848933ac5868b3d1"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "f01a749dac0bd0dd6cfc51c6d44d0099"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "5f8134b5766c4dbbf5427a62829d2c08"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "80f118f4a5c32b9d5b76fa5b2e26bad4"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "4cde399c326bb2a72dfb071c6ef06e66"
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
    "revision": "8de89ce6fd104c5fcc51e06b8b328650"
  },
  {
    "url": "framework/React/index.html",
    "revision": "ffce5fabda093fd35c0047cd38cef8cb"
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
    "revision": "856cbeae42741a55ae3a64ac93c695c8"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "75db78ae7ee506b52a19b3418fe0a2d8"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "e7b4f06787f6a3f095514f82104cc641"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "5a304d188ee1f4244eccc623a2025913"
  },
  {
    "url": "framework/Vue/Vue 源码解析--一些工具方法.html",
    "revision": "a75c59efd218a836164bd705d361e9f6"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "4aca34a68d28a471cb7d4634409f1183"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "b5ce6c73362dd058af0fb47ef02ded52"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "715e9c84df9500363df2f6fef45f0204"
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
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "224ca6b9f53eb44eba2c14f839e8b3a2"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "d288ebcf2922416b84d77352bbe264ec"
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
    "revision": "ecdfcb0fcc8160041b0777f62c694bb6"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "a9efb2be49929ad835365947d0d441e8"
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
    "revision": "deeda494672ae5fc769d4b0dd9a674cb"
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
    "revision": "52b3a0965b54dd000e7ebd52c3a760fe"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "5678d9afe463284447f7aacb90f18a8d"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "19f9d78a98458abe6442df8b3826975e"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "e3dffb45ece3648c744310b4316522b2"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "c155861bc4c51a87929e4106c7d1f6b6"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "7726b3f22400998d4381d515cea0380d"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "be1b5a11304d14208564520aac278ff7"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "655bf278d5e0b2c9cd5b01bef5648f1e"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "a81885b136373b761ae08f3639cff83d"
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
    "revision": "7be2ba08b034d16e92d224d4bb4a2718"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "79c3b9ca811c24cf3020ff93a2d749e2"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "253f9d67d4ee1461d8f79a48718a9cd0"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "888ae824a7bcc58236fd28eb98978819"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "696270058038fca34c117345b34f4ffa"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "934ae6a9a02cf93108d2d475762464c4"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "3a9cc2f5429e8aa567061d982967799f"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "787a80c4bae442d61e4544ee3736887a"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "ff3f1d1afa8e02a7bd633f63ba2768b2"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "7ef5d43f7ddd5cd3e997078e8c1132c5"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "82bbf1c4fa7a627e119fdf25db86b253"
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
