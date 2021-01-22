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
    "revision": "dbfab3c70b2617af10800a6ad06fc357"
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
    "url": "assets/js/21.b0c634aa.js",
    "revision": "25397d32ec912afb7043dc8aa7bd226a"
  },
  {
    "url": "assets/js/22.910496c8.js",
    "revision": "71f8cc1d6a10daa312dfd9755aabc05f"
  },
  {
    "url": "assets/js/23.f2019cb9.js",
    "revision": "9260d4d3f44f2d248824275e07bcbf03"
  },
  {
    "url": "assets/js/24.4f0acc54.js",
    "revision": "9a31eb4c72d1b7ea65b52d5fa1bb0234"
  },
  {
    "url": "assets/js/25.40572b65.js",
    "revision": "f8e9643cd5880d289fba1933ed9f035f"
  },
  {
    "url": "assets/js/26.5fb1bbfe.js",
    "revision": "b1240cd4b7e6d6d8ee9fe48c840843ab"
  },
  {
    "url": "assets/js/27.bd1cfbc8.js",
    "revision": "f5658e3b566cc3a1a1363c5513e6e5e1"
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
    "url": "assets/js/30.d7197eb2.js",
    "revision": "9ebb03b19dde3fe9b6322f4c7e7ac6fd"
  },
  {
    "url": "assets/js/31.7dc8e5b6.js",
    "revision": "514fc1e5308fc676065bf0ff4d517f99"
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
    "url": "assets/js/34.0c377332.js",
    "revision": "7761a43527cb24ab73a1008336b71a0a"
  },
  {
    "url": "assets/js/35.5cd4c3e5.js",
    "revision": "048ef5b25900ef74c3c8fb2ffb565a5e"
  },
  {
    "url": "assets/js/36.456bf31e.js",
    "revision": "ef5b5809da45927184a0032931c70453"
  },
  {
    "url": "assets/js/37.65fbca64.js",
    "revision": "df0979f784ab6ca6dace7f3c2b6b2e01"
  },
  {
    "url": "assets/js/38.7f956c5f.js",
    "revision": "29d4a8caabe0d373e0385bb9dc54da2b"
  },
  {
    "url": "assets/js/39.52f803a0.js",
    "revision": "aecb4ae616dc4940aee255d1d81b7f56"
  },
  {
    "url": "assets/js/4.e1b57234.js",
    "revision": "ee60434afa715ad2914a9b954e6cbe4f"
  },
  {
    "url": "assets/js/40.caaf397a.js",
    "revision": "54748174000686425656b31f75137139"
  },
  {
    "url": "assets/js/41.ba2dff08.js",
    "revision": "0b9e80880f4c6aaa4e69c9cbaeadb5e1"
  },
  {
    "url": "assets/js/42.eefc6b66.js",
    "revision": "42e8b4aad68a7b2371f9692e8ca21c4c"
  },
  {
    "url": "assets/js/43.1696fde3.js",
    "revision": "83aa802898f5462b3dd4c25b74e2577c"
  },
  {
    "url": "assets/js/44.cabec37b.js",
    "revision": "7d4c48e003b6e048385e00cc374e0805"
  },
  {
    "url": "assets/js/45.206095b2.js",
    "revision": "c4cf365cd5580dbeefdba00ca14a6c9d"
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
    "url": "assets/js/48.95db7add.js",
    "revision": "3eb5f2b6ad02c8b2015af4804223747a"
  },
  {
    "url": "assets/js/49.29ff02c2.js",
    "revision": "6d544e8dfd04a5c8d9dc0f1a55c87d8f"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.4c232c9a.js",
    "revision": "5540ba4e42ae74dbd7957161c47fcddb"
  },
  {
    "url": "assets/js/51.2b2783b8.js",
    "revision": "43e4beeef71e2ce76bae1eec8171ecab"
  },
  {
    "url": "assets/js/52.2f4e30a9.js",
    "revision": "42b8d8f397364628e852ce233b119d0a"
  },
  {
    "url": "assets/js/53.b42b3f2a.js",
    "revision": "1a975ba45dbaeac15b601761e73ef799"
  },
  {
    "url": "assets/js/54.5db10089.js",
    "revision": "d3fed02f4645ce69fc14bace34ec2414"
  },
  {
    "url": "assets/js/55.d26298dd.js",
    "revision": "35bf8b9ce4308c7eb42f1206f444c45a"
  },
  {
    "url": "assets/js/56.c32a8f9f.js",
    "revision": "e5903f96d3a3d3b56669149cf51a133f"
  },
  {
    "url": "assets/js/57.011ad986.js",
    "revision": "85a0f7b355c091a8300f02e8f3a480cc"
  },
  {
    "url": "assets/js/58.338446eb.js",
    "revision": "23e0443eba1ccf40776e42c8c4bc8518"
  },
  {
    "url": "assets/js/59.89aaa122.js",
    "revision": "ebe66814872837669c45eea7bb92ca50"
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
    "url": "assets/js/61.dd40a9a7.js",
    "revision": "fe90c2456f2bf05abfce0d51f0342404"
  },
  {
    "url": "assets/js/62.433bac9b.js",
    "revision": "2eca188dbae82b84d5a622292ebee3f0"
  },
  {
    "url": "assets/js/63.a260258b.js",
    "revision": "fa58050d83c119a5f9384887c66b2d12"
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
    "url": "assets/js/8.f847aa7a.js",
    "revision": "b1c9ab125c33a057eeea93c7754eadef"
  },
  {
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.03ee6b57.js",
    "revision": "93cf6e50437e57f8a0df01638382f835"
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
    "revision": "11e8cd8bbc5714f44c194925d75522b4"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "a3ad89d67b84474acf41228664c60166"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "227ae3a93802270a4565ec0bcd250567"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "f0be4e7177a4ecb1bc7e4996654d475a"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "142911e39d114422974a1bd3e421e237"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "aa3ed013d1078359d773e9c9bb2f46c3"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "cb8d1f26037ec15b35634f1349bcddc5"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "81bda179da84083c5d977ad3578a4977"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "14a69d645ea8df793c43246ab9d371df"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "0f0ee337b3b3cde066a68f244ce54075"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "1b09e6af4430c2b309148dc0bdd7dfab"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "142bfb9a84a3811f1c2852d76e58df78"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "7852b7b92c40da5a02bdf8257c3bde22"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "f18bc49ab191436d5b9299e096d427a2"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "f9d25ebf5fa4fbc4e4677433f6d53908"
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
    "revision": "bb1018414bfc9472b0cd307864ee6241"
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
    "revision": "f487dee5127e2d6956fb82be192748ae"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "1759c95b2e159394ef4b47c9e015210d"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "c87e68b0fb8eff68d9aadd4baa6d4c4e"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "7bde351a2c9c27c82360c9a42c9d45c0"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "d45025d0324394804e94e21721c94227"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "aa4157c6770ebb8cd61114d0d1062581"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "d3293007ad66739a61a90c8bf74ecd69"
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
    "revision": "29b342f258f3f56484173694864988e9"
  },
  {
    "url": "framework/React/index.html",
    "revision": "b590971e4144e2dda125105548b550b5"
  },
  {
    "url": "framework/sub_pub.png",
    "revision": "521f365eff009e7bc89489806599ca85"
  },
  {
    "url": "framework/Vue/Virtual DOM 介绍以及 Snabbdom 源码解析.html",
    "revision": "c7a6d8dc6c41c34f3ce48a490114134b"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "108d092051c71cb453516925614d8535"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "7841de1f8fcdf9e3b320d02efe4ec000"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "06262ecf006f8c111123ec8c16930c5a"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "2fde33066214eaa0a5d2bbd809ccbd33"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "03e31bd97210c3593b81cbd2e0386611"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "be9ac4bda6fece900be118dd8c538acd"
  },
  {
    "url": "framework/Vue初始化与首次渲染.png",
    "revision": "27af72dab56c10950017e4251a2b1b3d"
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
    "revision": "39a69a92cc5747d2f3f31797726f8af5"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "2dd5838f3bf07644ade8269bce3d9f78"
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
    "revision": "932eefd7db51f2c27bce5bf6daecb8ee"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "53a964faa8eb166919aab216a00c9e18"
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
    "revision": "4670710950ae6f7e9229f7b795e71052"
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
    "revision": "b210b987628bdd092f382fe38de126b0"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "a4a083b3a0a0daf53e598eb86372d3e2"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "7879a37246e83f48150ca9b3957b87ab"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "c6f61ade3a1baa8cdecc9bc1c1034a8f"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "5a3ce2f913ee0af943b809eab2ec5f83"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "bd188a0fe29d22560078b2502f5ee24a"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "795512b89c64cd0b51e5454645c0336c"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "624ee867908d59ffa2c1b9d827e2b09a"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "9dc9051d414e3d22a2e16d73a3574ef3"
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
    "revision": "b92ef53ac174b2279b35e6baedb1c64f"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "8def3e5b94792e874aa0d85c6091e759"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "22b8a39b2974f256e10ec0c2d6a7dda5"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "de7b79c04db143c3d910b8ca6e6778dc"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "978aa6f20f19b594eed44e146fa8aeff"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "877652b8fcf7ac1a48ffd1ba98778923"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "a8f1ba20fca48e1d083bd391b3b64f9a"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "630e2bbe4fddabf148a5cc34f6a15b0f"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "a7bdb7eb1a9bda15070ed291c0669328"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "1acf9b45e06627617acc778cad755ec2"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "d54afbab62331bcd7ebf21d82cbf5b60"
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
