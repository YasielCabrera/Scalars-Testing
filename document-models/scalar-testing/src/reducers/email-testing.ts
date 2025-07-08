/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import type { ScalarTestingEmailTestingOperations } from "../../gen/email-testing/operations.js";

export const reducer: ScalarTestingEmailTestingOperations = {
  addEmailOperation(state, action, dispatch) {
    if (!Array.isArray(state.emails)) {
      state.emails = [];
    }
    
    state.emails.push({
      id: action.input.id,
      email: action.input.email ?? null,
    });
    
  },
  removeEmailOperation(state, action, dispatch) {
    if (!Array.isArray(state.emails)) {
      state.emails = [];
    }

    state.emails = state.emails.filter(
      (email) => email.id !== action.input.id,
    );
  },
};
