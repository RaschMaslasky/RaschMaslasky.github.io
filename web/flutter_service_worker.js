'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "1624b869412aa686d678f6a9dadbcce9",
"/assets\assets\icon\ic_build.png": "08a64dd5fc71b7f362686dbcd98e7d1b",
"/assets\assets\icon\ic_clothing_store.png": "6e34b98fb9a71562a67f531dffd40624",
"/assets\assets\icon\ic_live_help.png": "a866003644526d237b61431796e2ba2e",
"/assets\assets\icon\ic_local_taxi.png": "5223eba12818e178d109d391997d41f1",
"/assets\assets\icon\ic_restaurant.png": "b39c97913033b98e647bfcc76e893320",
"/assets\assets\icon\ic_security.png": "8dbe24d4773b66a27baa99fe86e84563",
"/assets\assets\images\Hello.png": "85ec41f35edfc17e9457ec5bb684a684",
"/assets\assets\images\noImageAvailable.png": "80e9f4a14da3766deb26332ae33173f7",
"/assets\FontManifest.json": "134c605ea71fe833bb4c29e2bf302581",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\SourceSansPro-ExtraLight.ttf": "23a4c2deef3a0cc9b40b429ad7320a18",
"/assets\fonts\SourceSansPro-Light.ttf": "81cd217e4a8160a930c6d5fb8d1e8e82",
"/assets\fonts\SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"/assets\fonts\SourceSansPro-SemiBold.ttf": "83476a890be79f84e97b792c9c40d743",
"/assets\LICENSE": "b7a9eb4b2c1641c76b95db4e6897c784",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "3e245c13f7abb8e55cdc5dcf6f82e316",
"/main.dart.js": "6b08e3b87bc6f89f0a5d05f6235631b0",
"/manifest.json": "18e22eb46f84aa27547db5773e861a31"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
