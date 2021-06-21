self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.showNotification('Some notification', {})
});

// var CACHE_NAME = 'my-site-cache-v1';
// var urlsToCache = [
//     '/',
//     '/app-data.json',
//     '/page-data.json'
//     //   '/styles/main.css',
//     //   '/script/main.js'
// ];

// self.addEventListener('install', function (event) {
//     console.log('install sw', event)

//     // Perform install steps
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(function (cache) {
//                 console.log('caching cache');
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

// self.addEventListener('fetch', function (event) {
//     console.log('fetch sw', event)

//     event.respondWith(
//         caches.match(event.request)
//             .then(function (response) {
//                 // Cache hit - return response
//                 if (response) {
//                     return response;
//                 }
//                 return fetch(event.request);
//             }));
// });

self.registration.showNotification("Hello, world!")
