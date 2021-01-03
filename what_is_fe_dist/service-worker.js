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
    "revision": "37c189518c5a459eb51c21b5e171ff1f"
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
    "url": "assets/js/12.5b161d54.js",
    "revision": "ae034c58cf0a3902da27cfcdcd939c90"
  },
  {
    "url": "assets/js/13.a983f7f5.js",
    "revision": "72c22d54a40303766772e0d848f234d7"
  },
  {
    "url": "assets/js/14.e4ee4a94.js",
    "revision": "6db7fe5e38cd0f4999f5951857642042"
  },
  {
    "url": "assets/js/15.755954c5.js",
    "revision": "e5e204f25c1395514c22381439df1b57"
  },
  {
    "url": "assets/js/16.4c707614.js",
    "revision": "f4aa40421f899c9defb92998e3fdd3e2"
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
    "url": "assets/js/20.21c71b16.js",
    "revision": "5b57c0105263e9cf980cf809d128ca99"
  },
  {
    "url": "assets/js/21.601eec8f.js",
    "revision": "afe066955eb8103be46c9f21f171fc3b"
  },
  {
    "url": "assets/js/22.9c3a8913.js",
    "revision": "a03692eebdaecdef70ada65f873789ae"
  },
  {
    "url": "assets/js/23.67a5a87c.js",
    "revision": "35b8a7228b96fd11413df610a554ccf0"
  },
  {
    "url": "assets/js/24.51962652.js",
    "revision": "8e9ca9fd4107a1a6f2d7483ea58b997d"
  },
  {
    "url": "assets/js/25.9fa20b61.js",
    "revision": "05451c48d87651ff1a7db38ae2f563f4"
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
    "url": "assets/js/29.15100ca0.js",
    "revision": "8820e491d3e7420071890609ce716529"
  },
  {
    "url": "assets/js/3.b304fdc1.js",
    "revision": "16f5a21d2e6a3f21751092662b538933"
  },
  {
    "url": "assets/js/30.8093a860.js",
    "revision": "b8d241d15ff177415239a11915f8bc0c"
  },
  {
    "url": "assets/js/31.a7e01fd5.js",
    "revision": "632a0e450567628e7157210822ba0fc5"
  },
  {
    "url": "assets/js/32.aee96e8e.js",
    "revision": "a9dd821f3112a71d24d28042e38e0904"
  },
  {
    "url": "assets/js/33.9703a837.js",
    "revision": "801a125ea7415304fe0b3ecb7edcd0e7"
  },
  {
    "url": "assets/js/34.b8ef3ac0.js",
    "revision": "e75b8c910b47a824cd7aa860a3ff142c"
  },
  {
    "url": "assets/js/35.6e28ba39.js",
    "revision": "b28386c70417aa4f1a3975c1be2be2cc"
  },
  {
    "url": "assets/js/36.7b0f4a1b.js",
    "revision": "0b24dedd739ec2bb5bb6f1d8174442ae"
  },
  {
    "url": "assets/js/37.7c660609.js",
    "revision": "dbbe90d47ada337d655d69479efcfc3f"
  },
  {
    "url": "assets/js/38.38733b20.js",
    "revision": "d9ce3948f893adb0f5e6041d96a4f37c"
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
    "url": "assets/js/40.1a50d3c7.js",
    "revision": "3af669d339d2f25041549997819fc3ee"
  },
  {
    "url": "assets/js/41.859efa20.js",
    "revision": "670f429bff7e4defa44cbe6ed2f631b9"
  },
  {
    "url": "assets/js/42.d8bed5b1.js",
    "revision": "9e6748dec34bf7a3e2af3dc7971c0c28"
  },
  {
    "url": "assets/js/43.69153b8b.js",
    "revision": "cec3475ed19aff7f0d3acffd9d9483bb"
  },
  {
    "url": "assets/js/44.7200d2be.js",
    "revision": "a22a5f4811a290d33f7e9db7ed0f8a58"
  },
  {
    "url": "assets/js/45.51496fd6.js",
    "revision": "6675084390f08bd0e1bd2e5f78b44711"
  },
  {
    "url": "assets/js/46.439e5c82.js",
    "revision": "bd331104d4f94c8cf5072c4f9941f645"
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
    "url": "assets/js/app.2c10249a.js",
    "revision": "34469388bbd59683034d1250c10751d9"
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
    "revision": "cfe1bdc73f2ff869105641f29e2230fd"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "4088bd9551b14027184a5665eb006bb1"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "97e98880660aae7cbce2263bfce1b2f5"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "17bd63965a4e9bb173452ca317899480"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "933bc845a412714a8cf35be639832044"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "a4b77a4a0951f39927b5cada3064aeb8"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "12bd9dffcbaa42d72453fadc28140d73"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "758c1bb492297e97574379f0ae3f073e"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "502d1d56f59461cc6f36eafbd6a7311c"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "3170f81281c09a84572231c72a793b61"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "a2166b8586924e64329811c94dca131c"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "f8863a067a7e8b24b413be93007c684f"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "9f6ec08b9a779ec86420c540c1c34913"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "d74fdb2419562d13d010f1221ac3311a"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "2a19241e7865048e5e255fe2642ad377"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "2604664c99616b75a77fe59d12382a60"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "a9662642edfe73cecce9a14e36bcc71e"
  },
  {
    "url": "framework/React/index.html",
    "revision": "7ce8591ae89d06ae758b9b9931a6c238"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "8cf1f23770cd4834312385b70b4245bd"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "1801518c65c06278ebb9a8f7df6551f1"
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
    "revision": "61c7392686f117f8e360951fd8eb581f"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "430c5e4f8b0f2f6199c59e4673a3e863"
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
    "revision": "c0e6ae7aa5dec0cefe00a0a8eab81902"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "f6035edbcad534b9295cc87de0db26ef"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "d53968f163d03ae87957914cce96493e"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "16bac5f6ca3cfe0c5edd269b4ddf86f6"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "018a2b1e9b4d21e9b7578f0cd5f44389"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "979d0594f137ac10c77a506fdc1939b6"
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
    "revision": "ca185d50a5220f16d84064d7daf380dc"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "ed2a045a9e5869985adb16a5b71cd437"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "791b9aeba79ffec8972ec38d61adfa7e"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "b1689a01c3cb682e9338eab66515769b"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "71a67d3c7a40955441f6451020215996"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "b454f15e80d68730ca3a83c259407ec7"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "ccfc9a06c8f77bb1590d5daabed2852e"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "1fb26d9674cfbca5fc165f68e89c52d7"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "134301045ea8e9284b2cd7dbeea6e20f"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "9280e85559e10c711aca8b2de0676b45"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "e0595cee8b0a410d444dc6b9e9a662d9"
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
