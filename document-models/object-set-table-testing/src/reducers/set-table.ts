/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import type { ObjectSetTableTestingSetTableOperations } from "../../gen/set-table/operations.js";

export const reducer: ObjectSetTableTestingSetTableOperations = {
  addAccountOperation(state, action, dispatch) {
    const account = action.input;
    const newAccount = {
      id: crypto.randomUUID(),
      name: account.name ?? null,
      account: account.account ?? null,
      budgetPath: account.budgetPath ?? null,
      type: account.type ?? "Protocol",
    };

    state.accounts.push(newAccount);
  },

  removeAccountOperation(state, action, dispatch) {
    state.accounts = state.accounts.filter(
      (account) => account.id !== action.input.id,
    );
  },

  updateAccountOperation(state, action, dispatch) {
    const accountIndex = state.accounts.findIndex(
      (account) => account.id === action.input.id,
    );
    
    if (accountIndex !== -1) {
      const existingAccount = state.accounts[accountIndex];
      state.accounts[accountIndex] = {
        ...existingAccount,
        name: action.input.name ?? existingAccount.name,
        account: action.input.account ?? existingAccount.account,
        budgetPath: action.input.budgetPath ?? existingAccount.budgetPath,
        type: action.input.type ?? existingAccount.type,
      };
    }
  },
};
