/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { type ScalarTestingAmountTestingOperations } from "../../gen/amount-testing/operations.js";

export const reducer: ScalarTestingAmountTestingOperations = {
  addAmountMoneyOperation(state, action, dispatch) {
    if (!Array.isArray(state.amount)) {
      state.amount = [];
    }
    state.amount.push({
      id: action.input.id,
      value: action.input.value ?? null,
    });
  },

  addAmountPercentageOperation(state, action, dispatch) {
    if (!Array.isArray(state.amountPercentage)) {
      state.amountPercentage = [];
    }
    state.amountPercentage.push({
      id: action.input.id,
      value: action.input.value ?? null,
    });
  },

  addAmountTokensOperation(state, action, dispatch) {
    if (!Array.isArray(state.amountTokens)) {
      state.amountTokens = [];
    }
    state.amountTokens.push({
      id: action.input.id,
      value: action.input.value ?? null,
    });
  },
};
