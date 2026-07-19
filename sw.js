const CACHE_NAME = 'pyodide-cache-v1';
const urlsToCache = [
  'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js',
  'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.asm.js',
  'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.asm.wasm',
  'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide_py.tar',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
