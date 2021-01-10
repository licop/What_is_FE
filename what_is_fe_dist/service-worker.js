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
    "revision": "b1ae60bb66bf98522c2500da35382f98"
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
    "url": "assets/js/17.9dae5907.js",
    "revision": "6e5d5ed5f1248a6adb7cd91e817a735c"
  },
  {
    "url": "assets/js/18.183c1e46.js",
    "revision": "297c4ae8596c0669c8cdfb5c9ea2f953"
  },
  {
    "url": "assets/js/19.8b90d6fe.js",
    "revision": "7f38dce05ac6abdac613e780c1afe35f"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.bc0ab09a.js",
    "revision": "f98c7e460de1159f04d93d3061b25f1d"
  },
  {
    "url": "assets/js/21.f9bc0d01.js",
    "revision": "74777497a039e6ac03b39b5bd6aeb7a8"
  },
  {
    "url": "assets/js/22.fb27481d.js",
    "revision": "460fdd38e3f073f513aa5dae5336f51b"
  },
  {
    "url": "assets/js/23.3d00d487.js",
    "revision": "4569671ea2109dd1cc2771d393f00a14"
  },
  {
    "url": "assets/js/24.79266300.js",
    "revision": "f81b556e8c9bb401151829d17d11b155"
  },
  {
    "url": "assets/js/25.4a145c86.js",
    "revision": "4ccaeaeb18f46578f8a2f206e1654b6a"
  },
  {
    "url": "assets/js/26.3acd5c65.js",
    "revision": "a78add1c53a20aff7341853d5e104fdd"
  },
  {
    "url": "assets/js/27.895c7084.js",
    "revision": "8ebc8d7e8c316352d963d33e1e83cfb5"
  },
  {
    "url": "assets/js/28.12b5f83b.js",
    "revision": "b2315d7c4143e0ad6c7bd94eaf976650"
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
    "url": "assets/js/30.516de047.js",
    "revision": "7b9e1e56d75b4a4a09c7cc88d8bf923f"
  },
  {
    "url": "assets/js/31.5982f7a9.js",
    "revision": "9ca74d367b6ae459a43c185d34b4792b"
  },
  {
    "url": "assets/js/32.63e20e5b.js",
    "revision": "306668132f5cb6df06d67081f6b5da9f"
  },
  {
    "url": "assets/js/33.aa7976f7.js",
    "revision": "b956065ad2cd6c19aebae24f02e63788"
  },
  {
    "url": "assets/js/34.abe86184.js",
    "revision": "8dd17878d93b6e84e323fc1c1d35527f"
  },
  {
    "url": "assets/js/35.85f3c253.js",
    "revision": "569202c8a46338c6d56a52044b124b43"
  },
  {
    "url": "assets/js/36.bfe9079b.js",
    "revision": "83a038ded449c42eb1b01e60e6bfa1bf"
  },
  {
    "url": "assets/js/37.d31e1ca5.js",
    "revision": "e30acf8367042fea7fa6e78c365e83c5"
  },
  {
    "url": "assets/js/38.215b825f.js",
    "revision": "c9d88fc7ce00a9e2335d754fbddddb15"
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
    "url": "assets/js/40.e07c253e.js",
    "revision": "eb1de4ad416041e829ac2af5c34b713f"
  },
  {
    "url": "assets/js/41.89bd80d1.js",
    "revision": "e7bcc73707435f79031ec1b3fb7a4484"
  },
  {
    "url": "assets/js/42.c724f9db.js",
    "revision": "cb6379391828c557a6a959c8c803b5c2"
  },
  {
    "url": "assets/js/43.64519e99.js",
    "revision": "2f8f703949facb10ddcb6aae568266da"
  },
  {
    "url": "assets/js/44.6959fc78.js",
    "revision": "da1f2002bd843d44bcbe95aff7446c21"
  },
  {
    "url": "assets/js/45.5a7f31a3.js",
    "revision": "6b29b629c1fa61d3194fc611ccbdd02d"
  },
  {
    "url": "assets/js/46.b8aa7352.js",
    "revision": "12659c186ee1180b8f6b7c28aa038a2d"
  },
  {
    "url": "assets/js/47.96830063.js",
    "revision": "e57682dcd754f126a48f17ae4caa9fbb"
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
    "url": "assets/js/50.1dbca3dd.js",
    "revision": "1a3c81f71a326711b68afa2ba64c0e8c"
  },
  {
    "url": "assets/js/51.18498de4.js",
    "revision": "2285419644e2b2c755f01ff480fc3f12"
  },
  {
    "url": "assets/js/52.b77b88bb.js",
    "revision": "2b4f9fa04e755c7ddc0cf2bd3111ddcf"
  },
  {
    "url": "assets/js/53.947b7bbf.js",
    "revision": "274fb01607428abbbc7059927e6217e0"
  },
  {
    "url": "assets/js/54.b7c133ef.js",
    "revision": "7f2b38adb10da111c469d855e60f7573"
  },
  {
    "url": "assets/js/55.668df143.js",
    "revision": "0fb3809adb2d30fb565321c3571d81d3"
  },
  {
    "url": "assets/js/56.9805d36a.js",
    "revision": "4077698d50bd1c3d8134e63d7cb93f6c"
  },
  {
    "url": "assets/js/57.95a56ab8.js",
    "revision": "203058a75d1b11e3a38994403f624b9d"
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
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.020ff8fa.js",
    "revision": "f88454f24856d48d7e2a468fc9824824"
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
    "revision": "fb8b732801a5779ce9e6d6489764d3cc"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "b5be837b1e33cbcdcb75603664369439"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "d40a0e6d39491f823ef7fdb2f6fef0ec"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "905af12a7f1dcb7264f3688b8567215e"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "e45960336d81e2ba1f19abdc267a9f79"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "8bc5e698a17cc5e56772d011ee66f9d1"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "968450a55b7c0218b084178add3cdabf"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "600084ac65787641e65b777fdd90b081"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "e9c71336e9e9e95e9e5e61c9dc02f729"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "f7d6b0be475572485881320c387911ed"
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
    "revision": "f161a77c26eb6990733c76839f0e839e"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "b82810a4373ae0adc300abccae1f90f3"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "01c7f9e4209e5cafed3e853be733e26d"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "80eaa7c3a317efe1949601c6674ba890"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "5a0d4adbec035b52222a5b17dfc92f1c"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "42a254a4c1de62216d42435f858be1f3"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "ea770fbe69474340c3c07b107e88fbbc"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "d75627c1db7ce6b718bbe491667a7038"
  },
  {
    "url": "engineering/前端工程化/前端工程化概述.html",
    "revision": "c5d69cf8193f5d3311bfebc81b80cec8"
  },
  {
    "url": "engineering/前端工程化/模块化.html",
    "revision": "3f5a06ae9a0b4a7cfc0aae3218c2550d"
  },
  {
    "url": "engineering/前端工程化/脚手架工具.html",
    "revision": "916ee9fad63845cdfeb73932c7c0d4ed"
  },
  {
    "url": "engineering/前端工程化/自动化构建.html",
    "revision": "f866e9f816406a85abf17b65bb0ff88c"
  },
  {
    "url": "engineering/前端工程化/规范化.html",
    "revision": "d3f44a8eaa9418e47a80efadd5c8613b"
  },
  {
    "url": "engineering/工程化.png",
    "revision": "0cfd6d2b2d83e3e65759648d4e66653b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "bb9bfa184237f505cb787808245dbee2"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "51bd1bb1b4641fa44a5116d8f4c35116"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "13ff84e68146f3d9cf5c07298e8161d6"
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
    "revision": "53761e24a0d3ef2438384fc783f245d8"
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
    "revision": "7780f837cab65c17ac1c95a58ade73c5"
  },
  {
    "url": "runnnig-monitoring/性能优化/JavaSript性能优化.html",
    "revision": "79bb625915b0cde27f6526fd9d35e5a2"
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
    "revision": "0b71877a51aec4989e6775c79cc9385b"
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
    "revision": "6e93eccdb973a1c7425b4f98c3f5ad71"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "d08e437e8fb9b6e1c5ebfd5ec0bbff9f"
  },
  {
    "url": "syntax&API/ES语法/JavaScript类型系统.html",
    "revision": "e96d0a83038727758f38191355f8b420"
  },
  {
    "url": "syntax&API/ES语法/JS值类型和引用类型.html",
    "revision": "1898e2ae8a419e1df590068eaff02ce2"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "2b60965087d3ebbbee3c47e85172803b"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "5364e79ef8a55c22603858733244b003"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "73be36fd95ccd379777e4c44704d0328"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/Flow/关于Flow.html",
    "revision": "9d9c99b5a77046d48cb73a86630302cc"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "59f481fc350330d98738562bdc6c7934"
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
    "revision": "665ed10d9b8005411463179e586bf241"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "308231cdd8f8eaf5694e84e725265bee"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "ab4d542f6094a4ba8da3bd7ae1a7ff98"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "2e57932280e2773d3dcacfb13bd33011"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "7ebabdb538ff886ff1a761544219f614"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "d48ae82624309f0b722e306e29029e5b"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "8d7f396fe01e1cb8313651421f700723"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "60a6c09d5f3c4cdd199ee6447f52636c"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "f0c2c08d5aefd2904ba4406d97958812"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "c04402449e94cab1013ac78bad982355"
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
    "revision": "229adea9a17f64c9fae2765d8ffaffba"
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
