// Keeps the FIO Back Office working without internet.
const CACHE="fio-backoffice-v1";
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./"])).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);
  if(url.hostname.includes("fonts.g")){
    e.respondWith(caches.open(CACHE).then(async c=>{const hit=await c.match(req);if(hit)return hit;
      try{const r=await fetch(req);c.put(req,r.clone());return r}catch(err){return new Response("",{status:504})}}));
    return;
  }
  if(url.origin!==location.origin)return;
  e.respondWith(fetch(req).then(r=>{if(r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp))}return r})
    .catch(()=>caches.match(req,{ignoreSearch:true}).then(h=>h||caches.match("./"))));
});
