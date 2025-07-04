import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  StringField,
} from "@powerhousedao/document-engineering/scalars";
import {
  type AddStringInput,
  type ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

interface StringFormProps {
  readonly onAddString: (data: AddStringInput) => void;
  readonly stringsState: ScalarTestingState["strings"];
}

export function StringForm({ onAddString, stringsState }: StringFormProps) {
  const onSubmit = useCallback((data: AddStringInput) => {
    onAddString(data);
  }, []);

  return (
    <FormWrapper title="Add String">
      <State state={stringsState} />

      <div className="flex flex-col gap-4">
        <Form
          defaultValues={{ string: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <StringField
            label="Single line String field"
            name="string"
            required
          />
          <Button className="w-full mt-2" size="small">
            Add
          </Button>
        </Form>

        <Form
          defaultValues={{ string: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <StringField
            label="Multi-line String field"
            multiline
            name="string"
            required
          />
          <Button className="w-full mt-2" size="small">
            Add
          </Button>
        </Form>
      </div>
    </FormWrapper>
  );
}
