import type { EditorModule } from "document-model";
import Editor from "./editor.js";
import type { ScalarTestingDocument } from "../../document-models/scalar-testing/index.js";

export const module: EditorModule<ScalarTestingDocument> = {
  Component: Editor,
  documentTypes: ["dspot/testing"],
  config: {
    id: "ScalarTesting",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
