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
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import { useFormReset } from "../../hooks/use-form-reset.js";

interface EmailFormProps {
  readonly onAddEmail: (data: AddEmailInput) => void;
  readonly emailsState: ScalarTestingState["emails"];
}

export function EmailForm({ onAddEmail, emailsState }: EmailFormProps) {
  const { formKey, onSubmit } = useFormReset<AddEmailInput>({
    onSubmitCallback: onAddEmail,
    resetOnSuccessfulSubmit: true,
  });

  return (
    <FormWrapper title="Add Email">
      <State state={emailsState} />
        <Form
          key={formKey}
          defaultValues={{ email: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <EmailField
            label="Email field"
            name="email"
            required
          />
          <Button className="w-full mt-2" size="small">
            Add
          </Button>
        </Form>


    </FormWrapper>
  );
}
