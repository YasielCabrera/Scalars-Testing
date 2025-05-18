import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  BooleanField,
} from "@powerhousedao/document-engineering/scalars";
import type {
  AddBooleanInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

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
