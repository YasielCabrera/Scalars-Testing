import type { EditorModule } from "document-model";
import Editor from "./editor.js";
import type { ObjectSetTableTestingDocument } from "../../document-models/object-set-table-testing/index.js";

export const module: EditorModule<ObjectSetTableTestingDocument> = {
  Component: Editor,
  documentTypes: ["dspot/object-set-table-testing"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
