const CACHE_NAME = "greedfall-map-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./app.js"
];

// Install event: cache core files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Fetch event: serve cached files first, fallback to network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
``
