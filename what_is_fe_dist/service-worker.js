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
    "revision": "978732b410d68928470282f339255f21"
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
    "url": "assets/js/10.f9ea4151.js",
    "revision": "b09589cbcac1b76bdca9ce73d01eb1de"
  },
  {
    "url": "assets/js/11.6cec0877.js",
    "revision": "61f7948f9336d5465140777d51215173"
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
    "url": "assets/js/14.bf3acadd.js",
    "revision": "580eb293bcdd4915712d28eea6a72a3c"
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
    "url": "assets/js/20.b1963b68.js",
    "revision": "683aff58d1f1807162605ec8cbee3843"
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
    "url": "assets/js/23.23ce7794.js",
    "revision": "e5679f2f0d3b2d7f35d41d07b1dee6f0"
  },
  {
    "url": "assets/js/24.1cc39488.js",
    "revision": "055dda35ab1d0a62bb26a787b39101ec"
  },
  {
    "url": "assets/js/25.ef85fa64.js",
    "revision": "83e63983e3cc531d1c4072e184ee66f1"
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
    "url": "assets/js/28.3d4aa3bc.js",
    "revision": "cc9246da1812e1fe7a760c44bd8deb81"
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
    "url": "assets/js/30.3985f50c.js",
    "revision": "546d0be8e9073544977356ab4145741b"
  },
  {
    "url": "assets/js/31.7dc8e5b6.js",
    "revision": "514fc1e5308fc676065bf0ff4d517f99"
  },
  {
    "url": "assets/js/32.15bfc016.js",
    "revision": "2000907b21a3261b8fd2d64859962a4c"
  },
  {
    "url": "assets/js/33.2721e7a4.js",
    "revision": "f5360f265351364bbea33a313995d929"
  },
  {
    "url": "assets/js/34.76450729.js",
    "revision": "3467571dbe10f9541797a957d206cb6e"
  },
  {
    "url": "assets/js/35.23c052da.js",
    "revision": "54a7817715a0afa5703d9e195e311d63"
  },
  {
    "url": "assets/js/36.eeb5899d.js",
    "revision": "09996b13ed6757cbb1190c9c5c46489d"
  },
  {
    "url": "assets/js/37.b6937ea9.js",
    "revision": "41e69ba0911db6ac0a8d97c5541e16be"
  },
  {
    "url": "assets/js/38.02c86882.js",
    "revision": "856493456a7e6130e69e99c3bb58a41f"
  },
  {
    "url": "assets/js/39.d243893a.js",
    "revision": "d95db6a24fb433e850eca950c39b4566"
  },
  {
    "url": "assets/js/4.a45e1e69.js",
    "revision": "170ca3561659f0f802bfe04dac160493"
  },
  {
    "url": "assets/js/40.cc596773.js",
    "revision": "a9ee5e6337adcebb38d5f66a4a67e389"
  },
  {
    "url": "assets/js/41.32bc57ed.js",
    "revision": "d99d4bb1ad80e6729c2c961082820eca"
  },
  {
    "url": "assets/js/42.9ca4d067.js",
    "revision": "822a7ab9642e4f10f32de60ed93154c1"
  },
  {
    "url": "assets/js/43.ca645346.js",
    "revision": "2af5cb92f04e105d0cab590d1598b8af"
  },
  {
    "url": "assets/js/44.641088d0.js",
    "revision": "a590605950ba4ba8e5e504010fd5f314"
  },
  {
    "url": "assets/js/45.d5595715.js",
    "revision": "ba073ff9aa0cbcba3fd9771f960e52ce"
  },
  {
    "url": "assets/js/46.ee7cb0d6.js",
    "revision": "c2303a7033d8b003f7457b71880fb755"
  },
  {
    "url": "assets/js/47.18ac694a.js",
    "revision": "4d32959fc1337785c3d20d4d182565d4"
  },
  {
    "url": "assets/js/48.303a2bc5.js",
    "revision": "f88de379471d6198aa9c2a9652122dfa"
  },
  {
    "url": "assets/js/49.1692b434.js",
    "revision": "eb20a3950b785d33552cc55c04ca520c"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.300f2151.js",
    "revision": "dc423f52f74e2e88ccb6e20048572e17"
  },
  {
    "url": "assets/js/51.b61f7cf5.js",
    "revision": "92f9725fca5301d4fa621e393b84e18e"
  },
  {
    "url": "assets/js/52.b6f18332.js",
    "revision": "b45d1922e973f7d9c6fe811d7c24561d"
  },
  {
    "url": "assets/js/53.77ab83fe.js",
    "revision": "0aeee0dfd5eace7a8c6d4b8beab82df8"
  },
  {
    "url": "assets/js/54.04301dd3.js",
    "revision": "6de308008931c81b291fa0b04e602c84"
  },
  {
    "url": "assets/js/55.67c05522.js",
    "revision": "0a90813ccb5a71376cf4a38a6eea8c2c"
  },
  {
    "url": "assets/js/56.c3e0171e.js",
    "revision": "d727012e71dd262bc775fba3533880e9"
  },
  {
    "url": "assets/js/57.f44942ee.js",
    "revision": "7efbbb98197e90d564fecde88e658de5"
  },
  {
    "url": "assets/js/58.9c41a41f.js",
    "revision": "3f2abfff63a24aa4ddfc8f63508c35f5"
  },
  {
    "url": "assets/js/59.95ca6e62.js",
    "revision": "7d05baa000e5cd94deb8c167f1946299"
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
    "url": "assets/js/61.ed0e4708.js",
    "revision": "06ce87dd8391be30349363cab107fe64"
  },
  {
    "url": "assets/js/62.ed8e872a.js",
    "revision": "a388a4de051a73ff1fbab44365574b4f"
  },
  {
    "url": "assets/js/63.8cdc1fd4.js",
    "revision": "092548f65ba979033ee56f05c51273ec"
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
    "url": "assets/js/8.f847aa7a.js",
    "revision": "b1c9ab125c33a057eeea93c7754eadef"
  },
  {
    "url": "assets/js/9.a1c872e2.js",
    "revision": "6863ca35da3aa52d6626237bba227dfd"
  },
  {
    "url": "assets/js/app.260c3ec0.js",
    "revision": "953141437c866d796b31e947579fae71"
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
    "revision": "701fc462e7a264fb3f9100fedfd079c9"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "98486a2e5fa9df10132019de54b0b286"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "7e5acdbdc893fbb473237eb983a42349"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "cd8d1479dae12beb1e26b22e3e843756"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "0a679694218f64d047b2a8d04b9fe92a"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "1358a5d0446e7d08fb705435414fc71c"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "680bbd09a50868ecc7e54c1ec28454b5"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "3156379e1531f42d35b7d988b2fccbe0"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "79f6ae25f7fb17f174b9605e73fd3e5e"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "c3c368c06dbfbfb203678c4838f8dba5"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "352695d40bd3ebf6acef5e301e5217c0"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "2c59307b2bb78bc884d4a444d653446b"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "57658092d215fa9a11229e79608678e8"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "0f2165da6a75d3434b05336b072d106d"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "1e8a47ecdc0111bb6f8e56e5506c12d5"
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
    "revision": "64fc55bfed41631b4e8d560ac50cb0b9"
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
    "revision": "6ae6e5045b4bc93128612955f9b89fbb"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "af0ceb6f38947520855282d2e92142b2"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "f37b09d7b62c971633cb3220a77dcbed"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "0b6eee2851f5b3b4a74f8f4abb718e08"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "9b6587038ac08bf5c7011f7cef68cbf0"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "918bcc3a2c2f41dd47937bfd395498cf"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "13ba961c37a2d78e5b1557e2b6103450"
  },
  {
    "url": "framework/跨平台.png",
    "revision": "37874644f9244c9bfed7f60f58237839"
  },
  {
    "url": "framework/模板编译过程.png",
    "revision": "6990a1836fed6f860bb1453e8e514df9"
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
    "revision": "c335a71122b775d1c07d987b1a6d2a26"
  },
  {
    "url": "framework/React/index.html",
    "revision": "b7f9ab7c2eaca2182cf44f1bf751a029"
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
    "revision": "692531fc50f289c58023a6815af47f0b"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "3fa69be3bb39487fdf22cb2f0266393c"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "83f9801130092e84ef00f6933bb09af6"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "262aef4106da84e0893991261fa34ca1"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "a9c858999835f5099b0cdca6275fe438"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "4c871fbbb42ec802d72a0184d810ea8c"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "d0f5215db3025e2eec6c4f1f8b7f13ea"
  },
  {
    "url": "framework/Vue/Vue源码解析--一些工具方法.html",
    "revision": "4d3e0a6c5a6a98edc20995857b627330"
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
    "revision": "5b63e1c3f81a30da8d47b872d2c01e6f"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "ba5b9f2af4f7f9e798d670a4c8f44b24"
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
    "revision": "a3b38b0776b32ab67ce8be92f53de905"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "93eb45a1974c0e79a56f9fd74d9012a2"
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
    "revision": "ebe8dd23a35a7be6888a6810eb9acf35"
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
    "revision": "25a21da8ee57fcb7a6896642c8760d7a"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "91cc20f720c984bc0c92aaaab04b86ab"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "093157febba33299c85392ff8b35da8e"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "8d0e727df245ec5ae54ea8965c04f7e1"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "cd71d80606a0c93b024c3991cb4e4af9"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "786b76275da26c7099743bbaf962a035"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "54434ba6ea11bb50cc5d5980751d5788"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "497f9732845bde5532ce9661a8b61748"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "d0f1635719d3c2d39d70dfb26b5055e9"
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
    "revision": "4cffe0a222de47b59df5c129706a36b3"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "373ca88603e201fa97b5caa0bc4df72c"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "e9df4abdd098be580dafe2489a4f1a28"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "60e0007941a8dfabc24777521bc3521c"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "ff60e29352dd44d69fff1be8296e26da"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "6fdf8f446611cdd2b559e26e265630de"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "902df9d244bf7a6b0ed794dc50d04a95"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "d9a94568eb9ed871e509e0cb257e9736"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "9ff705cb493a757256dbe49d1534ae87"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "0975304d9f9e6e974bd788706554178f"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "e997e897a6634504ec021f45d845e343"
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
