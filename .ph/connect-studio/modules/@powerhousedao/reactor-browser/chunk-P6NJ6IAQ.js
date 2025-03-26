// ../../packages/reactor-browser/dist/src/utils/index.js
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
