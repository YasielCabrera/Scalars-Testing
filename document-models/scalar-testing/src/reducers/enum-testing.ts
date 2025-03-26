/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { type ScalarTestingEnumTestingOperations } from "../../gen/enum-testing/operations.js";

export const reducer: ScalarTestingEnumTestingOperations = {
  addEnumOperation(state, action, dispatch) {
    if (!Array.isArray(state.enums)) {
      state.enums = [];
    }
    const inputEnums = action.input.enumMultiple?.filter(
      (enumValue) => !!enumValue,
    ) as string[] | undefined;
    state.enums.push({
      ...action.input,
      enum: action.input.enum ?? null,
      enumMultiple: inputEnums ?? [],
    });
  },
  removeEnumOperation(state, action, dispatch) {
    state.enums = state.enums.filter(
      (enumItem) => enumItem.id !== action.input.id,
    );
  },
};
