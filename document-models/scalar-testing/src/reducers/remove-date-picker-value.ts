/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingRemoveDatePickerValueOperations } from "../../gen/remove-date-picker-value/operations";

export const reducer: ScalarTestingRemoveDatePickerValueOperations = {
  removeDatePickerValueOperation(state, action, dispatch) {
    state.date = state.date.filter(
      (datePicker) => datePicker.id !== action.input.id,
    );
  },
};
