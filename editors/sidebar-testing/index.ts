import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  SidebarTestingState,
  SidebarTestingAction,
  SidebarTestingLocalState,
} from "../../../document-models/sidebar-testing";

export const module: ExtendedEditor<
  SidebarTestingState,
  SidebarTestingAction,
  SidebarTestingLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["dspot/sidebar-testing"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
