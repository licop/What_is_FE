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
    "revision": "f5bbd6f5b2e8baba086a020cb5453cb1"
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
    "url": "assets/js/17.883eaf2e.js",
    "revision": "c7ee5f7a0b1843854b8db7999b740d08"
  },
  {
    "url": "assets/js/18.183c1e46.js",
    "revision": "297c4ae8596c0669c8cdfb5c9ea2f953"
  },
  {
    "url": "assets/js/19.04cc3a2e.js",
    "revision": "2cdf639dceb96610fe22b7e96267332c"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.21c71b16.js",
    "revision": "5b57c0105263e9cf980cf809d128ca99"
  },
  {
    "url": "assets/js/21.601eec8f.js",
    "revision": "afe066955eb8103be46c9f21f171fc3b"
  },
  {
    "url": "assets/js/22.e6ce73ac.js",
    "revision": "80b6f38254484bbb7ab76dd59755e4b4"
  },
  {
    "url": "assets/js/23.7e0f5d9d.js",
    "revision": "2304a7408fdc82f98d239f4c5821ef10"
  },
  {
    "url": "assets/js/24.1a49d6cb.js",
    "revision": "27af52684d35b1a92b446e6cd0e79a60"
  },
  {
    "url": "assets/js/25.d352497d.js",
    "revision": "8229e7ec4e9f8eeff21a983c380c8f48"
  },
  {
    "url": "assets/js/26.dc9163a3.js",
    "revision": "8e95b2b33e35ecd326f3a50e21be291f"
  },
  {
    "url": "assets/js/27.5abb4044.js",
    "revision": "8d0f6b45e2ef164b20ffea92e614cf0c"
  },
  {
    "url": "assets/js/28.a583a3b1.js",
    "revision": "d0b2a44d830db28aa0bc5825aa2feb2a"
  },
  {
    "url": "assets/js/29.6153715a.js",
    "revision": "22a79aa106adf233d1ba2c948188027e"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.ef8672b5.js",
    "revision": "4b8524e124035f69e2c01c57e81c0661"
  },
  {
    "url": "assets/js/31.6c1b243b.js",
    "revision": "dd6db1f73f5d1fe96f4294a3d23e43b7"
  },
  {
    "url": "assets/js/32.fe2e67c1.js",
    "revision": "eea793b5251ebd434d361b95b578d4d0"
  },
  {
    "url": "assets/js/33.c2fb006b.js",
    "revision": "4eb121c7ce46ece723a76d5e33df9e51"
  },
  {
    "url": "assets/js/34.e4f8a6a0.js",
    "revision": "58298ed99103d2864aab9ad0e33eb133"
  },
  {
    "url": "assets/js/35.cd59bc26.js",
    "revision": "33e798912aa57f49feebe9f7ed7733bd"
  },
  {
    "url": "assets/js/36.6f895472.js",
    "revision": "4fd8f693f99fba2545cac1b4d80d5f5d"
  },
  {
    "url": "assets/js/37.17d3f030.js",
    "revision": "0b3267c8820a4867ffadd4a5ded8489d"
  },
  {
    "url": "assets/js/38.c6719ffa.js",
    "revision": "725e9d4a9ac141425806095aa1e016ab"
  },
  {
    "url": "assets/js/39.09e176ae.js",
    "revision": "31f1bda1eee0bd2116a4fddc75569f4a"
  },
  {
    "url": "assets/js/4.d9a2acfb.js",
    "revision": "0519d4eae62d410dd8fc1df477951803"
  },
  {
    "url": "assets/js/40.083d60e7.js",
    "revision": "64be23bd8b320583d52d7763c296e7cb"
  },
  {
    "url": "assets/js/41.1a95b3a1.js",
    "revision": "4fbb3ebb5c5dcadc0d24840daedd417d"
  },
  {
    "url": "assets/js/42.96bf3e9d.js",
    "revision": "41cb92c3fe540d5c6a08de2f67d3aea4"
  },
  {
    "url": "assets/js/43.ec050ac5.js",
    "revision": "01ce4a58df398f8ca1861178d8d8ecdd"
  },
  {
    "url": "assets/js/44.add59dfb.js",
    "revision": "343a1172a8c12f979c8c3110d2e55649"
  },
  {
    "url": "assets/js/45.cbf8d48b.js",
    "revision": "4624a2d3360b5023b0d5b7b7a04e5b8d"
  },
  {
    "url": "assets/js/46.1ba92a89.js",
    "revision": "310d5e87de6bc59af18983fffa0e75d3"
  },
  {
    "url": "assets/js/47.cd3ea873.js",
    "revision": "4e4d44b41dbb29ba740d8485659c6d8d"
  },
  {
    "url": "assets/js/48.19d57a0c.js",
    "revision": "a556aeefa88eb4165bb4c0d746404418"
  },
  {
    "url": "assets/js/49.5eccc563.js",
    "revision": "f21d8feb380bb8b9b9cc772fc63a0566"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
  },
  {
    "url": "assets/js/50.3a14c00d.js",
    "revision": "ec07ecc8dad6e0622258b49d92aa365e"
  },
  {
    "url": "assets/js/51.3cbc690d.js",
    "revision": "26edbaac43869076aaf337ff03d62557"
  },
  {
    "url": "assets/js/52.1ea8aa3a.js",
    "revision": "093eb45d9e6d3ef68396788b1773ad64"
  },
  {
    "url": "assets/js/53.883b9a64.js",
    "revision": "87bfabb6949c2d86c0f0dd58f0e20d64"
  },
  {
    "url": "assets/js/54.ceaf84a1.js",
    "revision": "5810437eaae469c5aa1780821182cc03"
  },
  {
    "url": "assets/js/55.1ba37dcb.js",
    "revision": "24508a10dcba125025ce7ac05a5c9008"
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
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.b87aad5c.js",
    "revision": "9863b692e9f6818ab78d72af98afecf2"
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
    "revision": "2364af2f13d6fa03ad0e75d6375e9ff7"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "d17dce4772632ae92b11b093262fcd16"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "bd0239711c76aa0be760c97cf78d9e93"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "cf0266656cb95fda5a600cae62900b93"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "673d98bd0d215c4ae40c78a65e3a2639"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "b3870e2aed71dbd0afeca1d976d2c5df"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "d6a9fceeddc7870d38b411435195a8bf"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "151dea49b9f9dbb59c1bf699d47f138c"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "517966404182257811a3fb953e934ef5"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "4cccedf2d54343a9c60739022e9ec6e3"
  },
  {
    "url": "engineering/generator.png",
    "revision": "3490cd0888918f574af11fcaf428d51d"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "182486410f4b62a2405a54eb4da97984"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "73e23a180c52d1120bde4e8ce45c35bb"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "071cc5a978d9f43ec30689bd63ae6f94"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "35c3da3e4bf80e93bbbef2c16feb8389"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "b481414be5f05742808723936282923f"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "ba645f310f6444db035fcd5090a25cd2"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "64592b8cb431be49b0c5e0d3fa636e94"
  },
  {
    "url": "engineering/前端工程化概述.html",
    "revision": "c61c408d59a1d39d519bed62ca000a22"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "engineering/脚手架工具.html",
    "revision": "2785609449aacee6825539ce88573ee7"
  },
  {
    "url": "engineering/自动化构建.html",
    "revision": "7b6ee7c70c9fa851d75ebda4faa270a7"
  },
  {
    "url": "framework/React/index.html",
    "revision": "c6d3118b3b7959084b3d04f93284aa30"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "4806d583c18bd3c8c36bdf0d9784030f"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "e1831908d43422d6e3d38a701963de3d"
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
    "revision": "9ca08e0b2225da7c8186d9839fcd4596"
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
    "revision": "4992e016674b019c921d6a2102533290"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "a5ea375cf5d747f911a41e8c8ba1c535"
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
    "revision": "56471c2c98c94fa94f800b2cfca898f2"
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
    "revision": "cae0229945c6b3139cb157bbcb7b35cf"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "7e357a0ea72a7c280d8ff9bd7d3474f4"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "dcda7b655f114b639502b4bce946c69a"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "9d6eddb1e04e90cdce51b63fb9fac8c6"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "950f589dd12abc9b661c1a394e8c211d"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "a48e8a49c5f9d75ed58d6c5d835d4a04"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "fdc6f16ab8c12441278ca1b9682aad5b"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "177475017aa4211af40adb0cb2d694c8"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "b976b29c17dda6e73526f23eb7ed76d7"
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
    "revision": "494666917e455e2a812334af058977fd"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "678f8588498a3412ca3b5573e03a6e28"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "d13b3deb306a5811744e85369b41747a"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "858a1d39711929b835040b732b543294"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "2d00ea16c1572e82863386c156b37bb8"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "0507b198a714c3a9a8e5c015f0b73e37"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "4c84310cda197c1e3d259f75d712e50d"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "1b95495d3befb170fc2caf7357572f9b"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "ab05cd94fffae282e66973557ba7cca6"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "feaca25d8f19e1a44e56d9553f935728"
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
    "revision": "a115305b300db2c489309b4ce6c5d4d7"
  },
  {
    "url": "typescript.svg",
    "revision": "25c5cb938602cdaae00edc225688bcb1"
  },
  {
    "url": "whatisfe.svg",
    "revision": "574047b9eceec3b296f1a9768f601f73"
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
