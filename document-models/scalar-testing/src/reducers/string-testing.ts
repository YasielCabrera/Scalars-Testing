/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { type ScalarTestingStringTestingOperations } from "../../gen/string-testing/operations.js";

export const reducer: ScalarTestingStringTestingOperations = {
  addStringOperation(state, action, dispatch) {
    state.strings.push({
      id: action.input.id,
      string: action.input.string ?? null,
    });
  },
  removeStringOperation(state, action, dispatch) {
    state.strings = state.strings.filter(
      (string) => string.id !== action.input.id,
    );
  },
};
