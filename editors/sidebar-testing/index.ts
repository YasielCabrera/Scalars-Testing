import type { EditorModule } from "document-model";
import Editor from "./editor.js";
import type { SidebarTestingDocument } from "../../document-models/sidebar-testing/index.js";

export const module: EditorModule<SidebarTestingDocument> = {
  Component: Editor,
  documentTypes: ["dspot/sidebar-testing"],
  config: {
    id: "SidebarTesting",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
