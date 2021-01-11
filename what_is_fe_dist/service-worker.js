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
    "revision": "ad4e4eb9a98f01e0861b41a005fde6d4"
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
    "url": "assets/js/11.6cec0877.js",
    "revision": "61f7948f9336d5465140777d51215173"
  },
  {
    "url": "assets/js/12.2e2c7246.js",
    "revision": "567fb97e3fb0f45c426f9e0e82bbe36c"
  },
  {
    "url": "assets/js/13.a983f7f5.js",
    "revision": "72c22d54a40303766772e0d848f234d7"
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
    "url": "assets/js/16.635b6e3a.js",
    "revision": "289fadff621cbf0add76d57446347327"
  },
  {
    "url": "assets/js/17.a2e41543.js",
    "revision": "1f4657eab4ce2796eb216f1affe6d088"
  },
  {
    "url": "assets/js/18.815fc977.js",
    "revision": "cd1af7a2c9d9eec425dde49f7aad37f4"
  },
  {
    "url": "assets/js/19.acc4779c.js",
    "revision": "3dc957a7ab409ec482614e9d8bc60691"
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
    "url": "assets/js/21.7112f556.js",
    "revision": "82117524d4f8fb485d3dde5d1c851950"
  },
  {
    "url": "assets/js/22.02219807.js",
    "revision": "4bcac41ef079993ea0b86932648ec4cb"
  },
  {
    "url": "assets/js/23.ce09794f.js",
    "revision": "a14a5bed10a4a2c868c5af0e0d1d286c"
  },
  {
    "url": "assets/js/24.1cc39488.js",
    "revision": "055dda35ab1d0a62bb26a787b39101ec"
  },
  {
    "url": "assets/js/25.57616f77.js",
    "revision": "6a660f9816078d04af44912dbb452c04"
  },
  {
    "url": "assets/js/26.755d2162.js",
    "revision": "dec831c1684489532802c0d0eede1b1a"
  },
  {
    "url": "assets/js/27.7b630f19.js",
    "revision": "8c0c24b19f7fa42f56579e47b86cb6b5"
  },
  {
    "url": "assets/js/28.f6dc1e6e.js",
    "revision": "46a115f06902b6c7e44650b99877f274"
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
    "url": "assets/js/30.bd3e0843.js",
    "revision": "5b75ea7c66a44b0440f9ce13b58c0c37"
  },
  {
    "url": "assets/js/31.3f13f8ad.js",
    "revision": "1d74a64ad7c9e9034ed26cb9df1612e3"
  },
  {
    "url": "assets/js/32.80cf951b.js",
    "revision": "e1afa0e6d7c5a1909fe1a05397727a81"
  },
  {
    "url": "assets/js/33.2b9dd082.js",
    "revision": "4ec3e6539ac496d07b5a79a006159691"
  },
  {
    "url": "assets/js/34.abe86184.js",
    "revision": "8dd17878d93b6e84e323fc1c1d35527f"
  },
  {
    "url": "assets/js/35.4ab88a8d.js",
    "revision": "712dfd68797846c4052fa80415986c67"
  },
  {
    "url": "assets/js/36.58242c8f.js",
    "revision": "c9b697c7748445b055bdb9e792ca1b89"
  },
  {
    "url": "assets/js/37.d31e1ca5.js",
    "revision": "e30acf8367042fea7fa6e78c365e83c5"
  },
  {
    "url": "assets/js/38.023a2488.js",
    "revision": "b84c7a6cf2983e549519cc203ce5f878"
  },
  {
    "url": "assets/js/39.9dc03866.js",
    "revision": "2f0f37405b0d906825a1e22fdd8206ee"
  },
  {
    "url": "assets/js/4.3499da8f.js",
    "revision": "9f7cdd55afd8659af6c9a201e0a87bf1"
  },
  {
    "url": "assets/js/40.2a291015.js",
    "revision": "1bf9ce544ee7bc60929a4847d736f472"
  },
  {
    "url": "assets/js/41.28e7b0bb.js",
    "revision": "cec3a03b09b917af41f52be5f4c8507b"
  },
  {
    "url": "assets/js/42.fdb6385f.js",
    "revision": "4544c968134b300b25855305d8bb76a9"
  },
  {
    "url": "assets/js/43.99883005.js",
    "revision": "f180e6ff3deb0c712c921475ee061cfc"
  },
  {
    "url": "assets/js/44.210a92c1.js",
    "revision": "766f1cbc4d96e8d0e079935c3de6ade6"
  },
  {
    "url": "assets/js/45.36683e58.js",
    "revision": "ae414045ef4e1082f07f1a866bfa4029"
  },
  {
    "url": "assets/js/46.a3ae49b8.js",
    "revision": "540dec39410e1a778aa20e5e098d983b"
  },
  {
    "url": "assets/js/47.ab2d58be.js",
    "revision": "460bf6cc011b99cb3229951096cf93c0"
  },
  {
    "url": "assets/js/48.596469f6.js",
    "revision": "c200a87881cf03818720a2d78d0bd3c8"
  },
  {
    "url": "assets/js/49.748d91d3.js",
    "revision": "7493cd3f47c793ae663ccce3b69032dd"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.1dbca3dd.js",
    "revision": "1a3c81f71a326711b68afa2ba64c0e8c"
  },
  {
    "url": "assets/js/51.61d093ea.js",
    "revision": "3751ed407bb033c50eb614c2b8ffc9f4"
  },
  {
    "url": "assets/js/52.f29a98bd.js",
    "revision": "bc66c5f0ccbb949ef7de105994e277a7"
  },
  {
    "url": "assets/js/53.3dd392d9.js",
    "revision": "6fe7a8255137c1068b388f5298bcac48"
  },
  {
    "url": "assets/js/54.13fee69f.js",
    "revision": "8d5fad6b8dac5a54934f78226fe71cff"
  },
  {
    "url": "assets/js/55.d04caae2.js",
    "revision": "df6328c2a2f5f802ed5676ed44340357"
  },
  {
    "url": "assets/js/56.101bb83f.js",
    "revision": "055f6cf419c00903d6f512bf1830eefc"
  },
  {
    "url": "assets/js/57.08d091ee.js",
    "revision": "2533092b7f8829a1d9832f3a2ef7b03d"
  },
  {
    "url": "assets/js/58.f5d11fc0.js",
    "revision": "0424adead9d0532986222265fdcc571c"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/7.ab8ffd39.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.5e1e69f6.js",
    "revision": "e3f8320c99171143b877e39c2b2c5779"
  },
  {
    "url": "assets/js/9.a1c872e2.js",
    "revision": "6863ca35da3aa52d6626237bba227dfd"
  },
  {
    "url": "assets/js/app.0d17963c.js",
    "revision": "a2580eb7167948985c13eb4b229c4c5b"
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
    "revision": "5de1baa304e3417c4df5498f5562730d"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "b14dc08498436f9b5b7555971bad2fab"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "339ccdb49ed1848ef9cb5b03fcd1e08e"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "cc0e352b2e47a1517c3162a374eb26ae"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "a49f2c54d6572469a6fcbfe84fdf43ca"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "f45580df2dc05a72fbf1fb0e0167618d"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "0f0928e516fbd5b24e8b77abf76684ef"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "8f04a869a95fd6040c8cb43242a333af"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "bb6ab126668fde773a0498a5e499db65"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "fdb61b3a00fddec0cc3575f5a77f936c"
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
    "revision": "529e3d4bac52bc9d1c942436a6031b09"
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
    "revision": "2dac8a83d7abe6b5df4080a878a59195"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "aad67357be068951fdf317d701e678dd"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "b1bb9ad920d6223255087046344b85ef"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "6ebecd89e1511ddc0867741ee789c77b"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "99d3d8c6ea07dccf57aab57420713161"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "47b871c53bf38bf0fb8edbabbfd86145"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "7856d8c3d17dbc38921d7d4de5590522"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "c588a963d343b917d18416f7d7ef6b16"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "a75daca803c586869e1558f8bf33982e"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "3541bfed89403a9ffdded36fded6e413"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "1b58794f8b417f8d9ace56d621c86b9b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "419ad1a9c3c3a3f0b5d1313611d107a2"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "b7b83d3b452a95ed7c9ae0a08862c020"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "af8a6e36e98738ebf6b48f0370e6a64d"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "1ed5782c1451daf574fc10b6f7c01566"
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
    "revision": "960cba26be81d517ab216c5df3ffe6d9"
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
    "revision": "9e2775eeaa3c98762b2252a7c71ed71b"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "8473bab2ba2d2bf8acc261fe80e9b9ac"
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
    "revision": "01401052a1d2e9075d8963da82f880f0"
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
    "revision": "6c2f6d333cf828509cd96f655b889b14"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "8c74d0f57cfbb679d6bfcc007c1eb94d"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "7ae4ad3317ff922ac2d59717c803f402"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "053a08ffb6639ae361fca4b6b8ade307"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "54fb5e73333d026d8af4b257ce015188"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "45fd87d78c2300836b2e2254ed0bc015"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "96a47dc74fa47137ffb348cdb988b788"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "e0ad72d0529e760dd044f7ce75374dd5"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "014c8c10d1977c218f38b21d9199ae59"
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
    "revision": "3c69d90bc17e2791c92262dea0d06aca"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "614d9f98316ba4c6f75ae460f216d275"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "44b4dbfec64bc31f38e5bb1ef7dcfe80"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "217f4257f6a90badb65d4ce33a808016"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "cd8838d4d8e23021b7a73c92922ae27a"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "f7107474db05f6e7ea9539bc8c046388"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "016de71c20090250d683bd4640f366b9"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "8ee17cf41b76eba39dd109d25746393c"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "82601eb6c334fe3b42e1638eda2c8c89"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "e63eb63435921df5f6f70f2226382a10"
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
    "revision": "5d975482966bf0e1969a3be43dc4c616"
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
