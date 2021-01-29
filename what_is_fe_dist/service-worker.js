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
    "revision": "4793dd5500c13162a50f53121d1f5aad"
  },
  {
    "url": "assets/css/0.styles.b8ea9c76.css",
    "revision": "bee6be0f8f548f0fc34dbfcf30a03e1f"
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
    "url": "assets/js/11.460b07fa.js",
    "revision": "4abbee4549ec810191a3e2d146146a3a"
  },
  {
    "url": "assets/js/12.2e394fe4.js",
    "revision": "b50c54b71bef7fa798080b6a3b1d74e5"
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
    "url": "assets/js/16.3dcd4b98.js",
    "revision": "f83ed2d516cef687e5a1ec1e074af65a"
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
    "url": "assets/js/27.1a479f35.js",
    "revision": "d80b9ecb6ebdf51718866e7edf9408a5"
  },
  {
    "url": "assets/js/28.3980a94c.js",
    "revision": "e588adc1303ca5e107ef10cd16f31e6f"
  },
  {
    "url": "assets/js/29.5286c652.js",
    "revision": "2791a7545f09bef2c50d36c8bc56c00e"
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
    "url": "assets/js/35.5fa40580.js",
    "revision": "4cc9e4b01e0966665ae740c1b7d56433"
  },
  {
    "url": "assets/js/36.1894fcbe.js",
    "revision": "2586772a106d8c7caa605037b7e3207b"
  },
  {
    "url": "assets/js/37.1b0f6858.js",
    "revision": "199cd0fd7eea1a6083708806fb50211a"
  },
  {
    "url": "assets/js/38.8f69f071.js",
    "revision": "8a3e0ca8fa48ca2e3306aea651fc594d"
  },
  {
    "url": "assets/js/39.700eff8d.js",
    "revision": "9db0110e3d07c67795c2959045d881b3"
  },
  {
    "url": "assets/js/4.bcf9f8dd.js",
    "revision": "e0d51e19f9d770a9817643fd1203e220"
  },
  {
    "url": "assets/js/40.94efabcb.js",
    "revision": "1ae2f8216513b19abf7006ef6e42b4e5"
  },
  {
    "url": "assets/js/41.228a6102.js",
    "revision": "49b85c31383adfcbe30f1d2df423c64e"
  },
  {
    "url": "assets/js/42.a4f52d29.js",
    "revision": "880157b7908ce8d68670d1ee1f744d72"
  },
  {
    "url": "assets/js/43.d6c44459.js",
    "revision": "9a4810d5fe48fb143a8586593ab7bfa5"
  },
  {
    "url": "assets/js/44.4a45c602.js",
    "revision": "d0ce76f54b93b95f022295b346239af9"
  },
  {
    "url": "assets/js/45.b24dd5b5.js",
    "revision": "0578c51b9d5b9c68e905e0627dcde271"
  },
  {
    "url": "assets/js/46.7671e121.js",
    "revision": "4204baad2d8510a78b70f127e6eccdd5"
  },
  {
    "url": "assets/js/47.ef541585.js",
    "revision": "e91e483831732969a9d3976c823f04e8"
  },
  {
    "url": "assets/js/48.1e12e680.js",
    "revision": "d167dcef0c2aab0dd22a2372c41bd526"
  },
  {
    "url": "assets/js/49.5cfff086.js",
    "revision": "8028ef1306958e4881d4359b99b6c70d"
  },
  {
    "url": "assets/js/5.6681de7a.js",
    "revision": "59f791ba4736484e2088b3db53f2dba1"
  },
  {
    "url": "assets/js/50.3d202843.js",
    "revision": "296d448bd727b9ac27a03c560dbb177f"
  },
  {
    "url": "assets/js/51.d6635aef.js",
    "revision": "818f582ac88b2881c5a48d783390ae14"
  },
  {
    "url": "assets/js/52.7690232c.js",
    "revision": "f913486bd5a8173a92aba1fba3c34924"
  },
  {
    "url": "assets/js/53.e8dc8b6e.js",
    "revision": "4f7c2cee4688bdf3980571eae11d40cd"
  },
  {
    "url": "assets/js/54.bc455dd3.js",
    "revision": "54d1781b1dcce54c8e2efe1160b59430"
  },
  {
    "url": "assets/js/55.628c5836.js",
    "revision": "2732dac2b2de64c98903d104f28d87e1"
  },
  {
    "url": "assets/js/56.4aaf5689.js",
    "revision": "9e17eece2a9a8d3c0c63bdb717347efa"
  },
  {
    "url": "assets/js/57.e4cda67f.js",
    "revision": "ee15148f6fc93a9134ee935c05c9c2ba"
  },
  {
    "url": "assets/js/58.7ada267d.js",
    "revision": "9e154a27f6c70cd8a8728c1e25a2917f"
  },
  {
    "url": "assets/js/59.80573c1e.js",
    "revision": "dfb89d763de328895e9d7f42a8b400bb"
  },
  {
    "url": "assets/js/6.503aaa57.js",
    "revision": "172e68c24e3f4abac5aa980a3ec2eb50"
  },
  {
    "url": "assets/js/60.1d3f310d.js",
    "revision": "20e39dc596125f05f55093ea75ad917b"
  },
  {
    "url": "assets/js/61.73dd0367.js",
    "revision": "4106bd4b1114ef52b9851545fea24ae3"
  },
  {
    "url": "assets/js/62.684714ab.js",
    "revision": "029e7fde04ae5d01e7c2535ee4bf97e5"
  },
  {
    "url": "assets/js/63.07506e3d.js",
    "revision": "8665a29f06f9929cc5da39e4c0bf0e05"
  },
  {
    "url": "assets/js/64.8bbafb41.js",
    "revision": "1a1677452b07359843cbd387fc1f3ca9"
  },
  {
    "url": "assets/js/65.f2d6b51e.js",
    "revision": "44e2523dbae9c27a0e5fa21c78598a99"
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
    "url": "assets/js/8.f847aa7a.js",
    "revision": "b1c9ab125c33a057eeea93c7754eadef"
  },
  {
    "url": "assets/js/9.8d9b981b.js",
    "revision": "a9a470847858eff561f461f07a14fc4a"
  },
  {
    "url": "assets/js/app.9ff83b68.js",
    "revision": "3febd8373e97320eacdff41468cc6ff9"
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
    "revision": "612ac2da515a9f5e153e34b498a9d392"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "340b6394c655afb76dc528255b877ea9"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "47aa246b5945a495f63d3dc4e7fb61a3"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "bb025d5639188cb6e131c645a3526040"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "4d7af65036b47b1c3371f8ca31f90cad"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "872aea1b045425db19cd2566d4352889"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "40dfdafc7f157600606f7befaf55a473"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "405d1de975d9a7f8b231d5db57f2a7ba"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "adcdf5d6461f214a0e9fb5a4e4584099"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "60c558a0df2aa57489f2913364e869b6"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "8478bb6043fec7556799cf6e9b131f5b"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "a1f7e34f5682ad7b3fe4c562a7f431c8"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "0965873597099ddd64b7d6d0ebac1a4e"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "1416035feeaf3a43fdc3e8a83a89b94f"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "7be13832b72bd88222e5d68d44bd64b1"
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
    "revision": "aecdf6ccbb247b05b2eaca147cd615d4"
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
    "revision": "1fd580ec71bff26931d4e6303710fc66"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "22b106f26f301ff223d3c3f9fb6d2b4c"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "8edc11e4bb52a15073d5746e903590d4"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "e335f117eeff87017c2397269f649235"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "6381cb367dcb1afa4c8bd23a85ba218b"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "ea60724f45d0904767c71e85ed7f913f"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "dbc463c2d9e0b73e7fb7cc2f52346653"
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
    "revision": "bcbddede277d12455e4b975fba7c0c29"
  },
  {
    "url": "framework/React/index.html",
    "revision": "46b836137f8bc421450b3850c7a8806a"
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
    "revision": "a4c23331694545f43f58546a361a61b0"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "4e0a34a094e564de77dd84aac9dd64e1"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "4626a7afa711a4e9069f62a427e8a875"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "696903e37088f72d92097449a775b44e"
  },
  {
    "url": "framework/Vue/Vue 源码解析--一些工具方法.html",
    "revision": "5892bd1b578f09f71a855d16ce2ef5e5"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "16e6af039dd01972863d3a1d16fc908c"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "8b73444845357e196d6fcae1fbd2b112"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "12afa3972bd3d9bbe9719ce945891c8f"
  },
  {
    "url": "framework/Vue/Vuex.html",
    "revision": "bb87576cd03aadc0b2fe2b15310ce709"
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
    "revision": "7eca9c41e0398be5b8bd65f58f42d483"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "e547e2fd91f5a8b3f10d3918d06d540a"
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
    "revision": "7b52fd3be9f4bbda2e502902056a480d"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "298f8b4b426624ce2da55c82262158fb"
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
    "revision": "ff6bb2773a4e9299661c99492ca5b058"
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
    "revision": "fa99b81d1666adf31ec391dba57a9c91"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "ce9ff2e533f5944976cc853a5799104b"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "d362e026ac26e86c124808c2ef71f222"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "a35d195e3c7334c32036ebfcb72943ba"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "1bef861f718ad7560d01ff6a726e431a"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "00e6a54b8df970f4d0b43b79e2ef5558"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "31e8407d6f4a40af672c3f3f778f702b"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "e1ee490b6fecd6640e3ff12fcae38e33"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "6b2b90eeb264e9e807325ba37828092c"
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
    "revision": "6aaad184f6bc77ffe6926932097b8702"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "d5a5749d2efe205ce29feaa4e04d1015"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "2242c0bae433408c076fec16afc95f6b"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "7a7921c4f09da65d26414ae62f53e786"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "c89c969a6daf349effa3818be9d51ef6"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "e6f4adf6512e731ed983ead322fb1ffc"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "1f7c3bd0ab3f45497c5819fdd4e5d3b7"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "fda8e9fcccfe5d93c41f15e5802a69d7"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "862f2efae7518e8c07806ef4ff9ad644"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "e2496a6f3326411daa7ec7a9c227d30d"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "166a426108b37ee9a2e6e8cabecc6bcd"
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
