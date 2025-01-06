import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  CurrencyCodeField,
} from "@powerhousedao/design-system/scalars";
import {
  AddCurrencyInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface CurrencyFormProps {
  readonly onAddCurrency: (data: AddCurrencyInput) => void;
  readonly currenciesState: ScalarTestingState["currency"];
}

export function CurrencyForm({
  onAddCurrency,
  currenciesState,
}: CurrencyFormProps) {
  const onSubmit = useCallback((data: AddCurrencyInput) => {
    onAddCurrency(data);
  }, []);

  return (
    <FormWrapper title="Add Currency">
      <State state={currenciesState} />

      <Form
        defaultValues={{ currency: "" }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <CurrencyCodeField label="Currency field" name="currency" required />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
