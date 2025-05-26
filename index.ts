import { type Manifest } from "document-model";
import manifestJson from "./powerhouse.manifest.json" with { type: "json" };
import * as documentModelsExports from "./document-models/index.js";
import * as editorsExports from "./editors/index.js";
import "@powerhousedao/document-engineering/dist/style.css";

export const manifest: Manifest = manifestJson;
export const documentModels = Object.values(documentModelsExports);
export const editors = Object.values(editorsExports);
