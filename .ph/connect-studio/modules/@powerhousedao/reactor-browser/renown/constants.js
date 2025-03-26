import "../chunk-2ESYSVXG.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/renown/constants.js
var RENOWN_URL = "https://auth.renown.id";
var RENOWN_NETWORK_ID = "eip155";
var RENOWN_CHAIN_ID = "1";
var DOMAIN_TYPE = [
  { name: "name", type: "string" },
  { name: "version", type: "string" },
  { name: "chainId", type: "uint256" },
  { name: "verifyingContract", type: "address" }
];
var VERIFIABLE_CREDENTIAL_EIP712_TYPE = [
  { name: "@context", type: "string[]" },
  { name: "type", type: "string[]" },
  { name: "id", type: "string" },
  { name: "issuer", type: "Issuer" },
  { name: "credentialSubject", type: "CredentialSubject" },
  { name: "credentialSchema", type: "CredentialSchema" },
  { name: "issuanceDate", type: "string" },
  { name: "expirationDate", type: "string" }
];
var CREDENTIAL_SCHEMA_EIP712_TYPE = [
  { name: "id", type: "string" },
  { name: "type", type: "string" }
];
var CREDENTIAL_SUBJECT_TYPE = [
  { name: "app", type: "string" },
  { name: "id", type: "string" },
  { name: "name", type: "string" }
];
var ISSUER_TYPE = [
  { name: "id", type: "string" },
  { name: "ethereumAddress", type: "string" }
];
var CREDENTIAL_TYPES = {
  EIP712Domain: DOMAIN_TYPE,
  VerifiableCredential: VERIFIABLE_CREDENTIAL_EIP712_TYPE,
  CredentialSchema: CREDENTIAL_SCHEMA_EIP712_TYPE,
  CredentialSubject: CREDENTIAL_SUBJECT_TYPE,
  Issuer: ISSUER_TYPE
};
export {
  CREDENTIAL_SCHEMA_EIP712_TYPE,
  CREDENTIAL_SUBJECT_TYPE,
  CREDENTIAL_TYPES,
  DOMAIN_TYPE,
  ISSUER_TYPE,
  RENOWN_CHAIN_ID,
  RENOWN_NETWORK_ID,
  RENOWN_URL,
  VERIFIABLE_CREDENTIAL_EIP712_TYPE
};
