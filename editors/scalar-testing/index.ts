import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  ScalarTestingState,
  ScalarTestingAction,
  ScalarTestingLocalState,
} from "../../document-models/scalar-testing";

export const module: ExtendedEditor<
  ScalarTestingState,
  ScalarTestingAction,
  ScalarTestingLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["dspot/testing"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
