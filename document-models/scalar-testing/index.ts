/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import { actions as ScalarTestingActions, ScalarTesting } from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  ScalarTestingState,
  ScalarTestingAction,
  ScalarTestingLocalState,
} from "./gen/types";

const Document = ScalarTesting;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...ScalarTestingActions };

export const module: DocumentModel<
  ScalarTestingState,
  ScalarTestingAction,
  ScalarTestingLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export { ScalarTesting, Document, reducer, actions, utils, documentModel };

export * from "./gen/types";
export * from "./src/utils";
