import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  CurrencyCodeField,
} from "@powerhousedao/document-engineering/scalars";
import type {
  AddCurrencyInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import { useFormReset } from "../../hooks/use-form-reset.js";

interface CurrencyFormProps {
  readonly onAddCurrency: (data: AddCurrencyInput) => void;
  readonly currenciesState: ScalarTestingState["currency"];
}

export function CurrencyForm({
  onAddCurrency,
  currenciesState,
}: CurrencyFormProps) {


  const { formKey: formKeyCurrency, onSubmit: onSubmitCurrency } = useFormReset<AddCurrencyInput>({
    onSubmitCallback: onAddCurrency,
    resetOnSuccessfulSubmit: true,
    formId: 'currency'
  });

  return (
    <FormWrapper title="Add Currency">
      <State state={currenciesState} />

      <Form
        defaultValues={{ currency: "" }}
        onSubmit={onSubmitCurrency}
        resetOnSuccessfulSubmit
        key={formKeyCurrency}

      >
        <IdField />
        <CurrencyCodeField
          label="Currency field"
          name="currency"
          placeholder="Select a currency"
          required
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
