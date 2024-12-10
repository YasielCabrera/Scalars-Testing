/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingStringTestingOperations } from "../../gen/string-testing/operations";

export const reducer: ScalarTestingStringTestingOperations = {
  addStringOperation(state, action, dispatch) {
    state.strings.push(action.input);
  },
  removeStringOperation(state, action, dispatch) {
    state.strings = state.strings.filter(
      (string) => string.id !== action.input.id,
    );
  },
};
