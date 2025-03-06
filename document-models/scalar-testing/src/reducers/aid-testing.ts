/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingAidTestingOperations } from "../../gen/aid-testing/operations";

export const reducer: ScalarTestingAidTestingOperations = {
  addAidOperation(state, action, dispatch) {
    state.aids.push({
      ...action.input,
      aid: action.input.aid ?? "",
    });
  },
  removeAidOperation(state, action, dispatch) {
    state.aids = state.aids.filter((aid) => aid.id !== action.input.id);
  },
};
