/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingBooleanTestingOperations } from "../../gen/boolean-testing/operations";

export const reducer: ScalarTestingBooleanTestingOperations = {
  addBooleanOperation(state, action, dispatch) {
    state.booleans.push(action.input);
  },
  removeBooleanOperation(state, action, dispatch) {
    state.booleans = state.booleans.filter(
      (boolean) => boolean.id !== action.input.id,
    );
  },
};
