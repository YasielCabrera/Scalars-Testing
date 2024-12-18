/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { ScalarTestingCountryTestingOperations } from "../../gen/country-testing/operations";

export const reducer: ScalarTestingCountryTestingOperations = {
  addCountryOperation(state, action, dispatch) {
    state.countries.push({
      ...action.input,
      country: action.input.country,
    });
  },
  addCountriesOperation(state, action, dispatch) {
    // TODO: Implement "addCountriesOperation" reducer
    throw new Error('Reducer "addCountriesOperation" not yet implemented');
  },
  removeCountryOperation(state, action, dispatch) {
    state.countries = state.countries.filter(
      (country) => country.id !== action.input.id,
    );
  },
};
