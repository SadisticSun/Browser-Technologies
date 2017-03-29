var cacheName = 'v1',
    cacheFiles = [
      './',
      './css/main.css',
      './js/bundle.js',
      './img/icon.png',
      './img/rows.png',
      './img/grid.png',
      'https://fonts.googleapis.com/css?family=Raleway:400,400i,700',
    ];


self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching files');
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {
        if (thisCacheName !== cacheName) {
          console.log('[Service Worker] Removing cached files from', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  );
});
