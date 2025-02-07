import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  DatePickerField,
} from "@powerhousedao/design-system/scalars";
import {
  AddDatePickerValueInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface DatePickerFormProps {
  readonly dateState: ScalarTestingState["date"];
  readonly onAddDate: (data: AddDatePickerValueInput) => void;
}

export function DatePickerForm({ dateState, onAddDate }: DatePickerFormProps) {
  const onDateSubmit = useCallback((data: AddDatePickerValueInput) => {
    console.log(data);
    onAddDate(data);
  }, []);

  return (
    <FormWrapper title="Add Date">
      <State
        state={{
          date: dateState,
        }}
      />

      <Form
        className="flex flex-row gap-2 items-center"
        onSubmit={onDateSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <DatePickerField label="Date" name="date" />
        <Button size="small">Add</Button>
      </Form>
    </FormWrapper>
  );
}
