import {
  useDocumentDrives
} from "./chunk-M2UUQ5LH.js";
import {
  useUserPermissions
} from "./chunk-OVGOA2P5.js";

// ../../packages/reactor-browser/dist/src/hooks/useAddDebouncedOperations.js
import { useCallback, useEffect, useMemo, useRef } from "react";
function debounceOperations(callback, timeout = 50) {
  let timer;
  const operations = [];
  return (operation) => {
    if (timer) {
      clearTimeout(timer);
    }
    const index = operations.findIndex((op) => op.scope === operation.scope && op.index === operation.index);
    if (index > -1) {
      const oldOperation = operations[index];
      if (!(oldOperation.type === operation.type && JSON.stringify(operation.input) === JSON.stringify(oldOperation.input))) {
        console.warn("Two conflicting operations were dispatched:", oldOperation, operation);
      }
      operations[index] = operation;
    } else {
      operations.push(operation);
    }
    return new Promise((resolve, reject) => {
      timer = setTimeout(() => {
        callback(operations).then(resolve).catch(reject);
      }, timeout);
    });
  };
}
function useAddDebouncedOperations(reactor, props) {
  const { driveId, documentId } = props;
  const [documentDrives] = useDocumentDrives(reactor);
  const documentDrivesRef = useRef(documentDrives);
  const { isAllowedToEditDocuments } = useUserPermissions() || {
    isAllowedToCreateDocuments: false,
    isAllowedToEditDocuments: false
  };
  useEffect(() => {
    documentDrivesRef.current = documentDrives;
  }, [documentDrives]);
  const addOperations = useCallback(async (driveId2, id, operations) => {
    if (!isAllowedToEditDocuments) {
      throw new Error("User is not allowed to edit documents");
    }
    if (!reactor) {
      throw new Error("Reactor is not loaded");
    }
    const drive = documentDrivesRef.current.find((drive2) => drive2.state.global.id === driveId2);
    if (!drive) {
      throw new Error(`Drive with id ${driveId2} not found`);
    }
    const newDocument = await reactor.queueOperations(driveId2, id, operations);
    return newDocument.document;
  }, [isAllowedToEditDocuments, reactor]);
  const addDebouncedOperations = useMemo(() => {
    return debounceOperations((operations) => addOperations(driveId, documentId, operations));
  }, [addOperations, driveId, documentId]);
  return addDebouncedOperations;
}

export {
  useAddDebouncedOperations
};
