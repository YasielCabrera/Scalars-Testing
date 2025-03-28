/**
* This is a scaffold file meant for customization: 
* - modify it by implementing the reducer functions
* - delete the file and run the code generator again to have it reset
*/

import type { ScalarTestingOidTestingOperations } from '../../gen/oid-testing/operations.js';

export const reducer: ScalarTestingOidTestingOperations = {
    addOidOperation(state, action, dispatch) {
        state.oids.push({
            ...action.input,
            oid: action.input.oid ?? "",
          });
    },
    removeOidOperation(state, action, dispatch) {
        state.oids = state.oids.filter((oid) => oid.id !== action.input.id);
    },
}