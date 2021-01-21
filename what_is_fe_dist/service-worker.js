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
    "revision": "3de9d4a5a1076774a294d777d31722fa"
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
    "url": "assets/js/12.2e394fe4.js",
    "revision": "b50c54b71bef7fa798080b6a3b1d74e5"
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
    "url": "assets/js/16.7cade140.js",
    "revision": "ca0d84406b4a2f19f7317146a1326991"
  },
  {
    "url": "assets/js/17.7bdb8b53.js",
    "revision": "5dd3d18cd5eaf800387e69df006bb0b9"
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
    "url": "assets/js/20.55b96468.js",
    "revision": "df1c879ba4fe640ff50a91603030ed4d"
  },
  {
    "url": "assets/js/21.a2b545a6.js",
    "revision": "f88f3c72e2d127eda058d9fc1f504675"
  },
  {
    "url": "assets/js/22.77b722ae.js",
    "revision": "ae00681f58df49dbc2deed7b9d87edcf"
  },
  {
    "url": "assets/js/23.ba389047.js",
    "revision": "499be8a045df6833ff4f6511ebf761df"
  },
  {
    "url": "assets/js/24.a76aa7bc.js",
    "revision": "7c4c1f71b77bd79d59f7a0c539ae0d1f"
  },
  {
    "url": "assets/js/25.40572b65.js",
    "revision": "f8e9643cd5880d289fba1933ed9f035f"
  },
  {
    "url": "assets/js/26.bb4bfc4c.js",
    "revision": "dde4913de382aa7cb0cfca2381f779dc"
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
    "url": "assets/js/29.bb450fe1.js",
    "revision": "a76e544336753d2926e731af8d8aa10b"
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
    "url": "assets/js/35.3a9b7fb1.js",
    "revision": "3687d4d394bd89d8dd084b2359eb5ec1"
  },
  {
    "url": "assets/js/36.093f8ee8.js",
    "revision": "1f2654119c0279bc7089b7b38ba10e4b"
  },
  {
    "url": "assets/js/37.8f1022f4.js",
    "revision": "68896ab1d2078c59b935a364049cbd3f"
  },
  {
    "url": "assets/js/38.93542cd4.js",
    "revision": "b308b11459edd9ad925d1b5ce4cf289d"
  },
  {
    "url": "assets/js/39.021d5fe2.js",
    "revision": "4cd17f0bbf92aa0c0fcab4969658fd72"
  },
  {
    "url": "assets/js/4.7a959686.js",
    "revision": "76f264bf6748ca0e2d51a37b75bb788d"
  },
  {
    "url": "assets/js/40.592df7d1.js",
    "revision": "04db28f9784e7dc39359bc926151a8ea"
  },
  {
    "url": "assets/js/41.ddebbf1d.js",
    "revision": "58e9fc886f5b582f9ba47161d70e5abc"
  },
  {
    "url": "assets/js/42.4bb6a70f.js",
    "revision": "089b3d4b413e0c34164490a795ac4c1c"
  },
  {
    "url": "assets/js/43.7f1104a6.js",
    "revision": "ae55f57748a093c24979317eaf91164b"
  },
  {
    "url": "assets/js/44.93e95322.js",
    "revision": "4ebbff860b258b2cc9e01b51a39cdb3a"
  },
  {
    "url": "assets/js/45.95c86c85.js",
    "revision": "2093387914e1b631fb8dea2b46e3c559"
  },
  {
    "url": "assets/js/46.50af8891.js",
    "revision": "6b710e8f87da3922812a2127173cbfbd"
  },
  {
    "url": "assets/js/47.550d3da7.js",
    "revision": "7cea5c1cf892326ab54ce5577dba97db"
  },
  {
    "url": "assets/js/48.3e1d6a36.js",
    "revision": "f04e8ae600a2f2889c7ac65427eeb7a9"
  },
  {
    "url": "assets/js/49.1528f983.js",
    "revision": "56222d1ee1fc26b02010d0f38048e8a2"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.8f6bd3a4.js",
    "revision": "9511cb6972fe05a26fee64e85c5be7e1"
  },
  {
    "url": "assets/js/51.30c35aac.js",
    "revision": "5eccc8d01f643c5cb9646f1c5794540c"
  },
  {
    "url": "assets/js/52.e32175c8.js",
    "revision": "0b65df55f0498c0a8d9a3ba0892f21de"
  },
  {
    "url": "assets/js/53.db94a888.js",
    "revision": "d19444dc0eb32bcae6b7c23ce22bcf50"
  },
  {
    "url": "assets/js/54.baeee67d.js",
    "revision": "f4c2ea919c95938633b9f1ed051bd199"
  },
  {
    "url": "assets/js/55.22ac35f8.js",
    "revision": "015272f70a2f40f5c113394acde94d92"
  },
  {
    "url": "assets/js/56.215bed1e.js",
    "revision": "c0a7464e9557ca02711a3a68c8c5cc48"
  },
  {
    "url": "assets/js/57.cef5d822.js",
    "revision": "5518ee1c6ced50392ea63655e7ca6bed"
  },
  {
    "url": "assets/js/58.7bf02332.js",
    "revision": "fb5bbb27b4e58e9f679b7a24fd328a3f"
  },
  {
    "url": "assets/js/59.9eb63845.js",
    "revision": "aee572dbc46e9aae361e25eadebd68fe"
  },
  {
    "url": "assets/js/6.56200eb6.js",
    "revision": "9974323b9961edf87a090747b653b058"
  },
  {
    "url": "assets/js/60.bb046d5f.js",
    "revision": "da249108ceeac0be94ac6680f200e01e"
  },
  {
    "url": "assets/js/61.2a7cd9aa.js",
    "revision": "0921a1aebac11ff89ac65bfe768e596b"
  },
  {
    "url": "assets/js/7.ab8ffd39.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.626e669d.js",
    "revision": "af7d6b57e865c9df61215e6d638d6846"
  },
  {
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.de71dbd4.js",
    "revision": "d91ac8d8325587ac3b5585d5e06c4936"
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
    "revision": "769bc18cc6bb6ca140efcb7370481195"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "973e598ecbfb767f27fc830be90c277a"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "94890d3e9e082bc56fbd838a1d1756b0"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "feb2c26162c81eca915e54b46379932c"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "73c07b88ecdc7b30c5077b3e5d14c76b"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "fa8aa7b629350cb2a5f340d80b68fb4a"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "ba677da3e93ea1f099a9ffdb7dba8a3b"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "ee5394b299393ffa307b64b372745c1f"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "c5cf365dffe42b37dca36235aea93d95"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "ef5fdd7e40346d0942c427483ab2ac41"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "dda2e0b233cdbf1af34ab514b43af58c"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "774647f0b3020033d6f6bb53c9f01546"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "47822e38c7ed969a2dd8f86dee465d93"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "5b55608c716d03e5ae37e5247c5789af"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "ff8b80dc0e077a29c4246d8294c83ac0"
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
    "revision": "00c3d7758116613934443a3ba2b6195f"
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
    "revision": "7d30b520c4f02c011644040ae88fbfac"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "19f88d897830081033fc0e1fc6b3babb"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "8cfd67949a509c6bd3ae9ce00903e058"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "cfe1e2c4e141ff2ff2ca2668f73bcf22"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "9052a52095ebfd33b36f539591c9eba6"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "5ddb4f03624b64a0b164e512ada05fd0"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "40c00dec8ddc1ef8638cd5dcded92a57"
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
    "revision": "bb161cf1f851d2ea275c67b9bbc26dd6"
  },
  {
    "url": "framework/React/index.html",
    "revision": "0f3f0d226dc6c9509d0d7a055a193132"
  },
  {
    "url": "framework/sub_pub.png",
    "revision": "521f365eff009e7bc89489806599ca85"
  },
  {
    "url": "framework/Vue/Virtual DOM 介绍以及 Snabbdom 源码解析.html",
    "revision": "5e9391181c40706a46cdb97e642f9859"
  },
  {
    "url": "framework/Vue/vue-router实现原理.html",
    "revision": "53b15dd9d0bb6a353a0328e1b0eb0fd9"
  },
  {
    "url": "framework/Vue/vue数据响应式原理.html",
    "revision": "6e1557154c4efb5e5346c80bb57ab0db"
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
    "revision": "edcc0816a8be00ea6d809f48353308c7"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "c507e433b9d53d79f5c62571b8adf8eb"
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
    "revision": "304d2eb86e7c3f566e0e1ef0db6543cf"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "8c91004933737f87f21c6cca1934508e"
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
    "revision": "f7bcfda1ae0e91925c042ce1928702c1"
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
    "revision": "82aa0616829591e5a0f5d47d1336f333"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "4458f119ee9407ae10d1f39e3877a651"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "d0a3f6585dfb534e09eb2613ee27bd6f"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "f1fd0f873adf0bea978f8a6081bb6651"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "b3d5da3d14c38e30a15599b9525ab174"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "1c74d0415e8e3b3675ad1962b560def9"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "f46eea3b35050fc7f5bd0ed2a14e8256"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "0c4a06bc765d5067c9e59b33cd593fb1"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "21133a4edd421f7c1d924193fe5d8b7e"
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
    "revision": "4a20d33609e77042cab37ba79f1c2aaf"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "b895334bdba9cebb26ed913e07313a23"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "f60054622eb67eba9d7a8a3655abb277"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "456603e7de77df8db5027624584ccd6a"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "3d9c15ca3acb3fe9aff223e0c2fa0786"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "a7c1436f6009b7404caf26ed2bf8b198"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "4ccd8bfabac3ebc3c0c6549717390a63"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "394782612ac57b3de803c9c8c07fe623"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "bbaae7b0a0715a8bf303e698b18450f2"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "b88921d67236fbe41ea333b16d5ec80b"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "90641b702487743715b68fd061477da5"
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
