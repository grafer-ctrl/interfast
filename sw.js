// --- PWA Service Worker ---
const CACHE_NAME = 'interfast-v1';

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // Simple fetch handler
  event.respondWith(fetch(event.request));
});

// --- Monetag Config ---
self.options = {
  "domain": "5gvci.com",
  "zoneId": 10200889
};
self.lary = "";

// Import Monetag script
importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw');
