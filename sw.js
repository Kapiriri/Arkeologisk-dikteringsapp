/* Fältdiktat – offlinestöd.
   Appen hämtas från nätet när det finns täckning (så att uppdateringar kommer fram direkt)
   och från telefonens cache när det saknas täckning eller nätet är för långsamt. */
const CACHE = 'faltdiktat-v5';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Typsnitt: från cache om de finns, annars nätet (sparas till nästa gång)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      try { const res = await fetch(req); c.put(req, res.clone()); return res; } catch { return new Response('', {status: 504}); }
    }));
    return;
  }
  if (url.origin !== self.location.origin) return;
  // Egna filer: nätet först (max 4 s), annars cache
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    try {
      const res = await Promise.race([fetch(req), timeout(4000)]);
      if (res && res.ok) c.put(req, res.clone());
      return res;
    } catch {
      return (await c.match(req, {ignoreSearch: true})) || (await c.match('./index.html')) || new Response('Offline', {status: 503});
    }
  })());
});
