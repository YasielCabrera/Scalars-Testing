/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { type AddAmountCryptoAction } from "document-models/scalar-testing/gen/actions.js";
import { type ScalarTestingAmountTestingOperations } from "../../gen/amount-testing/operations.js";
import { type AmountCryptoFieldType, type AmountCurrencyFieldType, type AmountFiatFieldType, type AmountFieldType, type ScalarTestingState } from "../../gen/types.js";

export const reducer: ScalarTestingAmountTestingOperations = {
  addAmountOperation(state, action, dispatch) {
    if (!Array.isArray(state.amount)) {
      state.amount = [];
    }
    
    const newAmount: AmountFieldType = {
      id: action.input.id,
      value:action.input.value ?? null
    }
    state.amount.push(newAmount);
  
  },

  addAmountPercentageOperation(state, action, dispatch) {
    if (!Array.isArray(state.amountPercentage)) {
      state.amountPercentage = [];
    }
    
    state.amountPercentage.push({
      id: action.input.id,
      value: action.input.value ?? null,
    });
    
    console.log("AmountPercentage added:", action.input, "value is null:", action.input.value === null);
  },

  addAmountFiatOperation(state, action, dispatch) {
    if (!Array.isArray(state.amountFiat)) {
      state.amountFiat = [];
    }
    
    
    const newAmountFiat: AmountFiatFieldType = {
      id: action.input.id,
      value: action.input.value ?? null
    }
    state.amountFiat.push(newAmountFiat);
    
    console.log("AmountFiat added:", action.input, "value is null:", action.input.value === null);
  },

  addAmountCryptoOperation(state: ScalarTestingState, action: AddAmountCryptoAction, dispatch) {
    if (!Array.isArray(state.amountCrypto)) {
      state.amountCrypto = [];
    }
    
    const newAmountCrypto: AmountCryptoFieldType = {
      id: action.input.id,
      value: action.input.value ?? null
    }
    state.amountCrypto.push(newAmountCrypto);
    
    console.log("AmountCrypto added:", action.input, "value is null:", action.input.value === null);
  },
  
  addAmountCurrencyOperation(state, action, dispatch) {
    if (!Array.isArray(state.amountCurrency)) {
      state.amountCurrency = [];
    }
    
    const newAmountCurrency: AmountCurrencyFieldType = {
      id: action.input.id,
      value: action.input.value ?? null
    }
    state.amountCurrency.push(newAmountCurrency);
    
    console.log("AmountCurrency added:", action.input, "value is null:", action.input.value === null);
  },

  removeAmountOperation(state, action, dispatch) {
    state.amount = state.amount.filter((amount) => amount.id !== action.input.id);
  },

  removePercentOperation(state, action, dispatch) {
    state.amountPercentage = state.amountPercentage.filter((amount) => amount.id !== action.input.id);
  },

  removeAmountFiatOperation(state, action, dispatch) {
    state.amountFiat = state.amountFiat.filter((amount) => amount.id !== action.input.id);
  },
  
  removeAmountCryptoOperation(state, action, dispatch) {
    state.amountCrypto = state.amountCrypto.filter((amount) => amount.id !== action.input.id);
  },
  
  removeAmountCurrencyOperation(state, action, dispatch) {
    state.amountCurrency = state.amountCurrency.filter((amount) => amount.id !== action.input.id);
  },
};
