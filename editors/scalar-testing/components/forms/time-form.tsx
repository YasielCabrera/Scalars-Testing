import { Button } from "@powerhousedao/design-system";
import {
  cn,
  Form,
  IdField,
  TimePickerField,
} from "@powerhousedao/document-engineering/scalars";
import { useCallback, useState } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import type {
  AddTimeInput,
  ScalarTestingState,
} from "../../../../document-models/scalar-testing/index.js";

interface TimeFormProps {
  readonly onAddTime: (data: AddTimeInput) => void;
  readonly timesState: ScalarTestingState["time"];
}

export function TimeForm({ onAddTime, timesState }: TimeFormProps) {
  const [formKey, setFormKey] = useState(0);
  const onSubmit = useCallback((data: AddTimeInput) => {
    onAddTime(data);
    setFormKey((prev) => prev + 1);
  }, []);

  return (
    <FormWrapper title="Add Time">
      <State state={timesState} />

      <Form
        defaultValues={{ time: "" }}
        key={formKey}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
  
        <TimePickerField
          label="Time field"
          name="time"
          placeholder="Select a time"
          timeFormat="hh:mm a"
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
