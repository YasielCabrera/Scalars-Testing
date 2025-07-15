/**
* This is a scaffold file meant for customization: 
* - modify it by implementing the reducer functions
* - delete the file and run the code generator again to have it reset
*/

import type { ScalarTestingPasswordTestingOperations } from '../../gen/password-testing/operations.js';

export const reducer: ScalarTestingPasswordTestingOperations = {
  addPasswordOperation(state, action, dispatch) {
    if (!Array.isArray(state.passwords)) {
      state.passwords = [];
    }
    
    state.passwords.push({
      id: action.input.id,
      password: action.input.password ?? null,
    });
    
  },
  removePasswordOperation(state, action, dispatch) {
    if (!Array.isArray(state.passwords)) {
      state.passwords = [];
    }

    state.passwords = state.passwords.filter(
      (password) => password.id !== action.input.id,
    );
  },
};
