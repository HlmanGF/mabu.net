self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
  // Service worker sederhana agar PWA diakui oleh sistem HP/PC
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});