// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/utils/index.js
function documentToHash(drive) {
  return Object.keys(drive.operations).map((key) => `${key}:${drive.operations[key].length}:${drive.operations[key].at(-1)?.hash}`).join(":");
}
function drivesToHash(drives) {
  return drives.map(documentToHash).join("&");
}

export {
  documentToHash,
  drivesToHash
};
