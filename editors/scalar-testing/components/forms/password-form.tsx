import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  PasswordField,
} from "@powerhousedao/document-engineering/scalars";
import {
  type AddPasswordInput,
  type ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

interface PasswordFormProps {
  readonly onAddPassword: (data: AddPasswordInput) => void;
  readonly passwordsState: ScalarTestingState["passwords"];
}

export function PasswordForm({ onAddPassword, passwordsState }: PasswordFormProps) {
  const onSubmit = useCallback((data: AddPasswordInput) => {
    onAddPassword(data);
  }, [onAddPassword]);

  const onSubmitConfirmation = useCallback((data: AddPasswordInput) => {
    onAddPassword(data);
  }, [onAddPassword]);

  return (
    <FormWrapper title="Add Password">
      <State state={passwordsState} />

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Password field</h3>
        <Form
          defaultValues={{ password: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <PasswordField
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button className="w-full mt-2" size="small">Add</Button>
        </Form>
      </div>
    
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Password field with confirmation</h3>
        <Form
          defaultValues={{ password: "", confirmPassword: "" }}
          onSubmit={onSubmitConfirmation}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <PasswordField
            name="password"
            label="Password"
            placeholder="Enter your password"
            required
            requireUppercase={false}
            requireLowercase={false}
            requireNumbers={false}
            requireSpecialCharacters={false}
          />
          <div className="mt-2">
            <PasswordField
              name="confirmPassword"
              label="Confirm password"
              placeholder="Confirm your password"
              matchFieldName="password"
              required
              requireUppercase={false}
              requireLowercase={false}
              requireNumbers={false}
              requireSpecialCharacters={false}
              showPasswordStrength={false}
            />
          </div>
          <Button className="w-full mt-2" size="small">Add</Button>
        </Form>
      </div>
    </FormWrapper>
  );
}
