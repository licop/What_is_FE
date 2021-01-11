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
    "revision": "374f711ce4b38accd7b65d58b64bf662"
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
    "url": "assets/js/10.a1bb7c5b.js",
    "revision": "f32bbbe2fa02f45edf7817a27e01b93c"
  },
  {
    "url": "assets/js/11.460b07fa.js",
    "revision": "4abbee4549ec810191a3e2d146146a3a"
  },
  {
    "url": "assets/js/12.48e62fc1.js",
    "revision": "0f5ee4afb7ccdc1a372ccf151a274b7b"
  },
  {
    "url": "assets/js/13.37443924.js",
    "revision": "ba1b917e2eb0900f768d8577bc97d388"
  },
  {
    "url": "assets/js/14.5bd50145.js",
    "revision": "5b8840ea33ed81ba5c23c140bdb19596"
  },
  {
    "url": "assets/js/15.61d3cd46.js",
    "revision": "18f72631933fcee44ef5ffcae8a47f0f"
  },
  {
    "url": "assets/js/16.2076f15c.js",
    "revision": "31c669f99fa415887f6e72f0fbbb9679"
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
    "url": "assets/js/21.6539f635.js",
    "revision": "d537d319413d19412d523986d6e77808"
  },
  {
    "url": "assets/js/22.724fe8b1.js",
    "revision": "0a8112bc341da10b5c76521d2824534a"
  },
  {
    "url": "assets/js/23.455e47b6.js",
    "revision": "131335863ca6ea3cc68deb424a1bd03a"
  },
  {
    "url": "assets/js/24.1cc39488.js",
    "revision": "055dda35ab1d0a62bb26a787b39101ec"
  },
  {
    "url": "assets/js/25.f8103722.js",
    "revision": "81e2e0e4dec489e5a4848b877466c3a0"
  },
  {
    "url": "assets/js/26.a7d53cb2.js",
    "revision": "e2b226219a311ff568f6f505a7b35950"
  },
  {
    "url": "assets/js/27.d4500a28.js",
    "revision": "a258eccbf057824325c9662d2361c5ba"
  },
  {
    "url": "assets/js/28.69cc7fef.js",
    "revision": "d46eafee8273c69952c0eb463aa5e02b"
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
    "url": "assets/js/30.bc8b1c99.js",
    "revision": "3a24a29cd5d6b888ad3dae934f92a478"
  },
  {
    "url": "assets/js/31.cdbbec3c.js",
    "revision": "b1ab382b380643492977e6e4565e5dbd"
  },
  {
    "url": "assets/js/32.80cf951b.js",
    "revision": "e1afa0e6d7c5a1909fe1a05397727a81"
  },
  {
    "url": "assets/js/33.fed706d8.js",
    "revision": "2b15e1dab0cfb06379201b321ede8ef6"
  },
  {
    "url": "assets/js/34.9fe1eabb.js",
    "revision": "ad90eb75e455ac5e9ceef64bd65b890a"
  },
  {
    "url": "assets/js/35.4ab88a8d.js",
    "revision": "712dfd68797846c4052fa80415986c67"
  },
  {
    "url": "assets/js/36.e7b69f1a.js",
    "revision": "aeb0e3cf391fb8933ef54c620cfb9c82"
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
    "url": "assets/js/41.40b0f85c.js",
    "revision": "f37cf452b9f441665cf75ccda95f0d21"
  },
  {
    "url": "assets/js/42.c724f9db.js",
    "revision": "cb6379391828c557a6a959c8c803b5c2"
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
    "url": "assets/js/45.5a7f31a3.js",
    "revision": "6b29b629c1fa61d3194fc611ccbdd02d"
  },
  {
    "url": "assets/js/46.3b14f282.js",
    "revision": "c8b209ca611a5fecb2650b4c6d5d862f"
  },
  {
    "url": "assets/js/47.33d4a3a5.js",
    "revision": "984bd5d1445738c6b7c0b083c6ad76b1"
  },
  {
    "url": "assets/js/48.3ce5fabd.js",
    "revision": "dd023c976f4f23d5e9f0d1fdfa4808d7"
  },
  {
    "url": "assets/js/49.d7076eda.js",
    "revision": "f5d17f543857f850463e7c451124db32"
  },
  {
    "url": "assets/js/5.f8f27f75.js",
    "revision": "02e5d10bfdb1d77a32528d9585481a70"
  },
  {
    "url": "assets/js/50.1dbca3dd.js",
    "revision": "1a3c81f71a326711b68afa2ba64c0e8c"
  },
  {
    "url": "assets/js/51.0eb5ddb8.js",
    "revision": "e496297acb87ba9779f0091ad3013930"
  },
  {
    "url": "assets/js/52.f29a98bd.js",
    "revision": "bc66c5f0ccbb949ef7de105994e277a7"
  },
  {
    "url": "assets/js/53.5c47a5da.js",
    "revision": "9bffe55a9fd81b7d42a15e6ee6299abf"
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
    "url": "assets/js/56.101bb83f.js",
    "revision": "055f6cf419c00903d6f512bf1830eefc"
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
    "url": "assets/js/6.5d0f7064.js",
    "revision": "1a6a55111f5437523ec177ca680a7613"
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
    "url": "assets/js/app.ce9a4cfe.js",
    "revision": "8ba6b47ab1a051084bb458dc1180ff69"
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
    "revision": "90026471aef986c55c718f870a56c939"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "05f793a8b9f6fd3d2576b372a20d0dc4"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "055e5886d8a731355cdb0f6ca5448999"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "10bf960e5d3f71bcb37e9187670f2db5"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "3b621f8f1cc95212f511aa868f6dfda6"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "49203dbb5f6d3661069e7d30ff043bd6"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "797874feef96af8922f65d167f13df4f"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "1d021ea40f74dfb15191eaf73831b0b6"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "ed873b9b79039f23bc444799f476543b"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "8d73da28f7788d9239c046dd4081d516"
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
    "revision": "97d562badf31ad0fc88da853d1f96413"
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
    "revision": "3e3707ac13a057094f335e136a732291"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "b93e6ecf8b1ad7f04fa2c724a42f6c94"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "920b296d198d2cc446204bc8e5d129f5"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "909564fc5a91cc286a07413f8a51993e"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "e72f23693f01fb7a03c13aabcb5fab6c"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "9eb36bf9cd83beb8037d1babb83288e2"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "2c4a821fd4904f3fff67a8d22307d37e"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "08e5f7bcd978586d67414a21ba004ba0"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "1b26f66513bd5e92d9b65f15aad0d0a3"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "5360f74ef9a2e1a170aeb082f4ff5cea"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "abbadaad4044ee4ac6a25f85d2868fd8"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "32e2cf1f2030452ab7ae5884e2a9a7f9"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "6741fb30a4a28b11e4d8eb208e1882b8"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "a04d6053b984e9cb32491398ea8233db"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "f3a9ae01e2746d7f7bc333b85ec2990f"
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
    "revision": "65aef33edca30e1f03f09a26aaf10d4a"
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
    "revision": "f21e03f5c890bfd7b516c7c86abf7a5f"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "a74ef1d8cccd69f85f3c516030ca7738"
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
    "revision": "039baba3a235c5c65f183eea10ddf670"
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
    "revision": "550548a4b5c4e40910885410d31a7980"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "a4fe97f8b95ceebd41395b80a1f9ecbb"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "743e3e622f65e4692f81ee3e8894141f"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "052be6b000c44d3cfb324a96299d39bd"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "b9858ebdc5a6a79205d43873a95de3c4"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "7b3de967769d18adf073797b6e35278f"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "f337510f1b83faa7d6dac1018efb4f41"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "05bb82e629dcdd31df639160efaf661c"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "a3596c1b1a45e1691632be2645bd0b55"
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
    "revision": "d35c5d805f2593f6a515d59757e3cb7d"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "963452f047b7c9bc38c0468607ebb0b4"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "53565136735cf971bbabf9b8a21d96e2"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "c55f09ae736a191bde855f7da6dd0f7c"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "452e68065cffc5a335c6d48e4f0b1e48"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "1d599daa61bab012f31daf411dadcf5b"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "f31516faaafd409781ca0479328d33f7"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "da10a8452fd64fe3d279b97647a4d35b"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "c6ad363ccee334e559e4b23ef8aa1e65"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "82dec952a69bf4f852ecb57decadbb27"
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
    "revision": "bc4a1f8dc970d47ba1e762775c7bc1b1"
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
