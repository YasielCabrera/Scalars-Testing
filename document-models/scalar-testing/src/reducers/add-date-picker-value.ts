/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingAddDatePickerValueOperations } from "../../gen/add-date-picker-value/operations";

export const reducer: ScalarTestingAddDatePickerValueOperations = {
  addDatePickerValueOperation(state, action, dispatch) {
    if (!Array.isArray(state.date)) {
      state.date = [];
    }
    state.date.push({
      id: action.input.id,
      value: action.input.value,
    });
  },
};
