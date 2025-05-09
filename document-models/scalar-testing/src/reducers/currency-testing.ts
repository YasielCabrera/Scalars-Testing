/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { type ScalarTestingCurrencyTestingOperations } from "../../gen/currency-testing/operations.js";

export const reducer: ScalarTestingCurrencyTestingOperations = {
  addCurrencyOperation(state, action, dispatch) {
    if (!Array.isArray(state.currency)) {
      state.currency = [];
    }
    state.currency.push({
      id: action.input.id,
      currency: action.input.currency ?? null,
    });
  },
  removeCurrencyOperation(state, action, dispatch) {
    state.currency = state.currency.filter(
      (currency) => currency.id !== action.input.id,
    );
  },
};
