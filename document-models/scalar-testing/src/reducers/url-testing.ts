/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { act } from "react";
import { type ScalarTestingUrlTestingOperations } from "../../gen/url-testing/operations.js";

export const reducer: ScalarTestingUrlTestingOperations = {
  addUrlOperation(state, action, dispatch) {
    state.urls.push({ id: action.input.id, url: action.input.url ?? null });
  },
  removeUrlOperation(state, action, dispatch) {
    state.urls = state.urls.filter((url) => url.id !== action.input.id);
  },
};
