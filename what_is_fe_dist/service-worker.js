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
    "revision": "7af2b0a4beac5aad9b3e42e84ebc685b"
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
    "url": "assets/js/11.ba4c0b82.js",
    "revision": "24a27f41f7e752a796a75fd5f451b062"
  },
  {
    "url": "assets/js/12.2e2c7246.js",
    "revision": "567fb97e3fb0f45c426f9e0e82bbe36c"
  },
  {
    "url": "assets/js/13.37443924.js",
    "revision": "ba1b917e2eb0900f768d8577bc97d388"
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
    "url": "assets/js/17.883eaf2e.js",
    "revision": "c7ee5f7a0b1843854b8db7999b740d08"
  },
  {
    "url": "assets/js/18.815fc977.js",
    "revision": "cd1af7a2c9d9eec425dde49f7aad37f4"
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
    "url": "assets/js/20.cfef85de.js",
    "revision": "c31571a92993de7c61f2d52b264c741d"
  },
  {
    "url": "assets/js/21.6539f635.js",
    "revision": "d537d319413d19412d523986d6e77808"
  },
  {
    "url": "assets/js/22.34bf1ac0.js",
    "revision": "6753c740b24fbc04e8ffee099343fecc"
  },
  {
    "url": "assets/js/23.6ee0ea30.js",
    "revision": "74e91ce5c83321177de87d3b15922c59"
  },
  {
    "url": "assets/js/24.1cc39488.js",
    "revision": "055dda35ab1d0a62bb26a787b39101ec"
  },
  {
    "url": "assets/js/25.cb2003c3.js",
    "revision": "e824420f3233db92e98579812fccbf6b"
  },
  {
    "url": "assets/js/26.5f3ef1d8.js",
    "revision": "45e31a5708f3aefc1342e3a67f98a2df"
  },
  {
    "url": "assets/js/27.a57e068a.js",
    "revision": "2d23053b695a956f5d689e9c02e48164"
  },
  {
    "url": "assets/js/28.4e8a314b.js",
    "revision": "7514c20ccd45e5e434c2ddf6d73e308b"
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
    "url": "assets/js/30.2534abc3.js",
    "revision": "a395e5527603dcdb2995b7a2935e144e"
  },
  {
    "url": "assets/js/31.5982f7a9.js",
    "revision": "9ca74d367b6ae459a43c185d34b4792b"
  },
  {
    "url": "assets/js/32.bfdf9d76.js",
    "revision": "3761c27fa3ac828fa9ef960f4cde3e58"
  },
  {
    "url": "assets/js/33.7228cd1d.js",
    "revision": "2df60473d5df311e76efcfee27b6b9ae"
  },
  {
    "url": "assets/js/34.1b8eb708.js",
    "revision": "346eb0515ce67f7c9fefeb9db8c38fa5"
  },
  {
    "url": "assets/js/35.ea741440.js",
    "revision": "9f949f14a56f0765935df14c2a834a31"
  },
  {
    "url": "assets/js/36.b0003e86.js",
    "revision": "7bebf1eaf0581f61af417d195cc53b8c"
  },
  {
    "url": "assets/js/37.04bb2c5f.js",
    "revision": "1ca84f26f125436173d9cd9628e389c3"
  },
  {
    "url": "assets/js/38.10477580.js",
    "revision": "a402c28cbbcae872d17407b80be31a41"
  },
  {
    "url": "assets/js/39.00c8b421.js",
    "revision": "5ea117407f23b9f01599be82b8bc1425"
  },
  {
    "url": "assets/js/4.3499da8f.js",
    "revision": "9f7cdd55afd8659af6c9a201e0a87bf1"
  },
  {
    "url": "assets/js/40.d28699d5.js",
    "revision": "8492c8977fd255fbdb1466f6c0476427"
  },
  {
    "url": "assets/js/41.1eca4984.js",
    "revision": "c34ce88f62843bd9651ed4dfe5642d28"
  },
  {
    "url": "assets/js/42.c724f9db.js",
    "revision": "cb6379391828c557a6a959c8c803b5c2"
  },
  {
    "url": "assets/js/43.ca42c5d6.js",
    "revision": "b656231651ea904ecc488e584db02aa1"
  },
  {
    "url": "assets/js/44.fea3ec17.js",
    "revision": "ec6396ef4bed16fc060d893f8dbbe19c"
  },
  {
    "url": "assets/js/45.0c5a43ad.js",
    "revision": "843e820bc4ee8b2c6847613e83662408"
  },
  {
    "url": "assets/js/46.b8aa7352.js",
    "revision": "12659c186ee1180b8f6b7c28aa038a2d"
  },
  {
    "url": "assets/js/47.ae934548.js",
    "revision": "54d51fd26bd918702b45939982072dcb"
  },
  {
    "url": "assets/js/48.3ce5fabd.js",
    "revision": "dd023c976f4f23d5e9f0d1fdfa4808d7"
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
    "url": "assets/js/50.35dbbe4a.js",
    "revision": "9f4ab53553dc850546ac96e5c8078dc0"
  },
  {
    "url": "assets/js/51.0eb5ddb8.js",
    "revision": "e496297acb87ba9779f0091ad3013930"
  },
  {
    "url": "assets/js/52.5c06dcbc.js",
    "revision": "72dfd3a3a08febec1cc2e7f7ca90370e"
  },
  {
    "url": "assets/js/53.947b7bbf.js",
    "revision": "274fb01607428abbbc7059927e6217e0"
  },
  {
    "url": "assets/js/54.12b555b3.js",
    "revision": "a8ffd26031835e8d4a3f6fee110bddd8"
  },
  {
    "url": "assets/js/55.d04caae2.js",
    "revision": "df6328c2a2f5f802ed5676ed44340357"
  },
  {
    "url": "assets/js/56.8d0de950.js",
    "revision": "9d3970cc52c6762e8f3608a702b10a2c"
  },
  {
    "url": "assets/js/57.c7ab34bf.js",
    "revision": "f7048e64e8174f00614e04bc387962ab"
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
    "url": "assets/js/8.f847aa7a.js",
    "revision": "b1c9ab125c33a057eeea93c7754eadef"
  },
  {
    "url": "assets/js/9.a1c872e2.js",
    "revision": "6863ca35da3aa52d6626237bba227dfd"
  },
  {
    "url": "assets/js/app.abcedaeb.js",
    "revision": "27585e9fcb1a482778fc6ab219cfe099"
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
    "revision": "8e92f23feff0d0341ad2df9e73d01b47"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "2e1b093272d00a56eccb378504baba6a"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "adaf235d6df02db9a4e4d55d89ed049e"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "5622a562294ad71379dca708759ef26e"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "402acb2774c6c1469a91c859b9efceca"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "ab44e850096a7b3ad3829d439d232239"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "650b3b1b06ab1ce4f10845b027e0d695"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "51304877c7476fbeb0db366057637852"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "8c2d02c2131841bbb4559b1d689cf912"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "85bf930bd60ad6195cee590d66142180"
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
    "revision": "89c058a749454558f0d278ed6d686bf5"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "70ab4a19d99520c984cff5e8cd051390"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "7c1da2e2d84ff1dd795b05fb2044edc3"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "8553f254199ee04eec5ed4262865fba5"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "710367c5dea5e897d8f0c5e4c2301c58"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "795a1e6305518ee108d32a75329673e2"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "efa1739e82f709bab1a386170fb25fc6"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "6cb32916be61152a37ee49e709e07b44"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "4fabb2a9dc347aecbdda493e2efcd2f8"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "ab3f81128148cd8fdc10758a4319b11c"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "97c624cdeff792241cbcb8260db3457a"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "bc5c08bebc62ba546ccfab07fded5142"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "aa9223b7028099bb84e62f9b3a92319a"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "a256ca8d1b8e5ba4ef09c2081cc339c3"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "4ff875869b10ff797a523a3c32ad006d"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "f1368c2aa1626bc09ccf9365ce00256e"
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
    "revision": "bcc596f1a7e718abd2ef96a04ca9044a"
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
    "revision": "b6fd32f2a3bb828ee2af9c74a18dd8d5"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "53d3d26be381253b01c1c02b62499a3b"
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
    "revision": "c8001d9b87d22660435f683d9058b8a8"
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
    "revision": "287b32809b681972fd559c8ed299f42e"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "4a204ef882f7887afd76c3e410ffdfc9"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "d666b24375e7b7b19d3e14cb648b7c42"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "f60d9ed0847df66ac3caa3212e3ee5d5"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "58689680aab993108e7868dd4d618a73"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "78b68d41ba237a06e9ecbb651416e347"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "2e69778d2fa8f91ee45164897eb920e5"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "fda95f2237a5317ef6e6e2acae782e71"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "f233d7475cc4c84065cb4f5a6bf68127"
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
    "revision": "0662402af2a9b0bced2f01e07d2b8e34"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "5e8a49e2c96d6151ef9c5ea81745d44b"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "67c8410f4c2a5718e46ff19a0823767d"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "9c3e742cd96c8b7c2b285508824bb409"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "c8c5a6cec0822ffaf6fd6448ae9ec4b9"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "bdf029448e13f825ffd21c6024944f17"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "b17e09edde2127a40b113eae14ae31d2"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "fa96b26713f1d0339c0c6768a86e4bdf"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "76ecc1e39ceb2ceb98329923505131ae"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "551e6183582ce5b4cf3633433d7dd235"
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
    "revision": "22ac294cc9dbc1340d2b3ae75f220acb"
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
