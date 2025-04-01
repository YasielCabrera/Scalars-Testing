import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  DateTimePickerField,
} from "@powerhousedao/design-system/scalars";
import type {
  AddDateTimeInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback, useState } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

interface DateTimeFormProps {
  readonly onAddDateTime: (data: AddDateTimeInput) => void;
  readonly dateTimesState: ScalarTestingState["datetime"];
}

export function DateTimeForm({
  onAddDateTime,
  dateTimesState,
}: DateTimeFormProps) {
  const [formKey, setFormKey] = useState(0);
  const onSubmit = useCallback((data: AddDateTimeInput) => {
    onAddDateTime(data);
    setFormKey((prev) => prev + 1);
  }, []);

  return (
    <FormWrapper title="Add DateTime">
      <State state={dateTimesState} />

      <Form
        key={formKey}
        defaultValues={{ datetime: "" }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <DateTimePickerField
          key={formKey}
          label="Date time field"
          name="datetime"
          placeholder="Select a date time"
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
