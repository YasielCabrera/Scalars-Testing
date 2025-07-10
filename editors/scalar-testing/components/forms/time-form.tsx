import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  TimePickerField,
} from "@powerhousedao/document-engineering/scalars";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import type {
  AddTimeInput,
  ScalarTestingState,
} from "../../../../document-models/scalar-testing/index.js";
import { useFormReset } from "../../hooks/use-form-reset.js";

interface TimeFormProps {
  readonly onAddTime: (data: AddTimeInput) => void;
  readonly timesState: ScalarTestingState["time"];
}

export function TimeForm({ onAddTime, timesState }: TimeFormProps) {
  const { formKey: formKeyTime, onSubmit: onSubmitTime } = useFormReset<AddTimeInput>({
    onSubmitCallback: onAddTime,
    resetOnSuccessfulSubmit: true,
    formId: 'time'
  });

  return (
    <FormWrapper title="Add Time">
      <State state={timesState} />

      <Form
        defaultValues={{ time: "" }}
        key={formKeyTime}
        onSubmit={onSubmitTime}
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
