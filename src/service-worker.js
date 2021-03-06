/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith('/_')) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      'index.html',
      'offline.html',

      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener('fetch', (ev) => {
  // ev.request each time the webpage asks for any resource.
  //Extendable Event
  console.log(`fetch request for: ${ev.request.url}`);
  /*                  */
  // version 1 - pass thru
  // ev.respondWith(fetch(ev.request));
  /*                  */
  // version 2 - check the caches first for the file. If missing do a fetch
  // ev.respondWith(
  //   caches.match(ev.request).then((cacheRes) => {
  //     if (cacheRes == undefined) {
  //       console.log(`MISSING ${ev.request.url}`);
  //     }
  //     return cacheRes || fetch(ev.request);
  //   })
  // );
  /*                  */
  //version 3 - check cache. fetch if missing. then add response to cache
  // ev.respondWith(
  //   caches.match(ev.request).then((cacheRes) => {
  //     return (
  //       cacheRes ||
  //       fetch(ev.request).then((fetchResponse) => {
  //         let type = fetchResponse.headers.get('content-type');
  //         if (
  //           (type && type.match(/^text\/css/i)) ||
  //           ev.request.url.match(/fonts.googleapis.com/i)
  //         ) {
  //           //css to save in dynamic cache
  //           console.log(`save a CSS file ${ev.request.url}`);
  //           return caches.open(dynamicName).then((cache) => {
  //             cache.put(ev.request, fetchResponse.clone());
  //             return fetchResponse;
  //           });
  //         } else if (
  //           (type && type.match(/^font\//i)) ||
  //           ev.request.url.match(/fonts.gstatic.com/i)
  //         ) {
  //           console.log(`save a FONT file ${ev.request.url}`);
  //           return caches.open(fontName).then((cache) => {
  //             cache.put(ev.request, fetchResponse.clone());
  //             return fetchResponse;
  //           });
  //         } else if (type && type.match(/^image\//i)) {
  //           //save in image cache
  //           console.log(`save an IMAGE file ${ev.request.url}`);
  //           return caches.open(imageName).then((cache) => {
  //             cache.put(ev.request, fetchResponse.clone());
  //             return fetchResponse;
  //           });
  //         } else {
  //           //save in dynamic cache
  //           console.log(`OTHER save ${ev.request.url}`);
  //           return caches.open(dynamicName).then((cache) => {
  //             cache.put(ev.request, fetchResponse.clone());
  //             return fetchResponse;
  //           });
  //         }
  //       })
  //     );
  //   })
  // );
});
// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here.
