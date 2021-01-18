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
    "revision": "666d72ec3b0a1b204d637260e0d19d88"
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
    "url": "assets/js/12.5b161d54.js",
    "revision": "ae034c58cf0a3902da27cfcdcd939c90"
  },
  {
    "url": "assets/js/13.a983f7f5.js",
    "revision": "72c22d54a40303766772e0d848f234d7"
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
    "url": "assets/js/16.568edfc0.js",
    "revision": "2e7886e0b09e6d63ca605e3f1245bfb0"
  },
  {
    "url": "assets/js/17.9dae5907.js",
    "revision": "6e5d5ed5f1248a6adb7cd91e817a735c"
  },
  {
    "url": "assets/js/18.fc9029a4.js",
    "revision": "fcbaeffd2e5b70b09bb56aa2f677943b"
  },
  {
    "url": "assets/js/19.0bc0bc9c.js",
    "revision": "a5461154e06ec119c7644c71d06bd26d"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.79157225.js",
    "revision": "de7359637d239d604186501311c0a56b"
  },
  {
    "url": "assets/js/21.cc5d852a.js",
    "revision": "33e51457703f765d8bafae5cce57d30e"
  },
  {
    "url": "assets/js/22.8fe0ab17.js",
    "revision": "a08a64eb7ee96ed1ec8d2f01adf75b7f"
  },
  {
    "url": "assets/js/23.3d00d487.js",
    "revision": "4569671ea2109dd1cc2771d393f00a14"
  },
  {
    "url": "assets/js/24.5fdfd386.js",
    "revision": "dfe1d7b974c2e961c3252fb264dd0118"
  },
  {
    "url": "assets/js/25.f8103722.js",
    "revision": "81e2e0e4dec489e5a4848b877466c3a0"
  },
  {
    "url": "assets/js/26.0f466743.js",
    "revision": "bddde1fb3cdc7caea1de6279ad1dd089"
  },
  {
    "url": "assets/js/27.1a479f35.js",
    "revision": "d80b9ecb6ebdf51718866e7edf9408a5"
  },
  {
    "url": "assets/js/28.7fc5f2a7.js",
    "revision": "0f14ebcd1f88ff7a21f939b1bc843296"
  },
  {
    "url": "assets/js/29.d46d55e1.js",
    "revision": "dcf50263550ff2fd989d2f71272f42c9"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.bd3e0843.js",
    "revision": "5b75ea7c66a44b0440f9ce13b58c0c37"
  },
  {
    "url": "assets/js/31.5982f7a9.js",
    "revision": "9ca74d367b6ae459a43c185d34b4792b"
  },
  {
    "url": "assets/js/32.1df69aa5.js",
    "revision": "979349d5d80c3519c0fd0c8510042ffe"
  },
  {
    "url": "assets/js/33.fed706d8.js",
    "revision": "2b15e1dab0cfb06379201b321ede8ef6"
  },
  {
    "url": "assets/js/34.273f6052.js",
    "revision": "a2434902e8433499bc7160a7267cdcab"
  },
  {
    "url": "assets/js/35.1a00cbbe.js",
    "revision": "cbe5a7215454f59ed7883a1fea400efe"
  },
  {
    "url": "assets/js/36.e5abf0c8.js",
    "revision": "cbdad458241065762cea321f7138538a"
  },
  {
    "url": "assets/js/37.579136a6.js",
    "revision": "8a1e0f9e9573b1274e9fdb2644691c13"
  },
  {
    "url": "assets/js/38.a5801709.js",
    "revision": "b26267c489df4de1aeebc3ddf7f8efea"
  },
  {
    "url": "assets/js/39.2c716e6d.js",
    "revision": "74ab0758248c5fcc2922942724495b10"
  },
  {
    "url": "assets/js/4.e089175f.js",
    "revision": "d7f94a7e99a22b737154b6e60f7062d1"
  },
  {
    "url": "assets/js/40.e6a7b64d.js",
    "revision": "ed04c1974f3c55b6c0acef609672dd08"
  },
  {
    "url": "assets/js/41.27eaae68.js",
    "revision": "9a5981814a66b98cc605c3f83e5bc736"
  },
  {
    "url": "assets/js/42.ccebbe67.js",
    "revision": "57a9537c572f044b8078490a4882e23a"
  },
  {
    "url": "assets/js/43.0261f029.js",
    "revision": "f4dd8e657e9743bb0fe8a1b697aaa659"
  },
  {
    "url": "assets/js/44.d282729c.js",
    "revision": "8303c424cf71f4b96c5b5bcb0aea212f"
  },
  {
    "url": "assets/js/45.475775aa.js",
    "revision": "a65671e10b335c1f2147bb2f70f09b1b"
  },
  {
    "url": "assets/js/46.db8c948d.js",
    "revision": "05ce9e222b496b53ece8f7a5bff8941c"
  },
  {
    "url": "assets/js/47.82311ca2.js",
    "revision": "e58ac6e51da9608cbe2863a96575bb69"
  },
  {
    "url": "assets/js/48.1697bdab.js",
    "revision": "7246b60ba236299412dc20689101815c"
  },
  {
    "url": "assets/js/49.e86be80d.js",
    "revision": "846cac46b739e4ad21d9a5ae64e79dec"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.b323a160.js",
    "revision": "e1df25ca7d588141d53f32f1631e290c"
  },
  {
    "url": "assets/js/51.67d7e69d.js",
    "revision": "5460e0b722889176db4a34181d3f72cc"
  },
  {
    "url": "assets/js/52.f3b55d0f.js",
    "revision": "d396d9a722ecddb47ca4e9aac25ce720"
  },
  {
    "url": "assets/js/53.baa394f0.js",
    "revision": "9c505f39c5debd55165945efeba625dd"
  },
  {
    "url": "assets/js/54.49038f6a.js",
    "revision": "2727e41ef3965db5bf541e1290f50d67"
  },
  {
    "url": "assets/js/55.c9e18ea7.js",
    "revision": "810c5342ee4449f5b68619f999188cff"
  },
  {
    "url": "assets/js/56.a4af5049.js",
    "revision": "593c612be118440838769bdee8065edb"
  },
  {
    "url": "assets/js/57.be1f8149.js",
    "revision": "7256c1173ba085f8a49413f26d472d20"
  },
  {
    "url": "assets/js/58.ba689b20.js",
    "revision": "263b24e90e743a7c22000bc6aa13febd"
  },
  {
    "url": "assets/js/59.192f28d9.js",
    "revision": "5c28138a2a4b3a639bef36098b905c51"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.e6f4bdba.js",
    "revision": "ae2b34742ac529f5083493157f040a9e"
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
    "url": "assets/js/app.95b0f20d.js",
    "revision": "301010376226da76ae8936f54c406bb5"
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
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "1d8f9411884829d6c5230474603cd5da"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "b60c6f388f2d5045cbbd19f86c8f8930"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "4cbdc56de164087e16c7ab18c39ac893"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "f867804d592eef8051784e7a1a40e4fd"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "df9321705916e676615ac3f6472af479"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "92f1fdf95bbf5766eac1d929a23c1049"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "b7be8876c31064c5f1acf276647bd11a"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "9858a0db37d96de9a1005ae135112dd8"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "18db4b99fa3c124176ebcf49b74e42fb"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "bc0d17ce353a7389b8812ece14220f1f"
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
    "revision": "945a3fe89113c62f96db61c7edc8e515"
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
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "aeb9bf57124a221f816aa9383159d992"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "b63bba1a4a1fc3ebd2bab5526deba31c"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "f2611054623541f0773cd297792dd0ff"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "433b3fafe767cca4838c998d0e4c5234"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "9cb0c209e8c226556c985a98fd1e7d9c"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "45d9d3e2f341349b4b5cf0f375342cb3"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "8f5e36f514af5bec6a4c4151277027cf"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "ee432f56ebf7236db9e68a7728f2f95b"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "d92a336715ac3682aa87c4245cc22849"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "6a803b0842c2594bdbed62da41f76f35"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "8ea07735e1c6d0f63e53bfe5bbfd9d46"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "057b3630ae287a4c26f4228f8da150a5"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "a5cbd28ac6d9a3192ec7dc67510fc42e"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "4a8c864e11d0ceb35f232794c826150a"
  },
  {
    "url": "framework/sub_pub.png",
    "revision": "521f365eff009e7bc89489806599ca85"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "6021d28b883dd064135e2b633915212b"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "bbe869cfca6ca3396b81009a0114f219"
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
    "revision": "2fdf235eb1d3bd78bfd831c7e1b1b6f6"
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
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "8bd2350668c9b3e2d5bb0b366c239857"
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
    "url": "running-monitoring/v8内存分配.png",
    "revision": "dfd6c97b165d5bbd6c51771e8595a97b"
  },
  {
    "url": "running-monitoring/v8垃圾回收.png",
    "revision": "f7d82fe1d65723818c1d49f4ff4cf594"
  },
  {
    "url": "running-monitoring/内存泄露.png",
    "revision": "c5c839ac80e598d535396ed520149066"
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
    "url": "running-monitoring/堆快照.png",
    "revision": "c7f3cae3726235248be2a172aeeb9b5c"
  },
  {
    "url": "running-monitoring/堆快照分离dom.png",
    "revision": "edc41b8362337b3d45edce20dab70523"
  },
  {
    "url": "running-monitoring/增量标记.png",
    "revision": "2e529785f27e058d88a7c604c0dbdf1f"
  },
  {
    "url": "running-monitoring/标记清除.png",
    "revision": "a637c4165abcff298ca6a93b08b28e48"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "091e73368a0cf7cd2187452bd0ca9710"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "38f695663b0ed5cd166146a295275e5d"
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
    "url": "syntax&API/async1.png",
    "revision": "da5c0e3ed18fef056c4933599ead2c7c"
  },
  {
    "url": "syntax&API/CSS/css单位中px和em,rem的区别.html",
    "revision": "109e549cbc7f917c733b112a8bd54cc9"
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
    "revision": "a92a9cfeffabe6f19a1d4ec344019ee3"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "f32b2c76e225f04fa6c210ab892ab476"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "1e9cc4f4b32d2734e7e2708981af7aa0"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "622402b65cc9a1b5acb49aee1099a734"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "74a22c8339eb8cbc6d6760db258bb238"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "15fb51dbab6edf2094374e9733f28aaf"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "94633abc5455f4f79dfe9006c742d136"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "4761935647c4625514fac5302d7860b2"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "89301f6caecbe887d7969ab7c518ca38"
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
    "revision": "9375f29b256a1f5a09b01791dd87be60"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "e9fee69e448347dd0b8c77620e3cce28"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "5bf0e4465d43e5999c82d6c05fe0b7ff"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "61c88f19a0bcc6ca9a27fd397b6143d5"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "6292df6b60fec6539e21fe8a6392c71d"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "aa23b3989b6720efe2ad45d9764dd5f0"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "250df1272aac7324825d650e0f57231e"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "c0f93265c24612ee00b0c49d86650ce8"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "1c37806d65a5b4381727f265ac9b8d28"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "3b61c53c269f7188a305824c48d99965"
  },
  {
    "url": "syntax&API/值类型.png",
    "revision": "3adc04db710d3033b60b9a3ac7224d2c"
  },
  {
    "url": "syntax&API/引用类型.png",
    "revision": "f7efb8b9e7f85357a859aed31094b505"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "f9d750ed28cd4059d29d681193e74cbb"
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
