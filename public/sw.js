self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open('sight-real-estate-v1').then((cache) => {
      console.log('Service Worker: Caching app shell');
      // In a real app, you would add JS/CSS bundles and key assets
      return cache.addAll([
        '/',
      ]);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});