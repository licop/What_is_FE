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
    "revision": "8bec9d9e5ee115c8045560ffd5df43d6"
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
    "url": "assets/js/16.03b29a5f.js",
    "revision": "b13403bfc161ef7701e825f436c2c5d4"
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
    "url": "assets/js/19.36426051.js",
    "revision": "6583e395a9c28da2735335c2ad861767"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.aff0103f.js",
    "revision": "c1be954c8ca1e0e59bc4add06788e06f"
  },
  {
    "url": "assets/js/21.d538a36e.js",
    "revision": "2e8d8cf4e7c7c3b1a2ad7dfb39b0df1a"
  },
  {
    "url": "assets/js/22.e6ce73ac.js",
    "revision": "80b6f38254484bbb7ab76dd59755e4b4"
  },
  {
    "url": "assets/js/23.3eb6694f.js",
    "revision": "e8f99e939775fb5b6092e02267a3bdfa"
  },
  {
    "url": "assets/js/24.0065b7ea.js",
    "revision": "4a8671df5981b8066cab0b70cce393d3"
  },
  {
    "url": "assets/js/25.97f845e6.js",
    "revision": "b410411d1a1279a0c9a3010d101bed06"
  },
  {
    "url": "assets/js/26.ef5dce85.js",
    "revision": "8e95b2b33e35ecd326f3a50e21be291f"
  },
  {
    "url": "assets/js/27.37c5a69d.js",
    "revision": "23be1604c63002ec88cf71d1b46dc119"
  },
  {
    "url": "assets/js/28.6d11d608.js",
    "revision": "990904eefe189668cb209012b158bcdc"
  },
  {
    "url": "assets/js/29.8bf10eef.js",
    "revision": "057416d57c49aca4278b0df4bc8665ed"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.82ff1d73.js",
    "revision": "328fdbbe6d9d02264a6ab8f8bb8a75a8"
  },
  {
    "url": "assets/js/31.1d185b94.js",
    "revision": "dc941c15af441039208876554d578129"
  },
  {
    "url": "assets/js/32.f04cc9bb.js",
    "revision": "dc2224f938bf440c9d17d3df087816d9"
  },
  {
    "url": "assets/js/33.42b2626a.js",
    "revision": "5af37ddb7b7c61f467a1ca19c0305ddb"
  },
  {
    "url": "assets/js/34.add52006.js",
    "revision": "6932670e360cf77c3798006c29dc8ea1"
  },
  {
    "url": "assets/js/35.63a3005c.js",
    "revision": "bed5bb9169788b7cd2268dc3bcf5281c"
  },
  {
    "url": "assets/js/36.27c5a18a.js",
    "revision": "035c4f180135545a69c6c409a7b1119f"
  },
  {
    "url": "assets/js/37.8dd1490a.js",
    "revision": "c2f13bc65bd67c2d79c48a0af2c451c7"
  },
  {
    "url": "assets/js/38.51f6c446.js",
    "revision": "06da6d18da11f0ea4d69ea39e4638eb3"
  },
  {
    "url": "assets/js/39.e26b24da.js",
    "revision": "ac04849fdb2e95dba1ee1100bdda5d0b"
  },
  {
    "url": "assets/js/4.5a3a517d.js",
    "revision": "f45a6f31d264a1fe79b02b6429d4124c"
  },
  {
    "url": "assets/js/40.0137364a.js",
    "revision": "e6f7f47de69e66cdbaffe145b0a3fc36"
  },
  {
    "url": "assets/js/41.ddea4936.js",
    "revision": "0a3aad3c81dcb17bea94bf757ae49c64"
  },
  {
    "url": "assets/js/42.817372b3.js",
    "revision": "6683182fcc5967005d6ee0b3d9b9fbba"
  },
  {
    "url": "assets/js/43.4d14e5d0.js",
    "revision": "553ccc5daa9762ffe41c787062bdfa7e"
  },
  {
    "url": "assets/js/44.b2aa0329.js",
    "revision": "0687d35edd09be304e826b08a8d9d28a"
  },
  {
    "url": "assets/js/45.40011613.js",
    "revision": "d2f46d7a34259491f674225d35ddae2b"
  },
  {
    "url": "assets/js/46.8547b89a.js",
    "revision": "aec97ce331aa031389b56253657cae1c"
  },
  {
    "url": "assets/js/47.597e8f52.js",
    "revision": "553f35bb356d7de476fbc53c64b690f6"
  },
  {
    "url": "assets/js/48.1133516d.js",
    "revision": "e92b1fb000342335feecc5f627f6a5d8"
  },
  {
    "url": "assets/js/49.5d88bed1.js",
    "revision": "4452b8bd92fe8052e3ece48560975138"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.17621b7b.js",
    "revision": "38f11aec830af330015a70a49096dc2d"
  },
  {
    "url": "assets/js/51.ff0d1699.js",
    "revision": "8a533b1d89a61d75793d9c1ea3e24533"
  },
  {
    "url": "assets/js/52.5a2afb0c.js",
    "revision": "925bd65a8d984edaa33383f2a15ae395"
  },
  {
    "url": "assets/js/53.f2842f05.js",
    "revision": "e0f14a9d55f39a4d42652e5e8ca9152e"
  },
  {
    "url": "assets/js/54.ba011121.js",
    "revision": "f823daea345ebcf3a0c5f25afbb856ee"
  },
  {
    "url": "assets/js/55.856e07a2.js",
    "revision": "26ca0240051fd34b4ae86219e98a7657"
  },
  {
    "url": "assets/js/56.45a1e146.js",
    "revision": "afff2cd710105af8cb42d7017196cb05"
  },
  {
    "url": "assets/js/57.c0dc9682.js",
    "revision": "880b1f1c3869de1da7c206c8070fcc89"
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
    "url": "assets/js/9.8d9b981b.js",
    "revision": "a9a470847858eff561f461f07a14fc4a"
  },
  {
    "url": "assets/js/app.fac4dfc1.js",
    "revision": "1eadbf2c84bd36ca1927a3db16433501"
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
    "revision": "061e6b49a6b43cd87a46546fc497c180"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "65e2666ce87089efa396707ba02f1c3b"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "47174b45a012f4f9c7135f3f2bff6597"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "a854e96a8245c240d4773f82b4aad570"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "a4a5b64bc3b0ed59973a95a9618c8a3b"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "a1cb2b7432cc49e47cf9b4f2f7f76c6b"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "567bc59bdbbf13eda031abc8624bc791"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "ff84267ed5bf5b38552e2c476a48f6c4"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "4084eca959a7b1f7e70548ccff731900"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "66e3529ec92648427ec2e3064a732449"
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
    "url": "engineering/generator.png",
    "revision": "3490cd0888918f574af11fcaf428d51d"
  },
  {
    "url": "engineering/gulp1.png",
    "revision": "6492ebb85fa4b54186539ff7c426654b"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "d28255146c739161c84de2647162e8b9"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "977ffcc56d1d7ea0c2f694804f048e81"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "a83564c0bd43b3b5fbee5747e1b1a0eb"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "cdb6e4064eb026d23a13085427a4ef74"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "52bb31bcaf237e21d74502814b43e889"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "9f36d1884c72a37a2a92a6bef06c21a7"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "40a2d080c9a171e67e5b88642597a19e"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "4c71a30710fcd2cb387388fc2ec9f4f8"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "3a02a7beda9e0886beb3d50f2d4aef0a"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "b9907548f00a9f7c96c39b41954a5fac"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/模块化/关于模块化.html",
    "revision": "2eae8a47a8e87e16119c4fea03e225fb"
  },
  {
    "url": "engineering/规范化/关于规范化.html",
    "revision": "1a1e5128b69a418006c94fa79b53990f"
  },
  {
    "url": "framework/React/index.html",
    "revision": "747ce4642a60f95ea65dc8929901deef"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "8a5d3eab428ae1f316eda934d6ffbdc4"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "72310c5840d69ecb4c634a03a8a008a9"
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
    "revision": "4075a3cd071e5da065ac202bb734c3c7"
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
    "revision": "cf0bf2f3d884d7179cb42edf7362430a"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "d9b975aadede2dcda0bcb8c2833cd770"
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
    "revision": "822697dbf975e57153e5b6b5dac79157"
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
    "revision": "a06d7f546072e588beebcf3db64d3ab5"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "43ea06a6681e8e9c4126cba40ba3e652"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "a6397db0644faaaa79ea59ebc1103bc1"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "22d45d37142a0e4580f237f3513bd014"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "0d6e02c9c402e1d978543a08905b3f7c"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "958fa866be159312944e387e08ddd78c"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "5eb405e838ab7e6234f3285348117bd8"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "eeee1b3e3fc2a11784478edbc70d0f69"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "9cbc87427d201850346dc21198e5be7b"
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
    "revision": "aa08337c7a1ab888d1eba2861d4495b8"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "c20079c344e450af58fbbdfacecde2ff"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "8c1024f2e8548308ef89cbaf8f3160a6"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "217e896271f6c1b162a8ffb3542d033e"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "2aa9d30b6d597284b23c45a743522c95"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "3a1e54b68cee9b654fc679b9d5cd26f7"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "2a1d4a893766db6002628a568e0f4c17"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "14f057104efa8dae3424af9e9a356dfc"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "3cc909f18044cd3a1b0f4e557e8b021c"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "7ce923f4536fb47a90abb5aa78792369"
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
    "revision": "2dedbb3c8e87133bfc5b91e366564bdb"
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
