import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  TimePickerField,
} from "@powerhousedao/design-system/scalars";
import {
  AddTimeInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface TimeFormProps {
  readonly onAddTime: (data: AddTimeInput) => void;
  readonly timesState: ScalarTestingState["time"];
}

export function TimeForm({ onAddTime, timesState }: TimeFormProps) {
  const onSubmit = useCallback((data: AddTimeInput) => {
    onAddTime(data);
  }, []);

  return (
    <FormWrapper title="Add Time">
      <State state={timesState} />

      <Form
        defaultValues={{ time: "" }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <TimePickerField
          label="Time field"
          name="time"
          placeholder="Select a time"
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
