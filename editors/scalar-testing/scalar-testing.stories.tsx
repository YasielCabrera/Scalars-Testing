import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as ScalarTestingModule from "../../document-models/scalar-testing";

const { meta, CreateDocumentStory: ScalarTesting } = createDocumentStory(
  Editor,
  ScalarTestingModule.reducer,
  ScalarTestingModule.utils.createDocument(),
);
export { ScalarTesting };

export default { ...meta, title: "Scalar Testing" };
