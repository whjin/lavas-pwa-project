importScripts('/static/js/workbox-sw.prod.v2.1.2.js');

const workboxSW = new workboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParameterMatching: [/^utm_/],
    skipWaiting: true,
    clientClaim: true
});

workboxSW.prechache([]);
workboxSW.router.registerNavigationRoute('/appshell');

workboxSW.router.registerRoute(new RegExp('https://query\\.yahooapis\\.com/v1/public/yql'),
    workboxSW.strategies.networkFirst());
