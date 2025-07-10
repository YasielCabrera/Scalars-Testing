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
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import { useFormReset } from "../../hooks/use-form-reset.js";


interface BooleanFormProps {
  readonly onAddBoolean: (data: AddBooleanInput) => void;
  readonly booleansState: ScalarTestingState["booleans"];
}

export function BooleanForm({ onAddBoolean, booleansState }: BooleanFormProps) {
  const { formKey: formKeyBoolean, onSubmit: onSubmitBoolean } = useFormReset<AddBooleanInput>({
    onSubmitCallback: onAddBoolean,
    resetOnSuccessfulSubmit: true,
    formId: 'boolean'
  });

  return (
    <FormWrapper title="Add Boolean">
      <State state={booleansState} />

      <Form
        className="flex flex-row gap-2 items-center"
        defaultValues={{ boolean: false }}
        onSubmit={onSubmitBoolean}
        resetOnSuccessfulSubmit
        key={formKeyBoolean}
      >
        <IdField />
        <BooleanField label="Boolean field" name="boolean" />
        <Button size="small">Add</Button>
      </Form>
    </FormWrapper>
  );
}
