// service-worker.js
// PWA Service Worker per Ordine Architetti P.P.C. Caltanissetta
// Strategia: cache solo asset statici, API sempre network-first

const CACHE_NAME = 'ordine-architetti-v1.0.0';
const OFFLINE_URL = '/offline.html';

// Asset statici da pre-cachare
const STATIC_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png'
];

// ─── INSTALL ────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Install complete');
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[SW] Install error:', err);
      })
  );
});
