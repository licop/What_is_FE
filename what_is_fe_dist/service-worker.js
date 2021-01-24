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
    "revision": "a2245b43915bf8aa8502800156233877"
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
    "url": "assets/js/10.591f96cb.js",
    "revision": "499390d1f0ad141c5f72fc8db5b9d0a3"
  },
  {
    "url": "assets/js/11.460b07fa.js",
    "revision": "4abbee4549ec810191a3e2d146146a3a"
  },
  {
    "url": "assets/js/12.48e62fc1.js",
    "revision": "0f5ee4afb7ccdc1a372ccf151a274b7b"
  },
  {
    "url": "assets/js/13.bd2e0811.js",
    "revision": "caf48faff7fb6bb3baa5c453e6c35bf6"
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
    "url": "assets/js/16.2355070b.js",
    "revision": "ab47dc250579142bffd966ae9ad491e7"
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
    "url": "assets/js/19.f0db7d2f.js",
    "revision": "5caa2dc55dd1dd64136c8189c9397b27"
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
    "url": "assets/js/31.7dc8e5b6.js",
    "revision": "514fc1e5308fc676065bf0ff4d517f99"
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
    "url": "assets/js/34.29ff604b.js",
    "revision": "69f2785250b58d0d6a6a41c5777622fb"
  },
  {
    "url": "assets/js/35.20a80e96.js",
    "revision": "0d9ac1eb8b390c84e84eb8987aaa1530"
  },
  {
    "url": "assets/js/36.39187810.js",
    "revision": "e3182b4e97ef0620779a7f4be099c53c"
  },
  {
    "url": "assets/js/37.84c12dd4.js",
    "revision": "448ebfef035d376c99c4a0165cda1429"
  },
  {
    "url": "assets/js/38.957c69d5.js",
    "revision": "f585afc50629bba9704ad457a0ade603"
  },
  {
    "url": "assets/js/39.ce2d0347.js",
    "revision": "afd407c868e0382e19a09f13d24ef222"
  },
  {
    "url": "assets/js/4.e1b57234.js",
    "revision": "ee60434afa715ad2914a9b954e6cbe4f"
  },
  {
    "url": "assets/js/40.64aec7ba.js",
    "revision": "030ff336164052304abd9f50c09db204"
  },
  {
    "url": "assets/js/41.13a359bf.js",
    "revision": "ad797c10acefb0d4a951d0511fef75a6"
  },
  {
    "url": "assets/js/42.e5c41652.js",
    "revision": "e09c76129a85522eefb762e59ff7605c"
  },
  {
    "url": "assets/js/43.d63ea134.js",
    "revision": "89fdc7d26d2ae40f1964771fd27dfec0"
  },
  {
    "url": "assets/js/44.1e4a7798.js",
    "revision": "af40f420d95f3222b448b77794e3bdec"
  },
  {
    "url": "assets/js/45.fdac74df.js",
    "revision": "16a39825d7f8bc32089e7dafb0b5d377"
  },
  {
    "url": "assets/js/46.c58bbd34.js",
    "revision": "48b13ffa64596942553e9227a1b0d775"
  },
  {
    "url": "assets/js/47.3965d35f.js",
    "revision": "21c54498980ef8f38472046b14e22658"
  },
  {
    "url": "assets/js/48.447fb8ad.js",
    "revision": "98e931d153418eec9b7c2b6be08958a8"
  },
  {
    "url": "assets/js/49.83eaa609.js",
    "revision": "96310cd0da8a5b73ee481de0e7fc8d5b"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.f1ccfff4.js",
    "revision": "c4c16e440f3b4744863e3e0f683b7675"
  },
  {
    "url": "assets/js/51.e436bf04.js",
    "revision": "67761bbce8c94eb3e93329a31755a9e7"
  },
  {
    "url": "assets/js/52.a7317f99.js",
    "revision": "dbfb9fb3e4450505943b68998deebbdb"
  },
  {
    "url": "assets/js/53.4916d76c.js",
    "revision": "06f111c4194d2d84327418d6693151c4"
  },
  {
    "url": "assets/js/54.d7f6f1d3.js",
    "revision": "155b8d1e5e7645ed0ba37e6c263b698a"
  },
  {
    "url": "assets/js/55.a2e7e79b.js",
    "revision": "43a644ce30a24752d3c73ea2a83c241c"
  },
  {
    "url": "assets/js/56.093800a9.js",
    "revision": "b19ecdd386215903c2e9e014dcce1990"
  },
  {
    "url": "assets/js/57.9e30b943.js",
    "revision": "7beba985a8e82e091de4915007d9f0e7"
  },
  {
    "url": "assets/js/58.973c9dc7.js",
    "revision": "f961b29cfdff43aa7c26b50e950b5734"
  },
  {
    "url": "assets/js/59.8d3aa5a2.js",
    "revision": "8fb0081cdee11431fc0e101c7a27d0a8"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.fd85c133.js",
    "revision": "f0c58fa3e97b73673a74692fb46b84ac"
  },
  {
    "url": "assets/js/61.3f1c6b7b.js",
    "revision": "8e696f61bab19b1ea7b6cbc829b91ddf"
  },
  {
    "url": "assets/js/62.fb24c283.js",
    "revision": "4fdc4b89245d561495aa5781fb3d6381"
  },
  {
    "url": "assets/js/63.176d843f.js",
    "revision": "abfa3a5b0ca7b56d7644ae0aea900dd9"
  },
  {
    "url": "assets/js/64.5f297d68.js",
    "revision": "f51c8c62f6c181ef93f62cea87567c8a"
  },
  {
    "url": "assets/js/65.7e3561ca.js",
    "revision": "88eb3079133b6b8b515a2877528f328c"
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
    "url": "assets/js/9.8d9b981b.js",
    "revision": "a9a470847858eff561f461f07a14fc4a"
  },
  {
    "url": "assets/js/app.98242061.js",
    "revision": "6bccbe2660cd032daf5ddbbecad15928"
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
    "revision": "9a4297fff4dc8e93044eb9b4090cebad"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "69966d39d2da88e0563f1c47add16ee8"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "8a3fe05a95ec4802d93107b995141a1e"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "e3922edea1a1b4529c372def7685cbbb"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "ab25a0ac8a5ef53d3f64c3b29de9f645"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "a28946d83a0a741b1629bbb5d81fc6e9"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "bc522d1e3898bfeb9033bfe292b35edc"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "2ba118b5306873445830b590140f6078"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "fca455c835c30c0664f4742d7a444cfb"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "fc3b86ec1b200470b0897cbf6f902282"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "d1a24a3adc475b88c1bd8a1c2a89705b"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "f2179c55cd769d4c49cc1be26fa32793"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "62d90f1915b987064171b5ffee7be348"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "5ab06c4681984b4aac41fccde9250bea"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "39e29fae7a3df8d6156b30c6b9174331"
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
    "revision": "eb1e124bd3df0cf31af1a519309f7224"
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
    "revision": "fde13a611678b3e73465f5834e3c75ee"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "e4378956bea32029f5cda4c1e076e5b4"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "cfa038874dbef50129b39a18f98d31be"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "1a59c8a2b4aa7ace3c06f654e59f784a"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "a782b13c3941c3e4c7c527ae71e33c77"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "a2841752072b64b6bdf0f8fb98e030a5"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "98fe1c8f6710019365f1e9db2e7a1e8f"
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
    "revision": "502b49444c04f04f4b16a23f4503b567"
  },
  {
    "url": "framework/React/index.html",
    "revision": "cd4b8f82bc7ce368ca3b0033c54b887e"
  },
  {
    "url": "framework/sub_pub.png",
    "revision": "521f365eff009e7bc89489806599ca85"
  },
  {
    "url": "framework/Vue/Virtual DOM 介绍以及 Snabbdom 源码解析.html",
    "revision": "b7c62d2c657ed2b687baf4e9e9f00255"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "511bce0dc1d16bd3e3d58ef680a3dcb8"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "232f1ac956f6c3205d88e37a0379c1a5"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "11177229458f9b1f76830337d53a0e50"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "4507ebd832c6dbc093bd8f6f022103d5"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "6ef191261180fd65834749ef0f2fdd30"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "9f8a9cbd888f26753536293cba85e04e"
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
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "3e908bd2ed50f1d1a1bab69c47de6c70"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "3302c61f1f12b6410f3dc4dfe9c69a46"
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
    "revision": "e4a8f9654ffcd5b4b7049cac936cac84"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "a97a817fc8c919b7054e7d06eaebafd1"
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
    "revision": "7884419544b2979712cb8385465f4007"
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
    "revision": "a6052e97a69e5d22ff92f35f4019240f"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "93d5784804fcedd8310bdd9754115c35"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "9c285f928c28569763f2f90e1b073d94"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "38782d4f4479e1d35ebbbbb267de54c7"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "6a9d339f494b8096c043bcb9dce4c84f"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "12fb683dcb4c65f40c7ce249db7432a7"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "0c7b7feb966f3ad8702bfc4bddc1acd4"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "e974c21f678b27c7b024bfaa0ef60935"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "8190c079f71ba4edcbeecb4ce6abdc8a"
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
    "revision": "4cfe70db3d1fc5e9209ce45f594de91e"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "e5de023398942e3eca7bda8ccb33ac91"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "785974c8d8cfc80ec60a6bfc4bb5613c"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "51bca2c64ce802e92a43c582583509e8"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "0c0aa3c9422ca4ed4dc0196a9cba9198"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "e0cab974c3af010de0f14e028f8cb0cb"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "6370b5997a183d1997346d319bb9ead6"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "b48e4517e97cf95a68b77826f23588c1"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "d29a5a29f947677b639c1c0788e15a0f"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "bc961aad2c62d38c4a75e1222546eec1"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "b0079adcc1a659077f5a92eb04ada8f7"
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
