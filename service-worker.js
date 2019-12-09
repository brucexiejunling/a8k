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
    "revision": "c9c3ff06f06c398777a51d0f016307ab"
  },
  {
    "url": "assets/css/0.styles.71da1afd.css",
    "revision": "11070af6bf98c4f7cfe2cb05246293d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a81056ce.js",
    "revision": "5fde2a71299a713dafd77edf0b911db6"
  },
  {
    "url": "assets/js/2.bedf9002.js",
    "revision": "271a675dac968ae4993a4b8327188fc9"
  },
  {
    "url": "assets/js/3.039fc162.js",
    "revision": "e835a0030cef378d501dee2566653373"
  },
  {
    "url": "assets/js/4.aa54ef99.js",
    "revision": "4610dd51de3bfbaeaaf68c2b424ca200"
  },
  {
    "url": "assets/js/5.b3597586.js",
    "revision": "4cb57eb5136e5704ed782ad8dba78263"
  },
  {
    "url": "assets/js/6.cc5fb890.js",
    "revision": "000a5adc2b9f84a238eb525f6e36bb6c"
  },
  {
    "url": "assets/js/7.7f62012e.js",
    "revision": "c1b09c6fa37ad27a1facb42decf26a9a"
  },
  {
    "url": "assets/js/8.667f1166.js",
    "revision": "4f4dcfc8a8c1b80e9b4049fe1df52605"
  },
  {
    "url": "assets/js/9.63be5a5e.js",
    "revision": "ba7f01e412f7c40284575e998718258b"
  },
  {
    "url": "assets/js/app.57d326e9.js",
    "revision": "04d2c95ed7628d4e214135fd30877168"
  },
  {
    "url": "config/index.html",
    "revision": "7e412044a7d8d6690e2b1fa670c5c0b2"
  },
  {
    "url": "dev/index.html",
    "revision": "fb69b816425626f7153f7bd649f97a65"
  },
  {
    "url": "guide/index.html",
    "revision": "f7b9de7e9dcfbbf387a69df6505fb63b"
  },
  {
    "url": "index.html",
    "revision": "597acd11c49372e3f947568ef2aaa159"
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
