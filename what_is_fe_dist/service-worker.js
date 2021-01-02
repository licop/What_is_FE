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
    "revision": "0afb3e4f3cf1e69a766012a8a153e049"
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
    "url": "assets/js/12.2e394fe4.js",
    "revision": "b50c54b71bef7fa798080b6a3b1d74e5"
  },
  {
    "url": "assets/js/13.37443924.js",
    "revision": "ba1b917e2eb0900f768d8577bc97d388"
  },
  {
    "url": "assets/js/14.552096fd.js",
    "revision": "5ec7a591629b7b5646e43ebfb6d8259f"
  },
  {
    "url": "assets/js/15.ce645e31.js",
    "revision": "e292f03183376cc8c5c91e7046a2fdda"
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
    "url": "assets/js/19.a5ffff5c.js",
    "revision": "9aa34bd87a366963e5cce8ac86ffd37b"
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
    "url": "assets/js/23.67a5a87c.js",
    "revision": "35b8a7228b96fd11413df610a554ccf0"
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
    "url": "assets/js/26.242ff7fe.js",
    "revision": "4cf3d4be573cc05c55c5bb05ae3e2e4a"
  },
  {
    "url": "assets/js/27.e0219f21.js",
    "revision": "c5d32c26f399fbd03be5c63735336d2f"
  },
  {
    "url": "assets/js/28.d215094e.js",
    "revision": "f2fee98067fd861baba17edbe8ff6831"
  },
  {
    "url": "assets/js/29.aaf99e7d.js",
    "revision": "743a149704e4982c804cb4b6bdcd259d"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.5c1af3cc.js",
    "revision": "b5a45a192766d407c951be2f1ab014f5"
  },
  {
    "url": "assets/js/31.8a2a0cf5.js",
    "revision": "406998371f313508878b872f0ccfe114"
  },
  {
    "url": "assets/js/32.50bbd07d.js",
    "revision": "fa441e4a37f238231b11456bf2dc12d9"
  },
  {
    "url": "assets/js/33.750603c6.js",
    "revision": "2105ebb8afd39da5b6558034f157d57c"
  },
  {
    "url": "assets/js/34.e028f643.js",
    "revision": "d2791468c0fa93a71b57fe0e0a988a34"
  },
  {
    "url": "assets/js/35.6b75322a.js",
    "revision": "5c015e73fb3486fcfca27945afa19968"
  },
  {
    "url": "assets/js/36.7b0f4a1b.js",
    "revision": "0b24dedd739ec2bb5bb6f1d8174442ae"
  },
  {
    "url": "assets/js/37.9248418f.js",
    "revision": "aab1d27664a10ba1cc743f2e734eafc2"
  },
  {
    "url": "assets/js/38.b7fb7461.js",
    "revision": "8ea9bbddf1103ba44934fe2a83a3a5fc"
  },
  {
    "url": "assets/js/39.9db79e08.js",
    "revision": "e7770c44a0bc9b4dc03e090d57233e93"
  },
  {
    "url": "assets/js/4.b4d775ba.js",
    "revision": "648fb478c105b0519c436d7a59b8d5b4"
  },
  {
    "url": "assets/js/40.dab37cff.js",
    "revision": "ad648e6bc0a9609267f42b71127b2b8b"
  },
  {
    "url": "assets/js/41.e197f628.js",
    "revision": "9a2712b5010560987172852a1946e273"
  },
  {
    "url": "assets/js/42.10f2cb5f.js",
    "revision": "9171cb5bc628c5b58dbeea9c2b89207e"
  },
  {
    "url": "assets/js/43.1fd6d600.js",
    "revision": "9a5c722803058b88521f36f749aa0168"
  },
  {
    "url": "assets/js/44.1ce397a4.js",
    "revision": "d2fc0564080aac6e7ab4a1fd36cdd1e8"
  },
  {
    "url": "assets/js/45.bcd1f82f.js",
    "revision": "785d172b1437317e4b6c48866755a370"
  },
  {
    "url": "assets/js/46.b667d372.js",
    "revision": "abdfd485b927eb67def7965e99933ab8"
  },
  {
    "url": "assets/js/47.d9b18fe0.js",
    "revision": "53db32f86c30d14a35a462c987a0bd5f"
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
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.061ff8f1.js",
    "revision": "350d0065d7b56b23e344dafc1f336584"
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
    "revision": "9140abd4a5b95025ab0598c608c0ce38"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "4db051db35123e5f930a9a0359166e45"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "b06069af0ea6c12a2bbc9032c9283a0e"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "06b39e124466072d858468b1bd2170b2"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "09aeb9ea1b3cb065be1c5164e129d07d"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "554335afa77d1a717f4421587510be56"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "ec5f487d74241040f4c9e6950eb157db"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "5e4b97596ef3c6d729b10faa0f004456"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "5db852217050233427a6cf6ddaa126a3"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "e6e9c27908231c196644d2923c3ff509"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "7f4c8911a18453249511e959eb7c7752"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "4b8f498154a8f27e81a77b7a13abd438"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "d564b8c927da89e2b1488b26b2e63834"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "a8737274d9d5452d24d4f0efb0a80fab"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "fb3d11a45968abf6dd1d816c0f49b22c"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "c65ed1688eb526781a50b35e31721ab6"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "b09949961644c3c92c7826a4515676bb"
  },
  {
    "url": "framework/React/index.html",
    "revision": "efef99cd986455b188287288373799d6"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "242f4dcb2ea256930f4804178202b141"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "bd4327d6145ed3a4b91350ea4ced5898"
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
    "revision": "89398d1934955077c55ea01cbe968236"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "c57001630e660c09c8d4885d97c946d7"
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
    "revision": "df310cb38beb98ecc7e13c81055e2edc"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "813e52f676a23f2db35ed9921c3f0d01"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "68807ec1b0bb2b724d772ac74458f6f0"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "3311b3417279cc334fae0e8f099e35c3"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "305afe937de4d48f37489eedb0bd19a2"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "95d0b973facee4e731c15dca88feda77"
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
    "revision": "c370a9113b0108e3b2606c37b0679fe0"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "aeb926db51902f92f5fad64fdf1107cc"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "394e16296841ba4a4379501058992445"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "405f33fa320d7812adf758230dec2ca8"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "90b2a4a942ad1c62a59f86c768ca19f9"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "e9554751b5860de92c71176289d7391c"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "56b0096cf94d34f474e26f4cf125db70"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "2837a4244c6a77734cce44a9078ca030"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "dd4a801791153297fc547793dd159ff2"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "9eceb2d4ee3bb60c713ed04b0059d60f"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "1ad093ef91cc7973392c9c335ee6eafb"
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
