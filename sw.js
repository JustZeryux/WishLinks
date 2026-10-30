/* WishLinks 7 service worker: caches only public static app shell.
   Never cache /rest, /auth, /storage, tokens, or account-scoped content. */
const CACHE='wishlinks-v7-static-2026-10-29';
const ASSETS=['/','/index.html','/style.css','/app.js','/data.js','/brands.js','/cloud.js','/config.js','/motion.js','/experience.js','/manifest.webmanifest','/icons/192.png','/icons/512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{await Promise.all((await caches.keys()).filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})());});
self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 const url=new URL(request.url);
 if(url.pathname.startsWith('/@')||url.pathname.startsWith('/auth')||url.pathname.startsWith('/api'))return; // public pages should be fresh
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).catch(()=>caches.match('/index.html')));return;
 }
 if(!ASSETS.includes(url.pathname))return;
 event.respondWith(fetch(request,{cache:'no-cache'}).then(async response=>{if(response.ok){const cache=await caches.open(CACHE);await cache.put(request,response.clone());}return response;}).catch(()=>caches.match(request))); // network-first avoids stale config and app updates
});
