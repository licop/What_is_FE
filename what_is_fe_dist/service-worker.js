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
    "revision": "eb9b3e7e55c727fcc4b7ce08e1b609d6"
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
    "url": "assets/js/11.d3dd7629.js",
    "revision": "c334d38c2b525680a5f8b57006870b24"
  },
  {
    "url": "assets/js/12.4dce4d10.js",
    "revision": "eb1d8c3c2025619c1c6147f88f02f52d"
  },
  {
    "url": "assets/js/13.a983f7f5.js",
    "revision": "72c22d54a40303766772e0d848f234d7"
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
    "url": "assets/js/16.6c22c2d5.js",
    "revision": "f135b2592ade991b727d5607d6c564b6"
  },
  {
    "url": "assets/js/17.a2e41543.js",
    "revision": "1f4657eab4ce2796eb216f1affe6d088"
  },
  {
    "url": "assets/js/18.5bec50da.js",
    "revision": "148fb578d240c14400f8f512ec0e96f2"
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
    "url": "assets/js/21.601eec8f.js",
    "revision": "afe066955eb8103be46c9f21f171fc3b"
  },
  {
    "url": "assets/js/22.e6ce73ac.js",
    "revision": "80b6f38254484bbb7ab76dd59755e4b4"
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
    "url": "assets/js/25.fd7361c4.js",
    "revision": "9b64d34df46eaed32d4a434373c5ec4a"
  },
  {
    "url": "assets/js/26.17943525.js",
    "revision": "27853937fd720c3c52c7aafe1da7c8dc"
  },
  {
    "url": "assets/js/27.b1b96a12.js",
    "revision": "ed2e3ba40577657229c21ff0564e578d"
  },
  {
    "url": "assets/js/28.907100c4.js",
    "revision": "329dbbb2a39470e6b7333c4beb8df585"
  },
  {
    "url": "assets/js/29.5d48b548.js",
    "revision": "0f823b6389a6d96ef88eb2a528f803da"
  },
  {
    "url": "assets/js/3.be30d3f9.js",
    "revision": "f2181aeb3cc5506530a6b3a8da1d47b1"
  },
  {
    "url": "assets/js/30.f5d7d14c.js",
    "revision": "fa379e5bdf435e7c8c5596bcefaada82"
  },
  {
    "url": "assets/js/31.b5c12b45.js",
    "revision": "6c586148edc47d356a1ca3ed7bf36e3e"
  },
  {
    "url": "assets/js/32.ff0a4fac.js",
    "revision": "cbca7544b3ab2ece2d6623dd15f276b7"
  },
  {
    "url": "assets/js/4.291cfed9.js",
    "revision": "f40cbdb8097cc023fc0909fc01871eee"
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
    "url": "assets/js/8.b423a102.js",
    "revision": "04966b58e118abb805f0f3d0be593f62"
  },
  {
    "url": "assets/js/9.cf5a45fa.js",
    "revision": "934fa724ea266549fb547f84233e92c9"
  },
  {
    "url": "assets/js/app.f855c7bd.js",
    "revision": "4a10d3ab7837dd4e67981500208943de"
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
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "dfff6b1e4fd1699e169bd144b68849e3"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "9c9fd3f86fadc27df418c3bd0a29a1a1"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "d71fb2ea5dc964c69b3ae97f2798a597"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "4d7ad45c4fdc798579b9106cc378a539"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "9110763544e34136fcb4dfa08451c87e"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "8e6881fc0e0bfeab1d17e6d3e5660e8c"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "8b33ed926e27e20e92465d0a7b27f8a5"
  },
  {
    "url": "development-process/单元测试/jest/jest.html",
    "revision": "4d2fe26388c8d285dec5c64dd4c4732f"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "fdf211a221d3cacfdd96e30258f5fcfc"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "e8b44d4fc21d4e21754cf4785f70665f"
  },
  {
    "url": "engineering/webpack/bundler源码编写.html",
    "revision": "63f60ceb7af8608346a475744e0671d4"
  },
  {
    "url": "engineering/webpack/createReactApp wepack配置分析.html",
    "revision": "cea42b67125b7e233f4d8d576f2b821c"
  },
  {
    "url": "engineering/webpack/webpack基础学习.html",
    "revision": "f9881110735eb14f2d8f254b1d6537e1"
  },
  {
    "url": "engineering/webpack/webpack实例应用.html",
    "revision": "6f07b302a97820a4b6c1ac5599373b87"
  },
  {
    "url": "engineering/webpack/webpack性能优化.html",
    "revision": "3a0ef290d79b27ea8431882edbfd12de"
  },
  {
    "url": "engineering/webpack/webpack高级概念.html",
    "revision": "82a34c5fbdd23eadb7b528f266d381e4"
  },
  {
    "url": "engineering/webpack/编一个webapck loader和pugin.html",
    "revision": "cd7d65a40ce5bc2f2f59e9e958826e14"
  },
  {
    "url": "framework/React/index.html",
    "revision": "e1d135b1e2df1dcbbfcb9d2f6ee34af5"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "b1b2e6bd84a87253f37b14fc264d9713"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "54d5babdbdd0e8caa0b77fcd35a53032"
  },
  {
    "url": "runnnig-monitoring/浏览器和 webview.html",
    "revision": "bf16146fcdc4dc6549c327d02c3d9c0f"
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
    "revision": "167f3e918eefe372d346f382d55afbd8"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "b3cb7b8bd0e445da169ede9b4f701502"
  },
  {
    "url": "tool&plugin/cross-env/关于cross-env.html",
    "revision": "ef1900eb4d7f6d542ecd55652ca0589e"
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
