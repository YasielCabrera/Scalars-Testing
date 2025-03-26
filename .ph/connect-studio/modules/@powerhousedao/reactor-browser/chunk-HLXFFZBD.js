// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/crypto/browser.js
var BrowserKeyStorage = class _BrowserKeyStorage {
  static #DB_NAME = "browserKeyDB";
  static #STORE_NAME = "keyPairs";
  static #KEY = "keyPair";
  #db;
  constructor() {
    this.#db = new Promise((resolve, reject) => {
      const req = indexedDB.open(_BrowserKeyStorage.#DB_NAME, 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore(_BrowserKeyStorage.#STORE_NAME);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  async #useStore(mode = "readwrite") {
    const database = await this.#db;
    const transaction = database.transaction(_BrowserKeyStorage.#STORE_NAME, mode);
    const store = transaction.objectStore(_BrowserKeyStorage.#STORE_NAME);
    return store;
  }
  async saveKeyPair(keyPair) {
    const store = await this.#useStore();
    const request = store.put(keyPair, _BrowserKeyStorage.#KEY);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(new Error("Failed to save key pair"));
      };
    });
  }
  async loadKeyPair() {
    const store = await this.#useStore("readonly");
    const request = store.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const keyPair = request.result.length ? request.result[0] : void 0;
        resolve(keyPair);
      };
      request.onerror = () => {
        reject(new Error("Failed to load key pair"));
      };
    });
  }
};

export {
  BrowserKeyStorage
};
