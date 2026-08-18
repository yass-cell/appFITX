/* Fuerza · service worker — cache-first con precarga completa del app shell */
const CACHE='fuerza-v8';
const ASSETS=[
  './',
  './index.html',
  './css/styles.css',
  './js/data.js',
  './js/app.js',
  './manifest.webmanifest',
  './fonts/anton-400.woff2',
  './fonts/space-grotesk-400.woff2',
  './fonts/space-grotesk-500.woff2',
  './fonts/space-grotesk-700.woff2',
  './fonts/jetbrains-mono-400.woff2',
  './fonts/jetbrains-mono-700.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('message',e=>{
  if(e.data&&e.data.type==='SKIP_WAITING')self.skipWaiting();
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  e.respondWith(
    caches.match(req,{ignoreSearch:true}).then(hit=>
      hit||fetch(req).catch(()=>{
        if(req.mode==='navigate')return caches.match('./index.html');
      })
    )
  );
});
