import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  AmountField,
} from "@powerhousedao/design-system/scalars";
import {
  AddBooleanInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface AmountFormProps {
  readonly amountMoneyState: ScalarTestingState["amountMoney"];
  readonly amountPercentageState: ScalarTestingState["amountPercentage"];
  readonly amountTokensState: ScalarTestingState["amountTokens"];
}

export function AmountForm({
  amountMoneyState,
  amountPercentageState,
  amountTokensState,
}: AmountFormProps) {
  const onMoneySubmit = useCallback((data: AddBooleanInput) => {
    // implement this
  }, []);

  const onPercentageSubmit = useCallback((data: AddBooleanInput) => {
    // implement this
  }, []);

  const onTokensSubmit = useCallback((data: AddBooleanInput) => {
    // implement this
  }, []);

  return (
    <FormWrapper title="Add Amount">
      <State
        state={{
          amountMoney: amountMoneyState,
          amountPercentage: amountPercentageState,
          amountTokens: amountTokensState,
        }}
      />

      <Form
        className="flex flex-row gap-2 items-center"
        onSubmit={onMoneySubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <AmountField
          allowedCurrencies={["USD", "EUR", "GBP", "JPY"]}
          label="Amount Money"
          name="value"
          type="AmountCurrencyFiat"
        />
        <Button size="small">Add</Button>
      </Form>

      <Form
        className="flex flex-row gap-2 items-center"
        onSubmit={onPercentageSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <AmountField
          label="Amount Percentage"
          name="value"
          type="AmountPercentage"
        />
        <Button size="small">Add</Button>
      </Form>

      <Form
        className="flex flex-row gap-2 items-center"
        onSubmit={onTokensSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <AmountField
          label="Amount Tokens (Crypto)"
          name="value"
          type="AmountCurrencyCrypto"
        />
        <Button size="small">Add</Button>
      </Form>
    </FormWrapper>
  );
}
