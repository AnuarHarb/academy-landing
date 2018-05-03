// const staticAssets = [
//   './',
//   '/about-us.html',
//   '/scholarship.html',
//   '/programs/back-end.html',
//   '/programs/front-end.html',
//   '/programs/mobile-web.html',
//   '/programs/cloud-architect.html',
//   '/css/styles.css',
//   '/javascript/index.js',
//   '/images/cover-images/homepage__cover.jpg',
//   '/images/cover-images/slogan-shadow.png'
// ];



self.addEventListener('install', async event => {
  const cache = await caches.open('academy-static');
  cache.addAll(staticAssets);
});

// self.addEventListener('fetch', event => {
//   const req = event.request;
//   event.respondWith(cacheFirst(req));
// });
//
// async function cacheFirst(req) {
//   const cachedResponse = await caches.match(req);
//   return cachedResponse || fetch(req);
// }
