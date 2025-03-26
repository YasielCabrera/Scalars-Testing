import {
  createZip
} from "./chunk-FQF4YAVC.js";

// ../../packages/reactor-browser/dist/src/utils/export-document.js
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
