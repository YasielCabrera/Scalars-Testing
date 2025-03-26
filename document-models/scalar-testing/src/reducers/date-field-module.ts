/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { type ScalarTestingDateFieldModuleOperations } from "../../gen/date-field-module/operations.js";
import {
  type ScalarTestingState,
  type DateFieldType,
} from "../../gen/types.js";
import { type RemoveDateAction } from "../../gen/date-field-module/actions.js";

export const reducer: ScalarTestingDateFieldModuleOperations = {
  addDateOperation(state, action, dispatch) {
    if (!Array.isArray(state.date)) {
      state.date = [];
    }
    state.date.push({
      id: action.input.id,
      date: action.input.date ?? null,
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
