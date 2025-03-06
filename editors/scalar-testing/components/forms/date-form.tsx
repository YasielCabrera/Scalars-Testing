import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  DatePickerField,
} from "@powerhousedao/design-system/scalars";
import {
  AddDateInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface DateFormProps {
  readonly onAddDate: (data: AddDateInput) => void;
  readonly datesState: ScalarTestingState["date"];
}

export function DateForm({ onAddDate, datesState }: DateFormProps) {
  const onSubmit = useCallback((data: AddDateInput) => {
    onAddDate(data);
  }, []);

  return (
    <FormWrapper title="Add Date">
      <State state={datesState} />

      <Form
        defaultValues={{ date: "" }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <DatePickerField
          label="Date field"
          name="date"
          placeholder="Select a date"
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
