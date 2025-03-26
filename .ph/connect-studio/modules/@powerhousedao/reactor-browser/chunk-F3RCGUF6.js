import {
  addActionContext,
  signOperation
} from "./chunk-IQTSFTNF.js";
import {
  useAddDebouncedOperations
} from "./chunk-45DCPCA7.js";
import {
  useConnectCrypto,
  useConnectDid
} from "./chunk-G6LMXRY5.js";
import {
  useDocumentDispatch
} from "./chunk-GDP7BUIH.js";

// ../../packages/reactor-browser/dist/src/hooks/useDocumentEditor.js
function useDocumentEditorProps(reactor, props) {
  const { nodeId, driveId, documentModelModule, document: initialDocument, user, connectDid, sign } = props;
  const addDebouncedOprations = useAddDebouncedOperations(reactor, {
    driveId,
    documentId: nodeId
  });
  const [document, _dispatch, error] = useDocumentDispatch(documentModelModule.reducer, initialDocument);
  function dispatch(action, onErrorCallback) {
    const callback = (operation, state) => {
      const { prevState } = state;
      signOperation(operation, sign, nodeId, prevState, documentModelModule.reducer, user).then((op) => {
        return addDebouncedOprations(op);
      }).catch(console.error);
    };
    _dispatch(addActionContext(action, connectDid, user), callback, onErrorCallback);
  }
  return {
    dispatch,
    document,
    error
  };
}
function useDocumentEditor(reactor, props) {
  const connectDid = useConnectDid();
  const { sign } = useConnectCrypto();
  const documentEditorDispatch = useDocumentEditorProps(reactor, {
    ...props,
    connectDid,
    sign
  });
  return documentEditorDispatch;
}

export {
  useDocumentEditorProps,
  useDocumentEditor
};
