import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  DateTimePickerField,
} from "@powerhousedao/document-engineering/scalars";
import type {
  AddDateTimeInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback, useState } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import { useFormReset } from "../../hooks/use-form-reset.js";

interface DateTimeFormProps {
  readonly onAddDateTime: (data: AddDateTimeInput) => void;
  readonly dateTimesState: ScalarTestingState["datetime"];
}

export function DateTimeForm({
  onAddDateTime,
  dateTimesState,
}: DateTimeFormProps) {
  const { formKey: formKeyDateTime, onSubmit: onSubmitDateTime } = useFormReset<AddDateTimeInput>({
    onSubmitCallback: onAddDateTime,
    resetOnSuccessfulSubmit: true,
    formId: 'date-time'
  });

  return (
    <FormWrapper title="Add DateTime">
      <State state={dateTimesState} />

      <Form
        key={formKeyDateTime}
        defaultValues={{ datetime: "" }}
        onSubmit={onSubmitDateTime}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <DateTimePickerField
          key={formKeyDateTime}
          label="Date time field"
          name="datetime"
          placeholder="Select a date time"
          autoClose
          dateFormat="MM/YYYY"
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
