const _self = self;
const APP_VERSION = "";
const REQUIRES_HARD_REFRESH = true;
const VERSION_CACHE = "version-cache";
const VERSION_KEY = "app-version";
_self.addEventListener("install", () => {
  _self.skipWaiting().catch(console.error);
});
_self.addEventListener("activate", (event) => {
  event.waitUntil(_self.clients.claim());
  checkAppVersion(APP_VERSION, REQUIRES_HARD_REFRESH).catch(console.error);
});
function postMessage(client, message) {
  return client.postMessage(message);
}
async function checkAppVersion(version, requiresHardRefresh) {
  try {
    const cache = await caches.open(VERSION_CACHE);
    const cachedResponse = await cache.match(VERSION_KEY);
    let currentVersion = "";
    if (cachedResponse) {
      currentVersion = await cachedResponse.text();
    }
    if (currentVersion === "") {
      await cache.put(VERSION_KEY, new Response(version));
    } else if (currentVersion !== version) {
      console.log("Current version:", currentVersion);
      console.log("New version:", version);
      await cache.put(VERSION_KEY, new Response(version));
      await updateClients(version, requiresHardRefresh);
    }
  } catch (error) {
    console.error("Error checking version:", error);
  }
}
async function updateClients(version, requiresHardRefresh) {
  await _self.clients.claim();
  const clients = await _self.clients.matchAll();
  clients.forEach((client) => {
    postMessage(client, {
      type: "NEW_VERSION_AVAILABLE",
      version,
      requiresHardRefresh
    });
  });
}
