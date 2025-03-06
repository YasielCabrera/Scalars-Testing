/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingDateFieldModuleOperations } from "../../gen/date-field-module/operations";
import { ScalarTestingState, DateFieldType } from "../../gen/types";
import { RemoveDateAction } from "../../gen/date-field-module/actions";

export const reducer: ScalarTestingDateFieldModuleOperations = {
  addDateOperation(state, action, dispatch) {
    if (!Array.isArray(state.date)) {
      state.date = [];
    }
    state.date.push({
      id: action.input.id,
      date: action.input.date,
    });
  },
  removeDateOperation(
    state: ScalarTestingState,
    action: RemoveDateAction,
    dispatch,
  ) {
    if (Array.isArray(state.date)) {
      state.date = state.date.filter(
        (date: DateFieldType) => date.id !== action.input.id,
      );
    }
  },
};
