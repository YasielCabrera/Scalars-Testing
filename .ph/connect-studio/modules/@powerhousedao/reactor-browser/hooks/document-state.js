import "../chunk-2ESYSVXG.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/hooks/document-state.js
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
function useDocumentsState(args) {
  const { reactor, driveId, documentIds, options } = args;
  const [statesByDocumentId, setStatesByDocumentId] = useState({});
  const isInitialized = useRef(false);
  const isSubscribed = useRef(false);
  useEffect(() => {
    async function initialize() {
      if (isInitialized.current)
        return;
      if (!reactor || !driveId)
        return;
      isInitialized.current = true;
      const ids = documentIds ?? await reactor.getDocuments(driveId);
      const statesByDocumentId2 = {};
      for (const id of ids) {
        const document = await reactor.getDocument(driveId, id, options);
        statesByDocumentId2[id] = {
          ...document.state,
          documentType: document.documentType,
          revision: document.revision,
          created: document.created,
          lastModified: document.lastModified
        };
      }
      setStatesByDocumentId(statesByDocumentId2);
    }
    void initialize();
  }, [reactor, driveId, options]);
  useEffect(() => {
    if (!reactor || !driveId)
      return;
    if (isSubscribed.current)
      return;
    isSubscribed.current = true;
    const unsubscribe = reactor.on("strandUpdate", async (update) => {
      if (update.driveId !== driveId || documentIds && !documentIds.includes(update.documentId))
        return;
      const updatedDocument = await reactor.getDocument(driveId, update.documentId, options);
      setStatesByDocumentId((prev) => {
        const newStatesByDocumentId = { ...prev };
        newStatesByDocumentId[update.documentId] = {
          ...updatedDocument.state,
          documentType: updatedDocument.documentType,
          revision: updatedDocument.revision,
          created: updatedDocument.created,
          lastModified: updatedDocument.lastModified
        };
        return newStatesByDocumentId;
      });
    });
    return unsubscribe;
  }, [reactor, driveId, options]);
  return useMemo(() => statesByDocumentId, [statesByDocumentId]);
}
function makeDriveDocumentStatesHook(reactor) {
  const useDriveDocumentStates = useCallback((args) => {
    const { driveId, documentIds, options } = args;
    return useDocumentsState({
      reactor,
      driveId,
      documentIds,
      options
    });
  }, [reactor]);
  return useDriveDocumentStates;
}
function makeDriveDocumentStateHook(reactor) {
  const useDriveDocumentState = useCallback((args) => {
    const { driveId, documentId } = args;
    return useDocumentState({
      reactor,
      driveId,
      documentId
    });
  }, [reactor]);
  return useDriveDocumentState;
}
function useDocumentState(args) {
  const { reactor, driveId, documentId } = args;
  const state = useDocumentsState({
    reactor,
    driveId,
    documentIds: [documentId]
  });
  return useMemo(() => state[documentId], [state, documentId]);
}
export {
  makeDriveDocumentStateHook,
  makeDriveDocumentStatesHook,
  useDocumentState,
  useDocumentsState
};
