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
    "revision": "be60761e7371f9fdee7a578c26ec3667"
  },
  {
    "url": "assets/css/0.styles.5dcbec83.css",
    "revision": "966ef239f6ca39d6a32a9f92924afbad"
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
    "url": "assets/js/13.277c050f.js",
    "revision": "7cc07b2deb4921cfc1ef35d48fb1e6db"
  },
  {
    "url": "assets/js/14.2c18f271.js",
    "revision": "7ff136f8acc61da1c4f59976a11fbb45"
  },
  {
    "url": "assets/js/15.61d3cd46.js",
    "revision": "18f72631933fcee44ef5ffcae8a47f0f"
  },
  {
    "url": "assets/js/16.635b6e3a.js",
    "revision": "289fadff621cbf0add76d57446347327"
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
    "url": "assets/js/19.c944ea72.js",
    "revision": "7d169d26df76930629717fd97ce29562"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.fdb9e516.js",
    "revision": "f7164344e96b5238541c8a694eaa8ca0"
  },
  {
    "url": "assets/js/21.601eec8f.js",
    "revision": "afe066955eb8103be46c9f21f171fc3b"
  },
  {
    "url": "assets/js/22.40f351c5.js",
    "revision": "83b89f63d5a9f4709abaeb4f2ece30bb"
  },
  {
    "url": "assets/js/23.9b6de041.js",
    "revision": "774ee7d3bdf2c5b2308916c17d17bd02"
  },
  {
    "url": "assets/js/24.58c55955.js",
    "revision": "989a8961aba36abe35c8de2536f5b051"
  },
  {
    "url": "assets/js/25.97f845e6.js",
    "revision": "b410411d1a1279a0c9a3010d101bed06"
  },
  {
    "url": "assets/js/26.87b9b857.js",
    "revision": "c0cf21db645ca1e922bb99fe2c52b3a9"
  },
  {
    "url": "assets/js/27.0463a65a.js",
    "revision": "23dfb69056d666a5d08ba920caee7a56"
  },
  {
    "url": "assets/js/28.8e1d1e61.js",
    "revision": "30cc97b36e6afa3c6e04536d0cac6878"
  },
  {
    "url": "assets/js/29.b580aa87.js",
    "revision": "c99a9a982463df6b3924bf769e3667a6"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.d95c2559.js",
    "revision": "4a4ed32a64c670bbdc4d40a282c32eff"
  },
  {
    "url": "assets/js/31.e5d3fdcd.js",
    "revision": "eb0353147739b3c1506f15bed681b1cf"
  },
  {
    "url": "assets/js/32.2f2cc6c8.js",
    "revision": "d6776c0506d18a542e8f45876804dcb6"
  },
  {
    "url": "assets/js/33.939886bf.js",
    "revision": "b283cecb78c411cb2bf3077e92387c2a"
  },
  {
    "url": "assets/js/34.8621e4b7.js",
    "revision": "817fe0dd9c7770f773b085651c7fa686"
  },
  {
    "url": "assets/js/35.21a49921.js",
    "revision": "b1ffa29d054e4a9169b64cf2898627c8"
  },
  {
    "url": "assets/js/36.26fe504c.js",
    "revision": "8404193ccb71a675bb617d7073892261"
  },
  {
    "url": "assets/js/37.2ecc368e.js",
    "revision": "217362381a9425a7b4d2885b04bfc427"
  },
  {
    "url": "assets/js/38.4e52099a.js",
    "revision": "9f945326c27be665dfec7d724adf845e"
  },
  {
    "url": "assets/js/39.ded022ec.js",
    "revision": "ae6bebcc8ab3210d1741af198463bf34"
  },
  {
    "url": "assets/js/4.f55ea2be.js",
    "revision": "071280561092af7fc205bdc5dba0d384"
  },
  {
    "url": "assets/js/40.83ff7faf.js",
    "revision": "b83e495090228fdb0e56bae6ca0260de"
  },
  {
    "url": "assets/js/41.0eb2e7da.js",
    "revision": "70ccd25c7bfdf7f563491bbe838e9fc3"
  },
  {
    "url": "assets/js/42.41e4d6e3.js",
    "revision": "8086677eb666cd62596d16b801d3c640"
  },
  {
    "url": "assets/js/43.3057ff49.js",
    "revision": "ceefc49752905c903267506d0d8ce248"
  },
  {
    "url": "assets/js/44.8728a1bc.js",
    "revision": "5b468b1afb95e8faff5d8a62f093547d"
  },
  {
    "url": "assets/js/45.f269c06e.js",
    "revision": "cdec06a7b1a2279f6cc3e71ca9660732"
  },
  {
    "url": "assets/js/46.24ab679e.js",
    "revision": "fefb19250e4ce5a63eabeae6c3a1c0ce"
  },
  {
    "url": "assets/js/47.6d409e1f.js",
    "revision": "735a2a8725f2e184f577126b6da416d3"
  },
  {
    "url": "assets/js/48.b40a51bb.js",
    "revision": "876f66c971b417807af61e5c3f130aa0"
  },
  {
    "url": "assets/js/49.813e9cf5.js",
    "revision": "61c3437506412428abbcc22720b60288"
  },
  {
    "url": "assets/js/5.6681de7a.js",
    "revision": "59f791ba4736484e2088b3db53f2dba1"
  },
  {
    "url": "assets/js/50.ff578a5f.js",
    "revision": "79b8d7ac3b289358693fdc6888eb7a73"
  },
  {
    "url": "assets/js/51.0f3d342e.js",
    "revision": "d176bca7b5be1e675466f93068261d12"
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
    "url": "assets/js/app.8fc0e41a.js",
    "revision": "a2bc38201f97052ecc2f1976bae380a3"
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
    "revision": "fd50ed91c8a80de7e7f9978dcb315997"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "138c93066f1a40a01b90c137eb5bc560"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "b2c1ce030c73660fac5d618df5a6fc51"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "768ec82d75263c77bf54b3563d2156c1"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "3e3db43c4e0d60bdc303cd4ddf6585fb"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "8e81e73ac8ea7e2ce122e3137c730e0a"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "0757d674c56d36bbdf5d63e0345057f5"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "4d433410faaf803e999189010b7005f9"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "26a629ebe8bedff08be91f813fcd8201"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "c641b035aa3eac69539a7f5ef6f627a2"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "297a40656315aeaecfe3122dc7e1b17c"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "bb6787b978710325f6d55a6d282c1e0e"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "b84ea2ce0185cc459094a01d849dc71b"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "0a598993b1dcfc9901f1bf925370ec9f"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "087b0af6ac3e5e8d6a4238237ff66c6c"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "2913e2459dac279b1353bf8e913928a8"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "9fb695ff14ab3747972935963eeb802e"
  },
  {
    "url": "framework/React/index.html",
    "revision": "a647e25b272ad3070a5b5a123929d2e4"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "8afddc618c3fe35c5bf63c4dddb7dd7b"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "a01393b487a9cae7e977e8aad319f476"
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
    "revision": "4cd139207971813e8c98c4089bb6fa83"
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
    "revision": "8a51404edd80fba5087b01d2cc7aa072"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "3916a0fde88a2ce603704b310179651b"
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
    "revision": "198f7305c5519af8c3480b7ce8a8a532"
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
    "url": "syntax&API/ES语法/ECMAScript语法.html",
    "revision": "59885ebb83357e22e682a880e1828ddd"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "87eca6f59217e3f12eb82fd866bfa1f4"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "0a0230454f8efb51df512c3fe599a22a"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "5c32059a1af1cf79ca59b4f01eb9ec2e"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "d02cbb26e7edc0686ac721f8d5058c50"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "3c733287c24485533a3690492324f770"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "33ae2c3088939f056e377e01937b10f0"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "91a6396b6addad73b481cfaa3f53e0cd"
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
    "url": "syntax&API/Typescript/advance.html",
    "revision": "35ce8f1201a17d1f962eb9ce37307df5"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "17414c41c2d3336e239f556c295217c1"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "e3cc2fbe0e8940fb3f2fe3d9eb579a0e"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "a3b274ed1327e7941fa1e5342396aad7"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "ec786bf1beb502618d2ecc8c75e0bd95"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "e681bc9d750b13225343b9acb458470d"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "d4f723e8ae07581286e2e4bb5acc4245"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "45e7b67b9ffd1a4ac4b46edb72c95c10"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "8c904d974680a674d31f85c0b1f63c23"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "7d429ca6e715dd9cca30c903c0f0fd69"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "ab458e5d55dee3c522f63d6a724f3923"
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
