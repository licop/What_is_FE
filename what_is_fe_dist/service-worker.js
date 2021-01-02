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
    "revision": "789e6498e1862730b2d1a33551efc7d3"
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
    "url": "assets/js/14.e4ee4a94.js",
    "revision": "6db7fe5e38cd0f4999f5951857642042"
  },
  {
    "url": "assets/js/15.61d3cd46.js",
    "revision": "18f72631933fcee44ef5ffcae8a47f0f"
  },
  {
    "url": "assets/js/16.e1e700c5.js",
    "revision": "0a2315f4d7d71dd455f50a9f8683c288"
  },
  {
    "url": "assets/js/17.7bdb8b53.js",
    "revision": "5dd3d18cd5eaf800387e69df006bb0b9"
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
    "url": "assets/js/20.6e524740.js",
    "revision": "ced6336665b27dc8846ff5d5f5cbc262"
  },
  {
    "url": "assets/js/21.cdd98e73.js",
    "revision": "a7a67122ecceb0d09e2439392a4f81b4"
  },
  {
    "url": "assets/js/22.5db88245.js",
    "revision": "6d537af588061a1bfa1ad672bf51b75b"
  },
  {
    "url": "assets/js/23.0a0d000d.js",
    "revision": "ac42e816e3bef2d86b6fbb688a697dcd"
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
    "url": "assets/js/26.5611357c.js",
    "revision": "4279818c1ba85e9a191d914ae2b6779f"
  },
  {
    "url": "assets/js/27.c17b5a1d.js",
    "revision": "d46b499487633ba44c33eb09edd9bf99"
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
    "url": "assets/js/30.5c1af3cc.js",
    "revision": "b5a45a192766d407c951be2f1ab014f5"
  },
  {
    "url": "assets/js/31.e51c6f9b.js",
    "revision": "938ec10487edd7d39f8695a7e9f65036"
  },
  {
    "url": "assets/js/32.47bddd0e.js",
    "revision": "0cacb6eda8c04d703ac6a8abb28ea84e"
  },
  {
    "url": "assets/js/33.37d3e9b9.js",
    "revision": "4121dede05908dec50b887fd5db06764"
  },
  {
    "url": "assets/js/34.d0de262a.js",
    "revision": "24db43afb72060a44ed94e52c8e792ac"
  },
  {
    "url": "assets/js/35.5c428da0.js",
    "revision": "2b0c14c3c94a991631676c8243fc0ed8"
  },
  {
    "url": "assets/js/36.ef928242.js",
    "revision": "e09990b85728b520965cac5d838a96f0"
  },
  {
    "url": "assets/js/37.1e663b8b.js",
    "revision": "182554fa69b97c8b7e2d09639c1e9a17"
  },
  {
    "url": "assets/js/38.f3da67f4.js",
    "revision": "2bebff69bfdcd58326f9b5ccd23edc9d"
  },
  {
    "url": "assets/js/39.d844dc3f.js",
    "revision": "947f73c536f99f26d0882a9ff5da9a90"
  },
  {
    "url": "assets/js/4.10499883.js",
    "revision": "32f684766fb41343bea3275275914167"
  },
  {
    "url": "assets/js/40.ccaf7136.js",
    "revision": "8ee915602edbabe874c11adbfcec00f5"
  },
  {
    "url": "assets/js/41.5a41f0c1.js",
    "revision": "6034628ce649949c90aad5e9a02b51ad"
  },
  {
    "url": "assets/js/42.9a21c370.js",
    "revision": "386a7d4d14516f1d021f347ec01307e5"
  },
  {
    "url": "assets/js/43.f107ee6e.js",
    "revision": "2ef86577678ab05c4a7880260a1c622f"
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
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.2a46a431.js",
    "revision": "2a9e8a821bb23f042c205fbc83f5054a"
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
    "revision": "4698b5d6357b6ee4ac307577a8cb02e1"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "a538ddf77e18e827378ec44ee40c499c"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "88567d8e3a3b3ef728461d3238e32d27"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "6e59d6434a0ef5c6ea38d3b38c3079a4"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "b0fb0bddfe1afbbd3c29672a42b7b75f"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "648b2352bbc3e87d5893d934fa58321c"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "548c69da19535a0f76365903d19d4732"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "82b91f08d5081f75b8663ef1c8dfd8db"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "fb422d1904224a4faffe1d6d571c1666"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "5cfe728bce9a1085d8a29d1c8242250c"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "2a72f9383496e2d4474bebf0148feb53"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "dabbdbdfe488f1a9aaea8798cbdd1f64"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "5da98324ccb1286cab93de7626ea99bf"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "7f1ba5f54d93df8a95a95a2c49905fc4"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "3a8ab388a6fff0a73e87b106ec1e7ce4"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "57e04f8615abc745c8fbd983fd4084a7"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "dfcc3ff77c219e9954e6acbd6c131389"
  },
  {
    "url": "framework/React/index.html",
    "revision": "68ab741a15157c41add2a614c81e3d8d"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "4fe33074de66bce901a75a8054909ce1"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "243d1a7e2a54bea9fa44b84f3202f65f"
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
    "revision": "d380090ccb82167b24108a92e098f686"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "6369593fe241b651dc8dc41570f798c4"
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
    "revision": "83f428c650f401ebb2986998cb92a5aa"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "20beef00930ed84c35d77cdb902b595d"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "34cf84c431315f8cb60f8a6c687c8e08"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "6eaccfb7f72eb49703ab8d62e54d6dfd"
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
    "revision": "25c5a0be40fdb0beb64cd46e93954a51"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "82811eae4e705c5517c0d6757c3cb11b"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "97c99758996e81b08fca1b2e4cb68363"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "99c99ed320e4c88c7af8efb7a1f60c48"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "bcde049cd71db052cf31bfc24f792ba6"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "2c939dd11319adc516e282763080e769"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "03fad41f1c6c895369cd617c9d4cd98d"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "8e86259ade89b87f78cfac9d7b6f88dc"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "c3f87dcf71c20ad11aa345b2bc849557"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "9eba7b47597c800aa619aa5377337c64"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "c27a48c59a02786ca296b99456142cb5"
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
