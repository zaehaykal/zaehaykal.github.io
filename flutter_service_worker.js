'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c9fbc8affb7f7d72fcf46e9d39ed8274",
"assets/AssetManifest.bin.json": "a541ee1c4d7c781c04386c3a4bc8abff",
"assets/AssetManifest.json": "443e2ec90561d0616adc1a15ed04fa8b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b4824422f0fb208a702ecfc7ade05493",
"assets/lib/assets/images/edit.png": "dfbac5ed4d6953a257ea04d05f9b6d75",
"assets/lib/assets/images/projek/api_1.png": "91fdadffbfad544d645b469af56bcd79",
"assets/lib/assets/images/projek/api_2.png": "e06c8acdf99e96ee42633e6e25096e24",
"assets/lib/assets/images/projek/api_3.png": "4a01ee7ea36f60eaf37ff33b8b8462f9",
"assets/lib/assets/images/projek/api_4.png": "ecc6db59353a92f0238cc0c9ae3953be",
"assets/lib/assets/images/projek/api_5.png": "a1c1d0e6dc8c17ffb101f835a4c1b06f",
"assets/lib/assets/images/projek/api_6.png": "3542cb716ae465ef76df27658807c2cc",
"assets/lib/assets/images/projek/api_db.png": "95afd1e322a50029cdf5d090659295d3",
"assets/lib/assets/images/projek/databasecoffeneutra.png": "237e26952fb90fe5959026b669c44dc9",
"assets/lib/assets/images/projek/edit.png": "dfbac5ed4d6953a257ea04d05f9b6d75",
"assets/lib/assets/images/projek/kkp_db.png": "016b060cd5fabe1b08ef58e3b3710a2f",
"assets/lib/assets/images/projek/kkp_ui1.png": "34103c1363575336eeb365495b072ce8",
"assets/lib/assets/images/projek/kkp_ui2.png": "a7e5e80ec66363effb84f4a2767beff5",
"assets/lib/assets/images/projek/kkp_ui3.png": "551c239558981aa4992eb866aac76e71",
"assets/lib/assets/images/projek/uidesign.png": "d4df4285740d65959ac2095803fb2c8d",
"assets/lib/assets/images/projek/ui_s1.png": "654324790caf137c9713ce1cb18fc171",
"assets/lib/assets/images/projek/ui_s2.png": "4b356d84348db90b586d8198c64d249d",
"assets/lib/assets/images/projek/ui_s3.png": "49740b9d688b882c22fb095b9e2c2a30",
"assets/lib/assets/images/projek/ui_s4.png": "d319424ac812bc9b3b6529a996351a13",
"assets/lib/assets/images/projek/ui_s5.png": "cc583070605f0541d918732bb77961ac",
"assets/lib/assets/images/projek/ui_s6.png": "671eb07ac2dfeed1345cee281734eb1a",
"assets/lib/assets/images/projek/ui_s7.png": "a1057701158db2f22f014018d7c47ed1",
"assets/lib/assets/images/projek/ui_s8.png": "b18f575e3cf121b3f1b0bb1151681771",
"assets/lib/assets/images/sertifikat/back_end_javascript.png": "5631ed0a71cbc2ca37d34a1bc63b3a98",
"assets/lib/assets/images/sertifikat/dasarjavascript.png": "b7a25b4f2f92a6444d6616b68d3a7ed6",
"assets/lib/assets/images/sertifikat/designgrafis.png": "d1eb5dbb6b56f9756d012505098c8e1e",
"assets/lib/assets/images/sertifikat/funda_flutter.png": "472df971b9eef3f4e024716f05c9ec8a",
"assets/lib/assets/images/sertifikat/gitandgoithub.png": "da036767b61c6145e53a3f3c424712b2",
"assets/lib/assets/images/sertifikat/pkl.png": "8c18e2310abdcdac4f1870175f31e375",
"assets/lib/assets/images/sertifikat/tech_support_funda.png": "6db1e02be89c38d225b1881efcfaac9c",
"assets/lib/assets/images/Zaehaykal.jpg": "673a77dca07c5b6445f5cde66935c3c9",
"assets/lib/assets/images/zae_potrait.jpg": "4f3879e956137b85df480a0bd51e69f5",
"assets/lib/assets/logo/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/lib/assets/logo/Gmail_Logo_64px.png": "f34e6f97c1dcb8806dc6e19598d01f14",
"assets/lib/assets/logo/icon_flutter.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/lib/assets/logo/logo_linkedin.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/NOTICES": "615d875cab7add45085dacf65cc8bd56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "331830d092bdd6e1e506b8d2be699525",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ab1900612405c25fdf6c933db12d99e",
"/": "9ab1900612405c25fdf6c933db12d99e",
"main.dart.js": "dd224059de7521255afa0167488d1c3b",
"manifest.json": "fe3efdabbab826762c914b1b0811f44f",
"version.json": "12a92ef79835b40a6093bcc932b54998"};
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
