// Service Worker MABUNET
// Minimal SW agar PWA bisa di-install. TIDAK caching agar Firebase realtime tidak terganggu.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through: biarkan semua request berjalan normal
  // Service worker dianggap aktif karena punya fetch handler
  return;
});
