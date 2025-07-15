import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  EmailField,
} from "@powerhousedao/document-engineering/scalars";
import {
  type AddEmailInput,
  type ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

interface EmailFormProps {
  readonly onAddEmail: (data: AddEmailInput) => void;
  readonly emailsState: ScalarTestingState["emails"];
}

export function EmailForm({ onAddEmail, emailsState }: EmailFormProps) {
  const onSubmit = useCallback((data: AddEmailInput) => {
    onAddEmail(data);
  }, [onAddEmail]);

  const onSubmitSimple = useCallback((data: AddEmailInput) => {
    onAddEmail(data);
  }, [onAddEmail]);

  return (
    <FormWrapper title="Add Email">
      <State state={emailsState} />
    
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Email with Confirmation</h3>
        <Form
          defaultValues={{ email: "", confirmEmail: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <EmailField label="Email Address" name="email" placeholder="Enter your email" />
          <EmailField label="Confirm Email" name="confirmEmail" placeholder="Confirm your email" matchFieldName="email" />
          <Button className="w-full mt-2" size="small">
            Add Email with Confirmation
          </Button>
        </Form>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Simple Email Field</h3>
        <Form
          defaultValues={{ otherEmail: "" }}
          onSubmit={onSubmitSimple}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <EmailField
            label="Email field"
            name="otherEmail"
            required
            minLength={15}
          />
          <Button className="w-full mt-2" size="small">
            Add Simple Email
          </Button>
        </Form>
      </div>
    </FormWrapper>
  );
}
