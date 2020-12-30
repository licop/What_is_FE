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
    "revision": "c0d59071656cc7e00423fa2ab46a6e03"
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
    "url": "assets/js/15.6db39cda.js",
    "revision": "54a1d1e3866c4185721a01f32fbfa773"
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
    "url": "assets/js/21.d538a36e.js",
    "revision": "2e8d8cf4e7c7c3b1a2ad7dfb39b0df1a"
  },
  {
    "url": "assets/js/22.5db88245.js",
    "revision": "6d537af588061a1bfa1ad672bf51b75b"
  },
  {
    "url": "assets/js/23.a3837d19.js",
    "revision": "b6d8bb00bb180c6696b16ef9d1edb53d"
  },
  {
    "url": "assets/js/24.68f17417.js",
    "revision": "f9a9ab490dbce139cb9f2d0c4f4273d5"
  },
  {
    "url": "assets/js/25.d352497d.js",
    "revision": "8229e7ec4e9f8eeff21a983c380c8f48"
  },
  {
    "url": "assets/js/26.80eb9e8d.js",
    "revision": "941e07bc829abe7d45af38c1959619f4"
  },
  {
    "url": "assets/js/27.405f1db0.js",
    "revision": "e92bafa38cb8d4e7f859e61a4ed2ac1a"
  },
  {
    "url": "assets/js/28.aed30e4b.js",
    "revision": "99f012c2d422589868b73c6b8373a7b9"
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
    "url": "assets/js/31.8ab6c117.js",
    "revision": "cedbc123765b96ba4c6b96698f48d196"
  },
  {
    "url": "assets/js/32.a5a6de11.js",
    "revision": "19fdfcd956687d7ed6f8e4acf15db209"
  },
  {
    "url": "assets/js/33.867896ab.js",
    "revision": "c322656e22f4680ff456da849acd9410"
  },
  {
    "url": "assets/js/34.92ba4504.js",
    "revision": "bee58ba6641293f948e7b9f0cbbbc8f8"
  },
  {
    "url": "assets/js/35.45f2892f.js",
    "revision": "20f1a44117b08e17ff56709c4f0ba411"
  },
  {
    "url": "assets/js/36.4259351f.js",
    "revision": "ddbca7ff7165de084d813510a7359d9f"
  },
  {
    "url": "assets/js/37.622336d0.js",
    "revision": "d2997ce1fedae2f4203ed2759c764501"
  },
  {
    "url": "assets/js/38.a7a2e66c.js",
    "revision": "024523a9e7e81d0808afc8abf3795e14"
  },
  {
    "url": "assets/js/39.bf586f7f.js",
    "revision": "8a7aab39f4f44ff47f7d0c0f0b4c15f1"
  },
  {
    "url": "assets/js/4.41a532f3.js",
    "revision": "55091ce161f53b5d51e046caf98c638d"
  },
  {
    "url": "assets/js/40.aee45ba4.js",
    "revision": "735045639ba48e2c2458570af6f095e1"
  },
  {
    "url": "assets/js/41.33e49c75.js",
    "revision": "a4acbfd234a0bad9217ccff2caaf2a45"
  },
  {
    "url": "assets/js/42.473b30fe.js",
    "revision": "2b440d0aac2ca80088234513e57e2445"
  },
  {
    "url": "assets/js/43.f455eb18.js",
    "revision": "35bc90c998b1f57cac055d0ef618a113"
  },
  {
    "url": "assets/js/44.67855b69.js",
    "revision": "15f51731d4ad274450dd3cff71843e2e"
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
    "url": "assets/js/app.108e13be.js",
    "revision": "a0905e40057ae3b0d37c85360fd56530"
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
    "revision": "39a2ed6b7414a4fa1891d2e67a74da35"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "edb44ac36e683c2578b60a1284ade1a7"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "6bb8ac0bafa9e2a4304397462ba7455d"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "b17454506b93164c25617ded579ec6fb"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "35c24bc088737e7a3d1058fa74a52002"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "d0d7042b908651acf77751865834e473"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "c07ad914918a59e98d48d317f50ea4c6"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "83151b5f8b0c5b97e19a654eb4b6d7dc"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "5daef63b210a04316745e199cf6faf56"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "c207ad54863160c33fcf2174dbbc7834"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "7b48bd0b201bb274b11289d00dd8b7e2"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "7a6c23ce544b54eaa00e43a7446de7d3"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "c4b52e2494f32f10ae31a20603b31a0f"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "17721b62b9b5c72cf050a2c43a4d4bdf"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "e22a70751bc83b4fb7449a6999f74145"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "cf42c98b35476e15a9a8333d49616e7d"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "9f5d734970235c40e5d038e15ad944a0"
  },
  {
    "url": "framework/React/index.html",
    "revision": "e05b7095f1c8d30c7342c1d79548619e"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "22f24985ad555ac102072556a0411a16"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "a689dd53da39b2da8fd6a6fac02ff1db"
  },
  {
    "url": "programming-basics/编程模式/函数式编程.html",
    "revision": "009d15dfb498080022002080b4474053"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "9663d7ae31ef82af96517fa003aa33db"
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
    "url": "syntax&API/CSS/css单位中px和em,rem的区别.html",
    "revision": "c732fd17195e52ce94dc4a6a0c063c7a"
  },
  {
    "url": "syntax&API/ES语法/promise.html",
    "revision": "407bdc53810e4cdf8123beac55b21951"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "6525fef1ab91049aa332674e9147c614"
  },
  {
    "url": "syntax&API/Typescript/advance.html",
    "revision": "a5bcce8f7584dcdef03e2e12c2da6fa6"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "88a1e414a369e0f4fe7b60f0dcd8152c"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "2db7f9826b5867cfbc910e6d054f31c9"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "0dfe02c33754b5bae37e0ca51092c0b1"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "81f8b78cf0401fe2b1a3ea5bfb7e9734"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "37d5d9ef165a412981e5dec0d5fb062b"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "50f589ceee0aee116226103236d270cd"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "61f9066777b0e5ba10b8e27d1e71d4f0"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "8c7152912a901db254cfa9bbe51c6972"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "196e34f8b46cdfeea66b467407f422c1"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "feec929450b7fbe7629ccc84f8a9e0a0"
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
