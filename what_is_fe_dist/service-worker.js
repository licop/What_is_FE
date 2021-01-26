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
    "revision": "7bd0658095effa66a2baa050e5438912"
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
    "url": "assets/js/10.9fc866c3.js",
    "revision": "d10fcceaf7fda7a9fa779ece2d39700d"
  },
  {
    "url": "assets/js/11.6cec0877.js",
    "revision": "61f7948f9336d5465140777d51215173"
  },
  {
    "url": "assets/js/12.77d06ee2.js",
    "revision": "b27f9480c116ca8e3a0602f1f5bef229"
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
    "url": "assets/js/16.9739f4e9.js",
    "revision": "570a32d7a324c770e9b3f4baf6d1328e"
  },
  {
    "url": "assets/js/17.9dae5907.js",
    "revision": "6e5d5ed5f1248a6adb7cd91e817a735c"
  },
  {
    "url": "assets/js/18.7c726361.js",
    "revision": "cbfa26b3d7a04a93fc224c07ca27b155"
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
    "url": "assets/js/20.b417fb77.js",
    "revision": "eea6f73ef18d33db4ad5bd3b7aad5e6e"
  },
  {
    "url": "assets/js/21.a2b545a6.js",
    "revision": "f88f3c72e2d127eda058d9fc1f504675"
  },
  {
    "url": "assets/js/22.64e57cf5.js",
    "revision": "f8902f5e82dd2db6d6d8f87ae74a44de"
  },
  {
    "url": "assets/js/23.6504443a.js",
    "revision": "5c27af64d96e95621a45852798a644a1"
  },
  {
    "url": "assets/js/24.1cc39488.js",
    "revision": "055dda35ab1d0a62bb26a787b39101ec"
  },
  {
    "url": "assets/js/25.4785d210.js",
    "revision": "748cd97c93a669d564c81c565942a3ed"
  },
  {
    "url": "assets/js/26.dc745528.js",
    "revision": "375716c8e64e94410f720f92b0da7cbe"
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
    "url": "assets/js/29.04a19c58.js",
    "revision": "57faa0f9a59030ae3f1271b9230aab46"
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
    "url": "assets/js/31.85e2dd03.js",
    "revision": "38ae42e90db807c31229b19d7488dcc2"
  },
  {
    "url": "assets/js/32.80cf951b.js",
    "revision": "e1afa0e6d7c5a1909fe1a05397727a81"
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
    "url": "assets/js/35.5bbc3f8a.js",
    "revision": "74f9fed3313d671f4d8e7a5e1762e36e"
  },
  {
    "url": "assets/js/36.9a7ff1ea.js",
    "revision": "c6c42e326c07419cc0649275bd32db0c"
  },
  {
    "url": "assets/js/37.969db107.js",
    "revision": "123169077c56946acef5191b120e95af"
  },
  {
    "url": "assets/js/38.b7141f7c.js",
    "revision": "88c13746115f08ea6b5fa87da9962984"
  },
  {
    "url": "assets/js/39.496773a0.js",
    "revision": "7ff71a36895e5d7e88471fe91dd60e7f"
  },
  {
    "url": "assets/js/4.a45e1e69.js",
    "revision": "170ca3561659f0f802bfe04dac160493"
  },
  {
    "url": "assets/js/40.1219764d.js",
    "revision": "48faef3834f787764eaf75cdf5625871"
  },
  {
    "url": "assets/js/41.f56ca552.js",
    "revision": "59f04375140802915f995080f7141f2b"
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
    "url": "assets/js/45.fb07558b.js",
    "revision": "bc5a87dcd349653797892e8a487974e8"
  },
  {
    "url": "assets/js/46.353b7044.js",
    "revision": "172f05436152548135545cf7f0341fbd"
  },
  {
    "url": "assets/js/47.3dea5f2f.js",
    "revision": "1684ed35636b7bfb9bf86165d083c1f3"
  },
  {
    "url": "assets/js/48.9b41ce93.js",
    "revision": "96eba9d7774bfbd29aa7625f17c4e182"
  },
  {
    "url": "assets/js/49.7ac77ee3.js",
    "revision": "88114d708b450e56bc3db8a780f3c8a2"
  },
  {
    "url": "assets/js/5.f8f27f75.js",
    "revision": "02e5d10bfdb1d77a32528d9585481a70"
  },
  {
    "url": "assets/js/50.15975f10.js",
    "revision": "8a788512ebef6a2b19a981063076659e"
  },
  {
    "url": "assets/js/51.d139b74d.js",
    "revision": "dbd6924dd359cd379c69603d0b38fc1a"
  },
  {
    "url": "assets/js/52.b6f18332.js",
    "revision": "b45d1922e973f7d9c6fe811d7c24561d"
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
    "url": "assets/js/56.312291c1.js",
    "revision": "eb8bacc1a24e27b29ca12d4028451150"
  },
  {
    "url": "assets/js/57.f44942ee.js",
    "revision": "7efbbb98197e90d564fecde88e658de5"
  },
  {
    "url": "assets/js/58.26f0c29f.js",
    "revision": "524d373203cdb3577c693060cd87349a"
  },
  {
    "url": "assets/js/59.62461b6e.js",
    "revision": "c6322090cb9b4777cbd0f3aac4b2dd9d"
  },
  {
    "url": "assets/js/6.5d0f7064.js",
    "revision": "1a6a55111f5437523ec177ca680a7613"
  },
  {
    "url": "assets/js/60.c9945e1a.js",
    "revision": "c67888b0402c6e1abb58aac1fdf98075"
  },
  {
    "url": "assets/js/61.27774c64.js",
    "revision": "57d4d08bf6ecf64c0d92b4485801fd57"
  },
  {
    "url": "assets/js/62.988ffd86.js",
    "revision": "2132200b8dcead6a861fb9a1e8d9d952"
  },
  {
    "url": "assets/js/63.c9dda297.js",
    "revision": "503e30c18eb6ad6f6f1ce4aad4ad3a9e"
  },
  {
    "url": "assets/js/64.e45155a9.js",
    "revision": "299b3d012670ba5c49f9691db885c4e6"
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
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.2f941acc.js",
    "revision": "2b65a17b9202d8f889c83e308dac672a"
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
    "revision": "2c71f1ff9a7df87ac023f41889a411a9"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "34659d21f9dd72b14aff670083ec4126"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "087aa7541fb825fb7c3d10ac68f3dd65"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "aee8a996f2a7fd4f099845383d97c18f"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "aa5ab0332ea098f08d6243502a0ad4b1"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "eba9d3dc9aedf4f2df5051021484ee1f"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "fadf0e76aba0e9792d201ac75b5629f4"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "f72c558c7f05adf945932365161ab452"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "013673556a4a3dd7b13d63869f749af4"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "110f678d75f64acc685f0bf128bed7a1"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "150fe5f114072a1883cd5bf523e04c41"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "2a4bc5d3e4b9f15c4173606fe56d9b91"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "b3120a27fe39d6406c98c745e8362e2f"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "0fe8cfdf52520fd877b1183e5d99219f"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "925158f4e4a789dc05ab0d6ddb90e339"
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
    "revision": "e49cd5d5181bf587cbe867a8cae740ed"
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
    "revision": "1dacbd443b71740aa0ecd5ab6f137f41"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "9e314c656abd16d226c053e268c13ac5"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "77639fe9158c18bf29c7278b248e0fa4"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "af11ddaf280524055d76bd2c2a0a8e41"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "2e0dc3344de37fbd0d548536f1677969"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "a50cff12ef4b8322abdc1c20e8b7cf95"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "0d84644f72b1734e25a1c340f02f4a0a"
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
    "revision": "5788927304959d9e5ba34d5a9d489a85"
  },
  {
    "url": "framework/React/index.html",
    "revision": "2ba3a87ae4682fefd67f8eeed1f49c92"
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
    "revision": "bde28f4423f51e646d75d2777dac1eee"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "7fc0ffa476b6f12104cdc5464ca6d511"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "f8ebffe78ccaf9814ac7e58928f7bc36"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "34db8c6a819d296f1af75796a0f7baf2"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "85bed169b26d206152d90157dc5a7e64"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "a1bd0df6300bfcf4b42e8ff3ee16e0b3"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "4661f0b1d8e2e2d8d6177a9f2653c8af"
  },
  {
    "url": "framework/Vue/Vue源码解析--一些工具方法.html",
    "revision": "c24620dc1be205d7b866e5c136276c20"
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
    "revision": "08177efaf23ab015ff131a9b3544698f"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "c4bbd32085934ef9631c0611a8dc1161"
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
    "revision": "5180132ff1d26d6502c308da519b7e08"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "50b637904b5537fba8f5c214422eef56"
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
    "revision": "5e03b08c09db58a8e910666eee03e2d8"
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
    "revision": "031d2d12212d795b022e918f7bc8441f"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "60e9bc88e4e274997a7faf1bbf33196f"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "ff261f3ea4e88d9bd88bb9c4a249623e"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "2e71692df7c08e7722a21398b24d2f8a"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "8670cb351e4b4f2eb8f525fb2897c70e"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "6fe39194d8aa2fbd9f0921e4789fc18c"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "14c015c91acd4eb36154918112909166"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "afaf07cffb8452a7a5964fc755d664c4"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "3ef715286d9d80e29add64afe4e4b93d"
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
    "revision": "45fb2f2a3da22a2a02c3b56cb47e7f00"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "288867e86fbc3a293a4f5ba27a7da2a5"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "f9779e0017e832b3bdffa0ab371a34cc"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "06f08cd5559be73c5e1ca2f7d9223cc0"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "f6472554025c6134afc6734a6dbbce88"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "e19374e9067a5ce425a024f7991e80a9"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "fc3ada695f65ca14b24c49a8e16ee9dc"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "37565b019b2918942248bc8a711ca85f"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "ed0863beb2a33634820070740f7c9ffe"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "4909aba388cf2837f1ebf458b016545c"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "9926cf0a18cb9ffe225fc6a92d463bd7"
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
