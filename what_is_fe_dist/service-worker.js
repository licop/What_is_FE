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
    "revision": "289c35db387a6825adb8162ddcf443f6"
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
    "url": "assets/js/11.3aeeb987.js",
    "revision": "03d4cbc1ce03e8632f72b7c1dd12b613"
  },
  {
    "url": "assets/js/12.b66bac79.js",
    "revision": "a0cb2a4a14be2f3eee4de28ae1ac3268"
  },
  {
    "url": "assets/js/13.a4c2a702.js",
    "revision": "8eb30a527ba0d4ebae51e0230e41b24a"
  },
  {
    "url": "assets/js/14.b1402da3.js",
    "revision": "53c6b04a0af35863fdb504165cb4c19a"
  },
  {
    "url": "assets/js/15.ce645e31.js",
    "revision": "e292f03183376cc8c5c91e7046a2fdda"
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
    "url": "assets/js/21.d482a03a.js",
    "revision": "fa893f6ac0a89a0be00c9403265cead6"
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
    "url": "assets/js/24.79266300.js",
    "revision": "f81b556e8c9bb401151829d17d11b155"
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
    "url": "assets/js/27.bd1cfbc8.js",
    "revision": "f5658e3b566cc3a1a1363c5513e6e5e1"
  },
  {
    "url": "assets/js/28.39460385.js",
    "revision": "f8e11790ee9557609f8f9540305eb7d0"
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
    "url": "assets/js/30.6477c61b.js",
    "revision": "319ffb3c6a855bfa20e2740e57647de0"
  },
  {
    "url": "assets/js/31.5a62bac2.js",
    "revision": "b8823ceb313416e2742cd8e90a68de4b"
  },
  {
    "url": "assets/js/32.04e8cba2.js",
    "revision": "e0d01e8082dda0bc159178a2c41e6908"
  },
  {
    "url": "assets/js/33.2721e7a4.js",
    "revision": "f5360f265351364bbea33a313995d929"
  },
  {
    "url": "assets/js/34.29ff604b.js",
    "revision": "69f2785250b58d0d6a6a41c5777622fb"
  },
  {
    "url": "assets/js/35.0ab5b28e.js",
    "revision": "0a1cffe21b6547e94f2ced81b8821b43"
  },
  {
    "url": "assets/js/36.8fb0a7ce.js",
    "revision": "977a1f18d87adeb6ff2e4a0d85bed2f3"
  },
  {
    "url": "assets/js/37.66727ab1.js",
    "revision": "1b052cea9019a1b18ddbee5e2ebf1b9a"
  },
  {
    "url": "assets/js/38.8f69f071.js",
    "revision": "8a3e0ca8fa48ca2e3306aea651fc594d"
  },
  {
    "url": "assets/js/39.c61503ab.js",
    "revision": "5b227ec1e0fc3e10d283e351d9082f6f"
  },
  {
    "url": "assets/js/4.d8cecf85.js",
    "revision": "b9395d571179909349184b99c0b65ee6"
  },
  {
    "url": "assets/js/40.1c6aa9b8.js",
    "revision": "3c483515f55ce919a41b290b91b8774e"
  },
  {
    "url": "assets/js/41.228a6102.js",
    "revision": "49b85c31383adfcbe30f1d2df423c64e"
  },
  {
    "url": "assets/js/42.ddb814b0.js",
    "revision": "a038a75fb6a1af6dced6791bf7f2607f"
  },
  {
    "url": "assets/js/43.72c83901.js",
    "revision": "b531366224ae24aa09c1bf9c9741822c"
  },
  {
    "url": "assets/js/44.42e69fab.js",
    "revision": "fbb271a80df67307a35c93587c54a2e4"
  },
  {
    "url": "assets/js/45.194807b2.js",
    "revision": "fe324a6089045caa72968be1ad77e633"
  },
  {
    "url": "assets/js/46.10459c0c.js",
    "revision": "07074395abcf9be25fec27e877aa3716"
  },
  {
    "url": "assets/js/47.a967258b.js",
    "revision": "0caf4acc68b8e5061d20b2e9b7e2d57e"
  },
  {
    "url": "assets/js/48.57ec2787.js",
    "revision": "618272fb3cc7209fb3ef9ce40cd000c4"
  },
  {
    "url": "assets/js/49.95d379a1.js",
    "revision": "4985b785b691be00efb6925c821bc841"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.dd40218b.js",
    "revision": "4bdfe34fcbb1d616439376a51ae27df6"
  },
  {
    "url": "assets/js/51.0de088a7.js",
    "revision": "06892371252f69d77192b00a245d5caf"
  },
  {
    "url": "assets/js/52.08f3af84.js",
    "revision": "7f38ff3f9d419c8f8dfa08538067b9c7"
  },
  {
    "url": "assets/js/53.5d700436.js",
    "revision": "ffb4fef7b2347eda03edee20b1094b22"
  },
  {
    "url": "assets/js/54.f996cd47.js",
    "revision": "cc7941b9f8d3c4d7678f75500719cad3"
  },
  {
    "url": "assets/js/55.5f0d3505.js",
    "revision": "0f4f6d2e4aafae09e05db8061404e176"
  },
  {
    "url": "assets/js/56.2e4d2ba5.js",
    "revision": "c6d4238e644c3f23adf57e3f8e57553e"
  },
  {
    "url": "assets/js/57.28e955d1.js",
    "revision": "c3c71a5bdb19ad350a35dee560c2e161"
  },
  {
    "url": "assets/js/58.efb146a8.js",
    "revision": "76b0da5cfb5fe6bf1d192ad9ef5d317b"
  },
  {
    "url": "assets/js/59.818f2e79.js",
    "revision": "3237a23b81fcb1c52ec72894f0ea73f5"
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
    "url": "assets/js/61.86ed8e3c.js",
    "revision": "66a9e6e80fb8301371dd84af8e0537d4"
  },
  {
    "url": "assets/js/62.34fc3ca6.js",
    "revision": "20cfa992b3c9edc74291fefd233c6bda"
  },
  {
    "url": "assets/js/63.beaf0c9f.js",
    "revision": "d0953946cfceaa46c0c8476dd486a5b9"
  },
  {
    "url": "assets/js/64.befae99f.js",
    "revision": "7487b30ab57e04235bbf168cda3e91f9"
  },
  {
    "url": "assets/js/65.154434af.js",
    "revision": "6e88845ce995575127348cd772c713b6"
  },
  {
    "url": "assets/js/66.4629c80f.js",
    "revision": "1202000a3731ffe24df5317db271e7da"
  },
  {
    "url": "assets/js/67.a7893124.js",
    "revision": "acb35d4442eda684c61cdb836a281122"
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
    "url": "assets/js/8.4f4bb732.js",
    "revision": "3fbb109983bf06017c1d0b957840f09f"
  },
  {
    "url": "assets/js/9.bca781e2.js",
    "revision": "647986575b35f2cde0bc2617d3abb465"
  },
  {
    "url": "assets/js/app.f362ec33.js",
    "revision": "b65aace3f710718dd987a24ae6e21d07"
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
    "revision": "2ab4b4448d31c48ad270e4d1808a115b"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "2c19fd2df0583f9945e6577d303afc85"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "5083007ff9e59957ab9e775ae2056cd5"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "1323c7f10e08730574219de1ee31de52"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "a79e2a17a5df94fdaedbd1c481bb167c"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "d23fe9352ac30f3bdf5d4bb96f5daeba"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "ba8fc5f116fa66c2020f12e38b31c716"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "bd26ec3f5e5de5477d09144732b0107b"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "1e7730af5a96a1f1c9be5b787cab62b0"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "19e74aa32e84ce631d9d5f887314aa88"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "cca393bc56530afa8ba4ec33280b6608"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "c2c02dfdf159df4a94da92ba098c6fe4"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "f2d1a8ffea43bbc5b9aeb01a66f8dcf2"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "89968aabe105c38d724a07214988f91d"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "f816152e72e5e56ad3e8028e3fa48001"
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
    "revision": "059b2edc120674e8cdc0458f8eafd837"
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
    "revision": "92822cd9bb430fe5080bfe7e0da47176"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "1abc70d86536dba662f7106165d87cee"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "23e14dba530e7609615b9e4c4958125f"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "3d68f7275bc132ebbe0da6b2737e1baa"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "888e1dcd9b9cd2b6f3b7257c56b037b0"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "71bef8411a24824578c94f128fd3e5e9"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "8651162082e1bcc7b8999044147b00d1"
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
    "revision": "9b9ca1bab7ca70f49573b343fd2a84c8"
  },
  {
    "url": "framework/React/index.html",
    "revision": "421bfc3f088f7ef5a1dcf40fc52ab0ff"
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
    "revision": "236ec624e215be12ba46ff54d956cb9f"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "763dcc556c4722f44f2139ad09327922"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "7d78cf4698b2e2a52f548df2ec987fa9"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "8551f81a5ae7c74f6073c0cdaeed1a63"
  },
  {
    "url": "framework/Vue/Vue 源码解析--一些工具方法.html",
    "revision": "583baa4487304eb1ac546203c6112968"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "40ffc4a47f22c546f91b1a38b3716945"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "95b19505cc6f7512549c02f23fb2b717"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "624acfc8e598f33b14625cfb3ae6df22"
  },
  {
    "url": "framework/Vue/Vuex 介绍及源码解析.html",
    "revision": "4017d5482bdf061f9604b7c1bbf06fde"
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
    "revision": "766352a47645e19d8abe40da00176195"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "534064bf6e6292ef0a8d83b3c048e1fc"
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
    "revision": "7b645bb6ad014ad97fd7d71f2ff6f318"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "13aadf7da77828b98d196fda639eb253"
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
    "revision": "6572583da120e52a9f22a0ac26d1dfa7"
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
    "revision": "b353a442b3150600ef285945b05c57cb"
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
    "revision": "e3bc93a660d45a1308046c1e1e875bf9"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "a62c71a3ee4e31c28d6e42a70f79fb85"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "9b097ec15552f282dd46cb7cdf239de5"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "01e5577fdc9769a7e082f5fe4cfe76e5"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "9eb9bc9e07334e50c7fc85f5e275284d"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "f5fd392306c71673d0144b8f449797ce"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "5f889340b3862d09de4e4b69395709a9"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "9ec049048fbb027387cb7c63728c2495"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "634f9b2fa0c46b9570d57550c69a1607"
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
    "revision": "b8af3c9c920030a0d41bb336d8c92cb5"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "a9abbf67822cbe381186f341d0eb4838"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "9ee7076ec61fc78682a55180c1eb6b0f"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "d1abc510e6627a014115c1a29861a92c"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "05b9164980546cb089ba8cba9e6db3d8"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "40069cc42c2628d5c884ec37d01fdaca"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "70e38f8e41834e5f62c807f095b6208c"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "674da9ce2144638ad3bc515ec7cc6ad3"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "3e124290e1ea5ec67e9425fde86c93ea"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "3d2648f8e9a05dfd85b534506c0722c6"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "9f2f352671cc44bb2ad127b22c6a7465"
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
