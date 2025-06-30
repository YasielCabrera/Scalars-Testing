import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  DatePickerField,
} from "@powerhousedao/document-engineering/scalars";
import type {
  AddDateInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback, useState } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

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
          name="date"
          placeholder="Select a date"
          required
          showErrorOnBlur
          autoClose
          dateFormat="YYYY-MM"
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
