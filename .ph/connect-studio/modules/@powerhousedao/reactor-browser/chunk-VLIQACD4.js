import {
  useUserPermissions
} from "./chunk-L6TVJVKC.js";
import {
  drivesToHash
} from "./chunk-DMMALARI.js";
import {
  ReadDriveNotFoundError
} from "./chunk-3M6HUUK6.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/context/read-mode.js
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var logger = {
  error: console.error
};
function checkServer(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args) {
    if (!this.server) {
      throw new Error("Read mode document drive not initialized.");
    }
    return originalMethod.apply(this, args);
  };
}
function bindClassMethods(instance) {
  const prototype = Object.getPrototypeOf(instance);
  const propertyNames = Object.getOwnPropertyNames(prototype);
  propertyNames.forEach((name) => {
    const descriptor = Object.getOwnPropertyDescriptor(prototype, name);
    if (descriptor && typeof descriptor.value === "function" && name !== "constructor") {
      instance[name] = instance[name].bind(instance);
    }
  });
}
var ReadModeContextImpl = class {
  server;
  constructor(documentDrive) {
    bindClassMethods(this);
    this.server = documentDrive;
  }
  getServer() {
    return this.server;
  }
  setDocumentDrive(documentDrive) {
    this.server = documentDrive;
  }
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  migrateReadDrive(id, options) {
    return this.server.migrateReadDrive(id, options);
  }
  addReadDrive(url, options) {
    return this.server.addReadDrive(url, options);
  }
  getReadDrives() {
    return this.server.getReadDrives();
  }
  getReadDriveBySlug(slug) {
    return this.server.getReadDriveBySlug(slug);
  }
  getReadDrive(id) {
    return this.server.getReadDrive(id);
  }
  getReadDriveContext(id) {
    return this.server.getReadDriveContext(id);
  }
  fetchDrive(id) {
    return this.server.fetchDrive(id);
  }
  fetchDocument(driveId, documentId, documentType) {
    return this.server.fetchDocument(driveId, documentId, documentType);
  }
  deleteReadDrive(id) {
    return this.server.deleteReadDrive(id);
  }
  onReadDrivesUpdate(listener) {
    return this.server.onReadDrivesUpdate(listener);
  }
};
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "migrateReadDrive", null);
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "addReadDrive", null);
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "getReadDrives", null);
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "getReadDriveBySlug", null);
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "getReadDrive", null);
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "getReadDriveContext", null);
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "fetchDrive", null);
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "fetchDocument", null);
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "deleteReadDrive", null);
__decorate([
  checkServer
], ReadModeContextImpl.prototype, "onReadDrivesUpdate", null);
var ReadModeInstance = new ReadModeContextImpl();
var ReadModeContext = createContext({
  ...ReadModeInstance,
  readDrives: []
});
async function getReadDrives(instance) {
  const driveIds = await instance.getReadDrives();
  const drives = await Promise.all(driveIds.map((id) => instance.getReadDrive(id)));
  return drives.filter((drive) => !(drive instanceof ReadDriveNotFoundError));
}
var ReadModeContextProvider = (props) => {
  const { reactorPromise, ...restProps } = props;
  const [readDrives, setReadDrives] = useState([]);
  const userPermissions = useUserPermissions();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    reactorPromise.then((reactor) => {
      ReadModeInstance.setDocumentDrive(reactor);
      setReady(true);
    }).catch(logger.error);
  }, [reactorPromise]);
  const readMode = userPermissions === void 0 ? void 0 : !(userPermissions.isAllowedToCreateDocuments || userPermissions.isAllowedToEditDocuments);
  useMemo(() => {
    if (!ready || readMode === void 0) {
      return;
    }
    const accessLevel = readMode ? "READ" : "WRITE";
    const server = ReadModeInstance.getServer();
    if (server && typeof server.setAllDefaultDrivesAccessLevel === "function") {
      server.setAllDefaultDrivesAccessLevel(accessLevel).catch(logger.error);
    }
  }, [readMode, ready]);
  useEffect(() => {
    if (!ready) {
      return;
    }
    getReadDrives(ReadModeInstance).then((drives) => setReadDrives(drives)).catch(logger.error);
    const unsubscribe = ReadModeInstance.onReadDrivesUpdate((newDrives) => {
      setReadDrives((readDrives2) => readDrives2.length !== newDrives.length || drivesToHash(readDrives2) !== drivesToHash(newDrives) ? newDrives : readDrives2);
    }).catch(logger.error);
    return () => {
      unsubscribe.then((unsub) => {
        if (typeof unsub === "function") {
          unsub();
        }
      }).catch(logger.error);
    };
  }, [ready]);
  const context = useMemo(() => {
    return {
      ...ReadModeInstance,
      readDrives
    };
  }, [readDrives]);
  return _jsx(ReadModeContext.Provider, { ...restProps, value: context });
};
var useReadModeContext = () => useContext(ReadModeContext);

export {
  ReadModeContext,
  ReadModeContextProvider,
  useReadModeContext
};
