// Simple Service Worker
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