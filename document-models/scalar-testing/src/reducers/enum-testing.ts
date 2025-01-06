/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingEnumTestingOperations } from "../../gen/enum-testing/operations";

export const reducer: ScalarTestingEnumTestingOperations = {
  addEnumOperation(state, action, dispatch) {
    if (!Array.isArray(state.enums)) {
      state.enums = [];
    }
    state.enums.push({
      ...action.input,
      enum: action.input.enum ?? null,
      enumMultiple: action.input.enumMultiple ?? [],
    });
  },
  removeEnumOperation(state, action, dispatch) {
    state.enums = state.enums.filter(
      (enumItem) => enumItem.id !== action.input.id,
    );
  },
};
