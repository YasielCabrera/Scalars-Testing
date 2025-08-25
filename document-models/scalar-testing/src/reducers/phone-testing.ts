/**
* This is a scaffold file meant for customization: 
* - modify it by implementing the reducer functions
* - delete the file and run the code generator again to have it reset
*/

import type { ScalarTestingPhoneTestingOperations } from '../../gen/phone-testing/operations.js';

export const reducer: ScalarTestingPhoneTestingOperations = {
  addPhoneNumberOperation(state, action, dispatch) {
    if (!Array.isArray(state.phones)) {
      state.phones = [];
    }
    
    state.phones.push({
      id: action.input.id,
      phone: action.input.phone ?? null,
    });
    
  },
  removePhoneNumberOperation(state, action, dispatch) {
    if (!Array.isArray(state.phones)) {
      state.phones = [];
    }

    state.phones = state.phones.filter(
      (phone) => phone.id !== action.input.id,
    );
  },
};
