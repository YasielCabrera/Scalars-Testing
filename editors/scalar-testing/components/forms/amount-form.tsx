import { Button } from "@powerhousedao/design-system";
import type {
  AddAmountInput,
  AddAmountCryptoInput,
  AddAmountCurrencyInput,
  AddAmountFiatInput,
  AddAmountPercentageInput,
  AddBooleanInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import { Form, IdField, AmountField } from "@powerhousedao/document-engineering/scalars";

interface AmountFormProps {
  readonly amountState: ScalarTestingState["amount"];
  onAddAmount: (data: AddAmountInput) => void;
  readonly amountPercentageState: ScalarTestingState["amountPercentage"];
  onAddAmountPercentage: (data: AddAmountPercentageInput) => void;
  readonly amountFiatState: ScalarTestingState["amountFiat"];
  onAddAmountFiat: (data: AddAmountFiatInput) => void;
  readonly amountCryptoState: ScalarTestingState["amountCrypto"];
  onAddAmountCrypto: (data: AddAmountCryptoInput) => void;
  readonly amountCurrencyState: ScalarTestingState["amountCurrency"];
  onAddAmountCurrency: (data: AddAmountCurrencyInput) => void;
}

export function AmountForm({
  amountState,
  amountPercentageState,
  onAddAmount,
  onAddAmountPercentage,
  amountFiatState,
  onAddAmountFiat,
  amountCryptoState,
  onAddAmountCrypto,
  amountCurrencyState,
  onAddAmountCurrency,
}: AmountFormProps) {
  const onAmountSubmit = useCallback((data: AddAmountInput) => {
    onAddAmount(data);
  }, []);

  const onPercentageSubmit = useCallback((data: AddAmountPercentageInput) => {
    onAddAmountPercentage(data);
  }, []);

  const onFiatSubmit = useCallback((data: AddAmountFiatInput) => {
    onAddAmountFiat(data);
  }, []);

  const onCryptoSubmit = useCallback((data: AddAmountCryptoInput) => {
    onAddAmountCrypto(data);
  }, []);

  const onCurrencySubmit = useCallback((data: AddAmountCurrencyInput) => {
    onAddAmountCurrency(data);
  }, []);



  return (
    <FormWrapper title="Add Amount">
      <State
        state={{
          amount: amountState,
          amountPercentage: amountPercentageState,
          amountFiat: amountFiatState,
          amountCrypto: amountCryptoState,
          amountCurrency: amountCurrencyState,

        }}
      />

      <Form
        className="flex flex-row gap-2 items-end mt-4"
        onSubmit={onAmountSubmit}
        resetOnSuccessfulSubmit
        defaultValues={{ value: {
          value: 0,
        }}}
        
      >
        <IdField />
      
        <AmountField
          label="Amount"
          name="value"
          type="Amount"
        />

        <Button size="small">Add</Button>
      </Form>


      <Form
        className="flex flex-row gap-2 items-end mt-4"
        onSubmit={onPercentageSubmit}
        resetOnSuccessfulSubmit
        defaultValues={{ value: 0 }}
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
        key="fiat"
        className="flex flex-row gap-2 items-end mt-4"
        onSubmit={onFiatSubmit}
        resetOnSuccessfulSubmit
        defaultValues={{ value: { unit: "", value: 0 } }}
      >
        <IdField />
        <AmountField
          label="Amount Fiat"
          name="value"
          type="AmountFiat"
          placeholderSelect="CUR"
        />
        <Button size="small">Add</Button>
      </Form>
      <Form
        className="flex flex-row gap-2 items-end mt-4"
        onSubmit={onCryptoSubmit}
        resetOnSuccessfulSubmit
        defaultValues={{ value: { value: 0 } }}
      >
        <IdField />
        <AmountField
          label="Amount Token (Crypto)"
          name="value"
          type="AmountFiat"
          placeholderSelect="CUR"
          required
        />
        <Button size="small">Add</Button>
      </Form>
      <Form
        className="flex flex-row gap-2 items-end mt-4"
        onSubmit={onCurrencySubmit}
        resetOnSuccessfulSubmit
        defaultValues={{ value: { unit: "", value: 0 } }}
      >
        <IdField />
        <AmountField
          label="Amount Currency"
          name="value"
          type="AmountCurrency"
          placeholderSelect="CUR"
        />
        <Button size="small">Add</Button>
      </Form> 


    </FormWrapper>
  );
}
