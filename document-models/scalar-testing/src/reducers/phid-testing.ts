/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingPhidTestingOperations } from "../../gen/phid-testing/operations";

export const reducer: ScalarTestingPhidTestingOperations = {
  addPhidOperation(state, action, dispatch) {
    state.phids.push({
      ...action.input,
      phid: action.input.phid ?? "",
    });
  },
  removePhidOperation(state, action, dispatch) {
    state.phids = state.phids.filter((phid) => phid?.id !== action.input.id);
  },
};
