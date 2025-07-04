import type { EditorProps } from "document-model";
import type {
  AddStringInput,
  AddUrlInput,
  AddNumberInput,
  AddEnumInput,
  AddCountryInput,
  AddCurrencyInput,
  AddPhidInput,
  AddAidInput,
  AddOidInput,
  AddDateInput,
  AddTimeInput,
  AddDateTimeInput,
  AddBooleanInput,
  AddAmountInput,
  AddAmountPercentageInput,
  AddAmountFiatInput,
  AddAmountCryptoInput,
  AddAmountCurrencyInput,
} from "../../document-models/scalar-testing/index.js";
import { State } from "./components/state.js";
import { BooleanForm } from "./components/forms/boolean-form.js";
import { useCallback } from "react";
import { Accordion } from "./components/accordion.js";
import { StringForm } from "./components/forms/string-form.js";
import { URLForm } from "./components/forms/url-form.js";
import { NumberForm } from "./components/forms/number-form.js";
import { PlaygroundForm } from "./components/forms/playground-form.js";
import { EnumForm } from "./components/forms/enum-form.js";
import { CountryForm } from "./components/forms/country-form.js";
import { CurrencyForm } from "./components/forms/currency-form.js";
import { AmountForm } from "./components/forms/amount-form.js";
import { PhidForm } from "./components/forms/phid-form.js";
import { AidForm } from "./components/forms/aid-form.js";
import { OidForm } from "./components/forms/oid-form.js";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@powerhousedao/document-engineering/ui";
import { Icon } from "@powerhousedao/design-system";
import { FormWrapper } from "./components/form-wrapper.js";
import { DateForm } from "./components/forms/date-form.js";
import { TimeForm } from "./components/forms/time-form.js";
import { DateTimeForm } from "./components/forms/date-time-form.js";
import '@powerhousedao/document-engineering/style.css';

import {
  type ScalarTestingDocument,
  actions,
} from "../../document-models/scalar-testing/index.js";

export type IProps = EditorProps<ScalarTestingDocument>;

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

  const onAddOid = useCallback((data: AddOidInput) => {
    dispatch(actions.addOid(data));
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

  const  onAddAmount = useCallback((data: AddAmountInput) => {
    dispatch(actions.addAmount(data));
  }, []);

  const onAddAmountPercentage = useCallback((data: AddAmountPercentageInput) => {
    
    dispatch(actions.addAmountPercentage(data));
  }, []);

  const onAddAmountFiat = useCallback((data: AddAmountFiatInput) => {

    dispatch(actions.addAmountFiat(data));
  }, []);

  const onAddAmountCrypto = useCallback((data: AddAmountCryptoInput) => {
    dispatch(actions.addAmountCrypto(data));
  }, []);

  const onAddAmountCurrency = useCallback((data: AddAmountCurrencyInput) => {
    dispatch(actions.addAmountCurrency(data));
  }, []);

  return (
    <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 50px)" }}>
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
            amountState={state.amount}
            onAddAmount={onAddAmount}
            onAddAmountPercentage={onAddAmountPercentage}
            amountPercentageState={state.amountPercentage}
            amountFiatState={state.amountFiat}
            onAddAmountFiat={onAddAmountFiat}
            amountCryptoState={state.amountCrypto}
            onAddAmountCrypto={onAddAmountCrypto}
            amountCurrencyState={state.amountCurrency}
            onAddAmountCurrency={onAddAmountCurrency}
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
          <OidForm onAddOid={onAddOid} oidsState={state.oids} />
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
