import {
  addActionContext,
  signOperation
} from "./chunk-OFKNKU2M.js";
import {
  useAddDebouncedOperations
} from "./chunk-KLXW6UTW.js";
import {
  useConnectCrypto,
  useConnectDid
} from "./chunk-SMCOWBQO.js";
import {
  useDocumentDispatch
} from "./chunk-KQC4PYV5.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/hooks/useDocumentEditor.js
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
