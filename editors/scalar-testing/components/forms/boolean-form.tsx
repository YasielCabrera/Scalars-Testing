import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  BooleanField,
} from "@powerhousedao/design-system/scalars";
import {
  AddBooleanInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface BooleanFormProps {
  readonly onAddBoolean: (data: AddBooleanInput) => void;
  readonly booleansState: ScalarTestingState["booleans"];
}

export function BooleanForm({ onAddBoolean, booleansState }: BooleanFormProps) {
  const onSubmit = useCallback((data: AddBooleanInput) => {
    onAddBoolean(data);
  }, []);

  return (
    <FormWrapper title="Add Boolean">
      <State state={booleansState} />

      <Form
        className="flex flex-row gap-2 items-center"
        defaultValues={{ boolean: false }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <BooleanField label="Boolean field" name="boolean" />
        <Button size="small">Add</Button>
      </Form>
    </FormWrapper>
  );
}
