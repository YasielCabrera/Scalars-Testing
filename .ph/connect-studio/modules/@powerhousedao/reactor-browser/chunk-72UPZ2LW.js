import {
  atom,
  useAtom
} from "./chunk-ZDPTMJVV.js";
import {
  documentToHash
} from "./chunk-DMMALARI.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/hooks/useDocumentDrives.js
import { useMemo, useCallback } from "react";

// node_modules/.pnpm/jotai@2.12.2_@types+react@18.3.20_react@18.3.1/node_modules/jotai/esm/vanilla/utils.mjs
var RESET = Symbol(
  (import.meta.env ? import.meta.env.MODE : void 0) !== "production" ? "RESET" : ""
);
function atomFamily(initializeAtom, areEqual) {
  let shouldRemove = null;
  const atoms = /* @__PURE__ */ new Map();
  const listeners = /* @__PURE__ */ new Set();
  const createAtom = (param) => {
    let item;
    if (areEqual === void 0) {
      item = atoms.get(param);
    } else {
      for (const [key, value] of atoms) {
        if (areEqual(key, param)) {
          item = value;
          break;
        }
      }
    }
    if (item !== void 0) {
      if (shouldRemove == null ? void 0 : shouldRemove(item[1], param)) {
        createAtom.remove(param);
      } else {
        return item[0];
      }
    }
    const newAtom = initializeAtom(param);
    atoms.set(param, [newAtom, Date.now()]);
    notifyListeners("CREATE", param, newAtom);
    return newAtom;
  };
  const notifyListeners = (type, param, atom2) => {
    for (const listener of listeners) {
      listener({ type, param, atom: atom2 });
    }
  };
  createAtom.unstable_listen = (callback) => {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  };
  createAtom.getParams = () => atoms.keys();
  createAtom.remove = (param) => {
    if (areEqual === void 0) {
      if (!atoms.has(param)) return;
      const [atom2] = atoms.get(param);
      atoms.delete(param);
      notifyListeners("REMOVE", param, atom2);
    } else {
      for (const [key, [atom2]] of atoms) {
        if (areEqual(key, param)) {
          atoms.delete(key);
          notifyListeners("REMOVE", key, atom2);
          break;
        }
      }
    }
  };
  createAtom.setShouldRemove = (fn) => {
    shouldRemove = fn;
    if (!shouldRemove) return;
    for (const [key, [atom2, createdAt]] of atoms) {
      if (shouldRemove(createdAt, key)) {
        atoms.delete(key);
        notifyListeners("REMOVE", key, atom2);
      }
    }
  };
  return createAtom;
}
var isPromiseLike = (x) => typeof (x == null ? void 0 : x.then) === "function";
function createJSONStorage(getStringStorage = () => {
  try {
    return window.localStorage;
  } catch (e) {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      if (typeof window !== "undefined") {
        console.warn(e);
      }
    }
    return void 0;
  }
}, options) {
  var _a;
  let lastStr;
  let lastValue;
  const storage = {
    getItem: (key, initialValue) => {
      var _a2, _b;
      const parse = (str2) => {
        str2 = str2 || "";
        if (lastStr !== str2) {
          try {
            lastValue = JSON.parse(str2, options == null ? void 0 : options.reviver);
          } catch (e) {
            return initialValue;
          }
          lastStr = str2;
        }
        return lastValue;
      };
      const str = (_b = (_a2 = getStringStorage()) == null ? void 0 : _a2.getItem(key)) != null ? _b : null;
      if (isPromiseLike(str)) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (key, newValue) => {
      var _a2;
      return (_a2 = getStringStorage()) == null ? void 0 : _a2.setItem(
        key,
        JSON.stringify(newValue, options == null ? void 0 : options.replacer)
      );
    },
    removeItem: (key) => {
      var _a2;
      return (_a2 = getStringStorage()) == null ? void 0 : _a2.removeItem(key);
    }
  };
  const createHandleSubscribe = (subscriber2) => (key, callback, initialValue) => subscriber2(key, (v) => {
    let newValue;
    try {
      newValue = JSON.parse(v || "");
    } catch (e) {
      newValue = initialValue;
    }
    callback(newValue);
  });
  let subscriber;
  try {
    subscriber = (_a = getStringStorage()) == null ? void 0 : _a.subscribe;
  } catch (e) {
  }
  if (!subscriber && typeof window !== "undefined" && typeof window.addEventListener === "function" && window.Storage) {
    subscriber = (key, callback) => {
      if (!(getStringStorage() instanceof window.Storage)) {
        return () => {
        };
      }
      const storageEventCallback = (e) => {
        if (e.storageArea === getStringStorage() && e.key === key) {
          callback(e.newValue);
        }
      };
      window.addEventListener("storage", storageEventCallback);
      return () => {
        window.removeEventListener("storage", storageEventCallback);
      };
    };
  }
  if (subscriber) {
    storage.subscribe = createHandleSubscribe(subscriber);
  }
  return storage;
}
var defaultStorage = createJSONStorage();

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/hooks/useDocumentDrives.js
var documentDrivesAtom = atom(/* @__PURE__ */ new Map());
function drivesToHash(drives) {
  return drives.map(documentToHash).join("&");
}
var readWriteDocumentDrivesAtom = (server) => () => atom((get) => server ? get(documentDrivesAtom).get(server) ?? [] : [], (_get, set, newDrives) => {
  set(documentDrivesAtom, (map) => {
    if (!server) {
      return /* @__PURE__ */ new Map();
    }
    const currentDrives = map.get(server) ?? [];
    if (currentDrives.length !== newDrives.length || drivesToHash(currentDrives) !== drivesToHash(newDrives)) {
      return new Map(map).set(server, newDrives);
    } else {
      return map;
    }
  });
});
var documentDrivesInitializedMapAtomFamily = atomFamily(() => atom("INITIAL"));
function useDocumentDrives(reactor) {
  const [documentDrives, setDocumentDrives] = useAtom(useMemo(readWriteDocumentDrivesAtom(reactor), [reactor]));
  const refreshDocumentDrives = useCallback(async () => {
    if (!reactor) {
      return;
    }
    const documentDrives2 = [];
    try {
      const driveIds = await reactor.getDrives();
      for (const id of driveIds) {
        try {
          const drive = await reactor.getDrive(id);
          documentDrives2.push(drive);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setDocumentDrives(documentDrives2);
    }
  }, [reactor]);
  const [status, setStatus] = useAtom(documentDrivesInitializedMapAtomFamily(reactor));
  if (status === "INITIAL") {
    setStatus("LOADING");
    refreshDocumentDrives().then(() => setStatus("LOADED")).catch(() => setStatus("ERROR"));
  }
  const serverSubscribeUpdates = useCallback((clientErrorhandler) => {
    if (!reactor) {
      return;
    }
    const unsub1 = reactor.on("syncStatus", async (_event, _status, error) => {
      if (error) {
        console.error(error);
      }
      await refreshDocumentDrives();
    });
    const unsub2 = reactor.on("strandUpdate", () => refreshDocumentDrives());
    const unsubOnSyncError = reactor.on("clientStrandsError", clientErrorhandler.strandsErrorHandler);
    const unsub3 = reactor.on("defaultRemoteDrive", () => refreshDocumentDrives());
    return () => {
      unsub1();
      unsub2();
      unsubOnSyncError();
      unsub3();
    };
  }, [reactor, refreshDocumentDrives]);
  return useMemo(() => [
    documentDrives,
    refreshDocumentDrives,
    serverSubscribeUpdates,
    status
  ], [documentDrives, status]);
}

export {
  drivesToHash,
  documentDrivesInitializedMapAtomFamily,
  useDocumentDrives
};
