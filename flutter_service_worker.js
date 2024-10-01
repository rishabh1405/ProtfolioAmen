'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4c711c346fb9cfa35a1bd6f6c680be75",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "25c2e5761293cc035b232540f64f28f6",
"/": "25c2e5761293cc035b232540f64f28f6",
"main.dart.js": "a4843963d5419b11bf471bd3edab7581",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "d5282a844180045ab9693f6733bccbe2",
"assets/NOTICES": "a001cc987c9213df47f5ea30decb61c8",
"assets/FontManifest.json": "4aed9c94721ce24947de7098fd08cb0b",
"assets/AssetManifest.bin.json": "06e5640a915c4e0f8e44f2aeabb0b087",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5ec41e5ad167a5c3be63da89f3537330",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/50euro.svg": "54643661f991b087c57a5a401ccd98b7",
"assets/assets/images/circle.svg": "d15576e7bada7bfce4f686ee670ffa5c",
"assets/assets/images/leow.png": "b5300820d6ced1ff3b99b030378f6a0c",
"assets/assets/images/digital.svg": "8fe6de449eeff18685e9ffec77677e0d",
"assets/assets/images/bgi.png": "1da80723a9472a10b8a44754bad0be95",
"assets/assets/images/Group.svg": "41c403e28b1d8e790b18d88d8de99a35",
"assets/assets/images/100euro.svg": "7552545b68f7c5a176c8dd636d48d132",
"assets/assets/images/Lines.svg": "1c876ba1fcc714eaa04e6ce2b18ca85b",
"assets/assets/images/Vector-7.svg": "0fb8f934e0024c045c7624db8ca0917a",
"assets/assets/images/Vector-6.svg": "b914b76847857ceb6fbe0df4bea74eb6",
"assets/assets/images/bg.svg": "67be11fbb3c8b00f4eca437c786aac2c",
"assets/assets/images/allImage.png": "faab0b9f3cc2ab3b80111db2e7f4b13b",
"assets/assets/images/start.svg": "9a4f3e936b3b120272010de2247f0bcb",
"assets/assets/images/Vector-8.svg": "0d40147abae53f197cdb1981d45405ca",
"assets/assets/images/diamond.svg": "29c11f7911323e596f8b6f697cf59acb",
"assets/assets/images/10euro.svg": "50166606ad47728801f54f60c9f43bbd",
"assets/assets/images/zigzac.svg": "47d101c6c3082c26b6d75f4db16f1988",
"assets/assets/images/yovven.png": "833a04f2b9f2c352b72d267038afffc4",
"assets/assets/images/location.svg": "6e405e4e17f5f430075a77735e6cfe7a",
"assets/assets/images/FrameGlobe.svg": "9f815ed92babebb57962296a1a507579",
"assets/assets/images/globe.svg": "485ecf623117d50611a5fba52025a49a",
"assets/assets/images/upArrow.svg": "7ca82c080cd90f13e89bd32d781c7f79",
"assets/assets/images/image1.png": "ec5f73cd00d59ffe4f7aeb53c24e9665",
"assets/assets/images/image2.png": "2273dc7928990b78bcca87608ebe6bb8",
"assets/assets/images/image.png": "dd4ccb6494440515e42eb6d0cc8f590c",
"assets/assets/images/image3.png": "c62cca415310a47b3c2231cf9daf05ad",
"assets/assets/db/form_data.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/fonts/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/assets/fonts/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/assets/fonts/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/fonts/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/assets/fonts/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
