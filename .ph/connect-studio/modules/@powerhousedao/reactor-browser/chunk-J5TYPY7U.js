// ../../packages/reactor-browser/dist/src/hooks/useDocument.js
import { useCallback, useEffect, useState } from "react";
function useDocument(reactor, documentMeta = {}) {
  const { documentId, documentType, driveId } = documentMeta;
  const [document, setDocument] = useState();
  const onStrandUpdate = useCallback((cb) => {
    if (!reactor) {
      throw new Error("Reactor is not loaded");
    }
    return reactor.on("strandUpdate", cb);
  }, [reactor]);
  useEffect(() => {
    if (!reactor)
      return;
    if (!driveId || !documentId || !documentType)
      return;
    reactor.getDocument(driveId, documentId).then(setDocument).catch(console.error);
  }, [driveId, documentId, documentType, reactor]);
  useEffect(() => {
    if (!reactor)
      return;
    if (!driveId || !documentId || !documentType)
      return;
    const removeListener = onStrandUpdate((strand) => {
      if (strand.driveId === driveId && strand.documentId === documentId) {
        reactor.getDocument(driveId, documentId).then(setDocument).catch(console.error);
      }
    });
    return removeListener;
  }, [onStrandUpdate, driveId, documentId, documentType]);
  return document;
}

export {
  useDocument
};
