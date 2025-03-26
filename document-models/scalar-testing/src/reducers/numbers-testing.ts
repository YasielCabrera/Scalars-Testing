/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { type ScalarTestingNumbersTestingOperations } from "../../gen/numbers-testing/operations.js";

export const reducer: ScalarTestingNumbersTestingOperations = {
  addNumberOperation(state, action, dispatch) {
    state.numbers.push({
      ...action.input,
      bigInt: action.input.bigInt ?? null,
      float: action.input.float ?? null,
      integer: action.input.integer ?? null,
    });
  },
  removeNumberOperation(state, action, dispatch) {
    state.numbers = state.numbers.filter(
      (number) => number.id !== action.input.id,
    );
  },
};
