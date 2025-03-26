import {
  createZip
} from "./chunk-HGGVAPQY.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/utils/export-document.js
var exportDocument = async (document, name, extension) => {
  const zip = createZip(document);
  const ext = extension ? `.${extension.replace(/^\./, "")}` : "";
  try {
    const blob = await zip.generateAsync({ type: "blob" });
    const link = window.document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    link.download = `${name || document.name || "Untitled"}${ext}.zip`;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  } catch (error) {
    console.error(error);
  }
};

export {
  exportDocument
};
