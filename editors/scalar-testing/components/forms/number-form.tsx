import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  NumberField,
} from "@powerhousedao/design-system/scalars";
import {
  AddNumberInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface NumberFormProps {
  readonly onAddNumber: (data: AddNumberInput) => void;
  readonly numbersState: ScalarTestingState["numbers"];
}

export function NumberForm({ onAddNumber, numbersState }: NumberFormProps) {
  const onSubmit = useCallback((data: AddNumberInput) => {
    onAddNumber(data);
  }, []);

  return (
    <FormWrapper title="Add Number">
      <State state={numbersState} />
      <Form
        defaultValues={{
          integer: 0,
          float: 0,
          bigInt: 0,
        }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <NumberField label="Integer" name="integer" />
        <NumberField label="Float" name="float" numericType="Float" />
        {/* TODO: BigInt is not supported yet */}
        <NumberField label="BigInt" name="bigInt" />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
