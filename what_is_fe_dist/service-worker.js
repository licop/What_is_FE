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
    "revision": "430549e3e920b7eaa8b942fc204d6555"
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
    "url": "assets/js/11.460b07fa.js",
    "revision": "4abbee4549ec810191a3e2d146146a3a"
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
    "url": "assets/js/16.3dcd4b98.js",
    "revision": "f83ed2d516cef687e5a1ec1e074af65a"
  },
  {
    "url": "assets/js/17.7bdb8b53.js",
    "revision": "5dd3d18cd5eaf800387e69df006bb0b9"
  },
  {
    "url": "assets/js/18.815fc977.js",
    "revision": "cd1af7a2c9d9eec425dde49f7aad37f4"
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
    "url": "assets/js/20.3094c633.js",
    "revision": "dee5188aa63b0f80f0203240e69d99e6"
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
    "url": "assets/js/23.76e57125.js",
    "revision": "5bb06856b72e9ca1596f1556ab600a17"
  },
  {
    "url": "assets/js/24.1cc39488.js",
    "revision": "055dda35ab1d0a62bb26a787b39101ec"
  },
  {
    "url": "assets/js/25.e5a4868d.js",
    "revision": "dd1e0e664e40429883c9f8ce911df1f0"
  },
  {
    "url": "assets/js/26.0b48ef52.js",
    "revision": "f6cf56fe5761507cbf87183afe67cf16"
  },
  {
    "url": "assets/js/27.895c7084.js",
    "revision": "8ebc8d7e8c316352d963d33e1e83cfb5"
  },
  {
    "url": "assets/js/28.3287ba71.js",
    "revision": "67c704f66c0a2f9b243457191a344e99"
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
    "url": "assets/js/30.8fdb9796.js",
    "revision": "acc116fb08ba97e3c43c09d0b43a2f59"
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
    "url": "assets/js/33.3dbc8cef.js",
    "revision": "9ea54eb0f2b645fe4ed96a637bf0caac"
  },
  {
    "url": "assets/js/34.0c377332.js",
    "revision": "7761a43527cb24ab73a1008336b71a0a"
  },
  {
    "url": "assets/js/35.5d15497f.js",
    "revision": "1e0653df3eca3fffc3a272b44a127d7a"
  },
  {
    "url": "assets/js/36.09ddb831.js",
    "revision": "4059be49f3989eaa7aaa9caa136ab556"
  },
  {
    "url": "assets/js/37.65fbca64.js",
    "revision": "df0979f784ab6ca6dace7f3c2b6b2e01"
  },
  {
    "url": "assets/js/38.ec584ccf.js",
    "revision": "dea5ae5a020f25aa3559a330ae536b37"
  },
  {
    "url": "assets/js/39.05410cd3.js",
    "revision": "3d74ebe7c0091f2ce3f11b2f05a92fe6"
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
    "url": "assets/js/46.c5745751.js",
    "revision": "a663607587c9c44ebd309d7314038db8"
  },
  {
    "url": "assets/js/47.9f22ede1.js",
    "revision": "42d613bfab92d4ead7cd5d304f8df889"
  },
  {
    "url": "assets/js/48.9b41ce93.js",
    "revision": "96eba9d7774bfbd29aa7625f17c4e182"
  },
  {
    "url": "assets/js/49.5cfec78c.js",
    "revision": "290a47a010bbdd8bb9a3b9aaef80afb4"
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
    "url": "assets/js/51.4e5f0614.js",
    "revision": "9b16aec3dbbf36678576ba487455b14d"
  },
  {
    "url": "assets/js/52.ab1e362e.js",
    "revision": "c729585edfe9f6d807190c1a20b2b1f8"
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
    "url": "assets/js/56.fc1804a2.js",
    "revision": "67b659c1b5aefb8d82ecb320be1c9593"
  },
  {
    "url": "assets/js/57.c7650586.js",
    "revision": "3e7a1edc6b2c83ac9b2e38d07a20579f"
  },
  {
    "url": "assets/js/58.522cda12.js",
    "revision": "79e7329bc1f7fe345277269874e444fa"
  },
  {
    "url": "assets/js/59.4c0ee35e.js",
    "revision": "c617757fc57b0e83c5fd669fd815be20"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.ec2d07c0.js",
    "revision": "980146648dea474f523b58ca1a4a738d"
  },
  {
    "url": "assets/js/61.f5d6fbb1.js",
    "revision": "78b278433535717b9ef81263e922c6db"
  },
  {
    "url": "assets/js/62.da92314c.js",
    "revision": "a6592c4f1fa19753ed4a9b7647b40903"
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
    "url": "assets/js/app.9c0b5958.js",
    "revision": "ee86c12d69216fb299438c4ac276ac48"
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
    "revision": "8240d6d132b5c86d77196690feb2aac9"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "2a01cbd8b49aa663fbd0f05e0d9b0590"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "d6df579e78e0f20432eafa21cf07595d"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "563d218211f57e22d0d61a7410d81c1e"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "352d909bcd74299d5a41fc53b29a9086"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "37e51cddf3a2388b114aeaea8e87c7b8"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "d810dc3dfc20b6b803afc66983c8c78a"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "9c68fc742cac221340b3583aed0e1838"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "db5f84c215f438f5705785ebfd9ab72f"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "9f29c4200a74113cec8c2c0c52b5ac83"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "38709c8e53c0752b5fff0fb1aa460295"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "215c2cf73f2820ac69b9a0cc6b26ebca"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "f01901793daf7e5137e89283f0abee7d"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "efd045e5096acb2663de7014436b6a72"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "7ca2c7234b0279e1cd86438f662568bf"
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
    "revision": "dda1f034d52cd060e79319611cfdb3b2"
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
    "revision": "f349d77c707b9a1be5a84fddff3ff343"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "6c80d378d552a08706c654918202f90c"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "8346f4840880425300f7ee5feae7ca07"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "d67fce4f8c073cbd0a9b388b0df172df"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "79b08b03c43b1ce6d5cd7e68bc7ec013"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "6a4c4cb280ee157d7d5f4418dc2c8c56"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "aaedb32720ccfbc25aac2b2fead3087d"
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
    "revision": "55ec473bdde08033948c2ced8296b947"
  },
  {
    "url": "framework/React/index.html",
    "revision": "fa6fc1647349179636a8bd985a459eb1"
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
    "revision": "142c7e24155f36c81a07382b8ffd9104"
  },
  {
    "url": "framework/Vue/Vue 源码解析--模板编译.html",
    "revision": "6db075f1f0b423a280a380fca91399dc"
  },
  {
    "url": "framework/Vue/Vue 源码解析--数据响应式原理.html",
    "revision": "d5114f09d9f0b78bd2aaa11088778acf"
  },
  {
    "url": "framework/Vue/Vue 源码解析--虚拟 Dom.html",
    "revision": "38fca1c2b58e18f74689e301dc77392b"
  },
  {
    "url": "framework/Vue/Vue 源码解析--Vue 初始化和首次渲染.html",
    "revision": "d3f1c8aa7cd6298eec28ff1b451fa2d0"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "182d8cba869af85cf6f07b91365c6038"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "1d68f9fb72c004347c264503d8dff719"
  },
  {
    "url": "framework/Vue/Vue源码解析--一些工具方法.html",
    "revision": "4a1cd6da39eef801114f4090c2e5c896"
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
    "revision": "450d9fc287ec65d5bab26b4fd437af2e"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "05c45d3ef45c35544966e44b8f593369"
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
    "revision": "c3352fd175983a82d5f04a3d8732ce2d"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "76feddc40604624f4640895546ba650d"
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
    "revision": "08a4a47277d26ac97ef7da1a5175876f"
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
    "revision": "8bfcf2e74e357bcdbd4b010a1a85ce61"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "36907ee9ea58b0b03e8605064933943a"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "1be1181071ab08a1deaa6f4b87f5a508"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "f21bdd4e844182fac3b0cb323e92b923"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "0be54c77cbfc33c83356b74406f1b620"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "22bd84d0171aff2ea9593170dd1c4cd6"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "64a97fdc48234276b17d0f5d8e8bbc47"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "1fdff753c5b6d3c360615168d7480b11"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "96fcb95f21c1010186958a232a8da516"
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
    "revision": "ae96586998510a659975a5bb58c6cdfa"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "34934ac46d52b36f33ce113c33ab6b80"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "10ac329f1678c570cd8ee566f5e9e482"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "b315be4750ef224a3e4fb365f883b0c0"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "56a182e94267824d6614697774cc89b3"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "e25f91b65b18f3862bad306359853751"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "1290617d8db722278c63f05549786c29"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "674c7c97849cca4c3248c0ba82ea5ca7"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "93f34dec87d6abbacf10bb7f85d55b5b"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "7c7ec7b205361529f2c669f74f7755eb"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "0aae516c55f14f17a2631074f5187d9e"
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
