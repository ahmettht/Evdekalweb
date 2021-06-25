'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "54cbc59f1d4005e503a8eb0cfba55c86",
".git/config": "e535adace4078f10c2f1964df2d1eb2e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0f6ecd8832ea5130dec1cf93e8c3d4d7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21a91cc9b4208b181574416104657659",
".git/logs/refs/heads/master": "21a91cc9b4208b181574416104657659",
".git/logs/refs/remotes/origin/master": "062ae4b81d3c14d64467fa824624a0ef",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/fd377cbfc7ce5dd8c90479ea6a1b0cdecc9619": "e7f4e71dbcfe6f09cc797ac70f7a32e5",
".git/objects/26/1044afaab36d677ae37bb1b43fd4671620562f": "b056d13242585cbc887b66160d252fee",
".git/objects/3c/49807fea60a6674898283464e99f409139a99c": "fb36f08d7880190fdc6035b5a879b7cd",
".git/objects/3e/007df2df4b4afb9bd5a6c5b0f6a4bfa73b74fc": "cc3a519aa8acd27419d3a4ad8d3875b4",
".git/objects/3f/5fe3d8fc887aefe801f8bcdc02a27a7dee8bc8": "786abf2e5241472f21dc658385a1b865",
".git/objects/4d/7732d6565c37b9b174b7f02fa83ef946dead7f": "2f6eb9598d861b64fedea90a55c8d3d1",
".git/objects/6c/7ae4d8c4e61771be45b55165a72fb8a4d4765d": "fb0bc4dc4d1491055d08039aea3cc136",
".git/objects/72/957f607a33aebab57dee9093c7f84f525d57b8": "9176869697777ef3e50a99122f433890",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/8833c747096f0d6d6cf2881739cc872e481d0b": "ab96078374ed5291f0dbe37803c0aa38",
".git/objects/7f/be9963dfebd9964f148a0b34d357458a3ba9a0": "8fc36f0bd84b0d34362976b4226e880c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4dd1bf5faa0ae28b65dd143c8895a1cc69a9e4": "88d81443b20a6c281d6203332b67e2c4",
".git/objects/92/e2221bf5126d06cac1e041d3ce7b4c7d7dd9b0": "01e5f64363d44135e863837774c27c07",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/78b389a8c08699641319651816ca0540db0229": "847f340e77dc4a8a7f19716dcdd4a28b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c7/4c5e9f3bfd81e563d11f0692b0a7f036e288b3": "10d864d5545b74196e45f074d7f8c228",
".git/objects/da/52cebb64ee61121200f68d06ee8535b6301cf3": "3a4cbcff0fa23cc4db6590d1e7406b44",
".git/objects/db/b834a4dd5df2abb80d80ade8d2566bef49b90b": "242f4f308b006d7ad518da95679949a2",
".git/objects/de/fa8186a667f7316456dbd15378e4ba61693828": "905c088d80a3f2f423de48fe3873d502",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a4252db814cd2b95dc83d67f7bcc22d6f805d9": "2ad013aab6b4d902c45591040db736ca",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/master": "6d3d59d0bb6ec66c56c659f284aa5cdc",
".git/refs/remotes/origin/master": "6d3d59d0bb6ec66c56c659f284aa5cdc",
"assets/AssetManifest.json": "f24b623939f03a73f254ace2a0a1078b",
"assets/assets/animations/15400-corona-virus-sick.json": "60a7f25210c942966d4a08c3fbd8346a",
"assets/assets/animations/17756-wash-your-hands-covid-19.json": "33632befb52bdbedd6000bd607ede286",
"assets/assets/animations/17895-wear-mask.json": "27f3d59187c00c32bafc3abcdf3c971c",
"assets/assets/animations/18389-social-distancing.json": "d7e6dd52206ade816ef276e607f21263",
"assets/assets/animations/18795-coronavirus.json": "f9690d56cdce8d21b286d30fa6fea4ee",
"assets/assets/animations/20494-covid-molecules-spraying.json": "034438ec8987d3de1b4df497b721d640",
"assets/assets/fonts/Ubuntu-Regular.ttf": "2505bfbd9bde14a7829cc8c242a0d25c",
"assets/assets/images/anasayfa_resmi.jpg": "c8c05a069a7cfe134206994608654ab4",
"assets/assets/images/evde-kal.png": "de538cad382abe4d4538b86e5a2fa676",
"assets/assets/images/iletisim-foto.jpg": "a92af39406c08e2bc2e37fff32ab279e",
"assets/assets/images/keepdistance.jpg": "69c75e2bd5228cb85e1a9971654c5381",
"assets/assets/images/letstayhome.png": "a78e016c909c535ede27d22c6b967156",
"assets/assets/images/masketak.jpg": "95a9534912995c2ebaed0c665123465c",
"assets/assets/images/maske_tak.jpg": "f6de7d4b4937352f16ccf0410dbf769b",
"assets/assets/images/stayhome-savelives.jpg": "60b08d50d75ebe7aaec032658606bfc9",
"assets/FontManifest.json": "0fc1312310927d60c51f474e0e457c0e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "28714a04cdbbe72ce6b2caeec8663a3b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "667bbe984ec53b74b4e3d08eeba620d1",
"/": "667bbe984ec53b74b4e3d08eeba620d1",
"main.dart.js": "138cad825e5cd01649eb21e064695bb7",
"manifest.json": "8def72e487842862478f61a910bf58d4",
"version.json": "e470a17b482eaf2e073955a34979a380"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
