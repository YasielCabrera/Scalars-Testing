/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingUrlTestingOperations } from "../../gen/url-testing/operations";

export const reducer: ScalarTestingUrlTestingOperations = {
  addUrlOperation(state, action, dispatch) {
    state.urls.push(action.input);
  },
  removeUrlOperation(state, action, dispatch) {
    state.urls = state.urls.filter((url) => url.id !== action.input.id);
  },
};
