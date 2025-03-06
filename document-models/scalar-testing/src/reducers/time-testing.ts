/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingTimeTestingOperations } from "../../gen/time-testing/operations";

export const reducer: ScalarTestingTimeTestingOperations = {
  addTimeOperation(state, action, dispatch) {
    if (!Array.isArray(state.time)) {
      state.time = [];
    }
    state.time.push({
      id: action.input.id,
      time: action.input.time,
    });
  },
  removeTimeOperation(state, action, dispatch) {
    state.time = state.time.filter((time) => time.id !== action.input.id);
  },
};
