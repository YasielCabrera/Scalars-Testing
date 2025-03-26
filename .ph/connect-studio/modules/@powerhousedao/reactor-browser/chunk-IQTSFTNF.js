import {
  buildSignedOperation
} from "./chunk-FQF4YAVC.js";

// ../../packages/reactor-browser/dist/src/utils/signature.js
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
