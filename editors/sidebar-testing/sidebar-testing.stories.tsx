import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as SidebarTestingModule from "../../../document-models/sidebar-testing";

const { meta, CreateDocumentStory: SidebarTesting } = createDocumentStory(
  Editor,
  SidebarTestingModule.reducer,
  SidebarTestingModule.utils.createDocument(),
);
export { SidebarTesting };

export default { ...meta, title: "Sidebar Testing" };
