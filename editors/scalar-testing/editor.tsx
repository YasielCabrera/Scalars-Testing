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
  AddPhidInput,
  AddAidInput,
  AddDateInput,
  AddTimeInput,
  AddDateTimeInput,
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
import { PhidForm } from "./components/forms/phid-form";
import { AidForm } from "./components/forms/aid-form";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@powerhousedao/design-system/scalars";
import { Icon } from "@powerhousedao/design-system";
import { FormWrapper } from "./components/form-wrapper";
import { DateForm } from "./components/forms/date-form";
import { TimeForm } from "./components/forms/time-form";
import { DateTimeForm } from "./components/forms/date-time-form";

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

  const onAddPhid = useCallback((data: AddPhidInput) => {
    dispatch(actions.addPhid(data));
  }, []);

  const onAddAid = useCallback((data: AddAidInput) => {
    dispatch(actions.addAid(data));
  }, []);
  const onAddDate = useCallback((data: AddDateInput): void => {
    dispatch(actions.addDate(data));
  }, []);

  const onAddTime = useCallback((data: AddTimeInput) => {
    dispatch(actions.addTime(data));
  }, []);

  const onAddDateTime = useCallback((data: AddDateTimeInput) => {
    dispatch(actions.addDateTime(data));
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
          <PhidForm onAddPhid={onAddPhid} phidsState={state.phids} />
          <AidForm aidsState={state.aids} onAddAid={onAddAid} />
          <DateForm datesState={state.date} onAddDate={onAddDate} />
          <TimeForm onAddTime={onAddTime} timesState={state.time} />
          <DateTimeForm
            dateTimesState={state.datetime}
            onAddDateTime={onAddDateTime}
          />
          <FormWrapper title="Add Value Dropdown">
            <Dropdown>
              <DropdownTrigger className="w-[284px]">
                <Icon name="DownloadFile" />
                Export as
              </DropdownTrigger>
              <DropdownContent className="w-[284px]">
                <DropdownItem>
                  <Icon name="ExportZip" />
                  <span>Powerhouse Invoice</span>
                </DropdownItem>
                <DropdownItem>
                  <Icon name="ExportUbl" />
                  <span>UBL file</span>
                </DropdownItem>
                <DropdownItem>
                  <Icon name="ExportPdf" />
                  <span>PDF file</span>
                </DropdownItem>
              </DropdownContent>
            </Dropdown>
          </FormWrapper>
        </Accordion>
      </div>
    </div>
  );
}
