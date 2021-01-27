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
    "revision": "3aab98eb8761fa94657b919cae30c037"
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
    "url": "assets/js/11.f3b23486.js",
    "revision": "20f7985cee0e9b54cb0d0a364cab1c96"
  },
  {
    "url": "assets/js/12.2e2c7246.js",
    "revision": "567fb97e3fb0f45c426f9e0e82bbe36c"
  },
  {
    "url": "assets/js/13.8b715855.js",
    "revision": "348933cbc6a911fd0dcd8945fe8b9f52"
  },
  {
    "url": "assets/js/14.b1402da3.js",
    "revision": "53c6b04a0af35863fdb504165cb4c19a"
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
    "url": "assets/js/18.77de363b.js",
    "revision": "fe8523d57cc1771a2e045353d6245207"
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
    "url": "assets/js/21.a2b545a6.js",
    "revision": "f88f3c72e2d127eda058d9fc1f504675"
  },
  {
    "url": "assets/js/22.6aaf197e.js",
    "revision": "c1a58e7bd2bb081622efaf88e0eba2fb"
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
    "url": "assets/js/25.e9f9c7b0.js",
    "revision": "cfb8e2a9c0be7bd1369b76b788738ef8"
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
    "url": "assets/js/35.0c3ec10a.js",
    "revision": "d4be9e32b6be4fa33e2ee8a06771733b"
  },
  {
    "url": "assets/js/36.f5400109.js",
    "revision": "9060b1802c527a8d389328ebd0c07747"
  },
  {
    "url": "assets/js/37.549bf3f7.js",
    "revision": "b0826db9f04e624c200bc79d80078a32"
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
    "url": "assets/js/42.3c4dd798.js",
    "revision": "e298a74ed08f614a20c57e9d22ab7fcc"
  },
  {
    "url": "assets/js/43.ca645346.js",
    "revision": "2af5cb92f04e105d0cab590d1598b8af"
  },
  {
    "url": "assets/js/44.6f6a62dd.js",
    "revision": "01060e3bf2170b34da32feacccfafed2"
  },
  {
    "url": "assets/js/45.a377970e.js",
    "revision": "9326a396a32f15e65104114119c2dc3b"
  },
  {
    "url": "assets/js/46.c4d00259.js",
    "revision": "5cac9d7070a2f9cacb8b91040b4e96d6"
  },
  {
    "url": "assets/js/47.ae34f12b.js",
    "revision": "3b96216338df161a5087b40316f303cc"
  },
  {
    "url": "assets/js/48.303a2bc5.js",
    "revision": "f88de379471d6198aa9c2a9652122dfa"
  },
  {
    "url": "assets/js/49.e20e309d.js",
    "revision": "ec113a62871f45726f36e6d20f98c76d"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.6bb83ff8.js",
    "revision": "5dd1786af2cce33f33d41661c40afb27"
  },
  {
    "url": "assets/js/51.d139b74d.js",
    "revision": "dbd6924dd359cd379c69603d0b38fc1a"
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
    "url": "assets/js/54.6fb874af.js",
    "revision": "28dd80315973ed14f3a9beb77a196af6"
  },
  {
    "url": "assets/js/55.87fd6a33.js",
    "revision": "7e72ee6e9f7d586cc48cf1d1f0e7ec95"
  },
  {
    "url": "assets/js/56.fc4db78c.js",
    "revision": "e7d8937847da23d44fd23eadb433df96"
  },
  {
    "url": "assets/js/57.8af1d95f.js",
    "revision": "b7cab7773733fd220ed214e52b6a0c79"
  },
  {
    "url": "assets/js/58.968b31bd.js",
    "revision": "74a95202163a09b389d6f31045412256"
  },
  {
    "url": "assets/js/59.b5a9fbc1.js",
    "revision": "9e4c8d1db0a382dd0a93a165576f71be"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.c9945e1a.js",
    "revision": "c67888b0402c6e1abb58aac1fdf98075"
  },
  {
    "url": "assets/js/61.f5d6fbb1.js",
    "revision": "78b278433535717b9ef81263e922c6db"
  },
  {
    "url": "assets/js/62.988ffd86.js",
    "revision": "2132200b8dcead6a861fb9a1e8d9d952"
  },
  {
    "url": "assets/js/63.5d6bc4d5.js",
    "revision": "def74243bf143f7d2c26dae912ca3ecd"
  },
  {
    "url": "assets/js/64.3c6da4a5.js",
    "revision": "57668485e65d28d314bcf4348d4c481e"
  },
  {
    "url": "assets/js/65.74405f2b.js",
    "revision": "2969ab4e0f8cdbe086b17fa8ac7d1679"
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
    "url": "assets/js/app.b3065ea3.js",
    "revision": "8233322cf76cab313251f9851e7edd4f"
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
    "revision": "a5ea963da7e088173da70f0069cd3893"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "4fd6d5b6dd85c7207fc5502d0fc850b4"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "79ed97bde8048023f04db662b72b9aa9"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "91287fb9b155a5a5e2c8fdb4bb119cb9"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "4ab8c17dc50b539f7594b8c4dfd299b5"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "4fa9de5262cdf1f4a9299bd8ce9bfbea"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "8997c8e28e359f785bb732b69cc769d6"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "96014c0dd3e2e27c9cff4450edc6f796"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "b55a3b4e99495426b54834db2905f67c"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "79a4559c019f2a6b20a380c9e5aafcb0"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "3a2c49b23eac90b5aef8a105fac97712"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "786ec3db0dbc5f95b1d7974aa31e690c"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "7eefb875f319370c0f1f41317b052932"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "e8690bc34d0662e0627e823df5abbd3f"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "690b960008306b74940d74782b05a8bb"
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
    "revision": "7abb12c8f21fa8b1fdf37e413900996d"
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
    "revision": "bcc58e4990a7246e67968cd014e737eb"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "abf8fd9a11c11dcfb88029c74b2d9668"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "48cf5e6eefc666a6f1c1744ef95897c6"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "9bd300314b101977d44c063c4b7ec367"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "bb3a16e7a02a53da052a4035a2b55bfb"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "730cfb7242d5e7f0724ac1f6d4ffb7c5"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "32b6f9e76bfc29d9372c908cb4c8d746"
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
    "revision": "8d590148d8b23b4ad391c268d36ce3f8"
  },
  {
    "url": "framework/React/index.html",
    "revision": "5c54e99fc1e61bbb5d10766066439609"
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
    "revision": "df1a77e0e05a21d115b829bcef03e89a"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "30ee7e16d342d3fb71b0331c58661427"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "b57d44e598d712fa5e66a7ba0964aec2"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "8d5253729bbb8217dd704ef8ffcf4d90"
  },
  {
    "url": "framework/Vue/Vue 源码解析--一些工具方法.html",
    "revision": "9e64d38c160302375aef34e1b235980d"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "88ca77a4f73524add970b68cc4b261a7"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "0addeaf97792f6c73275edbd8fc64240"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "4e5d3024f1a56e8874ed0031ec80f029"
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
    "revision": "e89a4f0c18f6a1efbfed744af408bf8b"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "e4a24d758e44ccbf2c4c515fbe1cbb71"
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
    "revision": "2da3174e1fc0c419a5abb656d44d3c90"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "f5d217e798c1ae52efad3dcecf930a8c"
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
    "revision": "ec82152021a979231ca4c12625a95666"
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
    "revision": "4f34516fd14367cad72e847adad80e46"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "45f13fd833625ad4a4bd0ccd6c0e5ff3"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "bfbbe455e0a67782d48a660d6f7989fe"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "b3cbe0c4f606e1056670108b23efd299"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "3fbd9b23fb151564920d06b4f6dcc383"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "5c9b403a6e4a6e1fb3c056e856ee6d14"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "fa7cd48b777e05fdb15408f4f7920866"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "3f647968edc9a57bb205127b4777ddec"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "0d0d487029cb26baf1b0dfdf5660ef5b"
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
    "revision": "462a3b3bb94401bb2e49a9502757260e"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "77890985fab4b9913b1b449fd3d178f5"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "99b10b0637f83d3ea51de07dbb675fbd"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "6cb1c84de936ea1bc57012b1fda28b38"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "245c2088e57c385cc2636875adbf519b"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "1f724032bd9c0d52a03f73f047ec55e5"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "14a107e416a229082897fea6e1d42f47"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "f6edb6db1bda6a4fc7901c6b9291d774"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "00ebf663f4f039da2d683c5f673a5417"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "a321b1e035d6b538086b8abe49e05687"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "7891e1833e6b38dbf98d4cfd2aba1c66"
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
