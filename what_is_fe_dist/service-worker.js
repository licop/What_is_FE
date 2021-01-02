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
    "revision": "99f2b6a55b6746e3cee1644f2548d7b5"
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
    "url": "assets/js/11.f8d05fef.js",
    "revision": "af6858d21d8029ce3b7450ba31027d82"
  },
  {
    "url": "assets/js/12.2e394fe4.js",
    "revision": "b50c54b71bef7fa798080b6a3b1d74e5"
  },
  {
    "url": "assets/js/13.643edb99.js",
    "revision": "16cbb017fd3ee8a63445b6b0a68abb0f"
  },
  {
    "url": "assets/js/14.e4ee4a94.js",
    "revision": "6db7fe5e38cd0f4999f5951857642042"
  },
  {
    "url": "assets/js/15.498b6c13.js",
    "revision": "e43a4200de7b07db91cf8f4a02c070ea"
  },
  {
    "url": "assets/js/16.e1e700c5.js",
    "revision": "0a2315f4d7d71dd455f50a9f8683c288"
  },
  {
    "url": "assets/js/17.a2e41543.js",
    "revision": "1f4657eab4ce2796eb216f1affe6d088"
  },
  {
    "url": "assets/js/18.183c1e46.js",
    "revision": "297c4ae8596c0669c8cdfb5c9ea2f953"
  },
  {
    "url": "assets/js/19.f800523a.js",
    "revision": "496e823979c82aad1eb3d571850b8871"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.0976d31d.js",
    "revision": "4773c5a47a07bcfc70ab1b9f959df44a"
  },
  {
    "url": "assets/js/21.601eec8f.js",
    "revision": "afe066955eb8103be46c9f21f171fc3b"
  },
  {
    "url": "assets/js/22.cecf17ae.js",
    "revision": "7f2e874892bf51febfe993af1b6ffb9b"
  },
  {
    "url": "assets/js/23.0a0d000d.js",
    "revision": "ac42e816e3bef2d86b6fbb688a697dcd"
  },
  {
    "url": "assets/js/24.0065b7ea.js",
    "revision": "4a8671df5981b8066cab0b70cce393d3"
  },
  {
    "url": "assets/js/25.152383af.js",
    "revision": "c1370ec78efe165e1e32b4206a650a45"
  },
  {
    "url": "assets/js/26.567b7348.js",
    "revision": "b536bdc1cfbf9dec1a8bffb0e1d5998e"
  },
  {
    "url": "assets/js/27.c63f44c3.js",
    "revision": "c24189dbf66ab6d5993aaf52e24b899b"
  },
  {
    "url": "assets/js/28.d25a87a1.js",
    "revision": "3070f9dd3c0482da018aee9a3802abdb"
  },
  {
    "url": "assets/js/29.1490d492.js",
    "revision": "b957c021c0caf55534fc79ca6574dce8"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.d67ecf28.js",
    "revision": "e96b520492160c5bc124d192f39445b3"
  },
  {
    "url": "assets/js/31.e51c6f9b.js",
    "revision": "938ec10487edd7d39f8695a7e9f65036"
  },
  {
    "url": "assets/js/32.7628cdb5.js",
    "revision": "f6ca754c51c1935b81406d4e7700bb08"
  },
  {
    "url": "assets/js/33.f4262311.js",
    "revision": "4c459025960bc7f9de1a968efccb6de4"
  },
  {
    "url": "assets/js/34.a7bc1202.js",
    "revision": "81da1fa1471757ceaba394f18d2a0f15"
  },
  {
    "url": "assets/js/35.36e183ce.js",
    "revision": "b64a3753c6fc7da71ca1a0e138bb0569"
  },
  {
    "url": "assets/js/36.ef928242.js",
    "revision": "e09990b85728b520965cac5d838a96f0"
  },
  {
    "url": "assets/js/37.90254413.js",
    "revision": "320e86f248dce38b2e31fd73d0d5afb0"
  },
  {
    "url": "assets/js/38.f3da67f4.js",
    "revision": "2bebff69bfdcd58326f9b5ccd23edc9d"
  },
  {
    "url": "assets/js/39.d5e2539e.js",
    "revision": "a144a826d4bc86aad3df6d2929663dfd"
  },
  {
    "url": "assets/js/4.10499883.js",
    "revision": "32f684766fb41343bea3275275914167"
  },
  {
    "url": "assets/js/40.74dd4ef1.js",
    "revision": "fc3c97063da114dd398dbbe50b168f5d"
  },
  {
    "url": "assets/js/41.bfa30afe.js",
    "revision": "0155aaa0feca8bb2e1ecc9a302f4f327"
  },
  {
    "url": "assets/js/42.9a21c370.js",
    "revision": "386a7d4d14516f1d021f347ec01307e5"
  },
  {
    "url": "assets/js/43.56a97505.js",
    "revision": "967084ddcf23b4ab25531d2a19f2ec59"
  },
  {
    "url": "assets/js/44.8afd2798.js",
    "revision": "2a599590c557bfa736cc00ce6fd87696"
  },
  {
    "url": "assets/js/45.174c8c12.js",
    "revision": "8b7a9ab70f6b825d9d0b7c6c51359d7f"
  },
  {
    "url": "assets/js/5.a6acc31c.js",
    "revision": "c42fbad2f6a3f06f951f364206344eb8"
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
    "url": "assets/js/9.a7cd1dae.js",
    "revision": "66e3686a964428c5cc92433bf9a14bce"
  },
  {
    "url": "assets/js/app.6122172a.js",
    "revision": "24a926a36478a8c6b35d321194f5bc9f"
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
    "revision": "c30f6899230ffd0bc51093fa02a238c8"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "8fe83ec41a64af5cd5b267d3a0797c09"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "7d4a213a171d9d91ee4209e7834e1311"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "528c0d4bc044410fc557a9ddf087a31f"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "5ca081e1f9255a5f257c5e2e3f5403b0"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "67be0ea8d0d71f78c6d52efb8a2f4a77"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "4bd6b90287f6ee2e755bc30fa251fe96"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "7c608513de42cb267dd83c9894330ff8"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "4cbeb963feefebe88b501aa7b938a740"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "d2f982dc4f54af57531a08d84388f02e"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "d1d8684cd0cd6e1f6daec0a53e380d56"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "08fbe52a8bc50a2ac38903ac5577b809"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "1b74d71fdfda351b81b619526869224a"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "64f9e99971dfbdd4397a125c1d301f2f"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "7e03b34251a51d5f68098e75bb37cb6f"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "65fb37e01c1ef796aa03f42c0b052dd0"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "f39ee5e4afce0e0cf746bd09c47421c7"
  },
  {
    "url": "framework/React/index.html",
    "revision": "cdd04a46fc8225a6a97d09ee8d8ff238"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "7db41e692d4667cd7aefa3753e843560"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "e8dc33f7dacaa13512b362a8043b18c0"
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
    "revision": "dc47463497e7ad65cc706e077ae7865e"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "1b544e27b7d9ebbc36c7357525d5abcf"
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
    "revision": "d9c9ec537e4d44016503d19f84da8abb"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "2850b224fd87578a3603196bc64ca09a"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "de4be684ce1eabdc81d5e08d0300c54b"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "6f29e86c1565af516dc73646921b069a"
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
    "url": "syntax&API/Typescript/advance.html",
    "revision": "b46ac3ea4db7c5fa04cddbd60909bb4b"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "ae82b091e89ccc8e12e1a7d8fae939b8"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "ba3ee59c50f72925b0b50d28ceb2c6c6"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "8d75435641789911d0a3ab139a678d39"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "1296d8d6b3165a34878c14e690c8f247"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "ed19bbc4f8ad7e2c2c12d5f6410830cd"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "539cbfe98b1deb45510d208afeb9ec09"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "95f812173292b3ffe54b3941bb6aecc5"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "a0b3908b02b65491e5cbc64ef0ebb10f"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "af41c91a9b75049cf32c581694e089e4"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "968c83c066f80af76170a1fd32016e68"
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
