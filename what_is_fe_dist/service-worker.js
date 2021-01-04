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
    "revision": "28c062ed55d461593fcebbbe03592d03"
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
    "url": "assets/js/10.db74f721.js",
    "revision": "3837e88fca46081aa86856d5c30e75a9"
  },
  {
    "url": "assets/js/11.460b07fa.js",
    "revision": "4abbee4549ec810191a3e2d146146a3a"
  },
  {
    "url": "assets/js/12.b66bac79.js",
    "revision": "a0cb2a4a14be2f3eee4de28ae1ac3268"
  },
  {
    "url": "assets/js/13.71550ff6.js",
    "revision": "fb3c17423dc36e7a70bdbc027ff43278"
  },
  {
    "url": "assets/js/14.2c18f271.js",
    "revision": "7ff136f8acc61da1c4f59976a11fbb45"
  },
  {
    "url": "assets/js/15.ce645e31.js",
    "revision": "e292f03183376cc8c5c91e7046a2fdda"
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
    "url": "assets/js/18.183c1e46.js",
    "revision": "297c4ae8596c0669c8cdfb5c9ea2f953"
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
    "url": "assets/js/20.e927c48f.js",
    "revision": "cd1b3b46e5df2349fff2c938e3dca61f"
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
    "url": "assets/js/25.d352497d.js",
    "revision": "8229e7ec4e9f8eeff21a983c380c8f48"
  },
  {
    "url": "assets/js/26.80eb9e8d.js",
    "revision": "941e07bc829abe7d45af38c1959619f4"
  },
  {
    "url": "assets/js/27.e0219f21.js",
    "revision": "c5d32c26f399fbd03be5c63735336d2f"
  },
  {
    "url": "assets/js/28.8e1d1e61.js",
    "revision": "30cc97b36e6afa3c6e04536d0cac6878"
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
    "url": "assets/js/30.77a0119c.js",
    "revision": "31f489071636fda728003a1b233df23c"
  },
  {
    "url": "assets/js/31.e88410f1.js",
    "revision": "e0073cc4f1356962d0644735c34c4a1b"
  },
  {
    "url": "assets/js/32.07f13f0f.js",
    "revision": "77bad7172a68f72a46a22acd318050b3"
  },
  {
    "url": "assets/js/33.08e3a91d.js",
    "revision": "415c679a17746ef8838b03b80d0d40ba"
  },
  {
    "url": "assets/js/34.dc93563a.js",
    "revision": "aa8b1d270453bf4acbf18540754ad95c"
  },
  {
    "url": "assets/js/35.f7ff264a.js",
    "revision": "f7b27639c91fe89e8591520b2fd904dd"
  },
  {
    "url": "assets/js/36.3e65cde2.js",
    "revision": "b2890105e19a1b4662dfbef245b94edf"
  },
  {
    "url": "assets/js/37.d9474735.js",
    "revision": "7cc38d2680d3181edbfe6ecda1dbcb8a"
  },
  {
    "url": "assets/js/38.f7f99342.js",
    "revision": "931c9204be959aa403988b6576e1236d"
  },
  {
    "url": "assets/js/39.4cd0bf04.js",
    "revision": "5b81456c9b3de9f8af43feb08ac8e065"
  },
  {
    "url": "assets/js/4.93cdfc6e.js",
    "revision": "550f0b4eab232c8e13e51227451f8891"
  },
  {
    "url": "assets/js/40.e39b0d88.js",
    "revision": "e95b70adcf30d6e17962135c8e35e95c"
  },
  {
    "url": "assets/js/41.11208eae.js",
    "revision": "f7d3070716ae6b5bc4dcb239e2cea53f"
  },
  {
    "url": "assets/js/42.666951a0.js",
    "revision": "e402bbec6db62703f83f6e450316eb1e"
  },
  {
    "url": "assets/js/43.bbeb4b2a.js",
    "revision": "df8883a6bade753a4fc440726f60ace5"
  },
  {
    "url": "assets/js/44.4fa99f24.js",
    "revision": "d3dc5b2a14c2dab4441384496f62e1d5"
  },
  {
    "url": "assets/js/45.b5d59b26.js",
    "revision": "59f61004da550600cfd25018b118dca2"
  },
  {
    "url": "assets/js/46.25cdda01.js",
    "revision": "2da1f339802423f1b653371482984ed1"
  },
  {
    "url": "assets/js/47.3096a6d1.js",
    "revision": "759987751726e9bbd1003b1f2299b120"
  },
  {
    "url": "assets/js/48.b5d990db.js",
    "revision": "887c8035d67eb6e9bdf4d3bac722178e"
  },
  {
    "url": "assets/js/5.6681de7a.js",
    "revision": "59f791ba4736484e2088b3db53f2dba1"
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
    "url": "assets/js/8.4f4bb732.js",
    "revision": "3fbb109983bf06017c1d0b957840f09f"
  },
  {
    "url": "assets/js/9.bca781e2.js",
    "revision": "647986575b35f2cde0bc2617d3abb465"
  },
  {
    "url": "assets/js/app.a0c5832b.js",
    "revision": "c957ff7c6fc2c1631c6574f5c020507b"
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
    "revision": "48a76815311d48c76852112ef0b52797"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "0274a17d45c6962f1a97267095f15702"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "204e193aac803dafe8a0c96fd2bb6cf5"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "e6c145334030b22c9e3a3146a0223c1d"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "a4d3e322e96a0506d4e711b5676ebde3"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "4b18bebf358bd1738020c5ac35668a82"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "6f800b4c6dec22564bbea510cebe4135"
  },
  {
    "url": "development-process/单元测试/Jest.html",
    "revision": "21f9c7dc80c9e6de50e4f93ff083cdbf"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "cd11332e033c959523123e78ceeeb91a"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "da1f42f062e2977cbd4785242e4f8b76"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "9ad6be7a18db31058cdd5960b881a9fb"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "d68b368434432bb40e665979ccf65710"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "830777a511c95c8c1daf64468d14f4b9"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "6fefa273bdb5aff9473072de5d309c1a"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "5f9ce99e4e5a7ca33875ca9bf4938255"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "5506925c068e22719eec4e052af62754"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "95868679355ee2603992399f75a3628b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "5f1e3904a81312b3c7f99b4652d1d55d"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "81383ebae31706f40a7e46d0cf717cfe"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "68ce8766debc64162d088244ca89a5ce"
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
    "revision": "17274c03cda0330cfca61a2816652f31"
  },
  {
    "url": "runnnig-monitoring/安全/CSRF.html",
    "revision": "d0d87925d7626cc279769d54ed373ab9"
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
    "revision": "850847423982bcc66454f4e31620730f"
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
    "revision": "7548810591493203f95ae27f072206b1"
  },
  {
    "url": "syntax&API/ES语法/Javascript异步编程.html",
    "revision": "43c8d3ba4dbb2017adedae2290e78c50"
  },
  {
    "url": "syntax&API/ES语法/Promise.all()有哪些具体应用.html",
    "revision": "b653da613ae583ebbfebdbb15c030177"
  },
  {
    "url": "syntax&API/ES语法/Promise.race()有哪些具体应用.html",
    "revision": "e3c36a57c8367f9a1df96e51da40fb91"
  },
  {
    "url": "syntax&API/ES语法/promise源码实现.html",
    "revision": "ec8338b0ce731082b2c3e9eaeaed6ba0"
  },
  {
    "url": "syntax&API/event-loop.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "06d2f0779841d2bad76a899d9c54aeaf"
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
    "revision": "e9efaab9e3f48025bb2f0d47b14c5e22"
  },
  {
    "url": "syntax&API/Typescript/class.html",
    "revision": "c543e9db7c1ccee2b1fd09ced52d383e"
  },
  {
    "url": "syntax&API/Typescript/declare.html",
    "revision": "a569c84561634e982000fdb946612c02"
  },
  {
    "url": "syntax&API/Typescript/function.html",
    "revision": "9b8397d3ab66062b2af2bdff5851d16e"
  },
  {
    "url": "syntax&API/Typescript/generic.html",
    "revision": "d8d58f3a002ef4eabf4b8a3e6a68d0a2"
  },
  {
    "url": "syntax&API/Typescript/inference.html",
    "revision": "5f42bb396ddd96d43fc9616236fc3beb"
  },
  {
    "url": "syntax&API/Typescript/install.html",
    "revision": "ddf6aea645c93cea940b99210f4140d3"
  },
  {
    "url": "syntax&API/Typescript/interface.html",
    "revision": "a200b6ea512daf6f5986c5eb79e703a2"
  },
  {
    "url": "syntax&API/Typescript/introduction.html",
    "revision": "ef2810de9400cccd3438141ef54b9a27"
  },
  {
    "url": "syntax&API/Typescript/type.html",
    "revision": "6fe795db9e6f9c7c5e883dd0ec28061a"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "1442cdd046a3c9a9dd2104fc6b5df383"
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
