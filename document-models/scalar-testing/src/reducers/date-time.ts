/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingDateTimeOperations } from "../../gen/date-time/operations";

export const reducer: ScalarTestingDateTimeOperations = {
  addDateTimeOperation(state, action, dispatch) {
    if (!Array.isArray(state.datetime)) {
      state.datetime = [];
    }
    state.datetime.push({
      id: action.input.id,
      datetime: action.input.datetime,
    });
  },
  removeDateTimeOperation(state, action, dispatch) {
    state.datetime = state.datetime.filter(
      (datetime) => datetime.id !== action.input.id,
    );
  },
};
