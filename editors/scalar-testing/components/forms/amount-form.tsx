import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  AmountField,
} from "@powerhousedao/design-system/scalars";
import type {
  AddBooleanInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

interface AmountFormProps {
  readonly amountMoneyState: ScalarTestingState["amount"];
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
          amount: amountMoneyState,
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
          type="AmountFiat"
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
          type="AmountCrypto"
        />
        <Button size="small">Add</Button>
      </Form>
    </FormWrapper>
  );
}
