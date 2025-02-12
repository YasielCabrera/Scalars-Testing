/* eslint-disable react/jsx-max-depth */
import { EditorProps } from "document-model/document";
import {
  ScalarTestingState,
  ScalarTestingAction,
  ScalarTestingLocalState,
  actions,
  AddBooleanInput,
  AddStringInput,
  AddUrlInput,
  AddNumberInput,
  AddEnumInput,
  AddCountryInput,
  AddCurrencyInput,
  AddDatePickerValueInput,
  AddPhidInput,
} from "../../document-models/scalar-testing";
import { State } from "./components/state";
import { BooleanForm } from "./components/forms/boolean-form";
import { useCallback } from "react";
import { Accordion } from "./components/accordion";
import { StringForm } from "./components/forms/string-form";
import { URLForm } from "./components/forms/url-form";
import { NumberForm } from "./components/forms/number-form";
import { PlaygroundForm } from "./components/forms/playground-form";
import { EnumForm } from "./components/forms/enum-form";
import { CountryForm } from "./components/forms/country-form";
import { CurrencyForm } from "./components/forms/currency-form";
import { AmountForm } from "./components/forms/amount-form";
import { DatePickerForm } from "./components/forms/date-picker-form";
import { PhidForm } from "./components/forms/phid-form";

export type IProps = EditorProps<
  ScalarTestingState,
  ScalarTestingAction,
  ScalarTestingLocalState
>;

export default function Editor({ dispatch, document }: IProps) {
  const state = document.state.global;
  // generate a random id
  // const id = documentModelUtils.hashKey();

  const onAddBoolean = useCallback((data: AddBooleanInput) => {
    dispatch(actions.addBoolean(data));
  }, []);

  const onAddString = useCallback((data: AddStringInput) => {
    dispatch(actions.addString(data));
  }, []);

  const onAddUrl = useCallback((data: AddUrlInput) => {
    dispatch(actions.addUrl(data));
  }, []);

  const onAddNumber = useCallback((data: AddNumberInput) => {
    dispatch(actions.addNumber(data));
  }, []);

  const onAddEnum = useCallback((data: AddEnumInput) => {
    dispatch(actions.addEnum(data));
  }, []);

  const onAddCountry = useCallback((data: AddCountryInput) => {
    dispatch(actions.addCountry(data));
  }, []);

  const onAddCurrency = useCallback((data: AddCurrencyInput) => {
    dispatch(actions.addCurrency(data));
  }, []);

  const onAddDate = useCallback((data: AddDatePickerValueInput) => {
    dispatch(actions.addDatePickerValue(data));
  }, []);

  const onAddPhid = useCallback((data: AddPhidInput) => {
    dispatch(actions.addPhid(data));
  }, []);

  return (
    <div>
      <State state={state} />

      <div className="space-y-4">
        <Accordion
          className="w-full space-y-2"
          collapsible
          defaultValue="playground"
          type="single"
        >
          <PlaygroundForm />
          <AmountForm
            amountMoneyState={state.amountMoney}
            amountPercentageState={state.amountPercentage}
            amountTokensState={state.amountTokens}
          />
          <BooleanForm
            booleansState={state.booleans}
            onAddBoolean={onAddBoolean}
          />
          <StringForm onAddString={onAddString} stringsState={state.strings} />
          <NumberForm numbersState={state.numbers} onAddNumber={onAddNumber} />
          <URLForm onAddUrl={onAddUrl} urlsState={state.urls} />
          <EnumForm enumsState={state.enums} onAddEnum={onAddEnum} />
          <CountryForm
            countriesState={state.countries}
            onAddCountry={onAddCountry}
          />
          <CurrencyForm
            currenciesState={state.currency}
            onAddCurrency={onAddCurrency}
          />
          <DatePickerForm dateState={state.date} onAddDate={onAddDate} />
          <PhidForm onAddPhid={onAddPhid} phidsState={state.phids} />
        </Accordion>
      </div>
    </div>
  );
}
