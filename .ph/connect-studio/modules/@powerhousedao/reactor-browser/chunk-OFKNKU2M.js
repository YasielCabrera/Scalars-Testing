import {
  buildSignedOperation
} from "./chunk-HGGVAPQY.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/utils/signature.js
async function signOperation(operation, sign, documentId, document, reducer, user) {
  if (!user)
    return operation;
  if (!operation.context)
    return operation;
  if (!operation.context.signer)
    return operation;
  if (!reducer) {
    console.error(`Document model '${document.documentType}' does not have a reducer`);
    return operation;
  }
  const context = {
    documentId,
    signer: operation.context.signer
  };
  const signedOperation = await buildSignedOperation(operation, reducer, document, context, sign);
  return signedOperation;
}
function addActionContext(action, connectDid, user) {
  if (!user)
    return action;
  const signer = {
    app: {
      name: "Connect",
      key: connectDid || ""
    },
    user: {
      address: user.address,
      networkId: user.networkId,
      chainId: user.chainId
    },
    signatures: []
  };
  return {
    context: { signer },
    ...action
  };
}

export {
  signOperation,
  addActionContext
};
