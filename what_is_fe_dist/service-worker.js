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
    "revision": "2f0d218fcdff528748daa8aa3b53dd20"
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
    "url": "assets/js/11.460b07fa.js",
    "revision": "4abbee4549ec810191a3e2d146146a3a"
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
    "url": "assets/js/16.44f92758.js",
    "revision": "5682976876f52f0d86b2ac90b3a778ca"
  },
  {
    "url": "assets/js/17.883eaf2e.js",
    "revision": "c7ee5f7a0b1843854b8db7999b740d08"
  },
  {
    "url": "assets/js/18.5bec50da.js",
    "revision": "148fb578d240c14400f8f512ec0e96f2"
  },
  {
    "url": "assets/js/19.84b1db3f.js",
    "revision": "0e65d93b211325953735846c75471c64"
  },
  {
    "url": "assets/js/2.5e2d37c1.js",
    "revision": "e66523ddc87cfab8832bc07364907808"
  },
  {
    "url": "assets/js/20.42a60e79.js",
    "revision": "70c1ceeb3804c140c353d038dbe9b12d"
  },
  {
    "url": "assets/js/21.a4baa608.js",
    "revision": "483b3f9059e05b69cd2af507d1f7b7f5"
  },
  {
    "url": "assets/js/22.348aba77.js",
    "revision": "6a4a0d58556557ab847b27eecb38a13a"
  },
  {
    "url": "assets/js/23.57d56c79.js",
    "revision": "1d97b1c30bc3fbeb124139c44fcadf8b"
  },
  {
    "url": "assets/js/24.f4b52303.js",
    "revision": "ec65e422b141a1ab6578313fd7bd668c"
  },
  {
    "url": "assets/js/3.be30d3f9.js",
    "revision": "f2181aeb3cc5506530a6b3a8da1d47b1"
  },
  {
    "url": "assets/js/4.156e29b7.js",
    "revision": "24a73da1e5ba0c637444fc28d16eb571"
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
    "url": "assets/js/8.0971b919.js",
    "revision": "c349db93fc47dff06862302d1a203c06"
  },
  {
    "url": "assets/js/9.bca781e2.js",
    "revision": "647986575b35f2cde0bc2617d3abb465"
  },
  {
    "url": "assets/js/app.bcf46949.js",
    "revision": "c4e250c2d1e58159facc87387def24ba"
  },
  {
    "url": "cicd.png",
    "revision": "4160b0f7fb525d22551b052521aa2234"
  },
  {
    "url": "development-process/CI-CD/CI-CD以及travis的使用.html",
    "revision": "648d4db5d57d8ee4afaa88c444cc2f4a"
  },
  {
    "url": "development-process/Git/git命令.html",
    "revision": "b136bb7d334630ab9fa840a4208ddf3e"
  },
  {
    "url": "development-process/Git/使用omyzsh git插件的别名.html",
    "revision": "e6b6ae72b98a02cd4045e9151b7aeb39"
  },
  {
    "url": "development-process/Linux/linux 常用命令.html",
    "revision": "423a8701655f4f06b92247e01d3adda1"
  },
  {
    "url": "development-process/mock/在线 mock server.html",
    "revision": "999573befc87124b6d257d375ed5c910"
  },
  {
    "url": "development-process/NPM/关于 package.json.html",
    "revision": "77a54ad794d3cd64aee65f88965dea6c"
  },
  {
    "url": "development-process/NPM/关于npx.html",
    "revision": "07492cb6400b81374027a50cdcbc022e"
  },
  {
    "url": "development-process/单元测试/jest/jest.html",
    "revision": "e17395f8c99502bb967f8dd0fdd82e0f"
  },
  {
    "url": "development-process/技术基建/如何搭建一个UI组件库.html",
    "revision": "704c076b377ad35b644f67105b17fb6f"
  },
  {
    "url": "development-process/文档/storybook.html",
    "revision": "adb8fd0616c09d8ab74e390ccca0b12b"
  },
  {
    "url": "framework/React/index.html",
    "revision": "c61b3ff9f77023404a339d991236f167"
  },
  {
    "url": "framework/React/关于react-hook.html",
    "revision": "9b451227387b670ab5f4db67dd507044"
  },
  {
    "url": "git_flow.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "index.html",
    "revision": "de432bf356be53e45b1fe3d00087d9ed"
  },
  {
    "url": "runnnig-monitoring/浏览器和 webview.html",
    "revision": "06a3627d36ac9a0443078339df3164dc"
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
    "revision": "804c76f1371918f036254977afd88c32"
  },
  {
    "url": "syntax&API/HTML/关于HTML.html",
    "revision": "1ec1669dbdbba1c5ed917d3d82adc395"
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
