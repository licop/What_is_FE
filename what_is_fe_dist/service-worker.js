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
    "revision": "2723ac19d021e9a94e56d6575fbf8127"
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
    "url": "assets/js/12.5b161d54.js",
    "revision": "ae034c58cf0a3902da27cfcdcd939c90"
  },
  {
    "url": "assets/js/13.a983f7f5.js",
    "revision": "72c22d54a40303766772e0d848f234d7"
  },
  {
    "url": "assets/js/14.569bf26d.js",
    "revision": "0f86f947a318de42ebd841d1c4194c9d"
  },
  {
    "url": "assets/js/15.498b6c13.js",
    "revision": "e43a4200de7b07db91cf8f4a02c070ea"
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
    "url": "assets/js/18.e5317dbd.js",
    "revision": "7ea77ae3058f6d1d5ede8eb4a0118aa9"
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
    "url": "assets/js/20.0c181141.js",
    "revision": "136d0985e8aad82dfd3cd24dd4441976"
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
    "url": "assets/js/23.0a0d000d.js",
    "revision": "ac42e816e3bef2d86b6fbb688a697dcd"
  },
  {
    "url": "assets/js/24.51962652.js",
    "revision": "8e9ca9fd4107a1a6f2d7483ea58b997d"
  },
  {
    "url": "assets/js/25.d352497d.js",
    "revision": "8229e7ec4e9f8eeff21a983c380c8f48"
  },
  {
    "url": "assets/js/26.87b9b857.js",
    "revision": "c0cf21db645ca1e922bb99fe2c52b3a9"
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
    "url": "assets/js/29.dfaea0f0.js",
    "revision": "41cf14f77ef566037c2120084c7cb6da"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.9acad2fc.js",
    "revision": "06a1aa015e88e72238bd7361d81a4983"
  },
  {
    "url": "assets/js/31.a460dcd6.js",
    "revision": "e9824ca329c22648db5c7f28afd1b532"
  },
  {
    "url": "assets/js/32.50bbd07d.js",
    "revision": "fa441e4a37f238231b11456bf2dc12d9"
  },
  {
    "url": "assets/js/33.3180ba1d.js",
    "revision": "27a88a04b5be7992627fe07c6c128833"
  },
  {
    "url": "assets/js/34.3bdbeae0.js",
    "revision": "abf5f61c0e3dfbb3eedfa61b28bf36c6"
  },
  {
    "url": "assets/js/35.9c93297b.js",
    "revision": "5ae8d1bace8780719c96c873c3a45613"
  },
  {
    "url": "assets/js/36.47139617.js",
    "revision": "14761bd2fb6d841f40b45501f5addbff"
  },
  {
    "url": "assets/js/37.d7a9f3dd.js",
    "revision": "a074a4bc69413a02c78b6d10b985340e"
  },
  {
    "url": "assets/js/38.b7fb7461.js",
    "revision": "8ea9bbddf1103ba44934fe2a83a3a5fc"
  },
  {
    "url": "assets/js/39.e3fb8f23.js",
    "revision": "598c217f0302bd85c76ff412506d2c63"
  },
  {
    "url": "assets/js/4.b4d775ba.js",
    "revision": "648fb478c105b0519c436d7a59b8d5b4"
  },
  {
    "url": "assets/js/40.1f435130.js",
    "revision": "cb92dc01240aa35d89deac0dce079803"
  },
  {
    "url": "assets/js/41.6d273959.js",
    "revision": "d7a55b6c970991cfcd3fe18ce994b168"
  },
  {
    "url": "assets/js/42.a0609cc7.js",
    "revision": "53746796087ccdc47449b5374c7da830"
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
    "url": "assets/js/8.441ac9ec.js",
    "revision": "476c11a2ae8ad5760282a2cc253e3a4d"
  },
  {
    "url": "assets/js/9.a1c872e2.js",
    "revision": "6863ca35da3aa52d6626237bba227dfd"
  },
  {
    "url": "assets/js/app.ecad1f62.js",
    "revision": "61f90317d9927b4437b7ec191fe564f3"
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
    "revision": "c2e9c2a60fb080aea73ddbae32676551"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "cd34ba7ce80b6a1839586998049df82c"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "1343cd711589f614d8fb490674df65b0"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "97703aa94da932bf21e0f4fd8c30e758"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "3b60475bf952e56dfb417463e2b5f298"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "6351c58805e428586b2054b8c1f94495"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "fb2d7c6dd5a0fc2c78485147c00eb8da"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "e2112c67508ca5175ce1386ada8699aa"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "a192b5a8dd02539086c2b3630c1f42ab"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "13c31d1810f2ad03707ff0d1f613b6fd"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "26aec6478482d1901ca2984087da82b6"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "b31519f8d7ad61920d861e043bb73cbc"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "598a27404dfbec21525d23ffdc7ddf0c"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "8e5bd6d327509ed20d0871100c94b46f"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "7a41d2906b9c0064b8a62916851f131b"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "41369bdeff9fb8cd416484003b82f698"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "27bb6f3f0341596abc13f05ec91333e6"
  },
  {
    "url": "framework/React/index.html",
    "revision": "f4a986601538654f94af292b9ac62042"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "393a9acc9e7440a634371a6d5cd497eb"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "b8e4936dcad4c709fe2d01c7f582c98a"
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
    "revision": "82e82ea2c08eba3ade96dea457d14e17"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "df8fdd533bdcd33087b8c15ee3f020d0"
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
    "revision": "674b48a5bf2b7b227a1e40f0726eec28"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "bde2a1786fa18eb2aac38317017559ce"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "1e7cf76c3e5dfd125a04261484a8edf1"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "4d7bed287ccaede15a3822f96545230d"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "028cf5afe81962a10560f11120d14910"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "de183712b7fc34c3fddfe90f7dc8138d"
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
    "revision": "b01d89c382fc8f7f607e6c2dca5f6b6e"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "ed3e95978d419c90bcb4e739a4118df2"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "497038258de4e9648ffafeca3140bdb7"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "138c61b572acc777ea7ff944e27d7108"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "c749022ca2205e37904cb2a5dd038503"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "9e59a6e68c269bfb600941afa754d831"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "195ebb37ef3bd4b3170ccd02c55a147c"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "fcfdf096698705d02f920b9715956738"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "ff78ca9c0fcc27bfebc56e9aefee7692"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "c1606cec4132430252c2679f5818e70d"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "23464f1936448583ef353114a95aa7d5"
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
