const CACHE='pwa-v1';
const FILES=[
'./',
'index.html',
'manifest.webmanifest',
'image1.jpg',
'image2.jpg',
'image3.png'
];

self.addEventListener('install',e=>{
e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener('fetch',e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
);
});
