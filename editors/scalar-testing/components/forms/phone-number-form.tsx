import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  PhoneNumberField,
} from "@powerhousedao/document-engineering/scalars";
import {
  type AddPhoneNumberInput,
  type ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

interface PhoneNumberFormProps {
  readonly onAddPhoneNumber: (data: AddPhoneNumberInput) => void;
  readonly phoneNumbersState: ScalarTestingState["phones"];
}

export function PhoneNumberForm({ onAddPhoneNumber, phoneNumbersState }: PhoneNumberFormProps) {
  const onSubmit = useCallback((data: AddPhoneNumberInput) => {
    onAddPhoneNumber(data);
  }, [onAddPhoneNumber]);

  return (
    <FormWrapper title="Add Phone Number">
      <State state={phoneNumbersState} />

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Phone number field</h3>
        <Form
          defaultValues={{ phone: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <PhoneNumberField
            name="phone"
            label="Phone number"
          />
          <Button className="w-full mt-2" size="small">Add</Button>
        </Form>
      </div>
    </FormWrapper>
  );
}
