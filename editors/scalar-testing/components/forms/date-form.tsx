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
import { useCallback, useState } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface DateFormProps {
  readonly onAddDate: (data: AddDateInput) => void;
  readonly datesState: ScalarTestingState["date"];
}

export function DateForm({ onAddDate, datesState }: DateFormProps) {
  const [formKey, setFormKey] = useState(0);
  const onSubmit = useCallback(
    (data: AddDateInput) => {
      onAddDate(data);
      setFormKey((prev) => prev + 1);
    },
    [onAddDate],
  );

  return (
    <FormWrapper title="Add Date">
      <State state={datesState} />

      <Form
        defaultValues={{ date: "" }}
        key={formKey}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <DatePickerField
          label="Date field"
          minDate={new Date().toISOString()}
          name="date"
          placeholder="Select a date"
          required
          showErrorOnBlur
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
