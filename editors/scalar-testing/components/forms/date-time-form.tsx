import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  DateTimeField,
} from "@powerhousedao/design-system/scalars";
import {
  AddDateTimeInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface DateTimeFormProps {
  readonly onAddDateTime: (data: AddDateTimeInput) => void;
  readonly dateTimesState: ScalarTestingState["datetime"];
}

export function DateTimeForm({
  onAddDateTime,
  dateTimesState,
}: DateTimeFormProps) {
  const onSubmit = useCallback((data: AddDateTimeInput) => {
    onAddDateTime(data);
  }, []);

  return (
    <FormWrapper title="Add DateTime">
      <State state={dateTimesState} />

      <Form
        defaultValues={{ datetime: "" }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <DateTimeField
          label="Date time field"
          name="datetime"
          placeholder="Select a date time"
          showDateSelect
          showTimeSelect
        />

        <Button className="mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
