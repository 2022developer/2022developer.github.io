'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7ae4adefc3608c57ce1500074971d754",
"assets/assets/2LW.png": "7583fa152d57c09a95c73763da39e1f5",
"assets/assets/3Lw.png": "f6aced2169721688abdbe2b6f49fc8eb",
"assets/assets/4LW.png": "77638718cdd799657ec107512b6dc5df",
"assets/assets/board.png": "e8aea15f6bf9bc6c7dfaf7fb1d038a2c",
"assets/assets/bowl.png": "33d93a9d69ce8fc53b4e73ceba899544",
"assets/assets/bowl_full.png": "764644070701bfd6c9d865c434181154",
"assets/assets/click.mp3": "4de0e0d6dbc65ff7ee001a8346012ece",
"assets/assets/ele.gif": "93423301bc3be5d178e5d85c52b45fcd",
"assets/assets/ele.mp4": "6e00334970587351222a8df46f1a3c1b",
"assets/assets/Ele.png": "6b04a7db4c5fb2961e874c4e030a6955",
"assets/assets/ele1.png": "8996ec18b25719f919034d2cf3420b2f",
"assets/assets/ele2.png": "d7ce968024154a9b943fdf5837c08e28",
"assets/assets/elesmall.png": "242e25215019f1220fb8b3bf46bde82d",
"assets/assets/Ele_Parents.png": "fa342f4ace24c35fe799f7f314acc0d8",
"assets/assets/f.png": "f7ad1d5639b8594b533397036a1999a0",
"assets/assets/fruitbowl1.png": "b5897a6609d2f9f3f3bec9968218a495",
"assets/assets/newele2.gif": "4229de497082dac2c4f9225d87f81204",
"assets/assets/newrosie.gif": "2f3b2bfee5e0cf1f1febbdd34f93ea69",
"assets/assets/newrosieface.gif": "55d0e58da2e6525385c57d3aabf83017",
"assets/assets/payment.png": "bf797adccfae958b7d18dbf1fd0fb0f0",
"assets/assets/phonics3.png": "8ddc31365918b38496007815b92c1d7c",
"assets/assets/Phonic_Practice.png": "00f879dff6b616005d585fab89a1b217",
"assets/assets/playstore.png": "9187cecf485724442f0526fbbb52ae7e",
"assets/assets/practice.png": "6cc8f08b44165cac0b7968418db47e3d",
"assets/assets/P_Sounds.png": "07c2f5ca657ab6bc95308acc2dce2933",
"assets/assets/R.gif": "e9dacf3b1feee65f31e52af80854c7b6",
"assets/assets/read3.png": "8006d056ecf2992e3ae147c0fe15bc7e",
"assets/assets/read4.png": "316279e0bf0b188a049d07c1165f67fc",
"assets/assets/reading.png": "f5474d24a3b8d4377bd7f458e073b289",
"assets/assets/reading2.png": "cf720dba44465143d83cb631f99e1666",
"assets/assets/rosieface.gif": "2690871695b8ae2073cbc872730e7a14",
"assets/assets/S.gif": "3ab16309386b83c0e5ca992f7110a80c",
"assets/assets/Sanjukta2.jpg": "69f69d56d938bf0f5abf1247446e1687",
"assets/assets/speackingbk.png": "ab09107aaa2a33611acbb04ce52265b4",
"assets/assets/speakingbk.png": "28d25e0795d845f8870992575a603f38",
"assets/assets/spelling.png": "ca147047e25bc21065ed3978d77f8985",
"assets/assets/tomato.png": "0630246bfa1179c7760c9e8131114cd4",
"assets/assets/tomato_greyed.png": "477a3458f118652cf73ba52b9d3e5e85",
"assets/assets/T_ele.png": "f19b96fa373f97538ccfefcce1e1f8cc",
"assets/assets/Vegbowl1.png": "9db460677c06472d2a976ddd6d0e7e08",
"assets/assets/video.png": "b4abe39c4c1bc46cb82a5c3db84430ea",
"assets/assets/WebsiteIntro.mp4": "4e9d98b0eae78cdef1da0402fc2dc317",
"assets/assets/welcome.mp3": "9d2f6a209d1d4732305ccb51599b73fe",
"assets/assets/welcome.wav": "57f4c076fed38705f041c5c79f8db5cb",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d79c2e82da519ee75b7dd78420d6bf32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"favicon.ico": "9232540b6a38d8faf6d9e2af380e8123",
"firebase-config.js": "97cb735f562062c97297d1ff11b6fb08",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "926862fdb31fef21b7e034946c1d5f3b",
"/": "926862fdb31fef21b7e034946c1d5f3b",
"main.dart.js": "fd43127fca4aa3d7170ab4cfb8d55e07",
"manifest.json": "9e3ca606aea05ee646b8995e02aa4f13",
"privatepolicy.html": "79aeabdff6870746dadb6bd05d660ac5",
"rp.html": "f9f75e37d14283b11bd26a212f2adbb2",
"tnc.html": "2e95dda586c57e5fb1cb8a8d21327d7e",
"version.json": "443dbc5ffba38a91ab8452382a5cbab5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
